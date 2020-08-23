import React from 'react'
import { Grid, Paper, makeStyles, Chip, Input } from '@material-ui/core'
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

function BusinessList() {
    const classes = useStyles();
    return (
        <div alignItems="center" texStAlign="center" key={business}>
            <h2 textAlign="center">Business List</h2>
            
            <Grid
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="center"
                style={{ marginTop: '30px' }}
                className={classes.root}

            >
                <Grid item xs={12} sm={6} md={4}>

                    <p>Business Name here</p>
                    <NavLink to={'/business/' + businessList.id}>
                        <p>View details</p>
                    </NavLink>

                </Grid>
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