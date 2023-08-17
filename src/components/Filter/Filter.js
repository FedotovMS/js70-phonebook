const Filter = ({ filter, onChange }) => {
  return (
    <div>
      <input name="filter" type="text" value={filter} onChange={onChange} />
    </div>
  );
};
export default Filter;
