import React, {Component, PropTypes} from 'react';

class Kanban extends Component {
    constructor() {
        super();

        this.state = {
            test: 123
        }
    }

    render() {
        return(
            <div className="container kanban">
                <div className="row">
                    <div className="col">
                        Boilerplate { this.state.test }
                    </div>
                </div>
            </div>
        )
    }
}

export default Kanban;