import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CheckOut() {

    const navigate = useNavigate();

    const [ user, setUser ] = useState({
        firstName: '',
        lastName: '',
        address: '',
        phoneNumber,
        pincode,
    })

    let { firstName, lastName, address, phoneNumber, pincode } = user;

    const handleOnChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const buttonClicked = (e) => {
        e.preventDefault();
        console.log(user);
        if (!firstName || !lastName || !address || !phoneNumber || !pincode) {
          alert("Please fill all input fields");
        } else if (phoneNumber.length !== 10) {
          alert("Please enter a valid Phone number");
        } else if (pincode.length !== 6) {
          alert("Please enter a valid pincode");
        } else{
        axios.post("https://clone-42332-default-rtdb.firebaseio.com/ordersData.json", user)
        .then(() =>
          alert("Your order is successfully placed!")
        )
        .then(() => setUser({
            firstName: '',
            lastName: '',
            address: '',
            phoneNumber: '',
            pincode: ''
        }))
        .then(() => navigate('/'))
        .catch((error) => console.log(error));
      }
    }

  return (
    <div
    style={{
      width: "30%",
      height: "100vh",
      margin: "auto",
      marginTop: "30px",
    }}
  >
    <form style={{ display: "flex", flexDirection: "column", marginTop: 70 ,backgroundColor:"pink"}}>
      <label>First Name</label>
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        value={firstName}
        onChange={handleOnChange}
        style={{ padding: "10px", marginTop: "10px", borderRadius: "5px" }}
      />
       <label>Last Name</label>
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        value={lastName}
        onChange={handleOnChange}
        style={{ padding: "10px", marginTop: "10px", borderRadius: "5px" }}
      />
      <label>Address</label>
       <input
        type="text"
        placeholder="Address"
        name="address"
        value={address}
        onChange={handleOnChange}
        style={{ padding: "10px", marginTop: "10px", borderRadius: "5px" }}
      />
      <label>Mobile Number</label>
      <input
        type="number"
        placeholder="Phone Number"
        name="phoneNumber"
        value={phoneNumber}
        onChange={handleOnChange}
        style={{ padding: "10px", marginTop: "10px", borderRadius: "5px" }}
      />
      <label>Pincode</label>
      <input
        type="number"
        placeholder="Pincode"
        name="pincode"
        value={pincode}
        onChange={handleOnChange}
        style={{ padding: "10px", marginTop: "10px", borderRadius: "5px" }}
      />
      <button
        onClick={buttonClicked}
        style={{
          padding: "10px",
          marginTop: "10px",
          backgroundColor: "lightgreen",
          opacity: "0.7",
          color: "black",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        submit
      </button>
    </form>
  </div>
  )
    
}
