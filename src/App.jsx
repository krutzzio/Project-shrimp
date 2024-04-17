import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Perfil_cliente from "./components/Perfil_cliente";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={<Perfil_cliente/>} />
      </Switch>
    </BrowserRouter>
  );
}
