import { useSelector } from "react-redux";
import { selectTaskCount } from "../redux/tasksSlice";

import css from "../components/styles/TaskCounter.module.css";

export const TaskCounter = () => {
    const count = useSelector(selectTaskCount);


    return (
        <div>
            <p className={css.text}>Active:{count.active}</p>
            <p className={css.text}>Completed:{count.completed}</p>
        </div>
    )
}