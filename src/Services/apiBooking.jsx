
async function apiBooking(customerData) {

    try {
        const url = `http://localhost:8080/clientavailability/${customerData.category}/${customerData.date}/${customerData.timeSlot}`;
        console.log(url);
        const data = await fetch(url, {
       method: 'GET',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
         'Access-Control-Allow-Origin': 'http://localhost:3000'
       }
     });
   
     
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
     
   export default apiBooking;
     