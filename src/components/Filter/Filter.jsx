import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "redux/selectors";
import { changeFilter } from "redux/filterSlice";
import { FilterLabel, FilterInput } from "./Filter.styled";

const Filter = () => {
    const filterQuery = useSelector(getFilter);
    const dispatch = useDispatch();

    return (
    <FilterLabel>
        Find contacts by name
        <FilterInput type="text" value={filterQuery} onChange={(e) => dispatch(changeFilter(e.target.value))} />
    </FilterLabel>
)}

export { Filter }