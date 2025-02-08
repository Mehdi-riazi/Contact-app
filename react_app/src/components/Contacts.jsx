import { useState } from "react"
import inputs from "../constants/inputs";
import ContactList from "./ContactList"

function Contacts() {
    const [contacts , setContacts] = useState([])
    const [alert , setAlert] = useState("");
    const [contact,setContact] = useState({
        name:"" , lastName:"" , email:"" , phone:"" ,
    })

    const addHandler = () => {
        if (!contact.name || !contact.lastName || !contact.email || !contact.phone) {
            setAlert("please enter valid data!")
            return;
        }
        setAlert("");
        setContacts((contacts) => [...contacts , contact])
        setContact({
            name:"" , lastName:"" , email:"" , phone:"" ,
        })
    }

    const changeHandler = event => {
        const name = event.target.name;
        const value = event.target.value;

        setContact((contact) => ({...contact , [name]:value}))

    }
  return (
    <div>
        <div>
        {
            inputs.map((input , index) => (<input 
                type={input.type} 
                placeholder={input.placeholder} 
                name={input.name} 
                value={contact[input.name]}
                onChange={changeHandler}
                key={index}
                />))
        }  
            <button onClick={addHandler }>Add Contact</button>
        </div>
        <div>{alert && <p>{alert}</p>}</div>
        <ContactList contacts={contacts}/>
    </div>
  )
}

export default Contacts