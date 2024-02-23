import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from 'passport-local'; // Importa la estrategia local de Passport.
import { AuthService } from "../auth.service";
import { Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        // Llama al constructor de la clase base PassportStrategy con la estrategia local de Passport.
        super();
    }

    validate(username: string, password: string) {
        // Método para validar las credenciales de usuario.
        // Se llama automáticamente cuando se usa esta estrategia de autenticación.

        // Llama al método validateUser del servicio AuthService para validar las credenciales.
        const user = this.authService.validateUser({ username, password });

        // Si no se encuentra el usuario (es decir, si el método validateUser devuelve null o undefined),
        // se lanza una UnauthorizedException, indicando que la autenticación ha fallado.
        if (!user) {
            throw new UnauthorizedException();
        }

        // Si el usuario se encuentra en la base de datos y las credenciales son válidas,
        // se devuelve el usuario autenticado.
        return user;
    }
}
