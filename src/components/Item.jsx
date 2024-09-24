

const Item = ({name,image,desc,website})=> {
    return(
        <div className="card">
            <h2 className="title">{name}</h2>
            <img className="image" src={image} alt={name + desc} />
            <p className="version">{desc}</p>
            <a href={website}>View Shoe</a>
        </div>
    )
}

export default Item;