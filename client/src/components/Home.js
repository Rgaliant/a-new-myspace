import React from 'react';
import axios from 'axios';
import { Link, } from 'react-router-dom';
import { Card, Image, Button, Row, Col, Table} from 'react-bootstrap'

class Home extends React.Component {
  state = { people: [], };
  
  componentDidMount() {
    axios.get('/api/people')
      .then(res => this.setState({ people: res.data, }))
  }
  
  sample = () => {
    const { people, } = this.state;
    if (people.length) {
      const index = Math.floor(Math.random() * people.length);
      return people[index];
    } else {
      return null;
    }
  }

  downVote = (id) => {
    let { people, } = this.state;
    this.setState({ people: people.filter( c => c.id !== id ), });
  }

  upvote = (id) => {
    let { people, } = this.state;
    axios.put(`/api/people/${id}`)
      .then( () => this.setState({ people: people.filter( c => c.id !== id ), }) )
  }
  
  render() {
    const Person = this.sample();
    const PersonA = this.sample();
    const PersonB = this.sample();
    const PersonC = this.sample();
    if (Person) {
      return (
        <>
          <br />
          <Row>
            <Col>
            <Table>
              <thead>
                <th style={{ padding: "10px", backgroundColor: "#FFDF9E", fontSize: "14px"}}>Cool New People</th>
                <th style={{ padding: "10px", backgroundColor: "#FFDF9E",}}></th>
                <th style={{ padding: "10px", backgroundColor: "#FFDF9E",}}></th>
                <th style={{ padding: "10px", backgroundColor: "#FFDF9E",}}></th>
              </thead>
            <tbody>
              <tr>
                <td>
                  <div style={{ width: "100%", height: "10%" }} key={Person.id}>
                  <Link to={`/people/${Person.id}`}>{ Person.username }</Link>
                    <Image style={{ width: "120px", height: "140px" }} src={ "https://loremflickr.com/120/140/person" } />
                    <br />
                      <Link color="red" icon basic onClick={() => this.downVote(Person.id)}>
                        🚫
                      </Link>
                      <Link color="green" icon basic onClick={() => this.upvote(Person.id)}>
                        👥 Add Friend
                      </Link>
                  </div>
                </td>
                <td>
                  <div style={{ width: "100%", height: "10%" }} key={PersonA.id}>
                  <Link to={`/people/${PersonA.id}`}>{ PersonA.username }</Link>
                    <Image style={{ width: "120px", height: "140px" }} src={ "https://loremflickr.com/120/140/dude" } />
                    <br />
                      <Link color="red" icon basic onClick={() => this.downVote(PersonA.id)}>
                        🚫
                      </Link>
                      <Link color="green" icon basic onClick={() => this.upvote(PersonA.id)}>
                        👥 Add Friend
                      </Link>
                  </div>
                </td>
                <td>
                  <div style={{ width: "100%", height: "10%" }} key={PersonB.id}>
                  <Link to={`/people/${PersonB.id}`}>{ PersonB.username }</Link>
                    <Image style={{ width: "120px", height: "140px" }} src={ "https://loremflickr.com/120/140/people" } />
                    <br />
                      <Link color="red" icon basic onClick={() => this.downVote(PersonB.id)}>
                        🚫
                      </Link>
                      <Link color="green" icon basic onClick={() => this.upvote(PersonB.id)}>
                        👥 Add Friend
                      </Link>
                  </div>
                </td>
                <td>
                  <div style={{ width: "100%", height: "10%" }} key={PersonC.id}>
                  <Link to={`/people/${PersonC.id}`}>{ PersonC.username }</Link>
                  <br />
                    <Image style={{ width: "120px", height: "140px" }} src={`https://loremflickr.com/120/140/friend`} />
                    <br />
                      <Link color="red" icon basic onClick={() => this.downVote(PersonC.id)}>
                        🚫
                      </Link>
                      <Link color="green" icon basic onClick={() => this.upvote(PersonC.id)}>
                        👥 Add Friend
                      </Link>
                  </div>
                </td>
              </tr>
              </tbody>
            </Table>
            <Table>
              <thead>
                <tr>
                  <th style={{ background: "#9BD4F5" }}>MySpace Music</th>
                  <th style={{ background: "#9BD4F5" }}></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ width: "10em" }}>
                    <Image style={{ width: "120px", height: "140px" }} src={ "https://loremflickr.com/120/140/band" } />
                  </td>
                  <td>
                    <a href="/"><h4>Proin nec maximus metus. Integer lacinia purus ante, quis.</h4></a>
                    Indie / Rock / Experimental
                    <br />
                    Los Angeles, California
                    <br />
                    <br />
                    <br />
                    
                     <small>Phasellus malesuada, augue eu sollicitudin vulputate, ipsum purus hendrerit diam, sed luctus augue sem et eros. Pellentesque auctor tortor nec sagittis malesuada.  Duis interdum leo a nibh mattis, eget.</small>
                    <br />
                    <a href="/">Listen Now</a>
                  </td>
                </tr>
              </tbody>
            </Table>
            <Table>
              <thead>
                <tr>
                  <th style={{ background: "#9BD4F5" }}>MySpace Specials</th>
                  <th style={{ background: "#9BD4F5" }}></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ width: "10em" }}>
                    <Image style={{ width: "120px", height: "140px" }} src={ "https://loremflickr.com/120/140/nature" } />
                  </td>
                  <td>
                    <a href="/"><h4>Proin nec maximus metus. Integer lacinia purus ante, quis.</h4></a>
                    Beautiful views of nature
                    <br />
                    Los Angeles, California
                    <br />

                    
                     <small>Phasellus malesuada, augue eu sollicitudin vulputate, ipsum purus hendrerit diam, sed luctus augue sem et eros. Pellentesque auctor tortor nec sagittis malesuada.  Duis interdum leo a nibh mattis, eget.</small>
                    <br />
                    <a href="/">Listen Now</a>
                  </td>
                </tr>
              </tbody>
            </Table>
            </Col>
            <Col>
            <div style={{ border: "1px solid black", padding: "1em", height: "30%"  }}>
              <h2>You are currently logged in
              View your <Link to="/user/profile">profile</Link></h2>
            </div>
            <br />
            <br />
            <br />
            <br />
            <p style={{ marginLeft: "15em" }}>advertisement</p>
            <div style={{ border: "4px solid red", height: "8em", background: "yellow", position: "relative" }}>
            <br />
              <a href="/" style={{ padding: "1em", color: "red", textDecoration: "underline", fontSize: "18px" }}><strong>Aenean sem massa, mattis vitae velit quis, efficitur.</strong></a>
              <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Class aptent taciti sociosqu.</p>
              <small style={{ position: "relative", top: "-1em", color: "red"}} href="/">www.loremipsum.com</small>
            </div>
            <div style={{ border: "4px solid red", height: "10em", background: "yellow" }}>
            <br />
              <a href="/" style={{ padding: "1em", color: "red", textDecoration: "underline", fontSize: "18px" }}><strong>Etiam sed erat in mi dictum</strong></a>
              <p>Integer condimentum nisl nec mauris sodales vehicula at a ante. Ut a nulla odio. Praesent bibendum dolor dui, at interdum leo aliquam id.Nam elementum egestas mi non pulvinar..</p>
              <small style={{ position: "relative", top: "-1em", color: "red"}} href="/">www.loremipsum.com</small>
            </div>
            <div style={{ border: "4px solid red", height: "8em", background: "yellow" }}>
              <br />
              <a href="/" style={{ padding: "1em", color: "red", textDecoration: "underline", fontSize: "18px" }}><strong>unc ornare libero ac erat sodales</strong></a>
              <p>Pellentesque augue dolor, mollis vitae hendrerit non, auctor vel dolor. Cras sit amet porta est, congue congue arcu. Sed tempus dapibus sem.</p>
              <small style={{ position: "relative", top: "-1em", color: "red"}} href="/">www.loremipsum.com</small>
            </div>
            </Col>
          </Row>
          <Link to="/friends">
            <Button color="blue">
              My Friends
            </Button>
          </Link>
        </>
      );
    } else {
      return <h1 textAlign="center">No More Friends</h1>
    }
  }
}

export default Home;