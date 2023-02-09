import {Container, AppBar,Typography,Grow,Grid} from '@material-ui/core' 
import memories from './images/memories.jpeg'

import './App.css';

function App() {
  return (
   <Container maxWidth='lg'>
    <AppBar position='static' color='inherit'>
      <Typography variant='h2' align='center'>Memories</Typography>

      <img src={memories} alt="memories" height="300"/>

    </AppBar>



   </Container>
  );
}

export default App;
