// Declara una variable status que pueda ser de tipo string o número. Asígnale diferentes valores para probar ambos tipos.

let status1: string | number;       // status no deja porque sale error de no se puede asignar un valor a una variable con ambito de bloque 'status'

status1 = 'error';     // tipo string

status1 = 404;        // tipo number