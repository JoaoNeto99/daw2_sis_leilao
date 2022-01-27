package br.ifg.leiloes_rest.repository;

import br.ifg.leiloes_rest.model.Leilao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface LeilaoRepository extends JpaRepository<Leilao, Long> {

    @Query(value = "SELECT * FROM leiloes l WHERE l.status = 0", nativeQuery = true)
    public List<Leilao> findLeilaoAbertos();
}
