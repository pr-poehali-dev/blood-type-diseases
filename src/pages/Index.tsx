import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary/10 py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Заболевания, связанные с группой крови</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Узнайте, как ваша группа крови может влиять на риск развития различных заболеваний
              и какие меры профилактики наиболее эффективны.
            </p>
            <Button asChild size="lg">
              <Link to="/diseases">Изучить заболевания</Link>
            </Button>
          </div>
        </section>
        
        {/* Blood Types Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Группы крови и здоровье</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { type: "I (0)", desc: "Универсальные доноры с повышенной устойчивостью к некоторым инфекциям" },
                { type: "II (A)", desc: "Повышенный риск сердечно-сосудистых заболеваний, но лучшая адаптация к стрессу" },
                { type: "III (B)", desc: "Более устойчивы к ряду инфекционных заболеваний и метаболических нарушений" },
                { type: "IV (AB)", desc: "Универсальные реципиенты с особенностями иммунного реагирования" }
              ].map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <span className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center text-white font-bold mr-2">
                        {item.type.split(" ")[0]}
                      </span>
                      Группа {item.type}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{item.desc}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild className="w-full">
                      <Link to="/diseases">Подробнее</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Key Facts Section */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Ключевые факты</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Сердечно-сосудистые заболевания",
                  desc: "Люди со II (A) группой крови имеют повышенный риск ишемической болезни сердца и тромбозов"
                },
                {
                  title: "Онкологические заболевания", 
                  desc: "Некоторые исследования связывают группу крови A с повышенным риском рака желудка"
                },
                {
                  title: "Инфекционные заболевания",
                  desc: "Люди с I (0) группой крови более восприимчивы к некоторым инфекциям, включая H. pylori"
                }
              ].map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{item.desc}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild className="w-full">
                      <Link to="/diseases">Подробнее</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>© 2025 ГемоЗдоровье. Информация на сайте предоставлена в образовательных целях.</p>
          <p className="mt-2 text-sm">Проконсультируйтесь с врачом для получения медицинской консультации.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
