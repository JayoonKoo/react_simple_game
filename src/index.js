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
		if (calculateWinner(squares) || squares[i]) {
			return;
		}
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
		const winner = calculateWinner(this.state.squares);
		let status;
		if (winner) {
			status = 'Winner: ' + winner;
		} else {
			status = `Next Player: ${this.state.xIsNext? 'X': 'O'}`;
		}

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

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
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
