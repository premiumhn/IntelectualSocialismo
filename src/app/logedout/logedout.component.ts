import { Component, OnInit } from '@angular/core';

import { ToastComponent } from '../shared/toast/toast.component';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-logedout',
  templateUrl: './logedout.component.html',
  styleUrls: ['./logedout.component.scss']
})
export class LogedoutComponent implements OnInit {

   constructor(public auth: AuthService,
              public toast: ToastComponent,
              private userService: UserService) { }

  ngOnInit() {
  }

}
