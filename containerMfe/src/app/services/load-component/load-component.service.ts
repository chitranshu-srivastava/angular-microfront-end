
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CompItem } from '../../components';
import { CompOneComponent } from 'src/app/components/comp-one/comp-one.component';
import { CompTwoComponent } from 'src/app/components/comp-two/comp-two.component';
// import { config } from '../../config/config';
// import { ShipmentDeComponent } from 'src/app/components/shipment-de/shipment-de.component';
// import { ShipmentInComponent } from 'src/app/components/shipment-in/shipment-in.component';
// import { ShipmentJpComponent } from 'src/app/components/shipment-jp/shipment-jp.component';

@Injectable({
  providedIn: 'root',
})
export class LoadComponentService {
  apiEndPoint: string = 'http://httpstat.us/200?sleep=300';

  constructor(private http: HttpClient) {}

  APICall(): Observable<any> {
    return this.http.get(this.apiEndPoint);
  }

  getComponents() {
    
    return {
      JP: new CompItem(CompOneComponent, {}),
      IN: new CompItem(CompTwoComponent, {}),
    };
  }
}
