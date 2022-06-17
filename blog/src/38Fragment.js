import './App.css'
import React from 'react'
import Cols from './Cols.js'
function AB(){
    return (
        <div>
            <h1>React Fragment</h1>
            <table>
                <tbody>
                    <tr>
                        <Cols />
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AB;