package br.ifg.leiloes_rest.service;

import br.ifg.leiloes_rest.model.Enuns.Messages;
import br.ifg.leiloes_rest.model.Lance;

import java.util.List;

public interface LanceService {
    Lance save(Lance lance);
    List<Lance> findByLeilao(long idLeilao);
    Messages fazLance(Lance lance);
}
