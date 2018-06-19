import { NgModule } from '@angular/core';
import { SessionDetail } from './session-detail';
import { IonicPageModule } from "ionic-angular";

@NgModule({
  declarations: [
    SessionDetail
  ],
  imports: [
    IonicPageModule.forChild(SessionDetail)
  ],
  entryComponents: [
    SessionDetail
  ],
  providers: []
})
export class ItemSessionDetailModule {}