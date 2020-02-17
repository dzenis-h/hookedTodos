import React from "react";

import { TodosProvider } from "../context/todosContext";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px"
  }
};

const TodoApp = props => {
  const { classes } = props;
  return (
    <Paper className="todo-app" elevation={0}>
      <AppBar
        className={classes.root}
        position="static"
        style={{ height: "4rem" }}
      >
        <Toolbar>
          <Typography color="inherit" className="heading">
            Hooked ToDos
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodosProvider>
            <TodoForm />
            <TodoList />
          </TodosProvider>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default withStyles(styles)(TodoApp);
