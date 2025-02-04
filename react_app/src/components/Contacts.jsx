import { useState } from "react"

function Contacts() {
    const [contact,setContact] = useState({
        name:"" , lastName:"" , email:"" , phone:"" ,
    })

    const addHandler = () => {
        console.log(contact);
    }

    const changeHandler = event => {
        const name = event.target.name;
        const value = event.target.value;

        setContact((contact) => ({...contact , [name]:value}))

    }
  return (
    <div>
        <div>
            <input type="text" name="name" placeholder="Name" value={contact.name} onChange={changeHandler}/>
            <input type="text" name="lastName" placeholder="Last Name" value={contact.lastName} onChange={changeHandler}/>
            <input type="email"name="email" placeholder="Email" value={contact.email} onChange={changeHandler}/>
            <input type="number" name="phone" placeholder="Phone" value={contact.phone} onChange={changeHandler}/>
            <button onClick={addHandler }>Add Contact</button>
        </div>
    </div>
  )
}

export default Contacts