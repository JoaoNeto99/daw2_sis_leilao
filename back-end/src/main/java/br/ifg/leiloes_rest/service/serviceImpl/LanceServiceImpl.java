package br.ifg.leiloes_rest.service.serviceImpl;

import br.ifg.leiloes_rest.model.Enuns.Messages;
import br.ifg.leiloes_rest.model.Lance;
import br.ifg.leiloes_rest.model.Leilao;
import br.ifg.leiloes_rest.repository.LanceRepository;
import br.ifg.leiloes_rest.service.LanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LanceServiceImpl implements LanceService {

    @Autowired
    private LanceRepository lanceRepository;

    @Override
    public Lance save(Lance lance) {
        return lanceRepository.save(lance);
    }

    @Override
    public List<Lance> findByLeilao(long idLeilao) {
        return lanceRepository.findByLeilao(idLeilao);
    }

    public Messages fazLance(Lance lance) {
        Leilao leilao = lance.getLeilao();
        if(lanceNaoPodeSerMenorQueValorLeilao(leilao, lance)) {
            if(umNovoLanceNaoPodeSerIgualOuMenorAoUltimoLance(leilao, lance)) {
                if (umParticipanteNaoPodeFazerLanceSeguidos(leilao, lance)) {
                    save(lance);
                }  else { return Messages.ERROR03_NAO_E_PERMITIDO_FAZER_DOIS_LANCES_SEGUIDOS; }
            } else { return Messages.ERROR02_LANCE_NAO_PODE_SER_MENOR_QUE_ULTIMO_LANCE; }
        } else { return Messages.ERROR01_LANCE_MENOR_QUE_VALOR_MINIMO_DE_LEILAO; }
        return Messages.SUCESSO;
    }

    private boolean lanceNaoPodeSerMenorQueValorLeilao(Leilao leilao, Lance lance){ //8
        boolean aprovou = false;
        if(leilao.getLanceMinimo().compareTo(lance.getValor()) < 0 ){
            aprovou = true;
        }
        return aprovou;
    }

    private boolean umNovoLanceNaoPodeSerIgualOuMenorAoUltimoLance(Leilao leilao, Lance lance) { //09
        Lance ultimoLance = lanceRepository.findUltimoLancesDeUmLeilao(leilao.getId());
        boolean aprovou = false;

        if(ultimoLance == null){
            aprovou = true;
        } else if(lance.getValor().compareTo(ultimoLance.getValor()) > 0){
            aprovou = true;
        }
        return aprovou;
    }

    private boolean umParticipanteNaoPodeFazerLanceSeguidos(Leilao leilao, Lance lance) { //10
        Lance ultimoLance = lanceRepository.findUltimoLancesDeUmLeilao(leilao.getId());
        boolean aprovou = false;
        if(ultimoLance == null){
            aprovou = true;
        }else if(!ultimoLance.getUsuario().getEmail().equals(lance.getUsuario().getEmail())){
            aprovou = true;
        }
        return aprovou;
    }
}
