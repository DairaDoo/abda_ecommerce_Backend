import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        // Llama al constructor de la clase base PassportStrategy con la estrategia de autenticación de Passport.
        // En este caso, la estrategia es 'jwt', lo que indica que se utilizará la autenticación basada en JWT.
        super({
            // Configuración de la estrategia JWT.
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extrae el token JWT del encabezado de autorización de la solicitud.
            ignoreExpiration: false, // Indica si se debe ignorar la expiración del token JWT.
            secretOrKey: 'abc123' // Clave secreta utilizada para verificar la firma del token JWT.
        });
    }

    // Método para validar el payload del token JWT.
    validate(payload: any) {
        // Este método se llama cuando se valida con éxito un token JWT.
        // Generalmente, aquí se realizarían operaciones adicionales como verificar la validez del usuario, etc.
        
        // Imprime el payload del token JWT para propósitos de depuración.
        console.log("Inside JWT Strategy Validate");
        console.log(payload);

        // En este ejemplo, simplemente se devuelve el payload del token como está.
        return payload;
    }
}
