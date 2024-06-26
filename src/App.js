import { useState } from 'react';
import './App.css';
import FormInput from './components/formInput';
import DisplayData from './components/displayData';
import FormSelect from './components/formSelect';
import { Route, Routes, useNavigate } from 'react-router-dom';

// import { Icon } from 'react-icons-kit';
// import { eyeOff } from 'react-icons-kit/feather/eyeOff';
// import { eye } from 'react-icons-kit/feather/eye'

// import countryList from 'react-select-country-list'

const data = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  // confirmPassword: "",
  pancard: "",
  aadharcard: "",
  country: "",
  city: "",
  countryCode: "",
  phoneNumber: "",
}

function App() {
  // const [username,setUsername] = useState("");
  const [values, setValues] = useState(data);
  const navigate = useNavigate();


  const inputs = [
    {
      id: 1,
      name: "firstname",
      type: "text",
      placeholder: "Firstname",
      errorMessage: "Firstname should be 3-10 characters and should not include any special character",
      label: "Firstname",
      pattern: "^[A-Za-z]{3,10}$",
      required: true
    },
    {
      id: 2,
      name: "lastname",
      type: "text",
      placeholder: "Lastname",
      errorMessage: "Lastname should be 3-10 characters and should not include any special character",
      label: "Lastname",
      pattern: "^[A-Za-z]{3,16}$",
      required: true
    },
    {
      id: 3,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "Username should be 3-16 characters and should not include any special character",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true
    },
    {
      id: 4,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address",
      label: "Email",
      required: true
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
      label: "Password",
      pattern: "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
      required: true
    },
    // {
    //   id: 6,
    //   name: "confirmPassword",
    //   type: "password",
    //   placeholder: "Confirm Password",
    //   errorMessage: "Passwords don't match",
    //   label: "Confirm Password",
    //   pattern: values.password,
    //   required: true
    // },
    {
      id: 7,
      name: "pancard",
      type: "text",
      placeholder: "Pan Card Number",
      errorMessage: "Pan Card should be of 10 digits",
      label: "Pan Card",
      pattern: "^[0-9]{10,10}$",
      required: true
    },
    {
      id: 8,
      name: "aadharcard",
      type: "text",
      placeholder: "Aadhar Card Number",
      errorMessage: "Aadhar Card should be of 12 digits",
      label: "Aadhar Card",
      pattern: "^[0-9]{12,12}$",
      required: true
    },
  ]

  const countries = [
    { id: 1, name: "Afghanistan", value: "AF" },
    { id: 2, name: "Åland Islands", value: "AX" },
    { id: 3, name: "Albania", value: "AL" },
    { id: 4, name: "Algeria", value: "DZ" },
    { id: 5, name: "American Samoa", value: "AS" },
    { id: 6, name: "Andorra", value: "AD" },
    { id: 7, name: "Angola", value: "AO" },
    { id: 8, name: "Anguilla", value: "AI" },
    { id: 9, name: "Antarctica", value: "AQ" },
    { id: 10, name: "Antigua and Barbuda", value: "AG" },
    { id: 11, name: "Argentina", value: "AR" },
    { id: 12, name: "Armenia", value: "AM" },
    { id: 13, name: "Aruba", value: "AW" },
    { id: 14, name: "Australia", value: "AU" },
    { id: 15, name: "Austria", value: "AT" },
    { id: 16, name: "Azerbaijan", value: "AZ" },
    { id: 17, name: "Bahamas", value: "BS" },
    { id: 18, name: "Bahrain", value: "BH" },
    { id: 19, name: "Bangladesh", value: "BD" },
    { id: 20, name: "Barbados", value: "BB" },
    { id: 21, name: "Belarus", value: "BY" },
    { id: 22, name: "Belgium", value: "BE" },
    { id: 23, name: "Belize", value: "BZ" },
    { id: 24, name: "Benin", value: "BJ" },
    { id: 25, name: "Bermuda", value: "BM" },
    { id: 26, name: "Bhutan", value: "BT" },
    { id: 27, name: "Bolivia, Plurinational State of", value: "BO" },
    { id: 28, name: "Bonaire, Sint Eustatius and Saba", value: "BQ" },
    { id: 29, name: "Bosnia and Herzegovina", value: "BA" },
    { id: 30, name: "Botswana", value: "BW" },
    { id: 31, name: "Bouvet Island", value: "BV" },
    { id: 32, name: "Brazil", value: "BR" },
    { id: 33, name: "British Indian Ocean Territory", value: "IO" },
    { id: 34, name: "Brunei Darussalam", value: "BN" },
    { id: 35, name: "Bulgaria", value: "BG" },
    { id: 36, name: "Burkina Faso", value: "BF" },
    { id: 37, name: "Burundi", value: "BI" },
    { id: 38, name: "Cambodia", value: "KH" },
    { id: 39, name: "Cameroon", value: "CM" },
    { id: 40, name: "Canada", value: "CA" },
    { id: 41, name: "Cape Verde", value: "CV" },
    { id: 42, name: "Cayman Islands", value: "KY" },
    { id: 43, name: "Central African Republic", value: "CF" },
    { id: 44, name: "Chad", value: "TD" },
    { id: 45, name: "Chile", value: "CL" },
    { id: 46, name: "China", value: "CN" },
    { id: 47, name: "Christmas Island", value: "CX" },
    { id: 48, name: "Cocos (Keeling) Islands", value: "CC" },
    { id: 49, name: "Colombia", value: "CO" },
    { id: 50, name: "Comoros", value: "KM" },
    { id: 51, name: "Congo", value: "CG" },
    { id: 52, name: "Congo, the Democratic Republic of the", value: "CD" },
    { id: 53, name: "Cook Islands", value: "CK" },
    { id: 54, name: "Costa Rica", value: "CR" },
    { id: 55, name: "Côte d'Ivoire", value: "CI" },
    { id: 56, name: "Croatia", value: "HR" },
    { id: 57, name: "Cuba", value: "CU" },
    { id: 58, name: "Curaçao", value: "CW" },
    { id: 59, name: "Cyprus", value: "CY" },
    { id: 60, name: "Czech Republic", value: "CZ" },
    { id: 62, name: "Djibouti", value: "DJ" },
    { id: 63, name: "Dominica", value: "DM" },
    { id: 64, name: "Dominican Republic", value: "DO" },
    { id: 65, name: "Ecuador", value: "EC" },
    { id: 66, name: "Egypt", value: "EG" },
    { id: 67, name: "El Salvador", value: "SV" },
    { id: 68, name: "Equatorial Guinea", value: "GQ" },
    { id: 69, name: "Eritrea", value: "ER" },
    { id: 70, name: "Estonia", value: "EE" },
    { id: 71, name: "Ethiopia", value: "ET" },
    { id: 72, name: "Falkland Islands (Malvinas)", value: "FK" },
    { id: 73, name: "Faroe Islands", value: "FO" },
    { id: 74, name: "Fiji", value: "FJ" },
    { id: 75, name: "Finland", value: "FI" },
    { id: 76, name: "France", value: "FR" },
    { id: 77, name: "French Guiana", value: "GF" },
    { id: 78, name: "French Polynesia", value: "PF" },
    { id: 79, name: "French Southern Territories", value: "TF" },
    { id: 80, name: "Gabon", value: "GA" },
    { id: 81, name: "Gambia", value: "GM" },
    { id: 82, name: "Georgia", value: "GE" },
    { id: 83, name: "Germany", value: "DE" },
    { id: 84, name: "Ghana", value: "GH" },
    { id: 85, name: "Gibraltar", value: "GI" },
    { id: 86, name: "Greece", value: "GR" },
    { id: 87, name: "Greenland", value: "GL" },
    { id: 88, name: "Grenada", value: "GD" },
    { id: 89, name: "Guadeloupe", value: "GP" },
    { id: 90, name: "Guam", value: "GU" },
    { id: 91, name: "Guatemala", value: "GT" },
    { id: 92, name: "Guernsey", value: "GG" },
    { id: 93, name: "Guinea", value: "GN" },
    { id: 94, name: "Guinea-Bissau", value: "GW" },
    { id: 95, name: "Guyana", value: "GY" },
    { id: 96, name: "Haiti", value: "HT" },
    { id: 97, name: "Heard Island and McDonald Islands", value: "HM" },
    { id: 98, name: "Holy See (Vatican City State)", value: "VA" },
    { id: 99, name: "Honduras", value: "HN" },
    { id: 100, name: "Hong Kong", value: "HK" },
    { id: 101, name: "Hungary", value: "HU" },
    { id: 102, name: "Iceland", value: "IS" },
    { id: 103, name: "India", value: "IN" },
    { id: 104, name: "Indonesia", value: "ID" },
    { id: 105, name: "Iran, Islamic Republic of", value: "IR" },
    { id: 106, name: "Iraq", value: "IQ" },
    { id: 107, name: "Ireland", value: "IE" },
    { id: 108, name: "Isle of Man", value: "IM" },
    { id: 109, name: "Israel", value: "IL" },
    { id: 110, name: "Italy", value: "IT" },
    { id: 111, name: "Jamaica", value: "JM" },
    { id: 112, name: "Japan", value: "JP" },
    { id: 113, name: "Jersey", value: "JE" },
    { id: 114, name: "Jordan", value: "JO" },
    { id: 115, name: "Kazakhstan", value: "KZ" },
    { id: 116, name: "Kenya", value: "KE" },
    { id: 117, name: "Kiribati", value: "KI" },
    { id: 118, name: "Korea, Democratic People's Republic of", value: "KP" },
    { id: 119, name: "Korea, Republic of", value: "KR" },
    { id: 120, name: "Kuwait", value: "KW" },
    { id: 121, name: "Kyrgyzstan", value: "KG" },
    { id: 122, name: "Lao People's Democratic Republic", value: "LA" },
    { id: 123, name: "Latvia", value: "LV" },
    { id: 124, name: "Lebanon", value: "LB" },
    { id: 125, name: "Lesotho", value: "LS" },
    { id: 126, name: "Liberia", value: "LR" },
    { id: 127, name: "Libya", value: "LY" },
    { id: 128, name: "Liechtenstein", value: "LI" },
    { id: 129, name: "Lithuania", value: "LT" },
    { id: 130, name: "Luxembourg", value: "LU" },
    { id: 131, name: "Macao", value: "MO" },
    { id: 132, name: "Macedonia, the former Yugoslav Republic of", value: "MK" },
    { id: 133, name: "Madagascar", value: "MG" },
    { id: 134, name: "Malawi", value: "MW" },
    { id: 135, name: "Malaysia", value: "MY" },
    { id: 136, name: "Maldives", value: "MV" },
    { id: 137, name: "Mali", value: "ML" },
    { id: 138, name: "Malta", value: "MT" },
    { id: 139, name: "Marshall Islands", value: "MH" },
    { id: 140, name: "Martinique", value: "MQ" },
    { id: 141, name: "Mauritania", value: "MR" },
    { id: 142, name: "Mauritius", value: "MU" },
    { id: 143, name: "Mayotte", value: "YT" },
    { id: 144, name: "Mexico", value: "MX" },
    { id: 145, name: "Micronesia, Federated States of", value: "FM" },
    { id: 146, name: "Moldova, Republic of", value: "MD" },
    { id: 147, name: "Monaco", value: "MC" },
    { id: 148, name: "Mongolia", value: "MN" },
    { id: 149, name: "Montenegro", value: "ME" },
    { id: 150, name: "Montserrat", value: "MS" },
    { id: 151, name: "Morocco", value: "MA" },
    { id: 152, name: "Mozambique", value: "MZ" },
    { id: 153, name: "Myanmar", value: "MM" },
    { id: 154, name: "Namibia", value: "NA" },
    { id: 155, name: "Nauru", value: "NR" },
    { id: 156, name: "Nepal", value: "NP" },
    { id: 157, name: "Netherlands", value: "NL" },
    { id: 158, name: "New Caledonia", value: "NC" },
    { id: 159, name: "New Zealand", value: "NZ" },
    { id: 160, name: "Nicaragua", value: "NI" },
    { id: 161, name: "Niger", value: "NE" },
    { id: 162, name: "Nigeria", value: "NG" },
    { id: 163, name: "Niue", value: "NU" },
    { id: 164, name: "Norfolk Island", value: "NF" },
    { id: 165, name: "Northern Mariana Islands", value: "MP" },
    { id: 166, name: "Norway", value: "NO" },
    { id: 167, name: "Oman", value: "OM" },
    { id: 168, name: "Pakistan", value: "PK" },
    { id: 169, name: "Palau", value: "PW" },
    { id: 170, name: "Palestinian Territory, Occupied", value: "PS" },
    { id: 171, name: "Panama", value: "PA" },
    { id: 172, name: "Papua New Guinea", value: "PG" },
    { id: 173, name: "Paraguay", value: "PY" },
    { id: 174, name: "Peru", value: "PE" },
    { id: 175, name: "Philippines", value: "PH" },
    { id: 176, name: "Pitcairn", value: "PN" },
    { id: 177, name: "Poland", value: "PL" },
    { id: 178, name: "Portugal", value: "PT" },
    { id: 179, name: "Puerto Rico", value: "PR" },
    { id: 180, name: "Qatar", value: "QA" },
    { id: 181, name: "Réunion", value: "RE" },
    { id: 182, name: "Romania", value: "RO" },
    { id: 183, name: "Russian Federation", value: "RU" },
    { id: 184, name: "Rwanda", value: "RW" },
    { id: 185, name: "Saint Barthélemy", value: "BL" },
    { id: 186, name: "Saint Helena, Ascension and Tristan da Cunha", value: "SH" },
    { id: 187, name: "Saint Kitts and Nevis", value: "KN" },
    { id: 188, name: "Saint Lucia", value: "LC" },
    { id: 189, name: "Saint Martin (French part)", value: "MF" },
    { id: 190, name: "Saint Pierre and Miquelon", value: "PM" },
    { id: 191, name: "Saint Vincent and the Grenadines", value: "VC" },
    { id: 192, name: "Samoa", value: "WS" },
    { id: 193, name: "San Marino", value: "SM" },
    { id: 194, name: "Sao Tome and Principe", value: "ST" },
    { id: 195, name: "Saudi Arabia", value: "SA" },
    { id: 196, name: "Senegal", value: "SN" },
    { id: 197, name: "Serbia", value: "RS" },
    { id: 198, name: "Seychelles", value: "SC" },
    { id: 199, name: "Sierra Leone", value: "SL" },
    { id: 200, name: "Singapore", value: "SG" },
    { id: 201, name: "Sint Maarten (Dutch part)", value: "SX" },
    { id: 202, name: "Slovakia", value: "SK" },
    { id: 203, name: "Slovenia", value: "SI" },
    { id: 204, name: "Solomon Islands", value: "SB" },
    { id: 205, name: "Somalia", value: "SO" },
    { id: 206, name: "South Africa", value: "ZA" },
    { id: 207, name: "South Georgia and the South Sandwich Islands", value: "GS" },
    { id: 208, name: "South Sudan", value: "SS" },
    { id: 209, name: "Spain", value: "ES" },
    { id: 210, name: "Sri Lanka", value: "LK" },
    { id: 211, name: "Sudan", value: "SD" },
    { id: 212, name: "Suriname", value: "SR" },
    { id: 214, name: "Swaziland", value: "SZ" },
    { id: 215, name: "Sweden", value: "SE" },
    { id: 216, name: "Switzerland", value: "CH" },
    { id: 217, name: "Syrian Arab Republic", value: "SY" },
    { id: 218, name: "Taiwan, Province of China", value: "TW" },
    { id: 219, name: "Tajikistan", value: "TJ" },
    { id: 220, name: "Tanzania, United Republic of", value: "TZ" },
    { id: 221, name: "Thailand", value: "TH" },
    { id: 222, name: "Timor-Leste", value: "TL" },
    { id: 223, name: "Togo", value: "TG" },
    { id: 224, name: "Tokelau", value: "TK" },
    { id: 225, name: "Tonga", value: "TO" },
    { id: 226, name: "Trinidad and Tobago", value: "TT" },
    { id: 227, name: "Tunisia", value: "TN" },
    { id: 228, name: "Turkey", value: "TR" },
    { id: 229, name: "Turkmenistan", value: "TM" },
    { id: 230, name: "Turks and Caicos Islands", value: "TC" },
    { id: 231, name: "Tuvalu", value: "TV" },
    { id: 232, name: "Uganda", value: "UG" },
    { id: 233, name: "Ukraine", value: "UA" },
    { id: 234, name: "United Arab Emirates", value: "AE" },
    { id: 235, name: "United Kingdom", value: "GB" },
    { id: 236, name: "United States", value: "US" },
    { id: 237, name: "United States Minor Outlying Islands", value: "UM" },
    { id: 238, name: "Uruguay", value: "UY" },
    { id: 239, name: "Uzbekistan", value: "UZ" },
    { id: 240, name: "Vanuatu", value: "VU" },
    { id: 241, name: "Venezuela, Bolivarian Republic of", value: "VE" },
    { id: 242, name: "Viet Nam", value: "VN" },
    { id: 243, name: "Virgin Islands, British", value: "VG" },
    { id: 244, name: "Virgin Islands, U.S.", value: "VI" },
    { id: 245, name: "Wallis and Futuna", value: "WF" },
    { id: 246, name: "Western Sahara", value: "EH" },
    { id: 247, name: "Yemen", value: "YE" },
    { id: 248, name: "Zambia", value: "ZM" },
    { id: 249, name: "Zimbabwe", value: "ZW" }
  ];

  const cities = [
    { id: 1, name: "Afghanistan", value: "AF" },
    { id: 2, name: "Åland Islands", value: "AX" },
    { id: 3, name: "Albania", value: "AL" },
    { id: 4, name: "Algeria", value: "DZ" },
    { id: 5, name: "American Samoa", value: "AS" },
    { id: 6, name: "Andorra", value: "AD" },
    { id: 7, name: "Angola", value: "AO" },
    { id: 8, name: "Anguilla", value: "AI" },
    { id: 9, name: "Antarctica", value: "AQ" },
    { id: 10, name: "Antigua and Barbuda", value: "AG" },
    { id: 11, name: "Argentina", value: "AR" },
    { id: 12, name: "Armenia", value: "AM" },
    { id: 13, name: "Aruba", value: "AW" },
    { id: 14, name: "Australia", value: "AU" },
    { id: 15, name: "Austria", value: "AT" },
    { id: 16, name: "Azerbaijan", value: "AZ" },
    { id: 17, name: "Bahamas", value: "BS" },
    { id: 18, name: "Bahrain", value: "BH" },
    { id: 19, name: "Bangladesh", value: "BD" },
    { id: 20, name: "Barbados", value: "BB" },
    { id: 21, name: "Belarus", value: "BY" },
    { id: 22, name: "Belgium", value: "BE" },
    { id: 23, name: "Belize", value: "BZ" },
    { id: 24, name: "Benin", value: "BJ" },
    { id: 25, name: "Bermuda", value: "BM" },
    { id: 26, name: "Bhutan", value: "BT" },
    { id: 27, name: "Bolivia, Plurinational State of", value: "BO" },
    { id: 28, name: "Bonaire, Sint Eustatius and Saba", value: "BQ" },
    { id: 29, name: "Bosnia and Herzegovina", value: "BA" },
    { id: 30, name: "Botswana", value: "BW" },
    { id: 31, name: "Bouvet Island", value: "BV" },
    { id: 32, name: "Brazil", value: "BR" },
    { id: 33, name: "British Indian Ocean Territory", value: "IO" },
    { id: 34, name: "Brunei Darussalam", value: "BN" },
    { id: 35, name: "Bulgaria", value: "BG" },
    { id: 36, name: "Burkina Faso", value: "BF" },
    { id: 37, name: "Burundi", value: "BI" },
    { id: 38, name: "Cambodia", value: "KH" },
    { id: 39, name: "Cameroon", value: "CM" },
    { id: 40, name: "Canada", value: "CA" },
    { id: 41, name: "Cape Verde", value: "CV" },
    { id: 42, name: "Cayman Islands", value: "KY" },
    { id: 43, name: "Central African Republic", value: "CF" },
    { id: 44, name: "Chad", value: "TD" },
    { id: 45, name: "Chile", value: "CL" },
    { id: 46, name: "China", value: "CN" },
    { id: 47, name: "Christmas Island", value: "CX" },
    { id: 48, name: "Cocos (Keeling) Islands", value: "CC" },
    { id: 49, name: "Colombia", value: "CO" },
    { id: 50, name: "Comoros", value: "KM" },
    { id: 51, name: "Congo", value: "CG" },
    { id: 52, name: "Congo, the Democratic Republic of the", value: "CD" },
    { id: 53, name: "Cook Islands", value: "CK" },
    { id: 54, name: "Costa Rica", value: "CR" },
    { id: 55, name: "Côte d'Ivoire", value: "CI" },
    { id: 56, name: "Croatia", value: "HR" },
    { id: 57, name: "Cuba", value: "CU" },
    { id: 58, name: "Curaçao", value: "CW" },
    { id: 59, name: "Cyprus", value: "CY" },
    { id: 60, name: "Czech Republic", value: "CZ" },
    { id: 62, name: "Djibouti", value: "DJ" },
    { id: 63, name: "Dominica", value: "DM" },
    { id: 64, name: "Dominican Republic", value: "DO" },
    { id: 65, name: "Ecuador", value: "EC" },
    { id: 66, name: "Egypt", value: "EG" },
    { id: 67, name: "El Salvador", value: "SV" },
    { id: 68, name: "Equatorial Guinea", value: "GQ" },
    { id: 69, name: "Eritrea", value: "ER" },
    { id: 70, name: "Estonia", value: "EE" },
    { id: 71, name: "Ethiopia", value: "ET" },
    { id: 72, name: "Falkland Islands (Malvinas)", value: "FK" },
    { id: 73, name: "Faroe Islands", value: "FO" },
    { id: 74, name: "Fiji", value: "FJ" },
    { id: 75, name: "Finland", value: "FI" },
    { id: 76, name: "France", value: "FR" },
    { id: 77, name: "French Guiana", value: "GF" },
    { id: 78, name: "French Polynesia", value: "PF" },
    { id: 79, name: "French Southern Territories", value: "TF" },
    { id: 80, name: "Gabon", value: "GA" },
    { id: 81, name: "Gambia", value: "GM" },
    { id: 82, name: "Georgia", value: "GE" },
    { id: 83, name: "Germany", value: "DE" },
    { id: 84, name: "Ghana", value: "GH" },
    { id: 85, name: "Gibraltar", value: "GI" },
    { id: 86, name: "Greece", value: "GR" },
    { id: 87, name: "Greenland", value: "GL" },
    { id: 88, name: "Grenada", value: "GD" },
    { id: 89, name: "Guadeloupe", value: "GP" },
    { id: 90, name: "Guam", value: "GU" },
    { id: 91, name: "Guatemala", value: "GT" },
    { id: 92, name: "Guernsey", value: "GG" },
    { id: 93, name: "Guinea", value: "GN" },
    { id: 94, name: "Guinea-Bissau", value: "GW" },
    { id: 95, name: "Guyana", value: "GY" },
    { id: 96, name: "Haiti", value: "HT" },
    { id: 97, name: "Heard Island and McDonald Islands", value: "HM" },
    { id: 98, name: "Holy See (Vatican City State)", value: "VA" },
    { id: 99, name: "Honduras", value: "HN" },
    { id: 100, name: "Hong Kong", value: "HK" },
    { id: 101, name: "Hungary", value: "HU" },
    { id: 102, name: "Iceland", value: "IS" },
    { id: 103, name: "India", value: "IN" },
    { id: 104, name: "Indonesia", value: "ID" },
    { id: 105, name: "Iran, Islamic Republic of", value: "IR" },
    { id: 106, name: "Iraq", value: "IQ" },
    { id: 107, name: "Ireland", value: "IE" },
    { id: 108, name: "Isle of Man", value: "IM" },
    { id: 109, name: "Israel", value: "IL" },
    { id: 110, name: "Italy", value: "IT" },
    { id: 111, name: "Jamaica", value: "JM" },
    { id: 112, name: "Japan", value: "JP" },
    { id: 113, name: "Jersey", value: "JE" },
    { id: 114, name: "Jordan", value: "JO" },
    { id: 115, name: "Kazakhstan", value: "KZ" },
    { id: 116, name: "Kenya", value: "KE" },
    { id: 117, name: "Kiribati", value: "KI" },
    { id: 118, name: "Korea, Democratic People's Republic of", value: "KP" },
    { id: 119, name: "Korea, Republic of", value: "KR" },
    { id: 120, name: "Kuwait", value: "KW" },
    { id: 121, name: "Kyrgyzstan", value: "KG" },
    { id: 122, name: "Lao People's Democratic Republic", value: "LA" },
    { id: 123, name: "Latvia", value: "LV" },
    { id: 124, name: "Lebanon", value: "LB" },
    { id: 125, name: "Lesotho", value: "LS" },
    { id: 126, name: "Liberia", value: "LR" },
    { id: 127, name: "Libya", value: "LY" },
    { id: 128, name: "Liechtenstein", value: "LI" },
    { id: 129, name: "Lithuania", value: "LT" },
    { id: 130, name: "Luxembourg", value: "LU" },
    { id: 131, name: "Macao", value: "MO" },
    { id: 132, name: "Macedonia, the former Yugoslav Republic of", value: "MK" },
    { id: 133, name: "Madagascar", value: "MG" },
    { id: 134, name: "Malawi", value: "MW" },
    { id: 135, name: "Malaysia", value: "MY" },
    { id: 136, name: "Maldives", value: "MV" },
    { id: 137, name: "Mali", value: "ML" },
    { id: 138, name: "Malta", value: "MT" },
    { id: 139, name: "Marshall Islands", value: "MH" },
    { id: 140, name: "Martinique", value: "MQ" },
    { id: 141, name: "Mauritania", value: "MR" },
    { id: 142, name: "Mauritius", value: "MU" },
    { id: 143, name: "Mayotte", value: "YT" },
    { id: 144, name: "Mexico", value: "MX" },
    { id: 145, name: "Micronesia, Federated States of", value: "FM" },
    { id: 146, name: "Moldova, Republic of", value: "MD" },
    { id: 147, name: "Monaco", value: "MC" },
    { id: 148, name: "Mongolia", value: "MN" },
    { id: 149, name: "Montenegro", value: "ME" },
    { id: 150, name: "Montserrat", value: "MS" },
    { id: 151, name: "Morocco", value: "MA" },
    { id: 152, name: "Mozambique", value: "MZ" },
    { id: 153, name: "Myanmar", value: "MM" },
    { id: 154, name: "Namibia", value: "NA" },
    { id: 155, name: "Nauru", value: "NR" },
    { id: 156, name: "Nepal", value: "NP" },
    { id: 157, name: "Netherlands", value: "NL" },
    { id: 158, name: "New Caledonia", value: "NC" },
    { id: 159, name: "New Zealand", value: "NZ" },
    { id: 160, name: "Nicaragua", value: "NI" },
    { id: 161, name: "Niger", value: "NE" },
    { id: 162, name: "Nigeria", value: "NG" },
    { id: 163, name: "Niue", value: "NU" },
    { id: 164, name: "Norfolk Island", value: "NF" },
    { id: 165, name: "Northern Mariana Islands", value: "MP" },
    { id: 166, name: "Norway", value: "NO" },
    { id: 167, name: "Oman", value: "OM" },
    { id: 168, name: "Pakistan", value: "PK" },
    { id: 169, name: "Palau", value: "PW" },
    { id: 170, name: "Palestinian Territory, Occupied", value: "PS" },
    { id: 171, name: "Panama", value: "PA" },
    { id: 172, name: "Papua New Guinea", value: "PG" },
    { id: 173, name: "Paraguay", value: "PY" },
    { id: 174, name: "Peru", value: "PE" },
    { id: 175, name: "Philippines", value: "PH" },
    { id: 176, name: "Pitcairn", value: "PN" },
    { id: 177, name: "Poland", value: "PL" },
    { id: 178, name: "Portugal", value: "PT" },
    { id: 179, name: "Puerto Rico", value: "PR" },
    { id: 180, name: "Qatar", value: "QA" },
    { id: 181, name: "Réunion", value: "RE" },
    { id: 182, name: "Romania", value: "RO" },
    { id: 183, name: "Russian Federation", value: "RU" },
    { id: 184, name: "Rwanda", value: "RW" },
    { id: 185, name: "Saint Barthélemy", value: "BL" },
    { id: 186, name: "Saint Helena, Ascension and Tristan da Cunha", value: "SH" },
    { id: 187, name: "Saint Kitts and Nevis", value: "KN" },
    { id: 188, name: "Saint Lucia", value: "LC" },
    { id: 189, name: "Saint Martin (French part)", value: "MF" },
    { id: 190, name: "Saint Pierre and Miquelon", value: "PM" },
    { id: 191, name: "Saint Vincent and the Grenadines", value: "VC" },
    { id: 192, name: "Samoa", value: "WS" },
    { id: 193, name: "San Marino", value: "SM" },
    { id: 194, name: "Sao Tome and Principe", value: "ST" },
    { id: 195, name: "Saudi Arabia", value: "SA" },
    { id: 196, name: "Senegal", value: "SN" },
    { id: 197, name: "Serbia", value: "RS" },
    { id: 198, name: "Seychelles", value: "SC" },
    { id: 199, name: "Sierra Leone", value: "SL" },
    { id: 200, name: "Singapore", value: "SG" },
    { id: 201, name: "Sint Maarten (Dutch part)", value: "SX" },
    { id: 202, name: "Slovakia", value: "SK" },
    { id: 203, name: "Slovenia", value: "SI" },
    { id: 204, name: "Solomon Islands", value: "SB" },
    { id: 205, name: "Somalia", value: "SO" },
    { id: 206, name: "South Africa", value: "ZA" },
    { id: 207, name: "South Georgia and the South Sandwich Islands", value: "GS" },
    { id: 208, name: "South Sudan", value: "SS" },
    { id: 209, name: "Spain", value: "ES" },
    { id: 210, name: "Sri Lanka", value: "LK" },
    { id: 211, name: "Sudan", value: "SD" },
    { id: 212, name: "Suriname", value: "SR" },
    { id: 214, name: "Swaziland", value: "SZ" },
    { id: 215, name: "Sweden", value: "SE" },
    { id: 216, name: "Switzerland", value: "CH" },
    { id: 217, name: "Syrian Arab Republic", value: "SY" },
    { id: 218, name: "Taiwan, Province of China", value: "TW" },
    { id: 219, name: "Tajikistan", value: "TJ" },
    { id: 220, name: "Tanzania, United Republic of", value: "TZ" },
    { id: 221, name: "Thailand", value: "TH" },
    { id: 222, name: "Timor-Leste", value: "TL" },
    { id: 223, name: "Togo", value: "TG" },
    { id: 224, name: "Tokelau", value: "TK" },
    { id: 225, name: "Tonga", value: "TO" },
    { id: 226, name: "Trinidad and Tobago", value: "TT" },
    { id: 227, name: "Tunisia", value: "TN" },
    { id: 228, name: "Turkey", value: "TR" },
    { id: 229, name: "Turkmenistan", value: "TM" },
    { id: 230, name: "Turks and Caicos Islands", value: "TC" },
    { id: 231, name: "Tuvalu", value: "TV" },
    { id: 232, name: "Uganda", value: "UG" },
    { id: 233, name: "Ukraine", value: "UA" },
    { id: 234, name: "United Arab Emirates", value: "AE" },
    { id: 235, name: "United Kingdom", value: "GB" },
    { id: 236, name: "United States", value: "US" },
    { id: 237, name: "United States Minor Outlying Islands", value: "UM" },
    { id: 238, name: "Uruguay", value: "UY" },
    { id: 239, name: "Uzbekistan", value: "UZ" },
    { id: 240, name: "Vanuatu", value: "VU" },
    { id: 241, name: "Venezuela, Bolivarian Republic of", value: "VE" },
    { id: 242, name: "Viet Nam", value: "VN" },
    { id: 243, name: "Virgin Islands, British", value: "VG" },
    { id: 244, name: "Virgin Islands, U.S.", value: "VI" },
    { id: 245, name: "Wallis and Futuna", value: "WF" },
    { id: 246, name: "Western Sahara", value: "EH" },
    { id: 247, name: "Yemen", value: "YE" },
    { id: 248, name: "Zambia", value: "ZM" },
    { id: 249, name: "Zimbabwe", value: "ZW" }
  ];

  const countryCode = [
    { id: 1, value: "India", name: "  +91" },
    { id: 2, value: "Pakistan", name: "+92" },
    { id: 3, value: "Greece", name: "+32" },
    { id: 4, value: "Belgium", name: "+33" },
    { id: 5, value: "Spain", name: "+350" },
    { id: 6, value: "Portugal", name: "+291" },
    { id: 7, value: "Mexico", name: "+52" },
    { id: 8, value: "USA", name: "+1" },
  ]

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/display', { state: values });
  }

  return (
    <Routes>
      <Route path='/' element={
        <div className='app'>
          <form onSubmit={handleSubmit}>
            <h1>Celebel Register</h1>

            {/* -----------------------------------INPUT FIELDS---------------------------------------- */}
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}

            <FormSelect
              label="Country"
              name="country"
              options={countries}
              value={values.country}
              onChange={onChange}
              required={true}
              title="Select country"
            />

            <FormSelect
              label="City"
              name="city"
              options={cities}
              value={values.city}
              onChange={onChange}
              required={true}
              title="Select city"
            />

            <div className="phone-input">
              <div className="phone-input-group">
                <FormSelect
                  label="Country Code"
                  name="countryCode"
                  options={countryCode}
                  value={values.countryCode}
                  onChange={onChange}
                  required={true}
                  title="Select country code"
                />
                <FormInput
                  label="Phone Number"
                  name="phoneNumber"
                  type="tel"
                  placeholder="Phone Number"
                  value={values.phoneNumber}
                  onChange={onChange}
                  required={true}
                  pattern="^[0-9]{10,10}$"
                  errorMessage="Phone Number should be of 10 digits"
                />
              </div>
            </div>

            <button type='submit'>Submit</button>

            {/* <FormInput name = "username" placeholder="Username" setUsername = {setUsername}/>
              <FormInput name = "email" placeholder="Email" />
              <FormInput name = "fullname" placeholder="Full Name"/>
              <FormInput name = "something" placeholder="Something"/> */}
          </form>
        </div>
      } />
      <Route path='/display' element={<DisplayData />} />
    </Routes>

  );
}

export default App;
