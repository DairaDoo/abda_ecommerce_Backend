import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';

@Module({
  // Importa el módulo AuthModule, que encapsula la funcionalidad relacionada con la autenticación.
  imports: [AuthModule],
  // No se declaran controladores en este módulo, ya que todos los controladores están definidos en otros módulos importados.
  controllers: [],
  // No se declaran proveedores en este módulo, ya que todos los proveedores están definidos en otros módulos importados.
  providers: [],
})
export class AppModule {} 
