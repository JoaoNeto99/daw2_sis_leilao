package br.ifg.leiloes_rest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class LeiloesRestApplication {

    public static void main(String[] args) {
        SpringApplication.run(LeiloesRestApplication.class, args);
    }

}
