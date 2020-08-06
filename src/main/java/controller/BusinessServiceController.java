package controller;

import model.BusinessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import service.BusinessServiceService;

import java.util.List;

/**
 * Created by CoT on 7/29/18.
 */
@RestController
@RequestMapping(path = "/")
public class BusinessServiceController {

    @Autowired
    private BusinessServiceService businessServiceService;

    public BusinessServiceController(BusinessServiceService businessServiceService) {
        this.businessServiceService = businessServiceService;
    }

    @RequestMapping(path = "businessServices", method = RequestMethod.GET)
    public List<BusinessService> getAllBusinessServices(){
        return businessServiceService.getAllBusinessServices();
    }

    @RequestMapping(path = "businessServices", method = RequestMethod.POST)
    public void saveBusinessService(@RequestBody BusinessService businessService){
        businessServiceService.saveBusinessService(businessService);
    }


    @RequestMapping(path = "businessServices/{id}", method = RequestMethod.DELETE)
    public void saveBusinessService(@PathVariable int id){
        businessServiceService.deleteBusinessService(id);
    }


}
