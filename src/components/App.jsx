import { useEffect } from "react";
import { useDispatch, useSelector } from 'react=redux';
import { fetchTasks } from "../redux/operations";
import { AppBar } from "../../components/AppBar";
import { TaskForm } from "../components/TaskForm";
import { TaskList } from "../components/TaskList";

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.tasks.isLoading);
  const error = useSelector((state) => state.tasks.error);

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
      
      {error && <p>{error}</p>}
     
    </>
    
  );
};
