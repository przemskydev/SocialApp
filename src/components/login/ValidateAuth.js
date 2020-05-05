export default function validateAuth(values) {
  
  //validation rules
  
  let errors = {};
  //user name 
  if(!values.firstName) {
    errors.firstName = 'Required full name'
  } else if (values.firstName.length < 3 ) {
    errors.firstName = 'Minimum 3 characters'
  }

  //email validation
  if (!values.email) {
    errors.email = 'Required email';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }

  //password validation
  if(!values.password){
    errors.password = 'Required password'
  } else if( values.password.length < 6){
    errors.password = 'Password must be at least 6 char'
  }
 
  return errors;

}