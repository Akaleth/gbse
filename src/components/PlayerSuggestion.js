import React, {Component} from 'react'
import '../App.css'



class PlayerSuggestion extends React.Component {
    render() {
        return (
            <div className={"playerSuggestion"} style={{backgroundColor: "#CA6567", borderColor: "#CA6567"}}>
                <img className={"playerSuggestionThumbnail"} src={"../../data/thumbnails/ox.png"} />
                <p className={"playerSuggestionName"}>{this.props.playerName}</p>
            </div>
        )
    }
}

export default PlayerSuggestion
