import WebsiteLogo from "../../../assets/images/LSPWebLogo.png";
import { Link } from "react-router-dom";
import "./FormContainer.css";

const FormContainer = ({ children, parentClass}) => {
  return (
    <section className={"container-fluid " + parentClass}>
      <section className="form-container-header">
        <Link to="/pages/home">
          <img className="library-logo" src={WebsiteLogo} alt="Website_Logo" title="Home" />
        </Link>
      </section>
      <section className="form-container-body">{children}</section>
    </section>
  );
};

export default FormContainer;