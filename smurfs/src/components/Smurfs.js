import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 275
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 5
  }
});

const Smurfs = props => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.smurf.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Age: {props.smurf.age}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Height: {props.smurf.height} apples
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => props.deleteSmurf(props.smurf.id)}>
          Remove Smurf
        </Button>
      </CardActions>
    </Card>
  );
};

export default Smurfs;
