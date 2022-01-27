package br.ifg.leiloes_rest.service.serviceImpl;

import br.ifg.leiloes_rest.model.Usuario;
import br.ifg.leiloes_rest.repository.UsuarioRepository;
import br.ifg.leiloes_rest.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UsuarioServiceImpl implements UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Override
    public Usuario findOneById(Long id) {
        return usuarioRepository.findById(id).get();
    }

    private Usuario findByEmail(String email) {
        return usuarioRepository.findByEmail(email).get();
    }

    @Override
    public Usuario save(Usuario usuario) {
        usuario.setSenha(new BCryptPasswordEncoder().encode(usuario.getSenha()));
        usuarioRepository.save(usuario);
        return giveUserPermission(usuario);
    }

    @Override
    public Usuario giveUserPermission(Usuario usuario) {
        Usuario usuarioEncontrado = findByEmail(usuario.getEmail());
        usuarioRepository.giveUserPermission(usuarioEncontrado.getId());
        return usuarioEncontrado;
    }
}
