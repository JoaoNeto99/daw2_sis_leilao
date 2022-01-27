package br.ifg.leiloes_rest.security;

import br.ifg.leiloes_rest.model.Role;
import br.ifg.leiloes_rest.model.Usuario;
import br.ifg.leiloes_rest.repository.UsuarioRepository;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

public class AuthTokenFilter extends OncePerRequestFilter {
    private TokenService tokenService;
    private UsuarioRepository userRepository;

    public AuthTokenFilter(TokenService tokenService, UsuarioRepository userRepository) {
        this.tokenService = tokenService;
        this.userRepository = userRepository;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String token = recuperarToken(request);
        boolean valido = tokenService.isTokenValid(token);

        if(valido) {
            autenticarCliente(token, request);
        }

        filterChain.doFilter(request, response);
    }

    private void autenticarCliente(String token, HttpServletRequest request) {
        Long idUsuario = tokenService.getIdUser(token);
        Usuario user = userRepository.findById(idUsuario).get();
        //List<Role> roles = (List<Role>) user.getAuthorities();
        //System.out.println("roles: " + roles.get(0).getNomeRole());
        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
                user, null, user.getAuthorities());


        SecurityContextHolder.getContext().setAuthentication(authentication);
    }

    private String recuperarToken(HttpServletRequest request) {
        String token = request.getHeader("Authorization");
        if(token == null || token.isEmpty() || !token.startsWith("Bearer ")){
            return null;
        }

        return token.substring(7, token.length());

    }
}
