import logo from './logo.svg';
import './App.css';
import Carousel from './Components/Carousel';

function App() {
  return (

        <div style={{
      display: 'flex',
      justifyContent: 'center', // Centers horizontally
      alignItems: 'center',     // Centers vertically
      height: '100vh',          // Ensures the container takes up the full viewport height
    }}>
      <Carousel />

    </div>
    
        

            
        

  );
}

export default App;
