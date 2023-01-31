// Rest Services
// Code smells - malos olores en el código
// Helpful - maintained for others developers


// Bad comments - comentarios obsoletos
// Bad comments - comentarios redundantes

// Environment - Build requires more than one step
// Test require more than one step
// Hacer del ambiente correr lo mas facil y rapido posible


// Funciones - too many arguments - cuando se tiene muchos parametros
// apuntar a cero, tal vez uno o dos
// Functions - output arguments

// Para cumplir solid, no queremos parametros booleanos
// dos funciones una para negativo y otra para positivo
// funciones que nunca se utilizan

// Multiples lengiajes de programacion en un solo archivo
// Unit tests - mal comportamientos - incorrect behavior at the boundaries

// Nombre de libreria y framework - Jest
// Como trabajas los units test?
// Estandar ya definido de unit tests

// Overriden safeties
// Desactivar los unit tests
// Codigo duplicado

// Base classes depending on their derivatives
// Demasiada informacion
// Que sean pequeñas y bien definidas
// codigo muerto
// inconsistencias en los nombres de las funciones

// Artificial Coupling
// Las entidades de dominio no deberian depender de nada
// No deberia tener imports

// Indentacion - que el codigo sea lo mas explicito posible

// Inappropriate static
// Sin instancias
// En un paradigma de objetos esta de mas utilizar los estaticos

// El nombre de las funciones deben hacer lo que dicen
// Entender el algoritmo

// No queremos magic numbers with named constants
// Encapsular condicionales  no usar &&
// Un punto por linea
// Evadir condicionales negativas

// Encapsulate boundary conditions - encapsular condicionales que se repiten
// avoid transitive navigation - un punto por linea myclass.doSomething()

// Usar nombres long names for scope

// AWS IMPLEMENTAR UN BACKEND

// Estilos de arquitetura de API - Estilo arquitectonico en tu api
// Una solucion predefinida que ya han sido probadas y utilizadas
// Onion Archicteture - Arquictetura de backend
// Rest
// GraphQL
// HATEOAS

// REST STYLE
// REPRESENTATION STATE TRANSFERM
// TRABAJA SOBRE PROTOCOLO HTTP
// DIFERENCIA REST Y RESFULL
// resfull es una implementacion de la arquitectura de API REST

// Restricciones
// Usa todas las capacidades de HTTP
// Diseño de los recursos sustantivos no son metofos o operaciones (verbos)
// nombrar cosas no acciones
// recursos uris
// Uso uniforme de interfaces definidos de metodos HTTP
// stateless el servidor no va a guardar nada del cliente - no estado
// constraints en REST

// HATEOAS
// hypermedia as the engine of application state
// aplica todos los principios REST
// Los recursos estan vinculados entre si
// Las respuestas contienen hiperlinks que apuntan a otro recurso
// La semantica de las respuestas de la api es proporcionada por los media types

// GraphQL style
// Expone toda tu info
// El servidor expone todos los requisitos para que los clientes puedan
// Hacer sus queries
// Reportes?

// RCP Style
// Llamada a un procedimiento (funciones)

// SOAP
// LLamadas - procedimientos centralizados
// Esta mas estandarizado
// Exponer servicios internos en una organizacion
// Funciona con HTTP y puede usar otros protocoles
// FULL XML si o si parseo de XML

// REST
// URI = UNIFORM RESOURCE IDENTIFIER

// Cuando los path URI son nombrados con sustantivos plurales
// ESTRUCTURA URI FORMATO 3986
// SHEME "://" AUTHORITY "/" PATH ["?"QUERY] ["#"FRAGMENT]

// 1- LOS SLASH SEPARA LOS RECURSOS DE LOS AUTHORITIES Y PATHS
// BANCO/CUENTA/IDCUENTA
// 2. EL SLASH AL FINAL NO DEBERIA ESTAR INCLUIDO
// 3. NO TENER ESPACIOS, EN VEZ DE UN ESPACIO PONER UN GUION -
// 4. NO USAR LOS GUION BAJOS
// 5. Utilizar minusculas preferiblemente
// toda la uri es sensible a mayusculas y minuscalas excepto el AUTHORITY y el SHEME
// 6. No utilizar extensiones de archivos en nuestras uris
// 7. los subdominios deben ser usados consistentemente
// http://api.soccer.restapi.org  - http://developer.soccer.restapi.org
// 8. modelado de recursos (cada recurso debe ser redirecional) debe devolver algo
// http://api.soccer.restapi.org/leagues/seattle/teams/trebuchet

// Arquetipos pequeños patrones-diseños que ya existen y se utilizan y aplican

// Document - Collection - Store - Controller
// Recurso de documento - concepto de algo singular no es un verbo - es un sustantivo - es la base de los demas - mas sencillo - asociarlo a entidades de la base de datos

// Collection - ejecutar operaciones de lecturas - siempre acaba en plural
// no son verbos - son plurales - CRUD completo
// Puedo usar Query params

// Store - solo se puede hacer operaciones de PUT GET DELETE

// Controller siempre van hacer post - no puedo meter metodos estandar de crud
// POST /alerts/23456/resend
// No puedo usar query params

// DISEÑO DE URI PATH
// {collection-c}/{store-s}/{document-d}

// Un sustantivo singular debe usarse para documentos
// Colectiones en sustantivos plurales customers players
// un sustantivo plueral deberia ser usado para store
// un verbo debe ser usado para los controlera register

// Media type Representation mas ejemplos de diferenetes api
// Error Representation


// EXPOSICIONES
// HTTP 1.1 
// Request methods








