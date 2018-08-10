import React , {Component} from 'react';
import { Row , Col , Menu, Icon } from 'antd';
import HomeHeader from './HomeHeader';

export default class FrontEndArticle extends Component{
  render(){
    return(
      <div>
        <Row type="flex" justify="center">
        <Col span={12}>
            <HomeHeader SelectedMenu="Front" />
              <br/>
            <Content title="Front-End Developing"/>
            <br/><br/><br/>
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
              <p className="text">software engineering, the terms front end and back end refer to the separation of concerns between the presentation layer (front end),
                and the data access layer (back end) of a piece of software, or the physical infrastructure or hardware.
                In the client–server model, the client is usually considered the front end and the server is usually considered the back end,
                even when some presentation work is actually done on the server.
                In software architecture, there may be many layers between the hardware and end user.Each can be spoken of as having a front end and a back end. The front is an abstraction, simplifying the underlying component
                by providing a user-friendly interface, while the back usually handles business logic and data storage.
                In front end Developing HTML,CSS and JavaScript are never ever seprated part of Front end developing .
                Here is the diagram of bieng a front-end developer:<br/></p><br/>
              <img className="image1" src="https://cdn-images-1.medium.com/max/1000/1*s6DocnGRV5y0QdZ_JHN6Xg.png" alt="Front End Heiraichy"></img>
              <hr id="footerHR"/>
              <br id="footerBR"/>
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
