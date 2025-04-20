import { StatusFilter } from "./StatusFilter";
import { ContactCounter } from "./ContactCounter";
import css from "../components/styles/SearchBox.module.css";

export const SearchBox = () => {
<header className={css.header}>
    <section className={css.section}>
        <h2 className={css.title}>Tasks</h2>
        <ContactCounter/>
    </section>  
    <section className={css.section}>
      <h2 className={css.title}>Filter by status</h2>
       <StatusFilter/>
    </section>
</header>


}