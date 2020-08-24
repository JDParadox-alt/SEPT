import React, { Component } from 'react'
import { Card, CardContent, Divider, Grid, Paper, makeStyles, Chip, Input, Box } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    }
}));

export default class BusinessList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            name: "",
            businesses: []
        }
    }

    componentDidMount() {
        fetch(`http://localhost:8080/api/businesses/`)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                this.setState({ id: json.id })
                this.setState({ name: json.name })
                this.setState({ services: json.businessServices })
                this.setState({ description: json.id })
                this.setState({ phone: json.phone })
                this.setState({ address: json.address })
                this.setState({ businesses: json })
                console.log(this.state)
            })
    }

    render() {
        // const classes = useStyles();
        // const { value } = props;
        // const data = props.data ? props.data[business.id] : null;
        // const businessList = data ? data.BusinessList : null;
        // console.log(businessList)
        var { businesses } = this.state;

        return (
            <div className="container">

                <h1 style={{ textAlign: "center" }}> Business List</h1>

                <Grid container spacing={2} direction="row" justify="flex-start" style={{ marginTop: '30px' }} >
                    <Grid item xs={12} sm={6} md={4}>
                        {businesses.map(business => (
                            <p key={business.id}> Business Name: {business.name}</p>
                            
                        ))}
                        {/* <NavLink to={'/api/businesses/' + business.id}> */}
                        {/* <p>View Details</p> */}
                        {/* </NavLink> */}
                    </Grid>
                </Grid>

            </div>
        )
    }
}




// .map(value) business.name

// view details

// fetch business list from backend