package br.ifg.leiloes_rest.controller;

import br.ifg.leiloes_rest.model.Leilao;
import br.ifg.leiloes_rest.model.Usuario;
import br.ifg.leiloes_rest.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping(value = "/usuario")
@CrossOrigin(origins="*")
public class UsuarioController {



    @Autowired
    private UsuarioService usuarioService;

    @PostMapping
    public ResponseEntity<Usuario> save(@Valid @RequestBody Usuario usuario){
        Usuario novoUsuario = usuarioService.save(usuario);

        if(novoUsuario == null){
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(novoUsuario, HttpStatus.OK);
    }
}
