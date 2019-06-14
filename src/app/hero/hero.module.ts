import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {MatListModule, MatButtonModule, MatDividerModule, MatIconModule, MatCardModule, MatProgressBarModule, MatSliderModule, MatFormFieldModule, MatInputModule} from "@angular/material";
import { HeroRoutingModule } from "./hero-routing.module";
import { FormsModule } from "@angular/forms";
import { HeroListComponent } from "./hero-list/hero-list.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { NewHeroComponent } from "./new-hero/new-hero.component";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [HeroListComponent, HeroDetailComponent, NewHeroComponent],
  imports: [
    CommonModule,
    HeroRoutingModule,
    FormsModule,
    FlexLayoutModule,
    MatListModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class HeroModule { }
