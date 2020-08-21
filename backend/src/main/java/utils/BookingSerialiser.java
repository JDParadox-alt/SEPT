package utils;

import model.Booking;
import model.Business;
import model.Customer;
import model.BusinessService;

import java.util.List;

import java.io.IOException;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;

public class BookingSerialiser extends StdSerializer<Booking>{
    public BookingSerialiser() {
        this(null);
    }

    public BookingSerialiser(Class<Booking> t) {
        super(t);
    }
 
    @Override
    public void serialize(
        Booking booking, JsonGenerator jgen, SerializerProvider provider)
      throws IOException, JsonProcessingException {
        BusinessService businessService = booking.getBusinessService();
        Business business = businessService.getBusiness();
        Customer customer = booking.getCustomer();
 
        jgen.writeStartObject();
        jgen.writeNumberField("id", booking.getId());
        
        jgen.writeFieldName("businessService");
        jgen.writeStartObject();
        jgen.writeNumberField("id", businessService.getId());
        jgen.writeStringField("name", businessService.getName());
        
        jgen.writeFieldName("business");
        jgen.writeStartObject();
        jgen.writeNumberField("id", business.getId());
        jgen.writeStringField("name", business.getName());
        jgen.writeEndObject();
        jgen.writeEndObject();
        
        jgen.writeStringField("startDateTime", booking.getStartDateTime());
        jgen.writeStringField("endDateTime", booking.getEndDateTime());

        jgen.writeFieldName("customer");
        jgen.writeStartObject();
        jgen.writeNumberField("id", customer.getId());
        jgen.writeStringField("username", customer.getUsername());
        jgen.writeStringField("email", customer.getEmail());
        jgen.writeStringField("phone", customer.getPhone());
        jgen.writeStringField("address", customer.getAddress());
        jgen.writeEndObject();

        jgen.writeStringField("notes", booking.getNotes());

        if (booking.getNotify() != null) {
            jgen.writeBooleanField("notify", booking.getNotify());
        }
        else {
            jgen.writeNullField("notify");
        }
        
        jgen.writeStringField("status", booking.getStatus());
        jgen.writeEndObject();
    }
}