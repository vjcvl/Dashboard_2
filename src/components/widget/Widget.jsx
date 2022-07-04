import "./widget.scss";
import AccountBalanceWallet from '@mui/icons-material/AccountBalanceWallet'
import CreditCard from '@mui/icons-material/CreditCard'
import CurrencyRupee from '@mui/icons-material/CurrencyRupee'
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { Card,CardContent,Typography } from "@mui/material";

const Widget = ({ type }) => {
  let data;

  //temporary

  switch (type) {
    case "user":
      data = {
        title: "Credits",
        amount : '4,200',
        isMoney: false,
        icon: (
          <AccountBalanceWallet
            style={{
              color: "#F0F7F7",
              backgroundColor: "rgba(213, 0, 0, 1)",
              height : '45px',
              width : '45px',
              fontSize : 'small',
              borderRadius : '5px'
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "Deposits",
        isMoney: false,
        amount : '1,800',
        icon: (
          <CurrencyRupee 
            style={{
              backgroundColor: "rgba(218, 165, 32, 1)",
              color: "#F0F7F7",
              height : '45px',
              width : '45px',
              borderRadius : '5px'
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "Earnings",
        isMoney: true,
        amount : '8,200',
        icon: (
          <MonetizationOnOutlinedIcon
            style={{ backgroundColor: "rgba(17, 112, 17, 1)", color: "#F0F7F7",height : '45px',
            width : '45px',margin : '10px F0F7F7' ,borderRadius : '5px'}}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
      
      <div className="widget" >
      <Card className="card" sx={{borderRadius : 3,boxShadow : ' 10px 10px 25px #cfd8dc'}}>
        <CardContent sx={{display :'flex',flexDirection : 'row',justifyContent : 'space-between'}}>
            <div style={{padding : '8px 0px 0px 10px' }}>{data.icon}</div>
           <div style={{padding : '5px 64px 0px 15px',
           display : 'flex',
           flexDirection : 'column',
           justifyContent : 'space-around'}}>
             <Typography sx={{color : '#048b79',fontSize : 12}}>{data.title}</Typography>
             <div style={{color : '#05463e',fontSize : 24,fontWieght : 'bolder'}}>&#8377; {data.amount}</div>
             </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Widget;
