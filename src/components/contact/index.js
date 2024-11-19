import { getDatabase, ref, onValue } from "firebase/database";
import React, { useEffect, useState } from "react";


const Contact = () => {
  const [contact, setContract] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    const contractref = ref(db, "contact");
    onValue(contractref, (snapshot) => {
      const data = snapshot.val();
      setContract(data);
    });
  }, []);
  return (
    <section id="contact" className="section">
    <div className="container">
      <h2>{contact.title}</h2>
      <div className="contact-info">
        <p>
          {contact.email}{" "}
          <a href="mailto:rey11van77@gmail.com">{contact.email2}</a>
        </p>
        <p>
         {contact.telepon}: <a href="tel:+6289612243171">{contact.telepon2}</a>
        </p>
      </div>
    </div>
  </section>
  )
}

export default Contact;