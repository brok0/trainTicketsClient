import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import DataTable from './DataTable';
import { TICKETS_API_URL } from '../Constants';
import footer from "./footer";
export class HomePage extends Component {
  state = {
    items: [],
    currentUserID: 0
  }
  componentDidMount() {
    this.getItems();
  }
  getItems = () => {
    fetch(TICKETS_API_URL)
      .then(res => res.json())
      .then(res => this.setState({ items: res }))
      .catch(err => console.log(err));
     console.log(this.state.items);
  }
  addUserToState = userId => {
    this.setState(
        {currentUserID : userId} // тут визначається залогінений користувач,для того щоб показувати йому білети конкретно для нього
    );
  }
  // addUserToState static fot testing purposes,should be some prop
  render() {
    return <Container style={{ paddingTop: "10px", right:"25%",textAlign:"center" }}>
      <Row>
        <Col>
            <h3>Its Home Page! Hello,your id : {this.currentUserID} !</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <DataTable
            items={this.state.items}
             />
        </Col>
      </Row>
      <footer/>
    </Container>
   
  }
}
export default HomePage;