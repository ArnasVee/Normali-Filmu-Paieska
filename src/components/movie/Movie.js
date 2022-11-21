const Movie=(props)=>{
    return(
        <div className="card col" >
            <h1 className="card-title">{props.title}</h1>
            <img src={props.img && props.img} alt="" width="150px"/>


        </div>
    )
}
export default Movie