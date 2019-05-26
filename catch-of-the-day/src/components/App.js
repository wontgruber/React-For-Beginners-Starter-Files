import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes'
import Fish from './Fish';

class App extends React.Component {
    state = {
        fishes: {},
        order: {},
    };

    addFish = fish => {
        // 1. Take a copy of existing state
        const fishes = { ...this.state.fishes };
        // 2. Add new fish
        fishes[`fish${Date.now()}`] = fish;
        // 3. Set new state
        this.setState({ fishes });
    };
    loadSampleFishes = () => {
        this.setState({ fishes: sampleFishes })
    };
    addToOrder = (key) => {
        const order = { ...this.state.order };
        order[key] = order[key] + 1 || 1;
        this.setState({ order });
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline='Fresh Seafood Market'></Header>
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => 
                            <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />)}
                    </ul>
                </div>
                <Order
                    fishes={this.state.fishes} 
                    order={this.state.order}>
                </Order>
                <Inventory 
                    addFish={this.addFish} 
                    loadSampleFishes={this.loadSampleFishes}>
                </Inventory>
            </div>
        )
    }
}

export default App;