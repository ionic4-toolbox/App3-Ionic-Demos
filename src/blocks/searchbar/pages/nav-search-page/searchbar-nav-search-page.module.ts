import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

import { SearchPage } from './search-page';

@NgModule({
  declarations: [
    SearchPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchPage)
  ]
})
export class SearchbarNavSearchPageModule {}