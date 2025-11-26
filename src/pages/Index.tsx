import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const services = [
    {
      icon: 'Home',
      title: 'Строительство домов',
      description: 'Возведение загородных домов и коттеджей под ключ'
    },
    {
      icon: 'Building2',
      title: 'Коммерческие объекты',
      description: 'Строительство офисов, магазинов и складов'
    },
    {
      icon: 'HardHat',
      title: 'Ремонт и реконструкция',
      description: 'Капитальный ремонт зданий любой сложности'
    },
    {
      icon: 'Ruler',
      title: 'Дизайн и проектирование',
      description: 'Архитектурное проектирование и дизайн интерьеров'
    }
  ];

  const portfolio = [
    {
      title: 'Загородный дом 250м²',
      location: 'Московская область',
      year: '2024',
      image: 'https://cdn.poehali.dev/projects/4630cd80-36e4-4918-b93c-a7229945c604/files/49cf064b-b9f0-4c2e-b4e9-fd6c573a9fe0.jpg'
    },
    {
      title: 'Торговый центр 1200м²',
      location: 'г. Москва',
      year: '2023',
      image: 'https://cdn.poehali.dev/projects/4630cd80-36e4-4918-b93c-a7229945c604/files/7bc0b76a-3da0-4d0b-8df6-da13f2b85ac0.jpg'
    },
    {
      title: 'Коттедж премиум класса',
      location: 'Рублёвка',
      year: '2024',
      image: 'https://cdn.poehali.dev/projects/4630cd80-36e4-4918-b93c-a7229945c604/files/2989169c-432b-4f40-ac8c-9fdc34f36b8f.jpg'
    }
  ];

  const reviews = [
    {
      name: 'Андрей Соколов',
      rating: 5,
      text: 'Построили дом мечты! Качество работы на высшем уровне, все сроки соблюдены.'
    },
    {
      name: 'Елена Иванова',
      rating: 5,
      text: 'Профессиональная команда. Помогли с выбором материалов и дизайном.'
    },
    {
      name: 'Михаил Петров',
      rating: 5,
      text: 'Отличное соотношение цены и качества. Рекомендую!'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Наш менеджер свяжется с вами в ближайшее время.'
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Icon name="Building" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-primary">СтройМастер</h1>
            </div>
            <div className="hidden md:flex gap-8">
              {['Главная', 'Услуги', 'Портфолио', 'Отзывы', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button onClick={() => scrollToSection('контакты')}>
              Оставить заявку
            </Button>
          </div>
        </nav>
      </header>

      <section id="главная" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Строим ваше будущее
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Профессиональное строительство домов и коммерческих объектов под ключ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg" onClick={() => scrollToSection('контакты')}>
                <Icon name="Phone" size={20} className="mr-2" />
                Бесплатная консультация
              </Button>
              <Button size="lg" variant="outline" className="text-lg" onClick={() => scrollToSection('портфолио')}>
                <Icon name="Eye" size={20} className="mr-2" />
                Наши работы
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {[
              { icon: 'Award', title: '15+ лет', text: 'на рынке' },
              { icon: 'Users', title: '500+', text: 'довольных клиентов' },
              { icon: 'CheckCircle2', title: '100%', text: 'гарантия качества' }
            ].map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-8 pb-6">
                  <Icon name={stat.icon as any} size={48} className="mx-auto mb-4 text-primary" />
                  <h3 className="text-3xl font-bold mb-2">{stat.title}</h3>
                  <p className="text-muted-foreground">{stat.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="услуги" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="портфолио" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Наши проекты</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-1">
                    <Icon name="MapPin" size={16} />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="Calendar" size={16} />
                    <span>{project.year}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="отзывы" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">{review.text}</p>
                  <p className="font-semibold">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Свяжитесь с нами</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Оставьте заявку на бесплатную консультацию и замер
          </p>
          <Card className="animate-scale-in">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 font-medium">Ваше имя *</label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">Телефон *</label>
                    <Input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-2 font-medium">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Сообщение</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Расскажите о вашем проекте..."
                    rows={5}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: 'Phone', title: '+7 (495) 123-45-67', text: 'Звоните с 9:00 до 21:00' },
              { icon: 'Mail', title: 'info@stroymaster.ru', text: 'Ответим в течение часа' },
              { icon: 'MapPin', title: 'Москва, ул. Строителей 15', text: 'Приезжайте в офис' }
            ].map((contact, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Icon name={contact.icon as any} size={32} className="mx-auto mb-3 text-primary" />
                  <h3 className="font-bold mb-1">{contact.title}</h3>
                  <p className="text-sm text-muted-foreground">{contact.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Building" size={28} className="text-primary" />
                <h3 className="text-xl font-bold">СтройМастер</h3>
              </div>
              <p className="text-background/80">
                Профессиональное строительство с 2009 года
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-background/80">
                <li>Строительство домов</li>
                <li>Коммерческие объекты</li>
                <li>Ремонт и реконструкция</li>
                <li>Дизайн интерьеров</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-background/80">
                <li>О нас</li>
                <li>Наша команда</li>
                <li>Вакансии</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <Icon name="Instagram" size={24} className="text-background/80 hover:text-primary cursor-pointer transition-colors" />
                <Icon name="Facebook" size={24} className="text-background/80 hover:text-primary cursor-pointer transition-colors" />
                <Icon name="Youtube" size={24} className="text-background/80 hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/60">
            <p>© 2024 СтройМастер. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;