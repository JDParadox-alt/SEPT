import React, { Component } from 'react'
import { Card, CardContent, Divider, Grid, Paper, makeStyles, Box } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

export default class ServiceList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            name: "",
            services: []
        }
    }

getService(){
    fetch(`localhost:8080/api/businessServices`)
        .then(res=>res.json())
        .then(json=>{
            console.log(json)
            this.setState({services: json})
        })
}

    render() {
        return (
            <div className="container">

                <h1 style={{ textAlign: "center" }}> Service List</h1>

                <Grid container style={{ textAlign: "center" }}
                direction="row" justify="flex-start" alignItems="center"
                >
                    <Grid item spacing={2} xs={12} sm={6}>

                        {this.state.services.map(service => (
                            <Card>
                                <CardContent>
                                    <h3 key={service.uid} style={{fontSize:20, marginTop:8, letterSpacing:'0.5px'}}>{service.name}</h3>
                                </CardContent>
                                <Box display={'flex'}>
                                    <NavLink to={'/api/businessServices/' + service.id} style={{ textAlign: "center" }} >
                                        <p style={{fontSize:16, marginBottom:4, margin:0}}>View Details</p>
                                    </NavLink>
                                </Box>
                            </Card>
                        ))}


                    </Grid>
                </Grid>

            </div>
        )
    }
}
