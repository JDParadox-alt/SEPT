package controller;

import model.Booking;
import model.Booking1;
import model.BusinessService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import service.BookingService;
import service.BookingService1;

import java.util.List;

/**
 * Created by CoT on 7/29/18.
 */
@RestController
@RequestMapping(path = "/")
public class BookingController1 {

    @Autowired
    private BookingService1 bookingService;

    public BookingController1(BookingService1 bookingService) {
        this.bookingService = bookingService;
    }

    //GET ALL
    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(path = "bookings1", method = RequestMethod.GET)
    public List<Booking1> getAllBookings1(){
        return bookingService.getAllBookings1();
    }

    //GET BY ID
    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(path = "bookings1/{bookingId}", method = RequestMethod.GET)
    public ResponseEntity<Booking1> getBooking1(@PathVariable("bookingId") int bookingId){
        Booking1 booking = bookingService.getBooking1(bookingId);

        if (booking == null){
            return new ResponseEntity<Booking1>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Booking1>(booking, HttpStatus.OK);
    }

    //CREATE
    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(path = "bookings1", method = RequestMethod.POST)
    public ResponseEntity<Void> saveBooking1(@RequestBody Booking1 booking, UriComponentsBuilder ucBuilder){

        bookingService.saveBooking1(booking);

        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(ucBuilder.path("/bookings1/{id}").buildAndExpand(booking.getId()).toUri());
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);

    }

    //UPDATE
    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(path = "bookings1", method = RequestMethod.PUT)
    public ResponseEntity<Void> updateBooking1(@RequestBody Booking1 booking){
        Booking1 bookingToBeUpdated = bookingService.getBooking1(booking.getId());

        if (bookingToBeUpdated == null){
            return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
        }

        bookingService.updateBooking1(booking);

        return new ResponseEntity<Void>(HttpStatus.OK);
    }


    //DELETE
    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(path = "bookings1/{bookingId}", method = RequestMethod.DELETE)
    public ResponseEntity<Void> deleteBusinessService1(@PathVariable("bookingId") int bookingId){
        Booking1 booking = bookingService.getBooking1(bookingId);

        if (booking == null){
            return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
        }

        bookingService.deleteBooking1(bookingId);
        return new ResponseEntity<Void>(HttpStatus.OK);
    }


}
