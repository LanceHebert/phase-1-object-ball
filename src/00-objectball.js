const gameObject = () => { return {
            home : {
                teamName: "Brooklyn Nets",
                colors: ["Black","White"],
                player: 
                    {
                        "Alan Anderson":{
                            "number": 0,
                            "shoe": 16,
                            "points": 22,
                            "rebounds": 12,
                            "assists": 12,
                            "steals": 3,
                            "blocks": 1,
                            "slamDunks": 1,
                        },
                        "Reggie Evans":{
                            "number": 30,
                            "shoe": 14,
                            "points": 12,
                            "rebounds": 12,
                            "assists": 12,
                            "steals": 12,
                            "blocks": 12,
                            "slamDunks": 7,
                        },
                        "Brook Lopez":{
                            "number": 11,
                            "shoe": 17,
                            "points": 17,
                            "rebounds": 19,
                            "assists": 10,
                            "steals": 3,
                            "blocks": 1,
                            "slamDunks": 15,
                        },
                        "Mason Plumlee":{
                            "number": 1,
                            "shoe": 19,
                            "points": 26,
                            "rebounds": 12,
                            "assists": 6,
                            "steals": 3,
                            "blocks": 8,
                            "slamDunks": 5,
                        },
                        "Jason Terry":{
                            "number": 31,
                            "shoe": 15,
                            "points": 19,
                            "rebounds": 2,
                            "assists": 2,
                            "steals": 4,
                            "blocks": 11,
                            "slamDunks": 1,
                        },
                    }
            },
            away : {
                teamName: "Charlotte Hornets",
                colors: ["Turquoise", "Purple"],
                player: 
                    {
                        "Jeff Adrien":
                        {
                            "number": 4,
                            "shoe": 18,
                            "points": 10,
                            "rebounds": 1,
                            "assists": 1,
                            "steals": 2,
                            "blocks": 7,
                            "slamDunks": 2,
                        },
                        "Bismak Biyombo":
                        {
                            "number": 0,
                            "shoe": 16,
                            "points": 12,
                            "rebounds": 4,
                            "assists": 7,
                            "steals": 7,
                            "blocks": 15,
                            "slamDunks": 10,
                        },
                        "DeSagna Diop":
                        {
                            "number": 2,
                            "shoe": 14,
                            "points": 24,
                            "rebounds": 12,
                            "assists": 12,
                            "steals": 4,
                            "blocks": 5,
                            "slamDunks": 5,
                        },
                        "Ben Gordon":
                        {
                            "number" : 8,
                            "shoe" : 15,
                            "points" : 33,
                            "rebounds" : 3,
                            "assists" :  2,
                            "steals" : 1,
                            "blocks" : 1,
                            "slamDunks" : 0,
                        },
                        "Brendan Haywood":
                        {
                            "number" : 33,
                            "shoe" : 15,
                            "points" : 6,
                            "rebounds" : 12,
                            "assists" : 12,
                            "steals" : 22,
                            "blocks" : 5,
                            "slamDunks":  12,
                        },
                    }
            },
        }; 
}      
    // console.log(Object.keys(allStat));
    // console.log((Object.values(allStat)));
    // console.log(Object.entries(allStat));
  
          //******************************************************************** */

// console.log(gameObject());
// debugger;
const homeTeamName = () => {
    let object = gameObject()
    return object['home']['teamName']
  }
//  debugger; 
//   console.log(homeTeamName())
 //******************************************************************** */ 
const numPointsScored = (playerName) => {
    
    if(gameObject().home.player[playerName])
    {        
        return `Points scored by ${playerName}:${gameObject().home.player[playerName].points}`; 
    }
    else if (gameObject().away.player[playerName])
    {        
        return `Points scored by ${playerName}:${gameObject().away.player[playerName].points}`;        
    }
    else
    {
        return `Player "${playerName}" not found.`;       
    }  
}
// console.log(numPointsScored("snoop"));
// console.log(numPointsScored("Ben Gordon"));
// console.log(numPointsScored("Reggie Evans"));

//******************************************************************** */
const shoeSize = (playerName) => {
    if(gameObject().home.player[playerName])
    {        
        return `Shoe size of ${playerName}:${gameObject().home.player[playerName].shoe}`; 
    }
    else if (gameObject().away.player[playerName])
    {        
        return `Shoe size of ${playerName}:${gameObject().away.player[playerName].shoe}`;        
    }
    else
    {
        return `Player "${playerName}" not found.`;        
    }  
}

