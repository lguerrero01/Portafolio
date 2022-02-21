import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/shared/services/profile.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  public cvUrlEn: string = '';
  public cvUrlEs: string = '';
  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.cvUrlEn = this.profileService.resumeUrlEn;
    this.cvUrlEs = this.profileService.resumeUrlEs;
  }
}
