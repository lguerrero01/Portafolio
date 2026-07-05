import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { SkillGroup } from 'src/app/shared/models/experiance.model';

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  public groups: SkillGroup[] = [];

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.groups = this.profileService.getSkillGroups;
  }
}
