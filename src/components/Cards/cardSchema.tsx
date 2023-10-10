import * as Yup from 'yup';

 export const cardSchema = Yup.object().shape({
    nombre: Yup.string().required(),
    comentario: Yup.string(),
    nota: Yup.number()
    
})

