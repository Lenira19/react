import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';


function App() {

  let Delish = [{
    cost: 1580,
    name: 'супСМакаронами'

  }
    ,

  {
    cost: 450,
    name: 'жареныеЯйца'
  },

  {
    cost: 680,
    name: 'оливьеСалад'
  },

  {
    cost: 990,
    name: 'ФунчозаСОвощами'
  }]


  return (
    <div className="App">
      <header className="App-header">
        {Delish.map((item) => {
         return <Menu Name={item.name} Cost={item.cost}/>
        }

        )}

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
