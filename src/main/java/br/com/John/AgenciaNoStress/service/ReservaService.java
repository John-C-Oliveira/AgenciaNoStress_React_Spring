package br.com.John.AgenciaNoStress.service;

import br.com.John.AgenciaNoStress.model.Reserva;

import java.util.List;

public interface ReservaService {
    public Reserva saveReserva (Reserva reserva);
    public List<Reserva> getReservas();

}
