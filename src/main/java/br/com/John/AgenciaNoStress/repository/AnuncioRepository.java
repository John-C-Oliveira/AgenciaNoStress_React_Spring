package br.com.John.AgenciaNoStress.repository;

import br.com.John.AgenciaNoStress.model.Anuncio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnuncioRepository extends JpaRepository<Anuncio,Integer> {
}
