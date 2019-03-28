import React from 'react';
import axios from 'axios';
import { Link, } from 'react-router-dom';
import { Header, Image, Card, Button, Icon, } from 'semantic-ui-react';

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
    if (Person) {
      return (
        <div>
          <br />
          <Header as='h1'>MySpace</Header>
          <br />
          <Card key={Person.id}>
            <Image src="https://loremflickr.com/120/140/person" />
            <Card.Content>
              <Card.Header>
                { Person.username }
              </Card.Header>
              <Card.Description>
                { Person.address }
              </Card.Description>
              <Card.Meta>
                { Person.gender }
              </Card.Meta>
              <Card.Meta>
                { Person.bio }
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <Button color="red" icon basic onClick={() => this.downVote(Person.id)}>
                <Icon name="thumbs down" />
              </Button>
              <Button color="green" icon basic onClick={() => this.upvote(Person.id)}>
                <Icon name="thumbs up" />
              </Button>
            </Card.Content>
          </Card>
          <Link to="/friends">
            <Button color="blue">
              My Friends
            </Button>
          </Link>
        </div>
      );
    } else {
      return <Header textAlign="center">No More Friends</Header>
    }
  }
}

export default Home;