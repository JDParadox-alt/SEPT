import React, { Component, Fragment } from 'react';
import Icon from '@material-ui/core/Icon';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default class Booking extends Component {
    constructor(props) {
        super(props)
        this.state = {
            import: [],
            import1: [],
            customerProfileExists: false,
            customerProfile: {},
            businessProfileExists: false,
            businessProfile: {},
            show: false,
            serviceDescription: "",
            serviceEmployees: [],
            serviceDays: [],
            serviceHours: [],
            newEmployee: "",
            startHour: "",
            startMin: "",
            endHour: "",
            endMin: "",
            businessServiceExists: false,
            businessService: [],
            reloader: false,
            serviceDescription1: "",
            serviceEmployees1: [],
            serviceDays1: [],
            // serviceHours1: [],
            newEmployee1: "",
            startHour1: "",
            startMin1: "",
            endHour1: "",
            endMin1: "",
            serviceBookingId1: [],
            businessServiceItem: {},
            updateId: 0,
            show1: false
        }
    }
    checkCustomerProfile(){
        fetch('http://localhost:8080/customers1')
        .then(res => res.json())
        .then(json => {
            console.log(json)
            this.setState({ import: json}, ()=>{console.log(this.state.import)})
            var new_data=json
            if(this.props.auth.user!==null && new_data.length>0){
                console.log(this.props.auth.user.username)
                console.log(this.props.auth.user.attributes.email)
                for (var i = 0; i < new_data.length; i++) {
                    if(new_data[i].username===this.props.auth.user.username && new_data[i].email===this.props.auth.user.attributes.email){
                        this.setState({ customerProfileExists: true}, ()=>{console.log(this.state.customerProfileExists) })
                        this.setState({ customerProfile: new_data[i]}, ()=>{console.log(this.state.customerProfile) })
                    }
                }
            }
        })
    }
    checkBusinessProfile(){
        fetch('http://localhost:8080/businesses1')
        .then(res => res.json())
        .then(json => {
            console.log(json)
            this.setState({ import1: json}, ()=>{console.log(this.state.import1)})
            var new_data=json
            if(this.props.auth.user!==null && new_data.length>0){
                console.log(this.props.auth.user.username)
                console.log(this.props.auth.user.attributes.email)
                for (var i = 0; i < new_data.length; i++) {
                    if(new_data[i].email===this.props.auth.user.attributes.email){
                        this.setState({ businessProfileExists: true}, ()=>{console.log(this.state.businessProfileExists) })
                        this.setState({ businessProfile: new_data[i]}, ()=>{console.log(this.state.businessProfile) })
                    }
                }
            }
        })
    }
    // checkServiceByProfile1(){
    //     fetch('http://localhost:8080/businessServices1')
    //     .then(res => res.json())
    //     .then(json => {
    //         console.log(json)
    //         // this.setState({ import1: json}, ()=>{console.log(this.state.import1)})
    //         var services=json
    //         fetch('http://localhost:8080/businesses1')
    //         .then(res => res.json())
    //         .then(json => {
    //             console.log(json)
    //             // this.setState({ import1: json}, ()=>{console.log(this.state.import1)})
    //             var businesses=json
    //             var businessProfile={}
    //             if(this.props.auth.user!==null && businesses.length>0){
    //                 console.log(this.props.auth.user.username)
    //                 console.log(this.props.auth.user.attributes.email)
    //                 for (var i = 0; i < businesses.length; i++) {
    //                     if(businesses[i].email===this.props.auth.user.attributes.email){
    //                         businessProfile=businesses[i]
    //                     }
    //                 }
    //             }
    //             if(businessProfile && services.length>0){
    //                 console.log(this.state.businessProfile)
    //                 console.log(businessProfile)
    //                 console.log(services)
    //                 var temp_arr2=this.state.businessService
    //                 for (var i = 0; i < services.length; i++) {
    //                     if(parseInt(services[i].business_Id)===businessProfile.id){
    //                         temp_arr2.push(services[i])
    //                         this.setState({ businessServiceExists: true}, ()=>{
    //                             console.log(this.state.businessServiceExists)
    //                             this.checkCustomerProfile()
    //                             this.checkBusinessProfile()
    //                             this.updateBusinessProfileAfterServiceCreation()
    //                             console.log("CheckV2!!!")
    //                         })
    //                         this.setState({ businessService: temp_arr2}, ()=>{console.log(this.state.businessService) })
    //                     }
    //                 }
    //                 var temp_arr_x=businessProfile.businessService_Ids
    //                 for (var i = 0; i < temp_arr2.length; i++) {
    //                     if(temp_arr2.length>0){
    //                         if(parseInt(temp_arr2[i].business_Id)===businessProfile.id){
    //                             temp_arr_x.push(String(temp_arr2[i].business_Id))
    //                         }
    //                     }
    //                 }
    //                 var uniq = [...new Set(temp_arr_x)];
    //                 console.log(uniq)
    //                 var new_obj = {
    //                     id: businessProfile.id,
    //                     name: businessProfile.name,
    //                     email: businessProfile.email,
    //                     password: businessProfile.password,
    //                     description: businessProfile.description,
    //                     phone: businessProfile.phone,
    //                     address: businessProfile.address,
    //                     businessService_Ids: uniq
    //                 }
    //                 console.log(new_obj)
    //                 fetch('http://localhost:8080/businesses1', {
    //                 headers: {
    //                     'Accept': 'application/json',
    //                     'Content-Type': 'application/json'
    //                 },
    //                 method: "PUT",
    //                 body: JSON.stringify(new_obj)
    //                 })
    //             }
    //         })
    //     })
    //     console.log("CheckV2.2!!!")
    // }
    getCurrentServiceItem(id){
        fetch('http://localhost:8080/businessServices1/'+id)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            var serviceItem=json
            if(serviceItem){
                this.setState({ serviceDescription1: serviceItem.description }, ()=>console.log(this.state.serviceDescription1))
                this.setState({ businessServiceItem: serviceItem }, ()=>console.log(this.state.businessServiceItem))
                this.setState({ serviceDays1: serviceItem.workingHours[0].days }, ()=>console.log(this.state.serviceDays1))
                this.setState({ serviceEmployees1: serviceItem.employees }, ()=>console.log(this.state.serviceEmployees1))
                this.setState({ serviceBookingId1: serviceItem.booking_Ids }, ()=>console.log(this.state.serviceBookingId1))
                this.setState({ startHour1: serviceItem.workingHours[0].startTime.slice(0,2)}, ()=>console.log(this.state.startHour1))
                this.setState({ startMin1: serviceItem.workingHours[0].startTime.slice(3,5)}, ()=>console.log(this.state.startMin1))
                this.setState({ endHour1: serviceItem.workingHours[0].endTime.slice(0,2)}, ()=>console.log(this.state.endHour1))
                this.setState({ endMin1: serviceItem.workingHours[0].endTime.slice(3,5)}, ()=>console.log(this.state.endMin1))
            }
        })
    }
    checkServiceByProfile(){
        fetch('http://localhost:8080/businessServices1')
        .then(res => res.json())
        .then(json => {
            console.log(json)
            // this.setState({ import1: json}, ()=>{console.log(this.state.import1)})
            var new_data=json
            if(this.state.businessProfile && new_data.length>0){
                console.log(this.state.businessProfile)
                console.log(new_data)
                var temp_arr2=[]
                var temp_businessServiceExists=false
                for (var i = 0; i < new_data.length; i++) {
                    if(parseInt(new_data[i].business_Id)===this.state.businessProfile.id){
                        temp_arr2.push(new_data[i])
                        temp_businessServiceExists=true
                        this.setState({ businessServiceExists: true}, ()=>{
                            console.log(this.state.businessServiceExists)
                            // this.checkCustomerProfile()
                            // this.checkBusinessProfile()
                            // this.updateBusinessProfileAfterServiceCreation()
                            // this.checkServiceByProfile1()
                            console.log("Check01!!!")
                        })
                    }
                }
                this.setState({ businessService: temp_arr2}, ()=>{console.log(this.state.businessService) })
                console.log(temp_arr2)
                console.log(this.state.businessProfile)
                if(typeof this.state.businessProfile.id==="undefined"){
                    alert("Business Profile still not loaded")
                }
                console.log(this.state.businessProfile.id)
                console.log(temp_businessServiceExists)
                if(temp_businessServiceExists===true){
                    var temp_arr=[]
                    for (var i = 0; i < temp_arr2.length; i++) {
                        if(parseInt(temp_arr2[i].business_Id)===this.state.businessProfile.id){
                            temp_arr.push(String(temp_arr2[i].id))
                        }
                    }
                    console.log(temp_arr)
                    var uniq = [...new Set(temp_arr)];
                    console.log(uniq)
                    var new_obj = {
                        id: this.state.businessProfile.id,
                        name: this.state.businessProfile.name,
                        email: this.state.businessProfile.email,
                        password: this.state.businessProfile.password,
                        description: this.state.businessProfile.description,
                        phone: this.state.businessProfile.phone,
                        address: this.state.businessProfile.address,
                        businessService_Ids: uniq
                    }
                    console.log(new_obj)
                    fetch('http://localhost:8080/businesses1', {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: "PUT",
                    body: JSON.stringify(new_obj)
                    })
                }
            }
        })
    }
    updateBusinessProfileAfterServiceCreation(){
        if(this.state.businessServiceExists===true){
            var new_data=this.state.businessService
            var temp_arr=this.state.businessProfile.businessService_Ids
            for (var i = 0; i < new_data.length; i++) {
                if(parseInt(new_data[i].business_Id)===this.state.businessProfile.id){
                    temp_arr.push(String(new_data[i].id))
                }
            }
            var uniq = [...new Set(temp_arr)];
            console.log(uniq)
            var new_obj = {
                id: this.state.businessProfile.id,
                name: this.state.businessProfile.name,
                email: this.state.businessProfile.email,
                password: this.state.businessProfile.password,
                description: this.state.businessProfile.description,
                phone: this.state.businessProfile.phone,
                address: this.state.businessProfile.address,
                businessService_Ids: uniq
            }
            console.log(new_obj)
            fetch('http://localhost:8080/businesses1', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "PUT",
            body: JSON.stringify(new_obj)
            })
        }
    }
    handleServiceDescription(event){
        this.setState({ serviceDescription: event.target.value})
    }
    handleNewEmployee(event){
        this.setState({ newEmployee: event.target.value })
    }
    addEmployee(event){
        var arr=this.state.serviceEmployees
        if(this.state.newEmployee!==""){
            arr.push(this.state.newEmployee)
        }
        this.setState({ serviceEmployees: arr }, ()=>console.log(this.state.serviceEmployees))
        event.preventDefault()
    }
    rejectEmployee(index, event){
        var array=this.state.serviceEmployees
        if (index > -1) {
            array.splice(index, 1);
        }
        this.setState({ serviceEmployees: array }, ()=>console.log(this.state.serviceEmployees))
        event.preventDefault()
    }
    onChangeCheckbox(event){
        var arr=this.state.serviceDays
        console.log(event.target.checked, event.target.value);
        if(event.target.checked===true){
            arr.push(event.target.value)
        } else if(event.target.checked===false){
            var index = arr.indexOf(event.target.value)
            if (index > -1) {
                arr.splice(index, 1);
            }
        }
        var uniq = [...new Set(arr)];
        console.log(uniq)
        this.setState({ serviceDays:uniq }, ()=>console.log(this.state.serviceDays))
    }
    handleStartHour(event){
        this.setState({ startHour: event.target.value })
    }
    handleStartMin(event){
        this.setState({ startMin: event.target.value })
    }
    handleEndHour(event){
        this.setState({ endHour: event.target.value })
    }
    handleEndMin(event){
        this.setState({ endMin: event.target.value })
    }
    handleServiceDescription1(event){
        this.setState({ serviceDescription1: event.target.value})
    }
    handleNewEmployee1(event){
        this.setState({ newEmployee1: event.target.value })
    }
    addEmployee1(event){
        var arr=this.state.serviceEmployees1
        if(this.state.newEmployee1!==""){
            arr.push(this.state.newEmployee1)
        }
        this.setState({ serviceEmployees1: arr }, ()=>console.log(this.state.serviceEmployees1))
        event.preventDefault()
    }
    rejectEmployee1(index, event){
        var array=this.state.serviceEmployees1
        if (index > -1) {
            array.splice(index, 1);
        }
        this.setState({ serviceEmployees1: array }, ()=>console.log(this.state.serviceEmployees1))
        event.preventDefault()
    }
    onChangeCheckbox1(event){
        var arr=this.state.serviceDays1
        console.log(event.target.checked, event.target.value);
        if(event.target.checked===true){
            arr.push(event.target.value)
        } else if(event.target.checked===false){
            var index = arr.indexOf(event.target.value)
            if (index > -1) {
                arr.splice(index, 1);
            }
        }
        var uniq = [...new Set(arr)];
        console.log(uniq)
        this.setState({ serviceDays1:uniq }, ()=>console.log(this.state.serviceDays1))
    }
    handleStartHour1(event){
        this.setState({ startHour1: event.target.value })
    }
    handleStartMin1(event){
        this.setState({ startMin1: event.target.value })
    }
    handleEndHour1(event){
        this.setState({ endHour1: event.target.value })
    }
    handleEndMin1(event){
        this.setState({ endMin1: event.target.value })
    }
    createService(event){
        var checkValidSum=0
        if(this.state.serviceDescription){
            checkValidSum++
        }
        if(this.state.serviceEmployees.length>0){
            checkValidSum++
        }
        if(this.state.serviceDays.length>0){
            checkValidSum++
        }
        if(this.state.startHour && this.state.startHour<this.state.endHour && this.state.startMin){
            checkValidSum++
        }
        if(this.state.endHour && this.state.endHour>=this.state.startHour && this.state.endMin){
            checkValidSum++
        }
        if(checkValidSum!==5){
            alert("Some inputs are missing or wrongly entered. Please re-fill the form with all required inputs.")
            event.preventDefault();
        } else {
            var new_obj_1 = {
                business_Id: this.state.businessProfile.id,
                description: this.state.serviceDescription,
                workingHours: [{
                    days: this.state.serviceDays,
                    startTime: this.state.startHour+":"+this.state.startMin,
                    endTime: this.state.endHour+":"+this.state.endMin
                }],
                employees: this.state.serviceEmployees,
                booking_Ids: []
            }
            console.log(new_obj_1)
            fetch('http://localhost:8080/businessServices1', {
             headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
             },
             method: "POST",
             body: JSON.stringify(new_obj_1)
            })
            this.checkCustomerProfile()
            this.checkBusinessProfile()
            this.checkServiceByProfile()
            // this.checkServiceByProfile1()
            console.log("Check!!!")
            this.setState({ reloader: !this.state.reloader}, ()=>{
                this.checkCustomerProfile()
                this.checkBusinessProfile()
                this.checkServiceByProfile()
                console.log("Check!!!")
            })
            
            // this.updateBusinessProfileAfterServiceCreation()
            alert("Your service is created.")
            // event.preventDefault();
        }
        // fetch('http://localhost:8080/businessServices1')
        // .then(res => res.json())
        // .then(json => {
        //     console.log(json)
        //     var new_data=json
        //     if(this.state.businessProfile && new_data.length>0){
        //         console.log(this.state.businessProfile)
        //         console.log(new_data)
        //         var temp_arr2=this.state.businessService
        //         for (var i = 0; i < new_data.length; i++) {
        //             if(parseInt(new_data[i].business_Id)===this.state.businessProfile.id){
        //                 temp_arr2.push(new_data[i])
        //             }
        //         }
        //         var uniq = [...new Set(temp_arr2)];
        //         console.log(uniq)
        //         var new_obj = {
        //             id: this.state.businessProfile.id,
        //             name: this.state.businessProfile.name,
        //             email: this.state.businessProfile.email,
        //             password: this.state.businessProfile.password,
        //             description: this.state.businessProfile.description,
        //             phone: this.state.businessProfile.phone,
        //             address: this.state.businessProfile.address,
        //             businessService_Ids: uniq
        //         }
        //         console.log(new_obj)
        //         fetch('http://localhost:8080/businesses1', {
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json'
        //         },
        //         method: "PUT",
        //         body: JSON.stringify(new_obj)
        //         })
        //     }
        // })
    }
    updateBusinessService(event, id){
        var checkValidSum=0
        if(this.state.serviceDescription1){
            checkValidSum++
        }
        if(this.state.serviceEmployees1.length>0){
            checkValidSum++
        }
        if(this.state.serviceDays1.length>0){
            checkValidSum++
        }
        if(this.state.startHour1 && this.state.startHour1<this.state.endHour1 && this.state.startMin1){
            checkValidSum++
        }
        if(this.state.endHour1 && this.state.endHour1>=this.state.startHour1 && this.state.endMin1){
            checkValidSum++
        }
        if(checkValidSum!==5){
            alert("Some inputs are missing or wrongly entered. Please re-fill the form with all required inputs.")
            event.preventDefault();
        } else {
            var new_obj_1 = {
                id: id,
                business_Id: this.state.businessProfile.id,
                description: this.state.serviceDescription1,
                workingHours: [{
                    days: this.state.serviceDays1,
                    startTime: this.state.startHour1+":"+this.state.startMin1,
                    endTime: this.state.endHour1+":"+this.state.endMin1
                }],
                employees: this.state.serviceEmployees1,
                booking_Ids: this.state.serviceBookingId1
            }
            console.log(new_obj_1)
            fetch('http://localhost:8080/businessServices1', {
             headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
             },
             method: "PUT",
             body: JSON.stringify(new_obj_1)
            })
            this.checkCustomerProfile()
            this.checkBusinessProfile()
            this.checkServiceByProfile()
            // this.checkServiceByProfile1()
            console.log("Check!!!")
            this.setState({ reloader: !this.state.reloader}, ()=>{
                this.checkCustomerProfile()
                this.checkBusinessProfile()
                this.checkServiceByProfile()
                console.log("Check!!!")
            })
            
            // this.updateBusinessProfileAfterServiceCreation()
            alert("Your service is updated.")
            // event.preventDefault();
        }
    }
    deleteBusinessService(id){
        fetch('http://localhost:8080/businessServices1/' + id, {
            method: 'DELETE',
        })
        alert("Your service is deleted.")
        var array1=this.state.businessService
        console.log(array1)
        var index=-1
        for (var i = 0; i < array1.length; i++) {
            if(array1[i].id===id){
                index=i
            }
        }
        if (index > -1) {
            array1.splice(index, 1);
        }
        console.log(array1)

        var new_data=array1
        var temp_arr=[]
        for (var i = 0; i < new_data.length; i++) {
            temp_arr.push(new_data[i].id)
        }
        console.log(temp_arr)
        var uniq = [...new Set(temp_arr)];
        console.log(uniq)
        var new_obj = {
            id: this.state.businessProfile.id,
            name: this.state.businessProfile.name,
            email: this.state.businessProfile.email,
            password: this.state.businessProfile.password,
            description: this.state.businessProfile.description,
            phone: this.state.businessProfile.phone,
            address: this.state.businessProfile.address,
            businessService_Ids: uniq
        }
        console.log(new_obj)
        fetch('http://localhost:8080/businesses1', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "PUT",
        body: JSON.stringify(new_obj)
        })
        this.setState({ businessService: array1 }, ()=>{
            console.log(this.state.businessService)
            this.checkCustomerProfile()
            this.checkBusinessProfile()
            this.checkServiceByProfile()
        })
        this.checkCustomerProfile()
        this.checkBusinessProfile()
        this.checkServiceByProfile()
    }
    handleShow(){
        this.setState({ show: true })
    }
    handleClose(){
        this.setState({ show: false })
    }
    handleShow1(){
        this.setState({ show1: true })
    }
    handleClose1(){
        this.setState({ show1: false })
    }
    componentDidMount() {
        this.checkCustomerProfile()
        this.checkBusinessProfile()
        this.checkServiceByProfile()
        // this.checkServiceByProfile1()
        console.log("Mounted!!!")
        console.log(this.state.businessServiceExists)
        // this.updateBusinessProfileAfterServiceCreation()
    }
    componentDidUpdate(){
        console.log("Updated!!!")
    }
    render() {
        return(
            <div className="container-fluid profile-container-bg py-3">
                {this.props.auth.isAuthenticated && this.props.auth.user && this.state.businessProfileExists===true && <div>
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-10">
                            <div className="card my-3">
                                <div className="card-body">      
                                    {this.state.businessService && <div>
                                        {this.state.businessService.map((service, i)=>{
                                            return(
                                                <div key={i} className="card my-3">
                                                    <div className="card-body">
                                                    <div className="row">         
                                                        <div className="col-10">
                                                        <h5>Description</h5>
                                                        <p>{service.description}</p>
                                                        <h5>ID/Business ID</h5>
                                                        <p>{service.id}/{service.business_Id}</p>
                                                        {service.workingHours.length>0 && <Fragment>
                                                            <h5>Available On</h5>
                                                            <div className="row">{service.workingHours[0].days.length>0 && service.workingHours[0].days.map((day, y)=>{
                                                                return(
                                                                    <div className="col-2 text-left" key={y}>{day}</div>
                                                                )
                                                            })}</div>
                                                            <div className="row mt-3">
                                                                <div className="col-2 text-left">
                                                                    <p>From: {service.workingHours[0].startTime}</p>
                                                                    <p>To: {service.workingHours[0].endTime}</p>
                                                                </div>
                                                            </div>
                                                        </Fragment>}
                                                        <h5>Available Staff</h5>
                                                        <div className="row mb-3">
                                                            {service.employees.length>0 && service.employees.map((employee, z)=>{
                                                                return(
                                                                    <div className="col-2" key={z}>{employee}</div>
                                                                )
                                                            })}
                                                        </div>
                                                        <h5>Linked Customers</h5>
                                                        <div className="row">
                                                            {service.booking_Ids.length>0 && service.booking_Ids.map((id, u)=>{
                                                                return(
                                                                    <div className="col-1" key={u}>{id}</div>
                                                                )
                                                            })}
                                                        </div>
                                                        </div>
                                                        <div className="col-2">
                                                            <div className="dropdown ml-5">
                                                                <button className="btn btn-white btn-sm ml-5 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <Icon className="fa fa-cog" style={{ fontSize: 20, color: "dark" }}/>
                                                                </button>
                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                    {/* <a className="dropdown-item" href="true">Edit</a> */}
                                                                    <a className="dropdown-item" href="#">
                                                                        <Button variant="white" onClick={(i)=>{
                                                                            this.handleShow1()
                                                                            this.getCurrentServiceItem(service.id)
                                                                        }}>
                                                                            Edit
                                                                        </Button>
                                                                        <Modal show={this.state.show1} onHide={this.handleClose1.bind(this)}>
                                                                            <Modal.Header closeButton>
                                                                                <Modal.Title>Edit Your Service</Modal.Title>
                                                                            </Modal.Header>
                                                                            <Modal.Body>
                                                                                <form onSubmit={(event)=>{this.updateBusinessService(event, service.id)}}>
                                                                                    <div className="form-group">
                                                                                        <label htmlFor="exampleInput100">Description</label>
                                                                                        <input value={this.state.serviceDescription1} onChange={this.handleServiceDescription1.bind(this)} type="text" className="form-control" id="exampleInput100" placeholder="Enter description" />
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-10">
                                                                                            <div className="form-group">
                                                                                                <label htmlFor="exampleInput10">Add Employee</label>
                                                                                                <input value={this.state.newEmployee1} onChange={this.handleNewEmployee1.bind(this)} type="text" className="form-control" id="exampleInput10" aria-describedby="employeeHelp1" placeholder="Name of employee" />
                                                                                                <small id="employeeHelp1" className="form-text text-muted">Click add for each name entered</small>
                                                                                            </div>
                                                                                            {this.state.serviceEmployees1.length>0 && <div>
                                                                                                {this.state.serviceEmployees1.map((employee, i)=>{
                                                                                                    return(
                                                                                                        <div key={i} className="row mb-1">
                                                                                                            <div className="btn-group ml-3">
                                                                                                                <button className="btn btn-success btn-sm text-left">{employee}</button>
                                                                                                            </div>
                                                                                                            <div className="btn-group ml-1">
                                                                                                                <button onClick={(event)=>{this.rejectEmployee1(i,event)}} className="btn btn-success btn-sm float-left">x</button>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    )
                                                                                                })}
                                                                                            </div>}
                                                                                            <div className="form-group">
                                                                                                <label>Available On:</label>
                                                                                                <div>
                                                                                                    <div className="form-check form-check-inline">
                                                                                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox10" onChange={this.onChangeCheckbox1.bind(this)} defaultChecked={false} value="Monday" />
                                                                                                        <label className="form-check-label" htmlFor="inlineCheckbox10">Monday</label>
                                                                                                    </div>
                                                                                                    <div className="form-check form-check-inline">
                                                                                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox20" onChange={this.onChangeCheckbox1.bind(this)} defaultChecked={false} value="Tuesday" />
                                                                                                        <label className="form-check-label" htmlFor="inlineCheckbox20">Tuesday</label>
                                                                                                    </div>
                                                                                                    <div className="form-check form-check-inline">
                                                                                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox30" onChange={this.onChangeCheckbox1.bind(this)} defaultChecked={false} value="Wednesday" />
                                                                                                        <label className="form-check-label" htmlFor="inlineCheckbox30">Wednesday</label>
                                                                                                    </div>
                                                                                                    <div className="form-check form-check-inline">
                                                                                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox40" onChange={this.onChangeCheckbox1.bind(this)} defaultChecked={false} value="Thursday" />
                                                                                                        <label className="form-check-label" htmlFor="inlineCheckbox40">Thursday</label>
                                                                                                    </div>
                                                                                                    <div className="form-check form-check-inline">
                                                                                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox50" onChange={this.onChangeCheckbox1.bind(this)} defaultChecked={false} value="Friday" />
                                                                                                        <label className="form-check-label" htmlFor="inlineCheckbox50">Friday</label>
                                                                                                    </div>
                                                                                                    <div className="form-check form-check-inline">
                                                                                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox60" onChange={this.onChangeCheckbox1.bind(this)} defaultChecked={false} value="Saturday" />
                                                                                                        <label className="form-check-label" htmlFor="inlineCheckbox60">Saturday</label>
                                                                                                    </div>
                                                                                                    <div className="form-check form-check-inline">
                                                                                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox70" onChange={this.onChangeCheckbox1.bind(this)} defaultChecked={false} value="Sunday" />
                                                                                                        <label className="form-check-label" htmlFor="inlineCheckbox70">Sunday</label>
                                                                                                    </div>
                                                                                                    <div className="row">
                                                                                                        <div className="col-4">
                                                                                                            <p>Selected Days:</p>
                                                                                                        </div>
                                                                                                        <div className="col">
                                                                                                            {this.state.serviceDays1.length>0 && this.state.serviceDays1.map((day1, k)=>{
                                                                                                                return(
                                                                                                                    <span key={k}>{day1} </span>
                                                                                                                )
                                                                                                            })}
                                                                                                        </div>
                                                                                                    </div>                                                                                                                                                            
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="form-group">
                                                                                                <label>From:</label>
                                                                                                <div className="form-row">
                                                                                                    <div className="col-2">
                                                                                                        <input value={this.state.startHour1} onChange={this.handleStartHour1.bind(this)} type="text" className="form-control form-control-sm" placeholder="HH" />
                                                                                                    </div>
                                                                                                    <div className="col-1 text-center">:</div>
                                                                                                    <div className="col-2">
                                                                                                        <input value={this.state.startMin1} onChange={this.handleStartMin1.bind(this)} type="text" className="form-control form-control-sm float-left" placeholder="MM" />
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="form-group">
                                                                                                <label>To:</label>
                                                                                                <div className="form-row">
                                                                                                    <div className="col-2">
                                                                                                        <input value={this.state.endHour1} onChange={this.handleEndHour1.bind(this)} type="text" className="form-control form-control-sm" placeholder="HH" />
                                                                                                    </div>
                                                                                                    <div className="col-1 text-center">:</div>
                                                                                                    <div className="col-2">
                                                                                                        <input value={this.state.endMin1} onChange={this.handleEndMin1.bind(this)} type="text" className="form-control form-control-sm float-left" placeholder="MM" />
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="col-1">
                                                                                            <button onClick={this.addEmployee1.bind(this)} className="btn btn-primary float-left" style={{marginTop: "31.5px"}}>+</button>
                                                                                        </div>
                                                                                        <div className="col-1"></div>
                                                                                    </div>
                                                                                    <button type="submit" className="btn btn-primary float-right">Submit</button>
                                                                                </form>                                                     
                                                                            </Modal.Body>
                                                                            <Modal.Footer>
                                                                                <Button variant="secondary" onClick={this.handleClose1.bind(this)}>
                                                                                    Close
                                                                                </Button>
                                                                            </Modal.Footer>
                                                                        </Modal>
                                                                    </a>
                                                                    <a className="dropdown-item" href="#">
                                                                        <Button onClick={()=>{this.deleteBusinessService(service.id)}} variant="white">
                                                                            Delete
                                                                        </Button>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>}
                                    <button className="btn btn-white btn-sm ml-5 float-right" type="button" onClick={this.handleShow.bind(this)}>
                                        <Icon className="fa fa-plus" style={{ fontSize: 20, color: "dark" }}/>
                                    </button>
                                    <Modal show={this.state.show} onHide={this.handleClose.bind(this)}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Create Your Service</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <form onSubmit={this.createService.bind(this)}>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInput">Description</label>
                                                    <input value={this.state.serviceDescription} onChange={this.handleServiceDescription.bind(this)} type="text" className="form-control" id="exampleInput" placeholder="Enter description" />
                                                </div>
                                                <div className="row">
                                                    <div className="col-10">
                                                        <div className="form-group">
                                                            <label htmlFor="exampleInput1">Add Employee</label>
                                                            <input value={this.state.newEmployee} onChange={this.handleNewEmployee.bind(this)} type="text" className="form-control" id="exampleInput1" aria-describedby="employeeHelp" placeholder="Name of employee" />
                                                            <small id="employeeHelp" className="form-text text-muted">Click add for each name entered</small>
                                                        </div>
                                                        {this.state.serviceEmployees.length>0 && <div>
                                                            {this.state.serviceEmployees.map((employee, i)=>{
                                                                return(
                                                                    <div key={i} className="row mb-1">
                                                                        <div className="btn-group ml-3">
                                                                            <button className="btn btn-success btn-sm text-left">{employee}</button>
                                                                        </div>
                                                                        <div className="btn-group ml-1">
                                                                            <button onClick={(event)=>{this.rejectEmployee(i,event)}} className="btn btn-success btn-sm float-left">x</button>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>}
                                                        <div className="form-group">
                                                            <label>Available On:</label>
                                                            <div>
                                                                <div className="form-check form-check-inline">
                                                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" onChange={this.onChangeCheckbox.bind(this)} defaultChecked={false} value="Monday" />
                                                                    <label className="form-check-label" htmlFor="inlineCheckbox1">Monday</label>
                                                                </div>
                                                                <div className="form-check form-check-inline">
                                                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" onChange={this.onChangeCheckbox.bind(this)} defaultChecked={false} value="Tuesday" />
                                                                    <label className="form-check-label" htmlFor="inlineCheckbox2">Tuesday</label>
                                                                </div>
                                                                <div className="form-check form-check-inline">
                                                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox3" onChange={this.onChangeCheckbox.bind(this)} defaultChecked={false} value="Wednesday" />
                                                                    <label className="form-check-label" htmlFor="inlineCheckbox3">Wednesday</label>
                                                                </div>
                                                                <div className="form-check form-check-inline">
                                                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox4" onChange={this.onChangeCheckbox.bind(this)} defaultChecked={false} value="Thursday" />
                                                                    <label className="form-check-label" htmlFor="inlineCheckbox4">Thursday</label>
                                                                </div>
                                                                <div className="form-check form-check-inline">
                                                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox5" onChange={this.onChangeCheckbox.bind(this)} defaultChecked={false} value="Friday" />
                                                                    <label className="form-check-label" htmlFor="inlineCheckbox5">Friday</label>
                                                                </div>
                                                                <div className="form-check form-check-inline">
                                                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox6" onChange={this.onChangeCheckbox.bind(this)} defaultChecked={false} value="Saturday" />
                                                                    <label className="form-check-label" htmlFor="inlineCheckbox6">Saturday</label>
                                                                </div>
                                                                <div className="form-check form-check-inline">
                                                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox7" onChange={this.onChangeCheckbox.bind(this)} defaultChecked={false} value="Sunday" />
                                                                    <label className="form-check-label" htmlFor="inlineCheckbox7">Sunday</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>From:</label>
                                                            <div className="form-row">
                                                                <div className="col-2">
                                                                    <input value={this.state.startHour} onChange={this.handleStartHour.bind(this)} type="text" className="form-control form-control-sm" placeholder="HH" />
                                                                </div>
                                                                <div className="col-1 text-center">:</div>
                                                                <div className="col-2">
                                                                    <input value={this.state.startMin} onChange={this.handleStartMin.bind(this)} type="text" className="form-control form-control-sm float-left" placeholder="MM" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>To:</label>
                                                            <div className="form-row">
                                                                <div className="col-2">
                                                                    <input value={this.state.endHour} onChange={this.handleEndHour.bind(this)} type="text" className="form-control form-control-sm" placeholder="HH" />
                                                                </div>
                                                                <div className="col-1 text-center">:</div>
                                                                <div className="col-2">
                                                                    <input value={this.state.endMin} onChange={this.handleEndMin.bind(this)} type="text" className="form-control form-control-sm float-left" placeholder="MM" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-1">
                                                        <button onClick={this.addEmployee.bind(this)} className="btn btn-primary float-left" style={{marginTop: "31.5px"}}>+</button>
                                                    </div>
                                                    <div className="col-1"></div>
                                                </div>
                                                <button type="submit" className="btn btn-primary float-right">Submit</button>
                                            </form>                                                     
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={this.handleClose.bind(this)}>
                                                Close
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                        <div className="col-1"></div>
                    </div>
                </div>}
            </div>
        )
    }
}