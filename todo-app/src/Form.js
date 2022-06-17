import React, { useState } from 'react'
//import { Container } from 'react-bootstrap'

export default function Form(props) {
    const [inputdata, setState] = useState({
        taskData: "",
        Daytime: "",
        remider: "",
    })


    return (
        <div>
            <div className='container-sm'>
                <div class="container lg-4">
                    <div class="mb-2">
                        <label for="formGroupExampleInput" class="form-label">Task</label>
                        <input type="text" name='task' class="form-control" id="formGroupExampleInput" placeholder="Add Task" />
                    </div>
                    <div class="mb-2">
                        <label for="formGroupExampleInput2" class="form-label">Day & Time</label>
                        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Add Day & Time" />
                    </div>
                    <div class="form-check">
                        <label class="form-check-label" for="defaultCheck1">
                            Set Reminder
                        </label>
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    </div>
                    <div class="d-grid gap-2 col-4 mx-auto">
                        <button class="btn btn-primary mt-3" type="button">Save Task</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
