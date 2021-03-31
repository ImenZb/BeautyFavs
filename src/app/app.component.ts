import { Component } from '@angular/core';
import { IUser } from './interfaces/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'beautyFavs';
  users:IUser[] = [{
                id:1,
                name: 'user1',
                username: 'username1',
                email: 'email1@gmail.com',
                address: {
                      street: 'rue 1',
                      suite: '',
                      city: 'Switzerland',
                      zipcode: '1204',
                      geo: {
                        lat: '',
                        lng: ''
                      }
                    },
                phone: '0790000000',
                photoUrl:'./assets/icons/profilFemal.svg',
                following:[],
                followers:[] 
              },
              {
                id:2,
                name: 'user2',
                username: 'username2',
                email: 'email2@gmail.com',
                address: {
                      street: 'rue 2',
                      suite: '',
                      city: 'Switzerland',
                      zipcode: '1201',
                      geo: {
                        lat: '',
                        lng: ''
                      }
                    },
                phone: '0790000002',
                photoUrl:'./assets/icons/profilFemal.svg',
                following:[],
                followers:[] 
              },
              {
                id:3,
                name: 'user3',
                username: 'username3',
                email: 'email3@gmail.com',
                address: {
                      street: 'rue 3',
                      suite: '',
                      city: 'Switzerland',
                      zipcode: '1224',
                      geo: {
                        lat: '',
                        lng: ''
                      }
                    },
                phone: '0790000003',
                photoUrl:'./assets/icons/profilMale.svg',
                following:[],
                followers:[] 
              }];
  
}
