import axios from 'axios';


async function apiService(clientDetails)
{
try
{
await fetch(`http://localhost:8080/client`, {
method: 'POST',
headers: {
'Accept': 'application/json',
'Content-Type': 'application/json',
'Access-Control-Allow-Origin': 'http://localhost:3000'
},
body: JSON.stringify({
username: clientDetails.username,
password: clientDetails.password,
firstname: clientDetails.firstName,
lastname: clientDetails.lastName,
email: clientDetails.email,
phone: clientDetails.phone,
address: clientDetails.address,
categoryId: 1
})
})
.then(response => response.json())
.then(data => {
// Handle the response data
})
.catch(error => {
// Handle any errors
});
}
catch(err)
{

}
return false;
}
export default apiService;