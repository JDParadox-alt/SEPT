package controller;

import model.Booking;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import service.BookingService;

import java.util.List;

/**
 * Created by CoT on 7/29/18.
 */
@RestController
@RequestMapping(path = "/")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @RequestMapping(path = "bookings", method = RequestMethod.GET)
    public List<Booking> getAllBookings(){
        return bookingService.getAllBookings();
    }

    @RequestMapping(path = "booking", method = RequestMethod.POST)
    public void saveBooking(@RequestBody Booking booking){
        bookingService.saveBooking(booking);
    }


    @RequestMapping(path = "bookings/{id}", method = RequestMethod.DELETE)
    public void saveBooking(@PathVariable int id){
        bookingService.deleteBooking(id);
    }


}
