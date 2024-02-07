import './index.css'

const ScoreCard = props => {
  const {score, playAgain} = props
  return (
    <div className="scoreCard">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
      />
      <p className="scoreCardText">YOUR SCORE</p>
      <p className="score">{score}</p>
      <button type="button" className="playBtn" onClick={playAgain}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="smallImg"
        />
        <p>PLAY AGAIN</p>
      </button>
    </div>
  )
}

export default ScoreCard
