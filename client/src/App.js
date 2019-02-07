import React, { Component } from "react";
import "./App.css";
import API from "../src/utils/API";


// 1. CREAR UN TABLA DE PRESUPUESTO ANUAL (BUDGET + 12 MESES CON INCOME, EXPENSES, RESULT)
// 2. CAMPOS MODIFICABLES
// 3. CAMPOS CALCULADOS AUTOMATICAMENTE

// 4. SE GUARDE EN UNA BASE DE DATOS LOS CAMBIOS MONGODB
// 5. SE MUESTRE EL ARRAY GRABADO DE LA BASE DE DATOS

// DESEABLES
// PLATILLA POR USUARIO
// PLANTILLA POR AÑO
// PLANTILLA EN LA QUE SE PUEDAN AGREGAR MAS FILAS PARA CALCULOS DETALLADOS

const arrayBudget = {
  budget: [1100, 800],
  jan: [1000, 800],
  feb: [900, 800],
  mar: [1000, 800],
  apr: [850, 800],
  may: [1000, 800],
  jun: [1000, 1000],
  jul: [1000, 890],
  ago: [600, 800],
  sep: [1000, 950],
  oct: [1200, 800],
  nov: [1000, 750],
  dec: [2000, 800]
};

class Navs extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Finance 101</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Definitions</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Links</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Tool</a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="#">Budget</a>
                <a className="dropdown-item" href="#">Salary Calcs</a>
                <a className="dropdown-item" href="#">Yearly Vacations</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

class Headertable extends Component {
  render() {
    return (
      <thead>
        <tr>
          <th scope="col"><button type="button" class="btn btn-success" onClick={this.handleFormSubmit}>SUBMIT</button></th>
          <th scope="col" class="resPath">BUDGET</th>
          <th scope="col">JAN</th>
          <th scope="col">FEB</th>
          <th scope="col">MAR</th>
          <th scope="col">APR</th>
          <th scope="col">MAY</th>
          <th scope="col">JUN</th>
          <th scope="col">JUL</th>
          <th scope="col">AGO</th>
          <th scope="col">SEP</th>
          <th scope="col">OCT</th>
          <th scope="col">NOV</th>
          <th scope="col">DEC</th>
          <th scope="col" class="resPath" >AVERAGE</th>
          <th scope="col" class="resPath" >TOTAL</th>
        </tr>
      </thead>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iBudget: arrayBudget.budget[0],
      iJan: arrayBudget.jan[0],
      iFeb: arrayBudget.feb[0],
      iMar: arrayBudget.mar[0],
      iApr: arrayBudget.apr[0],
      iMay: arrayBudget.may[0],
      iJun: arrayBudget.jun[0],
      iJul: arrayBudget.jul[0],
      iAgo: arrayBudget.ago[0],
      iSep: arrayBudget.sep[0],
      iOct: arrayBudget.oct[0],
      iNov: arrayBudget.nov[0],
      iDec: arrayBudget.dec[0],
      eBudget: arrayBudget.budget[1],
      eJan: arrayBudget.jan[1],
      eFeb: arrayBudget.feb[1],
      eMar: arrayBudget.mar[1],
      eApr: arrayBudget.apr[1],
      eMay: arrayBudget.may[1],
      eJun: arrayBudget.jun[1],
      eJul: arrayBudget.jul[1],
      eAgo: arrayBudget.ago[1],
      eSep: arrayBudget.sep[1],
      eOct: arrayBudget.oct[1],
      eNov: arrayBudget.nov[1],
      eDec: arrayBudget.dec[1]

    };
    this.handleInputChange = this.handleInputChange.bind(this);

  }

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBudget()
      .then(res => this.setState({ books: res.data, title: "", author: "", synopsis: "" }))
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;


