package br.com.John.AgenciaNoStress.service;

import br.com.John.AgenciaNoStress.model.Cliente;

import java.util.List;

public interface ClienteService {
    public Cliente saveCliente (Cliente cliente);
    public List<Cliente> getClientes();

    Cliente get(Integer id);

    void delete(Integer id);
}
