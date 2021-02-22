import React, { Component } from 'react';
import { connect } from 'react-redux';

class FormErrors extends Component {
  render() {
    const { formErrors } = this.props;
    console.log(formErrors)
    return (
      <div>
        {Object.keys(formErrors).filter((fieldName) => (
          formErrors[fieldName].length > 0
        )).map((fieldName, i) => (
          <p key={i}>{fieldName}: {formErrors[fieldName]}</p>
        ))};
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  formErrors: state.forms
})

export default connect(mapStateToProps)(FormErrors);
