import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {NgClass, NgForOf, NgIf, NgOptimizedImage, SlicePipe} from "@angular/common";
import {SearchPackagesComponent} from "./pages/search-packages/search-packages.component";
import {FilterPackagesModal} from "./components/filter-packages-modal/filter-packages-modal.component";
import {MatSliderModule} from "@angular/material/slider";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";
import {SearchPlacesModalComponent} from './components/search-places-modal/search-places-modal.component';
import {
  ExistingPackagesListComponent
} from './pages/existing-packages-list/existing-packages-list.component';
import {ListPackagesComponent} from "./components/list-packages/list-packages.component";
import { TourPackageDetailComponent } from './pages/tour-package-detail/tour-package-detail.component';
import { ExistingTourExperienceListComponent } from './pages/existing-tour-experience-list/existing-tour-experience-list.component';
import { ExistingVehicleListComponent } from './pages/existing-vehicle-list/existing-vehicle-list.component';


const routes: Routes = [
  {
    path: 'my-packages',
    component: ExistingPackagesListComponent,
  },
  {
    path: 'my-tour-experiences',
    component: ExistingTourExperienceListComponent
  },
  {
    path: 'detail/:packageId',
    component: TourPackageDetailComponent,
  },
  {
    path:'add-tour-package',
    component: TourPackageDetailComponent,
  },
  {
    path: ':regionId',
    component: SearchPackagesComponent,
  },
  {
    path: '',
    component: SearchPackagesComponent,
  },
]

@NgModule({
  declarations: [
    FilterPackagesModal,
    SearchPlacesModalComponent,
    ExistingPackagesListComponent,
    ListPackagesComponent,
    TourPackageDetailComponent,
    ExistingTourExperienceListComponent,
    ExistingVehicleListComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    NgOptimizedImage,
    MatSliderModule,
    MatInputModule,
    NgIf,
    FormsModule,
    MatCheckboxModule,
    NgForOf,
    MatIconModule,
    NgClass,
    ReactiveFormsModule,
    SlicePipe,
  ],
  exports: [RouterModule, ListPackagesComponent],
})
export class TourPackagesModule {
}