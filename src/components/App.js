import loader from '../images/loader.svg';
import '../styles/App.scss';

function App() {
  return (
    <div className="home">
      <header className="header">
        <img src={loader} className="loader" alt="loader" />
      </header>
    </div>
  );
}

export default App;
