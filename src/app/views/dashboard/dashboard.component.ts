import { Component, HostListener, ViewChild } from '@angular/core';
import { CourseInfo } from 'src/app/models/course-info';
import { Task } from 'src/app/models/task';
import { DashboardService } from 'src/app/services/dashboard.service';
import { GaleryItem } from 'src/app/models/galery-item';
import { DxGalleryComponent, DxPieChartComponent } from 'devextreme-angular';
import { GaleryEventItem } from 'src/app/models/galery-event-item';
import { SettingsService } from 'src/app/services/settings.service';
import { Observable, Subject, map, takeUntil } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  private baseColor: string = '#3e97ff';
  private $destroy : Subject<void> = new Subject();
  public galleryWidth: number = 500;
  public cardsData!: Task[];
  public isDarkMode: boolean = false;
  public galleryData!: GaleryItem[];
  public galleryEventData!: { top: GaleryEventItem; bottum: GaleryEventItem }[];
  public recommendedCourse!: { title: string; number: number; color: string }[];
  public activeLesson!: {
    title: string;
    language: string;
    progression: number;
    image: string;
  }[];
  valueText!: string;
  courseProgress: any[] = [
    {
      course: 'QA Analysis',
      progress: 64,
    },
    {
      course: 'Web Dev',
      progress: 80,
    },
    {
      course: 'Math',
      progress: 10,
    },
    {
      course: 'Front-end Dev',
      progress: 10,
    },
    {
      course: 'Physics',
      progress: 10,
    },
    {
      course: 'Phylosophy',
      progress: 10,
    },
  ];

  @ViewChild('gallery') gallery!: DxGalleryComponent;
  @ViewChild('pieChart') pieChart!: DxPieChartComponent;

  public datasource!: CourseInfo[];
  constructor(private dashboardService: DashboardService , private settingService : SettingsService) {
    this.getCardsData();
    this.getGalleryData();
    this.getGalleryEventData();
    this.getRecommandedCourse();
    this.getActiveLesson();
    this.getMode().subscribe(d=>console.log(d));
  }
  private getCardsData() {
    this.dashboardService.getTasks();
    this.cardsData = this.dashboardService.tasks;
  }

  private getGalleryData(): void {
    this.dashboardService.getGalleryData();
    this.galleryData = this.dashboardService.gallery;
  }

  private getGalleryEventData(): void {
    this.dashboardService.getGalleryEventData();
    this.galleryEventData = this.dashboardService.gallerYEvents;
  }

  private getRecommandedCourse(): void {
    this.dashboardService.getRecommendedCourseData();
    this.recommendedCourse = this.dashboardService.RecommendedCourseData;
  }
  private getActiveLesson() {
    this.dashboardService.getActiveLessonData();
    this.activeLesson = this.dashboardService.activeLesson;
  }

  private getMode():Observable<boolean> {
    return this.settingService.getActiveMode().pipe(
      takeUntil(this.$destroy),
      map((mode , err ) => {
      console.log('err :' , err) ;
         return this.isDarkMode = mode 
    } ))
  }

  public customizePoint = (point: any) => {
    const color = point.series.getPointsByArg(point.argument)[0].getColor();
    // console.log('point :' , point)
    console.log(color);
    if (point.argument === 'incomplete') {
      return { color: '#f5f5f5' };
    }

    if (point.argument === 'complete') {
      switch (true) {
        case point.value < 25:
          return { color: '#F90100' };
          break;
        case point.value >= 25 && point.value < 50:
          return { color: '#ff7800' };
          break;
        case point.value >= 50 && point.value < 90:
          return { color: '#458B00' };
          break;
        case point.value >= 90:
          return { color: '#0D54FF' };
          break;
      }
    }
    return color;
  };
  public handleColor(status: any) {
    if (status > 50) {
      this.baseColor = '#ff000';
    }
  }

  public format(ratio: any) {
    return `${ratio * 100}%`;
  }


}
