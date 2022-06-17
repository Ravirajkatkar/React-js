import React from 'react'
import Task from './Task'

export default function Tasklist({list,Delete}) {
    return (
        <div>
            {list.map((task,id) => (
                <Task key={task.id} task={task} DeleteOn={Delete} value={task.id}/>
            ))}
        </div>
    )
}