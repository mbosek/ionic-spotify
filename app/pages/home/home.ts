import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [SpotifyService]
})
export class HomePage {

  private searchStr: string;
  private results;

  constructor(private navCtrl: NavController, private spotifyService: SpotifyService) {
  
  }

  ngOnInit() {
    this.spotifyService.searchMusic('Eminem').subscribe(res => {
      this.results = res.artists.items;
      console.log(this.results)
    });
  }

}
