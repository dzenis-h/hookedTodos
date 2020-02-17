import React, { useContext } from "react";

import useInputState from "../hooks/useInput";
import { DispatchContext } from "../context/todosContext";

import TextField from "@material-ui/core/TextField";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CheckIcon from "@material-ui/icons/Check";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

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

const EditTodoForm = ({ id, task, toggleEditForm }) => {
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, reset] = useInputState(task);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "EDIT", id: id, newTask: value });
    reset();
    toggleEditForm();
  };

  return (
    <form onSubmit={handleSubmit} className="edit-form">
      {" "}
      <MuiThemeProvider theme={theme}>
        <TextField
          margin="normal"
          value={value}
          onChange={handleChange}
          fullWidth
          autoFocus
        />
        <ListItemSecondaryAction>
          <IconButton aria-label="Edit">
            <CheckIcon onClick={handleSubmit} />
          </IconButton>
        </ListItemSecondaryAction>
      </MuiThemeProvider>
    </form>
  );
};
export default EditTodoForm;
