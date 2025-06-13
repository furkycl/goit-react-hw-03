import css from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  const handleInputChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className={css.searchBox}>
      <label className={css.label}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          value={value}
          onChange={handleInputChange}
          placeholder="Type a name..."
        />
      </label>
    </div>
  );
};

export default SearchBox;
