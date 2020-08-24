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

function BusinessList(props) {
    const classes = useStyles();
    const { value } = props;
    // const data = props.data ? props.data[business.id] : null;
    // const businessList = data ? data.BusinessList : null;
    console.log(businessList)

    return (
        <div className="container" alignItems="center" texStAlign="center">
            <h2>Business List</h2>

            <Grid
                container spacing={2} direction="row" justify="flex-start" alignItems="center" style={{ marginTop: '30px' }}
            // className={classes.root}
            >
                {businessList ? businessList.map((item) =>
                    <Grid item xs={12} sm={6} md={4}>

                        <p>Business Name here</p>
                        <NavLink to={'/businessServices/' + item.uid}>
                            <p>View details</p>
                        </NavLink>

                    </Grid>)
                    : null}

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