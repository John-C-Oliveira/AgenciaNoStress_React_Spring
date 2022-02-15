package br.com.John.AgenciaNoStress.service;

import br.com.John.AgenciaNoStress.model.Anuncio;
import br.com.John.AgenciaNoStress.repository.AnuncioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class AnuncioServiceImpl implements AnuncioService {

    @Autowired
    private AnuncioRepository anuncioRepository;

    @Override
    public Anuncio saveAnuncio(Anuncio anuncio) {
        return anuncioRepository.save(anuncio);
    }

    @Override
    public List<Anuncio> getAnuncios() {
        return anuncioRepository.findAll();
    }

    @Override
    public Anuncio get(Integer id) {
        return anuncioRepository.findById(id).get();
    }

    @Override
    public void delete(Integer id) {
        anuncioRepository.deleteById(id);
    }
}
