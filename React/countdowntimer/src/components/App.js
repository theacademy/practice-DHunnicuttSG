import './App.css';
import HeroSection from './HeroSection';
import NavigationBar from './NavigationBar';
import SalesBanner from './SalesBanner';
import SimpleCountdown from './SimpleCountdown'

function App() {
  // const targetDate = new Date('2024-10-10:00:00').getTime()
  return (
    <div className="App">
      <SalesBanner/>
      {/* <SimpleCountdown targetDate={targetDate}/> */}
      <NavigationBar/>
      <HeroSection />
    </div>
  );
}

export default App;
