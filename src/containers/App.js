import React from 'react';
import { connect } from 'react-redux';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import { setSearchField, requestRobots } from '../actions';
import Header from '../components/Header';

import './App.css';
// import { requestRobots } from '../reducers';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends React.Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }


  render() {
    const { robots,searchField, onSearchChange, isPending } = this.props;
    const filterRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    if (isPending) {
      return <h1>Loading</h1>
    } else {
      return (
        <div className='tc'>
          <Header/>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filterRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);