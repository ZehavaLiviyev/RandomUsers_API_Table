import React from "react";
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    color: '#6e4f2a',
    fontFamily: 'Luxurious Roman',
  },
  det: {
    color: '#6e4f2a',
    fontFamily: 'Luxurious Roman',
  }
});

function Title() {

  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.root}>Random Users Table</h1>
      <hr/>
      <h4 className={classes.det} > Click on the full name for more details </h4>
    </div>

  );
}
export default Title;