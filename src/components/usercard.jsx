import React from "react";
import { makeStyles, Card, CardContent, CardMedia, Avatar, Typography, } from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles((theme) => ({
    text: {
        margin: theme.spacing(0, 0, 0.5),
        fontSize: '25px',
        color: '#422f17',
        fontFamily: 'Luxurious Roman',
    },
    avatar: {
        verticalAlign: "middle",
        marginRight: theme.spacing(0.5),
        color: '#362924',

    },
    large: {
        width: theme.spacing(18),
        height: theme.spacing(18),
        margin: theme.spacing(2, 2, 0),
        boxShadow: theme.shadows[5],


    },
    card: {
        borderRadius: 15,
        maxWidth: "470px",
        minWidth: "470px",
        height: "470px",
        backgroundColor: "#999f806b",

    },
    cardContent: {
        padding: theme.spacing(2, 0, 0, 0),
    },
    root: {
        color: '#422f17',
        fontFamily: ' Luxurious Roman ',
    }
}));

export default function UserCard(props) {
    const classes = useStyles();

    return (
        <div>
            <h1 className={classes.root}> User personal details</h1>
            <hr />
            <br/>
            <Card className={classes.card} elevation={20} style={{ display: "inline-block" }}>
                <p></p>
                <CardMedia align="center">
                    <Avatar src={props.picture} className={classes.large} />
                </CardMedia>


                <CardContent className={classes.cardContent}>
                    <Typography className={classes.text}
                        color="textSecondary"
                        variant="h6"
                        align="center" > {props.fullName}</Typography>
                    <Typography className={classes.text} color="textSecondary" variant="subtitle1" align="center">
                        <AlternateEmailIcon className={classes.avatar} />
                        {props.email}
                    </Typography>
                    <Typography className={classes.text} color="textSecondary" variant="subtitle1" align="center">
                        <PhoneIcon className={classes.avatar} />
                        {props.phone}
                    </Typography>
                    <Typography className={classes.text} color="textSecondary" variant="h6" align="center" >Gender ~ {props.gender}</Typography>

                    <Typography className={classes.text} color="textSecondary" variant="h6" align="center" >Age ~ {props.age}</Typography>

                    <Typography className={classes.text} color="textSecondary" variant="subtitle1" align="center">
                        <LocationOnIcon className={classes.avatar} />
                        {props.location}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}