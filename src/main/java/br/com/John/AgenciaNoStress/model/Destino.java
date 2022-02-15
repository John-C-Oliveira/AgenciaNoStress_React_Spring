package br.com.John.AgenciaNoStress.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import java.util.Date;
import javax.persistence.Id;

@Entity
public class Destino {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;
    private String NomeDestino;
    private int QtdadePessoa;
    private String IMGDestino;
    private String PaisDestino;
    private String UFDestino;


    public Destino() {
    }

    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }

    public String getNomeDestino() {

        return NomeDestino;
    }

    public void setNomeDestino(String nomeDestino) {

        NomeDestino = nomeDestino;
    }

    public int getQtdadePessoa() {

        return QtdadePessoa;
    }

    public void setQtdadePessoa(int qtdadePessoa) {

        QtdadePessoa = qtdadePessoa;
    }

    public String getIMGDestino() {

        return IMGDestino;
    }

    public void setIMGDestino(String IMGDestino) {

        this.IMGDestino = IMGDestino;
    }



    public String getPaisDestino() {

        return PaisDestino;
    }

    public void setPaisDestino(String paisDestino) {

        PaisDestino = paisDestino;
    }

    public String getUFDestino() {

        return UFDestino;
    }

    public void setUFDestino(String UFDestino) {

        this.UFDestino = UFDestino;
    }


}