    this.setState({
      [name]: value
    });
  }

  render() {

    // CALCULOS
    const aIncome = ((this.state.iJan + this.state.iFeb + this.state.iMar + this.state.iApr + this.state.iMay + this.state.iJun
      + this.state.iJul + this.state.iAgo + this.state.iSep + this.state.iOct + this.state.iNov + this.state.iDec) / 12);

    const aExpenses = ((this.state.eJan + this.state.eFeb + this.state.eMar + this.state.eApr + this.state.eMay + this.state.eJun
      + this.state.eJul + this.state.eAgo + this.state.eSep + this.state.eOct + this.state.eNov + this.state.eDec) / 12);


    return (
      <div>
        <Navs />
        <br />
        <div className="container">
          <div className="alert alert-primary">
            <h2>PERSONAL FINANCE</h2>
          </div>
          <div>
            <form onSubmit={this.handleSubmit}>
              <table className="table table-sm">
                <Headertable />
                <tbody>
                  <tr>
                    <th scope="row" class="resPath" >INCOME</th>
                    <td class="resPath"><input name="iBudget" type="number" className="inputSquare" value={this.state.iBudget} onChange={this.handleInputChange} /></td>
                    <td><input name="iJan" type="number" className="inputSquare" value={this.state.iJan} onChange={this.handleInputChange} /></td>
                    <td><input name="iFeb" type="number" className="inputSquare" value={this.state.iFeb} onChange={this.handleInputChange} /></td>
                    <td><input name="iMar" type="number" className="inputSquare" value={this.state.iMar} onChange={this.handleInputChange} /></td>
                    <td><input name="iApr" type="number" className="inputSquare" value={this.state.iApr} onChange={this.handleInputChange} /></td>
                    <td><input name="iMay" type="number" className="inputSquare" value={this.state.iMay} onChange={this.handleInputChange} /></td>
                    <td><input name="iJun" type="number" className="inputSquare" value={this.state.iJun} onChange={this.handleInputChange} /></td>
                    <td><input name="iJul" type="number" className="inputSquare" value={this.state.iJul} onChange={this.handleInputChange} /></td>
                    <td><input name="iAgo" type="number" className="inputSquare" value={this.state.iAgo} onChange={this.handleInputChange} /></td>
                    <td><input name="iSep" type="number" className="inputSquare" value={this.state.iSep} onChange={this.handleInputChange} /></td>
                    <td><input name="iOct" type="number" className="inputSquare" value={this.state.iOct} onChange={this.handleInputChange} /></td>
                    <td><input name="iNov" type="number" className="inputSquare" value={this.state.iNov} onChange={this.handleInputChange} /></td>
                    <td><input name="iDec" type="number" className="inputSquare" value={this.state.iDec} onChange={this.handleInputChange} /></td>
                    <td class="resPath"><td class="resPath">{aIncome.toFixed(2)} </td></td>
                    <td class="resPath"></td>
                  </tr>

                  <tr>
                    <th scope="row" class="resPath">EXPENSES</th>
                    <td class="resPath"><input name="iBudget" type="number" className="inputSquare" value={this.state.eBudget} onChange={this.handleInputChange} /></td>
                    <td><input name="eJan" type="number" className="inputSquare" value={this.state.eJan} onChange={this.handleInputChange} /></td>
                    <td><input name="eFeb" type="number" className="inputSquare" value={this.state.eFeb} onChange={this.handleInputChange} /></td>
                    <td><input name="eMar" type="number" className="inputSquare" value={this.state.eMar} onChange={this.handleInputChange} /></td>
                    <td><input name="eApr" type="number" className="inputSquare" value={this.state.eApr} onChange={this.handleInputChange} /></td>
                    <td><input name="eMay" type="number" className="inputSquare" value={this.state.eMay} onChange={this.handleInputChange} /></td>
                    <td><input name="eJun" type="number" className="inputSquare" value={this.state.eJun} onChange={this.handleInputChange} /></td>
                    <td><input name="eJul" type="number" className="inputSquare" value={this.state.eJul} onChange={this.handleInputChange} /></td>
                    <td><input name="eAgo" type="number" className="inputSquare" value={this.state.eAgo} onChange={this.handleInputChange} /></td>
                    <td><input name="eSep" type="number" className="inputSquare" value={this.state.eSep} onChange={this.handleInputChange} /></td>
                    <td><input name="eOct" type="number" className="inputSquare" value={this.state.eOct} onChange={this.handleInputChange} /></td>
                    <td><input name="eNov" type="number" className="inputSquare" value={this.state.eNov} onChange={this.handleInputChange} /></td>
                    <td><input name="eDec" type="number" className="inputSquare" value={this.state.eDec} onChange={this.handleInputChange} /></td>
                    <td class="resPath">{aExpenses.toFixed(2)} </td>
                    <td class="resPath"></td>
                  </tr>

                  <tr>
                    <th scope="row" class="resPath" >SAVINGS</th>
                    <td className="resPath">{this.state.iBudget - this.state.eBudget}</td>
                    <td className="resSaving">{this.state.iJan - this.state.eJan}</td>
                    <td className="resSaving">{this.state.iFeb - this.state.eFeb}</td>
                    <td className="resSaving">{this.state.iMar - this.state.eMar}</td>
                    <td className="resSaving">{this.state.iApr - this.state.eApr}</td>
                    <td className="resSaving">{this.state.iMay - this.state.eMay}</td>
                    <td className="resSaving">{this.state.iJun - this.state.eJun}</td>
                    <td className="resSaving">{this.state.iJul - this.state.eJul}</td>
                    <td className="resSaving">{this.state.iAgo - this.state.eAgo}</td>
                    <td className="resSaving">{this.state.iSep - this.state.eSep}</td>
                    <td className="resSaving">{this.state.iOct - this.state.eOct}</td>
                    <td className="resSaving">{this.state.iNov - this.state.eNov}</td>
                    <td className="resSaving">{this.state.iDec - this.state.eDec}</td>
                    <td class="resPath"></td>
                    <td class="resPath"></td>
                  </tr>

                </tbody>
              </table>
            </form>

          </div>
          <div className="alert alert-primary">
            <p class="footer"><h3>2018</h3></p>
          </div>
        </div >
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark"></nav>
      </div>

    );
  }
}

export default App;
