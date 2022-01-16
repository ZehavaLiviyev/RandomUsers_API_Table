import React from "react";
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    color: '#1e5a81db',
    fontFamily: 'Luxurious Roman',
  },
  det: {
    color: '#1e5a81d4',
    fontFamily: 'Luxurious Roman',
  }
});

function Title() {

  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.root}>Random Users Table</h1>
      <h4 className={classes.det} > Click on the full name for more details </h4>
    </div>

  );
}
export default Title;