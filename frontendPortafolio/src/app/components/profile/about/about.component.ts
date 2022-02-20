import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/shared/services/profile.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public about1: string = '';
  public about2: string = '';

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.about1 = this.profileService.about;
    this.about2 = this.profileService.about2;
  }
}
