package br.ifg.leiloes_rest.repository;

import br.ifg.leiloes_rest.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface RolesRepository extends JpaRepository<Role, Long> {

    @Modifying
    @Query(value = "insert into roles(nome_role) values('ROLE_USER')", nativeQuery = true)
    @Transactional
    void addRoleUser();

    @Modifying
    @Query(value = "insert into roles(nome_role) values('ROLE_ADMIN')", nativeQuery = true)
    @Transactional
    void addRoleAdm();

    @Modifying
    @Query(value = "insert into usuarios_roles(usuario_id, roles_nome_role) values(?1,'ROLE_ADMIN')", nativeQuery = true)
    @Transactional
    void addADM(long id);
}
