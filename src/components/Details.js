import React from 'react';

class Details extends React.Component {
  state = {
    id: this.props.match.params.id,
    link: `https://swapi.co/api/people/${this.props.match.params.id}`,
    content: null
  };

  componentDidMount() {
    fetch(this.state.link)
      .then(resp => resp.json())
      .then(({ results }) => {
        this.setState({ content: results });
      });
  }

  render() {
    return <p>cokolwiek</p>;
  }
}

export default Details;
