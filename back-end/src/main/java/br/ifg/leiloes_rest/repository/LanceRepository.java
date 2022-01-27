package br.ifg.leiloes_rest.repository;

import br.ifg.leiloes_rest.model.Lance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface LanceRepository extends JpaRepository<Lance, Long> {

    @Query(value = "SELECT * FROM lances l WHERE l.leilao_id = ?1", nativeQuery = true)
    public List<Lance> findByLeilao(long id);

    @Query(value = "select * from lances where leilao_id = ?1 order by id desc limit 1;" , nativeQuery = true)
    public Lance findUltimoLancesDeUmLeilao(long leilao_id);

    @Modifying
    @Query(value = "delete from lances where id = ?1", nativeQuery = true)
    @Transactional
    void excluiLancePorId(long id);

}
