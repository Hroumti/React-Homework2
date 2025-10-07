import {useEffect, useState} from 'react'
import Score from './score'

export default function Board(){
    
    const [board, setBoard] = useState(['','','','','','','','',''])
    const [turn, setTurn] = useState('X')
    const [score, setScore] = useState({x:0, o:0})
    
    const WIN_CONDITIONS = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]            // Diagonals
    ];

    useEffect(()=>{
        checkProgress()
    }, [board])

    function handleClick(cellNum){
        if(board[cellNum]===''){
            let tempTab = [...board]
            tempTab[cellNum] = turn
            setBoard(tempTab)
            console.log(board)
            setTurn(turn==='X'?'O':'X')
        }
    }

    function checkProgress(){
        for(let i=0; i<WIN_CONDITIONS.length; i++){
            const [a, b, c] = WIN_CONDITIONS[i];
            if(board[a] && board[a] === board[b] && board[a] === board[c]){
                const winner = board[a];
                setScore(winner==='X'?{...score, x:score.x+1}:{...score, o:score.o+1})
                alert(`${winner} Wins!!!`)
                if(confirm(`Do you want to start another round?`)){
                    setBoard(['','','','','','','','',''])
                    setTurn('X')
                }
                return;
            }
        }
        if(!board.includes('')){
            alert(`it's a draw!!!`)
            if(confirm(`Do you want to start another round?`)){
                setBoard(['','','','','','','','',''])
                setTurn('X')
            }
        }
    }

    return(
        <div className="container">
            <table className="board">
            <tbody>
                <tr>
                    <td onClick={(e)=>handleClick(0)}>{board[0]}</td>
                    <td onClick={(e)=>handleClick(1)}>{board[1]}</td>
                    <td onClick={(e)=>handleClick(2)}>{board[2]}</td>
                </tr>
                <tr>
                    <td onClick={(e)=>handleClick(3)}>{board[3]}</td>
                    <td onClick={(e)=>handleClick(4)}>{board[4]}</td>
                    <td onClick={(e)=>handleClick(5)}>{board[5]}</td>
                </tr>
                <tr>
                    <td onClick={(e)=>handleClick(6)}>{board[6]}</td>
                    <td onClick={(e)=>handleClick(7)}>{board[7]}</td>
                    <td onClick={(e)=>handleClick(8)}>{board[8]}</td>
                </tr>
            </tbody>
        </table>
        <Score turn={turn} score={score}/>
        </div>
    )
}