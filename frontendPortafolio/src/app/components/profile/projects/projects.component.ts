import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/shared/services/profile.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  public config: any;
  public projects: any = [];

  constructor(private profileService: ProfileService) {}
  ngOnInit() {
    this.projects = this.profileService.getProjects;
    this.config = {
      itemsPerPage: 3,
      currentPage: 1,
      totalItems: this.projects.length,
    };
  }

  public pageChanged(event: any) {
    this.config.currentPage = event;
  }
}
