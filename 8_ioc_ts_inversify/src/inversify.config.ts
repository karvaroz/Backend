import { Container } from "inversify/lib/container/container"
import { Company, Employee } from "./company"
import { COMPANY, USER } from "./types"
// este archivo contiene configuraciones de mapeo que permiten la inyección de dependencia en nuestra aplicación
// Aquí, vinculamos la interfaz de USUARIO y EMPRESA a las clases Empleado y Empresa respectivamente.
const container = new Container()
container.bind(USER).to(Employee)
container.bind(COMPANY).to(Company);

export {
    container
}
