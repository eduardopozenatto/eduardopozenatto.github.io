import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, XCircle, RotateCcw, Trophy } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Qual é a principal característica do sistema vascular aquífero dos equinodermos?",
    options: [
      "Sistema circulatório com hemoglobina",
      "Sistema hidráulico usado para locomoção e alimentação",
      "Sistema nervoso centralizado",
      "Sistema reprodutivo externo"
    ],
    correctAnswer: 1,
    explanation: "O sistema vascular aquífero é um sistema hidráulico único dos equinodermos, composto por canais preenchidos com líquido que conectam os pés ambulacrários, usado para locomoção, alimentação, respiração e percepção sensorial."
  },
  {
    id: 2,
    question: "Qual classe de equinodermos inclui as estrelas-do-mar?",
    options: [
      "Ophiuroidea",
      "Asteroidea",
      "Echinoidea",
      "Holothuroidea"
    ],
    correctAnswer: 1,
    explanation: "Asteroidea é a classe que inclui as estrelas-do-mar, caracterizadas por corpo em forma de estrela com 5 braços (ou múltiplos de 5) e capacidade de eversão do estômago para digestão externa."
  },
  {
    id: 3,
    question: "Qual tipo de simetria apresentam os equinodermos adultos?",
    options: [
      "Simetria bilateral",
      "Simetria assimétrica",
      "Simetria radial pentarradial",
      "Simetria esférica"
    ],
    correctAnswer: 2,
    explanation: "Os equinodermos adultos apresentam simetria radial pentarradial (cinco raios), uma adaptação ao modo de vida bentônico que permite interação eficiente com o ambiente em todas as direções."
  },
  {
    id: 4,
    question: "Qual estrutura alimentar característica é encontrada nos ouriços-do-mar?",
    options: [
      "Lanterna de Aristóteles",
      "Rádula",
      "Mandíbulas",
      "Probóscide"
    ],
    correctAnswer: 0,
    explanation: "A lanterna de Aristóteles é uma estrutura complexa com cinco dentes que crescem continuamente, usada pelos ouriços-do-mar para raspar algas de superfícies rochosas."
  },
  {
    id: 5,
    question: "Qual é o tipo de fertilização mais comum nos equinodermos?",
    options: [
      "Fertilização interna",
      "Partenogênese",
      "Fertilização externa",
      "Hermafroditismo autofecundante"
    ],
    correctAnswer: 2,
    explanation: "A maioria dos equinodermos realiza fertilização externa, liberando gametas diretamente na água do mar, onde ocorre a fecundação e o desenvolvimento de larvas planctônicas."
  },
  {
    id: 6,
    question: "Qual característica NÃO é típica dos equinodermos?",
    options: [
      "Endoesqueleto calcário",
      "Habitat exclusivamente marinho",
      "Sistema nervoso centralizado com cérebro",
      "Capacidade de regeneração"
    ],
    correctAnswer: 2,
    explanation: "Os equinodermos não possuem cérebro centralizado. Seu sistema nervoso é organizado em uma rede radial descentralizada que permite respostas coordenadas sem um centro de comando único."
  },
  {
    id: 7,
    question: "Qual classe de equinodermos é conhecida por realizar evisceração defensiva?",
    options: [
      "Asteroidea",
      "Holothuroidea (pepinos-do-mar)",
      "Echinoidea",
      "Crinoidea"
    ],
    correctAnswer: 1,
    explanation: "Os pepinos-do-mar (Holothuroidea) podem expelir seus órgãos internos quando ameaçados, confundindo predadores. Surpreendentemente, regeneram completamente esses órgãos em poucas semanas."
  },
  {
    id: 8,
    question: "Qual é a relação evolutiva dos equinodermos com os humanos?",
    options: [
      "São invertebrados sem relação próxima",
      "São parentes próximos, compartilhando ancestral deuterostômio",
      "Evoluíram independentemente sem ancestral comum",
      "São mais próximos de artrópodes"
    ],
    correctAnswer: 1,
    explanation: "Equinodermos e vertebrados (incluindo humanos) compartilham um ancestral deuterostômio comum, sendo parentes evolutivos mais próximos entre si do que de outros invertebrados como insetos ou moluscos."
  },
  {
    id: 9,
    question: "Qual doença tem causado mortalidade em massa de estrelas-do-mar?",
    options: [
      "Doença do coral branco",
      "Síndrome de Desgaste da Estrela-do-Mar",
      "Peste das algas",
      "Fibropapilomatose"
    ],
    correctAnswer: 1,
    explanation: "A Síndrome de Desgaste da Estrela-do-Mar (SSWS) é uma doença devastadora causada por vírus e estresse térmico que tem provocado mortalidades em massa com impactos ecológicos significativos."
  },
  {
    id: 10,
    question: "Qual processo permite que algumas estrelas-do-mar regenerem um indivíduo completo?",
    options: [
      "Mitose",
      "Fissão e regeneração",
      "Brotamento",
      "Esporulação"
    ],
    correctAnswer: 1,
    explanation: "Algumas estrelas-do-mar podem se reproduzir assexuadamente por fissão, dividindo o corpo em partes que regeneram as porções faltantes. Também podem regenerar um indivíduo completo a partir de um braço com parte do disco central."
  }
];

