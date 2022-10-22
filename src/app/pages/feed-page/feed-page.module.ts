import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FeedPagePageRoutingModule } from './feed-page-routing.module';
import { FeedPagePage } from './feed-page.page';

import { ComponentsModule } from '../../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedPagePageRoutingModule,
    ComponentsModule
  ],
  declarations: [FeedPagePage]
})
export class FeedPagePageModule {}
