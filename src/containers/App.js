import React, { Component } from 'react';
import CardList from '../components/CardList';
//import {robots} from '../robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';


//App Component has 2 states, robots and searchfield.
//Any component that has 'state' uses the class syntax, so they use the 
//constructor function to create 'this.state', and this.state is what changes in an app

//Smart components have the syntax of class App and this.state

class App extends Component{
    constructor(){
        super()
        this.state={
            robots: [],
            searchfield: ''
        }
        //console.log('constructor') //runs first
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users') 
            .then(response=> response.json())
            .then(users => this.setState({robots:users}));
        //console.log('componenteDidMount') //runs third
    }

    //Updates the state of the searchfield
    onSearchChange = (event)=> {
        this.setState({searchfield: event.target.value})
    }

    //React uses this.state to render and pass it down as props
    render(){
        const {robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ?
        <h1>Loading</h1>:
        (
            //console.log('render') //runs second and fourth, because we update the state
                <div className='tc'>
                    <h1 className='f2'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
        )
    }
}

export default App; 