
async function apiLogin(loginCred) {
console.log("api login executed");
console.log(loginCred);
    try {
     const response = await fetch(`http://localhost:8080/client/login`, {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
         'Access-Control-Allow-Origin': 'http://localhost:3000'
       },
       body: JSON.stringify({
         username: loginCred.username,
         password: loginCred.password,
        
       })
     });
   
     const data = await response.json();
     console.log(data);
     
     if(data !== undefined)
     {
       return data;
     }
   
   
   } catch (error) {
     console.log(error);
     throw error;
   }
   }
   
   export default apiLogin;
     