import { useEffect } from "react";
import { useDispatch, useSelector } from 'react=redux';
import { fetchTasks } from "../redux/contactsOps";
import { SearchBox } from "../../components/SearchBox";
import { ContactForm } from "../components/ContactForm";
import { ContactList } from "../components/ContactList";

// import function of the selectors
import {selectorIsLoading, selectorError} from "../redux/contactsSlice"
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
