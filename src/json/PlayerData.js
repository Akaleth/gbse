import alchemists from "../../data/player_data/alchemists.json"
//import blacksmiths from "../../data/player_data/blacksmiths.json"
import brewers from "../../data/player_data/brewers.json"
import butchers from "../../data/player_data/butchers.json"
import falconers from "../../data/player_data/falconers.json"
import fishermen from "../../data/player_data/fishermen.json"
import masons from "../../data/player_data/masons.json"


const playerData = [alchemists, brewers, butchers, falconers, fishermen, masons];

const matchesGuildName = (guild, input) => {
    return guild.guildId.trim().toLowerCase().includes(input) || guild.guild.trim().toLowerCase().includes(input);
}

export function queryPlayerData (value) {
    const inputValue = value.trim().toLowerCase();
    var players = [];
    for(var i = 0; i < playerData.length; i++) {
        if(matchesGuildName(playerData[i], inputValue)) {
            players = players.concat(playerData[i].players);
        } else {
            players = players.concat(playerData[i].players.filter(player => player.name.trim().toLowerCase().includes(inputValue) || player.tags.filter(tag => tag.toLowerCase().includes(inputValue)).length > 0));
        }
    }
    return players;
}
