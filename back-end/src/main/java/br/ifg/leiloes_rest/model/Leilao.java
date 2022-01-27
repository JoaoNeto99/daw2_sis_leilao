package br.ifg.leiloes_rest.model;

import br.ifg.leiloes_rest.model.Enuns.LeilaoStatus;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Date;

@Entity
@Table(name="leiloes")
public class Leilao {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotEmpty
    @NotNull
    @NotBlank(message = "Item e obrigatorio")
    private String lote;

    private LeilaoStatus status;

    @NotNull(message = "Lance Minimo e obrigatorio")
    private BigDecimal lanceMinimo;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate dataExpiracao;

    public Leilao() {
    }

    public Leilao(String lote, LeilaoStatus status, BigDecimal lanceMinimo, LocalDate dataExpiracao) {
        this.id = id;
        this.lote = lote;
        this.status = status;
        this.lanceMinimo = lanceMinimo;
        this.dataExpiracao = dataExpiracao;
    }


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getLote() {
        return lote;
    }

    public void setLote(String lote) {
        this.lote = lote;
    }

    public LeilaoStatus getStatus() {
        return status;
    }

    public void setStatus(LeilaoStatus status) {
        this.status = status;
    }

    public BigDecimal getLanceMinimo() {
        return lanceMinimo;
    }

    public void setLanceMinimo(BigDecimal valorLanceMinimo) {
        this.lanceMinimo = valorLanceMinimo;
    }

    public LocalDate getDataExpiracao() {
        return dataExpiracao;
    }

    public void setDataExpiracao(LocalDate dataExpiracao) {
        this.dataExpiracao = dataExpiracao;
    }

    @Override
    public String toString() {
        return "Leilao{" +
                "id=" + id +
                ", item='" + lote + '\'' +
                ", status=" + status +
                ", valorLanceMinimo=" + lanceMinimo +
                ", dataExpiracao=" + dataExpiracao +
                '}';
    }
}

