import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-kpi-card',
  templateUrl: './kpi-card.component.html',
  styleUrls: ['./kpi-card.component.css']
})
export class KpiCardComponent implements OnInit {
  @Input() title;
  @Input() color;
  @Input() number;

  constructor() { }

  ngOnInit(): void {
  }

}
