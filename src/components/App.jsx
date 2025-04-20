import { useEffect } from "react";
import { useDispatch, useSelector } from 'react=redux';
import { fetchTasks } from "../redux/operations";
import { SearchBox } from "../../components/AppBar";
import { ContactForm } from "../components/ContactForm";
import { ContactList } from "../components/TaskList";

// import function of the selectors
import {selectorIsLoading, selectorError} from "../redux/tasksSlice"
export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectorIsLoading);
  const error = useSelector(selectorError);
    
  // call operation
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  
  //drawing the marking in the case from meaning in state 
  return (
    <>
      <SearchBox />
      <ContactForm />
        {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </>
    
  );
};
