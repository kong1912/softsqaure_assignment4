import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArmorComponent } from './armor/armor.component';
import { CharmComponent } from './charm/charm.component';
import { WeaponComponent } from './weapon/weapon.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArmorComponent, CharmComponent, WeaponComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment4';
}
