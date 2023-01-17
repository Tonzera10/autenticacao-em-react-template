import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useProtectedPage } from "../hook/useProtectedPage"

export const Viagens = () => {

    const id = 'klZm9dvo66qWRfEiqBFq'
    const token = localStorage.getItem('token')
    const auth = {headers: {auth:token}}
    const body = {
        name: "Resenha em Jupiter",
        planet: "Jupiter",
        date: "24/04/2019",
        description: "Resenha e futebol dos guris  e das gurias hahaha!",
        durationInDays: 30
    }

    useProtectedPage()

    const criar = async() => {
        try{
            const CreatTrip = await axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/everton-barbosa/trips`, body, auth)
            console.log(CreatTrip.data)
        }catch (e){
            alert(e.message)
        }
    }

    
    return(
        <>
            <h1>create routes</h1>
            <button onClick={criar}>Criar Trip</button>
        </>
    )
}