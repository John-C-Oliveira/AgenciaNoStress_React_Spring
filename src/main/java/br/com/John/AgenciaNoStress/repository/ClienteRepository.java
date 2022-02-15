package br.com.John.AgenciaNoStress.repository;

import br.com.John.AgenciaNoStress.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente,Integer> {
}
