import "reflect-metadata"
import { CompanyInterface } from "./interface"
import { container } from "./inversify.config"
import { COMPANY } from "./types"


const company = container.get<CompanyInterface>(COMPANY)

console.log(company.getEmployee())