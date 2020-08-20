package service;

import model.BusinessService;
import model.Booking;
import model.Business;
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
public class BusinessServiceService {

    @Autowired
    private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }
    
    //GET ALL
    public List<BusinessService> getAllBusinessServices(){
        Query query = sessionFactory.getCurrentSession().createQuery("from BusinessService");
        return query.list();
    }
    
    //GET BY ID
    public BusinessService getBusinessService(int id){
    	return (BusinessService) sessionFactory.getCurrentSession().get(BusinessService.class, id);
    }

    //CREATE
    public void saveBusinessService(BusinessService businessService){
        sessionFactory.getCurrentSession().save(businessService);
    }
    
    //UPDATE
    public void updateBusinessService(BusinessService businessService){
        sessionFactory.getCurrentSession().update(businessService);
    }

    //DELETE
    public void deleteBusinessService(int id){
        BusinessService businessService = getBusinessService(id);
        
        Business business = businessService.getBusiness();
        List<Booking> bookings = businessService.getBookings();

        if (business != null) {
            business.removeBusinessService(businessService);
            sessionFactory.getCurrentSession().update(business);
        }

        for (Booking booking : bookings) {
            booking.setBusinessService(null);
            sessionFactory.getCurrentSession().update(booking);

            if (booking.getCustomer() == null & booking.getBusinessService() == null) {
                sessionFactory.getCurrentSession().delete(booking);
            }
        }

        sessionFactory.getCurrentSession().delete(businessService);
    }

}
