const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <li key={id}>
      <span>{name}</span> <span>{number}</span>{' '}
      <span>
        <button type="button" onClick={() => onDelete(id)}>
          Delete
        </button>
      </span>
    </li>
  );
};

export default ContactItem;
