import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from "../redux/contactsOps";
import {selectLoading, selectError} from '../redux/contactsOps';
import  SearchBox  from "../components/SearchBox";
import  ContactForm  from "../components/ContactForm";
import  ContactList  from "../components/ContactList";

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
    
 
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  return (
    <div>
      <h1>Book of the contacts</h1>
      <ContactForm />
        <SearchBox />
        {isLoading && <p>Request in progress...</p>}
        {error && <p>Error: {error}</p>}
      <ContactList />
    </div>
  );
};
