
import React ,{useEffect} from 'react'

export default function Note (props) {
    useEffect(()=>{
        console.log(props);
          
      },[])

      const clickHandler = (id) => {
        props.onDelete(id)
      }
     
        return (
            <div className="card shadow-sm rounded" onClick={()=>{clickHandler(props[0])}} style={{ backgroundColor: props[1].color }}><p className="card-text p-3">{props[1].title}</p></div>
        )
    
}
