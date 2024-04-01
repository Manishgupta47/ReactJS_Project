const WelcomeMessage = ({onGetPostsClick})=> {
    return(
        <div  >
        <h1 classNameName="welcome" >There Are no Posts</h1>
        <button type="button" className="btn btn-primary" style={{marginLeft: "450px"}}
        >Get Posts From Server</button>
        </div>
    )
};

export default WelcomeMessage;