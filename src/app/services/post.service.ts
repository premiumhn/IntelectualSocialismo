import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getPosts(): Observable<any> {
    return this.http.get('/api/posts').map(res => res.json());
  }

  countPosts(): Observable<any> {
    return this.http.get('/api/posts/count').map(res => res.json());
  }

  addPost(post): Observable<any> {
    return this.http.post('/api/post', JSON.stringify(post), this.options);
  }

  getPost(post): Observable<any> {
    return this.http.get(`/api/post/${post._id}`).map(res => res.json());
  }

  editPost(post): Observable<any> {
    return this.http.put(`/api/post/${post._id}`, JSON.stringify(post), this.options);
  }

  deletePost(post): Observable<any> {
    return this.http.delete(`/api/post/${post._id}`, this.options);
  }

}
