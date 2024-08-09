import { Injectable } from '@angular/core';
import { Observable, throwError , catchError } from 'rxjs';
import { HttpClient  , HttpErrorResponse} from '@angular/common/http';
import { Post } from './model/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http  : HttpClient ) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    )
  }
  private handleError(error: HttpErrorResponse){
    let errorMessage = 'Unknown error';
    if(error.error instanceof ErrorEvent){
      errorMessage = `Error: ${error.error.message}`;
    }else{
      errorMessage = `Error Code: ${error.status} \n
      Message: ${error.message}`;
    }
    return throwError(() => Error(errorMessage));
  }
}
