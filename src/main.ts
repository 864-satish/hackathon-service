import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { connectDb } from './database/hackathon.database';
// import { HackathonData } from './databse/hackathon.db';

const port = 3002;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //connect to db
  // new HackathonData();
  connectDb();
  await app.listen(port);
  console.log(`Hackathon service is ready @ http://localhost:3002`);
}
bootstrap();
