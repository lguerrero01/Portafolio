import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/shared/services/profile.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  public skills: any;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.skills = this.profileService.skills;
  }
}
