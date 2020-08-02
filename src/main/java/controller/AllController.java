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

    //Service
    @RequestMapping(path="serviceItems", method = RequestMethod.GET)
    public List<ServiceItem> getServiceItems() {
        return allService.getAllServiceItems();
    }

    @RequestMapping(path = "serviceItems/{serviceItemId}", method = RequestMethod.GET)
    public ServiceItem getServiceItem(@PathVariable int serviceItemId){
        return allService.getServiceItem(serviceItemId);
    }

    @RequestMapping(path = "serviceItems", method = RequestMethod.POST)
    public ServiceItem addServiceItem(@RequestBody ServiceItem serviceItem){
        return allService.saveServiceItem(serviceItem);
    }

    @RequestMapping(path = "serviceItems", method = RequestMethod.PUT)
    public void updateServiceItem(@RequestBody  ServiceItem serviceItem){
        allService.updateServiceItem(serviceItem);
    }

    @RequestMapping(path = "serviceItems/{serviceItemId}", method = RequestMethod.DELETE)
    public void deleteServiceItem(@PathVariable int serviceItemId){
        allService.deleteServiceItem(serviceItemId);
    }

    //Booking
    @RequestMapping(path="bookings", method = RequestMethod.GET)
    public List<Booking> getBookings() {
        return allService.getAllBookings();
    }

    @RequestMapping(path = "bookings/{bookingId}", method = RequestMethod.GET)
    public Booking getBooking(@PathVariable int bookingId){
        return allService.getBooking(bookingId);
    }

    @RequestMapping(path = "bookings", method = RequestMethod.POST)
    public Booking addBooking(@RequestBody Booking booking){
        return allService.saveBooking(booking);
    }

    @RequestMapping(path = "bookings", method = RequestMethod.PUT)
    public void updateBooking(@RequestBody  Booking booking){
        allService.updateBooking(booking);
    }

    @RequestMapping(path = "bookings/{bookingId}", method = RequestMethod.DELETE)
    public void deleteBooking(@PathVariable int bookingId){
        allService.deleteBooking(bookingId);
    }
}
