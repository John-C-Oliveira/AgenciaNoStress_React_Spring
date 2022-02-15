package br.com.John.AgenciaNoStress.service;

import br.com.John.AgenciaNoStress.model.Contato;


import java.util.List;


public interface ContatoService {


    public Contato saveContato (Contato contato);

    public List<Contato> getContatos();


    Contato get(Integer id);

    void delete(Integer id);
}
