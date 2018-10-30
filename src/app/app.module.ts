import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { TodoItemComponent } from "./components/todo-item/todo-item.component";

@NgModule({
  declarations: [AppComponent, HeaderComponent, TodoItemComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
