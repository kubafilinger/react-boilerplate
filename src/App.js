import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      test: 123,
    }
  }

  render() {
    return (
    <div className="container app">
        <div className="row">
            <div className="col">
                Boilerplate { this.state.test }
            </div>
        </div>
    </div>
    )
  }
}

export default App
