import React from "react";
import ContactItem from './ContactItem';

function ContactList({Contacts}){
    return (
        <div className="contact-list">
            {
                Contacts.map((Contact) =>(
                    <ContactItem key={Contact.id} {...Contact} />
                ))
            }
        </div>
    );
}

export default ContactList;