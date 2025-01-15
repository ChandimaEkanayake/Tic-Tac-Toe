import './App.css'
import PropTypes from 'prop-types';
import { useState } from 'react'
function App() {
  const[isNextX,setIsNextX] = useState(true);
  const[history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setIsNextX(!isNextX);
  }

  function resetMove(nextMove){
    setHistory(history.slice(0, nextMove + 1));
    setIsNextX(nextMove % 2 === 0);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => resetMove(move)}>{description}</button>
      </li>
    );
  });

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

  const Square = ({value,onSquareClick}) => {
   
    return (
      <button className="gridButton" onClick={onSquareClick} disabled={value}>{value}</button>
    )

  };

  Square.propTypes = {
    value: PropTypes.string,
    onSquareClick: PropTypes.func
  };
  
  const Board = ({isNextX , squares , onPlay}) => {
    function handleClick(i) {
      if (squares[i] || winner) return;
      
      // Complete the action
      const nextSquares = squares.slice();
      nextSquares[i] = isNextX ? 'X' : 'O';
      
      onPlay(nextSquares);
    }
    
    let winner = calculateWinner(squares);
    
    Board.propTypes = {
      isNextX: PropTypes.bool,
      squares: PropTypes.array,
      onPlay: PropTypes.func
    };

    function resetGame() {
      setHistory([Array(9).fill(null)]);
      setIsNextX(true);
      winner = null;
    }

    return (
      <>
      <div className="gridContainer">
        <div className="gridRow">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
          <Square value={squares[1]} onSquareClick={() =>handleClick(1)}/>
          <Square value={squares[2]} onSquareClick={() =>handleClick(2)}/>
        </div>
        <div className="gridRow">
          <Square value={squares[3]} onSquareClick={() =>handleClick(3)}/>
          <Square value={squares[4]} onSquareClick={() =>handleClick(4)}/>
          <Square value={squares[5]} onSquareClick={() =>handleClick(5)}/>
        </div>
        <div className="gridRow">
          <Square value={squares[6]} onSquareClick={() =>handleClick(6)}/>
          <Square value={squares[7]} onSquareClick={() =>handleClick(7)}/>
          <Square value={squares[8]} onSquareClick={() =>handleClick(8)}/>
        </div>
      </div>
      {winner? (
        <>
          <h3>{winner} won the game</h3>
          <button onClick={resetGame}>Reset Game</button>
        </>
        ) : (
           <h3>Player: {isNextX ? 'X' : 'O'}</h3>
    )}
    </>
    )
  }

  return (
    <>
      <div className ="GameContainer">
        <Board isNextX={isNextX} squares={currentSquares} onPlay={handlePlay}/>
        <div className="GameHistory">
          <ol>{moves}</ol>
        </div>
      </div>
    </>
  )
}

export default App
