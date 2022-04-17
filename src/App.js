// import logo from './logo.svg';
// import './App.css';
import { Container } from '@mui/material';
import { Box } from '@mui/system';
import ContactDetails from './components/ContactDetails';
import Summary from './components/Summary';
import Experience from './components/Experience'
import Skills from './components/Skills';
import Certification from './components/Certification';
function App() {
  return (
    <div className="App">
      
     
      <Container  maxWidth="sm">
        <Box sx={{minHeight: "100vh"}}>
          <ContactDetails />
          <Summary />
          <Experience />
          <Skills />
          <Certification />
        </Box>
      </Container>
    </div>
  );
}

export default App;