// console.log(shoeSize("Brook Lopez"));
//******************************************************************** */
const teamColors = teamNamePassed => {
    
    if (gameObject().home.teamName === teamNamePassed)
    {
        return `${teamNamePassed} colors are ${gameObject().home.colors}`
    }
    else if (gameObject().away.teamName === teamNamePassed)
    {
        return `${teamNamePassed} colors are ${gameObject().away.colors}`
    }
    else
    {
        return console.log("Team not found");
    }
}

// console.log(teamColors("Brooklyn Nets"));
//******************************************************************** */
const teamNames = () => {
    const teamArray = []
    teamArray.push(gameObject().home.teamName);
    teamArray.push(gameObject().away.teamName);
    return teamArray;
}
// console.log(teamNames());
//******************************************************************** */
const playerNumbers = (teamNameArg) => {
    const numberArray = []
    if (gameObject().home.teamName === teamNameArg)
    {
        for(const key in gameObject().home.player )
        {
            // console.log(numberArray.push(gameObject().home.player[key]["number"]));
            numberArray.push(gameObject().home.player[key]["number"]);
        
        }
        return numberArray;
    }
    else if (gameObject().away.teamName === teamNameArg)
    {
        for(const key in gameObject().away.player )
        {
            // console.log(numberArray.push(gameObject().home.player[key]["number"]));
            numberArray.push(gameObject().away.player[key]["number"]);
        
        }
        return numberArray;
    }
    else
    {
        return console.log("Team not found");
    }
    
}
// console.log("****",playerNumbers("Charlotte Hornets"));
// console.log(playerNumbers("Brooklyn Nets"));
// playerNumbers("Charlotte Hornets111");
//******************************************************************** */
const playerStats = (playerNameArg) => {
    const statsObj = {...gameObject()};
    if (statsObj.home.player[playerNameArg])
    {
        // for(const key in statsObj.home.player )
        // {
            // console.log(numberArray.push(gameObject().home.player[key]["number"]));
           delete (statsObj.home.player[playerNameArg]["number"]);
                  
        
        return statsObj.home.player[playerNameArg];
    }
    else if (statsObj.away.player[playerNameArg])
    {
        for(const key in statsObj.away.player )
        {
            // console.log(numberArray.push(gameObject().home.player[key]["number"]));
           delete (statsObj.away.player[key]["number"]);
                  
        }
        return statsObj.away.player[playerNameArg];
    }
    else
    {
        return console.log("Team not found");
    }
    // console.log();
    
}
//******************************************************************** */
// console.log(playerStats("Alan Anderson"));
// console.log(playerStats("Ben Gordon"));
const playerRebounds = (playerName) => {
    if(gameObject().home.player[playerName])
    {        
        return `Rebounds of ${playerName}:${gameObject().home.player[playerName].rebounds}`; 
    }
    else if (gameObject().away.player[playerName])
    {        
        return `Rebounds of ${playerName}:${gameObject().away.player[playerName].rebounds}`;        
    }
    else
    {
        return `Player "${playerName}" not found.`;        
    }  
}

