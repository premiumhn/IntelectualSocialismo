  import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  providers: [PostService]
})
export class PostsComponent implements OnInit {

  post = {};
  posts = [];
  isLoading = true;
  isEditing = false;

  addPostForm: FormGroup;
  title = new FormControl('', Validators.required);
  cont = new FormControl('', Validators.required);

  constructor(private auth: AuthService,
  			  private postService: PostService,
              private formBuilder: FormBuilder,
              private router: Router,
              public toast: ToastComponent) { }

  ngOnInit() {
  	this.getPosts();
    this.addPostForm = this.formBuilder.group({
      title: this.title,
      cont: this.cont
    });
  }
	 getPosts() {
	    this.postService.getPosts().subscribe(
	      data => this.posts = data.reverse(),
	      error => console.log(error),
	      () => this.isLoading = false
      );
	  }

  addPost() {
    this.postService.addPost(this.addPostForm.value).subscribe(
      res => {
        const newPost = res.json();
        this.posts.unshift(newPost);
        this.addPostForm.reset();
        this.toast.setMessage('item added successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  enableEditing(post) {
    this.isEditing = true;
    this.post = post;
  }

  editPost(post) {
    this.postService.editPost(post).subscribe(
      res => {
        this.isEditing = false;
        this.post = post;
        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  deletePost(post) {
    if (window.confirm('¿Seguro que desea borrar esta publicacion de manera permanente?')) {
      this.postService.deletePost(post).subscribe(
        res => {
          const pos = this.posts.map(elem => elem._id).indexOf(post._id);
          this.posts.splice(pos, 1);
          this.toast.setMessage('iPublicación realizada satisfactoriamente.', 'success');
        },
        error => console.log(error)
      );
    }
  }
}
