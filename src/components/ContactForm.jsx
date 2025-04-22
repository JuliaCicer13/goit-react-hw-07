import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactsOps";
import { Button } from "./Button";
import styles from "../components/styles/ContactForm.module.css";


export const ContactForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        dispatch(addContact(event.target.elements.text.value));
        form.reset();
    };

    return (
     <form className={styles.form} onSubmit={handleSubmit}>
       <input className={styles.field} type="text" name="name" placeholder="Enter task text..." />
       <input className={styles.field} type="text" name="number" placeholder="Enter number..."/>
      <Button className={styles.btn} type="submit">Add contact</Button>
    </form>
    )
}