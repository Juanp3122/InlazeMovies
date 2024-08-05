import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TheMoviesDbService } from './the-movies-db.service';
import { Observable } from 'rxjs';


@ApiTags('movies')
@Controller('the-movies-db')
export class TheMoviesDbController { 


    constructor(private theMoviesDbService:TheMoviesDbService){}


    @Get(':category')
    async getTrendingMovies(@Param('category') category:string):Promise<Observable<any>> {
       return (await this.theMoviesDbService.getTrendingMovies(category))
    }

    @Get(':id')
    async getMovieDetail(@Param('id') id:string):Promise<Observable<any>> {
        const response =  this.theMoviesDbService.getMovieDetail(id)
        return response;


    }
}
