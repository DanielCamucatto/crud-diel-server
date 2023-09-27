import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configurar o CORS
  app.enableCors({
    origin: 'http://localhost:3001', // Substitua pela origem do seu cliente (o frontend)
    credentials: true, // Se você estiver usando autenticação com cookies ou cabeçalhos personalizados
  });

  await app.listen(3000);
}
bootstrap();

