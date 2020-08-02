package model;
import javax.persistence.*;
import java.util.ArrayList;

@Entity
@Table(name = "business")
public class Business {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column
    private String business_account;
    @Column
    private String business_name;
    @Column
    private String address;
    @Column
    private ArrayList<Object> services;
    @Column
    private String description;

    public Business() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBusiness_account() {
        return business_account;
    }

    public void setBusiness_account(String business_account) {
        this.business_account = business_account;
    }

    public String getBusiness_name() {
        return business_name;
    }

    public void setBusiness_name(String business_name) {
        this.business_name = business_name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public ArrayList<Object> getServices() {
        return services;
    }

    public void setServices(ArrayList<Object> services) {
        this.services = services;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}



