import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from './post/post.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PostComponent
  ],
  exports: [
    HeaderComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
