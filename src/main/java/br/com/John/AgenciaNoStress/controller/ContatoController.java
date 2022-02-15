package br.com.John.AgenciaNoStress.controller;
import br.com.John.AgenciaNoStress.model.Contato;
import br.com.John.AgenciaNoStress.service.ContatoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/contato")
@CrossOrigin

public class ContatoController {
    @Autowired
    private ContatoService contatoService;

    @PostMapping("/add")
    public String add(@RequestBody Contato contato){
        contatoService.saveContato(contato);
        return "Mensagem enviada com Sucesso";
    }


    @GetMapping ("/getAll")
    public List<Contato> getContatos(){
        return contatoService.getContatos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Contato> get(@PathVariable Integer id){
        try{
            Contato contato = contatoService.get(id);
            return new ResponseEntity<>(contato, HttpStatus.OK);
        }catch(NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @PutMapping("/{id}")
    public ResponseEntity<Contato> update(@RequestBody Contato contato, @PathVariable Integer id){
        try{
            Contato existingContato=contatoService.get(id);
            contatoService.saveContato(contato);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        catch(NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @DeleteMapping("/{id}")
    public String delete(@PathVariable Integer id){
        contatoService.delete(id);
        return  "Excluido com Sucesso";
    }



}

