import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'poke-list';
  data:any = []

  constructor(private http: HttpClient)  {}

ngOnInit() {
  this.getData()
}

getData() {
    const url ='https://pokeapi.co/api/v2/pokemon?limit=151&offset=0/'
    this.http.get(url).pipe(
      map((data:any) => data.results)
    ).subscribe((res)=>{
      this.data = res
      console.log(this.data)
      })
  }
}
