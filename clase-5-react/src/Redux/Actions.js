
//Tecnicamente en vez de hacer el return y definir el Type en la linea 22, podriamos definirlo aca, y pasar JSON por param
// export const fetchPosts = (json) => {
// return {
//     type: 'FETCH_POSTS',
//     payload: json,
// }
// }

// import { FETCH_POSTS } from "./ActionTypes";

// y llamo esto de arriba tipo `return fetchPosts(json)` en la linea 22
// export const fetchPostsAction = async () => {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         if (!response.ok) {
//             //check status code
//         }
//         const json = await response.json();
//         //Aca en el payload devuelvo el JSON en si, fijense que en la Action LO UNICO QUE HAGO, es el fetch... pero es bobo
//         // No pongo aca logica de negocio, solo hago el fetch y devuelvo la data CRUDA, al meterlo en la action de type `FETCH_POSTS`
//         // le llegea al Reducer, que tira su magia. 
//         //Estas actions las podriamos definir en algun otro lado, hacer import, y hacer return de ese objeto. 
//         console.log("fetchPostsAction: GET", json)
//         return {
//             type: 'FETCH_POSTS',
//             payload: json,
//         }
//         // return json;
//     } catch (error) {
//         console.error('Se rompio todo :', error);
//     }
// };

// export const postActivity = (activityData) => {
//     const endpoint = `http...`

//     return (dispatch) => {
//         try {
//             const {data} = axios.post(endpoint, activityData)
//             // .then((response) => 
//             dispatch({
//                 type: "POST_ACTIVITY", //se puede definir tipo POST ACTIVITY en ActionTypes.js
//                 payload: data,
//             })
//         }
//         catch (error) {}
//         }
//     }

// export const fetchPostAction = () => {
//     const endpoint = "https://jsonplaceholder.typicode.com/posts"
//     console.log("Estoy entrando en fetchPostAction")

//     return async (dispatch) => {

//         try {
//             const {data} = await axios(endpoint)
//             console.log("Antes de hacer return del dispatch en fetchPostAction", data)
//             return dispatch({
//                 type: FETCH_POSTS,
//                 payload: data,
//             })
//             //Si algo no cumple, puedo tirar aca error
//         } catch (error) {
//             //alert(error.response.data) Aca muestro error. 
//             console.error("Error al obtener la lista de posts", error)
//         }
//     }
// }

import axios from "axios"
import { FETCH_POSTS } from "./ActionTypes"

const fetchPostAction = () => {
    return async (dispatch) => {
        try {
            console.log("Entro en el try")
            const { data } = await axios("https://jsonplaceholder.typicode.com/posts")
            console.log("data:", data)

            return dispatch({
                type: FETCH_POSTS,
                payload: data
            })
        } catch (error) {
            console.error("reventoski", error)
        }
    }
}

export default fetchPostAction