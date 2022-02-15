package br.com.John.AgenciaNoStress.model;
import javax.persistence.*;
import java.util.Date;

@Entity
public class Contato {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String Nome;
    private String Email;
    private String Mensagem;


    @Temporal(TemporalType.TIMESTAMP)
    private Date DataEnvio = new java.sql.Date(System.currentTimeMillis());

    public Contato() {
    }

    public Contato(String nome, String email, String mensagem, Date dataEnvio) {
        Nome = nome;
        Email = email;
        Mensagem = mensagem;
        DataEnvio = dataEnvio;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return Nome;
    }

    public void setNome(String nome) {
        Nome = nome;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public String getMensagem() {
        return Mensagem;
    }

    public void setMensagem(String mensagem) {
        Mensagem = mensagem;
    }

    public Date getDataEnvio() {
        return DataEnvio;
    }


}