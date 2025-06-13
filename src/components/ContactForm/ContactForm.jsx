import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const ContactForm = ({ onAdd }) => {
  const initialValues = {
    name: "",
    number: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "En az 3 karakter")
      .max(50, "En fazla 50 karakter")
      .required("Zorunlu alan"),
    number: Yup.string()
      .min(3, "En az 3 karakter")
      .max(20, "En fazla 20 karakter")
      .required("Zorunlu alan"),
  });

  const handleSubmit = (values, { resetForm }) => {
    onAdd(values.name, values.number);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Name
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage className={css.error} name="name" component="div" />
        </label>

        <label className={css.label}>
          Number
          <Field className={css.input} type="text" name="number" />
          <ErrorMessage className={css.error} name="number" component="div" />
        </label>

        <button className={css.button} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
