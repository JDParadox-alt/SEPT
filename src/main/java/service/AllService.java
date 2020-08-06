package service;

import model.*;
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

    //GET Customer
    public List<Customer> getAllCustomers(){
        return sessionFactory.getCurrentSession().createQuery("from Customer").list();
    }

    public Customer getCustomer(int customerId){
        return (Customer) sessionFactory.getCurrentSession().get(Customer.class, customerId);
    }

    //POST Business
    public Business saveBusiness(Business business){
        sessionFactory.getCurrentSession().save(business);
        return business;
    }

    //POST Customer
    public Customer saveCustomer(Customer customer){
        sessionFactory.getCurrentSession().save(customer);
        return customer;
    }

    //UPDATE Business
    public void updateBusiness(Business business){
        sessionFactory.getCurrentSession().update(business);
    }

    //UPDATE Customer
    public void updateCustomer(Customer customer){
        sessionFactory.getCurrentSession().update(customer);
    }

    //DELETE Business
    public void deleteBusiness(int  businessId){
        Business business = getBusiness(businessId);
        sessionFactory.getCurrentSession().delete(business);
    }

    //DELETE Customer
    public void deleteCustomer(int  customerId){
        Customer customer = getCustomer(customerId);
        sessionFactory.getCurrentSession().delete(customer);
    }
}
