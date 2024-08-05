import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { TheMoviesDbModule } from './the-movies-db/the-movies-db.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
    MongooseModule.forRoot(process.env.MongoURL),
    UserModule,
    AuthModule,
    TheMoviesDbModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
