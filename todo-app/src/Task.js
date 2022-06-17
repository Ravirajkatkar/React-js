import React from 'react'
import './App.css'

export default function Task({ task,DeleteOn}) {
    // const mystyle = {
    //     backgroundColor: "rgb(153, 153, 153)",
    //    };

    return (
        <div className='container mt-2'>
            <div className="card text">
                <div className={`task ${task.reminder ? 'reminder' : ''}`} >

                    <div class="card-body" >
                        <h3>
                            {task.Task}{' '}
                        </h3>
                        <p><i>{task.Day}</i>,{task.Date}</p>
                        <p>{task.Time}</p>
                        <button class="btn btn-danger btn-rounded " onClick={()=> DeleteOn(task.id)}>Delete</button>

                    </div>
                </div>
            </div>
        </div>
    )
}