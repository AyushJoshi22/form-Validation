import React from 'react';
import { useLocation } from 'react-router-dom';
import './displayData.css'

function DisplayData() {
  const { state } = useLocation();
  const { firstname, lastname, username, email, password, confirmPassword, pancard, aadharcard, country, city, countryCode, phoneNumber } = state;

  return (
    <div className='display'>
      <h1>Your Details</h1>
      <p><strong>Firstname:</strong> {firstname}</p>
      <p><strong>Lastname:</strong> {lastname}</p>
      <p><strong>Username:</strong> {username}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Pan Card:</strong> {pancard}</p>
      <p><strong>Aadhar Card:</strong> {aadharcard}</p>
      <p><strong>Country:</strong> {country}</p>
      <p><strong>City:</strong> {city}</p>
      <p><strong>Country Code:</strong> {countryCode}</p>
      <p><strong>Phone Number:</strong> {phoneNumber}</p>
    </div>
  );
}

export default DisplayData;
