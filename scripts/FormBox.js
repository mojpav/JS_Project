import React,{Component} from "react";
import { Link } from 'react-router';
export default class FormBox extends Component{

    constructor(props){
      super(props);
      this.state={login:'',userWarning:'',PasWarning:''};
      this.HandelSubmit=this.HandelSubmit.bind(this);
    }

  HandelSubmit(e){
    e.preventDefault;
    const username = document.getElementById('username');
    const pass = document.getElementById('pass');
    this.setState({user:username.value,pas:pass.value});
    const S = new signIn(username.value,pass.value,"Ali","123");
    if(S.IsEmpty()){

    }

     if(!S.validate_username()){
        this.setState({userWarning:'Invaild!'})
    }

     if(!S.Validate_password()){
        this.setState({PasWarning:'Invaild!'})
  }

  if (S.Validate_password()) {
      this.setState({PasWarning:''});
  }

   if (S.validate_username()) {
    this.setState({userWarning:''});
  }

}

  render(){
    return(
      <div className="Form">

          <form id="mainform">
            <input id="username" placeholder="UserName" type="text" autoComplete="off"  required/>
            <div className="warningText">
            {this.state.userWarning}
            </div>
            <br/>
            <input id="pass" placeholder="Password" type="text" autoComplete="off" required/>
            <div className="warningText">
            {this.state.PasWarning}
            </div>
            <br/>
            <input id="btn" type="submit" value="Sign in" onClick={this.HandelSubmit}/><br/>
            <nav id="Links">
            <a className="normalLink" href="#">Forgot your Password?</a>
            <br/>
            <br/>
            <Link className="normalLink" to="/SignUp">Creat New Account</Link>
            </nav>
            <br/>
          </form>
      </div>
    );
  }
}

class signIn{
  constructor(username,pass,user,password){
    this.user = user;
    this.password = password;
    this.username = username;
    this.pass = pass;
  }
  validate_username(){
    if(this.username==this.user)
      return true;
    else
      return false;
  }
  Validate_password(){
      if(this.pass==this.password)
        return true;
      else
        return false;
  }

  IsEmpty(){
    if(this.username==""||this.pass=="")
      return true;
    else {
      return false;
    }
  }
}
