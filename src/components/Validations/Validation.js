
import React, { Component } from "react";

// export const registerUser = () => {
//     const rules = {
//         name: 'required|string',
//         email: 'required|email',
//         password: 'required|string|min:6|confirmed'
//     },

//     const messages = {
//         required: (field) => `${field} is required`,
//         'email.email': ' The email is required ',
//         'password.confirmed': 'The password confimration failed',
//         'password.min': 'Password is too short',
//     },

// }

// class Validation {
//     emailValidation(email){
//         var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
//         const email = !pattern.test(email) ? <Text style={{ color: 'red', fontSize: 10, left: '5%' }}>* Please enter the text to proceed</Text> : null
//         return email;
//     }
// }

// module.exports = Validation
