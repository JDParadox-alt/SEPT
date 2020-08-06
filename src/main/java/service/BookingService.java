package service;

import model.Booking;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by CoT on 10/14/17.
 */
@Transactional
@Service
public class BookingService {

    @Autowired
    private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    //CREATE
    public void saveBooking(Booking booking){
        sessionFactory.getCurrentSession().save(booking);
    }

    //GET BY ID
    public Booking getBooking(int id){
        Query query = sessionFactory.getCurrentSession().createQuery("from Booking where id=:id");
        query.setInteger("id", id);
        return (Booking) query.uniqueResult();
    }

    //GET ALL
    public List<Booking> getAllBookings(){
        Query query = sessionFactory.getCurrentSession().createQuery("from Booking");
        return query.list();
    }

    //DELETE
    public void deleteBooking(int id){
        Query query = sessionFactory.getCurrentSession().createQuery("from Booking where id=:id");
        query.setInteger("id", id);
        Booking booking = (Booking) query.uniqueResult();
        sessionFactory.getCurrentSession().delete(booking);
    }

}
