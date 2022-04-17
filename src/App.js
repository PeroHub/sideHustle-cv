// import logo from './logo.svg';
// import './App.css';
import { Container } from '@mui/material';
import { Box } from '@mui/system';
import ContactDetails from './components/ContactDetails';
import Summary from './components/Summary';
import Experience from './components/Experience'
function App() {
  return (
    <div className="App">
      
     
      <Container  maxWidth="sm" sx={{border: "1px solid red"}}>
        <Box sx={{minHeight: "100vh"}}>
          <ContactDetails />
          <Summary />
          <Experience />
        </Box>
      </Container>
    </div>
  );
}

export default App;
