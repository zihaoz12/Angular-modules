import { Component, OnInit } from '@angular/core';
import { User } from '../../interface/usersAPI.interface';
import { UserService } from '../../services/user.service';
import { FormBuilder, Validators, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  users:User[] = [];
  userForm:FormGroup = this.formBuilder.group({
    name:['',[Validators.required]],
    username:['', [Validators.required]],
    email:['', [Validators.required,
                Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")         
    ]],
    address: this.formBuilder.group({
      street:'',
      suite:'',
      city:'',
      zipcode:'',
      geo: this.formBuilder.group({
        lat: '',
        lng: ''
      })
    }),
    phone:['', [Validators.required,
                // Validators.pattern("^\d{3}-\d{3}-\d{4}$")
    ]],
    website:['', [Validators.required]],
    company:this.formBuilder.group({
      name:['',[Validators.required]],
      catchPhrase:'',
      bs:''
    })
  })
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe( (users:User[])=> { 
        this.users = users;
        console.log("Users:",this.users)
      }
    )
  }

  onSubmit(){
    const newUser:User = this.userForm.value;
    this.userService.postUser(newUser).subscribe(
      res => console.log('res:', res)
    )
  }

  get name(){
    return this.userForm.get('name')
  }
  get username(){
    return this.userForm.get('username')
  }
  get email(){
    return this.userForm.get('email')
  }
  get phone(){
    return this.userForm.get('phone')
  }
  get website(){
    return this.userForm.get('website')
  }
  get street(){
    return this.userForm.get('address.street')
  }
  get suite(){
    return this.userForm.get('address.suite')
  }
  get city(){
    return this.userForm.get('address.city')
  }
  get zipcode(){
    return this.userForm.get('address.zipcode')
  }

  get companyname(){
    return this.userForm.get('company.name')
  }

}
