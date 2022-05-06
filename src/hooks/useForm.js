import { useState } from "react";

const useForm = ({cartItems}) => {
    const [values, setValues] = useState({
        name:'',
        email:'',
        address:''
    });

    const handleChange = e =>{
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]:value
        });
    }
    const submitHandler = e =>{
        e.preventDefault();
        const order = {
            name: values.name,
            email:values.email,
            address:values.address,
            cartItems
        }
        alert('The order has been submitted under the name of '+order.name);
        setValues({
            name:'',
            email:'',
            address:''
        });
    }

    return {handleChange, values, submitHandler}
}
 
export default useForm;