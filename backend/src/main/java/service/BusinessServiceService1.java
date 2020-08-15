package service;

import model.BusinessService;
import model.BusinessService1;
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
public class BusinessServiceService1 {

    @Autowired
    private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    //GET ALL
    public List<BusinessService1> getAllBusinessServices1(){
        Query query = sessionFactory.getCurrentSession().createQuery("from BusinessService1");
        return query.list();
    }

    //GET BY ID
    public BusinessService1 getBusinessService1(int id){
        return (BusinessService1) sessionFactory.getCurrentSession().get(BusinessService1.class, id);
    }

    //CREATE
    public void saveBusinessService1(BusinessService1 businessService){
        sessionFactory.getCurrentSession().save(businessService);
    }

    //UPDATE
    public void updateBusinessService1(BusinessService1 businessService){
        sessionFactory.getCurrentSession().update(businessService);
    }

    //DELETE
    public void deleteBusinessService1(int id){
        BusinessService1 businessService = getBusinessService1(id);
        sessionFactory.getCurrentSession().delete(businessService);
    }

}