export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(new Array(questions.length).fill(false));
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    if (!showExplanation) {
      setSelectedAnswer(answerIndex);
      setShowExplanation(true);

      if (!answeredQuestions[currentQuestion]) {
        if (answerIndex === questions[currentQuestion].correctAnswer) {
          setScore(score + 1);
        }
        const newAnswered = [...answeredQuestions];
        newAnswered[currentQuestion] = true;
        setAnsweredQuestions(newAnswered);
      }
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
      // Save to localStorage
      localStorage.setItem('echinodermata_quiz_score', score.toString());
      localStorage.setItem('echinodermata_quiz_total', questions.length.toString());
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnsweredQuestions(new Array(questions.length).fill(false));
    setQuizCompleted(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) return "Perfeito! Você é um especialista em equinodermos! 🌟";
    if (percentage >= 80) return "Excelente! Você domina o assunto! 🎉";
    if (percentage >= 60) return "Muito bom! Continue estudando! 📚";
    if (percentage >= 40) return "Bom começo! Revise o conteúdo e tente novamente! 💪";
    return "Continue aprendendo! Explore mais o site e tente novamente! 🔍";
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (quizCompleted) {
    return (
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <Card className="max-w-2xl mx-auto ocean-shadow">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full ocean-gradient">
                <Trophy className="h-10 w-10 text-primary-foreground" />
              </div>
            </div>
            <CardTitle className="text-3xl mb-2">Quiz Concluído!</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="text-6xl font-bold text-gradient">
              {score}/{questions.length}
            </div>
            <p className="text-xl text-muted-foreground">
              Você acertou {score} de {questions.length} questões ({Math.round((score / questions.length) * 100)}%)
            </p>
            <p className="text-lg font-semibold text-primary">
              {getScoreMessage()}
            </p>
            <div className="pt-4 space-y-3">
              <Button onClick={handleRestart} size="lg" className="w-full">
                <RotateCcw className="mr-2 h-5 w-5" />
                Tentar Novamente
              </Button>
              <Button variant="outline" size="lg" className="w-full" onClick={() => window.location.href = "/"}>
                Voltar ao Início
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold sm:text-5xl text-center">
          <span className="text-gradient">Teste</span> Seus Conhecimentos
        </h1>
        <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
          Complete o quiz sobre equinodermos e descubra o quanto você aprendeu!
        </p>
      </div>

      <div className="max-w-3xl mx-auto mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">
            Questão {currentQuestion + 1} de {questions.length}
          </span>
          <span className="text-sm font-medium">
            Pontuação: {score}/{answeredQuestions.filter(a => a).length}
          </span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <Card className="max-w-3xl mx-auto ocean-shadow">
        <CardHeader>
          <CardTitle className="text-2xl">{question.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {question.options.map((option, index) => {
              let buttonClass = "w-full justify-start text-left h-auto py-4 px-6 smooth-transition";
              let buttonVariant: "outline" | "default" | "secondary" = "outline";
              
              if (showExplanation) {
                if (index === question.correctAnswer) {
                  buttonClass += " border-primary bg-primary/5";
                } else if (index === selectedAnswer && !isCorrect) {
                  buttonClass += " border-destructive bg-destructive/5";
                }
              } else if (selectedAnswer === index) {
                buttonVariant = "secondary";
              }

              return (
                <Button
                  key={index}
                  variant={buttonVariant}
                  className={buttonClass}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showExplanation}
                >
                  <div className="flex items-center gap-3 w-full">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 flex-shrink-0">
                      {showExplanation && index === question.correctAnswer && (
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      )}
                      {showExplanation && index === selectedAnswer && !isCorrect && (
                        <XCircle className="h-5 w-5 text-destructive" />
                      )}
                      {(!showExplanation || (index !== question.correctAnswer && index !== selectedAnswer)) && (
                        <span className="text-sm font-semibold">{String.fromCharCode(65 + index)}</span>
                      )}
                    </div>
                    <span className="flex-1">{option}</span>
                  </div>
                </Button>
              );
            })}
          </div>

          {showExplanation && (
            <div className={`rounded-lg p-4 animate-in fade-in slide-in-from-top-2 ${
              isCorrect ? 'bg-primary/10 border border-primary/30' : 'bg-destructive/10 border border-destructive/30'
            }`}>
              <div className="flex items-start gap-3">
                {isCorrect ? (
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-0.5" />
                )}
                <div>
                  <p className={`font-semibold mb-2 ${isCorrect ? 'text-primary' : 'text-destructive'}`}>
                    {isCorrect ? 'Correto!' : 'Incorreto'}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {question.explanation}
                  </p>
                </div>
              </div>
            </div>
          )}

          {showExplanation && (
            <div className="flex justify-end pt-4">
              <Button onClick={handleNext} size="lg">
                {currentQuestion < questions.length - 1 ? 'Próxima Questão' : 'Ver Resultado'}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
