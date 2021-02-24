import removeIcon from "../images/icon-remove.svg";

const Filters = ({ filterTags, onDelete, onClearFilters }) => {
  if (filterTags.length === 0) {
    return null;
  } else {
    return (
      <div className="filters">
        <div className="filters__container">
          {filterTags.map((filter, index) => (
            <div key={index} className="filter">
              <span className="filter-text">{filter}</span>
              <button onClick={() => onDelete(filter)}>
                <img src={removeIcon} alt="icon-remove" />
              </button>
            </div>
          ))}
        </div>

        <button className="clear-btn" onClick={onClearFilters}>Clear</button>
      </div>
    );
  }
};

export default Filters;
