import { useEffect } from "react";
import { useDispatch, useSelector } from 'react=redux';
import { fetchTasks } from "../redux/operations";
import { AppBar } from "../../components/AppBar";
import { TaskForm } from "../components/TaskForm";
import { TaskList } from "../components/TaskList";

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
      <AppBar />
      <TaskForm />
        {isLoading && !error && <b>Request in progress...</b>}
      <TaskList />
    </>
    
  );
};
