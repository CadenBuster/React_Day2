import {useState} from 'react'

const ExerciseTwo = () => {
  

    const [game, setGame] = useState({
        id: 1,
        player: {
            name: "Dylan"
        }
    })

    const handleClick = () => {
        console.log('Name Changed')
        setGame({...game, player: {name: 'Zach Lavine'}})
    }
    return (
    <div onClick={(handleClick)}>Exercise Two {game.player.name}</div>
    )
    }


export default ExerciseTwo