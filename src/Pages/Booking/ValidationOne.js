const ValidationOne = (customerData,currentStep) => {

    let error = [];

    // //regex for email
    // const email_format =  /^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_-]+)((\.([a-zA-Z0-9_-]+))+)$/;
    // //regex for phone
    // const phone_format = /^[0-9]{10}$/;
    // //regex for user name
    // const username_format = /^[a-zA-Z][a-zA-Z0-9_]{3,19}$/;
    // //regex for password
    // const password_format = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,20}$/;

    // //custom function for checking format
    // const check_format = (value, regex) => {
    // return regex.test(value) ? true : false;
    // };

    if(currentStep === 1)
    {
        if((!customerData.hasOwnProperty("category")) || customerData.category === "")
        {
            error.category = "Please select a service";
        }
        if((!customerData.hasOwnProperty("date")) || customerData.date === "")
        {
            error.date = "Please select a date";  
        }
        if((!customerData.hasOwnProperty("timeSlot")) || customerData.timeSlot === "")
        {
            error.timeSlot = "Please select a time slot";
        } 
       
    }

    
    return(error)
}

export default ValidationOne;