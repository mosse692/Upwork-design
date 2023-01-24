import './App.css';
import { Nav, Section1, Section2, Section3, Section4, Section5, Section6, Section7, Section8, Footer} from './components/';
import circle from './images/circle.svg'
import circleBigger from './images/circleBigger.svg'

function App() {
  return (
    <div className="App">
      <div className="circle">
        <img src={circle} alt="circle shape"/>
      </div>

      <div className="circle2">
        <img src={circle} alt="circle shape"/>
      </div>

      <div className="circle3">
        <img src={circleBigger} alt="circle shape"/>
      </div>

      <div className="circle4">
        <img src={circleBigger} alt="circle shape"/>
      </div>

      <div className="circle5">
        <img src={circleBigger} alt="circle shape"/>
      </div>

      <div className="circle6">
        <img src={circleBigger} alt="circle shape"/>
      </div>

      <div className="circle7">
        <img src={circleBigger} alt="circle shape"/>
      </div>

      <div className="circle8">
        <img src={circleBigger} alt="circle shape"/>
      </div>
      <Nav/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Section8/>
      <Footer/>
    </div>
  );
}

export default App;
