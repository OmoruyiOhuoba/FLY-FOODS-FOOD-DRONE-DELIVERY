const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = validateLoginInput = data => {

   let errors = {}

   data.email = !isEmpty(data.email) ? data.email : "";
   data.password = !isEmpty(data.password) ? data.password : "";

   if (Validator.isEmpty(data.email)){
       return error.email("email field is required")
   }

   if(!Validator.isEmail(data.email)){
       return error.email("email is invalid")
   }

   if (Validator.isEmpty(data.password)){
       return error.password("password field is required")
   }


   return { 
       errors,
       isValid: isEmpty(errors)
   }
}