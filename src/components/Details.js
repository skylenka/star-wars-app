import React from 'react';

class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.match.params.id,
      link: `https://swapi.co/api/people/${props.match.params.id}/`,
      content: null
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
    return <p>{this.state.content.name}</p>;
  }
}

export default Details;
