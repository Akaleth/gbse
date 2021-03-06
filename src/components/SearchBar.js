import React, {Component} from 'react'
import Autosuggest from 'react-autosuggest'
import PlayerSuggestion from './PlayerSuggestion.js'
import {queryPlayerData} from '../json/PlayerData.js'
import '../App.css'


// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = (suggestion, {query, isHighlighted}) => (
    <div>
        <PlayerSuggestion guild={suggestion.guildId} playerName={suggestion.name} playerDescription={suggestion.tags[0] + ", " + suggestion.tags[1]} highlight={isHighlighted}/>
    </div>
);

const getGuildName = (player) => {
    return "butchers";
}

class Example extends React.Component {
    constructor() {
        super();

        // Autosuggest is a controlled component.
        // This means that you need to provide an input value
        // and an onChange handler that updates this value (see below).
        // Suggestions also need to be provided to the Autosuggest,
        // and they are initially empty because the Autosuggest is closed.
        this.state = {
            value: '',
            suggestions: [],
            selectedPlayer: null,
        };
    }

    onPlayerSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
        this.setState({
            selectedPlayer: suggestion,
        });
    };

    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };

    // Autosuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.
    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: queryPlayerData(value)
        });
    };

    // Autosuggest will call this function every time you need to clear suggestions.
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {
        const { value, suggestions, selectedPlayer } = this.state;

        // Autosuggest will pass through all these props to the input.
        const inputProps = {
            placeholder: 'Search for players, traits, plays, nationalities, etc.',
            value,
            onChange: this.onChange
        };

        // Finally, render it!
        if(selectedPlayer != null) {
            return (
                <div className={"example"}>
                    <div className={"card_container"}>
                        <img src={"data/player_cards/" + selectedPlayer.guildId + "/" + selectedPlayer.name.replace(/ /g,'').toLowerCase() + "_front.jpg"} className={"player_left"} />
                        <img src={"data/player_cards/" + selectedPlayer.guildId + "/" + selectedPlayer.name.replace(/ /g,'').toLowerCase() + "_back.jpg"} className={"player"} />
                    </div>
                    <Autosuggest
                        suggestions={suggestions}
                        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                        getSuggestionValue={getSuggestionValue}
                        renderSuggestion={renderSuggestion}
                        inputProps={inputProps}
                        onSuggestionSelected={this.onPlayerSelected}
                        highlightFirstSuggestion={true}
                    />
                </div>
            );
        } else {
            return (
                <div className={"example"}>
                    <Autosuggest
                        suggestions={suggestions}
                        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                        getSuggestionValue={getSuggestionValue}
                        renderSuggestion={renderSuggestion}
                        inputProps={inputProps}
                        onSuggestionSelected={this.onPlayerSelected}
                        highlightFirstSuggestion={true}
                    />
                </div>
            );
        }

    }
}

export default Example
