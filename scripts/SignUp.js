import React,{Component} from "react";
import { Link } from 'react-router';
import Header from "./Header";
export default class SignUp extends Component{
  render(){
    return(
      <div>
        <Header name="Registration"/>
        <Forms/>
      </div>
    );
  }
}
class Forms extends Component{
  SignedUp(){

  }
  render(){
    return(
      <div className="Form">

          <form id="mainform">
            <input id="username" placeholder="UserName" type="text" autoComplete="off"  required/>
            <br/>
            <input id='email' placeholder="Email" type="email" required/>
            <br/>
            <input id="pass" placeholder="Password" type="text" autoComplete="off" required/>
            <br/>
            <input id="btn" type="submit" value="Sign Up" onClick={this.SignedUp} /><br/>
            <nav className="Links">
            <br/>
            <hr/>
            <br/>
              <Link className="normalLink" id="vistmypagelink" to="/Home"> Visit my page Without SignUp</Link>
            </nav>
          </form>
      </div>
    );
  }
  }
class owinfo extends Component{
  render(){
    return(
      <div>

      </div>
    );
  }
}


class Reg_Validator{
  constructor(firstname,lastname,email,pass){
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.pass = pass;
  }
}
