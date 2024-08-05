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
    MongooseModule.forRoot('mongodb+srv://juanp31223122:YQogtWMtHNqZ4QgZ@cluster0.5yqfeba.mongodb.net/inlazemovies?retryWrites=true&w=majority&appName=Cluster0'),
    UserModule,
    AuthModule,
    TheMoviesDbModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
