package br.com.John.AgenciaNoStress.model;
import javax.persistence.*;
import java.util.Date;

@Entity
public class Anuncio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private double valor;
    private String nome;
    private Date DataSaida;
    private Date DataRetorno;
    @Temporal(TemporalType.TIMESTAMP)
    private Date DataCadastro = new java.sql.Date(System.currentTimeMillis());

    public Anuncio() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public double getValor() {
        return valor;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Date getDataSaida() {
        return DataSaida;
    }

    public void setDataSaida(Date dataSaida) {
        DataSaida = dataSaida;
    }

    public Date getDataRetorno() {
        return DataRetorno;
    }

    public void setDataRetorno(Date dataRetorno) {
        DataRetorno = dataRetorno;
    }

    public Date getDataCadastro() {
        return DataCadastro;
    }


}
