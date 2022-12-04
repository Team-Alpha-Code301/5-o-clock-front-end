import React from 'react';
import LoginButton from './LoginButton';
import { Card } from 'react-bootstrap';
import './Welcome.css';

class Welcome extends React.Component {
  render() {
    return (
      <div className="Welcome">
        <Card className="card" style={{ width: '18rem' }}>
          <Card.Body>
            <img className="card-img-top" src="https://images.all-free-download.com/images/graphiclarge/delicate_martini_glass_vector_572483.jpg" alt="cocktail" />

            <Card.Text className="cardLoginButton">
              <LoginButton />
            </Card.Text>
            
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Welcome;
