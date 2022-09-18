import logo from './logo.svg';
import './App.css';
import Navbar from './pages/Navbar';
import Navebar from './pages/Navebar';
import Fistpage from './pages/Fistpage';
import Email from './pages/Email';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Cards from './pages/Cards';
import { useEffect, useState } from 'react';

function App() {

const [emailinput,setEmailinput] = useState('');
const [emailresult,setEmailresult] = useState('');
const [emailadrees,setEmailadress] = useState('');
const [emaildomain,setEmaildomain] = useState('');
const [emailspam,setEmailspam] = useState('');

useEffect(()=> {
const fetchemailresult= async () => {
  const request =await fetch ( `https://api.eva.pingutil.com/email?email=${emailinput} `);
  const data = await request.json();
  setEmailadress(data.data.email_address);
  setEmaildomain(data.data.domain);
  setEmailspam(data.data.spam);
  console.log('data',data);


};
fetchemailresult();
} ,[] );


  return (
  // <Navebar/>
  // <Fistpage/>
  // <Email/>

  <BrowserRouter>
  <Navebar/>
  <Routes>
<Route path="/" element ={<Navbar/>}/>
 <Route path="/Cards" element={<Cards/>}/>
 <Route path="/Email" element={
 <Email emailresult={emailadrees} emaildomain={emaildomain} emailspam={emailspam} emailinput={emailinput} setEmailinput={setEmailinput}/>}>

  
</Route>
  </Routes>
  </BrowserRouter>


  );
}

export default App;
// {
//   "status": "success",
//   "data": {
//       "email_address": "test@mail7.io",
//       "domain": "mail7.io",
//       "valid_syntax": true,
//       "disposable": true,
//       "webmail": false,
//       "deliverable": true,
//       "catch_all": true,
//       "gibberish": false,
//       "spam": false
//   }
// }