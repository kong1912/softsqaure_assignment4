import { Component } from '@angular/core';
import { MhwService } from '../mhw.service';
import { CommonModule } from '@angular/common';
import { Weapon } from '../interface';

@Component({
  selector: 'app-weapon',
  standalone: true,
  imports: [CommonModule],
  providers: [MhwService],
  templateUrl: './weapon.component.html',
  styleUrl: './weapon.component.css'
})
export class WeaponComponent {
  weapon!: Weapon

  constructor(private mhwService: MhwService) {}

  ngOnInit(): void {
    this.mhwService.getWeaponById(168).subscribe(data => {
      this.weapon = data;
      console.log(data)
    });
  }
}
