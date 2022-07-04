import "./sidebar.scss";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Home from '@mui/icons-material/Home'
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import ShoppingCart from '@mui/icons-material/ShoppingCart'
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link ,useNavigate} from "react-router-dom";

const Sidebar = () => {
const navigate = useNavigate();
  return (
    <div className="sidebar" style={{display : 'flex',flexDirection : 'column'}}>
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span ><img className="logo" src='https://www.vanghee.com/assets/images/vng-new-logo.png' alt="vanghee"/></span>
        </Link>
      </div>
      <div className="center" style={{flexGrow : 1}}>
        <ul >
        <Link to = '/' style={{textDecoration : 'none'}}>
          <li>
            <Home className="icon" />
            <span>Dashboard</span>
          </li> 
          </Link>
          <Link to="/statement" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Statement</span>
            </li>
          </Link>
          <Link to="/transaction" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Transactions</span>
            </li>
          </Link>
          <Link to="/cusclear" style={{textDecoration : 'none'}}>
          <li >
            <ShoppingCart className="icon" />
            <span>Custom Clearance</span>
          </li>
          </Link>
        </ul>
      </div>
      <div className="bottom">
        <ul>
        <li>
            <ExitToAppIcon className="icon" />
            <span onClick={()=>navigate("/login")}>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
