
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import UserForm from "./components/userform"
import DisplayForm from './components/displayForm'
import './App.css';
import { useContext } from 'react';
import { UserContext } from './context/usercontext';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
  colorGreen: {
    background: '#5c5569',
  },
}));


function App() {
  const classes = useStyles()
  const {page} = useContext(UserContext)[1]
  return (
      <div className="App">
        <AppBar position="static" elevation={0} className = {classes.colorGreen}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Mutil Step Form
            </Typography>
          </Toolbar>
        </AppBar>
        { page === 'user'?
        <UserForm />:
        <DisplayForm />}
      </div>
  );
}

export default App;
