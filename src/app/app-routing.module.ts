import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeccionesComponent } from './components/secciones/secciones.component';
import { HomeComponent } from './components/home/home.component';
import { GraficosComponent } from './components/graficos/graficos.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { HabitosInsalubresComponent } from './components/habitos-insalubres/habitos-insalubres.component';
import { HabitosSaludablesComponent } from './components/habitos-saludables/habitos-saludables.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path:"",component: HomeComponent},
  {path:"graficos",component: GraficosComponent},
  {path:"quiz",component: QuizComponent},
  {path:"hInsalubres",component: HabitosInsalubresComponent},
  {path: "hSaludables", component: HabitosSaludablesComponent},
  {path: "contact", component: ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
