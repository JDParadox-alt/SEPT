package service;

import model.Booking;
import model.Booking1;
import model.BusinessService;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by CoT on 10/14/17.
 */
@Transactional
@Service
public class BookingService1 {

    @Autowired
    private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    //GET ALL
    public List<Booking1> getAllBookings1(){
        Query query = sessionFactory.getCurrentSession().createQuery("from Booking1");
        return query.list();
    }

    //GET BY ID
    public Booking1 getBooking1(int id){
        return (Booking1) sessionFactory.getCurrentSession().get(Booking1.class, id);
    }

    //CREATE
    public void saveBooking1(Booking1 booking){
        sessionFactory.getCurrentSession().save(booking);
    }

    //UPDATE
    public void updateBooking1(Booking1 booking){
        sessionFactory.getCurrentSession().update(booking);
    }

    //DELETE
    public void deleteBooking1(int id){
        Booking1 booking = getBooking1(id);
        sessionFactory.getCurrentSession().delete(booking);
    }

}
