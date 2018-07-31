
import React,{Component} from "react";
import Header from "./Header";
import FormBox from "./FormBox";

export default class App extends Component{
  render(){
    return(
      <div className="MainApp">
        <Header name="Login Page"/>
        <FormBox/>
      </div>
    );
  }
}
