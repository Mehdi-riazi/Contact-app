import ContactItem from "./ContactItem"
import styles from "./ContactsList.module.css"
function ContactList({contacts , deleteHandler}) {
  return (
    <div className={styles.container}>
    <h3>Contact list</h3>
    {contacts.length ? (<ul className={styles.contacts}>
        {contacts.map((contact) => (
            <ContactItem  key={contact.id} data={contact}  deleteHandler={deleteHandler}/>
        ))}
    </ul>): <p className={styles.message}>No Contacts Yet!</p>}
    </div>
  )
}

export default ContactList