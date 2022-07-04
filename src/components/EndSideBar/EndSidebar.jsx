import "./EndSidebar.scss";
import Notifications from "@mui/icons-material/Notifications";
import ArrowBackIos from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos'
import { Card, CardContent,Box,Typography,IconButton, Paper, Avatar} from "@mui/material";
let data = [{"type" : 'Deposit','remark' : 'online Payement','amount' : '1,200','date' : '22/02/2012','isDeposit' : true},
            {"type" : 'Credit','remark' : 'online Payement','amount' : '1,200','date' : '22/02/2012','isDeposit' : false},
            {"type" : 'Deposit','remark' : 'online Payement','amount' : '1,200','date' : '22/02/2012','isDeposit' : true},
            {"type" : 'Credit','remark' : 'online Payement','amount' : '1,200','date' : '22/02/2012','isDeposit' : false},
            {"type" : 'Credit','remark' : 'online Payement','amount' : '1,200','date' : '22/02/2012','isDeposit' : false},
            {"type" : 'Deposit','remark' : 'online Payement','amount' : '1,200','date' : '22/02/2012','isDeposit' : true},
            {"type" : 'Credit','remark' : 'online Payement','amount' : '1,200','date' : '22/02/2012','isDeposit' : false},
          ];

let userData = [{"userName" : "User Name","id" : 12612660, "remark" : "Net Banking", "amount" : "12,000"}]
const EndSidebar = () => {
  
  return (
      <Box className="endsidebar">
      <div className="endtop">
        <div style={{flexGrow : 1,paddingTop : '2px',color : 'darkslateblue'}}><Notifications/></div>
        {userData.map((value)=><div style={{fontSize : '12px',paddingTop : '5px'}}>{value.userName}</div>)}
        
        <div style={{padding : '0px 0px 0px 10px'}}><Avatar sx={{height : 28,width : 28,borderRadius:'5px'}} variant="square" >U</Avatar></div>
      </div>
      <div className="endcenter">
        <Card sx={{color : 'white',boxShadow : '10px 10px 25px #cfd8dc',borderRadius : '15px'}}className = 'endcard'>
        {userData.map((e)=>{return(
            <CardContent style={{display : 'flex',paddingLeft : '25px',flexDirection : 'column'}}>
                 <div style={{fontSize : '14px'}}>{e.id}</div>
                 <div style={{fontSize : '14px',flexGrow : 1,marginTop : '40px'}}>{e.remark} </div>
                 <div style={{fontSize : '32px',fontStyle : 'bold',marginTop : '2px'}}>&#8377; {e.amount}</div>               
            </CardContent>
              )})}

        </Card>
      </div>  
      <div className="endbottom">
        <div>
          Last Transactions
        </div>
        {data.map((e)=>{return(
          <Card sx={{boxShadow : 'none'}} >
          <CardContent style={{  display: 'flex',
        flexDirection: 'row',
        width: '250px',
        padding : '10px'}}>
              <div style={{padding : '7px 0px 0px 3px '}}>{e.isDeposit ? <ArrowForwardIos sx={{fontSize : 15,color : 'green'}}/> : <ArrowBackIos sx={{fontSize : 15,color : 'red'}}/>}</div>
              <Box sx={{display : 'flex',flexDirection : 'column',paddingLeft : '20px'}}><Typography sx={{fontSize : 11}}>{e.type}</Typography><Typography sx={{fontSize : 11}}>{e.remark}</Typography></Box>
            <Box sx={{display : 'flex',flexDirection : 'column',marginLeft :'auto'}}><Typography sx={{fontSize : 8}}>&#8377; {e.amount}</Typography><Typography sx={{fontSize : 8}}>{e.date}</Typography></Box>
          </CardContent>
      </Card>
  
    )})}
      </div>
    </Box>
  );
};

export default EndSidebar;
