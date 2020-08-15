package model;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table(name = "customer1")
@JsonIdentityInfo(scope = Customer1.class,
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class Customer1 {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String username;

    @Column
    private String email;

    @Column
    private String password;

    @Column
    private String phone;

    @Column
    private String address;

    @Column
    private ArrayList<String> booking_Ids;

    public Customer1() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
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

    public ArrayList<String> getBooking_Ids() {
        return booking_Ids;
    }

    public void setBooking_Ids(ArrayList<String> booking_Ids) {
        this.booking_Ids = booking_Ids;
    }
}
