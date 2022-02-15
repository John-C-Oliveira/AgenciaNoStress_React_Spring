package br.com.John.AgenciaNoStress.service;

import br.com.John.AgenciaNoStress.model.Cliente;
import br.com.John.AgenciaNoStress.model.Destino;
import br.com.John.AgenciaNoStress.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class ClienteServiceImpl implements ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;

    @Override
    public Cliente saveCliente(Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    @Override
    public List<Cliente> getClientes() {
        return clienteRepository.findAll();
    }
    @Override
    public Cliente get(Integer id) {
        return clienteRepository.findById(id).get();
    }

    @Override
    public void delete(Integer id) {
        clienteRepository.deleteById(id);
    }
}
