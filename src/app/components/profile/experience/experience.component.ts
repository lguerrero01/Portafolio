import { Experiance } from './../../../shared/models/experiance.model';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/shared/services/profile.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  public workExp: Experiance[] = [];

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.workExp = this.profileService.experience;
  }
}
