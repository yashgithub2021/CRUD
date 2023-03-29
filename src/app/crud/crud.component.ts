import { Component, OnInit, TemplateRef } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { NgForm } from '@angular/forms'
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ActivatedRoute } from '@angular/router';
import { EditComponent } from '../edit/edit.component';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CRUDComponent implements OnInit {
  data: any

  UserObj: any
  id: any

  constructor(private service: UserService, private _active: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchData()
  }

  //To get User
  fetchData() {
    this.service.getData().subscribe((res) => {
      this.data = res
    })
  }

  //To add User
  addUser(val: any) {
    const data = {
      name: val.name,
      email: val.email,
      phone: val.phone,
      city: val.city
    }
    this.service.addData(data).subscribe(() => {
      window.location.reload()
    })
  }

  //To Delete User
  delete(id: any) {
    this.service.delData(id).subscribe(() => {
      this.fetchData()
    })
  }

  //To get Single Data
  getOneData(id: any) {
    this.service.getOneUser(id).subscribe(() => {

    })
  }
}
