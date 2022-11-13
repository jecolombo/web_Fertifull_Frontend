import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})


export class NavbarComponent implements OnInit {
  
  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true)
    document.body.style.setProperty('--navbar-scroll-text', "white");
  }
   
  scroll = (): void => {

   let scrollHeigth;
  
   
   if(window.innerWidth < 250){
    scrollHeigth = 150;
   }else if(window.innerWidth < 500 && window.innerWidth > 350){
    scrollHeigth = 250;
   }else if(window.innerWidth < 700 && window.innerWidth > 500){
    scrollHeigth = 350;
   }else if(window.innerWidth < 1000 && window.innerWidth > 700){
    scrollHeigth = 500;
   }else{
     scrollHeigth = 650;
   }

    if(window.scrollY >= scrollHeigth){
      document.body.style.setProperty('--navbar-scroll', "white"); 
      document.body.style.setProperty('--navbar-scroll-text', "black");
      document.body.style.setProperty('--navbar-scroll-text-shadow', "none");
      document.body.style.setProperty('--navbar-scroll-shadow', "0px 6px 12px -5px #000000");
      document.body.style.setProperty('--navbar-scroll-img',"url(/assets/img/background_flower1.png)");
      
    }else if(window.scrollY < scrollHeigth){
      document.body.style.setProperty('--navbar-scroll', "transparent");
      document.body.style.setProperty('--navbar-scroll-text', "white");
      document.body.style.setProperty('--navbar-scroll-text-shadow', "0px 6px 12px -5px #000000");
      document.body.style.setProperty('--navbar-scroll-shadow', "none");
      document.body.style.setProperty('--navbar-scroll-img',"none");
      
    }
  }
  
  
}
