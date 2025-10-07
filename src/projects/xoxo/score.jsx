

export default function Score({turn, score}){

    return(
        <div className="score-board">
            <span className="turn-container">
                Turn: {turn}
            </span>
            <span className="score-container">
                <p className="score">
                    X: {score.x}
                </p>
                <p className="score">
                    O: {score.o}
                </p>
            </span>
        </div>
    )
}