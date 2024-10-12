import React, { useState,useEffect } from 'react'
import Note from './Note'
import ColorBox from './ColorBox'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import { json, Link } from 'react-router-dom'
import { object } from 'prop-types'
// import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

export default function NoteApp (){

          const [colors] = useState([
                "#fff",
                "#FFD37F",
                "#FFFA81",
                "#D5FA80",
                "#78F87F",
                "#79FBD6",
                "#79FDFE",
                "#7AD6FD",
                "#7B84FC",
                "#D687FC",
                "#FF89FD",
            ])
            const [notes,setNotes]= useState([])
            const [allTodos,setAllTodos] = useState([])
            const [noteTitle,setTitle] = useState('')
            const [inputColor,setInputColor] = useState('#fff')
            const [asaa,setAsaa] = useState(false)

        const changeInputColor = (e) => {
            setInputColor(e)
        }

       const mani = async()=>{
            let ss =await fetch(`https://maniaa-93006-default-rtdb.firebaseio.com/todo.json`)
            let ssa =await ss.json()
            if(ssa){
            setAllTodos(Object.entries(ssa))
            let nn = notes
            Object.entries(ssa).map(aa=>nn.push(aa[1]))
            
            return nn
          }
          
       }

        useEffect(()=>{
            
             mani()
               
        },[asaa])

        
        const createTitle = (e) => {
            setTitle(e.target.value)
        }

        const createNewTodo =async () => {
            if(noteTitle){
                const newTodo = {
                    id:Math.floor(Math.random()*5000),
                    title:noteTitle,
                    color:inputColor
                }
               await fetch(`https://maniaa-93006-default-rtdb.firebaseio.com/todo.json`,{
                method:'POST',
                body:JSON.stringify(newTodo)
              })
                setTitle('')
                setInputColor('#fff')
                setAsaa(sssa=>!sssa)
            }else{
                alert('سلطان پر کن همشو')
            }
            
        }

        const deleteTodo =async (id) => {

           await fetch(`https://maniaa-93006-default-rtdb.firebaseio.com/todo/${id}.json`,{
                method:'DELETE',
            }
           ).then(s=>{
            console.log(s);
            setAsaa(sssa=>!sssa)
           })
        }

        const removeAll = () => {
            setNotes([])
        }
        
        return (
        
                <div>
                    <section id="home">
                        <div className="container">
                            <div className="header upper">SabzLearn Note App</div>

                            <br /><br />
                            <div className="flex row-gt-sm">
                                <div className="flex flex-50-gt-sm">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
                                        <input id="input-field" onBlur={(e)=>{createTitle(e)}} className="form-control" type="text" style={{ backgroundColor: inputColor }} placeholder="Something here..." />
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
                                        <div id='color-select'>
                                            {
                                                colors.map(color=><ColorBox OnColor={changeInputColor} color = {color} key={color}/>)
                                            }
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto my-1 text-right">
                                        <button id="btn-save" onClick={()=>{createNewTodo()}} type="button" className="btn btn-outline-info"><span className="fa fa-plus" ></span></button>
                                        <button id="btn-delete" onClick={()=>{removeAll()}} type="button" className="btn btn-outline-danger"><span id="btn-icon"
                                            className="fa fa-eraser"></span></button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex row-gt-sm">

                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <div className="container">
                                        <div className="row">
                                            <div id='listed' className="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 p-3 card-columns">

                                                {allTodos.length?allTodos.map((note,index)=><Note {...note} key={index} onDelete={deleteTodo} />):''}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <Link to="/salam">come</Link>
                        </div>
                    </section>
                </div>  
        )
    }