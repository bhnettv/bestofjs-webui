import React from 'react';
import { connect } from 'react-redux';

import Home from '../components/home/Home';
import populate from '../helpers/populate';
import log from '../helpers/log';

const HomePage = React.createClass({
  shouldComponentUpdate() {
    return false;
  },
  render() {
    log('Render the <HomePage> container', this.props);
    const { hotProjects, popularProjects } = this.props;
    return (
      <Home
        hotProjects = { hotProjects }
        popularProjects = { popularProjects }
        maxStars = { popularProjects.length > 0 ? popularProjects[0].stars : 0 }
      />
    );
  }

});

function mapStateToProps(state) {
  const {
    entities: {
      projects,
      tags
    },
    githubProjects: {
      hotProjectIds,
      popularProjectIds
    }
  } = state;

  const hotProjects = hotProjectIds
    .map(id => projects[id])
    .slice(0, 20)
    .map(populate(tags));
  const popularProjects = popularProjectIds
    .map(id => projects[id])
    .slice(0, 20)
    .map(populate(tags));

  return {
    hotProjects,
    popularProjects
  };
}

export default connect(mapStateToProps, {
})(HomePage);
