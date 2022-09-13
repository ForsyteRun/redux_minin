import * as yup from 'yup';

export const validate = yup.object().shape({
   login: yup.string()
   .required('Required'),
   password: yup.string()
   .required('required')
})