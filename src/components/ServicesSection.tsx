const services = [
  {
    title: 'Отчётность для ООО, ИП, НКО',
    description: 'Цена договорная. Зависит от объёма и сложности работы',
    price: 'от 2 000 ₽',
    icon: '📄',
  },
  {
    title: 'Бухгалтерское сопровождение ИП, ООО, НКО',
    description: 'ОСНО, УСН, АУСН, Патент. Цена договорная. Зависит от объёма и сложности работы',
    price: 'от 5 000 ₽',
    icon: '📊',
  },
  {
    title: 'Нулевая отчётность',
    description: 'Цена договорная. Зависит от объёма и сложности работы',
    price: 'от 1 000 ₽',
    icon: '🗂️',
  },
  {
    title: 'Восстановление учёта',
    description: 'Цена договорная. Зависит от объёма и сложности работы',
    price: 'от 7 000 ₽',
    icon: '🔄',
  },
  {
    title: 'Расчёт зарплаты и кадровый учёт',
    description: 'Цена договорная. Зависит от объёма и сложности работы',
    price: 'от 5 000 ₽',
    icon: '👥',
  },
  {
    title: 'Маркировка товаров в Честном знаке',
    description: 'Цена договорная. Зависит от объёма и сложности работы',
    price: 'от 3 000 ₽',
    icon: '🏷️',
  },
  {
    title: 'Декларация 3-НДФЛ',
    description: 'Заполнение и сдача. Цена договорная. Зависит от объёма и сложности работы',
    price: 'от 500 ₽',
    icon: '📝',
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-gray-950 py-20">
      <div className="container mx-auto px-8 md:px-16">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-widest text-white/40">Что я делаю</p>
          <h2 className="mt-3 text-3xl font-light text-white md:text-4xl">Мои услуги</h2>
        </div>

        <div className="grid grid-cols-1 gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col gap-4 bg-gray-950 p-8 transition-colors hover:bg-gray-900"
            >
              <span className="text-3xl">{service.icon}</span>
              <h3 className="text-lg font-medium text-white">{service.title}</h3>
              <p className="flex-1 text-sm leading-relaxed text-white/50">{service.description}</p>
              <p className="text-xl font-light text-white">{service.price}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-10 text-center">
          <p className="text-white/50">
            Офис: <span className="text-white/80">Псков, Советская улица, 15</span>
          </p>
          <p className="mt-1 text-sm text-white/30">Возможен выезд к вам на предприятие</p>
        </div>
      </div>
    </section>
  );
}
