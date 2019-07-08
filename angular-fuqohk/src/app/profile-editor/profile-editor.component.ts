import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { VulnarabilitiesComponent } from '../vulnarabilities/vulnarabilities.component';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  vulnarabilitiesList = new VulnarabilitiesComponent();
  profileForm = this.fb.group({
    name: ['', Validators.required],
  });

  //checked
  onSubmit = () => {
  let userName = this.profileForm.controls['name'].value.toString();
  console.log(userName);
  (<any>this.vulnarabilitiesList).addVulnarability(userName);
}

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    
  }

}