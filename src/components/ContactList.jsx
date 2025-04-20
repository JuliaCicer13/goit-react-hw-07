import { useSelector } from 'react-redux';
import { selectContact } from "../redux/contactsSlice";
import {selectStatusFilter} from "../redux/filterSlice"
import { Contact } from "../components/Contact";
import { selectVisibleTasks } from "../redux/contactsSlice";
import css from "../components/styles/TaskList.module.css";

const getVisibleContacts = (items, statusFilter) => {
    switch (statusFilter) {
        case 'active':
            return items.filter((item) => !item.completed);
        case 'completed':
            return items.filter((item) => item.completed);
        default:
            return items;
    }
}

export const ContactList = () => {
    const items = useSelector(selectVisibleTasks);
    const statusFilter = useSelector(selectStatusFilter);
    const visibleContacts = getVisibleContacts(items, statusFilter);

    return (
        <ul className={css.list}>
            {visibleContacts.map((item) => (
                <li className={css.listItem} key={item.id}>
                    <Contact task={item} />
                </li>
            ))}
        </ul>
    );
};