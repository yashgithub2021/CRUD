import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CRUDComponent {
  data: any

  constructor(private service: UserService) { }

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
      window.location.reload()
    })
  }

  //To get Single Data
  getOneData(id: any) {
    this.service.getOneUser(id).subscribe(() => {

    })
  }
}
