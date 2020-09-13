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

        return (
            <div>

            </div>
        )
    }

}