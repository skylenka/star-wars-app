import React from 'react';

class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.match.params.id,
      link: `https://swapi.co/api/people/${props.match.params.id}`,
      content: null
    };
  }

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
