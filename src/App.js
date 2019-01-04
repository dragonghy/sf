import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { ApolloProvider, Query } from "react-apollo";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import './App.css';

const client = new ApolloClient({
  uri: "http://huayang.me:4000/graphql"
});

const GET_EVENTS = gql`
{
  events {
    id
    title
    startTime
    endTime
  }
}
`;

class App extends Component {
  state = {
    open: false
  };

  render() {
    return (
        <ApolloProvider client={client}>
          <div className="App">
            <AppBar
                position="absolute"
            >
              <Typography variant="h4" gutterBottom component="h2">
                Orders
              </Typography>
            </AppBar>
            <main>
              <br/>
              <br/>
              <br/>
              <br/>
              <Button variant="contained" color="primary" onClick={() => this.setState({ open: true})}>
                New event
              </Button>
              <Dialog open={this.state.open} onClose={() => this.setState({ open: false})} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">New event</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Create a new event
                  </DialogContentText>
                  <TextField
                      autoFocus
                      margin="dense"
                      id="title"
                      label="Title"
                  />
                  <TextField
                      id="startTime"
                      label="Start"
                      type="datetime-local"
                      InputLabelProps={{
                        shrink: true,
                      }}
                  />
                  <TextField
                      id="endTime"
                      label="End"
                      type="datetime-local"
                      InputLabelProps={{
                        shrink: true,
                      }}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => this.setState({ open: false})} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={() => this.setState({ open: false})} color="primary">
                    Create
                  </Button>
                </DialogActions>
              </Dialog>

              <br/>
              <br/>
              <Paper>
                <Query query={GET_EVENTS}>
                  {({loading, error, data}) => {
                    if (loading) return "Loading...";
                    if (error) return `Error! ${error.message}`;

                    const rows = data.events.map(event => (
                        <TableRow key={event.id}>
                          <TableCell>{event.title}</TableCell>
                          <TableCell>{event.startTime ? new Date(event.startTime).toDateString() : ''}</TableCell>
                          <TableCell>{event.endTime ? new Date(event.endTime).toDateString() : ''}</TableCell>
                        </TableRow>
                    ));

                    return (
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Title</TableCell>
                              <TableCell align="right">Start</TableCell>
                              <TableCell align="right">End</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {rows}
                          </TableBody>
                        </Table>
                    );
                  }}
                </Query>
              </Paper>
            </main>
          </div>
        </ApolloProvider>
    );
  }
}

export default App;
