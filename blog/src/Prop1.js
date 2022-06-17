function Rk2(props)
{
    console.log.apply(props)
    return(
        <div>
        <h1> Hello {props.name}</h1>
        <h2> Email : {props.email} </h2>
        </div>
    )
} 

export default Rk2;