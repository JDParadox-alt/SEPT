package model;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table(name = "businessService1")
@JsonIdentityInfo(scope = BusinessService1.class,
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class BusinessService1 {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String business_Id;

    @Column
    private String description;

    @Column
    private String workingHours;

    @Column
    private ArrayList<String> employees;

    @Column
    private ArrayList<String> booking_Ids;

    public BusinessService1() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBusiness_Id() {
        return business_Id;
    }

    public void setBusiness_Id(String business_Id) {
        this.business_Id = business_Id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getWorkingHours() {
        return workingHours;
    }

    public void setWorkingHours(String workingHours) {
        this.workingHours = workingHours;
    }

    public ArrayList<String> getEmployees() {
        return employees;
    }

    public void setEmployees(ArrayList<String> employees) {
        this.employees = employees;
    }

    public ArrayList<String> getBooking_Ids() {
        return booking_Ids;
    }

    public void setBooking_Ids(ArrayList<String> booking_Ids) {
        this.booking_Ids = booking_Ids;
    }
}
