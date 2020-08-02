package service;

import model.*;
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
public class AllService {

    @Autowired
    private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public Product saveProduct(Product product){
        sessionFactory.getCurrentSession().save(product);
        return product;
    }


    public Receipt saveReceipt(Receipt receipt){

        for(ReceiptDetail rd: receipt.getReceiptDetails()){
            rd.setReceipt(receipt);
        }

        sessionFactory.getCurrentSession().save(receipt);


        return receipt;
    }


    public ReceiptDetail saveReceiptDetail(ReceiptDetail receiptDetail){
        sessionFactory.getCurrentSession().save(receiptDetail);
        return receiptDetail;
    }

    //Assign Services

    //GET Business
    public List<Business> getAllBusinesses(){
        return sessionFactory.getCurrentSession().createQuery("from Business").list();
    }

    public Business getBusiness(int businessId){
        return (Business) sessionFactory.getCurrentSession().get(Business.class, businessId);
    }

    //GET Service
    public List<ServiceItem> getAllServiceItems(){
        return sessionFactory.getCurrentSession().createQuery("from ServiceItem").list();
    }

    public ServiceItem getServiceItem(int serviceItemId){
        return (ServiceItem) sessionFactory.getCurrentSession().get(ServiceItem.class, serviceItemId);
    }

    //GET Booking
    public List<Booking> getAllBookings(){
        return sessionFactory.getCurrentSession().createQuery("from Booking").list();
    }

    public Booking getBooking(int bookingId){
        return (Booking) sessionFactory.getCurrentSession().get(Booking.class, bookingId);
    }

    //POST Business
    public Business saveBusiness(Business business){
        sessionFactory.getCurrentSession().save(business);
        return business;
    }

    //POST ServiceItem
    public ServiceItem saveServiceItem(ServiceItem serviceItem){
        sessionFactory.getCurrentSession().save(serviceItem);
        return serviceItem;
    }

    //POST Booking
    public Booking saveBooking(Booking booking){
        sessionFactory.getCurrentSession().save(booking);
        return booking;
    }

    //UPDATE Business
    public void updateBusiness(Business business){
        sessionFactory.getCurrentSession().update(business);
    }

    //UPDATE ServiceItem
    public void updateServiceItem(ServiceItem serviceItem){
        sessionFactory.getCurrentSession().update(serviceItem);
    }

    //UPDATE Booking
    public void updateBooking(Booking booking){
        sessionFactory.getCurrentSession().update(booking);
    }

    //DELETE Business
    public void deleteBusiness(int  businessId){
        Business business = getBusiness(businessId);
        sessionFactory.getCurrentSession().delete(business);
    }

    //DELETE ServiceItem
    public void deleteServiceItem(int  serviceItemId){
        ServiceItem serviceItem = getServiceItem(serviceItemId);
        sessionFactory.getCurrentSession().delete(serviceItem);
    }

    //DELETE Booking
    public void deleteBooking(int  bookingId){
        Booking booking = getBooking(bookingId);
        sessionFactory.getCurrentSession().delete(booking);
    }
}
