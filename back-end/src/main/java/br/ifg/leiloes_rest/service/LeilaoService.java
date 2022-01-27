package br.ifg.leiloes_rest.service;

import br.ifg.leiloes_rest.model.Leilao;
import br.ifg.leiloes_rest.model.Enuns.Messages;

import java.util.ArrayList;
import java.util.List;

public interface LeilaoService {
    Leilao save(Leilao leilao);
    List<Leilao> findAll();
    Leilao findOneById(Long id);
    Leilao update(Leilao leilao);
    Messages delete(long id);
    List<Leilao> findLeilaoAbertos();
    ArrayList<Leilao> expiraComData();
    Messages finalizaLeilao(long id);
    Leilao abreLeilao(long id);
}
