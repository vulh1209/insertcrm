import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form id="home" action="google.com">
            <label>Name</label>
            <input id="Name" className="o2o-name"/>
            <label>Phone</label>
            <input id="Phone" className="o2o-phone"/>
            <label>Email</label>
            <input id="Email" className="o2o-email"/>
            <label>Note</label>
            <input id="Note" className="o2o-note"/>
            <button type="submit" id="submit">SUBMIT</button>
        </form>
    </div>
  );
}

export default App;
