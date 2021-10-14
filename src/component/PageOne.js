import React from 'react';
import { Slide, Typography, Fade } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        height: '100%',
        color: '#FFFFFF',
        backgroundColor: '#88bbbb',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bold: {
        fontWeight: 'bold',
        display: 'flex',
        flexDirection: 'row',
        width: 600
    },
    line: { display: 'block', width: '100%', padding: '2px 10px 0 10px' },
    hr: {
        borderTop: '5px solid #FFFFFF'
    }
});

const PageOne = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div>
                <Slide direction="down" timeout={1500} in={true} mountOnEnter unmountOnExit>
                    <Typography variant="h1">Lunch-n-Learn</Typography>
                </Slide>
            </div>
            <div>
                <Fade timeout={2500} in={true} mountOnEnter unmountOnExit>
                    <Typography variant="h2" className={classes.bold}>
                        <span className={classes.line}>
                            <hr className={classes.hr} />
                        </span>
                        One
                        <span className={classes.line}>
                            <hr className={classes.hr} />
                        </span>
                    </Typography>
                </Fade>
            </div>
        </div>
    );
};

export default PageOne;
