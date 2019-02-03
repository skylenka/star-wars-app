import React from 'react';
import { Card, Feed, Icon } from 'semantic-ui-react';
import ExtraCard from './ExtraCard';

class PeopleDetails extends React.Component {
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
                  <Feed.Date content="Height:" />
                  <Feed.Summary>{this.state.content.height}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="weight" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Mass:" />
                  <Feed.Summary>{this.state.content.mass}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="arrow alternate circle right outline" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Hair color:" />
                  <Feed.Summary>{this.state.content.hair_color}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="arrow alternate circle right" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Skin color:" />
                  <Feed.Summary>{this.state.content.skin_color}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="arrow alternate circle right outline" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Eye color:" />
                  <Feed.Summary>{this.state.content.eye_color}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="birthday" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Birth:" />
                  <Feed.Summary>{this.state.content.birth_year}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="genderless" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Gender:" />
                  <Feed.Summary>{this.state.content.gender}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="home" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Homeworld:" />
                  {this.state.content.homeworld ? (
                    <ExtraCard link={this.state.content.homeworld} />
                  ) : (
                    ''
                  )}
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="film" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Films:" />
                  <Feed.Summary>
                    {this.state.content.films
                      ? this.state.content.films.map((el, i) => (
                          <ExtraCard link={el} />
                        ))
                      : ''}
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="arrow alternate circle right outline" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Species:" />
                  <Feed.Summary>
                    {this.state.content.species ? (
                      <ExtraCard link={this.state.content.species} />
                    ) : (
                      ''
                    )}
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="car" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Vehicles:" />
                  <Feed.Summary>
                    {this.state.content.vehicles
                      ? this.state.content.vehicles.map((el, i) => (
                          <ExtraCard link={el} />
                        ))
                      : ''}
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="ship" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Starships:" />
                  <Feed.Summary>
                    {this.state.content.starships
                      ? this.state.content.starships.map((el, i) => (
                          <ExtraCard link={el} />
                        ))
                      : ''}
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
      </>
    );
  }
}

export default PeopleDetails;
