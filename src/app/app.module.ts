import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import {PrincipalPage, 
        Page2Page, 
        Page3Page, 
        SettingsPage, 
        Settings2Page, 
        TabsPage, 
        ModalPage } from '../pages/index.pages';

@NgModule({
  declarations: [
    MyApp,
    PrincipalPage, 
    Page2Page, 
    Page3Page, 
    SettingsPage, 
    Settings2Page, 
    TabsPage, 
    ModalPage 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PrincipalPage, 
    Page2Page, 
    Page3Page, 
    SettingsPage, 
    Settings2Page, 
    TabsPage, 
    ModalPage 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
