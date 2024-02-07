import {Component} from 'react'
import Game from '../Game'
import ScoreCard from '../ScoreCard'
import './index.css'

class Base extends Component {
  constructor(props) {
    super(props)
    const {tabsList, imagesList} = props
    this.tabsList = tabsList
    this.imagesList = imagesList
    this.state = {
      score: 0,
      time: 60,
      isOver: false,
      tabId: tabsList[0].tabId,
      id: this.imagesList[0].id,
    }
    this.timer = setInterval(this.tick, 1000)
  }

  imageClick = pressedId => {
    const {score, id, time} = this.state
    if (pressedId === id && time !== 0) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        id: this.imagesList[Math.floor(Math.random() * this.imagesList.length)]
          .id,
      }))
      if (score === 29) {
        this.setState({isOver: true})
      }
    } else {
      clearInterval(this.timer)
      this.setState({isOver: true})
    }
  }

  tabChange = id => {
    this.setState({
      tabId: id,
    })
  }

  tick = () => {
    const {time} = this.state
    if (time !== 0) {
      this.setState({time: time - 1})
    } else {
      this.setState({isOver: true})
      clearInterval(this.timer)
    }
  }

  playAgain = () => {
    this.setState({time: 60, isOver: false})
    this.timer = setInterval(this.tick, 1000)
  }

  render() {
    const {tabId, score, time, id, isOver} = this.state
    const images = this.imagesList.filter(o => o.category === tabId)
    const image = this.imagesList.filter(o => o.id === id)[0]
    return (
      <div className="body">
        <div className="navBar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
          />
          <ul>
            <li>
              <p>
                Score: <span className="navSpan">{score}</span>
              </p>
            </li>
            <li>
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
                className="smallImg"
              />
              <p className="navSpan">{time} sec</p>
            </li>
          </ul>
        </div>
        <div className="container">
          {isOver ? (
            <ScoreCard score={score} playAgain={this.playAgain} />
          ) : (
            <Game
              image={image}
              tabId={tabId}
              tabChange={this.tabChange}
              images={images}
              imageClick={this.imageClick}
              tabsList={this.tabsList}
            />
          )}
        </div>
      </div>
    )
  }
}

export default Base
