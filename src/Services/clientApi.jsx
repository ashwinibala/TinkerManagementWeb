async function clientApi(clientDetails) {
    try {
      const response = await fetch(`http://localhost:8080/client`, {
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
      });
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  
  export default clientApi;
  