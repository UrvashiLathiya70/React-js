// export const BASE_URL = 'http://192.168.0.29:3002';
import * as Yup from 'yup';

export const BASE_URL = 'http://crowdfundingapi.project-demo.info:3002';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title cannot be empty'),
});

export default validationSchema;
