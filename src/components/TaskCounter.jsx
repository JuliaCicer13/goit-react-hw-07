import { useSelector } from "react-redux";
import css from "../components/styles/TaskCounter.module.css";

export const TaskCounter = () => {
    const tasks = useSelector((state) => state.tasks.items);

    const count = tasks.reduce(
        (acc, task) => {
            if (task.complited) {
                acc.complited += 1;

            } else {
                acc.active += 1;
            }
            return acc;
        },
        { active: 0, complited: 0 }
    );

    return (
        <div>
            <p className={css.text}>Active:{count.active}</p>
            <p className={css.text}>Completed:{count.completed}</p>
        </div>
    )
}