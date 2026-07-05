import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/shared/services/profile.service';

@Component({
  selector: 'app-intro',
  standalone: false,
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  public cvUrlEn = '';
  public cvUrlEs = '';
  public fullName = '';
  public role = '';
  public tagline = '';
  public stats: { value: string; label: string }[] = [];
  public socials!: {
    github: string;
    linkedin: string;
    twitter: string;
    instagram: string;
    facebook: string;
  };

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.cvUrlEn = this.profileService.resumeUrlEn;
    this.cvUrlEs = this.profileService.resumeUrlEs;
    this.fullName = this.profileService.fullName;
    this.role = this.profileService.role;
    this.tagline = this.profileService.tagline;
    this.stats = this.profileService.stats;
    this.socials = this.profileService.socials;
  }
}
