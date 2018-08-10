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
            <br/>
            <Content title="Back-End Developing"/>
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
              <p className="text">The backend of a web application is an enabler for a frontend experience. An application’s frontend may be the most beautifully
                        crafted web page, but if the application itself doesn’t work, the application will be a failure. The backend of an application is
                        responsible for things like calculations, business logic, database interactions, and performance. Most of the code that is required to
                        make an application work will be done on the backend. Backend code is run on the server, as opposed to the client. This means that
                        backend developers not only need to understand programming languages and databases, but they must have an understanding of
                        server architecture as well. If an application is slow, crashes often, or constantly throws errors at users, it’s likely because of backend problems.

                        Backend development is not all ones and zeros though. Much like frontend development, backend development has a human aspect to
                        it as well. Since most of the code for an application is written on the backend, it should be easy to understand and work with. Most
                        backend languages – like Ruby and Python – have standardized styles and idioms that make reading and writing code more efficient and enjoyable.</p>
            <br/>
                <img className="image1" src="https://cdn-images-1.medium.com/max/1000/1*wS8k6IlIgSb-7-lPhaNyrQ.png" alt="Back End Heiraichy"></img>
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
