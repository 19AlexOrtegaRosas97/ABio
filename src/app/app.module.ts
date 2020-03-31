import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterialModule } from 'src/app/material'
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './common/home/home.component'
import { JobsComponent } from './common/jobs/jobs.component';
import { SchoolComponent } from './common/school/school.component';
import { LanguageComponent } from './common/language/language.component';
import { ObjetiveComponent } from './common/objetive/objetive.component';
import { QualitiesComponent } from './common/qualities/qualities.component';
import { InfoExtraComponent } from './common/info-extra/info-extra.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const AR_RRoutes: Routes = [
  {path: 'homeS', component: HomeComponent},
  {path: 'homeE', component: HomeComponent},
  {path: 'info', component: InfoExtraComponent},
  {path: 'jobs', component: JobsComponent},
  {path: 'language', component: LanguageComponent},
  {path: 'objetive', component: ObjetiveComponent},
  {path: 'school', component: SchoolComponent},
  {path: 'qualities', component: QualitiesComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LanguageComponent,
    SchoolComponent,
    InfoExtraComponent,
    ObjetiveComponent,
    JobsComponent,
    QualitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    //RouterModule.forRoot(rutas,{ enableTracing: true }),
    RouterModule.forRoot(AR_RRoutes, { useHash: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
