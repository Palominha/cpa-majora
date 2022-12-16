const data = [
  {
    category: "PHP",
    questions: [
      {
        question: "Como se concatena nessa linguagem?",
        options: [".", "+", "#", "="],
        answer: ".",
        tip: "Apenas ele usa essa forma de concatenação",
      },
      {
        question: "O que a abreviação 'PHP' forma?",
        options: ["Gato", "Girafa", "Elefante", "Cachorro"],
        answer: "Elefante",
        tip: "Animal de grande porte",
      },
      {
        question: "Ele é uma linguagem de: ",
        options: ["Programação", "Banco de Dados", "Estilização"],
        answer: "Programação",
      },
      {
        question: "O que significa PHP?",
        options: ["Public Preprocessor", "Hypertext Processor", "Hypertext Preprocessor", "Não tem um signficado"],
        answer: "Hypertext Preprocessor",
      },
      {
        question: "Como se declara variavel nessa linguagem?",
        options: ["$variavel;", "variavel", "$variavel", "#variavel"],
        answer: "$variavel;",
      },
    ],
  },
  {
    category: "C++",
    questions: [
      {
        question: "Como concatena no C++?",
        options: ["+", "=", "-", "$"],
        answer: "+",
        tip: "Também é um operador aritmético",
      },
      {
        question: "Qual é o paradigma do C++?",
        options: ["Procedural", "Multi-paradigma", "Paradigma Funcional", "Não tem"],
        answer: "Multi-paradigma",
      },
      {
        question: "Qual objeto é usado para imprimir algo no C++?",
        options: ["print", "echo", "cout", "cin"],
        answer: "cout",
      },
    ],
  },
  {
    category: "Java",
    questions: [
      {
        question: "Qual é a logo do Java?",
        options: ["Vitamina","Chá","Suco","Café"],
        answer: "Café",
      },
      {
        question: "Quando o Java foi criado?",
        options: ["1986", "1996", "1985", "1884"],
        answer: "1996",
        tip: "Tem o mesmo numero 2 vezes",
      },
      {
        question: "Como imprimir uma mensagem em Java?",
        options: ["System.out.print", "System.outprint", "System.out.print();", "System.out.print()"],
        answer: "System.out.print();",
      },
      {
        question: "Qual a classe utilizada para ler uma informação?",
        options: ["Scanner", "Scanf()", "Readln()", "Scaner"],
        answer: "Scanner",
      },
      {
        question: "Como cria um vetor?",
        options: ["vetor{};", "vetor[]", "int vetor[];", "vetor[];"],
        answer: "int vetor[];",
      },
    ],
  },
];

export default data;
