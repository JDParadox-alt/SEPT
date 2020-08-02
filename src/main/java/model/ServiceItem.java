package model;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.Arrays;

@Entity
@Table(name = "serviceItem")
public class ServiceItem {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column
    private String service_name;
    @Column
    private String service_description;
    @Column
    private ArrayList<Object> employees;
    @Column
    private ArrayList<String> timeslot;
    @Column
    private String fee;
    @Column
    private ArrayList<Object> images;
    @Column
    private ArrayList<String> type;

    public ServiceItem() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getService_name() {
        return service_name;
    }

    public void setService_name(String service_name) {
        this.service_name = service_name;
    }

    public String getService_description() {
        return service_description;
    }

    public void setService_description(String service_description) {
        this.service_description = service_description;
    }

    public ArrayList<Object> getEmployees() {
        return employees;
    }

    public void setEmployees(ArrayList<Object> employees) {
        this.employees = employees;
    }

    public ArrayList<String> getTimeslot() {
        return timeslot;
    }

    public void setTimeslot(ArrayList<String> timeslot) {
        this.timeslot = timeslot;
    }

    public String getFee() {
        return fee;
    }

    public void setFee(String fee) {
        this.fee = fee;
    }

    public ArrayList<Object> getImages() {
        return images;
    }

    public void setImages(ArrayList<Object> images) {
        this.images = images;
    }

    public ArrayList<String> getType() {
        return type;
    }

    public void setType(ArrayList<String> type) {
        this.type = type;
    }
}
