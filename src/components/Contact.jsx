import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
import {deleteContact} from "../redux/contactsOps"
import css from '../components/styles/Contact.module.css';

export const Contact = ({ contact }) => {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(contactId));

    return (
     <div className={css.wrapper}>
            <p className={css.text}>{task.contact}</p>
            <button className={css.btn} onClick={handleDelete}>
                <MdClose size={24}/>
            </button>
     </div>
    )
}