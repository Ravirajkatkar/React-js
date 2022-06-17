import { useState } from "react";
function Profile(){
    const [loggedIn, setLoggedIn] = useState(1)

    return(
        <div>
            {loggedIn==1?
            <h1>Raj</h1>
            :loggedIn==2?<h1>Mahesh</h1>
            :<h1>Shyam</h1>
        }
        </div>
    )
}

export default Profile;