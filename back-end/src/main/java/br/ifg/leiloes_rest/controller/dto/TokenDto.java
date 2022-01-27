package br.ifg.leiloes_rest.controller.dto;

public class TokenDto {
    private String token;
    private String tipo;
    private String role;

    public TokenDto(String token, String tipo) {
        this.token = token;
        this.tipo = tipo;
    }

    public TokenDto(String token, String tipo, String role) {
        this.token = token;
        this.tipo = tipo;
        this.role = role;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
