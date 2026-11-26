import { useState } from 'react';
import "./score.css"

function Score() {
    const [score, setScore] = useState(0);
    const [wickets, setWickets] = useState(0);
    const isAllOut = wickets === 10;

    function handleScore(value) {
        if (isAllOut) return;

        if (value === 'W') {
            setWickets((currentWickets) => currentWickets + 1);
        } else {
            setScore((currentScore) => currentScore + value);
        }
    }

    return (
        <div className="cricket">
            <div className="options">
                {[1, 2, 3, 4, 6].map((runs) => (
                    <button
                        key={runs}
                        className="score"
                        onClick={() => handleScore(runs)}
                        disabled={isAllOut}
                    >
                        {runs}
                    </button>
                ))}
                <button
                    className="score"
                    onClick={() => handleScore('W')}
                    disabled={isAllOut}
                >
                    W
                </button>
            </div>
            <div className="scoreBoard" aria-live="polite">
                <p>Score: {score}</p>
                <p>Wickets: {wickets}</p>
                {isAllOut && <p>All out</p>}
            </div>
        </div>
    );
}

export default Score;