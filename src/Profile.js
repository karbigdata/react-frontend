
 const Profile = (props)=>{
  const { url, title, thumbnailUrl} = props;
  return <article className="profile-card">
    <img  src={url} alt="some image"/>
    <h2 className="title">{title}</h2>
    <a href={thumbnailUrl} className="button">details</a>

  </article>
}

export default Profile;