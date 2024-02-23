import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";   
import { Observable } from "rxjs";

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        // Este método se llama cuando se intenta determinar si la solicitud debe ser autorizada.
        // ExecutionContext proporciona información sobre la solicitud HTTP entrante.
        console.log("Inside JWT AuthGuard canActivate");
        
        // Llama al método canActivate de la clase base AuthGuard, 
        // que maneja la lógica de autenticación basada en JWT.
        return super.canActivate(context);
    }
}
