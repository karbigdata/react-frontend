const ListItem = (props)=>{

  const {id,name,email,body} = props;
  return (
            <li  className="comment">
              <div  className="comments-header">
                <h3 className="email">{email}</h3>
                <h3 className="name">{name}</h3>
              </div>
              <p className="message"> {body} </p>
            </li>
  );
}

export default ListItem;