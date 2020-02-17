import React, { useContext } from "react";

import useInputState from "../hooks/useInput";
import { DispatchContext } from "../context/todosContext";

import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  overrides: {
    MuiInput: {
      underline: {
        "&:before": {
          borderBottom: "1px solid pink"
        },
        "&:after": {
          borderBottom: "2px solid pink"
        }
      }
    },
    MuiInputLabel: {
      root: {
        color: "#fd6888",
        "&$focused": {
          color: "#fe6b8b"
        }
      }
    }
  }
});

const TodoForm = () => {
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, reset] = useInputState("");

  return (
    <Paper className="todo-form">
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch({ type: "ADD", task: value });
          reset();
        }}
      >
        <MuiThemeProvider theme={theme}>
          <TextField
            value={value}
            onChange={handleChange}
            margin="normal"
            label="Add New Todo"
            fullWidth
          />
        </MuiThemeProvider>
      </form>
    </Paper>
  );
};
export default TodoForm;
