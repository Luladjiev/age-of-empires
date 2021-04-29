import { Component, OnInit } from '@angular/core';
import { AgeOfEmpiresClientService } from '../../services/age-of-empires-client.service';
import { Observable } from 'rxjs';
import { Civilization } from '../../models/civilization';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  civilizations$: Observable<Array<Civilization>>;

  constructor(private dataSvc: AgeOfEmpiresClientService) {}

  ngOnInit(): void {
    this.civilizations$ = this.dataSvc.getCivilizations();
  }
}
