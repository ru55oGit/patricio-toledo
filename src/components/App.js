import '../styles/app.scss';
import NavBar from './NavBar';
import PersonalData from './PersonalData';
import ProfessionalData from './ProfessionalData';

function App() {
  return (
    <div className="home">
        <NavBar />
        <PersonalData />
        <ProfessionalData />
    </div>
  );
}

export default App;
