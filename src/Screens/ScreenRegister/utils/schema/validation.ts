import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  phone: yup.string().matches(/^\d+$/, 'Phone number should be digits only').required('Phone number is required'),
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});
