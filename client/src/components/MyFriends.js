import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { Image, Col, Row, Table } from 'react-bootstrap'

class MyFriends extends React.Component {
  state = { people: [], };

  componentDidMount() {
    axios.get('/api/friends')
      .then( res => this.setState({ people: res.data, }) );
  }

  render() {
    const { people, } = this.state;
    return (
      <>
      <br />
      <h2>Browse Users</h2>
      <div style={{ border: "1px solid blue" }}>
      <div style={{ color: "white", background: "#6A94B6", fontSize: "20px", height: "1.5em", padding: "5px" }}><strong>Search Results</strong></div>
        <Col>
          <Row>
            
              
                { people.map( person =>
                  <>
                    <div key={person.id} style={{ padding: "20px" }}>
                    <Link to={`/people/${person.id}`}>{ person.username }</Link>
                    <br />
                      <Image src={'https://loremflickr.com/120/140/people?' + Math.random()} />
                    <br />
                   <span>📳</span><span style={{ color: "green" }}>online now</span>
                  </div>
                  </>
                )}
                
    
            <br />
            </Row>
          </Col>
        </div>
        </>
    )
  }
}

export default MyFriends;