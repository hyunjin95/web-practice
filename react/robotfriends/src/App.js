import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        return (
            <div className="tc">
                <h1 className="f1">Robot Friends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots} />
            </div>
        );
    }
}

export default App;