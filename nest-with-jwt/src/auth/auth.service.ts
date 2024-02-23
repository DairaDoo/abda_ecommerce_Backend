import { Injectable } from '@nestjs/common';
import { AuthPayLoadDto } from './dto/auth.dto'; // Importa el DTO que define la estructura del payload de autenticación.
import { JwtService } from '@nestjs/jwt';

// Datos ficticios de usuarios para usar en la función validateUser.
const fakeUsers = [
    {
        id: 1,
        username: 'Dairan',
        password: 'password'
    },
    {
        id: 2,
        username: 'Abimael',
        password: 'password'
    }
];

@Injectable()
export class AuthService {

    constructor(private jwtService: JwtService) {}

    // Método para validar las credenciales del usuario.
    validateUser({username, password}: AuthPayLoadDto) {
        console.log("Inside LocalStrategy");

        // Busca un usuario en los datos ficticios que coincida con el nombre de usuario proporcionado.
        const findUser = fakeUsers.find((user) => user.username === username);

        // Si no se encuentra ningún usuario con el nombre de usuario proporcionado, devuelve null.
        if (!findUser) {
            return null;
        }

        // Si se encuentra el usuario, verifica si la contraseña proporcionada coincide con la contraseña del usuario.
        if (password === findUser.password) {
            // Si las contraseñas coinciden, firma un token JWT utilizando los datos del usuario (excepto la contraseña).
            // y lo devuelve como resultado.
            const { password, ...userWithoutPassword } = findUser; // Se excluye la contraseña del objeto de usuario.
            return this.jwtService.sign(userWithoutPassword); // Firma un token JWT utilizando los datos del usuario.
        }
    }
}
