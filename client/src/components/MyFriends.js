import React from 'react';
import axios from 'axios';
import { Card, Divider, Image, } from 'semantic-ui-react';

class MyFriends extends React.Component {
  state = { people: [], };

  componentDidMount() {
    axios.get('/api/friends')
      .then( res => this.setState({ people: res.data, }) );
  }

  render() {
    const { people, } = this.state;
    return (
      <Card.Group itemsPerRow={4}>
        { people.map( person =>
          <Card key={person.id}>
            <Image src="https://loremflickr.com/120/140/person" />
            <Card.Content>
              <Divider />
              <Card.Header>
                { person.username }
              </Card.Header>
            </Card.Content>
          </Card>
        )}
      </Card.Group>
    )
  }
}

export default MyFriends;