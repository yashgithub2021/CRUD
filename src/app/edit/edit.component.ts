import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  id: any
  UserObj: any
  modalRef?: BsModalRef;
  data: any
  constructor(private service: UserService, private modalService: BsModalService, private _active: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this._active.paramMap.subscribe(par => {
      this.id = par.get('id');
      this.service.getOneUser(this.id).subscribe((res) => {
        this.UserObj = { ...res }
      })
    })
  }

  //Update user
  Update(value: any) {
    const UserObj = {
      id: this.id,
      name: value.name,
      email: value.email,
      phone: value.phone,
      city: value.city
    }
    this.service.update(UserObj).subscribe(() => { })
    this.route.navigate(['/'])
    this.fetchData()
  }

  fetchData() {
    this.service.getData().subscribe((res) => {
      this.data = res
    })
  }
}
