
import React, {useState} from 'react';
import axios from 'axios';
const DiceScreen = () => {
    let [players, setPlayers] = useState({
        player1: '',player2: '',player3: '',player4: '',player5: ''
    });
    let [scores, setScores] = useState({
        player1: "",player2: "",player3: "",player4: "",player5: ""
    })



    function diceRoll(e) {
          let player_id = e.target.id.replace("p", "player");

        //   console.log(player_id, players[player_id])

          axios.post("http://localhost:5000/api/player", {name: players[player_id]})
            .then(res => setScores({...scores, [player_id]: res.data.data.player.score}))
            .catch(err => console.log(err))


         }


    return(
        <div>
            <label>Person1: 
                <input type="text" name="person1" 
                   onChange={(e) => setPlayers({...players, player1: e.target.value})}
                />
                <button id="p1" onClick={diceRoll}>Roll</button>
                {
                    scores.player1 ? <span>Score: {scores.player1}</span> : null
                }
             </label>
            <label>Person2:
                <input type="text" name="person2" 
                     onChange={(e) => setPlayers({...players, player2: e.target.value})}
                />
                <button id="p2" onClick={diceRoll}>Roll</button>
                {
                    scores.player2 ? <span>Score: {scores.player2}</span> : null
                }
            </label>
            <label>Person3:
                <input type="text" name="person3" 
                        onChange={(e) => setPlayers({...players, player3: e.target.value})}
                />
                <button id="p3" onClick={diceRoll}>Roll</button>
                {
                    scores.player3 ? <span>Score: {scores.player3}</span> : null
                }
            </label>
            <label>Person4:
                <input type="text" name="person4" 
                        onChange={(e) => setPlayers({...players, player4: e.target.value})}
                />
                <button id="p4" onClick={diceRoll}>Roll</button>
                {
                    scores.player4 ? <span>Score: {scores.player4}</span> : null
                }
            </label>
            <label>Person5:
                <input type="text" name="person5" 
                        onChange={(e) => setPlayers({...players, player5: e.target.value})}
                />
                <button id="p5" onClick={diceRoll}>Roll</button>
                {
                    scores.player5 ? <span>Score: {scores.player5}</span> : null
                }
            </label>

            <button> End Game </button>
            
        </div>
    )
} 

export default DiceScreen;