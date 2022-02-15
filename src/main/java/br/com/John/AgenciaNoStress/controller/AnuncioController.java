package br.com.John.AgenciaNoStress.controller;
import br.com.John.AgenciaNoStress.model.Anuncio;
import br.com.John.AgenciaNoStress.service.AnuncioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/anuncio")
@CrossOrigin

public class AnuncioController {
    @Autowired
    private AnuncioService anuncioService;
    @PostMapping("/add")
    public String add(@RequestBody Anuncio anuncio){
       anuncioService.saveAnuncio(anuncio);
        return "Anuncio Cadastrado com Sucesso";
    }

    @GetMapping ("/getAll")
    public List<Anuncio> getAnuncios(){
        return anuncioService.getAnuncios();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Anuncio> get(@PathVariable Integer id){
        try{
            Anuncio anuncio = anuncioService.get(id);
            return new ResponseEntity<>(anuncio, HttpStatus.OK);
        }catch(NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @PutMapping("/{id}")
    public ResponseEntity<Anuncio> update(@RequestBody Anuncio anuncio, @PathVariable Integer id){
        try{
            Anuncio existingAnuncio=anuncioService.get(id);
            anuncioService.saveAnuncio(anuncio);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        catch(NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @DeleteMapping("/{id}")
    public String delete(@PathVariable Integer id){
        anuncioService.delete(id);
        return  "Excluido com Sucesso";
    }


}

