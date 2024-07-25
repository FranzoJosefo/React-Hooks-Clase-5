const PostCard = ({ title, body, id }) => {
    return (
        <>
            <h4>{id}</h4>
            <h3>{title}</h3>
            <p>{body}</p>
        </>
    )
}

export default PostCard

//Esto es el equivalente a un ListItem de un RecyclerView, va a ser un childComponent, dentro de un Parentm PostCardList que va a ser el RecyclerView ponele.