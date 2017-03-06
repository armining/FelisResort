import { Routes, RouterModule} from '@angular/router';
import { AlbumComponent } from './components/album/album.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReferencesComponent } from './components/references/references.component';
import { OverComponent } from './components/over/over.component'

const App_routes: Routes=[

  {path: 'album', component: AlbumComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'references', component: ReferencesComponent },
  {path: 'over', component: OverComponent }
];

export const routing = RouterModule.forRoot(App_routes);
