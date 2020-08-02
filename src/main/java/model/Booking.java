package model;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.Arrays;

@Entity
@Table(name = "booking")
public class Booking {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column
    private ArrayList<String> date;
    @Column
    private String time;
    @Column
    private ArrayList<String> month;
    @Column
    private ArrayList<String> year;

    public Booking() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public ArrayList<String> getDate() {
        return date;
    }

    public void setDate(ArrayList<String> date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public ArrayList<String> getMonth() {
        return month;
    }

    public void setMonth(ArrayList<String> month) {
        this.month = month;
    }

    public ArrayList<String> getYear() {
        return year;
    }

    public void setYear(ArrayList<String> year) {
        this.year = year;
    }
}
