import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users/user.service';
import { PostService } from "../../services/post/post.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UsersService, PostService]
})
export class UsersComponent implements OnInit {

  users: any;
  posts: any;

  constructor(
    private _postService: PostService,
    private _usersService: UsersService,
    
    ) { 
      this.getUsers();
      this.getPosts();
    }

    getPosts(){

        this._postService.getPost().subscribe(

          response => {
            this.posts = response.data;
            console.log(response);
          }, error => {
            console.log(error);
          }
        )
    }

    getUsers() {
      this._usersService.getUsers().subscribe(
        response => {
          this.users = response.data;
           console.log(response);
        }, error => {
          console.log(error);
        }
      )
    }


  ngOnInit(): void {
  }

}