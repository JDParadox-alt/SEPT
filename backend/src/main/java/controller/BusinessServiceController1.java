package controller;

import model.Business;
import model.BusinessService;
import model.BusinessService1;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import service.BusinessServiceService;
import service.BusinessServiceService1;

import java.util.List;

/**
 * Created by CoT on 7/29/18.
 */
@RestController
@RequestMapping(path = "/")
public class BusinessServiceController1 {

    @Autowired
    private BusinessServiceService1 businessServiceService;

    public BusinessServiceController1(BusinessServiceService1 businessServiceService) {
        this.businessServiceService = businessServiceService;
    }


    //GET ALL
    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(path = "businessServices1", method = RequestMethod.GET)
    public List<BusinessService1> getAllBusinessServices1(){
        return businessServiceService.getAllBusinessServices1();
    }

    //GET BY ID
    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(path = "businessServices1/{businessServiceId}", method = RequestMethod.GET)
    public ResponseEntity<BusinessService1> getBusinessService1(@PathVariable("businessServiceId") int businessServiceId){
        BusinessService1 businessService = businessServiceService.getBusinessService1(businessServiceId);

        if (businessService == null){
            return new ResponseEntity<BusinessService1>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<BusinessService1>(businessService, HttpStatus.OK);
    }

    //CREATE
    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(path = "businessServices1", method = RequestMethod.POST)
    public ResponseEntity<Void> saveBusinessService1(@RequestBody BusinessService1 businessService, UriComponentsBuilder ucBuilder){

        businessServiceService.saveBusinessService1(businessService);

        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(ucBuilder.path("/businessServices1/{id}").buildAndExpand(businessService.getId()).toUri());
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);

    }

    //UPDATE
    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(path = "businessServices1", method = RequestMethod.PUT)
    public ResponseEntity<Void> updateBusinessService1(@RequestBody BusinessService1 businessService){
        BusinessService1 businessServiceToBeUpdated = businessServiceService.getBusinessService1(businessService.getId());

        if (businessServiceToBeUpdated == null){
            return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
        }

        businessServiceService.updateBusinessService1(businessService);

        return new ResponseEntity<Void>(HttpStatus.OK);
    }

    //DELETE
    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(path = "businessServices1/{businessServiceId}", method = RequestMethod.DELETE)
    public ResponseEntity<Void> deleteBusinessService1(@PathVariable("businessServiceId") int businessServiceId){
        BusinessService1 businessService = businessServiceService.getBusinessService1(businessServiceId);

        if (businessService == null){
            return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
        }

        businessServiceService.deleteBusinessService1(businessServiceId);
        return new ResponseEntity<Void>(HttpStatus.OK);
    }


}
