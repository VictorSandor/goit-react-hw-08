import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import style from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
// import { addContact } from "../redux/contactsSlice";
import { nanoid } from "nanoid";
import { addContact } from "../redux/contactsOps";

const validationSchema = Yup.object().shape({
  name: Yup.string()
      .min(3, "is too short!")
      .max(50, "is too long!")
      .matches(/^[A-Za-z\s-]+$/, "must be a valid name!")
      .required("is required!"),
    number: Yup.string()
      .min(7, "is too short!")
      .matches(/^[0-9-]+$/, "must be a valid phone number!")
      .required("is required!"),
});

export default function ContactForm() {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();

  function handleSubmit(values, actions) {
    const contact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(contact));
    actions.resetForm();
  }

 return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={style.form}>
        <div className={style.fieldWrapper}>
          <label htmlFor={nameFieldId} className={style.label}>
            Name<ErrorMessage
            name="name"
            component="span"
            className={style.errorMsg}
          />
          </label>
          <Field
            name="name"
            type="text"
            id={nameFieldId}
            className={style.field}
          />
          
        </div>
        <div className={style.fieldWrapper}>
          <label htmlFor={numberFieldId} className={style.label}>
            Number<ErrorMessage
            name="number"
            component="span"
            className={style.errorMsg}
          />
          </label>
          <Field
            name="number"
            type="text"
            id={numberFieldId}
            className={style.field}
          />
          
        </div>
        <button type="submit" className={style.submitBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}



// export default function ContactForm({ onAdd }) {
//   const nameFieldId = useId();
//   const numberFieldId = useId();

//   const initialValues = {
//     name: "",
//     number: "",
//   };

//   const handleSubmit = (values, actions) => {
//     const newContact = {
//       id: `id-${Date.now()}`,
//       ...values,
//     };
//     onAdd(newContact);
//     actions.resetForm();
//   };

//   const validationSchema = Yup.object().shape({
//     name: Yup.string()
//       .min(3, "is too short!")
//       .max(50, "is too long!")
//       .matches(/^[A-Za-z\s-]+$/, "must be a valid name!")
//       .required("is required!"),
//     number: Yup.string()
//       .min(7, "is too short!")
//       .matches(/^[0-9-]+$/, "must be a valid phone number!")
//       .required("is required!"),
//   });

//   return (
//     <Formik
//       initialValues={initialValues}
//       onSubmit={handleSubmit}
//       validationSchema={validationSchema}
//     >
//       <Form className={css.form}>
//         <label className={css.label} htmlFor={nameFieldId}>
//           Name
//           <ErrorMessage name="name">
//             {(msg) => <span className={css.error}>{msg}</span>}
//           </ErrorMessage>
//         </label>
//         <Field type="text" name="name" id={nameFieldId} />

//         <label className={css.label} htmlFor={numberFieldId}>
//           Number
//           <ErrorMessage name="number">
//             {(msg) => <span className={css.error}>{msg}</span>}
//           </ErrorMessage>
//         </label>
//         <Field type="text" name="number" id={numberFieldId} />

//         <button type="submit">Add contact</button>
//       </Form>
//     </Formik>
//   );
// }