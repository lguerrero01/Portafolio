import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import Panzoom, { PanzoomObject } from '@panzoom/panzoom';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { Proyect } from 'src/app/shared/models/experiance.model';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  public allProjects: Proyect[] = [];
  public projects: Proyect[] = [];
  public categories: string[] = [];
  public activeCategory = 'Todos';
  private techIcons: { [key: string]: string } = {};

  // Gallery modal state
  public opened: Proyect | null = null;
  public images: string[] = [];
  public index = 0;

  private pz: PanzoomObject | null = null;
  private pzHost: HTMLElement | null = null;

  @ViewChild('galleryImg')
  set galleryImg(ref: ElementRef<HTMLImageElement> | undefined) {
    if (ref) {
      this.setupPanzoom(ref.nativeElement);
    }
  }

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.allProjects = this.profileService.getProjects;
    this.techIcons = this.profileService.techIcons;
    this.categories = [
      'Todos',
      ...Array.from(new Set(this.allProjects.map((p) => p.category))),
    ];
    this.projects = this.allProjects;
  }

  public filter(category: string): void {
    this.activeCategory = category;
    this.projects =
      category === 'Todos'
        ? this.allProjects
        : this.allProjects.filter((p) => p.category === category);
  }

  public iconFor(tech: string): string {
    return this.techIcons[tech] || '';
  }

  // ---- Gallery modal ----
  public openGallery(project: Proyect): void {
    this.opened = project;
    this.images = project.gallery?.length
      ? project.gallery
      : project.imgUrl
      ? [project.imgUrl]
      : [];
    this.index = 0;
    document.body.style.overflow = 'hidden';
  }

  public closeGallery(): void {
    this.destroyPanzoom();
    this.opened = null;
    this.images = [];
    document.body.style.overflow = '';
  }

  public next(): void {
    if (this.images.length) {
      this.index = (this.index + 1) % this.images.length;
      this.pz?.reset();
    }
  }

  public prev(): void {
    if (this.images.length) {
      this.index = (this.index - 1 + this.images.length) % this.images.length;
      this.pz?.reset();
    }
  }

  public goTo(i: number): void {
    this.index = i;
    this.pz?.reset();
  }

  public zoomIn(): void {
    this.pz?.zoomIn({ animate: true });
  }

  public zoomOut(): void {
    this.pz?.zoomOut({ animate: true });
  }

  public resetZoom(): void {
    this.pz?.reset({ animate: true });
  }

  // ---- Panzoom wiring ----
  private setupPanzoom(img: HTMLImageElement): void {
    this.destroyPanzoom();
    this.pz = Panzoom(img, {
      maxScale: 5,
      minScale: 1,
      step: 0.5,
      animate: true,
      cursor: 'grab',
    });
    this.pzHost = img.parentElement;
    // wheel to zoom (desktop); pinch is handled natively by Panzoom (mobile)
    this.pzHost?.addEventListener('wheel', this.pz.zoomWithWheel);
  }

  private destroyPanzoom(): void {
    if (this.pz) {
      this.pzHost?.removeEventListener('wheel', this.pz.zoomWithWheel);
      this.pz.destroy();
      this.pz = null;
      this.pzHost = null;
    }
  }

  @HostListener('document:keydown', ['$event'])
  public onKeydown(e: KeyboardEvent): void {
    if (!this.opened) {
      return;
    }
    if (e.key === 'Escape') {
      this.closeGallery();
    } else if (e.key === 'ArrowRight') {
      this.next();
    } else if (e.key === 'ArrowLeft') {
      this.prev();
    }
  }
}
