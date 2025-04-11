export const BASE_URL = 'http://192.168.0.29:3002';
import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title cannot be empty'),
});

export default validationSchema;
