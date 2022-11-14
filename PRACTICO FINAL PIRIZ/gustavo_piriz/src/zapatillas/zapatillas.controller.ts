import { Controller } from '@nestjs/common';
import { ZapatillasService } from './zapatillas.service';

@Controller('zapatillas')
export class ZapatillasController {
    constructor(private readonly zapatillasService: ZapatillasService) {}

@GET()    
getZapatillas():string {
    return this.zapatillasService.getZapatillas();


@POST()  
postZapatillas(): string {
    return this.zapatillasService.postZapatillas();}  
}


}










