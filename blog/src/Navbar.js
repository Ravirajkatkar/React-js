import React from 'react'
import { Navbar,Nav} from 'react-bootstrap'

 function Navvv() {
    return (
      <div className="App">

          <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="#">Navbar</Navbar.Brand>
              <Nav className="mr-auto">
                  <Nav ><a href="#Home">Home</a></Nav>
                  </Nav>
          </Navbar>
          </div>
    )
}

export default Navvv;
