import { EducationData } from './../../../shared/models/experiance.model';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/shared/services/profile.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  public educationData: EducationData[] = [];
  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.educationData = this.profileService.educationData;
  }
}
