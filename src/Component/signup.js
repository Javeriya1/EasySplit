import React from 'react';


class SignUp extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submitForm = this.submitForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    submitForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["username"] = "";
          fields["emailid"] = "";
          fields["password"] = "";
          fields["repassword"] = "";
          this.setState({fields:fields});
          alert("details saved successfully!!!!");
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["username"]) {
        formIsValid = false;
        errors["username"] = "*Please enter your username.";
      }


      if (!fields["emailid"]) {
        formIsValid = false;
        errors["emailid"] = "*Please enter your email-ID.";
      }

    
      
      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
      }

      if (!fields["repassword"]) {
        formIsValid = false;
        errors["repassword"] = "*Please enter correct password.";
      }


      this.setState({
        errors: errors
      });
      return formIsValid;


    }
  render() {
    return (
     <div id="signup">
        <h3><b>Create a new account</b></h3>
        <form onSubmit= {this.submitForm} >
        <label>Name</label>
        <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.username}</div>
        <label>Email ID:</label>
        <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
        <div className="errorMsg">{this.state.errors.emailid}</div>
        
        <label>Password:</label>
        <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.password}</div>

        <label>Retype Password:</label>
        <input type="password" name="repassword" value={this.state.fields.repassword} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.repassword}</div>

        <input type="submit"  className="button"  value="SignUp"/>
        </form>
    </div>


      );
  }


}


export default SignUp;