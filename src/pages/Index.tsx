import { useState } from "react";
import Icon from "@/components/ui/icon";

const tools = [
  "Amo CRM", "Trello", "Mindmeister", "Excel", "Google Docs",
  "IP-телефония", "Zoom", "СПИН-продажи", "Custdev", "JTBD",
  "Due diligence", "РНП-отчёт", "Скрипты", "Воронка продаж",
  "Управление отделом", "High-ticket B2B"
];

const faqs = [
  {
    q: "Какой план продаж вы выполняли (в рублях)?",
    a: "На последнем месте план отдела — 1 млн ₽/месяц (факт до 1,5 млн). Личные планы: в Финтегре — 1,6 млн ₽/мес (выполнял), у Дашкиева — закрыл 8,5 млн за 9 месяцев без плана.",
    bullets: []
  },
  {
    q: "Какая была конверсия в вашем отделе?",
    a: "Конверсия отдела (лид → оплата) — 12%. Моя личная конверсия — 16%. У Дашкиева моя конверсия из встречи в сделку — 20%.",
    bullets: []
  },
  {
    q: "Что конкретно вы сделали, чтобы увеличить продажи?",
    a: "",
    bullets: [
      "Провёл Custdev и переупаковал продукт → средний чек вырос с 360 до 500 тыс. ₽",
      "Внедрил РНП-отчёт и ежедневный контроль воронки → потеря сделок снизилась на 30%",
      "Обучил команду скриптам СПИН и чек-листу due diligence → конверсия из встречи в счёт выросла с 8% до 18% за 4 месяца",
      "Сам веду 5–10 встреч в неделю → показываю дожим на сложных клиентах"
    ]
  }
];

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState(0);

  const artifactTabs = [
    {
      icon: "FileSpreadsheet",
      title: "РНП-отчёт",
      desc: "Еженедельный отчёт каждого менеджера в Google Sheets — Результат, Намерение, Проблема.",
      content: (
        <div className="space-y-4">
          <img src="https://cdn.poehali.dev/files/5634ab75-8f91-480d-aca9-a8b9bab6e967.png" alt="Планируемые оплаты" className="w-full border border-white/10 rounded" />
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#84FF00] text-black">
                  <th className="border border-[#84FF00]/30 px-3 py-2 text-left font-bold">Менеджер</th>
                  <th className="border border-[#84FF00]/30 px-3 py-2 text-left font-bold">Результат за неделю</th>
                  <th className="border border-[#84FF00]/30 px-3 py-2 text-left font-bold">Намерение на след. неделю</th>
                  <th className="border border-[#84FF00]/30 px-3 py-2 text-left font-bold">Проблема / запрос</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white/5">
                  <td className="border border-white/10 px-3 py-2 font-medium text-white">Иван К.</td>
                  <td className="border border-white/10 px-3 py-2 text-white/70">3 встречи, 1 счёт на 500 тыс.</td>
                  <td className="border border-white/10 px-3 py-2 text-white/70">Довести 2 сделки до оплаты</td>
                  <td className="border border-white/10 px-3 py-2 text-white/70">Клиент тянет с решением</td>
                </tr>
                <tr className="bg-white/[0.02]">
                  <td className="border border-white/10 px-3 py-2 font-medium text-white">Ольга Р.</td>
                  <td className="border border-white/10 px-3 py-2 text-white/70">5 звонков, 2 встречи назначены</td>
                  <td className="border border-white/10 px-3 py-2 text-white/70">Закрыть 1 сделку до пятницы</td>
                  <td className="border border-white/10 px-3 py-2 text-white/70">Нет шаблона КП под новый продукт</td>
                </tr>
                <tr className="bg-white/5">
                  <td className="border border-white/10 px-3 py-2 font-medium text-white">Андрей М.</td>
                  <td className="border border-white/10 px-3 py-2 text-white/70">2 встречи, оплата 580 тыс.</td>
                  <td className="border border-white/10 px-3 py-2 text-white/70">4 новых квалификации</td>
                  <td className="border border-white/10 px-3 py-2 text-white/70">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      icon: "TrendingDown",
      title: "Воронка продаж",
      desc: "6 этапов с конверсией отдела (12% лид → оплата) в Amo CRM.",
      content: (
        <div className="space-y-4">
          <img src="https://cdn.poehali.dev/files/79e8b4bf-5dfb-406a-8d97-bc7095cfc4a3.png" alt="Канбан воронка сделок" className="w-full border border-white/10 rounded" />
          <div className="space-y-2">
            {[
              { stage: "Лиды", pct: 100, color: "bg-[#84FF00]" },
              { stage: "Квалификация", pct: 70, color: "bg-[#6fd400]" },
              { stage: "Встреча назначена", pct: 40, color: "bg-[#5ab800]" },
              { stage: "КЭВ (ключевой этап)", pct: 25, color: "bg-[#439900]" },
              { stage: "Счёт выставлен", pct: 18, color: "bg-[#2d7a00]" },
              { stage: "Оплата", pct: 12, color: "bg-[#1a5c00]" },
            ].map((row) => (
              <div key={row.stage} className="flex items-center gap-3">
                <div className="w-40 text-sm text-right text-white/50 shrink-0">{row.stage}</div>
                <div className="flex-1 bg-white/10 h-8 relative">
                  <div className={`${row.color} h-8 flex items-center px-3`} style={{ width: `${row.pct}%` }}>
                    <span className="text-black text-xs font-bold">{row.pct}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      icon: "BarChart2",
      title: "Дашборд KPI",
      desc: "Ежедневный контроль менеджеров: звонки, встречи, счета, оплаты, % выполнения плана.",
      content: (
        <div className="space-y-4">
          <img src="https://cdn.poehali.dev/files/4abd47be-3630-4bf9-b598-5f33c5fe7e6a.png" alt="Дашборд KPI" className="w-full border border-white/10 rounded" />
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#84FF00] text-black">
                  <th className="border border-[#84FF00]/30 px-3 py-2 text-left font-bold">Менеджер</th>
                  <th className="border border-[#84FF00]/30 px-3 py-2 text-center font-bold">Звонки</th>
                  <th className="border border-[#84FF00]/30 px-3 py-2 text-center font-bold">Встречи</th>
                  <th className="border border-[#84FF00]/30 px-3 py-2 text-center font-bold">Счета</th>
                  <th className="border border-[#84FF00]/30 px-3 py-2 text-center font-bold">Оплаты</th>
                  <th className="border border-[#84FF00]/30 px-3 py-2 text-right font-bold">Выручка</th>
                  <th className="border border-[#84FF00]/30 px-3 py-2 text-center font-bold">% плана</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white/5">
                  <td className="border border-white/10 px-3 py-2 font-medium text-white">Анна С.</td>
                  <td className="border border-white/10 px-3 py-2 text-center text-white/70">42</td>
                  <td className="border border-white/10 px-3 py-2 text-center text-white/70">8</td>
                  <td className="border border-white/10 px-3 py-2 text-center text-white/70">4</td>
                  <td className="border border-white/10 px-3 py-2 text-center text-white/70">3</td>
                  <td className="border border-white/10 px-3 py-2 text-right font-bold text-white">2,5 млн ₽</td>
                  <td className="border border-white/10 px-3 py-2 text-center font-bold text-[#84FF00]">125%</td>
                </tr>
                <tr className="bg-white/[0.02]">
                  <td className="border border-white/10 px-3 py-2 font-medium text-white">Дмитрий Л.</td>
                  <td className="border border-white/10 px-3 py-2 text-center text-white/70">31</td>
                  <td className="border border-white/10 px-3 py-2 text-center text-white/70">5</td>
                  <td className="border border-white/10 px-3 py-2 text-center text-white/70">2</td>
                  <td className="border border-white/10 px-3 py-2 text-center text-white/70">2</td>
                  <td className="border border-white/10 px-3 py-2 text-right font-bold text-white">1,4 млн ₽</td>
                  <td className="border border-white/10 px-3 py-2 text-center font-bold text-red-400">70%</td>
                </tr>
                <tr className="bg-white/5">
                  <td className="border border-white/10 px-3 py-2 font-medium text-white">Ирина В.</td>
                  <td className="border border-white/10 px-3 py-2 text-center text-white/70">55</td>
                  <td className="border border-white/10 px-3 py-2 text-center text-white/70">11</td>
                  <td className="border border-white/10 px-3 py-2 text-center text-white/70">5</td>
                  <td className="border border-white/10 px-3 py-2 text-center text-white/70">4</td>
                  <td className="border border-white/10 px-3 py-2 text-right font-bold text-white">3,0 млн ₽</td>
                  <td className="border border-white/10 px-3 py-2 text-center font-bold text-[#84FF00]">150%</td>
                </tr>
                <tr className="bg-[#84FF00]/10">
                  <td className="border border-white/10 px-3 py-2 font-bold text-[#84FF00]">ИТОГО</td>
                  <td className="border border-white/10 px-3 py-2 text-center font-bold text-white">128</td>
                  <td className="border border-white/10 px-3 py-2 text-center font-bold text-white">24</td>
                  <td className="border border-white/10 px-3 py-2 text-center font-bold text-white">11</td>
                  <td className="border border-white/10 px-3 py-2 text-center font-bold text-white">9</td>
                  <td className="border border-white/10 px-3 py-2 text-right font-bold text-[#84FF00]">6,9 млн ₽</td>
                  <td className="border border-white/10 px-3 py-2 text-center text-[#84FF00] font-bold">115%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      icon: "ClipboardCheck",
      title: "Due Diligence чек-лист",
      desc: "14 пунктов отбора клиентов перед тем, как брать в работу.",
      content: (
        <div className="space-y-4">
          <img src="https://cdn.poehali.dev/files/b97222c4-5228-406b-b822-03f4e2b5d72f.png" alt="Таблица прогресса проектов" className="w-full border border-white/10 rounded" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {[
              "Выручка компании ≥ 50 млн ₽/год",
              "Срочность привлечения инвестиций — до 3 мес.",
              "Бюджет на услугу от 500 тыс. ₽",
              "Собственник лично участвует в переговорах",
              "Понятная бизнес-модель и продукт",
              "Нет уголовных дел и открытых судов",
              "ОКВЭД соответствует деятельности",
              "Открыт к внешним инвесторам",
              "Готов к аудиту финансовой отчётности",
              "Стратегия роста на 3 года сформирована",
              "Команда ≥ 5 человек в штате",
              "Маржинальность ≥ 20%",
              "Нет критических долгов перед ФНС",
              "Собственник понимает риски инвестиций"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 p-3 bg-white/5 border border-white/10 hover:border-[#84FF00]/50 transition-colors">
                <span className="text-[#84FF00] font-bold text-xs mt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-sm text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      icon: "MessageSquare",
      title: "Скрипт СПИН",
      desc: "Структура Zoom-встречи по методологии СПИН-продаж.",
      content: (
        <div className="space-y-4">
          <img src="https://cdn.poehali.dev/files/eb81ac52-4220-4f58-a471-d5adf5cb5861.png" alt="Дашборд ассистент" className="w-full border border-white/10 rounded" />
          {[
            {
              type: "С — Ситуационные",
              lines: [
                "— Расскажите, как сейчас привлекаете инвестиции?",
                "— Какой объём финансирования вам нужен и в какие сроки?"
              ]
            },
            {
              type: "П — Проблемные",
              lines: [
                "— Что мешает привлечь инвестиции самостоятельно?",
                "— Были ли уже попытки? Что пошло не так?"
              ]
            },
            {
              type: "И — Извлекающие",
              lines: [
                "— Если не решить вопрос в ближайшие 3 месяца — как это скажется на бизнесе?",
                "— Сколько вы теряете каждый месяц без нужного финансирования?"
              ]
            },
            {
              type: "Н — Направляющие",
              lines: [
                "— Если бы у вас был партнёр с базой из 2000+ инвесторов — это решило бы задачу?",
                "— Давайте разберём, как это работает на практике..."
              ]
            }
          ].map((block, idx) => (
            <div key={block.type} className={`p-4 border-l-4 ${idx === 3 ? "bg-[#84FF00]/10 border-[#84FF00]" : "bg-white/5 border-white/20"}`}>
              <p className={`text-xs uppercase tracking-widest font-bold mb-2 ${idx === 3 ? "text-[#84FF00]" : "text-white/40"}`}>
                {block.type}
              </p>
              {block.lines.map((line, i) => (
                <p key={i} className="text-sm mb-1 text-white/80">{line}</p>
              ))}
            </div>
          ))}
        </div>
      )
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white font-['Inter',sans-serif]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0d0d0d]/95 backdrop-blur border-b border-white/10">
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-lg font-bold tracking-tighter text-white">М. ДЕРГАУСОВ</a>
          <div className="hidden md:flex space-x-6">
            {[["#metrics","Метрики"],["#tools","Инструменты"],["#cases","Кейсы"],["#faq","Вопросы"],["#contact","Контакты"]].map(([href, label]) => (
              <a key={href} href={href} className="text-xs uppercase tracking-widest text-white/60 hover:text-[#84FF00] transition-colors">{label}</a>
            ))}
          </div>
          <a href="#contact" className="bg-[#84FF00] text-black text-xs uppercase tracking-widest font-bold px-5 py-2 hover:bg-[#6fd400] transition-colors">
            Связаться
          </a>
        </div>
      </nav>

      {/* BLOCK 1: Hero */}
      <section className="pt-28 pb-16 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-6 items-center">
            <div className="col-span-12 md:col-span-7">
              <p className="text-xs uppercase tracking-widest text-[#84FF00] mb-3">Head of Sales · Руководитель отдела продаж</p>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-4 text-white">
                МИХАИЛ<br />
                <span className="text-[#84FF00]">ДЕРГАУСОВ</span>
              </h1>
              <ul className="mb-6 space-y-1">
                <li className="text-base font-semibold flex items-start gap-2 text-white"><span className="text-[#84FF00] mt-1">·</span> Построение продаж с нуля</li>
                <li className="text-base font-semibold flex items-start gap-2 text-white"><span className="text-[#84FF00] mt-1">·</span> High-ticket B2B (500 тыс. – 1 млн ₽)</li>
              </ul>
              <p className="text-white/60 max-w-xl mb-8 leading-relaxed">
                Беру ответственность за выручку.<br />
                Умею делать результат руками и через команду.<br />
                Построил отдел продаж, который принёс <strong className="text-white">1,4 млрд ₽</strong> оборота компании.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#cases" className="bg-[#84FF00] text-black text-sm uppercase tracking-widest font-bold px-8 py-4 hover:bg-[#6fd400] transition-colors text-center">
                  Смотреть кейсы
                </a>
                <a href="#contact" className="border border-white/30 text-white text-sm uppercase tracking-widest px-8 py-4 hover:border-[#84FF00] hover:text-[#84FF00] transition-colors text-center">
                  Связаться
                </a>
              </div>
            </div>
            <div className="col-span-12 md:col-span-5">
              <div className="relative">
                <div className="aspect-[3/4] bg-neutral-900 relative overflow-hidden">
                  <img
                    src="https://cdn.poehali.dev/files/746cde91-6822-4d9d-b3a8-768b2458f0ac.jpg"
                    alt="Михаил Дергаусов"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur p-6">
                    <div className="grid grid-cols-3 gap-4 text-white">
                      <div className="text-center">
                        <p className="text-xl font-bold text-[#84FF00]">21 МЛН</p>
                        <p className="text-xs text-white/50 mt-1">выручка отдела</p>
                      </div>
                      <div className="text-center border-x border-white/20">
                        <p className="text-xl font-bold text-[#84FF00]">135 МЛН</p>
                        <p className="text-xs text-white/50 mt-1">продажи</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xl font-bold text-[#84FF00]">10+ ЛЕТ</p>
                        <p className="text-xs text-white/50 mt-1">sales опыт</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 2: Metrics */}
      <section id="metrics" className="py-16 px-4 md:px-8 bg-black">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-2 text-white">РЕЗУЛЬТАТЫ</h2>
          <p className="text-white/40 mb-12 text-sm uppercase tracking-widest">в цифрах — не словах</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-0">
            {[
              { value: "21 млн ₽", label: "Выручка от продаж услуг", sub: "на последнем месте за 2 года" },
              { value: "1,4 млрд ₽", label: "Инвестиции клиентов", sub: "оборот компании за счет клиентов моего отдела" },
              { value: "135 млн ₽", label: "Личные продажи за 8 лет", sub: "" },
              { value: "500к–1М ₽", label: "Средний чек", sub: "high-ticket B2B" },
              { value: "250+", label: "Встреч с собственниками", sub: "лично провёл" },
              { value: "16%", label: "Личная конверсия", sub: "из встречи в сделку" },
            ].map((m, i) => (
              <div key={i} className="p-8 border border-white/10 hover:border-[#84FF00] transition-colors group">
                <p className="text-3xl md:text-4xl font-bold text-[#84FF00] tracking-tighter mb-2">{m.value}</p>
                <p className="text-sm font-semibold mb-1 text-white">{m.label}</p>
                <p className="text-xs text-white/40">{m.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCK 3: Tools & Artifacts */}
      <section id="tools" className="py-16 px-4 md:px-8 bg-[#0d0d0d]">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-2 text-white">КАК Я УПРАВЛЯЮ ПРОДАЖАМИ</h2>
          <p className="text-white/50 mb-12 max-w-2xl">Прозрачные метрики, а не «кажется». Примеры реальных артефактов из работы.</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {artifactTabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-4 py-2 text-sm uppercase tracking-widest border transition-colors ${activeTab === i ? "bg-[#84FF00] text-black border-[#84FF00] font-bold" : "border-white/20 text-white/60 hover:border-[#84FF00] hover:text-[#84FF00]"}`}
              >
                <Icon name={tab.icon as "FileSpreadsheet"} size={14} />
                {tab.title}
              </button>
            ))}
          </div>

          <div className="border border-white/10 p-6 md:p-8 bg-black">
            <p className="text-sm text-white/40 mb-6">{artifactTabs[activeTab].desc}</p>
            {artifactTabs[activeTab].content}
          </div>
        </div>
      </section>

      {/* BLOCK 4: Case 1 - Zapusk.tech */}
      <section id="cases" className="py-16 px-4 md:px-8 bg-black">
        <div className="container mx-auto">
          <p className="text-[#84FF00] text-xs uppercase tracking-widest mb-3">Кейс 01 · Zapusk.tech</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 max-w-3xl text-white">
            Разработал продукт и построил отдел продаж с выручкой 1.5 млн ₽ в месяц с нуля
          </h2>
          <p className="text-white/50 mb-12 max-w-2xl">
            Инвестплатформа, B2B.<br />
            Клиенты — собственники бизнеса с выручкой от 50 млн ₽/год.<br />
            Команда: 2 менеджера + 1 маркетолог + 1 юрист + 1 ассистент.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-[#84FF00] mb-6">Что сделал</h3>
              <ul className="space-y-3">
                {[
                  "30+ Custdev-интервью → сегментация клиентов → JTBD",
                  "Разработал 3 продукта: страт-сессия (50 тыс.), «под ключ» (580 тыс.), подписка (360 тыс./квартал)",
                  "Построил воронку продаж из 6 этапов в Amo CRM",
                  "Внедрил РНП-отчёт и ежедневный контроль KPI менеджеров",
                  "Лично провёл 250+ встреч с собственниками (конверсия 16%)",
                  "Обучил команду скриптам СПИН и чек-листу due diligence"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                    <span className="text-[#84FF00] font-bold mt-0.5 shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-widest text-[#84FF00] mb-6">Результаты</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { v: "21 млн ₽", l: "Выручка отдела" },
                  { v: "500 тыс.", l: "Средний чек" },
                  { v: "42", l: "Клиента купили услугу" },
                  { v: "16", l: "Проектов размещено" },
                  { v: "1,4 млрд ₽", l: "Инвестиций в проекты" },
                  { v: "2 мес.", l: "Срок оказания услуги" },
                  { v: "16%", l: "Личная конверсия" },
                  { v: "20%", l: "Время на контроль отдела" },
                ].map((item, i) => (
                  <div key={i} className="border border-white/10 p-4 hover:border-[#84FF00] transition-colors group">
                    <p className="text-2xl font-bold text-[#84FF00]">{item.v}</p>
                    <p className="text-xs text-white/40 mt-1">{item.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 5: Case 2 - Scale UP */}
      <section className="py-16 px-4 md:px-8 bg-[#0d0d0d]">
        <div className="container mx-auto">
          <p className="text-[#84FF00] text-xs uppercase tracking-widest mb-3">Кейс 02 · Scale UP</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 max-w-3xl text-white">
            Scale UP — бизнес курс.<br />Основатель: Михаил Дашкиев.<br />Чек курса 1 млн ₽
          </h2>
          <p className="text-white/50 mb-12 max-w-2xl">
            Проект с нуля, гипотеза. Закрыт из-за экономики — но результаты говорят сами за себя.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-white/40 mb-6">Что делал</h3>
              <ul className="space-y-3">
                {[
                  "40+ Zoom-встреч с собственниками (выручка от 100+ млн ₽)",
                  "СПИН-продажи, дожим до выставления счёта",
                  "Работа в Amo CRM, Trello, Mindmeister",
                  "За первые 2 недели продал мероприятие в Дубае на 1,4 млн ₽"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                    <span className="text-[#84FF00] font-bold mt-0.5 shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { v: "1 000 000 ₽", l: "Средний чек" },
                { v: "8,5 млн ₽", l: "8 сделок за 7 месяцев" },
                { v: "1,4 млн ₽", l: "Продажа в первые 2 недели" },
                { v: "20%", l: "Конверсия из встречи" },
                { v: "14 дней", l: "Средний цикл сделки" },
                { v: "40+", l: "Zoom-встреч с собственниками" },
              ].map((item, i) => (
                <div key={i} className="border border-white/10 p-4 hover:border-[#84FF00] transition-colors group">
                  <p className="text-2xl font-bold text-[#84FF00]">{item.v}</p>
                  <p className="text-xs text-white/40 mt-1">{item.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 6: Tools cloud */}
      <section className="py-16 px-4 md:px-8 bg-black border-t border-white/10">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-10 text-white">ИНСТРУМЕНТЫ</h2>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, i) => (
              <span
                key={i}
                className={`px-4 py-2 text-sm font-medium border tracking-wide transition-colors cursor-default ${i % 5 === 0 ? "bg-[#84FF00] text-black border-[#84FF00] font-bold" : i % 3 === 0 ? "bg-white/10 text-white border-white/20" : "border-white/20 text-white/70 hover:border-[#84FF00] hover:text-[#84FF00]"}`}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCK 7: FAQ */}
      <section id="faq" className="py-16 px-4 md:px-8 bg-[#0d0d0d]">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-3 text-white">ПРЯМЫЕ ОТВЕТЫ</h2>
          <p className="text-white/40 mb-12">На ключевые вопросы работодателя</p>
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <div key={i} className="border-t border-white/10 last:border-b">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-start justify-between py-6 text-left gap-4 hover:text-[#84FF00] transition-colors text-white"
                >
                  <span className="font-semibold text-base md:text-lg leading-tight">{faq.q}</span>
                  <Icon name={openFaq === i ? "Minus" : "Plus"} size={20} className="shrink-0 mt-0.5" />
                </button>
                {openFaq === i && (
                  <div className="pb-6">
                    {faq.a && <p className="text-white/60 mb-4">{faq.a}</p>}
                    {faq.bullets.length > 0 && (
                      <ul className="space-y-2">
                        {faq.bullets.map((b, j) => (
                          <li key={j} className="flex items-start gap-3 text-sm text-white/60">
                            <span className="text-[#84FF00] font-bold mt-0.5 shrink-0">→</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCK 8: Education */}
      <section className="py-16 px-4 md:px-8 bg-black">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-12 text-white">ОБРАЗОВАНИЕ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-[#84FF00] mb-4">Основное</h3>
              <p className="font-semibold mb-1 text-white">ГОУСПОМКЖТ, 2014</p>
              <p className="text-white/40 text-sm">Техническая эксплуатация подвижного состава</p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-widest text-[#84FF00] mb-4">Дополнительные курсы</h3>
              <ul className="space-y-2 text-sm text-white/60">
                <li>«Креатор» (Mads) — 50ч</li>
                <li>«Профи трейдер за 50 дней» (Blago) — 30ч</li>
                <li>«SMM-менеджер» (smmagnat.ru) — 20ч</li>
                <li>«Основа рекламного видео» (movieparkpro.com) — 80ч</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-widest text-[#84FF00] mb-4">Ключевые книги</h3>
              <ul className="space-y-2 text-sm text-white/60">
                <li>Нил Рекхем — «СПИН-продажи»</li>
                <li>Гребенюк — «Отдел по захвату рынка»</li>
                <li>Джеймс Клир — «Атомные привычки»</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 9: Values */}
      <section className="py-16 px-4 md:px-8 bg-[#0d0d0d]">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-12 text-white">ЦЕННОСТИ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            {[
              { icon: "Target", title: "Ответственность за выручку", text: "Не прячусь за отчётами. Если план не выполнен — первым иду в поле." },
              { icon: "Eye", title: "Прозрачность", text: "Каждый сотрудник видит свою цифру и чужую. Конкуренция на основе KPI." },
              { icon: "TrendingUp", title: "Непрерывное развитие", text: "Каждую неделю разбираю с командой 1–2 сделки. Рост — это привычка, не событие." },
              { icon: "Shield", title: "Честность", text: "Не обещаю золотых гор. Говорю, какой результат реален за первые 3 месяца." },
            ].map((v, i) => (
              <div key={i} className="flex gap-5 p-6 border border-white/10 hover:border-[#84FF00] transition-colors group">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-white/5 group-hover:bg-[#84FF00] transition-colors flex items-center justify-center">
                    <Icon name={v.icon as "Target"} size={20} className="text-[#84FF00] group-hover:text-black transition-colors" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-white">{v.title}</h3>
                  <p className="text-sm text-white/50">{v.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#84FF00] p-8 md:p-12">
            <p className="text-black text-2xl md:text-3xl font-bold leading-snug max-w-2xl">
              «Стань результатом успеха других людей и тогда сам станешь успешным»
            </p>
            <p className="text-black/60 mt-4 text-sm uppercase tracking-widest">— Михаил Дергаусов</p>
          </div>
        </div>
      </section>

      {/* BLOCK 10: Contacts */}
      <section id="contact" className="py-16 px-4 md:px-8 bg-black">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-white">ГОТОВ К РАБОТЕ</h2>
              <p className="text-white/60 text-lg mb-2">Удалённая работа, полная занятость.</p>
              <p className="text-[#84FF00] font-semibold mb-10">Выход на результат за первые 30 дней.</p>

              <div className="space-y-5 mb-10">
                <a href="https://t.me/GausMikhail" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-white/5 group-hover:bg-[#84FF00] transition-colors flex items-center justify-center shrink-0">
                    <Icon name="Send" size={16} className="text-white group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-white/30 uppercase tracking-widest mb-0.5">Telegram</p>
                    <p className="text-white group-hover:text-[#84FF00] transition-colors">@GausMikhail</p>
                  </div>
                </a>
                <a href="mailto:m.dergausov17@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-white/5 group-hover:bg-[#84FF00] transition-colors flex items-center justify-center shrink-0">
                    <Icon name="Mail" size={16} className="text-white group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-white/30 uppercase tracking-widest mb-0.5">Email</p>
                    <p className="text-white group-hover:text-[#84FF00] transition-colors">m.dergausov17@gmail.com</p>
                  </div>
                </a>
                <a href="https://wa.me/79254803736" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-white/5 group-hover:bg-[#84FF00] transition-colors flex items-center justify-center shrink-0">
                    <Icon name="Phone" size={16} className="text-white group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-white/30 uppercase tracking-widest mb-0.5">WhatsApp</p>
                    <p className="text-white group-hover:text-[#84FF00] transition-colors">+7 925 480-37-36</p>
                  </div>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://t.me/GausMikhail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#84FF00] text-black text-sm uppercase tracking-widest font-bold px-8 py-4 hover:bg-[#6fd400] transition-colors text-center"
                >
                  Пригласить на собеседование
                </a>
                <a
                  href="https://t.me/GausMikhail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/20 text-white text-sm uppercase tracking-widest px-8 py-4 hover:border-[#84FF00] hover:text-[#84FF00] transition-colors text-center"
                >
                  Написать в Telegram
                </a>
              </div>
            </div>

            <div className="aspect-[3/4] relative overflow-hidden">
              <img
                src="https://cdn.poehali.dev/files/746cde91-6822-4d9d-b3a8-768b2458f0ac.jpg"
                alt="Михаил Дергаусов"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 md:px-8 border-t border-white/10 bg-[#0d0d0d]">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-sm font-bold tracking-tighter text-white">МИХАИЛ ДЕРГАУСОВ · HEAD OF SALES</p>
          <p className="text-xs text-white/30 uppercase tracking-widest">Построение продаж с нуля · High-ticket B2B</p>
        </div>
      </footer>
    </main>
  );
}
