import React from "react";
import WeatherCard from './WeatherCard';
import Typography from 'material-ui/Typography';
import Toolbar from 'material-ui/Toolbar';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';


const styles = theme => ({
    container: {
        flexGrow: 1,
    },
    title: {
        flex: 1,
    },
    WeatherCard: {
        alignCenter: 1,
    },
});

export class Weather extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.container}>
                <div>
                        <Toolbar>
                            <Typography variant='title' className={classes.title}>
                            </Typography>
                        </Toolbar>
                </div>
                <WeatherCard/>
            </div>);
    }
}

Weather.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Weather);