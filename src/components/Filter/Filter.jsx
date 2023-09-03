import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "redux/contacts/selectors";
import { changeFilter } from "redux/contacts/filterSlice";
import { TextField } from "@mui/material";

const Filter = () => {
    const filterQuery = useSelector(getFilter);
    const dispatch = useDispatch();

    return (
        <TextField
            fullWidth
            sx={{ display: 'block' }}
            id="filter"
            type="search"
            label="Find contacts by name"
            value={filterQuery}
            onChange={(e) => dispatch(changeFilter(e.target.value))}>
        </TextField>
)}

export { Filter }