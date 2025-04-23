import { useDispatch } from 'react-redux';
import {deleteContact} from "../redux/contactsOps"
import css from '../components/styles/Contact.module.css';

export const Contact = ({ contact }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(contactId));
    };
    return (
     <div className={css.wrapper}>
            <p className={css.text}>
                {contact.name} : {contact.number}
            </p>
            <button className={css.btn} onClick={handleDelete}>
            </button>
     </div>
    )
}