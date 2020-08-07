package controller;

import model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import service.AllService;
import service.StudentService;

import java.util.List;

/**
 * Created by CoT on 7/29/18.
 */
@RestController
@RequestMapping(path = "/")
public class AllController {

    @Autowired
    private AllService allService;

    //Assign Controllers

    //Business
    @RequestMapping(path="businesses", method = RequestMethod.GET)
    public List<Business> getBusinesses() {
        return allService.getAllBusinesses();
    }

    @RequestMapping(path = "businesses/{businessId}", method = RequestMethod.GET)
    public Business getBusiness(@PathVariable int businessId){
        return allService.getBusiness(businessId);
    }

    @RequestMapping(path = "businesses", method = RequestMethod.POST)
    public Business addBusiness(@RequestBody Business business){
        return allService.saveBusiness(business);
    }

    @RequestMapping(path = "businesses", method = RequestMethod.PUT)
    public void updateBusiness(@RequestBody  Business business){
        allService.updateBusiness(business);
    }

    @RequestMapping(path = "businesses/{businessId}", method = RequestMethod.DELETE)
    public void deleteBusiness(@PathVariable int businessId){
        allService.deleteBusiness(businessId);
    }

    //Customer
    @RequestMapping(path="customers", method = RequestMethod.GET)
    public List<Customer> getCustomers() {
        return allService.getAllCustomers();
    }

    @RequestMapping(path = "customers/{customerId}", method = RequestMethod.GET)
    public ResponseEntity<Customer> get(@PathVariable("customerId") int customerId){
    	Customer customer = allService.getCustomer(customerId);

        if (customer == null){
            return new ResponseEntity<Customer>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Customer>(customer, HttpStatus.OK);
    }
    
    @RequestMapping(path = "customers/byUsername/{username}", method = RequestMethod.GET)
    public Customer getCustomer(@PathVariable String username){
        return allService.getCustomerByUsername(username);
    }

    @RequestMapping(path = "customers", method = RequestMethod.POST)
    public ResponseEntity<Void> create(@RequestBody Customer customer, UriComponentsBuilder ucBuilder){

        if (allService.customerExists(customer.getUsername())){
            return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }

        allService.saveCustomer(customer);

        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(ucBuilder.path("/customers/{id}").buildAndExpand(customer.getId()).toUri());
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
        
    }

    @RequestMapping(path = "customers", method = RequestMethod.PUT)
    public ResponseEntity<Void> updateCustomer(@RequestBody Customer customer){
        Customer customerToBeUpdated = allService.getCustomer(customer.getId());

        if (customerToBeUpdated == null){
            return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
        }
        
        allService.updateCustomer(customer);

        return new ResponseEntity<Void>(HttpStatus.OK);
    }

    @RequestMapping(path = "customers/{customerId}", method = RequestMethod.DELETE)
    public ResponseEntity<Void> deleteCustomer(@PathVariable("customerId") int customerId){
    	Customer customer = allService.getCustomer(customerId);

        if (customer == null){
            return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
        }

        allService.deleteCustomer(customerId);
        return new ResponseEntity<Void>(HttpStatus.OK);
    }
}
