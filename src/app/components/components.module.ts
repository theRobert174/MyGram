import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from './post/post.component';
import { GridProfileComponent } from './grid-profile/grid-profile.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PostComponent,
    GridProfileComponent
  ],
  exports: [
    HeaderComponent,
    PostComponent,
    GridProfileComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
