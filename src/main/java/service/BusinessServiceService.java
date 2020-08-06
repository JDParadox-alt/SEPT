package service;

import model.BusinessService;
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
public class BusinessServiceService {

    @Autowired
    private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    //CREATE
    public void saveBusinessService(BusinessService businessService){
        sessionFactory.getCurrentSession().save(businessService);
    }

    //GET BY ID
    public BusinessService getBusinessService(int id){
        Query query = sessionFactory.getCurrentSession().createQuery("from BusinessService where id=:id");
        query.setInteger("id", id);
        return (BusinessService) query.uniqueResult();
    }

    //GET ALL
    public List<BusinessService> getAllBusinessServices(){
        Query query = sessionFactory.getCurrentSession().createQuery("from BusinessService");
        return query.list();
    }

    //DELETE
    public void deleteBusinessService(int id){
        Query query = sessionFactory.getCurrentSession().createQuery("from BusinessService where id=:id");
        query.setInteger("id", id);
        BusinessService businessService = (BusinessService) query.uniqueResult();
        sessionFactory.getCurrentSession().delete(businessService);
    }

}
