import * as React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./statement.scss";
import { styled } from "@mui/material/styles";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {
  Table,
  TablePagination,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  IconButton,
  InputBase,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { Search } from "@mui/icons-material";

const defData = [
  {
    id: "65465132",
    name: "joe cancello",
    date: "22/10/21",
    remarks: "Net Banking",
    amount: "10,000",
    status: "Success",
  },
  {
    id: "65455632",
    name: "maradona",
    date: "22/10/21",
    remarks: "Mony Transfer",
    amount: "25,000",
    status: "Success",
  },
  {
    id: "65658513",
    name: "Benzama",
    date: "23/10/21",
    remarks: "miscellaneous",
    amount: "5,000",
    status: "Failed",
  },
  {
    id: "65987513",
    name: "Roberto",
    date: "23/10/21",
    remarks: "Money Transfer",
    amount: "32,000",
    status: "Success",
  },
  {
    id: "98762162",
    name: "Lewandowski",
    date: "12/11/21",
    remarks: "Vehichle Insurance",
    amount: "1,820",
    status: "Failed",
  },
  {
    id: "91566542",
    name: "M.Salah",
    date: "01/01/22",
    remarks: "Network Bill",
    amount: "8,780",
    status: "Success",
  },
  {
    id: "62195651",
    name: "Van Djik",
    date: "11/05/22",
    remarks: "Network Bill",
    amount: "8,780",
    status: "Success",
  },
  {
    id: "32168761",
    name: "Backenbaur",
    date: "01/01/22",
    remarks: "Network Bill",
    amount: "8,780",
    status: "Success",
  },
  {
    id: "93213442",
    name: "Verrati",
    date: "12/12/21",
    remarks: "Network Bill",
    amount: "8,780",
    status: "Success",
  },
  {
    id: "98795642",
    name: "Dybala",
    date: "29/01/22",
    remarks: "Network Bill",
    amount: "8,780",
    status: "Success",
  },
  {
    id: "91566542",
    name: "T.Muller",
    date: "28/01/22",
    remarks: "Network Bill",
    amount: "8,780",
    status: "Success",
  },
  {
    id: "65461682",
    name: "Oblak",
    date: "31/01/22",
    remarks: "Network Bill",
    amount: "8,780",
    status: "Success",
  },
];
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const Statement = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [type, setType] = React.useState("");
  const [value,setValue] = React.useState("")
  const [data,setData] = React.useState(defData);
  const [arr,setArr] = React.useState([]);
  React.useEffect(()=>{
     const setArray = () =>{
      defData.map((obj)=>{
        if(!value ){
          setData(defData);
        }
        if(value && type){
        if(obj[type].startsWith(value.toUpperCase()) || obj[type].includes(value.toUpperCase()) || obj[type].startsWith(value.toLowerCase()) || obj[type].includes(value.toLowerCase())){
          arr.push(obj);
          setData(arr);
          console.log(data);
        }}
      })
     } 
     setArray();
  })
  
  const handleChange = (event) => {
    setType(event.target.value);
    
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  
  return (
    <div className="page">
      <Sidebar />
      <div className="table">
        <div style={{ display: "flex",marginLeft : 'auto' }}>
          <Paper
            sx={{ flexGrow: 0, borderRadius: 2, padding: "0px 10px 0px 0px" }}
          >
      <FormControl sx={{ minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Filter Type</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={type}
        label="Select the Type"
        onChange={handleChange}
      >
        <MenuItem value="id">Id</MenuItem>
        <MenuItem value="name">Name</MenuItem>
        <MenuItem value="date">Date</MenuItem>
        
      </Select>
    </FormControl>
            <InputBase
              size="small"
              variant="standard"
              type="text"
              onChange = {(event)=>{setValue(event.target.value)}}
              value={value}
              label="Search"
              sx={{padding : '0px 0px 0px 10px'}}
            />
            <IconButton>
              <Search />
            </IconButton>
          </Paper>
          
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell align="left">Name</StyledTableCell>
                <StyledTableCell align="center">Date</StyledTableCell>
                <StyledTableCell align="right">Amount</StyledTableCell>
                <StyledTableCell align="right">Remarks</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <StyledTableRow key={row.index}>
                    <StyledTableCell component="th" scope="row">
                      {row.id}
                    </StyledTableCell>
                    <StyledTableCell align="left">{row.name}</StyledTableCell>
                    <StyledTableCell align="center">{row.date}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.amount}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.remarks}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.status === "Success" ? (
                        <div style={{ color: "green" }}>{row.status}</div>
                      ) : (
                        <div style={{ color: "red" }}>{row.status}</div>
                      )}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </div>
    </div>
  );
};

export default Statement;
