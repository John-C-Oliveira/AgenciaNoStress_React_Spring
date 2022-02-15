package br.com.John.AgenciaNoStress.controller;
import br.com.John.AgenciaNoStress.model.Cliente;
import br.com.John.AgenciaNoStress.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/cliente")
@CrossOrigin

public class ClienteController {
    @Autowired
    private ClienteService clienteService;
   @PostMapping("/add")
    public String add(@RequestBody Cliente cliente){
       clienteService.saveCliente(cliente);
               return "Cliente Cadastrado com Sucesso";
   }

   @GetMapping ("/getAll")
    public List<Cliente> getClientes(){
    return clienteService.getClientes();
    }


    @GetMapping("/{id}")
    public ResponseEntity<Cliente> get(@PathVariable Integer id){
        try{
            Cliente cliente = clienteService.get(id);
            return new ResponseEntity<>(cliente, HttpStatus.OK);
        }catch(NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @PutMapping("/{id}")
    public ResponseEntity<Cliente> update(@RequestBody Cliente cliente, @PathVariable Integer id){
        try{
            Cliente existingCliente=clienteService.get(id);
            clienteService.saveCliente(cliente);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        catch(NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @DeleteMapping("/{id}")
    public String delete(@PathVariable Integer id){
        clienteService.delete(id);
        return  "Excluido com Sucesso";
    }


}

