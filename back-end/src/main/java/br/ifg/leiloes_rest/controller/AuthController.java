package br.ifg.leiloes_rest.controller;

import br.ifg.leiloes_rest.controller.dto.TokenDto;
import br.ifg.leiloes_rest.model.Role;
import br.ifg.leiloes_rest.model.UserAuth;
import br.ifg.leiloes_rest.security.TokenService;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.logging.Logger;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenService tokenService;

    @PostMapping
    public ResponseEntity<TokenDto> autenticar(@RequestBody @Valid UserAuth userAuth) {
        UsernamePasswordAuthenticationToken dadosLogin = userAuth.convert();
        try {
            Authentication authentication = authenticationManager.authenticate(dadosLogin);

            List<Role> roles = (List<Role>) authentication.getAuthorities();
            //System.out.println("roles: " + roles.get(0).getNomeRole());

            String token = tokenService.gerarToken(authentication);
            //System.out.println(token);
            return ResponseEntity.ok(new TokenDto(token, "Bearer", roles.get(0).getNomeRole().substring(5)));
        } catch (AuthenticationException e){
            return ResponseEntity.badRequest().build();
        }
    }
}
