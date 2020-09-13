import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import DateTimePicker from 'react-datetime-picker';

export default class BookingDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            found: 'loading',
            id: 0,
            businessService: {},
            startDateTime: "",
            endDateTime: "",
            customer: "",
            notes: "",
            notify: "",
            status: ""
        }
    }

    // getCurrentBookingItem(id){
    //     fetch(`http://localhost:8080/api/bookings/` + id)
    //     .then(res => res.json())
    //     .then(json => {
    //         console.log(json)
    //         var bookingItem = json
    //         if (bookingItem) {
    //             this.setState({ })
    //         }
    //     })
    // }

    getBookingDetails() {
        console.log(this.props.match.params.id)
        fetch(`http://localhost:8080/api/bookings/${this.props.match.params.id}`)
            .then(res => {
                if (res.ok) {
                    this.setState({ found: "found" })
                    return res.json()
                }
                else {
                    console.log(res.ok + " | Shite. It's fucked. Check your URL params?")
                    this.setState({ found: "notFound" })
                }
            })
            .then(json => {
                if (this.state.found === "found") {
                    console.log(json)
                    this.setState({ id: json.id })
                    this.setState({ businessService: json.businessService })
                    this.setState({ startDateTime: json.startDateTime })
                    this.setState({ endDateTime: json.endDateTime })
                    this.setState({ customer: json.customer })
                    this.setState({ notes: json.notes })
                    this.setState({ notify: json.nofity })
                    this.setState({ status: json.status })
                    console.log(this.state)
                }
            })
    }

    // handleStartHour(event) {
    //     this.setState({ startHour: event.target.value })
    // }
    // handleStartMin(event) {
    //     this.setState({ startMin: event.target.value })
    // }
    // handleEndHour(event) {
    //     this.setState({ endHour: event.target.value })
    // }
    // handleEndMin(event) {
    //     this.setState({ endMin: event.target.value })
    // }
    handleBookingNotes(event) {
        this.setState({ bookingNotes: event.target.value })
    }
    handleBookingNotify(event) {
        this.setState({ bookingNotify: event.target.value })
    }
    handleBookingStatus(event) {
        this.setState({ bookingStatus: event.target.value })
    }
    handleShow() {
        this.setState({ show: true })
    }
    handleClose() {
        this.setState({ show: false })
    }
    componentDidMount() {
        this.getBookingDetails()
    }

    render() {
        const render_bookingDetails = () => {
            if (this.state.found === "loading") {
                return (
                    <div className="container emp-profile" style={{ textAlign: 'center' }}>
                        <h3>The page is still loading.</h3>
                    </div>
                )
            }
            else if (this.state.found === "notFound") {
                return (
                    <div className="container emp-profile" style={{ textAlign: 'center' }}>
                        <h3>An error occured while loading the page. Please try again.</h3>
                    </div>
                )
            }
            else {
                return (
                    <div className="container-fluid profile-container-bg py-3">
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col-10">
                                <div className="card my-3">
                                    <h3 className="mt-3 ml-3"> Booking ID : {this.state.id}</h3>
                                    <div className="card-body">
                                        <div className="card my-3">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-10">
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <label>Id</label>
                                                            </div>
                                                            <div className="col-md-7">
                                                                <p>{this.state.id}</p>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <label>Start Date Time</label>
                                                            </div>
                                                            <div className="col-md-7">
                                                                <p>{this.state.startDateTime}</p>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <label>End Date Time</label>
                                                            </div>
                                                            <div className="col-md-7">
                                                                <p>{this.state.endDateTime}</p>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <label>Customer</label>
                                                            </div>
                                                            <div className="col-md-7">
                                                                <label>{this.state.customer}</label>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <label>Notes</label>
                                                            </div>
                                                            <div className="col-md-7">
                                                                <p>{this.state.notes}</p>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <label>Notify?</label>
                                                            </div>
                                                            <div className="col-md-7">
                                                                <p>{this.state.notify}</p>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <label>Status</label>
                                                            </div>
                                                            <div className="col-md-7">
                                                                <p>{this.state.status}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div className="dropdown">
                                                            <button className="btn btn-white btn-sm ml-5 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <Icon className="fa fa-cog" style={{ fontSize: 20, color: "dark" }} />
                                                            </button>
                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                <a className="dropdown-item" href="#">
                                                                    <Button variant="white" onClick={(i) => {
                                                                        this.handleShow()
                                                                        // this.getCurrentBookingItem(booking.id)
                                                                    }}>
                                                                        Edit
                                                                </Button>
                                                                    <Modal show={this.state.show1} onHide={this.handleClose.bind(this)}>
                                                                        {/* <Modal.Header closeButton>
                                                                        <Modal.Title>Edit Booking</Modal.Title>
                                                                    </Modal.Header>
                                                                    <Modal.Body> */}
                                                                        {/* <form onSubmit={(event) => { this.updateBusinessService(event, service.id) }}>
                                                                            <div className="form-group">
                                                                                <label htmlFor="notes"> Notes </label>
                                                                                <input value={this.state.notes} onChange={this.handleBookingNotes.bind(this)} type="text" className="form-control" id="notes" placeholder="Enter notes" />
                                                                            </div>
                                                                            <div className="form-group">

                                                                            </div>

                                                                            <button type="submit" className="btn btn-primary float-right">Submit</button>
                                                                        </form> */}
                                                                        {/* </Modal.Body> */}
                                                                    </Modal>
                                                                </a>
                                                                {/* <a className="dropdown-item" href="#">
                                                                            <Button onClick={() => { this.deleteBusinessService(service.id) }} variant="white">
                                                                                Delete
                                                                        </Button>
                                                                        </a> */}


                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1"></div>
                        </div>

                    </div>
                )
            }
        }
        return (
            <div>
                {this.props.auth.isAuthenticated && this.props.auth.user ? <div className="container-fluid profile-container-bg py-3">
                    {render_bookingDetails()}
                </div> : null}
            </div>
        )
    }

}