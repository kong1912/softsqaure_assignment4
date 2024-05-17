import { Component, OnInit } from '@angular/core';
import { MhwService } from '../mhw.service';
import { CommonModule } from '@angular/common';
import { Armor } from '../interface';

@Component({
  selector: 'app-armor',
  standalone: true,
  imports: [CommonModule],
  providers: [MhwService],
  templateUrl: './armor.component.html',
  styleUrl: './armor.component.css'
})
export class ArmorComponent {
  armors: Armor[] = []

  constructor(private mhwService : MhwService) {}

  ngOnInit(): void {
    this.mhwService.getSpecificArmors([1669, 1670, 1671, 1672, 1673]).subscribe(data => {
      this.armors = data;
      console.log(data)
    });
  }


}
