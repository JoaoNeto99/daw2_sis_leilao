package br.ifg.leiloes_rest.service.emailService;

import br.ifg.leiloes_rest.model.Enuns.Messages;
import br.ifg.leiloes_rest.model.Lance;
import br.ifg.leiloes_rest.model.Leilao;
import br.ifg.leiloes_rest.repository.LanceRepository;
import br.ifg.leiloes_rest.service.LanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

@Component
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private LanceRepository lanceRepository;

    public Messages sendMail(Leilao leilao) {
       Lance lance = lanceRepository.findUltimoLancesDeUmLeilao(leilao.getId());
        SimpleMailMessage message = new SimpleMailMessage();
        message.setSubject("Parabéns " + lance.getUsuario().getNome() + " você foi o ganhador!");
        message.setText("Parabéns por ter arrematado o item " + leilao.getLote());
        message.setTo(lance.getUsuario().getEmail());
        message.setFrom("leilao7499@outlook.com");

        try {
            mailSender.send(message);
            return Messages.EMAIL_ENVIADO_COM_SUCESSO;
        } catch (Exception e) {
            e.printStackTrace();
            return Messages.FALHA_AO_ENVIAR_EMAIL;
        }
    }
}
