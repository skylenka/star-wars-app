import React from 'react';
import { Card, Feed } from 'semantic-ui-react';

class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.match.params.id,
      link: `https://swapi.co/api/people/${props.match.params.id}/`,
      content: {}
    };
  }

  componentDidMount() {
    fetch(this.state.link)
      .then(resp => resp.json())
      .then(resp => {
        this.setState({ content: resp });
      });
  }

  render() {
    return (
      <>
        <Card>
          <Card.Content>
            <Card.Header>{this.state.content.name}</Card.Header>
          </Card.Content>
          <Card.Content>
            <Feed>
              <Feed.Event>
                <Feed.Content>
                  <Feed.Date content="Height:" />
                  <Feed.Summary>{this.state.content.height}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Content>
                  <Feed.Date content="Mass:" />
                  <Feed.Summary>{this.state.content.mass}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Content>
                  <Feed.Date content="Hair color:" />
                  <Feed.Summary>{this.state.content.hair_color}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Content>
                  <Feed.Date content="Skin color:" />
                  <Feed.Summary>{this.state.content.skin_color}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Content>
                  <Feed.Date content="Eye color:" />
                  <Feed.Summary>{this.state.content.eye_color}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Content>
                  <Feed.Date content="Birth:" />
                  <Feed.Summary>{this.state.content.birth_year}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Content>
                  <Feed.Date content="Male:" />
                  <Feed.Summary>{this.state.content.gender}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Content>
                  <Feed.Date content="Homeworld:" />
                  <Feed.Summary>{this.state.content.homeworld}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Content>
                  <Feed.Date content="Films:" />
                  <Feed.Summary>
                    {this.state.content.films
                      ? this.state.content.films.map((el, i) => (
                          <ul>
                            <li>{el}</li>
                          </ul>
                        ))
                      : ''}
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Content>
                  <Feed.Date content="Species:" />
                  <Feed.Summary>{this.state.content.species}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Content>
                  <Feed.Date content="Vehicles:" />
                  <Feed.Summary>
                    {this.state.content.vehicles
                      ? this.state.content.vehicles.map((el, i) => (
                          <ul>
                            <li>{el}</li>
                          </ul>
                        ))
                      : ''}
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Content>
                  <Feed.Date content="Starships:" />
                  <Feed.Summary>
                    {this.state.content.starships
                      ? this.state.content.starships.map((el, i) => (
                          <ul>
                            <li>{el}</li>
                          </ul>
                        ))
                      : ''}
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Content>
                  <Feed.Date content="Created:" />
                  <Feed.Summary>{this.state.content.created}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Content>
                  <Feed.Date content="Edited:" />
                  <Feed.Summary>{this.state.content.edited}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Content>
                  <Feed.Date content="URL:" />
                  <Feed.Summary>{this.state.content.url}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Card.Content>
        </Card>
      </>
    );
  }
}

export default Details;
