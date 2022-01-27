package br.ifg.leiloes_rest.model;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

public class UserAuth {
    private String email;
    private String senha;

    public String getEmail() {
        return email;
    }

    public String getSenha() {
        return senha;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public UsernamePasswordAuthenticationToken convert(){
        return new UsernamePasswordAuthenticationToken(email, senha);
    }
}
