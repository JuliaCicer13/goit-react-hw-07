import { useSelector, useDispatch } from 'react-redux';
import { Button } from "../components/Button";
import css from '../components/styles/StatusFilter.module.css';

export const StatusFilter = () => {
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.filters.status);

    const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));

    return (
        <div className={css.wrapper}>
            <Button 
                selected={filter === 'all'}
                onClick={() => handleFilterChange('active')}    
            >
                Completed
            </Button>
     </div>


    )

}