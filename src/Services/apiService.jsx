import clientApi from "./clientApi";

function apiService(clientDetails) {
    
    const result = clientApi(clientDetails).then(data => {
        console.log(data); 
      })
      .catch(error => {
        console.log(error); // Handle any errors
      });

 return result.responseCode === 200;
  }
  
  export default apiService;
  