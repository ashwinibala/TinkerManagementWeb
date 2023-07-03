import axios from 'axios';


async function apiService(clientDetails)
    {
        
    try
        {
         await axios.post("http://localhost:8080/client",
        {
        username: clientDetails.username,
        password: clientDetails.password,
        firstName: clientDetails.firstName,
        lastName: clientDetails.lastName,
        email: clientDetails.email,
        phone: clientDetails.phone,
        address: clientDetails.address,
        categoryId: 1
        
        });
        
    
        }
    catch(err)
        {
          
        }
    return false;
   }
export default apiService;