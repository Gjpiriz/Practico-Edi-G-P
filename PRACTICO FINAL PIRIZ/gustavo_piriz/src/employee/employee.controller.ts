import { Controller,GET,POST } from '@nestjs/common';
import {get} from'http'
import { EmployeeService } from './employee.service';

@Controller('apy/edi')
export class EmployeeController {


constructor(private readonly employeeService:EmployeeService){}

@GET()
getEmployee(): string{
    return this.employeeService.obtenerEmpleado()
}
@POST()  
postEmployee(): string {
    return this.employeeService.crearEmpleado()

}  
}



