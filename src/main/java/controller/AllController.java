package controller;

import model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
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

    @RequestMapping(path = "products", method = RequestMethod.POST)
    public Product addProduct(@RequestBody Product product){
        return allService.saveProduct(product);
    }

    @RequestMapping(path = "receipts", method = RequestMethod.POST)
    public Receipt addReceipt(@RequestBody Receipt receipt){
        return allService.saveReceipt(receipt);
    }

    @RequestMapping(path = "receiptDetails", method = RequestMethod.POST)
    public ReceiptDetail addReceipt(@RequestBody ReceiptDetail receiptDetail){
        return allService.saveReceiptDetail(receiptDetail);
    }

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
    public Customer getCustomer(@PathVariable int customerId){
        return allService.getCustomer(customerId);
    }

    @RequestMapping(path = "customers", method = RequestMethod.POST)
    public Customer addCustomer(@RequestBody Customer customer){
        return allService.saveCustomer(customer);
    }

    @RequestMapping(path = "customers", method = RequestMethod.PUT)
    public void updateCustomer(@RequestBody  Customer customer){
        allService.updateCustomer(customer);
    }

    @RequestMapping(path = "customers/{customerId}", method = RequestMethod.DELETE)
    public void deleteCustomer(@PathVariable int customerId){
        allService.deleteCustomer(customerId);
    }
}
