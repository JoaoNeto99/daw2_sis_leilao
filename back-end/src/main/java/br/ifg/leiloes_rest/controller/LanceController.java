package br.ifg.leiloes_rest.controller;

import br.ifg.leiloes_rest.controller.dto.LanceDto;
import br.ifg.leiloes_rest.model.Enuns.Messages;
import br.ifg.leiloes_rest.model.Lance;
import br.ifg.leiloes_rest.security.TokenService;
import br.ifg.leiloes_rest.service.LanceService;
import br.ifg.leiloes_rest.service.LeilaoService;
import br.ifg.leiloes_rest.service.UsuarioService;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

@RestController
@RequestMapping(value = "/lance")
@CrossOrigin(origins="*")
public class LanceController {

    @Autowired
    private LanceService lanceService;

    @Autowired
    private LeilaoService leilaoService;

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private TokenService tokenService;


    @GetMapping("/{id}")
    public List<LanceDto> findOne(@PathVariable(value="id") long id) {
        List<Lance> listLance =  lanceService.findByLeilao(id);
        List<LanceDto> listLanceDTO = new ArrayList<>();

        for(Lance lance : listLance){
            listLanceDTO.add(new LanceDto(
                    lance.getId(),
                    lance.getValor(),
                    lance.getLeilao().getId(),
                    lance.getUsuario().getId(),
                    lance.getUsuario().getNome()
            ));
        }

        return listLanceDTO;
    }

    @PostMapping
    public ResponseEntity<Messages> save(@Valid @RequestBody LanceDto lanceDto){
        Lance lance = lanceDto.converter(leilaoService,usuarioService, tokenService);

        Messages result = lanceService.fazLance(lance);

        if(!result.equals(Messages.SUCESSO)){
            return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

}
