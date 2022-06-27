import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostPagePageRoutingModule } from './post-page-routing.module';

import { PostPagePage } from './post-page.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostPagePageRoutingModule,
    ComponentsModule
  ],
  declarations: [PostPagePage]
})
export class PostPagePageModule {}
