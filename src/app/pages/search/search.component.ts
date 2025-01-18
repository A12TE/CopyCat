import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { Title,Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service:MovieApiServiceService,private title:Title,private meta:Meta) {
    this.title.setTitle('Search movies - showtime');
    this.meta.updateTag({name:'description',content:'search here movies like avatar,war etc'});
   }

  ngOnInit(): void {
  }

  searchResult:any;
  searchForm = new FormGroup({
    'movieName':new FormControl(null)
  });

//   submitForm() {
//     if (this.searchForm.valid) {
//         this.service.getSearchMovie(this.searchForm.value.movieName).subscribe(
//             (result: any) => {
//                 console.log(result, 'searchmovie##');
//                 // Assuming the array is located under result.results or similar
//                 this.searchResult = Array.isArray(result) ? result : result.results || [];
//                 console.log(this.searchResult)
//             },
//             (error) => {
//                 console.error('Error fetching movie data:', error);
//                 this.searchResult = []; // Reset to empty array on error
//             }
//         );
//     } else {
//         console.error('Form is invalid!');
//     }
// }


  submitForm()
  {
      console.log(this.searchForm.value,'searchform#');
      this.service.getSearchMovie(this.searchForm.value).subscribe((result)=>{
          console.log(result,'searchmovie##');
          this.searchResult = result.Search
          console.log(this.searchResult)
      });
  }

}
