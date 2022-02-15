package br.com.John.AgenciaNoStress.controller;
import br.com.John.AgenciaNoStress.model.Destino;
import br.com.John.AgenciaNoStress.service.DestinoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/destino")
@CrossOrigin

public class DestinoController {
    @Autowired
    private DestinoService destinoService;
    @PostMapping("/add")
    public String add(@RequestBody Destino destino){
       destinoService.saveDestino(destino);
        return "Destino Cadastrado com Sucesso";
    }

    @GetMapping ("/getAll")
    public List<Destino> getDestinos(){
        return destinoService.getDestinos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Destino> get(@PathVariable Integer id){
        try{
            Destino destino = destinoService.get(id);
            return new ResponseEntity<>(destino, HttpStatus.OK);
        }catch(NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @PutMapping("/{id}")
    public ResponseEntity<Destino> update(@RequestBody Destino destino, @PathVariable Integer id){
        try{
            Destino existingDestino=destinoService.get(id);
            destinoService.saveDestino(destino);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        catch(NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @DeleteMapping("/{id}")
    public String delete(@PathVariable Integer id){
        destinoService.delete(id);
        return  "Excluido com Sucesso";
    }


}

