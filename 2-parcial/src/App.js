/* src/App.js */
import './App.css';
import { JiraCard } from './components/Organismos';

function App() {
  return (
    <div className="App">
      <JiraCard 
        colorClass="active" 
        titulo="Agenda/Topic" 
        codigo="SAAS-0000" 
        descripcion="Description of what is done here"
      />
      <JiraCard 
        colorClass="future" 
        titulo="Agenda/Topic" 
        codigo="SAAS-0000" 
        descripcion="Description of what is done here"
      />
      <JiraCard 
        colorClass="completed" 
        titulo="Agenda/Topic" 
        codigo="SAAS-0000" 
        descripcion="Description of what is done here"
      />
    </div>
  );
}

export default App;