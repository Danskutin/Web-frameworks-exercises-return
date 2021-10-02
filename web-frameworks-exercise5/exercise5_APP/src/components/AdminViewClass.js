import React from 'react'

class AdminView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newGameName: "",
      newGameDeveloper: "",
      newGamePublisher: "",
      newGameConsole: "",
      newGameGenre: "",
      newGamePrice: "",
      newGameRating: "",
      newGameImage: "",
      newGameInfo: ""
    }
  }

  addNewGame = () => {
    this.props.addNewGame(this.state.newGameName, this.state.newGameDeveloper, this.state.newGamePublisher, this.state.newGameConsole, this.state.newGameGenre, this.state.newGamePrice, this.state.newGameRating, this.state.newGameImage, this.state.newGameInfo);
  }

  render() {
    return (
      <div>
        <div>
            Add new item
            <div>
              Name <input type="text" onChange={ (event) => this.setState({ newGameName: event.target.value }) } />
            </div>
            <div>
              Developer <input type="text" onChange={ (event) => this.setState({ newGameDeveloper: event.target.value }) } />
            </div>
            <div>
              Publisher <input type="text" onChange={ (event) => this.setState({ newGamePublisher: event.target.value }) } />
            </div>
            <div>
              Console <input type="text" onChange={ (event) => this.setState({ newGameConsole: event.target.value }) } />
            </div>
            <div>
              Genre <input type="text" onChange={ (event) => this.setState({ newGameGenre: event.target.value }) } />
            </div>
            <div>
              Price <input type="text" onChange={ (event) => this.setState({ newGamePrice: event.target.value }) } />
            </div>
            <div>
              Rating <input type="text" onChange={ (event) => this.setState({ newGameRating: event.target.value }) } />
            </div>
            <div>
              Image <input type="text" onChange={ (event) => this.setState({ newGameImage: event.target.value }) } />
            </div>
            <div>
              Info <input type="text" onChange={ (event) => this.setState({ newGameInfo: event.target.value }) } />
            </div>
            <button onClick={ this.addNewGame }>Add Game</button>

          </div>
          <button onClick={ this.props.disableAdminMode }>Disable Admin Mode</button>
      </div>
    )
  }
}

export default AdminView;
