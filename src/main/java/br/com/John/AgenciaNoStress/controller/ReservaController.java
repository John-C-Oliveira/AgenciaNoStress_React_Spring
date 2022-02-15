package br.com.John.AgenciaNoStress.controller;
import br.com.John.AgenciaNoStress.model.Reserva;
import br.com.John.AgenciaNoStress.service.ReservaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reserva")
@CrossOrigin

public class ReservaController {
    @Autowired
    private ReservaService reservaService;
    @PostMapping("/add")
    public String add(@RequestBody Reserva reserva){
        reservaService.saveReserva(reserva);
        return "Reserva Realizada com Sucesso";
    }

    @GetMapping ("/getAll")
    public List<Reserva> getReservas(){
        return reservaService.getReservas();
    }


}

