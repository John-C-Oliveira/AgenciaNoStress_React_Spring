package br.com.John.AgenciaNoStress.service;

import br.com.John.AgenciaNoStress.model.Destino;
import br.com.John.AgenciaNoStress.repository.DestinoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class DestinoServiceImpl implements DestinoService {

    @Autowired
    private DestinoRepository destinoRepository;

   @Override
   public Destino saveDestino(Destino destino){return destinoRepository.save(destino);}

    @Override
    public List<Destino> getDestinos() {
        return destinoRepository.findAll();
    }

    @Override
    public Destino get(Integer id) {
        return destinoRepository.findById(id).get();
    }

    @Override
    public void delete(Integer id) {
        destinoRepository.deleteById(id);
    }
}
