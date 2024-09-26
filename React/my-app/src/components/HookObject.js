import React, { useState } from 'react'

export function Contact() {
    const [contact, setContact] = useState({
        firstName: '',
        lastName: '',
        company: '',
        email: ''
    })

    // use the spread operator (...)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    //   onChange={(e) => setContact({ ...contact, firstName: e.target.value })}

    return (
        <>
            <div>
                <label for='firstName'>First Name: </label>
                <input
                    type="text"
                    name='firstName'
                    placeholder="First Name"
                    value={contact.firstName}
                    onChange={handleChange}
                /><br></br>
                <label for='lastName'>Last Name: </label>
                <input
                    type="text"
                    name='lastName'
                    placeholder="Last Name"
                    value={contact.lastName}
                    onChange={handleChange}
                />
                <p>Hello, my name is {contact.lastName}, {contact.firstName} {contact.lastName}.</p>
            </div>
        </>
    )
}

export function Car() {
    const [car, setCar] = useState({
        make:'Aston Martin',
        model: 'DB5',
        year: '1964',
        color: 'Silver'
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCar((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

    return (
        <>
            <label for='make'>Make: </label>
                <input
                    type="text"
                    name='make'
                    placeholder="Make"
                    value={car.make}
                    onChange={handleChange}
                /><br></br>
                <label for='model'>Model: </label>
                <input
                    type="text"
                    name='model'
                    placeholder="Model"
                    value={car.model}
                    onChange={handleChange}
                /><br></br>
                <label for='year'>Year: </label>
                <input
                    type="text"
                    name='year'
                    placeholder="Year"
                    value={car.year}
                    onChange={handleChange}
                /><br></br>
                <label for='color'>Color: </label>
                <input
                    type="text"
                    name='color'
                    placeholder="Color"
                    value={car.color}
                    onChange={handleChange}
                /><br></br>

            <p>I drive a {car.year}, {car.color}, {car.make} {car.model}.</p>
        </>
    )
}


