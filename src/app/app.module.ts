import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { FriendComponent } from './friend/friend.component';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    FriendComponent,
    BookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
