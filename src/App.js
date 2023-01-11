import { useState } from "react";
import "./App.css";

function App() {
  const [turn, setTurn] = useState("X");
  //created a cell state with arraylen-->9 filled with empty str
  const [cell, setCell] = useState(Array(9).fill(""));

  const [winner, setWinner] = useState();
  const handleClick = (id) => {
    // alert(id);
    if (cell[id] !== "" || winner) {
      // alert("clicked Already");
      return;
    }
    let sq = [...cell];
    if (turn === "X") {
      sq[id] = "X";
      setTurn("O");
    } else {
      sq[id] = "O";
      setTurn("X");
    }
    console.log(sq);

    //updating cell
    setCell(sq);

    checkWinner(sq);

    // console.log(cell);
  };
  const checkWinner = (sq) => {
    let winningPattern = {
      row: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      cols: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      digonal: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };

    for (let pattern in winningPattern) {
      winningPattern[pattern].forEach((combo) => {
        console.log(combo);
        if (sq[combo[0]] === "" || sq[combo[1]] === "" || sq[combo[2]] === "") {
        } else if (
          sq[combo[0]] === sq[combo[1]] &&
          sq[combo[1]] === sq[combo[2]]
        ) {
          setWinner(sq[combo[0]]);
        }
      });
    }

    if (winner === null) {
    }
  };

  const Cell = ({ id }) => {
    return (
      <td onClick={() => handleClick(id)}>
        <h2>{cell[id]}</h2>
      </td>
    );
  };
  return (
    <div className="App">
      <h2>Tic Tac Toe</h2>
      <table>
        <tbody>
          <tr>
            <Cell id="0" />
            <Cell id="1" />
            <Cell id="2" />
          </tr>
          <tr>
            <Cell id="3" />
            <Cell id="4" />
            <Cell id="5" />
          </tr>
          <tr>
            <Cell id="6" />
            <Cell id="7" />
            <Cell id="8" />
          </tr>
        </tbody>
      </table>
      {winner ? (
        <>
          <span>{winner} Wins!!!</span>
          <button onClick={() => window.location.reload()}>Play Again</button>
        </>
      ) : null}
    </div>
  );
}

export default App;
