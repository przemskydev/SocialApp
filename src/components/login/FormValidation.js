import React, { useState, useCallback, useEffect } from 'react'
import { app } from "../../config/base";


function useFormValidation(initialState, validate, authenticate) {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setSubmitting] = useState(false)


  useEffect(() => {
    let noErrors;
    if (isSubmitting) {
      noErrors = Object.keys(errors).length === 0
    } if (noErrors) {
      authenticate()
      setSubmitting(false)
    } else (
      setSubmitting(false)
    )

  }, [errors])

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  function handleBlur() {
    const validationErrors = validate(values)
    setErrors(validationErrors)
  }

  function handleSignUp(event){
    event.preventDefault();
    // const { email, password, firstName } = event.target.elements;
    const validationErrors = validate(values)
    setErrors(validationErrors)
    setSubmitting(true)

  }

  return { handleSignUp, handleChange, handleBlur, values, errors, isSubmitting }
}


export default useFormValidation;