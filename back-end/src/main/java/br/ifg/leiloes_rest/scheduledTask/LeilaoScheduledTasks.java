package br.ifg.leiloes_rest.scheduledTask;

import br.ifg.leiloes_rest.service.LeilaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component

public class LeilaoScheduledTasks {

    @Autowired
    LeilaoService leilaoService;

    @Scheduled(cron = "0 0 * * * *")
    public void performTaskUsingCron() {
        leilaoService.expiraComData();
    }
}
