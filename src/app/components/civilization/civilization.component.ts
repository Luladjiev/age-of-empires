import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgeOfEmpiresClientService } from '../../services/age-of-empires-client.service';

@Component({
  selector: 'app-civilization',
  templateUrl: './civilization.component.html',
  styleUrls: ['./civilization.component.scss'],
})
export class CivilizationComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private dataSvc: AgeOfEmpiresClientService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('civId');

    this.dataSvc.getCivilization(parseInt(id, 10)).subscribe(console.log);
  }
}
