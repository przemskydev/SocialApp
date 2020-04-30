import React, { useState, useEffect } from 'react'


function useFormValidation(initialState, validate, authenticate) {

  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setSubmitting] = useState(false)

  //looks if errors object has changed whenever it's updated
  useEffect(() => {

    let noErrors;

    //check if our form has been submitted
    if (isSubmitting) {

      //check if are any errors on state obj
      noErrors = Object.keys(errors).length === 0

    } if (noErrors) {

       //if there are no errors then run authenticate function 
      authenticate()
      setSubmitting(false)
    } else (
      setSubmitting(false)
    )
  }, [errors])

  //handle change with access to the change event
  function handleChange(event) {
    setValues({
      //spreading our previos values
      ...values,
      [event.target.name]: event.target.value
    })
  }

  //when user click away from a form, call blur event and pass errors 
  function handleBlur() {
    const validationErrors = validate(values)
    setErrors(validationErrors)
  }

  //check validation form and if are errors pass to const
  //and run setter setErrors with errors obj
  function handleSignUp(event){
    event.preventDefault();
    
    const validationErrors = validate(values)
    setErrors(validationErrors)
    setSubmitting(true)

  }
  //return from hook as object
  return { handleSignUp, handleChange, handleBlur, values, errors, isSubmitting }
}


export default useFormValidation;