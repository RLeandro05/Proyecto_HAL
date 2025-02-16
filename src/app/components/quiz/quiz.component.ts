import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  standalone: false,
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {
  questions = [
    {
      question: '¿Con qué frecuencia haces ejercicio?',
      options: [
        { answer: 'Nunca', score: 0 },
        { answer: 'Una vez a la semana', score: 1 },
        { answer: 'De 2 a 3 veces por semana', score: 2 },
        { answer: 'Más de 3 veces por semana', score: 3 }
      ],
      selectedOption: null as number | null
    },
    {
      question: '¿Cuántas horas duermes al día?',
      options: [
        { answer: 'Menos de 5 horas', score: 0 },
        { answer: 'De 5 a 6 horas', score: 1 },
        { answer: 'De 6 a 8 horas', score: 2 },
        { answer: 'Más de 8 horas', score: 3 }
      ],
      selectedOption: null as number | null
    },
    {
      question: '¿Cuántos vasos de agua bebes al día?',
      options: [
        { answer: 'Menos de 2', score: 0 },
        { answer: 'De 2 a 4', score: 1 },
        { answer: 'De 5 a 7', score: 2 },
        { answer: 'Más de 8', score: 3 }
      ],
      selectedOption: null as number | null
    },
    {
      question: '¿Con qué frecuencia comes frutas y verduras?',
      options: [
        { answer: 'Casi nunca', score: 0 },
        { answer: '1-2 veces por semana', score: 1 },
        { answer: '3-5 veces por semana', score: 2 },
        { answer: 'Todos los días', score: 3 }
      ],
      selectedOption: null as number | null
    },
    {
      question: '¿Cuánto tiempo pasas frente a pantallas al día?',
      options: [
        { answer: 'Más de 8 horas', score: 0 },
        { answer: 'Entre 6 y 8 horas', score: 1 },
        { answer: 'Entre 3 y 5 horas', score: 2 },
        { answer: 'Menos de 2 horas', score: 3 }
      ],
      selectedOption: null as number | null
    }
  ];

  totalScore = 0;
  result = '';
  quizCompleted = false;

  // Función para seleccionar la opción y guardar la respuesta
  selectOption(questionIndex: number, optionScore: number): void {
    this.questions[questionIndex].selectedOption = optionScore;
  }

  // Vamos a verificar  si todas las preguntas han sido respondidas
  allQuestionsAnswered(): boolean {
    return this.questions.every(question => question.selectedOption !== null);
    /*Este método verifica si todas las preguntas han sido respondidas por el usuario. 
    Utiliza el método every() que recorre todas las preguntas y retorna true solo si todas tienen 
    un valor distinto de null en selectedOption.*/
  }

  // Evaluamos el resultado
  evaluateResult(): void {
    this.totalScore = this.questions.reduce((sum, question) => sum + (question.selectedOption ?? 0), 0);
    /*reduce(): Este método calcula la puntuación total sumando las puntuaciones de todas las opciones seleccionadas. 
    Si selectedOption es null, se suma 0 (gracias al operador ??).*/

    if (this.totalScore <= 5) {
      this.result = 'Tus hábitos no son muy saludables. ¡Es hora de cambiar!';
    } else if (this.totalScore <= 10) {
      this.result = 'Tienes algunos hábitos saludables, pero aún puedes mejorar.';
    } else {
      this.result = '¡Excelente! Tienes hábitos muy saludables. Sigue así.';
    }

    this.quizCompleted = true;
  }

  // Reiniciar el quiz
  resetQuiz(): void {
    this.questions.forEach(question => question.selectedOption = null);
    this.totalScore = 0;
    this.result = '';
    this.quizCompleted = false;
  }
}
