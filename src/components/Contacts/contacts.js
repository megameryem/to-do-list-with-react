import { useState, useEffect } from 'react'
import Form from "../Form/form";
import List from "../List/list";

import ControlTodo from "../ControlTodo/controlTodo";



function Contacts() {
  const [contacts, setContacts] = useState([
    { new_todo: 'Mehmet' },
    { new_todo: "Ayşe" },
    { new_todo: "Leyla" }
  ]);

  useEffect(() => {
    if (localStorage.getItem("contacts") === null) {
      localStorage.setItem("contacts", JSON.stringify([]))
    } else {
      setContacts(JSON.parse(localStorage.getItem("contacts")))
    }
  }, [])
  const [status, setStatus] = useState("");
  const [filteredContact, setfilteredContact] = useState([]);


  useEffect(() => {
    const filterHandler = () => {

      switch (status) {
        case "completed":
          setfilteredContact(contacts.filter((todo) => todo.completed === true));
          break;
        case "active":
          setfilteredContact(contacts.filter((todo) => todo.completed === false));
          break;

        default:
          setfilteredContact(contacts);
          break;
      }
    };
    saveLocalcontacts()
    filterHandler();
    // eslint-disable-next-line
  }, [contacts, status]);

  // Local Storage
  const saveLocalcontacts = () => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }


  return (
    <div >
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <Form addContact={setContacts} contacts={filteredContact} />

        </header>


        <List setContacts={setContacts} contacts={filteredContact} />

        <ControlTodo contacts={contacts} setContacts={setContacts} status={status} setStatus={setStatus} filteredContact={filteredContact} />
      </section>

      <footer className="info">
        <p>Created by <a target="_blank" href="https://www.linkedin.com/in/berfin-meryem-tuzcu-b97417224/">B. Meryem Tuzcu</a></p>
      </footer>




    </div>
  )
}

export default Contacts
