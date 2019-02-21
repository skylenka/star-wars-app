import React, { Component } from 'react';
import { Feed } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class ExtraCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      link: props.link,
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
        <Feed.Event>
          <Feed.Content>
            <Feed.Summary>
              <Link to={`/details/${this.state.link.match(/\/api\/(.*)/)[1]}`}>
                {this.state.content.title
                  ? this.state.content.title
                  : this.state.content.name}
              </Link>
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </>
    );
  }
}

export default ExtraCard;
