import { Module } from '@nestjs/common';
import { TheMoviesDbController } from './the-movies-db.controller';
import { TheMoviesDbService } from './the-movies-db.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [TheMoviesDbController],
  providers: [TheMoviesDbService],
  imports:[HttpModule]
})
export class TheMoviesDbModule {}
