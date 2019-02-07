import React from 'react';
import { Card, Feed, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import ExtraCard from './ExtraCard';

class PeopleDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.match.params.id,
      link: `https://swapi.co/api/planets/${props.match.params.id}/`,
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
        <Card style={{ width: 'auto' }}>
          <Card.Content>
            <Card.Header>{this.state.content.name}</Card.Header>
          </Card.Content>
          <Card.Content>
            <Feed>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="text height" />
                </Feed.Label>

                <Feed.Content>
                  <Feed.Date content="Rotation period:" />
                  <Feed.Summary>
                    {this.state.content.rotation_period}
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="weight" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Orbital period:" />
                  <Feed.Summary>
                    {this.state.content.orbital_period}
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="arrow alternate circle right outline" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Diameter:" />
                  <Feed.Summary>{this.state.content.diameter}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="arrow alternate circle right" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Climate:" />
                  <Feed.Summary>{this.state.content.climate}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="arrow alternate circle right outline" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Gravity:" />
                  <Feed.Summary>{this.state.content.gravity}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="birthday" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Terrain:" />
                  <Feed.Summary>{this.state.content.terrain}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="genderless" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Surface water:" />
                  <Feed.Summary>
                    {this.state.content.surface_water}
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="genderless" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Population:" />
                  <Feed.Summary>{this.state.content.population}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="film" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Residents:" />
                  <Feed.Summary>
                    {this.state.content.residents != null &&
                      this.state.content.residents.map((el, i) => (
                        <ExtraCard link={el} />
                      ))}
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="car" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Films:" />
                  <Feed.Summary>
                    {this.state.content.films != null &&
                      this.state.content.films.map((el, i) => (
                        <ExtraCard link={el} />
                      ))}
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="external square alternate" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Created:" />
                  <Feed.Summary>{this.state.content.created}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="edit" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Edited:" />
                  <Feed.Summary>{this.state.content.edited}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="sync" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="URL:" />
                  <Feed.Summary>{this.state.content.url}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Card.Content>
        </Card>
        <Button color="violet" as={Link} to="/planets">
          Go back
        </Button>
      </>
    );
  }
}

export default PeopleDetails;
