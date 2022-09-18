
import React from 'react'

const Email = ({emailadrees,emaildomain,emailspam,emailinput}) => {
 


// export default Email

// import React from "react";
// class Email extends React.Component{
//     render(){    


console.log(emailadrees);
console.log(emaildomain);
console.log(emailspam);


// const spam(()=> {
// return (
// if(emailspam)
// {

//     <h1>be carefull !!</h1>
//     <br/>
//     <p>it a spam </p>

// }else {

// }
// });



return(
    <>
    <div className="container  mt-5">
        <div class="row text-center">
            <h1>Enter the sender email  </h1>

        </div>
        <div class="row text-conter ">

        <div class="input-group w-50 mx-auto mt-3">
  <input type="text" class="form-control "/>
  <button class="btn btn-secondary" type="button">Button</button>
</div>
            </div>

            <div class="row text-center">
                <p> the result :</p>
                <hr/>
                <p> the domain of it is : {emailadrees}</p>
                <br/>
                <p>{emaildomain}</p>

            </div>
</div >
</>
);

// }
}

export default Email;

// {
//     "status": "success",
//     "data": {
//         "email_address": "test@mail7.io",
//         "domain": "mail7.io",
//         "valid_syntax": true,
//         "disposable": true,
//         "webmail": false,
//         "deliverable": true,
//         "catch_all": true,
//         "gibberish": false,
//         "spam": false
//     }
// }