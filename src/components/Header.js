import { useNavigate } from "react-router-dom";
import { navigateToAdmin, navigateToHome, navigateToTrip } from "../routes/coordinator";

function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <button onClick={() => navigateToHome(navigate)}>
        Ir para página inicial
      </button>
      <button onClick={() => navigateToAdmin(navigate)}>
        Ir para página de admin
      </button>
      <button onClick={() => navigateToTrip(navigate)}>
        Ir para página de viagens
      </button>
    </header>
  );
}

export default Header;
