import React , {Component} from 'react';
import { Row , Col , Menu, Icon } from 'antd';
import HomeHeader from './HomeHeader';

export default class BackEndArticle extends Component{
  render(){
    return(
      <div>
        <Row type="flex" justify="center">
        <Col span={12}>
            <HomeHeader SelectedMenu="Back" />
            <Content title="Back-End Developing"/>
            <PageFooter/>
          </Col>
          </Row>
        </div>
    );
  }
}
class Content extends Component{
  render(){
    return(
      <div>
          <div>
          <h1 className="contentHeader">{this.props.title}</h1>
          </div><br/>
          <div className="mainText">
              <p className="text">Hello Every body Welcom t my hme page<br/> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <br/>
                <img src="../../pics/bk.png" alt="Back End Heiraichy"></img>
          </div>
      </div>

    );
  }
}
class PageFooter extends Component{
  render(){
    return(
      <div className="Footer">
        <footer>©CopyRight 2018</footer>
      </div>
    );
  }
}
