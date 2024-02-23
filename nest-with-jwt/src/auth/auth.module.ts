import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    // Importa PassportModule, que proporciona funcionalidades relacionadas con la autenticación de Passport.
    PassportModule,
    // Importa JwtModule para trabajar con tokens JWT en la aplicación.
    JwtModule.register({
      secret: 'abc123', // Clave secreta utilizada para firmar el token JWT.
      signOptions: { expiresIn: '1h' } // Opciones de firma del token JWT, como el tiempo de expiración.
    })
  ],
  // Declara los controladores que pertenecen a este módulo.
  controllers: [AuthController],
  // Declara los proveedores (servicios y estrategias de autenticación) que pertenecen a este módulo.
  providers: [AuthService, LocalStrategy, JwtStrategy]
})
export class AuthModule {}
