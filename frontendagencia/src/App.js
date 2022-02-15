
import './App.css';
import Appbar from './components/Appbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ClienteCadastro from './pages/Cliente/ClienteCadastro';
import ClienteBuscar from './pages/Cliente/ClienteBuscar';
import DestinoCadastro from './pages/Destino/DestinoCadastro';
import DestinoBusca from './pages/Destino/DestinoBusca';
import AnuncioCadastro from './pages/Anuncio/AnuncioCadastro';
import AnuncioBusca from './pages/Anuncio/AnuncioBusca';
import ContatoCadastro from './pages/Contato/ContatoCadastro';




function App() {
  return (
    
    <Router>
      <div class="App">
        <Appbar />
        <div class="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/buscarcliente">
              <ClienteBuscar />
            </Route>
            <Route exact path="/novocliente">
              <ClienteCadastro />
            </Route>
            <Route exact path="/novodestino">
              <DestinoCadastro />
            </Route>
            <Route exact path="/buscardestino">
              <DestinoBusca />
            </Route>
            <Route exact path="/novoanuncio">
              <AnuncioCadastro />
            </Route>
            <Route exact path="/buscaranuncio">
              <AnuncioBusca />
            </Route>
            <Router exact path="/contato">
              <ContatoCadastro />
            </Router>

          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
