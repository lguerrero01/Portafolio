///////////////////
// Modules
///////////////////
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
///////////////////
// Components
///////////////////
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { ProfileComponent } from './profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ReferenceComponent } from './reference/reference.component';
///////////////////
// Pipes
///////////////////
import { SplitPipe } from 'src/app/shared/pipes/split.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    IntroComponent,
    AboutComponent,
    SplitPipe,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    EducationComponent,
    ReferenceComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ProfileModule {}
