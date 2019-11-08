import React, { useState, useContext } from "react";
import { SmurfContext } from "../contexts/SmurfContext";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "black !important"
  },
  input: {
    display: "none"
  }
}));

const SmurfsForm = () => {
  const classes = useStyles();
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: ""
  });
  const { addSmurfs } = useContext(SmurfContext);

  const handleChange = event => {
    setNewSmurf({ ...newSmurf, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    addSmurfs(newSmurf);
  };

  return (
    <div className="SmurfForm">
      <h2>Add a new smurf</h2>
      <form
        className={classes.container}
        noValidate
        autoComplete="off"
        onSubmit={event => handleSubmit(event)}
      >
        <div>
          <TextField
            id="outlined"
            className={classes.textField}
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline,
                color: "black"
              }
            }}
            label="name"
            margin="normal"
            variant="outlined"
            name="name"
            onChange={event => handleChange(event)}
            value={newSmurf.name}
          />
        </div>
        <div>
          <TextField
            id="outlined"
            className={classes.textField}
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline,
                color: "black"
              }
            }}
            label="age"
            margin="normal"
            variant="outlined"
            name="age"
            onChange={event => handleChange(event)}
            value={newSmurf.age}
          />
        </div>
        <div>
          <TextField
            id="outlined"
            className={classes.textField}
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline,
                color: "black"
              }
            }}
            label="height"
            margin="normal"
            variant="outlined"
            name="height"
            onChange={event => handleChange(event)}
            value={newSmurf.height}
          />
        </div>
        <button>Add Smurf</button>
      </form>
    </div>
  );
};

export default SmurfsForm;
