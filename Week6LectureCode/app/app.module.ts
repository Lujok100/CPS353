﻿import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
import { WebsitesAppComponent } from './websites-app.component'
import { WebsitesListComponent } from './websites/websites-list.component'
import { WebsiteThumbnailComponent } from './websites/website-thumbnail.component'
import { NavbarComponent } from './nav/navbar.component' 
import { WebsiteService } from './websites/shared/website.service'
import { WebsiteDetailsComponent } from './websites/website-details/website-details.component'
import { appRoutes } from './routes'
import { CreateWebsiteComponent } from './websites/create-website.component'
import { WebsitesListResolver } from './websites/websites-list-resolver.service'
import { LoginComponent } from './user/login.component'
import { FormsModule } from '@angular/forms'
import { AuthService} from './user/auth.service'
@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule],
    declarations: [WebsitesAppComponent,
        WebsitesListComponent,
        WebsiteThumbnailComponent,
        NavbarComponent,
        WebsiteDetailsComponent,
        CreateWebsiteComponent,
        LoginComponent],
    providers: [WebsiteService, WebsitesListResolver, AuthService],
    bootstrap: [WebsitesAppComponent]
})

export class AppModule {
}



