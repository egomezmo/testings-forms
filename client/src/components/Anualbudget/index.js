import React, { Component } from "react";
import update from 'react-addons-update'; // ES6
import API from "../../utils/API";
import "./App.css";


// import ReactDOM from 'react-dom';


import { VictoryChart, VictoryLine, VictoryTheme } from 'victory';

class Anualbudget extends Component {
  constructor(props) {
    super(props);
    this.state = {

      mainarray: [
        {
          month: "",
          income: "0",
          expense: "0"
        },
        {
          month: "",
          income: "0",
          expense: "0"
        },
        {
          month: "",
          income: "0",
          expense: "0"
        }, {
          month: "",
          income: "0",
          expense: "0"
        },
        {
          month: "",
          income: "0",
          expense: "0"
        },
        {
          month: "",
          income: "0",
          expense: "0"
        },
        {
          month: "",
          income: "0",
          expense: "0"
        },
        {
          month: "",
          income: "0",
          expense: "0"
        },
        {
          month: "",
          income: "0",
          expense: "0"
        },
        {
          month: "",
          income: "0",
          expense: "0"
        },
        {
          month: "",
          income: "0",
          expense: "0"
        },
        {
          month: "",
          income: "0",
          expense: "0"
        },
        {
          month: "",
          income: "0",
          expense: "0"
        }
      ]

    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.loadBudget();
  }

  loadBudget = () => {
    API.getBudget()
      .then(res => { this.setState({ mainarray: res.data }) })
      .catch(err => console.log(err));
  };

  // PARA INGRESAR LOS CAMBIOS DE CADA CAMPO
  handleInputChange = event => {
    const target = event.target;
    const value = parseFloat(target.value);
    const month = target.dataset.month;
    let newstate = {};
    if (target.name === "income") {
      newstate[month.toString()] = { income: { $set: value } };
    }
    else {
      newstate[month.toString()] = { expense: { $set: value } };
    }
    this.setState({
      mainarray: update(this.state.mainarray, newstate)
    })
  }

  // SUBIR TODO EL FORMARTO CON EL BOTON
  handleFormSubmit = event => {
    console.log(this.state.mainarray);
    event.preventDefault();
    API.updateBudget(this.state.mainarray)


      // aqui mando el objeto como esta en el dom para actualizar



      .then(res => this.loadBudget())       // con el resultado reresamos el json actualizado y lo carga
      .catch(err => console.log(err));
  };

  render() {

    // CALCULOS

    let xincome = 0;
    let x1 = 0;
    let x2 = 0;
    let xexpense = 0;
    let i;
    for (i = 1; i < this.state.mainarray.length; i++) {
      x1 += parseFloat(this.state.mainarray[i].income);
      xincome = (x1 / 12).toFixed(2);
      x2 += parseFloat(this.state.mainarray[i].expense);
      xexpense = (x2 / 12).toFixed(2);
    };

    // loop para encabezados
    let rows = [];
    for (let i = 1; i < 13; i++) {
      rows.push(<th scope="col" className="theader">{this.state.mainarray[i].month.toUpperCase()}</th>);
    }

    // loop para income
    let rowsincome = [];
    for (let i = 0; i < 13; i++) {
      rowsincome.push(<td className="resPath"><input type="number" className="inputSquare" name="income" data-month={i} value={this.state.mainarray[i].income} onChange={this.handleInputChange} /></td>);
    }

    // loop para expense
    let rowsexpense = [];
    for (let i = 0; i < 13; i++) {
      rowsexpense.push(<td className="resPath"><input type="number" className="inputSquare" name="expense" data-month={i} value={this.state.mainarray[i].expense} onChange={this.handleInputChange} /></td>);
    }

    // loop results income - expense
    let rowsresult = [];
    for (let i = 0; i < 13; i++) {
      rowsresult.push(<td className="resPath">{this.state.mainarray[i].income - this.state.mainarray[i].expense}</td>);
    }

    return (
      <div>
      
        <br />
        <div className="container">
          <div className="alert alert-primary">
            <h2>PERSONAL FINANCE</h2>
          </div>
          <div>
            <form>
              <table className="table table-sm">
                <thead>
                  <tr>
                    <th scope="col"><input type="submit" value="Submit All" className="btn btn-success" onClick={this.handleFormSubmit} /></th>
                    <th scope="col" className="resPath">{this.state.mainarray[0].month.toUpperCase()}</th>
                    {rows}
                    <th className="resPath" >AVERAGE</th>
                  </tr >
                </thead>
                <tbody>
                  <tr>
                    <th className="resPath" scope="row" >INCOME</th>
                    {rowsincome}
                    <td className="resPath">{xincome}</td>
                  </tr>
                  <tr>
                    <th scope="row" className="resPath">EXPENSES</th>
                    {rowsexpense}
                    <td className="resPath">{xexpense}</td>
                    <td className="resPath"></td>
                  </tr>
                  <tr>
                    <th className="resPath" scope="row">SAVINGS</th>
                    {rowsresult}
                    <td className="resPath"></td>
                    <td className="resPath"></td>
                  </tr>
                </tbody>
              </table>
            </form>

            <div className="container">
              <VictoryChart>

                <VictoryLine
                interpolation="basis"

                  style={{
                    data: {
                      stroke: "green"
                  
                    }
                  }}

                  data={[
                    { x: ".", y: "" },
                    { x: "J", y: this.state.mainarray[1].income },
                    { x: "F", y: this.state.mainarray[2].income },
                    { x: "M", y: this.state.mainarray[3].income },
                    { x: "A", y: this.state.mainarray[4].income },
                    { x: "M", y: this.state.mainarray[5].income },
                    { x: "J", y: this.state.mainarray[6].income },
                    { x: "J", y: this.state.mainarray[7].income },
                    { x: "A", y: this.state.mainarray[8].income },
                    { x: "S", y: this.state.mainarray[9].income },
                    { x: "O", y: this.state.mainarray[10].income },
                    { x: "N", y: this.state.mainarray[11].income },
                    { x: "D", y: this.state.mainarray[12].income }
                  ]}
                />

                <VictoryLine
                interpolation="basis"
                  style={{
                    data: {
                      stroke: "red"   
                    },
                  }}
                  data={[
                    { x: ".", y: "" },
                    { x: "J", y: this.state.mainarray[1].expense },
                    { x: "F", y: this.state.mainarray[2].expense },
                    { x: "M", y: this.state.mainarray[3].expense },
                    { x: "A", y: this.state.mainarray[4].expense },
                    { x: "M", y: this.state.mainarray[5].expense },
                    { x: "J", y: this.state.mainarray[6].expense },
                    { x: "J", y: this.state.mainarray[7].expense },
                    { x: "A", y: this.state.mainarray[8].expense },
                    { x: "S", y: this.state.mainarray[9].expense },
                    { x: "O", y: this.state.mainarray[10].expense },
                    { x: "N", y: this.state.mainarray[11].expense },
                    { x: "D", y: this.state.mainarray[12].expense }
                  ]}
                />

                <VictoryLine  
                interpolation="basis"
                  style={{
                    data: {
                      stroke: "blue"
                    }
                  }}
                  data={[
                    { x: ".", y: "" },
                    { x: "J", y: (this.state.mainarray[1].income - this.state.mainarray[1].expense) },
                    { x: "F", y: (this.state.mainarray[2].income - this.state.mainarray[2].expense) },
                    { x: "M", y: (this.state.mainarray[3].income - this.state.mainarray[3].expense) },
                    { x: "A", y: (this.state.mainarray[4].income - this.state.mainarray[4].expense) },
                    { x: "M", y: (this.state.mainarray[5].income - this.state.mainarray[5].expense) },
                    { x: "J", y: (this.state.mainarray[6].income - this.state.mainarray[6].expense) },
                    { x: "J", y: (this.state.mainarray[7].income - this.state.mainarray[7].expense) },
                    { x: "A", y: (this.state.mainarray[8].income - this.state.mainarray[8].expense) },
                    { x: "S", y: (this.state.mainarray[9].income - this.state.mainarray[9].expense) },
                    { x: "O", y: (this.state.mainarray[10].income - this.state.mainarray[10].expense) },
                    { x: "N", y: (this.state.mainarray[11].income - this.state.mainarray[11].expense) },
                    { x: "D", y: (this.state.mainarray[12].income - this.state.mainarray[12].expense) }
                  ]}
                />
              </VictoryChart>
            </div>
          </div>
          <div className="alert alert-primary">
            <p className="footer"><strong>2018 Anual Budget</strong></p>

          </div>
        </div >
      </div>




    );
  }
}



export default Anualbudget;