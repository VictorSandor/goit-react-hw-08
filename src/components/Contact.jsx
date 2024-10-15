import style from "./Contact.module.css";
// import { FaPhone, FaUser } from "react-icons/fa6";
import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
// import { deleteContact } from "../redux/contactsSlice";
import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/contactsOps";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  function handleClick(id) {
    dispatch(deleteContact(id));
  }

  return (
    <div className={style.contact}>
      <div className={style.contactInfo}>
        <p className={style.contactName}>
          <BsFillPersonFill />
          &nbsp;
          {contact.name}
        </p>
        <p className={style.contactTel}>
          <BsFillTelephoneFill />
          &nbsp;
          <a href={`tel:${contact.number}`}>{contact.number}</a>
        </p>
      </div>
      <button
        className={style.contactDeleteBtn}
        onClick={() => handleClick(contact.id)}
      >
        Delete
      </button>
    </div>
  ); 

  // return (
  //   <>
  //     <div className={css.info}>
  //       <p className={css.p}>
  //         <FaUser size="16" />
  //         {name}
  //       </p>
  //       <p className={css.p}>
  //         <FaPhone size="16" />
  //         {number}
  //       </p>
  //     </div>

  //     <button onClick={() => onDelete(id)}>Delete</button>
  //   </>
  // );
}