// 1. CREAR UN TABLA DE PRESUPUESTO ANUAL (BUDGET + 12 MESES CON INCOME, EXPENSES, RESULT)
// 2. CAMPOS MODIFICABLES
// 3. Campos calculados automaticamente en linea
// 4. Se trae de la base de datos, como datos precargados
// 5. SE MUESTRE EL ARRAY GRABADO DE LA BASE DE DATOS

// 4. SE GUARDE EN UNA BASE DE DATOS LOS CAMBIOS MONGODB

// DESEABLES
// PLATILLA POR USUARIO
// PLANTILLA POR AÑO
// PLANTILLA EN LA QUE SE PUEDAN AGREGAR MAS FILAS PARA CALCULOS DETALLADOS
// PODER IMPRIMIR A PDF EL FORMATO
// FORMATO CON OTRAS CARACTERISTICAS
// GRAFICAR FORMATO

// AQUI EL COMPONENTE PRINCIPAL

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Tips from "./pages/Tips";
import Tools from "./pages/Tools";

import Nav from "./components/Nav";
// import Anualbudget from "./components/Anualbudget";


// import ReactDOM from 'react-dom';
class App extends Component {

  render() {

    return (
      <div>
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/Tips" component={Tips} />
              <Route exact path="/Tools" component={Tools} />
            </Switch>
          </div>
        </Router>

      </div>




    );
  }
}



export default App;