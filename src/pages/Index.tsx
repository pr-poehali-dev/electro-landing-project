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
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <Icon name="Zap" className="text-white w-5 h-5" />
              </div>
              <span className="text-2xl font-light text-black">ЭлектроМонтаж</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-black transition-colors font-light">Услуги</a>
              <a href="#advantages" className="text-gray-600 hover:text-black transition-colors font-light">Преимущества</a>
              <a href="#portfolio" className="text-gray-600 hover:text-black transition-colors font-light">Портфолио</a>
              <a href="#contacts" className="text-gray-600 hover:text-black transition-colors font-light">Контакты</a>
            </div>
            <Button className="bg-black hover:bg-gray-800 text-white font-normal px-6 py-2 rounded-none">
              Связаться
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-slide-up">
              <h1 className="text-6xl md:text-7xl font-extralight mb-8 leading-tight">
                Электромонтаж
                <br />
                <span className="font-normal">под ключ</span>
              </h1>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                Профессиональный монтаж электрических систем в новостройках, офисах и домах по Республике Бурятия
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-black hover:bg-gray-800 text-white font-normal px-8 py-4 rounded-none">
                  Получить расчет
                </Button>
                <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white font-normal px-8 py-4 rounded-none">
                  +7 (3012) 123-456
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-black mb-4">Услуги</h2>
            <div className="w-16 h-px bg-black mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Полный спектр электромонтажных работ
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group text-center">
                <div className="w-16 h-16 border border-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:border-black transition-colors">
                  <Icon name={service.icon as any} size={24} className="text-gray-600 group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-xl font-normal mb-4 text-black">{service.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-black mb-4">Преимущества</h2>
            <div className="w-16 h-px bg-black mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Почему клиенты выбирают нас
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 border border-gray-300 flex items-center justify-center mx-auto mb-6">
                  <Icon name={advantage.icon as any} size={20} className="text-black" />
                </div>
                <h3 className="text-lg font-normal mb-3 text-black">{advantage.title}</h3>
                <p className="text-gray-600 font-light text-sm leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-black mb-4">Работы</h2>
            <div className="w-16 h-px bg-black mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Примеры выполненных проектов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group">
              <div className="aspect-video overflow-hidden mb-6">
                <img 
                  src="/img/601a6fcf-8004-4085-8d02-247e9ca1af57.jpg" 
                  alt="Электромонтаж в квартире"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg font-normal mb-2 text-black">Квартира в новостройке</h3>
              <p className="text-gray-600 font-light text-sm">Полный монтаж электропроводки, розетки, выключатели, освещение</p>
            </div>
            <div className="group">
              <div className="aspect-video overflow-hidden mb-6">
                <img 
                  src="/img/6d0668b7-1b0d-4ac8-b0d0-22253832d455.jpg" 
                  alt="Электромонтаж в офисе"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg font-normal mb-2 text-black">Офисный центр</h3>
              <p className="text-gray-600 font-light text-sm">Электроснабжение коммерческого объекта, силовые линии, освещение</p>
            </div>
            <div className="group">
              <div className="aspect-video overflow-hidden mb-6">
                <img 
                  src="/img/041e8bf8-6c85-4bbc-b47a-0a88fb8edccf.jpg" 
                  alt="Электромонтаж в частном доме"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg font-normal mb-2 text-black">Частный дом</h3>
              <p className="text-gray-600 font-light text-sm">Наружные и внутренние электромонтажные работы, система "умный дом"</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-light mb-6">Расчет стоимости</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto font-light">
            Получите детальный расчет стоимости работ и материалов в течение 2 часов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-normal px-8 py-4 rounded-none">
              Получить смету
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black font-normal px-8 py-4 rounded-none">
              Вызвать замерщика
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-black mb-4">Контакты</h2>
            <div className="w-16 h-px bg-black mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <Card className="border-gray-200 shadow-none">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-xl font-normal text-black">Оставить заявку</CardTitle>
                    <CardDescription className="text-gray-600 font-light">Мы свяжемся с вами в течение часа</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Input
                      name="name"
                      placeholder="Имя"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-gray-200 rounded-none focus:border-black"
                    />
                    <Input
                      name="phone"
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-gray-200 rounded-none focus:border-black"
                    />
                    <Textarea
                      name="message"
                      placeholder="Описание работ"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="border-gray-200 rounded-none focus:border-black resize-none"
                    />
                    <Button className="w-full bg-black hover:bg-gray-800 text-white font-normal py-3 rounded-none">
                      Отправить
                    </Button>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 border border-gray-300 flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Phone" size={14} className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-normal mb-2 text-black">Телефон</h3>
                    <p className="text-gray-600 font-light">+7 (3012) 123-456</p>
                    <p className="text-gray-600 font-light">+7 (914) 987-654</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 border border-gray-300 flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Mail" size={14} className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-normal mb-2 text-black">Email</h3>
                    <p className="text-gray-600 font-light">info@electro-buryatia.ru</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 border border-gray-300 flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="MapPin" size={14} className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-normal mb-2 text-black">Адрес</h3>
                    <p className="text-gray-600 font-light">г. Улан-Удэ, ул. Ленина, 1</p>
                    <p className="text-gray-600 font-light text-sm">Работаем по всей Республике Бурятия</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 border border-gray-300 flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Clock" size={14} className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-normal mb-2 text-black">Режим работы</h3>
                    <p className="text-gray-600 font-light">Пн-Пт: 8:00 - 18:00</p>
                    <p className="text-gray-600 font-light">Сб-Вс: 9:00 - 16:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <Icon name="Zap" className="text-white w-4 h-4" />
              </div>
              <span className="text-lg font-light text-black">ЭлектроМонтаж</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-600 font-light text-sm">© 2024 ЭлектроМонтаж. Все права защищены.</p>
              <p className="text-gray-500 font-light text-xs">Электромонтажные работы в Республике Бурятия</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;