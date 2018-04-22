import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Card, { CardActions, CardContent } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    root: {
        marginTop: '20px',
        width: '50%',
        align: 'center'
    },
    table: {
        minWidth: 700,
    },
    overview: {
        width: '50%'
    },
    card: {
        minWidth: '100px'
    }


});

export class WeatherCard extends React.Component {
    constructor(props) {
        super(props);
    }

render(){
    const {classes} = this.props;
    return (
<Paper className={classes.root}>
    <Card className={classes.card}>
        <CardContent>
            <Typography variant="headline" component="h2">
                Weather
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
                Temperature: 30ºF <br/>
                Humidity: 20%
            </Typography>
        </CardContent>

    </Card>
</Paper>
);
}
}

WeatherCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WeatherCard);