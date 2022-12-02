import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

class FrontPage extends React.Component {

  render() {

    return (
      <>

        <Carousel>
          <Carousel.Item >
            <img
              className="d-block w-100"
              src={require('../image/moscow mule.jpg')}
              alt="Moscow Mule"
            />
            <Carousel.Caption>
              <h3>Moscow Mule</h3>
              <ul>
                <li>1 ½ fluid ounces vodka</li>
                <li>½ fluid ounce lime juice</li>
                <li>½ cup ginger beer</li>
                <li>1 lime wedge for garnish</li>
                <li>ice cubes</li>
              </ul>
              <p>Photo by <a href="https://unsplash.com/@aples?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alex Plesovskich</a> on <a href="https://unsplash.com/s/photos/moscow-mule?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../image/mai tai.jpg')}
              alt="Mai Tai"
            />

            <Carousel.Caption>
              <h3>Mai Tai</h3>
              <ul>
                <li>3 fluid ounces pineapple juice</li>
                <li>2 fluid ounces orange juice</li>
                <li>1 (1.5 fluid ounce) jigger spiced rum</li>
                <li>½ (1.5 fluid ounce) jigger coconut-flavored rum</li>
                <li>1 teaspoon grenadine syrup</li>
                <li>1 cup ice cubes</li>
              </ul>
              <p>Photo by <a href="https://unsplash.com/@badashproducts?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ash Edmonds</a> on <a href="https://unsplash.com/s/photos/mai-tai-cocktail?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../image/mojito.jpg')}
              alt="Mojito"
            />

            <Carousel.Caption>
              <h3>Mojito</h3>
              <ul>
                <li>leaves big handful of fresh mint</li>
                <li>1 ½ limes quartered</li>
                <li>30 ml simple syrup 1 oz</li>
                <li>60 ml Patron Anejo or other Reposado or Anejo Tequila 2 oz</li>
                <li>2 cups ice cubes</li>
                <li>soda water</li>
                <li>sprigs of mint for garnish</li>
              </ul>
              <p>
                Photo by <a href="https://unsplash.com/@picoftasty?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mae Mu</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../image/Aperol Spritz.jpg')}
              alt="Spritz"
            />

            <Carousel.Caption>
              <h3>Spritz</h3>
              <ul>
                <li>1 part Aperol</li>
                <li>2 parts Prosecco</li>
                <li>Splash of Soda Water</li>
                <li>Garnish with an Orange Slice</li>
              </ul>
              <p>
                Photo by <a href="https://unsplash.com/@dabyki?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nadya Filatova</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../image/Mezcal Margarita.jpg')}
              alt="Mezcal Margarita"
            />

            <Carousel.Caption>
              <h3>Mezcal Margarita</h3>
              <ul>
                <li>1 ½ ounces mezcal</li>
                <li>1 ounce Cointreau (or any orange liqueur)</li>
                <li>¾ ounce freshly-squeezed lime juice</li>
                <li>ice</li>
                <li>optional: agave nectar or simple syrup for sweetening, if desired</li>
                <li>optional: lime wedge and salt for rimming the glass</li>
              </ul>
              <p>
                Photo by <a href="https://unsplash.com/@picoftasty?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mae Mu</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </>
    );
  }
}

export default FrontPage;
