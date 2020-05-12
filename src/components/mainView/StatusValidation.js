import { useState, useEffect } from 'react'

function useStatusValidation(initialState, auth) {

  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setSubmitting] = useState(false)

  useEffect(() => {

    let noErrors;

    if (isSubmitting) {
      noErrors = Object.keys(errors).length === 0
    } if (noErrors) {
      auth()
      setSubmitting(false);
      setValues(initialState);
    } else {
      setSubmitting(false);
    }
  }, [errors])

  function handleChangeStatus(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  function handleCheckStatus(){

    function validate(values){
      let errors = {};
      if(!values.status) {
        errors.status = 'Required status'
      }
      return errors
    }

    const statusErrors = validate(values)

    setErrors(statusErrors)
    setSubmitting(true)
  }

  return { values, handleChangeStatus, handleCheckStatus, errors }
}

export default useStatusValidation;