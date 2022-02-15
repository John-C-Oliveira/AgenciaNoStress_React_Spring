package br.com.John.AgenciaNoStress.service;

import br.com.John.AgenciaNoStress.model.Anuncio;

import java.util.List;

public interface AnuncioService {
    public Anuncio saveAnuncio (Anuncio anuncio);
    public List<Anuncio> getAnuncios();

    Anuncio get(Integer id);

    void delete(Integer id);
}
