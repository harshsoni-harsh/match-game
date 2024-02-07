const Game = props => {
    const {image, tabId, tabsList, tabChange, images, imageClick} = props
    const thumbnailsList = images
    return (
      <>
        <img id={image.id} src={image.imageUrl} alt="match" />
        <ul className="buttonDiv">
          {tabsList.map(o => (
            <li key={o.tabId}>
              <button
                className={tabId === o.tabId ? 'activeBtn' : ''}
                type="button"
                onClick={() => tabChange(o.tabId)}
              >
                {o.displayText}
              </button>
            </li>
          ))}
        </ul>
        <ul className="imageDiv">
          {thumbnailsList.map(o => (
            <li key={o.id}>
              <button type="button" onClick={() => imageClick(o.id)}>
                <img className="smallImg" src={o.thumbnailUrl} alt="thumbnail" />
              </button>
            </li>
          ))}
        </ul>
      </>
    )
  }
  
  export default Game
  