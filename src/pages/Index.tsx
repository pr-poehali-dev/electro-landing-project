import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const services = [
    {
      icon: 'Zap',
      title: 'Монтаж электропроводки',
      description: 'Полный монтаж электрических сетей в новостройках, офисах и частных домах'
    },
    {
      icon: 'Home',
      title: 'Электрика для дома',
      description: 'Установка розеток, выключателей, освещения и электроприборов'
    },
    {
      icon: 'Building',
      title: 'Коммерческие объекты',
      description: 'Проектирование и монтаж электросистем в офисах и торговых центрах'
    },
    {
      icon: 'Shield',
      title: 'Системы безопасности',
      description: 'Установка охранно-пожарной сигнализации и видеонаблюдения'
    }
  ];

  const advantages = [
    {
      icon: 'Users',
      title: 'Собственная бригада',
      description: 'Опытные монтажники с многолетним стажем работы'
    },
    {
      icon: 'Package',
      title: 'Склад материалов',
      description: 'Собственный склад качественных электроматериалов'
    },
    {
      icon: 'Calculator',
      title: 'Точный расчет',
      description: 'Детальный расчет стоимости работ и материалов'
    },
    {
      icon: 'Car',
      title: 'Выезд на объект',
      description: 'Бесплатное обследование и консультация на месте'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-tech-dark text-white">
      {/* Header */}
      <header className="bg-tech-darker border-b border-tech-gray shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg animate-glow">
                <Icon name="Zap" className="text-tech-dark w-6 h-6" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">ЭлектроТех</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#services" className="text-gray-300 hover:text-neon-cyan transition-colors relative group">
                Услуги
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-cyan transition-all group-hover:w-full"></span>
              </a>
              <a href="#advantages" className="text-gray-300 hover:text-neon-cyan transition-colors relative group">
                Преимущества
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-cyan transition-all group-hover:w-full"></span>
              </a>
              <a href="#portfolio" className="text-gray-300 hover:text-neon-cyan transition-colors relative group">
                Портфолио
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-cyan transition-all group-hover:w-full"></span>
              </a>
              <a href="#contacts" className="text-gray-300 hover:text-neon-cyan transition-colors relative group">
                Контакты
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-cyan transition-all group-hover:w-full"></span>
              </a>
            </div>
            <Button className="bg-gradient-to-r from-neon-cyan to-neon-purple hover:from-neon-purple hover:to-neon-cyan text-tech-dark font-semibold border-0 shadow-lg hover:shadow-neon-cyan/50">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать звонок
            </Button>
          </nav>
        </div>
        {/* Tech grid background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-r border-neon-cyan"></div>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-tech-darker via-tech-dark to-tech-darker overflow-hidden">
        {/* Background tech elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-neon-cyan rounded-full animate-pulse-neon"></div>
          <div className="absolute top-20 right-20 w-24 h-24 border border-neon-purple rounded-lg rotate-45 animate-pulse-neon"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-neon-pink rounded-full animate-pulse-neon"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent">
                ЭЛЕКТРО
              </span>
              <br />
              <span className="text-white font-light">монтаж</span>
              <span className="text-neon-cyan">.</span>
              <span className="text-neon-purple">exe</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-300 leading-relaxed">
              Высокотехнологичный монтаж электрических систем в новостройках, офисах и домах 
              <span className="text-neon-cyan"> // Республика Бурятия</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-neon-cyan to-neon-purple hover:from-neon-purple hover:to-neon-cyan text-tech-dark font-bold text-lg px-10 py-6 rounded-xl shadow-lg hover:shadow-neon-cyan/50 border-0">
                <Icon name="Calculator" size={20} className="mr-3" />
                ПОЛУЧИТЬ РАСЧЕТ
              </Button>
              <Button size="lg" className="bg-transparent border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-tech-dark font-semibold text-lg px-10 py-6 rounded-xl shadow-lg hover:shadow-neon-cyan/50 transition-all">
                <Icon name="Phone" size={20} className="mr-3" />
                +7 (3012) 123-456
              </Button>
            </div>
          </div>
        </div>
        
        {/* Animated lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent animate-pulse-neon"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent animate-pulse-neon"></div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-tech-gray relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-neon-cyan">&lt;</span>
              Наши услуги
              <span className="text-neon-cyan">/&gt;</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Полный спектр электромонтажных работ для любых объектов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group bg-tech-lightgray border-tech-gray hover:border-neon-cyan transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-neon-cyan/20">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-br group-hover:from-neon-cyan/30 group-hover:to-neon-purple/30 transition-all border border-tech-gray group-hover:border-neon-cyan">
                    <Icon name={service.icon as any} size={32} className="text-neon-cyan group-hover:text-neon-purple transition-colors" />
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-neon-cyan transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-400 group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-16 bg-tech-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-neon-purple">{'{'}</span>
              Почему выбирают нас
              <span className="text-neon-purple">{'}'}</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Наши конкурентные преимущества в сфере электромонтажа
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-br group-hover:from-neon-purple/30 group-hover:to-neon-pink/30 transition-all border-2 border-transparent group-hover:border-neon-purple animate-pulse-neon">
                  <Icon name={advantage.icon as any} size={36} className="text-neon-purple group-hover:text-neon-pink transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-neon-purple transition-colors">{advantage.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-tech-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-neon-green">/*</span>
              <span className="text-white"> Наши работы </span>
              <span className="text-neon-green">*/</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Примеры выполненных проектов электромонтажа
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden group bg-tech-lightgray border-tech-gray hover:border-neon-cyan transition-all duration-300 hover:shadow-lg hover:shadow-neon-cyan/20">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="/img/601a6fcf-8004-4085-8d02-247e9ca1af57.jpg" 
                  alt="Электромонтаж в квартире"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tech-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-neon-cyan text-sm font-mono">// project_01.exe</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-neon-cyan transition-colors">Электрика в новостройке</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Полный монтаж электропроводки в 3-комнатной квартире: розетки, выключатели, освещение</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden group bg-tech-lightgray border-tech-gray hover:border-neon-purple transition-all duration-300 hover:shadow-lg hover:shadow-neon-purple/20">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="/img/6d0668b7-1b0d-4ac8-b0d0-22253832d455.jpg" 
                  alt="Электромонтаж в офисе"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tech-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-neon-purple text-sm font-mono">// project_02.exe</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-neon-purple transition-colors">Офисный центр</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Электроснабжение коммерческого объекта: силовые линии, освещение, слаботочные системы</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden group bg-tech-lightgray border-tech-gray hover:border-neon-pink transition-all duration-300 hover:shadow-lg hover:shadow-neon-pink/20">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="/img/041e8bf8-6c85-4bbc-b47a-0a88fb8edccf.jpg" 
                  alt="Электромонтаж в частном доме"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tech-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-neon-pink text-sm font-mono">// project_03.exe</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-neon-pink transition-colors">Частный дом</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Наружные и внутренние электромонтажные работы в загородном доме с системой "умный дом"</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Hint Section */}
      <section className="py-16 bg-gradient-to-r from-tech-darker via-neon-purple/10 to-tech-darker relative overflow-hidden">
        {/* Tech pattern background */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className="border border-neon-cyan"></div>
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
              СИСТЕМА РАСЧЕТА СТОИМОСТИ
            </span>
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
            Автоматический расчет стоимости работ и материалов с использованием ИИ-алгоритмов
            <span className="text-neon-cyan block mt-2 font-mono text-sm">
              &gt; Время обработки: ~2 часа
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-neon-cyan to-neon-purple hover:from-neon-purple hover:to-neon-cyan text-tech-dark font-bold text-lg px-10 py-6 rounded-xl shadow-lg hover:shadow-neon-cyan/50 border-0">
              <Icon name="FileText" size={20} className="mr-3" />
              ПОЛУЧИТЬ СМЕТУ.EXE
            </Button>
            <Button size="lg" className="bg-transparent border-2 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-tech-dark font-semibold text-lg px-10 py-6 rounded-xl shadow-lg hover:shadow-neon-purple/50 transition-all">
              <Icon name="MapPin" size={20} className="mr-3" />
              ВЫЗВАТЬ ЗАМЕРЩИКА
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contacts" className="py-16 bg-tech-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-neon-green">console</span>
                <span className="text-white">.log(</span>
                <span className="text-neon-cyan">"Контакты"</span>
                <span className="text-white">)</span>
              </h2>
              <p className="text-xl text-gray-400">
                Инициализация соединения в течение 30 минут
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <Card className="bg-tech-lightgray border-tech-gray hover:border-neon-cyan transition-colors">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <span className="text-neon-cyan mr-2">&gt;_</span>
                      Оставить заявку
                    </CardTitle>
                    <CardDescription className="text-gray-400">Заполните форму для получения консультации</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Input
                      name="name"
                      placeholder="Введите имя..."
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-tech-gray border-tech-gray text-white placeholder:text-gray-500 focus:border-neon-cyan"
                    />
                    <Input
                      name="phone"
                      placeholder="Введите телефон..."
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-tech-gray border-tech-gray text-white placeholder:text-gray-500 focus:border-neon-cyan"
                    />
                    <Textarea
                      name="message"
                      placeholder="Описание работ..."
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="bg-tech-gray border-tech-gray text-white placeholder:text-gray-500 focus:border-neon-cyan resize-none"
                    />
                    <Button className="w-full bg-gradient-to-r from-neon-cyan to-neon-purple hover:from-neon-purple hover:to-neon-cyan text-tech-dark font-bold py-3 rounded-lg shadow-lg hover:shadow-neon-cyan/50 border-0">
                      <Icon name="Send" size={16} className="mr-2" />
                      ОТПРАВИТЬ ДАННЫЕ
                    </Button>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-neon-cyan/30 group-hover:to-neon-purple/30 transition-all border border-tech-gray group-hover:border-neon-cyan">
                    <Icon name="Phone" size={24} className="text-neon-cyan" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-white group-hover:text-neon-cyan transition-colors">
                      <span className="text-neon-cyan font-mono text-sm">phone:</span> Телефон
                    </h3>
                    <p className="text-gray-400 font-mono">+7 (3012) 123-456</p>
                    <p className="text-gray-400 font-mono">+7 (914) 987-654</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-neon-purple/30 group-hover:to-neon-pink/30 transition-all border border-tech-gray group-hover:border-neon-purple">
                    <Icon name="Mail" size={24} className="text-neon-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-white group-hover:text-neon-purple transition-colors">
                      <span className="text-neon-purple font-mono text-sm">email:</span> Email
                    </h3>
                    <p className="text-gray-400 font-mono">info@electrotech-buryatia.ru</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-neon-pink/20 to-neon-green/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-neon-pink/30 group-hover:to-neon-green/30 transition-all border border-tech-gray group-hover:border-neon-pink">
                    <Icon name="MapPin" size={24} className="text-neon-pink" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-white group-hover:text-neon-pink transition-colors">
                      <span className="text-neon-pink font-mono text-sm">location:</span> Адрес
                    </h3>
                    <p className="text-gray-400">г. Улан-Удэ, ул. Ленина, 1</p>
                    <p className="text-gray-400 text-sm">// Республика Бурятия</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-neon-green/20 to-neon-cyan/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-neon-green/30 group-hover:to-neon-cyan/30 transition-all border border-tech-gray group-hover:border-neon-green">
                    <Icon name="Clock" size={24} className="text-neon-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-white group-hover:text-neon-green transition-colors">
                      <span className="text-neon-green font-mono text-sm">uptime:</span> Режим работы
                    </h3>
                    <p className="text-gray-400 font-mono">MON-FRI: 08:00-18:00</p>
                    <p className="text-gray-400 font-mono">SAT-SUN: 09:00-16:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-tech-darker border-t border-tech-gray py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="p-2 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg">
                <Icon name="Zap" className="text-tech-dark w-5 h-5" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">ЭлектроТех</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-500 font-mono text-sm">© 2024 ЭлектроТех.exe // Все права защищены</p>
              <p className="text-gray-500 font-mono text-sm">Высокотехнологичный электромонтаж в Республике Бурятия</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;