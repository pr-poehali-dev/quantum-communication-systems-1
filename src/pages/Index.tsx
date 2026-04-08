export default function Index() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black">
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold tracking-tighter">
            SALES.PRO
          </a>
          <div className="flex space-x-8">
            <a href="#work" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Кейсы
            </a>
            <a href="#about" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Обо мне
            </a>
            <a href="#contact" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Контакты
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
            <p className="text-sm uppercase tracking-widest text-red-600 mb-4">Руководитель отдела продаж</p>
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-none mb-6">
              РОСТ
              <br />
              ПРОДАЖ
            </h1>
            <p className="text-xl max-w-xl">
              Выстраиваю системы продаж, которые работают без меня. Создаю команды, которые перевыполняют план. Превращаю воронку в машину предсказуемой выручки.
            </p>
            <a
              href="#contact"
              className="inline-block mt-8 bg-black text-white text-sm uppercase tracking-widest px-8 py-4 hover:bg-red-600 transition-colors"
            >
              Обсудить сотрудничество
            </a>
          </div>
          <div className="col-span-12 md:col-span-5 flex items-center justify-center">
            <div className="relative w-full aspect-square bg-red-600 flex items-end p-8">
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black"></div>
              <div className="z-10">
                <p className="text-white text-7xl font-bold leading-none">10+</p>
                <p className="text-white/80 text-sm uppercase tracking-widest mt-2">лет в продажах</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mt-20 border-t border-black">
          <div className="py-8 pr-8 border-r border-black">
            <p className="text-5xl font-bold tracking-tighter">×3</p>
            <p className="text-sm uppercase tracking-widest text-neutral-500 mt-2">рост выручки за 2 года</p>
          </div>
          <div className="py-8 px-8 border-r border-black">
            <p className="text-5xl font-bold tracking-tighter">40+</p>
            <p className="text-sm uppercase tracking-widest text-neutral-500 mt-2">менеджеров в подчинении</p>
          </div>
          <div className="py-8 px-8 border-r border-black">
            <p className="text-5xl font-bold tracking-tighter">₽2B</p>
            <p className="text-sm uppercase tracking-widest text-neutral-500 mt-2">личный pipeline</p>
          </div>
          <div className="py-8 pl-8">
            <p className="text-5xl font-bold tracking-tighter">87%</p>
            <p className="text-sm uppercase tracking-widest text-neutral-500 mt-2">выполнение плана команды</p>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="work" className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold tracking-tighter mb-4">КЕЙСЫ</h2>
          <p className="text-neutral-400 mb-12 max-w-xl">Проекты с измеримыми результатами — цифры важнее слов</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case 1 */}
            <div className="group border border-neutral-800 p-8 hover:border-red-600 transition-colors duration-300">
              <p className="text-red-600 text-sm uppercase tracking-widest mb-4">B2B / SaaS</p>
              <span className="text-neutral-800 text-8xl font-bold group-hover:text-red-600 transition-colors duration-300">01</span>
              <h3 className="text-xl font-bold mt-4 mb-3">Масштабирование отдела с нуля</h3>
              <p className="text-neutral-400 mb-6">Построил отдел продаж с 0 до 25 менеджеров. Разработал скрипты, систему KPI и онбординг.</p>
              <div className="grid grid-cols-2 gap-4 border-t border-neutral-800 pt-6">
                <div>
                  <p className="text-2xl font-bold text-red-600">+240%</p>
                  <p className="text-xs text-neutral-500 uppercase tracking-widest">выручка</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-red-600">6 мес</p>
                  <p className="text-xs text-neutral-500 uppercase tracking-widest">срок</p>
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div className="group border border-neutral-800 p-8 hover:border-red-600 transition-colors duration-300">
              <p className="text-red-600 text-sm uppercase tracking-widest mb-4">Enterprise / IT</p>
              <span className="text-neutral-800 text-8xl font-bold group-hover:text-red-600 transition-colors duration-300">02</span>
              <h3 className="text-xl font-bold mt-4 mb-3">Выход на новый рынок</h3>
              <p className="text-neutral-400 mb-6">Вывел продукт в корпоративный сегмент. Заключил 3 крупных контракта в первый квартал.</p>
              <div className="grid grid-cols-2 gap-4 border-t border-neutral-800 pt-6">
                <div>
                  <p className="text-2xl font-bold text-red-600">₽180М</p>
                  <p className="text-xs text-neutral-500 uppercase tracking-widest">новый ARR</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-red-600">3 мес</p>
                  <p className="text-xs text-neutral-500 uppercase tracking-widest">срок</p>
                </div>
              </div>
            </div>

            {/* Case 3 */}
            <div className="group border border-neutral-800 p-8 hover:border-red-600 transition-colors duration-300">
              <p className="text-red-600 text-sm uppercase tracking-widest mb-4">Retail / FMCG</p>
              <span className="text-neutral-800 text-8xl font-bold group-hover:text-red-600 transition-colors duration-300">03</span>
              <h3 className="text-xl font-bold mt-4 mb-3">Антикризисный менеджмент</h3>
              <p className="text-neutral-400 mb-6">Принял команду с выполнением плана 42%. За квартал поднял до 91% через переобучение и замену воронки.</p>
              <div className="grid grid-cols-2 gap-4 border-t border-neutral-800 pt-6">
                <div>
                  <p className="text-2xl font-bold text-red-600">42→91%</p>
                  <p className="text-xs text-neutral-500 uppercase tracking-widest">выполнение плана</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-red-600">1 кв.</p>
                  <p className="text-xs text-neutral-500 uppercase tracking-widest">срок</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-6xl font-bold tracking-tighter mb-8">ОБО МНЕ</h2>
              <div className="aspect-[4/5] bg-neutral-100 relative mb-8 md:mb-0">
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border-2 border-black"></div>
                  <div className="relative z-10">
                    <p className="text-4xl font-bold tracking-tighter">АЛЕКСЕЙ</p>
                    <p className="text-4xl font-bold tracking-tighter text-red-600">ИВАНОВ</p>
                    <p className="text-sm uppercase tracking-widest text-neutral-500 mt-2">Head of Sales</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-24">
              <p className="text-xl mb-6">
                Строю отделы продаж, которые растут системно — не на энтузиазме, а на процессах. 10+ лет в B2B и B2C, из них 7 — в управлении командами от 5 до 40 человек.
              </p>
              <p className="mb-6">
                Умею нанимать, обучать и мотивировать. Разрабатываю методологию продаж под продукт, внедряю CRM, выстраиваю систему отчётности и прогнозирования. Люблю сложные задачи — выход на новые рынки, реанимацию просевших команд, масштабирование.
              </p>
              <p className="mb-6">
                Работал в IT, FMCG и финансовых сервисах. Понимаю специфику enterprise и SMB. Принимаю решения на основе данных, а не ощущений.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-12">
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-4 text-red-600">Компетенции</h3>
                  <ul className="space-y-2 text-sm">
                    <li>Построение отделов продаж</li>
                    <li>Методология и скрипты</li>
                    <li>CRM / аналитика</li>
                    <li>Найм и обучение</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-4 text-red-600">Опыт в сферах</h3>
                  <ul className="space-y-2 text-sm">
                    <li>B2B SaaS</li>
                    <li>Enterprise IT</li>
                    <li>Финтех</li>
                    <li>Retail / FMCG</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-red-600 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-6xl font-bold tracking-tighter mb-8">КОНТАКТЫ</h2>
              <p className="text-xl mb-8">Ищете руководителя, который выстроит систему продаж? Давайте поговорим.</p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <span className="w-28 text-sm uppercase tracking-widest opacity-70">Почта</span>
                  <a href="mailto:ivanov@sales.pro" className="hover:underline">
                    ivanov@sales.pro
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="w-28 text-sm uppercase tracking-widest opacity-70">Телефон</span>
                  <a href="tel:+79991234567" className="hover:underline">
                    +7 (999) 123-45-67
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="w-28 text-sm uppercase tracking-widest opacity-70">LinkedIn</span>
                  <a href="#" className="hover:underline">linkedin.com/in/ivanov-sales</a>
                </p>
                <p className="flex items-center">
                  <span className="w-28 text-sm uppercase tracking-widest opacity-70">Telegram</span>
                  <a href="#" className="hover:underline">@ivanov_sales</a>
                </p>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-widest mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm uppercase tracking-widest mb-2">
                    Компания
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Название компании"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm uppercase tracking-widest mb-2">
                    Почта
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Ваш email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-widest mb-2">
                    Задача
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50 resize-none"
                    placeholder="Какую задачу нужно решить?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white text-sm uppercase tracking-widest py-4 hover:bg-white hover:text-black transition-colors"
                >
                  Отправить
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 border-t border-black">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm font-bold tracking-tighter">SALES.PRO — Алексей Иванов</p>
          <p className="text-sm text-neutral-500 mt-4 md:mt-0">Руководитель продаж · 10+ лет опыта</p>
        </div>
      </footer>
    </main>
  );
}
