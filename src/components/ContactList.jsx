import { useSelector} from 'react-redux';
import { selectFilteredContacts} from "../redux/selectors";
import { Contact } from "../components/Contact";
import css from "../components/styles/ContactList.module.css";


export const ContactList = () => {
    const contacts = useSelector(selectFilteredContacts);
    return (
        <ul className={css.list}>
            {contacts.map(({contact}) => (
                <li className={css.listItem} key={contact.id}>
                    <Contact contact={contact} />
                </li>
            ))}
        </ul>
    );
};