package br.ifg.leiloes_rest.service.serviceImpl;

import br.ifg.leiloes_rest.model.Lance;
import br.ifg.leiloes_rest.model.Leilao;
import br.ifg.leiloes_rest.model.Enuns.LeilaoStatus;
import br.ifg.leiloes_rest.model.Enuns.Messages;
import br.ifg.leiloes_rest.repository.LanceRepository;
import br.ifg.leiloes_rest.repository.LeilaoRepository;
import br.ifg.leiloes_rest.service.LeilaoService;
import br.ifg.leiloes_rest.service.emailService.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class LeilaoServiceImpl implements LeilaoService {

    @Autowired
    private LeilaoRepository leilaoRepository;

    @Autowired
    private LanceRepository lanceRepository;

    @Autowired
    private EmailService emailService;


    @Override
    public Leilao save(Leilao leilao) {
        leilao.setStatus(LeilaoStatus.INATIVO);
        return leilaoRepository.save(leilao);
    }

    @Override
    public List<Leilao> findAll() {
        List<Leilao> leiloes = leilaoRepository.findAll();
        Collections.sort(leiloes, (a, b) -> a.getId() < b.getId() ? -1 : 1);
        return leiloes;
    }

    @Override
    public Leilao findOneById(Long id) {
        return leilaoRepository.findById(id).get();
    }

    @Override
    public Leilao update(Leilao leilao) {
        return leilaoRepository.save(leilao);
    }

    @Override
    public Messages delete(long id) {
        Leilao findLeilao = findOneById(id);
        if(findLeilao != null){
            leilaoRepository.deleteById(id);
            return Messages.Delete_Succefully;
        }
        return Messages.Delete_Unsuccefully;
    }

    @Override
    public List<Leilao> findLeilaoAbertos() {
        List<Leilao> leiloes = leilaoRepository.findLeilaoAbertos();
        Collections.sort(leiloes, (a, b) -> a.getId() < b.getId() ? -1 : 1);
        return leiloes;
    }

    @Override
    public ArrayList<Leilao> expiraComData() {
        LocalDate data = LocalDate.now();

        List<Leilao> list = findAll();
        ArrayList<Leilao> listExpirada = new ArrayList<>();
        for (Leilao l : list) {
            if (l.getDataExpiracao().isBefore(data)) {
                l.setStatus(LeilaoStatus.EXPIRADO);
                update(l);
                listExpirada.add(l);
            }
        }
        return listExpirada;
    }

    @Override
    public Messages finalizaLeilao(long id) {
        Leilao leilao = findOneById(id);
        Lance ultimoLance = lanceRepository.findUltimoLancesDeUmLeilao(leilao.getId());

        if(leilao == null) {
            return Messages.FAIL_LEILAO_NAO_ENCONTRATO;
        }
        if(ultimoLance == null) {
            return Messages.FAIL_SEM_LANCE_ASSOCIADO_A_ESTE_LEILAO;
        }
        if (leilao.getStatus().equals(LeilaoStatus.EXPIRADO) || leilao.getStatus().equals(LeilaoStatus.ABERTO)) {
            leilao.setStatus(LeilaoStatus.FINALIZADO);
            update(leilao);
            //emailService.sendMail(leilao); esta linha esta comentada, porque eu nao criei uma conta de email para enviar o email, porem a feature esta funcionando.
            return Messages.SUCESSO;
        } else {
            return Messages.FAIL_LEILAO_NAO_ESTA_APTO_A_FINALIZACAO;
        }
    }

    @Override
    public Leilao abreLeilao(long id) {
        Leilao leilao = findOneById(id);
        if(leilao == null) {
            return null;
        }

        leilao.setStatus(LeilaoStatus.ABERTO);
        return update(leilao);
    }
}


