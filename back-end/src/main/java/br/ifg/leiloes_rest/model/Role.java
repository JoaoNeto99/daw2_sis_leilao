package br.ifg.leiloes_rest.model;

import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="roles")
public class Role implements GrantedAuthority{

    private static final long serialVersionUID = 1L;

    @Id
    private String  nomeRole;

    public String getNomeRole() {
        return nomeRole;
    }

    public void setNomeRole(String nomeRole) {
        this.nomeRole = nomeRole;
    }

    @Override
    public String getAuthority() {
        return this.nomeRole;
    }
}
