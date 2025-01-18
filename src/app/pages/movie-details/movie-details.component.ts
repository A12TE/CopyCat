import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { Title,Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  

  constructor(private service:MovieApiServiceService,private router:ActivatedRoute,private title:Title,private meta:Meta) { }
  getMovieDetailResult:any;

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('imdbID');
    console.log(getParamId,'getparamid#');
  
    this.getMovie(getParamId);
 
  }


  getMovie(id:any){
    this.service.getMovieDetails(id).subscribe(async(result)=>{
        console.log(result,'getmoviedetails#');
        this.getMovieDetailResult = await result;

        // updatetags
        this.title.setTitle(`${this.getMovieDetailResult.Title} | ${this.getMovieDetailResult.tagline}`);
        this.meta.updateTag({name:'title',content:this.getMovieDetailResult.Title});
        this.meta.updateTag({name:'description',content:this.getMovieDetailResult.overview});
     
       
    });
  }

  


}
