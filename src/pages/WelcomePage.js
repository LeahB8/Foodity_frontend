// import React from "react";
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import backgroundImage from '../images/backgroundImage.jpg'


// export default class WelcomePage extends React.Component {

//   render() {
//     return (
//       <div className="background-img">
//           <div className="welcome-div">
//             <h1>Welcome to Foodity</h1>
//             <h3>Explore the world through food.</h3>
//             <h3>Discover all of the hidden gems at home and abroad.</h3>
//           </div>
//       </div>
//     );
//   }
// }






import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function WelcomePage() {
  const classes = useStyles();

  return (
      <div className="welcome-card">
        <Card className={classes.card}>
        <CardContent>
            <Typography variant="h3" component="h3" color="#fdb600">
            Welcome to Foodity
            </Typography>
            <Typography variant="h5" component="h5" color="#fdb600">
            Explore the world through food.
            <br />
            Discover all of the hidden gems at home and abroad.
            </Typography>
        </CardContent>
        </Card>
      </div>
  
  );
}