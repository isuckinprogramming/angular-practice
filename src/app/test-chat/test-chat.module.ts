import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { TestChatComponent } from "./test-chat.component";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [
    TestChatComponent
  ],
  imports: [
    FormsModule, BrowserModule
  ],
  providers: [],
  bootstrap: [TestChatComponent]
})

export class TestChatModule { };
