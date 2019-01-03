import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar
            position="absolute"
        >
          <Typography variant="h4" gutterBottom component="h2">
            Orders
          </Typography>
        </AppBar>
        <main>
          <br />
          <br />
          <br />
          <br />
          <Button variant="contained" color="primary">
            New event
          </Button>

          <br />
          <br />
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat (g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key={1}>
                  <TableCell component="th" scope="row">
                    Row 1
                  </TableCell>
                  <TableCell align="right">100</TableCell>
                  <TableCell align="right">200</TableCell>
                </TableRow>
                <TableRow key={2}>
                  <TableCell component="th" scope="row">
                    Row 2
                  </TableCell>
                  <TableCell align="right">300</TableCell>
                  <TableCell align="right">400</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>

        </main>
      </div>
    );
  }
}

export default App;
