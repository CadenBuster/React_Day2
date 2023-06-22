import {useState} from 'react'
import {RiHeartAddLine} from 'react-icons/ri'
import {RiHeartFill} from 'react-icons/ri'

const ExerciseOne = () => {
    let like = <RiHeartAddLine/>
    let [click,setClick] = useState(0)
    const handleClick = () => {
        click += 1;
        setClick(click);
    } 
    switch(click){
        case 0:
            like = <RiHeartAddLine/>
            break;
        case 1:
            console.log('Liked')
            like = <RiHeartFill color='red'/>
            break;
        default:
            console.log('Unliked')
            click = 0;
    }
    return (
        <div onClick={(handleClick)}>Exercise One {like}</div>
      )
    }
    
export default ExerciseOne