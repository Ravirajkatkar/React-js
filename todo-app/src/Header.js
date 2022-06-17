import React from 'react'
import Button from './Button'


export default function Header(props) {


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light container">
                <div className="container-fluid">
                    <a className="navbar-brand ms-5" href="#"><h1><i>Tasks Tracker</i></h1></a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        </ul>
                        <div className="d-flex">

                            <Button class="btn-rounded"  togglebtn1={props.togglebtn} title={props.title} togglecolor1={props.togglecolor} Btncolor={props.color}></Button>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}


