import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, BookOpen, Award, Users, Mail } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary/10 py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">О проекте ГемоЗдоровье</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Наша миссия — предоставить достоверную и доступную информацию о взаимосвязи между группами крови и различными заболеваниями
            </p>
          </div>
        </section>
        
        {/* Tabs Section */}
        <section className="py-10">
          <div className="container mx-auto">
            <Tabs defaultValue="mission" className="w-full">
              <div className="flex justify-center mb-6">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-2xl">
                  <TabsTrigger value="mission" className="flex items-center gap-2">
                    <Heart className="h-4 w-4" />
                    <span className="hidden md:inline">Миссия</span>
                  </TabsTrigger>
                  <TabsTrigger value="sources" className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    <span className="hidden md:inline">Источники</span>
                  </TabsTrigger>
                  <TabsTrigger value="team" className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span className="hidden md:inline">Команда</span>
                  </TabsTrigger>
                  <TabsTrigger value="contact" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span className="hidden md:inline">Обратная связь</span>
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="mission" className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">Наша миссия и цели</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Проект "ГемоЗдоровье" создан с целью повышения осведомленности населения о связи между группами крови и предрасположенностью к различным заболеваниям. Мы стремимся представить научно-обоснованную информацию в доступной форме, чтобы каждый человек мог лучше понимать особенности своего организма.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                      {[
                        {
                          icon: <Heart className="h-12 w-12 text-red-500 mb-4 mx-auto" />,
                          title: "Просвещение",
                          desc: "Предоставление научно обоснованной информации о взаимосвязи между группами крови и здоровьем"
                        },
                        {
                          icon: <Award className="h-12 w-12 text-amber-500 mb-4 mx-auto" />,
                          title: "Профилактика",
                          desc: "Помощь в понимании индивидуальных рисков и разработке стратегий профилактики заболеваний"
                        },
                        {
                          icon: <Users className="h-12 w-12 text-blue-500 mb-4 mx-auto" />,
                          title: "Сообщество",
                          desc: "Формирование информированного сообщества, осознающего роль генетических факторов в здоровье"
                        }
                      ].map((item, index) => (
                        <Card key={index} className="text-center p-6">
                          {item.icon}
                          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                          <p>{item.desc}</p>
                        </Card>
                      ))}
                    </div>
                    
                    <p className="mt-6">
                      Важно отметить, что наш ресурс носит исключительно информационный характер и не заменяет консультацию квалифицированного медицинского специалиста. Мы рекомендуем обсуждать все вопросы, связанные со здоровьем, с врачом.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="sources">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">Научные источники</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-6">
                      Информация на нашем сайте основана на научных исследованиях и публикациях в рецензируемых медицинских журналах. Ниже представлен список ключевых источников, использованных при создании контента.
                    </p>
                    
                    <ScrollArea className="h-[400px] rounded-md border p-4">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-bold">Сердечно-сосудистые заболевания</h3>
                          <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li>He, M., Wolpin, B., Rexrode, K., Manson, J. E., Rimm, E., Hu, F. B., & Qi, L. (2012). ABO blood group and risk of coronary heart disease in two prospective cohort studies. Arteriosclerosis, thrombosis, and vascular biology, 32(9), 2314-2320.</li>
                            <li>Chen, Z., Yang, S. H., Xu, H., & Li, J. J. (2016). ABO blood group system and the coronary artery disease: an updated systematic review and meta-analysis. Scientific reports, 6(1), 23250.</li>
                            <li>Garrison, R. J., Havlik, R. J., Harris, R. B., Feinleib, M., Kannel, W. B., & Padgett, S. J. (1976). ABO blood group and cardiovascular disease: the Framingham study. Atherosclerosis, 25(2-3), 311-318.</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-bold">Онкологические заболевания</h3>
                          <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li>Franchini, M., Liumbruno, G. M., & Lippi, G. (2016). The prognostic value of ABO blood group in cancer patients. Blood Transfusion, 14(5), 434-440.</li>
                            <li>Iodice, S., Maisonneuve, P., Botteri, E., Sandri, M. T., & Lowenfels, A. B. (2010). ABO blood group and cancer. European journal of cancer, 46(18), 3345-3350.</li>
                            <li>Wolpin, B. M., Chan, A. T., Hartge, P., Chanock, S. J., Kraft, P., Hunter, D. J., ... & Fuchs, C. S. (2009). ABO blood group and the risk of pancreatic cancer. Journal of the National Cancer Institute, 101(6), 424-431.</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-bold">Инфекционные заболевания</h3>
                          <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li>Cooling, L. (2015). Blood groups in infection and host susceptibility. Clinical microbiology reviews, 28(3), 801-870.</li>
                            <li>Degarege, A., Gebrezgi, M. T., Ibanez, G., Wahlgren, M., & Madhivanan, P. (2019). Effect of the ABO blood group on susceptibility to severe malaria: a systematic review and meta-analysis. Blood reviews, 33, 53-62.</li>
                            <li>Zhao, J., Yang, Y., Huang, H., Li, D., Gu, D., Lu, X., ... & Wang, P. G. (2021). Relationship between the ABO Blood Group and the COVID-19 Susceptibility. Clinical Infectious Diseases, 73(2), 328-331.</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-bold">Метаболические нарушения</h3>
                          <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li>Zhang, C., Li, Y., Wang, L., Sun, S., Liu, G., & Leng, J. (2014). Blood group AB is protective factor for gestational diabetes mellitus: a prospective population-based study in Tianjin, China. Diabetes/metabolism research and reviews, 30(6), 570-576.</li>
                            <li>Chen, Y., Chen, C., Ke, X., Xiong, L., Shi, Y., Li, J., ... & Tan, X. (2014). Analysis of circulating cholesterol levels as a mediator of an association between ABO blood group and coronary heart disease. Circulation: Cardiovascular Genetics, 7(1), 43-48.</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-bold">Неврологические расстройства</h3>
                          <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li>Alexander, K. S., Zakai, N. A., Gillett, S., McClure, L. A., Wadley, V., Unverzagt, F., ... & Cushman, M. (2014). ABO blood type, factor VIII, and incident cognitive impairment in the REGARDS cohort. Neurology, 83(14), 1271-1276.</li>
                            <li>Vasan, S. K., Rostgaard, K., Majeed, A., Ullum, H., Titlestad, K. E., Pedersen, O. B., ... & Edgren, G. (2016). ABO blood group and risk of thromboembolic and arterial disease: a study of 1.5 million blood donors. Circulation, 133(15), 1449-1457.</li>
                          </ul>
                        </div>
                      </div>
                    </ScrollArea>
                    
                    <p className="mt-6 text-sm text-gray-600">
                      Наш контент регулярно обновляется в соответствии с новейшими научными публикациями. Последнее обновление: апрель 2025 г.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="team">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">Наша команда</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-8 text-center">
                      Проект "ГемоЗдоровье" создан командой профессионалов, объединяющей врачей, ученых и специалистов в области медицинской коммуникации.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {[
                        {
                          name: "Анна Сергеевна Кровина",
                          role: "Главный редактор, к.м.н.",
                          bio: "Гематолог с 15-летним стажем. Автор более 30 научных публикаций по теме взаимосвязи групп крови и заболеваний.",
                          avatar: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&auto=format&q=80"
                        },
                        {
                          name: "Дмитрий Павлович Артериев",
                          role: "Научный консультант, д.м.н.",
                          bio: "Кардиолог, профессор медицины. Специализируется на исследовании влияния генетических факторов на сердечно-сосудистые заболевания.",
                          avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&auto=format&q=80"
                        },
                        {
                          name: "Елена Александровна Здоровьева",
                          role: "Медицинский журналист",
                          bio: "Специалист по медицинской коммуникации с опытом работы более 10 лет. Фокусируется на адаптации сложной научной информации для широкой аудитории.",
                          avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&auto=format&q=80"
                        }
                      ].map((member, index) => (
                        <Card key={index} className="overflow-hidden">
                          <div className="aspect-square relative">
                            <Avatar className="h-full w-full rounded-none">
                              <AvatarImage src={member.avatar} alt={member.name} className="object-cover" />
                              <AvatarFallback className="rounded-none">{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                          </div>
                          <CardHeader>
                            <CardTitle>{member.name}</CardTitle>
                            <p className="font-medium text-primary">{member.role}</p>
                          </CardHeader>
                          <CardContent>
                            <p>{member.bio}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    
                    <div className="mt-12 text-center">
                      <h3 className="text-xl font-bold mb-4">Научные консультанты</h3>
                      <p>
                        Мы благодарим коллектив ученых и врачей различных специальностей, 
                        которые помогают нам поддерживать высокий уровень достоверности информации.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="contact">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">Обратная связь</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="max-w-md mx-auto space-y-6">
                      <p className="text-center mb-6">
                        У вас есть вопросы, предложения или замечания? Мы ценим ваше мнение и готовы ответить на ваши вопросы.
                      </p>
                      
                      <div className="space-y-4">
                        <div className="flex items-center p-4 border rounded-lg">
                          <Mail className="h-6 w-6 text-primary mr-4" />
                          <div>
                            <h3 className="font-medium">Электронная почта</h3>
                            <p className="text-sm text-gray-600">info@gemozdorovie.ru</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center p-4 border rounded-lg">
                          <Users className="h-6 w-6 text-primary mr-4" />
                          <div>
                            <h3 className="font-medium">Социальные сети</h3>
                            <p className="text-sm text-gray-600">@gemozdorovie</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-primary/10 p-6 rounded-lg mt-8">
                        <h3 className="font-bold text-lg mb-2">Стать экспертом проекта</h3>
                        <p className="text-sm mb-4">
                          Если вы медицинский специалист и хотите участвовать в развитии проекта, 
                          пожалуйста, свяжитесь с нами по электронной почте experts@gemozdorovie.ru с указанием 
                          вашей специализации и опыта работы.
                        </p>
                      </div>
                      
                      <p className="text-sm text-gray-600 text-center mt-6">
                        Мы стремимся отвечать на все запросы в течение 2 рабочих дней.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
