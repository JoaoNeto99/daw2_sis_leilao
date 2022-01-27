package br.ifg.leiloes_rest.repository;

import br.ifg.leiloes_rest.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    Optional<Usuario> findByEmail(String email);

    @Modifying
    @Query(value = "insert into usuarios_roles(usuario_id, roles_nome_role) values(:usuario_id, 'ROLE_USER')", nativeQuery = true)
    @Transactional
    void giveUserPermission(@Param("usuario_id") long id);
}
