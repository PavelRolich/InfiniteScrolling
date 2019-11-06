import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FactService } from './service/fact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Project';
  constructor(private http: HttpClient, private factService: FactService) {}
}
