import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { navigateToHome } from "../routes/coordinator"


export const useProtectedPage = () => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    useEffect(()=>{
        if(!token){
          navigateToHome(navigate)
        }
      },[])
}