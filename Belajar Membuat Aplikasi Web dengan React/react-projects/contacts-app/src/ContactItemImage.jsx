import React from "react";

function ContactItemImage({imageUrl}){
    return (
        <div className="contact-item__image">
            {/* Pakai kurung kurawal {}, bukan tanda kutip "" */}
            <img src={imageUrl} alt="contact avatar"/>
        </div>
    );
}

export default ContactItemImage;