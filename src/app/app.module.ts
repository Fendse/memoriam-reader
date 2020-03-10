import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DialogueChunkComponent } from './dialogue-chunk/dialogue-chunk.component';
import { DialogueLineComponent } from './dialogue-line/dialogue-line.component';
import { Alt1PermissionsWarningComponent } from './alt1-permissions-warning/alt1-permissions-warning.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogueChunkComponent,
    DialogueLineComponent,
    Alt1PermissionsWarningComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
