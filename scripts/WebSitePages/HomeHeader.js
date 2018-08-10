import React , {Component} from 'react';
import { Row , Col , Menu, Icon } from 'antd';
import { Link } from 'react-router';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class HomeHeader extends Component {

 constructor(props) {
   super(props);
   this.state = {
     current : this.props.SelectedMenu
   }

   this.handleClick = this.handleClick.bind(this)
 }

 handleClick(e) {
   e.preventDefault ;
   this.setState({
     current : e.key
   });
 }

 render() {
   return (
       <Menu onClick={this.handleClick}
           selectedKeys={[this.state.current]}
           mode="horizontal">
         <Menu.Item key="home">
             <Icon className="menueIcon" type="home" />
             <div className="inlining">
             <Link className="HomeLinks" to="/Home">Home</Link>
             </div>

         </Menu.Item>
         <Menu.Item key="Front" className="menueItem">
           <Icon type="right" />
           <div className="inlining">
           <Link className="HomeLinks" to="/Home/Front-End">Front-End Article</Link>
           </div>

         </Menu.Item>
         <Menu.Item key="Back" className="menueItem">
           <Icon type="right" className="menueItem"/>
           <div className="inlining">
           <Link className="HomeLinks" to="/Home/Back-End">Back-End Article</Link>
           </div>

         </Menu.Item>
         <Menu.Item key="out" className="menueItem">
         <Icon type="lock" />
         <div className="inlining">
         <Link className="HomeLinks" to="/">Sign In</Link>
         </div>
         </Menu.Item>
         <Menu.Item key="in" className="menueItem">
            <Icon type="form" />
         <div className="inlining">
         <Link className="HomeLinks" to="/Signup">Sign up</Link>
         </div>
         </Menu.Item>
         
       </Menu>
   )
 }
}
