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
      selectedOption: null as number | null // Guardamos la opción seleccionada por el usuario
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
    // Puedes agregar más preguntas aquí
  ];

  totalScore = 0;
  result = '';
  quizCompleted = false;  // Para saber si el usuario ha respondido todas las preguntas

  // Función para seleccionar la opción y sumar la puntuación
  selectOption(questionIndex: number, optionScore: number): void {
    this.questions[questionIndex].selectedOption = optionScore; // Guardamos la opción seleccionada
  }

  allQuestionsAnswered(): boolean {
    // Verificar si alguna pregunta no ha sido respondida
    return this.questions.every((question) => question.selectedOption !== null);
  }

  // Función para evaluar el resultado
  evaluateResult(): void {
    this.totalScore = 0;
    this.questions.forEach(question => {
      if (question.selectedOption !== null) {
        this.totalScore += question.selectedOption;
      }
    });

    // Evaluamos el resultado según la puntuación total
    if (this.totalScore <= 5) {
      this.result = 'Tus hábitos no son muy saludables. ¡Es hora de cambiar!';
    } else if (this.totalScore <= 10) {
      this.result = 'Tienes algunos hábitos saludables, pero aún puedes mejorar.';
    } else {
      this.result = '¡Excelente! Tienes hábitos muy saludables. Sigue así.';
    }

    this.quizCompleted = true;  // Marcamos que el quiz se ha completado
  }
}
