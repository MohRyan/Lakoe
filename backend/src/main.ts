import { ExpressAdapter } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as ngrok from '@ngrok/ngrok';
import * as multer from 'multer';
import * as fs from 'fs';
import * as express from 'express';
import * as http from 'http';
import * as https from 'https';
import { ShutdownObserver } from './utils/shutdown';

async function bootstrap() {
  // const httpsOptions = {
  //   key: fs.readFileSync('./src/cert/key.pem'),
  //   cert: fs.readFileSync('./src/cert/cert.pem'),
  // };

  // const server = express();
  // const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
  // await app.init();

  // app.enableCors();
  // app.use(multer({ dest: './uploads/' }).array('files'));

  // const httpServer = http.createServer(server);
  // const httpsServer = https.createServer(httpsOptions, server);

  // httpServer.listen(3000);
  // httpsServer.listen(443);

  // const shutdownObserver = app.get(ShutdownObserver);
  // shutdownObserver.addHttpServer(httpServer);
  // shutdownObserver.addHttpServer(httpsServer);

  // ngrok
  //   .connect({ addr: 3000, authtoken_from_env: true })
  //   .then((listener: { url: () => any }) =>
  //     console.log(`Ingress established at: ${listener.url()}`),
  //   );

  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
