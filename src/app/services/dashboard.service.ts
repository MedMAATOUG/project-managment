import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { GaleryItem } from '../models/galery-item';
import { GaleryEventItem } from '../models/galery-event-item';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  tasks! : Task[]
  gallery!: GaleryItem[]
  gallerYEvents! :{top : GaleryEventItem , bottum : GaleryEventItem}[]
  RecommendedCourseData! : {title : string , number : number, color : string}[]
  activeLesson !:{title : string , language : string , progression : number , image : string} []
  constructor() { 
    
  }

  getTasks(): void{
    this.tasks = [
      {
        title : 'Courses',
        number : 37 ,
        icon : 'dx-icon-background'
      } ,
      {
        title : 'Certification',
        number : 6 ,
        icon : 'dx-icon-bookmark'
      } ,
      {
        title : 'Avg. Score',
        number : 4.7 ,
        icon : 'dx-icon-gift'
      } ,
      {
        title : 'Hours Learned',
        number : 822 ,
        icon : 'dx-icon-clock'
      } ,
  ]
  }

  getGalleryData():void {
    this.gallery =  [
      {
        title : 'Html',
        //inducator value 
        inducator : {
          topic : 3 , 
          min : 50 ,
          speakers : 1,
          student : 72
        },
        chartData : [{
          course : 'complete',
          status : 40,
        } , 
        {
          course : 'incomplete',
          status : 60 , //refrence value
          
        }
      ]
      },
  
      {
        title : 'CSS',
        //inducator value 
        inducator : {
          topic : 10 , 
          min : 70 ,
          speakers : 3,
          student : 66
        },
        chartData : [{
          course : 'complete',
          status : 80,
        } , 
        {
          course : 'incomplete',
          status : 10 , //refrence value
        }
      ]
      },
      {
        title : 'JavaScript',
        //inducator value 
        inducator : {
          topic : 12 , 
          min : 62 ,
          speakers : 1,
          student : 33
        },
        chartData : [{
          course : 'complete',
          status : 95,
        } , 
        {
          course : 'incomplete',
          status : 5 , //refrence value
          
        }
      ]
      },

      {
        title : 'Python',
        //inducator value 
        inducator : {
          topic : 14 , 
          min : 12 ,
          speakers : 2,
          student : 120
        },
        chartData : [{
          course : 'complete',
          status : 10,
        } , 
        {
          course : 'incomplete',
          status : 90 , //refrence value
          
        }
      ]
      },
    ]
  }
  getGalleryEventData():void{
    this.gallerYEvents = [
      {
        top : {
          title : 'Food',
          icon : 'dx-icon-food',
          indicators : {
            topic : 5 ,
            min : 14 ,
            students : 40 ,
            speakers : 6,
          },
          colors : {base : '#50CD89', background : '#E8FFF3' }
        }, 
        bottum :{
          title : 'Running',
          icon : 'dx-icon-runner',
          indicators : {
            topic : 7 ,
            min : 9 ,
            students : 25 ,
            speakers : 7,
          },
          colors : {base : '#8DCFFF', background : '#EEF6FF' }

        }
      },

      {
        top : {
          title : 'Travel',
          icon : 'dx-icon-airplane',
          indicators : {
            topic : 6 ,
            min : 12 ,
            students : 20 ,
            speakers : 2,
          },
          colors : {base : '#5B2C6F', background : '#D7BDE2' }

        }, 
        bottum :{
          title : 'Party',
          icon : 'dx-icon-music',
          indicators : {
            topic : 2 ,
            min : 19 ,
            students : 17 ,
            speakers : 2,
          },
          colors : {base : '#F1416C', background : '#FFF5F8' }

        }
      },

      {
        top : {
          title : 'Racing',
          icon : 'dx-icon-car',
          indicators : {
            topic : 18 ,
            min : 5 ,
            students : 30 ,
            speakers : 4,
          },
          colors : {base : '#797D7F', background : '#F2F3F4' }


        }, 
        bottum :{
          title : 'Shopping',
          icon : 'dx-icon-cart',
          indicators : {
            topic : 5 ,
            min : 5 ,
            students : 11 ,
            speakers : 1,
          },
          colors : {base : '#D35400', background : '#EDBB99' }
          
        }
      }


    ]
  }

  getRecommendedCourseData():void {
    this.RecommendedCourseData = [
      {
        title : 'UI/UX Design',
        number : 40,
        color : '#F1416C'
      },
      {
        title : 'QA Analysis',
        number : 18,
        color : '#50CD89'
      },
      {
        title : 'Web Development',
        number : 120,
        color : '#7239EA'
      },
      {
        title : 'Marketing',
        number : 50,
        color : '#3E97FF'
      },
      {
        title : 'Philosophy',
        number : 24,
        color : '#FFC700'
      },
      {
        title : 'Mathematics',
        number : 24,
        color : '#071437'
      },
    ]
  }
  getActiveLessonData(){
    this.activeLesson = [
      {
        title : 'Laravel',
        language : 'PHP Framework',
        progression : 65 , 
        image : '../assets/images/laravel.svg'
      },
      {
        title : 'Vue 3',
        language : 'JS Framework',
        progression : 87, 
        image : '../assets/images/vue.svg'
      },
      {
        title : 'Bootstrap 5',
        language : 'CSS Framework',
        progression : 44 , 
        image : '../assets/images/bootstrap.svg'
      },
      {
        title : 'Angular 13',
        language : 'JS Framework',
        progression : 70 , 
        image : '../assets/images/angular.svg'
      },
      {
        title : 'Spring',
        language : 'Java Framework',
        progression : 15 , 
        image : '../assets/images/spring.svg'
      },
      {
        title : 'TypeScript',
        language : 'Better Tooling',
        progression : 82 , 
        image : '../assets/images/ts.svg'
      }
    ]
  }



}
