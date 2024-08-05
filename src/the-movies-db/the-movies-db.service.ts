import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { map } from 'rxjs';
@Injectable()
export class TheMoviesDbService {

    constructor(private readonly httpService: HttpService) { }

    async getTrendingMovies(category: string) {

        const headers = {
            'Authorization': `Bearer ${process.env.TOKEN_TMDB}`,
          };
        const url = process.env.URL_TMDB
        
        const response =  this.httpService.get(`${url}3/movie/${category}?language=en-US&page=1`,{headers}).pipe(map((resp) => resp.data))
        return response;


    }
    async getMovieDetail(id: string) {

        const headers = {
            'Authorization': `Bearer ${process.env.TOKEN_TMDB}`,
          };
        const url = process.env.URL_TMDB       
        const response =  this.httpService.get(`${url}3/movie/${id}`,{headers}).pipe(map((resp) => resp.data))
        return response;


    }


}
