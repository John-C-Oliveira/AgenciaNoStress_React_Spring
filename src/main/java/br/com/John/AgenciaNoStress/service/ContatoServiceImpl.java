package br.com.John.AgenciaNoStress.service;

import br.com.John.AgenciaNoStress.model.Contato;
import br.com.John.AgenciaNoStress.repository.ContatoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class ContatoServiceImpl implements ContatoService {

    @Autowired
    private ContatoRepository contatoRepository;

    @Override
    public Contato saveContato(Contato contato) {
        return contatoRepository.save(contato);
    }

    @Override
    public List<Contato> getContatos() {
        return contatoRepository.findAll();
    }
    public Contato get(Integer id){
       return contatoRepository.findById(id).get();
    }

    public void delete(Integer id){
        contatoRepository.deleteById(id);
    }


}
