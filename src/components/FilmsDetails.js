import React from 'react';
import { Card, Feed, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import ExtraCard from './ExtraCard';

class FilmsDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.match.params.id,
      link: `https://swapi.co/api/films/${props.match.params.id}/`,
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
            <Card.Header>{this.state.content.title}</Card.Header>
          </Card.Content>
          <Card.Content>
            <Feed>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="text height" />
                </Feed.Label>

                <Feed.Content>
                  <Feed.Date content="Episode id:" />
                  <Feed.Summary>{this.state.content.episode_id}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="weight" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Opening crawl:" />
                  <Feed.Summary>
                    {this.state.content.opening_crawl}
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="arrow alternate circle right outline" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Director:" />
                  <Feed.Summary>{this.state.content.director}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="arrow alternate circle right" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Producer:" />
                  <Feed.Summary>{this.state.content.producer}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="arrow alternate circle right outline" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Release date:" />
                  <Feed.Summary>{this.state.content.release_date}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="film" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Characters:" />
                  <Feed.Summary>
                    {this.state.content.characters != null &&
                      this.state.content.characters.map((el, i) => (
                        <ExtraCard link={el} key={i} />
                      ))}
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="arrow alternate circle right outline" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Planets:" />
                  <Feed.Summary>
                    {this.state.content.planets != null &&
                      this.state.content.planets.map((el, i) => (
                        <ExtraCard link={el} key={i} />
                      ))}
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="arrow alternate circle right outline" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Starships:" />
                  <Feed.Summary>
                    {this.state.content.starships != null &&
                      this.state.content.starships.map((el, i) => (
                        <ExtraCard link={el} key={i} />
                      ))}
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="arrow alternate circle right outline" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Vehicles:" />
                  <Feed.Summary>
                    {this.state.content.vehicles != null &&
                      this.state.content.vehicles.map((el, i) => (
                        <ExtraCard link={el} key={i} />
                      ))}
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
                    {this.state.content.species != null &&
                      this.state.content.species.map((el, i) => (
                        <ExtraCard link={el} key={i} />
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
        <Button
          color="violet"
          as={Link}
          to="/films"
          style={{ margin: '0 0 10px 0' }}
        >
          Go back
        </Button>
      </>
    );
  }
}

export default FilmsDetails;
