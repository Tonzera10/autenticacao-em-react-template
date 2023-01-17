import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useProtectedPage } from "../hook/useProtectedPage";
import { navigateToHome } from "../routes/coordinator";

function AdminPage() {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  useProtectedPage()
  useEffect(()=>{
    getTripDetail()
  },[])
  
  
  const getTripDetail = async () => {
    try {
      const id = '00wcL8qkU39YFf42Oj5u'
      const auth = {headers:{auth:token}}
      const response = await axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/everton-barbosa/trip/${id}`, auth)
      console.log(response)
  } catch(e) {
    console.log(e.message)
  }
  }

  return (
    <main>
      <Header />
      <h1>Página de Admin</h1>
    </main>
  );
}

export default AdminPage;
