import { useSelector } from "react-redux";
import { selectContactCount } from "../redux/contactsSlice";
import css from "../components/styles/ContactCounter.module.css";

export const TaskCounter = () => {
    const count = useSelector(selectContactCount);


    return (
        <div>
            <p className={css.text}>Active:{count.active}</p>
            <p className={css.text}>Completed:{count.completed}</p>
        </div>
    )
}