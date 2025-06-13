import css from "./Contact.module.css";

const Contact = ({ contact, onDelete }) => {
  return (
    <div className={css.contact}>
      <span className={css.name}>
        {contact.name}: {contact.number}
      </span>
      <button className={css.button} onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
