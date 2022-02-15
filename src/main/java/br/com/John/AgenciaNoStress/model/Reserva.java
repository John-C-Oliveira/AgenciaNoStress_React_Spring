package br.com.John.AgenciaNoStress.model;
import javax.persistence.*;
import java.util.Date;

@Entity
public class Reserva {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String FKCliente;
    private String FKAnuncio;

    @Temporal(TemporalType.TIMESTAMP)
    private Date DataReserva = new java.sql.Date(System.currentTimeMillis());

    public Reserva() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFKCliente() {
        return FKCliente;
    }

    public void setFKCliente(String FKCliente) {
        this.FKCliente = FKCliente;
    }

    public String getFKAnuncio() {
        return FKAnuncio;
    }

    public void setFKAnuncio(String FKAnuncio) {
        this.FKAnuncio = FKAnuncio;
    }

    public Date getDataReserva() {
        return DataReserva;
    }


}