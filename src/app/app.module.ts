import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
import { AppComponent } from './app.component';

FullCalendarModule.registerPlugins([
    dayGridPlugin,
    timeGridPlugin,
    listPlugin,
    interactionPlugin
]);

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FullCalendarModule // import the FullCalendar module! will make the FullCalendar component available
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
