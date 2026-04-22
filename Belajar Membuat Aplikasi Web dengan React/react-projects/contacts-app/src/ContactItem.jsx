import React from "react";
import ContactItemBody from './ContactItemBody';
import ContactItemImage from './ContactItemImage';

// Nama fungsi harus ContactItem, bukan ContactItemImage
function ContactItem({imageUrl, name, tag}){
    return (
        <div className="contact-item">
            {/* Ini memanggil komponen dari file ContactItemImage.jsx */}
            <ContactItemImage imageUrl={imageUrl}/>
            <ContactItemBody name={name} tag={tag}/>
        </div>
    );
}

// Harus export ContactItem, jangan ContactItemBody lagi
export default ContactItem;