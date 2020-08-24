import React from 'react'
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

const BusinessCard = (props) => {
    const styles = useStyles();
    return (
        <Card>
            <CardContent>

            </CardContent>
            <Divider />
            <Box></Box>

        </Card>
    )
}

function BusinessList(props) {
    // const classes = useStyles();
    // const { value } = props;
    // const data = props.data ? props.data[business.id] : null;
    // const businessList = data ? data.BusinessList : null;
    // console.log(businessList)

    fetch(`http://localhost:8080/businesses/$`)
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
                this.setState({ name: json.name })
                console.log(this.state)
            }

        })

    return (
        <div className="container" alignItems="center" texStAlign="center">
            <h2>Business List</h2>

            <Grid
                container spacing={2} direction="row" justify="flex-start" alignItems="center" style={{ marginTop: '30px' }}
            // className={classes.root}
            >
                {/* {businessList ? businessList.map((item) => */}
                    <Grid item xs={12} sm={6} md={4}>

                        <p>Business Name here</p>
                        <NavLink to={'/businessServices/' + item.uid}>
                            <p>View details</p>
                        </NavLink>

                    </Grid>
                    {/* ) : null} */}

                {/* <Grid item xs={12} sm={6} md={4}>
                    <p>P2</p>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <p>P3</p>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <p>P4</p>
                </Grid> */}
            </Grid>

        </div>
    )
}


export default (BusinessList)

// .map(value) business.name

// view details

// fetch business list from backend