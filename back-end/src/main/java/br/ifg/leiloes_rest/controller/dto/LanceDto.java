package br.ifg.leiloes_rest.controller.dto;

import br.ifg.leiloes_rest.model.Lance;
import br.ifg.leiloes_rest.model.Leilao;
import br.ifg.leiloes_rest.model.Usuario;
import br.ifg.leiloes_rest.security.TokenService;
import br.ifg.leiloes_rest.service.LeilaoService;
import br.ifg.leiloes_rest.service.UsuarioService;


import java.math.BigDecimal;

public class LanceDto {

    private Long lance_id;

    private Long leilao_id;

    private BigDecimal valor;

    private Long usuario_id;

    private String proponente;

    private String token;

    public LanceDto(Long lance_id, BigDecimal valor, Long leilao_id, Long usuario_id, String proponente) {
        this.lance_id = lance_id;
        this.valor = valor;
        this.leilao_id = leilao_id;
        this.usuario_id = usuario_id;
        this.proponente = proponente;
    }

    public LanceDto(Long lance_id, Long leilao_id, BigDecimal valor, Long usuario_id, String proponente, String token) {
        this.lance_id = lance_id;
        this.leilao_id = leilao_id;
        this.valor = valor;
        this.usuario_id = usuario_id;
        this.proponente = proponente;
        this.token = token;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public LanceDto() {
    }

    public Long getLance_id() {
        return lance_id;
    }

    public void setLance_id(Long lance_id) {
        this.lance_id = lance_id;
    }

    public Long getLeilao_id() {
        return leilao_id;
    }

    public void setLeilao_id(Long leilao_id) {
        this.leilao_id = leilao_id;
    }

    public BigDecimal getValor() {
        return valor;
    }

    public void setValor(BigDecimal valor) {
        this.valor = valor;
    }

    public Long getUsuario_id() {
        return usuario_id;
    }

    public void setUsuario_id(Long usuario_id) {
        this.usuario_id = usuario_id;
    }

    public String getProponente() {
        return proponente;
    }

    public void setProponente(String proponente) {
        this.proponente = proponente;
    }

    public Lance converter(LeilaoService leilaoService, UsuarioService usuarioService, TokenService tokenService) {
        if(this.token != null) {
            this.usuario_id = tokenService.getIdUser(this.token);
        }

        Leilao leilao = leilaoService.findOneById(leilao_id);
        Usuario usuario = usuarioService.findOneById(usuario_id);
        return new Lance(leilao, this.valor, usuario);
    }

    @Override
    public String toString() {
        return "LanceDto{" +
                "lance_id=" + lance_id +
                ", leilao_id=" + leilao_id +
                ", valor=" + valor +
                ", usuario_id=" + usuario_id +
                ", proponente='" + proponente + '\'' +
                ", token='" + token + '\'' +
                '}';
    }
}
