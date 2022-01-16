import React, { useState, useEffect } from "react";
import getRandomUser from '../services/getRandomUser';
import { useHistory } from "react-router-dom";
import UserCard from './usercard';




function PersonDetails() {
    let history = useHistory();
   // const [data, setData] = useState([]);
   
    const name = history.location.pathname.split('/')[1];
    const [loadingData, setLoadingData] = useState(true);
    const [fullName, setFullName] = useState('');
    const [picture, setPicture] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [location, setLocation] = useState('');




    useEffect(() => {
        if (loadingData) {
            // if the result is not ready - call getUser() function
            getUser();
            setLoadingData(false);
        }
    }, []);

    function getUser() {
        getRandomUser()
            .then(
                (newData) => {
                    //setData(newData);
                    const person = newData.find((d) => d.name.first == name);
                    setFullName(person.name.first + " " + person.name.last);
                    setPicture(person.picture.large)
                    setAge(person.dob.age);
                    setEmail(person.email);
                    setGender(person.gender);
                    setPhone(person.phone);
                    setLocation(person.location.country + " , " + person.location.city);
                }
            );
    }


    return (
        <UserCard fullName={fullName} email={email} picture={picture} age={age} gender={gender} phone={phone} location={location}></UserCard>
    )

}
export default PersonDetails;