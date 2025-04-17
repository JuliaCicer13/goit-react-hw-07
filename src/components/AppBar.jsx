import { StatusFilter } from "../components/StatusFilter";
import { TaskCounter } from "../components/TaskCounter";
import css from "../components/styles/AppBar.module.css";

export const AppBar = () => {
<header className={css.header}>
    <section className={css.section}>
        <h2 className={css.title}>Tasks</h2>
        <TaskCounter/>
    </section>  
    <section className={css.section}>
      <h2 className={css.title}>Filter by status</h2>
       <StatusFilter/>
    </section>
</header>


}