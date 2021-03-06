import React, { Component, Fragment } from 'react';
import Icon from '@material-ui/core/Icon';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link, NavLink } from 'react-router-dom';
import moment from 'moment';
import DateTimePicker from 'react-datetime-picker';

require('dotenv').config()
const API_URL = process.env.REACT_APP_API_URL
export default class BookingEditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            import: [],
            import1: [],
            customerProfileExists: false,
            customerProfile: {},
            businessProfileExists: false,
            businessProfile: {},
            serviceName: "",
            serviceBusiness: {},
            serviceDescription: "",
            serviceEmployees: [],
            serviceDays: [],
            serviceHours: [],
            newEmployee: "",
            startHour: "",
            startMin: "",
            endHour: "",
            endMin: "",
            customer:{},
            businessServiceExists: false,
            businessService: [],
            reloader: false,
            serviceName1: "",
            serviceBusiness1: {},
            serviceDescription1: "",
            serviceEmployees1: [],
            serviceDays1: [],
            newEmployee1: "",
            startHour1: "",
            startMin1: "",
            endHour1: "",
            endMin1: "",
            status1:'unseen',
            //Booking Form
            bookingNotes: "",
            bookingNotify: "false",
            bookingStatus: "",
            moment: moment(),
            date: new Date(),
            date1: new Date(),
            status: "unseen",
            businessServiceId: 0,
            target_service: {},
            isCustomer:false,
            isBusiness:false
        }
    }

    checkCustomerProfile(){
        fetch(`${API_URL}/customers`)
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

    getCurrentBooking(bookingId){
        fetch(`${API_URL}/bookings/`+bookingId)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            var new_data=json
            this.setState({ businessServiceId: new_data.businessService.id }, ()=>console.log(this.state.businessServiceId))
            this.setState({ date: new Date(new_data.startDateTime) }, ()=>{console.log(this.state.date)})
            this.setState({ date1: new Date(new_data.endDateTime) }, ()=>{console.log(this.state.date1)})
            this.setState({ bookingNotes: new_data.notes }, ()=>{console.log(this.state.bookingNotes)})
            this.setState({ bookingNotify: new_data.notify }, ()=>{console.log(this.state.bookingNotify)})
            this.setState({ status: new_data.status }, ()=>{console.log(this.state.status)})
            this.setState({ customer: new_data.customer }, ()=>{console.log(this.state.customer)})
            this.getTargetService(new_data.businessService.id)
            if (this.props.auth.user != null) {
                if (this.props.auth.user.attributes.email === new_data.businessService.business.email) {
                    this.setState({isBusiness: true})
                    console.log('This is the business account')
                }
                if (new_data.customer) {
                    if (this.props.auth.user.attributes.email === new_data.customer.email) {
                        this.setState({isCustomer: true})
                        console.log('This is the customer account')
                    }
                }
            }
            
            
        })
    }

    getTargetService(serviceId){
        fetch(`${API_URL}/businessServices/`+serviceId)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            var new_data=json
            this.setState({ target_service: new_data }, ()=>{console.log(this.state.target_service)})
    })}
    handleBookingNotes(event){
        this.setState({ bookingNotes: event.target.value })
    }
    handleStatus(event){
        this.setState({ status: event.target.value })
    }
    onChangeCheckboxNotify(event){
        if(event.target.checked===true){
            this.setState({ bookingNotify: event.target.value })
        } else {
            this.setState({ bookingNotify: "false" })
        }
    }
    onChangeDate=(date)=>{
        this.setState({ date: new Date(date) }, ()=>console.log(this.state.date))
    }
    onChangeDate1=(date1)=>{
        this.setState({ date1: new Date(date1) }, ()=>console.log(this.state.date1))
    }

    createBooking(event, target_service){
        var checkValidSum=0
        if(this.state.businessServiceId){
            checkValidSum++
            console.log(this.state.businessServiceId)
            console.log(checkValidSum)
        }
        // if(this.state.customerProfileExists){
        //     checkValidSum++
        //     console.log(this.state.customerProfile.id)
        //     console.log(checkValidSum)
        // }
        if(this.state.bookingNotes){
            checkValidSum++
            console.log(checkValidSum)
        }
        if(this.state.date&&this.state.date1&&target_service){
            var today = new Date()
            var startDate = this.state.date;
            var endDate = this.state.date1;
            var str_startDate = String(this.state.date)
            var str_endDate = String(this.state.date1)
            var new_days_arr=[]

            console.log(typeof startDate)
            console.log(typeof endDate)
            console.log(endDate-startDate)
            console.log(startDate-today)
            console.log(Math.ceil(Math.abs(endDate-startDate)/(1000 * 60 * 60 * 24)))
            console.log(Math.ceil(Math.abs(startDate-today)/(1000 * 60 * 60 * 24)))
            if((endDate-startDate)>0 && Math.ceil(Math.abs(endDate-startDate)/(1000 * 60 * 60 * 24))<=1 && (startDate-today)>0 && Math.ceil(Math.abs(startDate-today)/(1000 * 60 * 60 * 24))<=7){
                checkValidSum++
                console.log(checkValidSum)
                console.log(endDate-startDate)
                console.log(Math.ceil(Math.abs(endDate-startDate)/(1000 * 60 * 60 * 24)))
                console.log(startDate-today)
                console.log(Math.ceil(Math.abs(startDate-today)/(1000 * 60 * 60 * 24)))
            }
            for (var i = 0; i < target_service.workingHours[0].days.length; i++) {
                new_days_arr.push(target_service.workingHours[0].days[i].slice(0,3))
            }
            for (var i = 0; i < new_days_arr.length; i++) {
                if(str_startDate.slice(0,3)===new_days_arr[i]&&str_endDate.slice(0,3)===new_days_arr[i]){
                    checkValidSum++
                    console.log(checkValidSum)
                }
            }
            console.log(str_startDate)
            console.log(str_endDate)
            console.log(parseInt(str_startDate.slice(16,18)))
            console.log(parseInt(str_endDate.slice(16,18)))
            console.log(parseInt(str_startDate.slice(16,18))<=parseInt(target_service.workingHours[0].endTime.slice(0,2))&&parseInt(str_startDate.slice(16,18))>=parseInt(target_service.workingHours[0].startTime.slice(0,2))&&parseInt(str_endDate.slice(16,18))<=parseInt(target_service.workingHours[0].endTime.slice(0,2))&&parseInt(str_endDate.slice(16,18))>=parseInt(target_service.workingHours[0].startTime.slice(0,2)))
            if(parseInt(str_startDate.slice(16,18))<=parseInt(target_service.workingHours[0].endTime.slice(0,2))&&parseInt(str_startDate.slice(16,18))>=parseInt(target_service.workingHours[0].startTime.slice(0,2))&&parseInt(str_endDate.slice(16,18))<=parseInt(target_service.workingHours[0].endTime.slice(0,2))&&parseInt(str_endDate.slice(16,18))>=parseInt(target_service.workingHours[0].startTime.slice(0,2))){
                if(parseInt(str_startDate.slice(16,18))===parseInt(target_service.workingHours[0].startTime.slice(0,2))){
                    if(parseInt(str_startDate.slice(19,21))>=parseInt(target_service.workingHours[0].startTime.slice(-2))){
                    } else {
                        checkValidSum=checkValidSum-1
                        console.log("-1: "+checkValidSum)
                    }
                }
                if(parseInt(str_endDate.slice(16,18))===parseInt(target_service.workingHours[0].endTime.slice(0,2))){
                    if(parseInt(str_endDate.slice(19,21))<=parseInt(target_service.workingHours[0].endTime.slice(-2))){
                    } else {
                        checkValidSum=checkValidSum-1
                        console.log("-1: "+checkValidSum)
                    }
                }
                checkValidSum++//check if hour is within available service working hour
                console.log(checkValidSum)
            }
        }
        if(checkValidSum!==5){
            alert("Some inputs are missing or wrongly entered. Please re-fill the form with all required inputs.")
            event.preventDefault();
        } else {
            var newStatus=this.state.status
            if (!this.state.isBusiness && this.state.isCustomer) {
                newStatus = 'Unseen'
            }
            var new_obj_1 = {
                id: this.props.match.params.id,
                businessService: {id: this.state.businessServiceId},
                startDateTime: String(this.state.date),
                endDateTime: String(this.state.date1),
                customer: this.state.customer,
                notes: this.state.bookingNotes,
                notify: this.state.bookingNotify,
                status: newStatus
            }
            console.log(new_obj_1)
            fetch(`${API_URL}/bookings`, {
             headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
             },
             method: "PUT",
             body: JSON.stringify(new_obj_1)
            })
            alert("Your booking is updated.")
            this.props.history.push('/booking/'+this.props.match.params.id)
            event.preventDefault();
        }
    }

    deleteBooking(id){
        fetch(`${API_URL}/bookings/` + id, {
            method: 'DELETE',
        })
        alert("Your booking is deleted.")
        this.props.history.push('/')
    }

    componentDidMount() {
        this.checkCustomerProfile()
        this.getCurrentBooking(this.props.match.params.id)
    }
    render() {

        const render_forBusiness = () => {
            return (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Selected Book ID: {this.props.match.params.id}</h5>
                        <form onSubmit={(event)=>this.createBooking(event, this.state.target_service)}>
                            <div class="form-group">
                                <label for="exampleFormControlSelect1">Status</label>
                                <select onChange={this.handleStatus.bind(this)} value={this.state.status} class="form-control" id="exampleFormControlSelect1">
                                    <option>Unseen</option>
                                    <option>Approved</option>
                                    <option>Unverified</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputa1">Notes</label>
                                <input value={this.state.bookingNotes} onChange={this.handleBookingNotes.bind(this)} type="text" className="form-control" id="exampleInputa1" placeholder="Enter notes" />
                            </div>
                            <div className="row">
                                <div className="col-10">
                                    <div className="form-group">
                                        <label>Allow Notification</label>
                                        <div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="checkbox" id="inlineCheckbox10a" onChange={this.onChangeCheckboxNotify.bind(this)} defaultChecked={false} value="true" />
                                                <label className="form-check-label" htmlFor="inlineCheckbox10a">Send you a reminder</label>
                                            </div>                                                                                                                                                           
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>From:</label>
                                        <DateTimePicker
                                            value={this.state.date}
                                            onChange={this.onChangeDate}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>To:</label>
                                        <DateTimePicker
                                            value={this.state.date1}
                                            onChange={this.onChangeDate1}
                                        />
                                    </div>
                                    
                                </div>
                                
                                <div className="col-2"></div>    
                            </div>
                            <button type="submit" className="btn btn-primary float-right ml-1">Submit</button>
                            <button onClick={()=>this.deleteBooking(this.props.match.params.id)} className="btn btn-danger float-right">Delete</button>
                        </form>
                    </div> 
                </div>
            )
        }

        const render_forCustomer = () => {
            return (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Selected Book ID: {this.props.match.params.id}</h5>
                        <form onSubmit={(event)=>this.createBooking(event, this.state.target_service)}>
                            <div className="form-group">
                                <label htmlFor="exampleInputa1">Notes</label>
                                <input value={this.state.bookingNotes} onChange={this.handleBookingNotes.bind(this)} type="text" className="form-control" id="exampleInputa1" placeholder="Enter notes" />
                            </div>
                            <div className="row">
                                <div className="col-10">
                                    <div className="form-group">
                                        <label>Allow Notification</label>
                                        <div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="checkbox" id="inlineCheckbox10a" onChange={this.onChangeCheckboxNotify.bind(this)} defaultChecked={false} value="true" />
                                                <label className="form-check-label" htmlFor="inlineCheckbox10a">Send you a reminder</label>
                                            </div>                                                                                                                                                           
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>From:</label>
                                        <DateTimePicker
                                            value={this.state.date}
                                            onChange={this.onChangeDate}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>To:</label>
                                        <DateTimePicker
                                            value={this.state.date1}
                                            onChange={this.onChangeDate1}
                                        />
                                    </div>
                                </div>
                                <div className="col-2"></div>
                            </div>
                            <button type="submit" className="btn btn-primary float-right ml-1">Submit</button>
                            <button onClick={()=>this.deleteBooking(this.props.match.params.id)} className="btn btn-danger float-right">Delete</button>
                        </form>
                    </div>
                </div>
            )
        }

        return(
            <div className="container-fluid profile-container-bg py-3">
                <div className='container'>
                    {this.state.isBusiness? 
                        <Fragment>
                            {render_forBusiness()} 
                        </Fragment>
                    :
                        <Fragment>
                            {this.state.isCustomer?
                                <Fragment>
                                    {render_forCustomer()} 
                                </Fragment>
                            :
                                <Fragment>You're not authorised to edit this booking</Fragment>
                            }
                            
                        </Fragment>
                    }
                </div>
            </div>
        )
    }
}