import React,{Component} from 'react';
import Header from "../Header/index.js";
import StartPlay from '../StartPlay/index.js';

class Home extends Component {
  state = {
  firstName: '',
  secondName:'',
  submitted:false
}

handleChange=({ target: { value, name } })=> {
  this.setState({ [name]: value });
}
startplay=(e)=> {
  e.preventDefault();
  this.setState({ submitted:true });

}

render(){
if (!this.state.submitted) {
  return(<StartPlay handleChange={this.handleChange} startplay={this.startplay}/>)
}else{
  return (<Header firstName={this.state.firstName} secondName={this.state.secondName}/>)
}


}
}
export default Home;
