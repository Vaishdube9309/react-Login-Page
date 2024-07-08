import logo from './logo.svg';
import './App.css';
import Heading1 from './Component/Heading1';
import Body1 from './Component/Body1';
import Condition from './Component/Condition';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
     <Heading1/>
     <Condition name="Vaish" email="vaish123@gmail.com"/>
     <Body1/>
     <Footer/>
    </div>
  );
}

export default App;
