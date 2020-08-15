package service;

import model.*;

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
public class AllService {

    @Autowired
    private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    
    //Assign Services

    //Businesses
    public List<Business> getAllBusinesses(){
        return sessionFactory.getCurrentSession().createQuery("from Business").list();
    }

    public Business getBusiness(int businessId){
        return (Business) sessionFactory.getCurrentSession().get(Business.class, businessId);
    }
    
    public void saveBusiness(Business business){
        sessionFactory.getCurrentSession().save(business);
    }
    
    public void updateBusiness(Business business){
        sessionFactory.getCurrentSession().update(business);
    }
    
    public void deleteBusiness(int  businessId){
        Business business = getBusiness(businessId);
        sessionFactory.getCurrentSession().delete(business);
    }

    
    //Customer
    public List<Customer> getAllCustomers(){
        return sessionFactory.getCurrentSession().createQuery("from Customer").list();
    }

    public Customer getCustomer(int customerId){
        return (Customer) sessionFactory.getCurrentSession().get(Customer.class, customerId);
    }
    
    public Customer getCustomerByUsername(String username) {
    	Query query = sessionFactory.getCurrentSession().createQuery("from Customer s where s.username like :username");
    	query.setString("username", "%"+username+"%");
    	return (Customer) query.uniqueResult();
    }
    
    public void saveCustomer(Customer customer){
        sessionFactory.getCurrentSession().save(customer);
    }

    public void updateCustomer(Customer customer){
        sessionFactory.getCurrentSession().update(customer);
    }

    public void deleteCustomer(int customerId){
        Customer customer = getCustomer(customerId);
        sessionFactory.getCurrentSession().delete(customer);
    }
    
    public boolean customerExists(String username) {
    	return getCustomerByUsername(username) != null;
    }


    //Businesses1
    public List<Business1> getAllBusinesses1(){
        return sessionFactory.getCurrentSession().createQuery("from Business1").list();
    }

    public Business1 getBusiness1(int businessId){
        return (Business1) sessionFactory.getCurrentSession().get(Business1.class, businessId);
    }

    public void saveBusiness1(Business1 business){
        sessionFactory.getCurrentSession().save(business);
    }

    public void updateBusiness1(Business1 business){
        sessionFactory.getCurrentSession().update(business);
    }

    public void deleteBusiness1(int  businessId){
        Business1 business = getBusiness1(businessId);
        sessionFactory.getCurrentSession().delete(business);
    }


    //Customer1
    public List<Customer1> getAllCustomers1(){
        return sessionFactory.getCurrentSession().createQuery("from Customer1").list();
    }

    public Customer1 getCustomer1(int customerId){
        return (Customer1) sessionFactory.getCurrentSession().get(Customer1.class, customerId);
    }

    public Customer1 getCustomerByUsername1(String username) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Customer1 s where s.username like :username");
        query.setString("username", "%"+username+"%");
        return (Customer1) query.uniqueResult();
    }

    public void saveCustomer1(Customer1 customer){
        sessionFactory.getCurrentSession().save(customer);
    }

    public void updateCustomer1(Customer1 customer){
        sessionFactory.getCurrentSession().update(customer);
    }

    public void deleteCustomer1(int customerId){
        Customer1 customer = getCustomer1(customerId);
        sessionFactory.getCurrentSession().delete(customer);
    }

    public boolean customerExists1(String username) {
        return getCustomerByUsername1(username) != null;
    }
}
