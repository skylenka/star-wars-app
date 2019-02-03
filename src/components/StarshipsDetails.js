import React from 'react';
import { Card, Feed, Icon } from 'semantic-ui-react';
import ExtraCard from './ExtraCard';

class StarshipsDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.match.params.id,
      link: `https://swapi.co/api/starships/${props.match.params.id}/`,
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
                  <Feed.Date content="Model:" />
                  <Feed.Summary>{this.state.content.model}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="weight" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Manufacturer:" />
                  <Feed.Summary>{this.state.content.manufacturer}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="arrow alternate circle right outline" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Cost in credits:" />
                  <Feed.Summary>
                    {this.state.content.cost_in_credits}
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="arrow alternate circle right" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Length:" />
                  <Feed.Summary>{this.state.content.length}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="arrow alternate circle right outline" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Max atmosphering speed:" />
                  <Feed.Summary>
                    {this.state.content.max_atmosphering_speed}
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="birthday" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Crew:" />
                  <Feed.Summary>{this.state.content.crew}</Feed.Summary>
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
                  <Feed.Date content="Passengers:" />
                  <Feed.Summary>{this.state.content.passengers}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="genderless" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Cargo capacity:" />
                  <Feed.Summary>
                    {this.state.content.cargo_capacity}
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="genderless" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Consumables:" />
                  <Feed.Summary>{this.state.content.consumables}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="genderless" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Hyperdrive rating:" />
                  <Feed.Summary>
                    {this.state.content.hyperdrive_rating}
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="genderless" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="MGLT:" />
                  <Feed.Summary>{this.state.content.MGLT}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="genderless" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Starship class:" />
                  <Feed.Summary>
                    {this.state.content.starship_class}
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="film" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Pilots:" />
                  <Feed.Summary>
                    {this.state.content.pilots
                      ? this.state.content.pilots.map((el, i) => (
                          <ExtraCard link={el} />
                        ))
                      : ''}
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

export default StarshipsDetails;
