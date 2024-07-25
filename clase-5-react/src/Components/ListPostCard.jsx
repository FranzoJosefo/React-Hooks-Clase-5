import { useEffect, useState } from "react"
import PostCard from "./PostCard"

const ListPostCard = () => {
    const [postList, setPostList] = useState([]) //Aca storeo,[soyUnaVariable, soyUnSetter] = useState(soy el tipo de dato)

    useEffect(() => { //Solo dios sabe que soy...  TODO LO QUE SE ES QUE ACA HAGO API CALLS
        fetch('https://jsonplaceholder.typicode.com/posts') //fetch es GET por default sino le mandas un fetch.put(TU VIEJA)
            .then(response =>
                response.json()
            )
            .then(json => {
                console.log("", json)
                setPostList(json)
            })
            .catch(error => {
                console.error("Esploto todo", error)
            })
    }, [])

    return (
        <>
            <h1>Mis Publicaciones Bellas</h1>
            <div>
                {postList.map((post) => (
                    <PostCard key={post.id} title={post.title} body={post.body} id={post.id}></PostCard>
                ))}
            </div>
        </>
    )
}

export default ListPostCard