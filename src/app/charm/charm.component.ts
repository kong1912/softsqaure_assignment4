import { Component, OnInit } from '@angular/core';
import { MhwService } from '../mhw.service';
import { Charm } from '../interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-charm',
  standalone: true,
  imports: [CommonModule],
  providers: [MhwService],
  templateUrl: './charm.component.html',
  styleUrl: './charm.component.css'
})
export class CharmComponent implements OnInit{
  charm!: Charm

  constructor(private mhwService : MhwService) {}

  ngOnInit(): void {
    this.mhwService.getCharmById(234).subscribe(data => {
      this.charm= data;
      console.log(data)
    });
  }
}
