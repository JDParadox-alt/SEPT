package controller;

import model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import service.AllService;
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
    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(path="businesses", method = RequestMethod.GET)
    public List<Business> getBusinesses() {
        return allService.getAllBusinesses();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(path = "businesses/{businessId}", method = RequestMethod.GET)
    public ResponseEntity<Business> getBusiness(@PathVariable("businessId") int businessId){
    	Business business = allService.getBusiness(businessId);

        if (business == null){
            return new ResponseEntity<Business>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Business>(business, HttpStatus.OK);
    }

    @RequestMapping(path = "businesses", method = RequestMethod.POST)
    public ResponseEntity<Void> saveBusiness(@RequestBody Business business, UriComponentsBuilder ucBuilder){

        allService.saveBusiness(business);

        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(ucBuilder.path("/businesses/{id}").buildAndExpand(business.getId()).toUri());
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
        
    }

    @RequestMapping(path = "businesses", method = RequestMethod.PUT)
    public ResponseEntity<Void> updateBusiness(@RequestBody Business business){
        Business businessToBeUpdated = allService.getBusiness(business.getId());

        if (businessToBeUpdated == null){
            return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
        }
        
        allService.updateBusiness(business);

        return new ResponseEntity<Void>(HttpStatus.OK);
    }

    @RequestMapping(path = "businesses/{businessId}", method = RequestMethod.DELETE)
    public ResponseEntity<Void> deleteBusiness(@PathVariable("businessId") int businessId){
    	Business business = allService.getBusiness(businessId);

        if (business == null){
            return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
        }

        allService.deleteBusiness(businessId);
        return new ResponseEntity<Void>(HttpStatus.OK);
    }

    //Customer
    @RequestMapping(path="customers", method = RequestMethod.GET)
    public List<Customer> getCustomers() {
        return allService.getAllCustomers();
    }

    @RequestMapping(path = "customers/{customerId}", method = RequestMethod.GET)
    public ResponseEntity<Customer> getCustomer(@PathVariable("customerId") int customerId){
    	Customer customer = allService.getCustomer(customerId);

        if (customer == null){
            return new ResponseEntity<Customer>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Customer>(customer, HttpStatus.OK);
    }

    @RequestMapping(path = "customers", method = RequestMethod.POST)
    public ResponseEntity<Void> saveCustomer(@RequestBody Customer customer, UriComponentsBuilder ucBuilder){

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

    //Business1
    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(path="businesses1", method = RequestMethod.GET)
    public List<Business1> getBusinesses1() {
        return allService.getAllBusinesses1();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(path = "businesses1/{businessId}", method = RequestMethod.GET)
    public ResponseEntity<Business1> getBusiness1(@PathVariable("businessId") int businessId){
        Business1 business = allService.getBusiness1(businessId);

        if (business == null){
            return new ResponseEntity<Business1>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Business1>(business, HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(path = "businesses1", method = RequestMethod.POST)
    public ResponseEntity<Void> saveBusiness1(@RequestBody Business1 business, UriComponentsBuilder ucBuilder){

        allService.saveBusiness1(business);

        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(ucBuilder.path("/businesses/{id}").buildAndExpand(business.getId()).toUri());
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);

    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(path = "businesses1", method = RequestMethod.PUT)
    public ResponseEntity<Void> updateBusiness1(@RequestBody Business1 business){
        Business1 businessToBeUpdated = allService.getBusiness1(business.getId());

        if (businessToBeUpdated == null){
            return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
        }

        allService.updateBusiness1(business);

        return new ResponseEntity<Void>(HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(path = "businesses1/{businessId}", method = RequestMethod.DELETE)
    public ResponseEntity<Void> deleteBusiness1(@PathVariable("businessId") int businessId){
        Business1 business = allService.getBusiness1(businessId);

        if (business == null){
            return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
        }

        allService.deleteBusiness1(businessId);
        return new ResponseEntity<Void>(HttpStatus.OK);
    }

    //Customer1
    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(path="customers1", method = RequestMethod.GET)
    public List<Customer1> getCustomers1() {
        return allService.getAllCustomers1();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(path = "customers1/{customerId}", method = RequestMethod.GET)
    public ResponseEntity<Customer1> getCustomer1(@PathVariable("customerId") int customerId){
        Customer1 customer = allService.getCustomer1(customerId);

        if (customer == null){
            return new ResponseEntity<Customer1>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Customer1>(customer, HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(path = "customers1", method = RequestMethod.POST)
    public ResponseEntity<Void> saveCustomer1(@RequestBody Customer1 customer, UriComponentsBuilder ucBuilder){

        if (allService.customerExists1(customer.getUsername())){
            return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }

        allService.saveCustomer1(customer);

        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(ucBuilder.path("/customers1/{id}").buildAndExpand(customer.getId()).toUri());
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);

    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(path = "customers1", method = RequestMethod.PUT)
    public ResponseEntity<Void> updateCustomer1(@RequestBody Customer1 customer){
        Customer1 customerToBeUpdated = allService.getCustomer1(customer.getId());

        if (customerToBeUpdated == null){
            return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
        }

        allService.updateCustomer1(customer);

        return new ResponseEntity<Void>(HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(path = "customers1/{customerId}", method = RequestMethod.DELETE)
    public ResponseEntity<Void> deleteCustomer1(@PathVariable("customerId") int customerId){
        Customer1 customer = allService.getCustomer1(customerId);

        if (customer == null){
            return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
        }

        allService.deleteCustomer1(customerId);
        return new ResponseEntity<Void>(HttpStatus.OK);
    }
}
