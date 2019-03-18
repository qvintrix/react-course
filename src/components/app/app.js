import React, {Component} from 'react';

import './app.css';

class App extends Component {
    state = {
        name: 'Component'
    };

    render() {
        return (
            <div>
                Hello {this.state.name}
            </div>
        );
    }

}

export default App;
