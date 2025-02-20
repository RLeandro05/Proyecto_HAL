import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeccionesComponent } from './components/secciones/secciones.component';
import { HomeComponent } from './components/home/home.component';
import { GraficosComponent } from './components/graficos/graficos.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { HabitosInsalubresComponent } from './components/habitos-insalubres/habitos-insalubres.component';
import { EstilosVidaComponent } from './components/estilos-vida/estilos-vida.component';
import { HabitosSaludablesComponent } from './components/habitos-saludables/habitos-saludables.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {path:"",component: HomeComponent},
  {path:"graficos",component: GraficosComponent},
  {path:"quiz",component: QuizComponent},
  {path:"hInsalubres",component: HabitosInsalubresComponent},
  {path:"estilosVida",component: EstilosVidaComponent},
  
  {path: "hSaludables", component: HabitosSaludablesComponent}
  {path: "hSaludables", component: HabitosSaludablesComponent},
  {path: "sobreNosotros", component: AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
