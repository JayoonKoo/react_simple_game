import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Square({value, onClick}) {
	return (
		<button className="square" onClick={onClick}>
			{value}
		</button>
	)
}

class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			squares: Array(9).fill(null),
			xIsNext: true,
		}
	}

	handleClick(i) {
		const squares = this.state.squares.slice();// 사본 만들기
		squares[i] = this.state.xIsNext? 'X' : 'O';
		this.setState({
			squares: squares,
			xIsNext: !this.state.xIsNext,
		});
	}

  renderSqure(i) {
		const {squares} = this.state;
    return (
			<Square 
				value={squares[i]}
				onClick={() => this.handleClick(i)} 
			/>
		);
  }

  render() {
    const status = `Next Player: ${this.state.xIsNext? 'X': 'O'}`;

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSqure(0)}
          {this.renderSqure(1)}
          {this.renderSqure(2)}
        </div>
        <div className="board-row">
          {this.renderSqure(3)}
          {this.renderSqure(4)}
          {this.renderSqure(5)}
        </div>
        <div className="board-row">
          {this.renderSqure(6)}
          {this.renderSqure(7)}
          {this.renderSqure(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// class ShoppingList extends React.Component {
// 	render() {
// 		return (
// 			<div className="shopping-list">
// 				<h1>Shopping List for {this.props.name}</h1>
// 				<ul>
// 					<li>Instargram</li>
// 					<li>WhatsApp</li>
// 					<li>Oculus</li>
// 				</ul>
// 			</div>
// 		)
// 	}
// }

ReactDOM.render(<Game />, document.getElementById("root"));
