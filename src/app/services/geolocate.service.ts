import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';
import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeolocateService {
  apiKey = environment.opencageapikey;
  apiurl = 'https://api.opencagedata.com/geocode/v1/json';

  constructor(private _http: HttpClient) { }

  async geolocateMe(){
    const coords = await this.getCurrentPosition();
    return this.reverseGeolocate(coords.lat, coords.long)
  }

  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    return {lat: coordinates.coords.latitude, long: coordinates.coords.longitude};
  }

  async reverseGeolocate(lat: number, long:number){
    const requesturl = this.apiurl
      + '?'
      + 'key=' + this.apiKey
      + '&q=' + encodeURIComponent(lat + ',' + long)
      + '&pretty=1'
      + '&no_annotations=1';
  
    // see full list of required and optional parameters:
    // https://opencagedata.com/api#forward
    const response:any = await this._http.get(requesturl).pipe(first()).toPromise();
    return {town: response?.results[0]?.components?.village || response?.results[0]?.components?.town, state: response?.results[0]?.components?.state};
  }
}
