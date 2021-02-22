import React, { Component } from 'react';
import './App.css';
import FormErrors from './components/FormErrors';
import { connect } from 'react-redux';
import formsSubmit from './actions/formsActions';

const states = ['Rio de Janeiro', 'Minas Gerais', 'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      countryState: 'Rio de Janeiro',
      addressType: '',
      resume: '',
      role: '',
      roleDescription: '',
    };
  }

  changeHandler = event => {
    let { name, value } = event.target;

    if(name === 'name') value = value.toUpperCase()

    if(name === 'address') value = this.validateAddress(value)

    this.updateState(name, value)
  }

  onBlurHandler = event => {
    let { name, value } = event.target;

    if(name === 'city') value = value.match(/^\d/) ? '' : value

    this.updateState(name, value)
  }

  updateState(name, value) {
    this.setState((state) => ({
      [name]: value,
      formErrors: {
        ...state.formErrors,
        [name]: this.validateField(name, value)
      }
    }));
  }

  validateAddress = address => address.replace(/[^\w\s]/gi, '')

  handleSubmit = event => {
    event.preventDefault();
  }

  validateField(fieldName, value) {

    switch(fieldName) {
      case 'email':
        const isValid = value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        return isValid ? '' : ' is invalid';
      default:
        break;
    }

    return '';
  }

  render () {
    const { submitForm } = this.props
    const {
      name,
      email,
      cpf,
      address,
      city,
      countryState,
      addressType,
      resume,
      role,
      roleDescription,
    } = this.state;
    return (
      <div>
        <form>
          <fieldset>
            <legend>Dados pessoais</legend>
            <div className="container">
              Nome:
              <input
                type="name"
                name="name"
                maxLength="40"
                required
                value={this.state.name}
                onChange={this.changeHandler}
              />
            </div>
            <div className="container">
              Email:
              <input
                type="email"
                name="email"
                maxLength="50"
                required
                value={this.state.email}
                onChange={this.changeHandler}
              />
            </div>
            <div className="container">
              CPF:
              <input
                type="text"
                name="cpf"
                maxLength="11"
                required
                value={this.state.cpf}
                onChange={this.changeHandler}
              />
            </div>
            <div className="container">
              Endereço:
              <input
                type="text"
                name="address"
                maxLength="200"
                required
                value={this.state.address}
                onChange={this.changeHandler}
              />
            </div>
            <div className="container">
              Cidade:
              <input
                type="text"
                name="city"
                maxLength="28"
                required
                value={this.state.city}
                onBlur={this.onBlurHandler}
                onChange={this.changeHandler}
              />
            </div>
            <div className="container">
              Estado:
              <select
                name="countryState"
                required
                value={this.state.countryState}
                onChange={this.changeHandler}
              >
                  {states.map((value, key) =>
                    <option key={key}>{value}</option>
                    )
                  }
              </select>
            </div>
          </fieldset>
          <fieldset>
            <legend>Dados profissionais:</legend>
              <div className="container">
                Resumo do currículo:
                <textarea
                  name="resume"
                  maxLength="1000"
                  required
                  value={this.state.resume}
                  onChange={this.changeHandler}
                />
              </div>
              <div className="container">
                Cargo:
                <input
                  type="text"
                  name="role"
                  maxLength="40"
                  required
                  value={this.state.role}
                  onChange={this.changeHandler}
                />
              </div>
              <div className="container">
                Descrição do cargo:
                <textarea
                  name="roleDescription"
                  maxLength="500"
                  value={this.state.roleDescription}
                  onChange={this.changeHandler}
                />
              </div>
            </fieldset>
          </form>
        <button
          type="button"
          onClick={ () => submitForm(
            name,
            email,
            cpf,
            address,
            city,
            countryState,
            addressType,
            resume,
            role,
            roleDescription,
            ) }
        >
          Enviar
        </button>
        <div className="container">
          <FormErrors />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  submitForm: (
    name,
    email,
    cpf,
    address,
    city,
    countryState,
    addressType,
    resume,
    role,
    roleDescription,
  ) => dispatch(
  formsSubmit(
    name,
    email,
    cpf,
    address,
    city,
    countryState,
    addressType,
    resume,
    role,
    roleDescription,
    ),
  )
})

export default connect(null, mapDispatchToProps)(App);