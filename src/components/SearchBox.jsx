import { setNameFilter } from "../redux/filterSlice";
import {useDispatch, useSelector} from "react-redux";
import {selectNameFilter} from '../redux/filterSlice';

import css from "../components/styles/SearchBox.module.css";

export const SearchBox = () => {
 const dispatch = useDispatch();
 const filter = useSelector(selectNameFilter);

 const handleChange = (e) => {
    dispatch(setNameFilter(e.target.value));
 };
 
 return (
    <input 
    type="text"
    value={filter}
    onChange={handleChange}
    placeholder="Searching by name"
    />
   );
};
