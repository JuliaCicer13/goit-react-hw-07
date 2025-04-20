import { useSelector } from "react-redux";
import { selectContactCount } from "../redux/tasksSlice";

import css from "../components/styles/TaskCounter.module.css";

export const TaskCounter = () => {
    const count = useSelector(selectContactCount);


    return (
        <div>
            <p className={css.text}>Active:{count.active}</p>
            <p className={css.text}>Completed:{count.completed}</p>
        </div>
    )
}