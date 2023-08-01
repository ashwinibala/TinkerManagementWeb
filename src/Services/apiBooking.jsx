
async function apiBooking(customerData) {

    try {
     const response = await fetch(`http://localhost:8080/appointment`, {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
         'Access-Control-Allow-Origin': 'http://localhost:3000'
       },
       body: JSON.stringify({
         categoryId: customerData.category,
         date: customerData.date,
         timeSlot: customerData.timeSlot,
         clientId: customerData.client,
         customer: {
            firstName: customerData.firstName,
            lastName: customerData.lastName,
            email: customerData.email,
            phone: customerData.phone,
            address: customerData.address,
            postalCode: customerData.postalCode,
            description: customerData.description
          }

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
   
   
   export default apiBooking;
     