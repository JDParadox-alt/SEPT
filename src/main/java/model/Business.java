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
    private String account_id;
    @Column
    private String email;
    @Column
    private String password;
    @Column
    private ArrayList<Object> business_services;
    @Column
    private String description;
    @Column
    private String phone;
    @Column
    private String address;

    public Business() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAccount_id() {
        return account_id;
    }

    public void setAccount_id(String account_id) {
        this.account_id = account_id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public ArrayList<Object> getBusiness_services() {
        return business_services;
    }

    public void setBusiness_services(ArrayList<Object> business_services) {
        this.business_services = business_services;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}



