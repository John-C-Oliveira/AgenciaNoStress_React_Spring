package br.com.John.AgenciaNoStress.service;


import br.com.John.AgenciaNoStress.model.Destino;

import java.util.List;

public interface DestinoService {
    public  Destino saveDestino(Destino destino);
    public List<Destino> getDestinos();


    Destino get(Integer id);

    void delete(Integer id);
}
