import { useDispatch, useSelector } from "react-redux";
import { clearFilter, removeFilter } from "../store/actions/filter-actions";
import { selectFilters } from "../store/selectors/filters-selector";
import Badge from "../UI/Badge";
import Card from "../UI/Card";
import Stack from "../UI/Stack";

import "./FilterPanel.scss";

function FilterPanel() {
  const filters = useSelector(selectFilters);

  const dispatch = useDispatch();

  if (filters.length === 0) {
    return;
  }

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {filters.map((filter) => (
            <Badge
              key={filter}
              variant="clearable"
              onClear={() => dispatch(removeFilter(filter))}
            >
              {filter}
            </Badge>
          ))}
        </Stack>
        <button className="link" onClick={() => dispatch(clearFilter())}>
          Clear
        </button>
      </div>
    </Card>
  );
}

export default FilterPanel;
