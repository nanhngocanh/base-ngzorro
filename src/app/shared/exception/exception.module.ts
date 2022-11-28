import { NgModule } from '@angular/core';

import { ExceptionRoutingModule } from './exception-routing.module';

import { Exception403Component } from './403.component';
import { Exception404Component } from './404.component';
import { Exception500Component } from './500.component';

@NgModule({
  imports: [ExceptionRoutingModule],
  declarations: [
    Exception403Component,
    Exception404Component,
    Exception500Component,
  ],
})
export class ExceptionModule {}
