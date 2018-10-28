import React, {Component} from 'react'
import '../App.css'

const getSimplifiedPlayerName = name => {
    return name.replace(/ /g,'').toLowerCase();
}

class PlayerSuggestion extends React.Component {
    render() {
        if(this.props.highlight) {
            return (
                <div className={"playerSuggestion playerSuggestion_" + this.props.guild + " playerSuggestionHighlighted"}>
                    <img className={"playerSuggestionThumbnail"} src={"../../data/thumbnails/" + getSimplifiedPlayerName(this.props.playerName) + ".png"} />
                    <p className={"playerSuggestionName"}>
                        {this.props.playerName}
                    </p>
                    <p className={"playerSuggestionDescription"}>
                        {this.props.playerDescription}
                    </p>
                </div>
            )
        }
        else {
            return (
                <div className={"playerSuggestion playerSuggestion_" + this.props.guild} >
                    <img className={"playerSuggestionThumbnail"} src={"../../data/thumbnails/" + getSimplifiedPlayerName(this.props.playerName) + ".png"} />
                    <p className={"playerSuggestionName"}>
                        {this.props.playerName}
                    </p>
                    <p className={"playerSuggestionDescription"}>
                        {this.props.playerDescription}
                    </p>
                </div>
            )
        }

    }
}

export default PlayerSuggestion
