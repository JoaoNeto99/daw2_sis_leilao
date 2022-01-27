package br.ifg.leiloes_rest.util;

import br.ifg.leiloes_rest.model.Enuns.LeilaoStatus;
import br.ifg.leiloes_rest.model.Leilao;
import br.ifg.leiloes_rest.model.Usuario;
import br.ifg.leiloes_rest.repository.RolesRepository;
import br.ifg.leiloes_rest.repository.UsuarioRepository;
import br.ifg.leiloes_rest.service.LanceService;
import br.ifg.leiloes_rest.service.LeilaoService;
import br.ifg.leiloes_rest.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Component
public class DummyData {

    @Autowired
    LeilaoService leilaoService;

    @Autowired
    UsuarioService usuarioService;

    @Autowired
    LanceService lanceService;

    @Autowired
    RolesRepository rolesRepository;

    @Autowired
    UsuarioRepository usuarioRepository;

    //@PostConstruct
    public void save() {
        rolesRepository.addRoleAdm();
        rolesRepository.addRoleUser();
        Usuario adm = new Usuario("Administrador", "000.000.000-00", "admin@email.com", new BCryptPasswordEncoder().encode("admin"));
        usuarioRepository.save(adm);
        Usuario uAdm = usuarioRepository.findByEmail("admin@email.com").get();
        rolesRepository.addADM(uAdm.getId());

        List<Leilao> listLeilao = new ArrayList<>();
        Leilao l1 = new Leilao("Frigideira", LeilaoStatus.ABERTO, new BigDecimal(100), LocalDate.now());
        Leilao l2 = new Leilao("Play Station 5", LeilaoStatus.INATIVO, new BigDecimal(1000), LocalDate.now());
        Leilao l3 = new Leilao("Iphone", LeilaoStatus.ABERTO, new BigDecimal(1000), LocalDate.now());
        Leilao l4 = new Leilao("Microondas", LeilaoStatus.ABERTO, new BigDecimal(100), LocalDate.now());
        Leilao l5 = new Leilao("AK47", LeilaoStatus.ABERTO, new BigDecimal(1000), LocalDate.now());

        listLeilao.add(l1);
        listLeilao.add(l2);
        listLeilao.add(l3);
        listLeilao.add(l4);
        listLeilao.add(l5);

        for (Leilao l : listLeilao) {
            Leilao leilaoSalvo = leilaoService.save(l);
        }

        List<Usuario> listUsuario = new ArrayList<>();
        Usuario u1 = new Usuario("Marcos Alves", "111.111.111-11", "marcosalves@email.com", "marcosalves");
        Usuario u2 = new Usuario("Elisa Maria", "222.222.222-22", "elisa@email.com", "elisa");
        Usuario u3 = new Usuario("Rodrigo Faria", "333.333.333-33", "rodrigo@email.com", "rodrigo");

        listUsuario.add(u1);
        listUsuario.add(u2);
        listUsuario.add(u3);

        for (Usuario u : listUsuario) {
            usuarioService.save(u);
        }
    }
}
