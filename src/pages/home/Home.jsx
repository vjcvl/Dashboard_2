import Sidebar from "../../components/sidebar/Sidebar";
import EndSidebar from "../../components/EndSideBar/EndSidebar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import { Paper,Card, CardContent, TextField, Typography } from "@mui/material";
import React from "react";
import { PieChart, Pie,Cell} from "recharts";
import { LineChart, Line, XAxis, YAxis, BarChart, Bar, Tooltip,LabelList } from "recharts";

let data = [{"date" : "11/01/2021","credit" : 3500,"debit" : 2500},{"date" : "12/01/2021","credit" : 6500,"debit" : 3000},{"date" : "13/01/2021","credit" : 5400,"debit" : 6000},{"date" : "14/01/2021","credit" : 7100,"debit" : 8000},{"date" : "11/01/2021","credit" : 3500,"debit" : 2500},{"date" : "12/01/2021","credit" : 6500,"debit" : 3000},{"date" : "13/01/2021","credit" : 5400,"debit" : 6000},{"date" : "14/01/2021","credit" : 7100,"debit" : 8000}]
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <div style={{display : 'flex',flexDirection : 'row',justifyContent : 'space-between',padding : '0px 0px 10px 0px'}}>
        <div className="head">Overview</div>  
        <TextField label = 'Search' size="small" variant="outlined" className="input"/>
        </div>      
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
        </div>
        <div style={{display : 'flex',justifyContent : 'space-between',flexDirection : 'row',paddingBottom : '20px',height : '200px',flex : 'auto'}}>
           <Paper sx={{display : 'flex',flexDirection : 'row',width : '530px',borderRadius : 5,boxShadow : '10px 10px 15px #cfd8dc'}}>
           <BarChart
          width={500}
          height={200}
          data={data}
          margin={{
            top: 20,
            right: 10,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="date" fontSize = '9px' axisLine={false}/>
          <YAxis fontSize = '9px' axisLine={false}/>
          <Bar dataKey="credit" fill="#a5d6a7" barSize={15} width={2}/>
          <Bar dataKey="debit" fill="#ff8a65" barSize={15}/>
        </BarChart>
  
            </Paper> 
            <div> 
              <Card sx={{width : 255, flex : 'auto',height : 200,justifyContent : 'flex-end',bgcolor:'#186e63',color : 'white',borderRadius : 5,boxShadow : '10px 10px 15px #cfd8dc'}}>
               <CardContent sx={{paddingLeft : '25px'}}>
                <div style={{fontSize : '11px', fontWeight : 200 }}>Payment</div>
                <div style={{fontSize : '24px', fontWeight : 800}}>&#8377; 56,000</div>
                <div style={{fontSize : '11px', fontWeight : 200 }}>Transaction</div>
                <div style={{fontSize : '24px', fontWeight : 800}}>52</div>
                <div style={{fontSize : '11px', fontWeight : 200 }}>Payout</div>
                <div style={{fontSize : '24px', fontWeight : 800}}>24</div>
              </CardContent>
             </Card>
           </div>
          </div>
        <Paper sx={{paddingTop : '20px' ,borderRadius : 6,boxShadow : '10px 10px 25px #cfd8dc'}}>
        <LineChart 
            width={800} 
            height={200} 
           data={data} 
           margin={{ top: 5, right: 50, left: 50, bottom: 5 }} >
           <XAxis dataKey="date" fontSize="9px" axisLine={false}/> 
          <YAxis fontSize="9px" axisLine={false} /> 
          <Line  type="monotone" dataKey="credit" stroke="#a5d6a7" strokeWidth={3}
           />
          <Line  type="monotone" dataKey="debit" stroke="#ff8a65" strokeWidth={3}
           />
          </LineChart>
        </Paper>  
      </div>
      <div style={{justifyContent : 'flex-end'}}>
        <EndSidebar />
        </div>
      
    </div>
  );
};

export default Home;
