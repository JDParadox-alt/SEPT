import React, { Component } from 'react';

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
                                    <h3 className="mt-3 ml-3"> {this.state.name}'s Booked Appointments List</h3>
                                    <div className="card-body">
                                        {this.state.bookings.map(booking => {
                                            return (
                                                <div key={booking.id} className="card my-3">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <label>Id</label>
                                                            </div>
                                                            <div className="col-md-9">
                                                                <p>{booking.id}</p>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <label>Start Date Time</label>
                                                            </div>
                                                            <div className="col-md-9">
                                                                <p>{booking.startDateTime}</p>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <label>End Date Time</label>
                                                            </div>
                                                            <div className="col-md-9">
                                                                <p>{booking.endDateTime}</p>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <label>Customer</label>
                                                            </div>
                                                            <div className="col-md-9">
                                                                {/* <p>{booking.customer.id} | {booking.customer.username}</p> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <label>Notes</label>
                                                            </div>
                                                            <div className="col-md-9">
                                                                <p>{booking.notes}</p>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <label>Notify?</label>
                                                            </div>
                                                            <div className="col-md-9">
                                                                <p>{booking.notify}</p>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <label>Status</label>
                                                            </div>
                                                            <div className="col-md-9">
                                                                <p>{booking.status}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
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