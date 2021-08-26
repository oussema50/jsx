import logo from './logo.svg';
import './App.css';
import './style.css';
import imageInSrc from './imageInSrc.jpg';

function App() {
  return (
    <div className="app">
      <div>
      
        <h1 className="title red">oussema omrani</h1><br/>
        <img src={imageInSrc} alt="img"/><br/>        
        <img src={window.location.origin + '/imageInPublic.jpg'} alt="img"/><br/>        
      </div>
      <iframe  src="https://www.youtube.com/embed/Ke90Tje7VS0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    
  );
}

export default App;
