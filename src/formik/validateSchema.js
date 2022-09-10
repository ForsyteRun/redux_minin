import * as yup from 'yup';

export const validate = yup.object().shape({
   name: yup.string()
   .min(4, 'Too Short!')
   .max(24, 'Too Long!')
   .required('Required'),
 email: yup.string()
   .min(6, 'Too short email')
   .max(30, 'Too long')
   .required('Required'),
 channel: yup.string()
   .min(2, 'Too Short!')
   .max(999999, 'Too Long!')
   .required('Required'),
})