
import React, { useState } from 'react';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, makeStyles, Card }
  from '@material-ui/core';
  import Pagination from '@material-ui/lab/Pagination';
import RandomUser from './RandomUser';
import Title from './Title';

const NUMBER_PER_PAGE = 10;
const useStyles = makeStyles({
    root: {
      color: '#422f17',
      fontFamily: 'Luxurious Roman',
    },
    card: {
      backgroundColor: '#999f80'
    }
  });
function MyTable() {
  
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <React.Fragment>
      <Title></Title>
      <Card className={classes.card} elevation={24} style={{ width: '70rem' }}>

        <TableContainer>

          <Table sx={{ minWidth: 650 }}>

            <TableHead>
              <TableRow>
                <TableCell className={classes.root} align='left'>Picture</TableCell>
                <TableCell className={classes.root} align='center'>Full name</TableCell>
                <TableCell className={classes.root} align='center'>Email</TableCell>
                <TableCell className={classes.root} align='center'>Gender</TableCell>
                <TableCell className={classes.root} align='center'>Age</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <RandomUser currentPage={currentPage} ></RandomUser>
            </TableBody>

          </Table>
        </TableContainer>


        <Pagination
            size="small"
            page={currentPage}
            count={Math.ceil(20 / NUMBER_PER_PAGE)}
            onChange={(event, page) => setCurrentPage(page)}
            variant="outlined"
            shape="rounded"
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              paddingTop: 10,
            }}
          />

      </Card >
    </React.Fragment>
  )

}
export default MyTable;