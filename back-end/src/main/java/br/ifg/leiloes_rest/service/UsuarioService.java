package br.ifg.leiloes_rest.service;

import br.ifg.leiloes_rest.model.Usuario;

public interface UsuarioService {
    Usuario findOneById(Long id);
    Usuario save(Usuario usuario);
    Usuario giveUserPermission(Usuario usuario);
}
