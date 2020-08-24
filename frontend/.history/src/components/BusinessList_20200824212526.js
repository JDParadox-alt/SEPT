import React, { Component } from 'react'
import { Card, CardContent, Divider, Grid, Paper, makeStyles, Box } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
// import classes from '*.module.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
        display: 'flex',
        flexWrap: 'wrap',
    },
    card: {
        borderRadius: 12,
        minWidth: 256,
        textAlign: 'center',
    }
}));

// const BusinessCard = (props) => {
//     const styles = useStyles();
//     return(
//         <Card className={styles.card}>
// <CardContent>
//     <h3></h3>
// </CardContent>
//         </Card>
//     )
// }


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
        var { businesses } = this.state;

        return (
            <div className="container">

                <h1 style={{ textAlign: "center" }}> Business List</h1>

                <Grid container spacing={2} style={{ textAlign: "center" }}
                //direction="row" justify="flex-start" style={{ marginTop: '30px' }} 
                >
                    <Grid item xs={12} sm={6} md={4}>

                        {businesses.map(business => (
                            <Card>
                                <CardContent>
                                    <h3 key={business.uid} style={{fontSize:20, marginTop:8, letterSpacing:'0.5px'}}>{business.name}</h3>
                                </CardContent>
                                <Box display={'flex'}>
                                    <NavLink to={'/api/businesses/' + business.id} style={{ textAlign: "center" }} >
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
