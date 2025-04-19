import { useSelector } from 'react-redux';
import { selectTasks } from "../redux/tasksSlice";
import {selectStatusFilter} from "../redux/filterSlice"
import { Task } from "../components/Task";
import { selectVisibleTasks } from "../redux/tasksSlice";
import css from "../components/styles/TaskList.module.css";

const getVisibleTasks = (tasks, statusFilter) => {
    switch (statusFiter) {
        case 'active':
            return tasks.filter((task) => !task.completed);
        case 'completed':
            return tasks.filter((task) => task.completed);
        default:
            return tasks;
    }
}

export const TaskList = () => {
    const tasks = useSelector(selectVisibleTasks);
    const statusFilter = useSelector(selectStatusFilter);
    const visibleTasks = getVisibleTasks(tasks, statusFilter);

    return (
        <ul className={css.list}>
            {visibleTasks.map((task) => (
                <li className={css.listItem} key={task.id}>
                    <Task task={task} />
                </li>
            ))}
        </ul>
    );
};