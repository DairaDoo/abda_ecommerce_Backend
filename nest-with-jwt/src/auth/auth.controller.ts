import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalGuard } from './guards/local.guard';
import { Request } from 'express';
import { JwtAuthGuard } from './guards/jwt.guard';

@Controller('auth') // Define la raíz de las rutas manejadas por este controlador como '/auth'.
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login') // Define una ruta POST '/auth/login' para el inicio de sesión.
    @UseGuards(LocalGuard) // Utiliza el guardia LocalGuard para esta ruta.
    login(@Req() req: Request) {
        // Maneja la solicitud de inicio de sesión y devuelve el usuario autenticado desde el objeto Request.
        return req.user; // Retorna el usuario autenticado.
    }

    @Get('status') // Define una ruta GET '/auth/status' para obtener el estado de autenticación.
    @UseGuards(JwtAuthGuard) // Utiliza el guardia JwtAuthGuard para esta ruta.
    status(@Req() req: Request) {
        // Maneja la solicitud de estado de autenticación y devuelve el usuario autenticado desde el objeto Request.
        console.log("Inside AuthController status method.");
        console.log(req.user); // Imprime el usuario autenticado en la consola para propósitos de depuración.
        return req.user; // Retorna el usuario autenticado.
    }
}
