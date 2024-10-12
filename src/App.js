import React from 'react'
import NoteApp from './components/NoteApp/NoteApp'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Ss from './components/salam'
export default function App () {

    
        return (
            <>
               <Routes>
                <Route path="/" element={<NoteApp />} />
                <Route path="/salam" element={<Ss/>} />
               </Routes>
            </>
        )
    
}
