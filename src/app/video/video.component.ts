import { Component, OnInit,HostListener,Directive,HostBinding } from '@angular/core';
import { VideoService } from '../video/video.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})


export class VideoComponent  {

  video = {};
  FilterChecked = "checked";
  myVideoFeed = new Array();
  videoListLength: number = 10 ;

  constructor( private sanitizer: DomSanitizer , private videoService: VideoService ) {}

  loadVideo() {
      
    this.videoService.getVideo().subscribe(
     data => 
      { 
        var newarray = [];
        var  videoUrl;

        this.myVideoFeed = [];
        this.video = this.video
        for (var _i = 0; _i < this.videoListLength; _i++) {
            data.data[_i]
            this.myVideoFeed.push(data.data[_i]) 
            videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl("http://player.vimeo.com"+ data.data[_i].uri.replace('videos', 'video' ));
            this.myVideoFeed[_i].link = videoUrl;
            newarray.push(videoUrl);
            
        }
        }
    )
  }
  ngOnInit() {
    this.loadVideo();
  }

  onChange(selectedValue){
    console.info("Selected:",selectedValue);
    this.videoListLength = selectedValue;
    this.loadVideo();    
    
  }

    @HostListener('window:scroll', ['$event']) onScrollEvent($event){
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            const videoLenght = this.videoListLength == this.myVideoFeed.length;
            if (!videoLenght) {
                return
            } else {
                this.videoListLength ++; 
                setTimeout( () => this.loadVideo() ,1500 );
                
            }
        }
    } 

}