const bigShoeRebounds = () => {
    const statsObj = {...gameObject()};
    let shoeStored = 0;
    let bigShoePlayer = "";

    // console.log(statsObj.home);
    //biggest shoe home,biggest shoe away, compare and return biggest shoe period.
    for(const key in statsObj.home.player)
    {
        // console.log("*** ",statsObj.home.player[key]["shoe"]);
        if(statsObj.home.player[key]["shoe"] > shoeStored)
            {
                 shoeStored = statsObj.home.player[key]["shoe"]
            }

    }
    for(const key in statsObj.away.player)
    {
        // console.log("*** ",statsObj.away.player[key]["shoe"]);
        if(statsObj.away.player[key]["shoe"] > shoeStored)
            {
                 shoeStored = statsObj.away.player[key]["shoe"]
            }

    }
    
    // console.log(shoeStored);
    
    for(const key in statsObj.home.player)
    {
        
        if(statsObj.home.player[key]["shoe"] === shoeStored)
        {
            // console.log([key])
            bigShoePlayer = [key];
        } 

    }
    for(const key in statsObj.away.player)
    {
        
        if(statsObj.away.player[key]["shoe"] === shoeStored)
        {
            // console.log([key])
            bigShoePlayer = [key];
        } 

    }
    // console.log(bigShoePlayer); 
    //then find that players rebounds
    
    return `${playerRebounds(bigShoePlayer)} who also happens to have the biggest shoe`

}
// console.log(bigShoeRebounds());
//******************************************************************** */
const mostPointsScored= () => {
    const statsObj = {...gameObject()};
    let pointsStored = 0;
    let highestPointsPlayer = "";
    for(const key in statsObj.home.player)
    {
        // console.log("*** ",statsObj.home.player[key]["points"]);
        if(statsObj.home.player[key]["points"] > pointsStored)
            {
                 pointsStored = statsObj.home.player[key]["points"]
            }

    }
    for(const key in statsObj.away.player)
    {
        // console.log("*** ",statsObj.away.player[key]["points"]);
        if(statsObj.away.player[key]["points"] > pointsStored)
            {
                 pointsStored = statsObj.away.player[key]["points"]
            }

    }
    // console.log(pointsStored);

    for(const key in statsObj.home.player)
    {
        
        if(statsObj.home.player[key]["points"] === pointsStored)
        {
            // console.log([key])
            highestPointsPlayer = [key];
        } 

    }
    for(const key in statsObj.away.player)
    {
        
        if(statsObj.away.player[key]["points"] === pointsStored)
        {
            // console.log([key])
            highestPointsPlayer = [key];
        } 

    }

    return `${highestPointsPlayer} scored the most points.`
}
// console.log(mostPointsScored());
//******************************************************************** */

const winningTeam = () => {
    const statsObj = {...gameObject()};
    let homeArray = [];
    let awayArray = [];

    for (const key in statsObj.home.player)
    {
        homeArray.push(statsObj.home.player[key].points);
    }
    // console.log(homeArray);

    for (const key in statsObj.away.player)
    {
        awayArray.push(statsObj.away.player[key].points);
    }
    // console.log(awayArray);

    const reducer = ( accumulator , elementValue ) => {return accumulator += elementValue;}
    
    // console.log(homeArray.reduce(reducer, 0));
    // console.log(awayArray.reduce(reducer, 0));

    if (homeArray.reduce(reducer, 0) < awayArray.reduce(reducer, 0))
    {
       
         return statsObj.home.teamName;
    }
    else
    {
        
        return statsObj.away.teamName;
    }

    
}
console.log(winningTeam());
//******************************************************************** */

const playerWithLongestName = () => {
    let longestName = "";
    let nameArray = [];

    for (let key in gameObject().home.player)
    {        
        nameArray.push([key]);        
    }

    for (let key in gameObject().away.player)
    {        
        nameArray.push([key]);        
    }

    // console.log(nameArray);

    for(let name of nameArray)
    {
        // console.log(name);
        if (name.length >= longestName.length)
        {
            longestName = name;
           
        }
        // console.log(longestName);
    }
      
    return longestName;
}
console.log(playerWithLongestName());

//******************************************************************** */

const mostRebounds= () => {
    const statsObj = {...gameObject()};
    let rebounds = 0;
    let highestRebounds = "";

    for(const key in statsObj.home.player)
    {
        // console.log("*** ",statsObj.home.player[key]["rebounds"]);
        if(statsObj.home.player[key]["rebounds"] >= rebounds)
            {
                rebounds = statsObj.home.player[key]["rebounds"]
            }

    }
    for(const key in statsObj.away.player)
    {
        // console.log("*** ",statsObj.away.player[key]["points"]);
        if(statsObj.away.player[key]["rebounds"] >= rebounds)
            {
                 rebounds = statsObj.away.player[key]["rebounds"]
            }

    }
    // console.log(pointsStored);

    for(const key in statsObj.home.player)
    {
        
        if(statsObj.home.player[key]["rebounds"] === rebounds)
        {
            // console.log([key])
            highestRebounds = [key];
        } 

    }
    for(const key in statsObj.away.player)
    {
        
        if(statsObj.away.player[key]["rebounds"] === rebounds)
        {
            // console.log([key])
            highestRebounds = [key];
        } 

    }
    
    return highestRebounds;
}
console.log(mostRebounds());

const doesLongNameStealATon = () => {
    const longestName = playerWithLongestName();
    const Rebounds = mostRebounds();

    if( Rebounds === longestName)
    {
        return true;
    }
    else
    {
        return false;
    }

}
console.log(doesLongNameStealATon());