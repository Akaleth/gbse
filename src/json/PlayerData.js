import butchers from "../../data/player_data/butchers.json"
import fishermen from "../../data/player_data/fishermen.json"

const playerData = [butchers, fishermen];

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
