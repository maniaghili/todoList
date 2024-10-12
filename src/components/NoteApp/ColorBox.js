import React,{useEffect} from 'react'

export default function ColorBox (props) {
   
useEffect(()=>{
''
},[])

    const clickHandler = (e) => {
       props.OnColor(e)
    }

        return (
            <div className='color-box' onClick={()=>{clickHandler(props.color)}} style={{backgroundColor: props.color}}>  
            </div>
        )
    }

