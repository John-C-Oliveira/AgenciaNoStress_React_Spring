package br.com.John.AgenciaNoStress.service;

import br.com.John.AgenciaNoStress.model.Reserva;
import br.com.John.AgenciaNoStress.repository.ReservaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class ReservaServiceImpl implements ReservaService {

    @Autowired
    private ReservaRepository reservaRepository;

    @Override
    public Reserva saveReserva(Reserva reserva) {
        return reservaRepository.save(reserva);
    }

    @Override
    public List<Reserva> getReservas() {
        return reservaRepository.findAll();
    }
}
