import JobPosition from "./JobPosition";

import "./JobList.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectVisiblePositions } from "../store/selectors/position-selectors";
import { addFilter } from "../store/actions/filter-actions";
import { selectFilters } from "../store/selectors/filters-selector";

function JobList() {
  const dispatch = useDispatch();

  const currentFilters = useSelector(selectFilters);

  const positions = useSelector((state) =>
    selectVisiblePositions(state, currentFilters)
  );

  const addFilterHandler = (filter) => {
    dispatch(addFilter(filter));
  };

  return (
    <div className="job-list">
      {positions.map((item) => (
        <JobPosition
          key={item.id}
          {...item}
          addFilterHandler={addFilterHandler}
        />
      ))}
    </div>
  );
}

export default JobList;
