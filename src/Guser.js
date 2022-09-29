function Guser(props){

    if (Object.keys(props.userData).length < 1) {
        return <h3>Enter User name</h3>;
    }
    
  

    return(
        <div className='user-Card'>

            <img src ={props.userData.avatar_url} alt=''/>
            <br/>
            <p>Name : {props.userData.name}</p>
            <p>
                blog Link :<a href={props.userData.blog}>{props.userData.blog}</a>
            </p>
            <p>
        Location: <b>{props.userData.location}</b>
      </p>
      <p>Email: {props.userData.email}</p>

      <p>
        Public repos:<b>{props.userData.public_repos}</b>{" "}
      </p>
      <p>id:<b>{props.userData.id}</b>
      </p>{" "}


        </div>
    );
}

export default Guser;