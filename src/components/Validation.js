const Validation = (values) => {
    let errors={};

    if(!values.firstName)
    {
        errors.firstName="First Name is required."
    }
    if(!values.lastName)
    {
        errors.lastName="last Name is required."
    }
    if(!values.phone)
    {
        errors.phone="Phone Number is required."
    }
    if(!values.batch)
    {
        errors.batch="batch is required."
    }
    if(values.age<18 || values.age>65)
    {
        errors.age="Age must be between 18-65"
    }
    return errors;
}

export default Validation
