import * as Yup from 'yup';

export const inquiryValidationSchema = Yup.object().shape({
  textField: Yup.string()
    .required('Text field is required') // Validation rule for required field
});