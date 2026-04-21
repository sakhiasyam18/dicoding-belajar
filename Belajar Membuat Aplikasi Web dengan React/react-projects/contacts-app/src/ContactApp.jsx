import React from "react";
import ContactList from "./ContactList";
import {getData} from './data';

function ContactApp  (){
    const Contacts = getData();
    return (
    <div className="contact-app">
        <h1>Daftar kontaknya </h1>
        <ContactList Contacts={Contacts}/>
    </div>
);
}

export default ContactApp;