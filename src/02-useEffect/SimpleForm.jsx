import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'sandra@google.com'
    });

    const { username, email } = formState;

    const onInputChange = ({target}) => {
        const { name, value } = target;
        // console.log('event.target :>> ', event.target.name);
        // console.log('name, value1 :>> ', {name, value});
        setFormState({
            ...formState,
            [name] : value
            
        })
        // console.log('...formState :>> ', {[name] : value});

        /**
        computed object key

            When you use the [name]: value syntax, you're using what's known 
            as a "computed object key". This tells JavaScript to evaluate the
            expression inside the brackets and use the result as the name of 
            the object property. So, if name contains the value "username", 
            then [name]: value would translate to "username": value, creating
            a property named "username" in the resulting object.

            On the other hand, when you use the name: value syntax without the
            brackets, JavaScript interprets name as a string literal rather than
            a variable. So, if name contains the value "username", the name: value
            syntax would literally translate to "name": value, creating a property
            named "name" instead of the property with the dynamically stored name in name.
        */
       
    }

    // when an empty array is passed, it signifies that the useEffect should only trigger once
    useEffect(() => {
    //   console.log('useEffect called');
    }, []);

    // If I need to trigger the useEffect or a function every time the form changes
    // I want to trigger something again. But only the form, not other things.

    // so instead of having multiples effects inside the useEffect, it is recommended 
    // to create separate, specialized effects for each required action.
    useEffect(() => {
    //   console.log('formState change');
    }, [formState]);

    useEffect(() => {
    //   console.log('email change');
    }, [email])


    return (
        <>
            <h1>Simple Form</h1> 
            <hr />

            <input 
                type="text"
                className='form-control'
                placeholder='Username'
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input 
                type="email"
                className='form-control mt-2'
                placeholder='sandra@google.com'
                name="email"
                value={email}
                onChange={onInputChange}
            />

            {
                (username === 'strider2') && <Message />
            }
        </>
    )
}
