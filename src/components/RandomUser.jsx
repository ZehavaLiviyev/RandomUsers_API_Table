import React, { useState, useEffect } from 'react';
import getRandomUser from '../services/getRandomUser';
import { TableCell, TableRow, Avatar, makeStyles } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const NUMBER_PER_PAGE = 10;

const useStyles = makeStyles({
    root: {
        color: '#422f17',
        fontFamily: 'Luxurious Roman',
    }
});

function RandomUser(props) {
    const classes = useStyles();
    const [data, setData] = useState([]);
    const currentPage = props.currentPage;

    useEffect(getUser, []);

    function getUser() {
        getRandomUser()
            .then(
                (u) => {
                    setData(u);
                    console.log("getUser function =>");
                    console.log(u);
                }
            );
    }



    return (
        <React.Fragment>
            {data
                .slice(currentPage * NUMBER_PER_PAGE - NUMBER_PER_PAGE, currentPage * NUMBER_PER_PAGE)
                .map((element, index) =>
                    <TableRow key={index}>
                        <TableCell component="th" scope="row">
                            <Avatar src={element.picture.medium} />
                        </TableCell>
                        <TableCell className={classes.root} align='center'>
                            <Link className={classes.root} to={`/${element.name.first}`}><b>{element.name.first} {element.name.last}</b></Link>
                        </TableCell>
                        <TableCell className={classes.root} align='center'>{element.email} </TableCell>
                        <TableCell className={classes.root} align='center'>{element.gender}</TableCell>
                        <TableCell className={classes.root} align='center'>{element.dob.age} </TableCell>
                    </TableRow>
                )}

        </React.Fragment>

    );
}
export default RandomUser;