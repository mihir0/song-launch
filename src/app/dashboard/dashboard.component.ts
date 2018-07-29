import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  songTitle = '07 Yesterday';
  sites = [
    {'name' : 'Spotify', 'url' : 'http://www.spotify.com'},
    {'name' : 'Apple Music', 'url' : 'http://www.apple.com/music'},
    {'name' : 'Google Play', 'url' : 'http://www.play.google.com'},
    {'name' : 'Soundcloud', 'url' : 'http://www.soundcloud.com'}
  ];
  constructor() { }
  ngOnInit() {
  }
  onClick(site) {
    console.log(site.name + ' click');
    window.open(site.url, '_blank');
  }
}
