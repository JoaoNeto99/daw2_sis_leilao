package br.ifg.leiloes_rest.controller;

import br.ifg.leiloes_rest.model.Enuns.Messages;
import br.ifg.leiloes_rest.model.Leilao;
import br.ifg.leiloes_rest.service.LeilaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(value = "/leilao")
@CrossOrigin(origins="*")
public class LeilaoController {
    @Autowired
    private LeilaoService leilaoService;

    @GetMapping
    public List<Leilao> findAll() {
        return leilaoService.findAll();
    }

    @GetMapping("/open")
    public List<Leilao> findOpen() {
        return leilaoService.findLeilaoAbertos();
    }

    @GetMapping("/{id}")
    public Leilao findOne(@PathVariable(value="id") long id) {
        return leilaoService.findOneById(id);
    }

    @PostMapping
    public ResponseEntity<Leilao> save(@Valid @RequestBody Leilao leilao){
        Leilao novoLeilao = leilaoService.save(leilao);

        if(novoLeilao == null){
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(novoLeilao, HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<Leilao> alteraLeilao(@Valid @RequestBody Leilao leilao) {
        Leilao leilaoAtualizado = leilaoService.update(leilao);

        if(leilaoAtualizado == null){
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(leilaoAtualizado, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Messages> deleteOne(@PathVariable(value="id") long id) {

        if(!leilaoService.delete(id).equals(Messages.SUCESSO)){
            return new ResponseEntity<>(Messages.Delete_Unsuccefully, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(Messages.Delete_Succefully, HttpStatus.OK);
    }

    @PutMapping("/open")
    public ResponseEntity<Leilao> openLeilao(@RequestBody Leilao leilao) {
        Leilao leilaoAtualizado = leilaoService.abreLeilao(leilao.getId());

        if(leilaoAtualizado == null){
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(leilao, HttpStatus.OK);
    }

    @PutMapping("/close")
    public ResponseEntity<Messages> closeLeilao(@RequestBody Leilao leilao) {
        Messages message = leilaoService.finalizaLeilao(leilao.getId());

        if(!message.equals(Messages.SUCESSO)){
            return new ResponseEntity<>(message, HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(message, HttpStatus.OK);
    }
}
