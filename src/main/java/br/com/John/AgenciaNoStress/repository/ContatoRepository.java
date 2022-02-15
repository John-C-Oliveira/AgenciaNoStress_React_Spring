package br.com.John.AgenciaNoStress.repository;

import br.com.John.AgenciaNoStress.model.Contato;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ContatoRepository extends JpaRepository<Contato,Integer> {

    @Override
    Contato getById(Integer integer);
}
