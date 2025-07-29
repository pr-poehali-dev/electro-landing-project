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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" className="text-secondary w-8 h-8" />
              <span className="text-2xl font-bold text-primary">ЭлектроМонтаж</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
              <a href="#advantages" className="text-gray-700 hover:text-primary transition-colors">Преимущества</a>
              <a href="#portfolio" className="text-gray-700 hover:text-primary transition-colors">Портфолио</a>
              <a href="#contacts" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-secondary hover:bg-secondary/90">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать звонок
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Электромонтаж<br />
              <span className="text-yellow-300">под ключ</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Профессиональный монтаж электрики в новостройках, офисах и домах по всей Республике Бурятия
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
                <Icon name="Calculator" size={20} className="mr-2" />
                Получить расчет
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                <Icon name="Phone" size={20} className="mr-2" />
                +7 (3012) 123-456
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр электромонтажных работ для любых объектов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Наши конкурентные преимущества в сфере электромонтажа
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                  <Icon name={advantage.icon as any} size={36} className="text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Наши работы</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Примеры выполненных проектов электромонтажа
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/img/601a6fcf-8004-4085-8d02-247e9ca1af57.jpg" 
                  alt="Электромонтаж в квартире"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Электрика в новостройке</h3>
                <p className="text-gray-600">Полный монтаж электропроводки в 3-комнатной квартире: розетки, выключатели, освещение</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/img/6d0668b7-1b0d-4ac8-b0d0-22253832d455.jpg" 
                  alt="Электромонтаж в офисе"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Офисный центр</h3>
                <p className="text-gray-600">Электроснабжение коммерческого объекта: силовые линии, освещение, слаботочные системы</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/img/041e8bf8-6c85-4bbc-b47a-0a88fb8edccf.jpg" 
                  alt="Электромонтаж в частном доме"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Частный дом</h3>
                <p className="text-gray-600">Наружные и внутренние электромонтажные работы в загородном доме с системой "умный дом"</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Hint Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Узнайте стоимость работ</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Оставьте заявку и получите детальный расчет стоимости работ и материалов в течение 2 часов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-lg px-8 py-4">
              <Icon name="FileText" size={20} className="mr-2" />
              Получить смету
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
              <Icon name="MapPin" size={20} className="mr-2" />
              Вызвать замерщика
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contacts" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Свяжитесь с нами</h2>
              <p className="text-xl text-gray-600">
                Оставьте заявку и мы свяжемся с вами в течение 30 минут
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Оставить заявку</CardTitle>
                    <CardDescription>Заполните форму для получения консультации</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Input
                      name="name"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    <Input
                      name="phone"
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                    <Textarea
                      name="message"
                      placeholder="Описание работ"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                    />
                    <Button className="w-full bg-secondary hover:bg-secondary/90">
                      <Icon name="Send" size={16} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Телефон</h3>
                    <p className="text-gray-600">+7 (3012) 123-456</p>
                    <p className="text-gray-600">+7 (914) 987-654</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">info@electro-buryatia.ru</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Адрес</h3>
                    <p className="text-gray-600">г. Улан-Удэ, ул. Ленина, 1</p>
                    <p className="text-gray-600">Работаем по всей Республике Бурятия</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Режим работы</h3>
                    <p className="text-gray-600">Пн-Пт: 8:00 - 18:00</p>
                    <p className="text-gray-600">Сб-Вс: 9:00 - 16:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Zap" className="text-secondary w-6 h-6" />
              <span className="text-xl font-bold">ЭлектроМонтаж</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">© 2024 ЭлектроМонтаж. Все права защищены.</p>
              <p className="text-gray-400">Электромонтажные работы в Республике Бурятия</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;