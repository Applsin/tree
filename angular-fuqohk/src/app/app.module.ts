import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { VulnarabilitiesComponent } from './vulnarabilities/vulnarabilities.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, ProfileEditorComponent, VulnarabilitiesComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
