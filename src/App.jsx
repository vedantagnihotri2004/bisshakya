import { useEffect, useState } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import {
  ArrowRight,
  BadgeCheck,
  BookOpenText,
  Building2,
  CheckCircle2,
  ChevronRight,
  FileText,
  Home,
  Info,
  Menu,
  MessageSquareText,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from 'lucide-react';
import {
  certificationSteps,
  certifications,
  dashboardStats,
  evidenceLibrary,
  laboratories,
  queryExamples,
  standards,
} from './data/bisData';
import { generateMockResponse } from './utils/mockResponses';

const translations = {
  en: {
    navHome: 'Home',
    navAsk: 'Ask BIS',
    navStandards: 'Standards',
    navCertification: 'Certification',
    navLab: 'Laboratories',
    navDashboard: 'Dashboard',
    heroHeading: 'Understand BIS. Find Standards. Navigate Certification.',
    heroDescription:
      'Get source-backed guidance for Indian standards, certification, testing and laboratories.',
    askButton: 'Ask BIS Sahayak',
    exploreButton: 'Explore Standards',
    standardFeature: 'Find a Standard',
    certFeature: 'Certification Guidance',
    labFeature: 'Laboratory Finder',
    infoFeature: 'BIS Information',
    askTitle: 'Ask BIS Sahayak',
    askPlaceholder: 'Ask about a BIS standard, certification, testing or laboratory...',
    evidence: 'Evidence',
    evidenceBacking: 'Evidence-backed response',
    unsupported: "I couldn't find sufficient verified evidence to answer this question.",
    refine: 'Refine Question',
    searchStandards: 'Search Standards',
    standardsTitle: 'Find Applicable Standards',
    productName: 'Product Name',
    productCategory: 'Product Category',
    intendedUse: 'Intended Use',
    findStandards: 'Find Standards',
    certificationTitle: 'BIS Certification Navigator',
    labTitle: 'Find a BIS Testing Laboratory',
    product: 'Product',
    testingType: 'Testing Type',
    location: 'Location',
    searchLabs: 'Search Laboratories',
    dashboardTitle: 'Dashboard',
    qAsked: 'Queries Asked',
    standardsFound: 'Standards Found',
    certificationsViewed: 'Certifications Viewed',
    laboratoriesFound: 'Laboratories Found',
  },
  hi: {
    navHome: 'मुख्य पृष्ठ',
    navAsk: 'BIS से पूछें',
    navStandards: 'मानक',
    navCertification: 'प्रमाणीकरण',
    navLab: 'प्रयोगशालाएँ',
    navDashboard: 'डैशबोर्ड',
    heroHeading: 'BIS को समझें। मानक खोजें। प्रमाणीकरण का मार्ग देखें।',
    heroDescription:
      'भारतीय मानकों, प्रमाणीकरण, परीक्षण और प्रयोगशालाओं के लिए स्रोत-आधारित मार्गदर्शन प्राप्त करें।',
    askButton: 'BIS सहरक्षक से पूछें',
    exploreButton: 'मानक देखें',
    standardFeature: 'मानक खोजें',
    certFeature: 'प्रमाणीकरण मार्गदर्शन',
    labFeature: 'प्रयोगशाला खोज',
    infoFeature: 'BIS जानकारी',
    askTitle: 'BIS सहरक्षक से पूछें',
    askPlaceholder: 'BIS मानक, प्रमाणीकरण, परीक्षण या प्रयोगशाला के बारे में पूछें...',
    evidence: 'साक्ष्य',
    evidenceBacking: 'साक्ष्य-आधारित उत्तर',
    unsupported: 'इस प्रश्न का उत्तर देने के लिए पर्याप्त सत्यापित साक्ष्य नहीं मिले।',
    refine: 'प्रश्न सुधारें',
    searchStandards: 'मानक खोजें',
    standardsTitle: 'प्रयोग के लिए सही मानक खोजें',
    productName: 'उत्पाद का नाम',
    productCategory: 'उत्पाद श्रेणी',
    intendedUse: 'उद्देश्य',
    findStandards: 'मानक खोजें',
    certificationTitle: 'BIS प्रमाणीकरण नेविगेटर',
    labTitle: 'BIS परीक्षण प्रयोगशाला खोजें',
    product: 'उत्पाद',
    testingType: 'परीक्षण प्रकार',
    location: 'स्थान',
    searchLabs: 'प्रयोगशालाएँ खोजें',
    dashboardTitle: 'डैशबोर्ड',
    qAsked: 'पूछे गए प्रश्न',
    standardsFound: 'मिले मानक',
    certificationsViewed: 'देखे गए प्रमाणीकरण',
    laboratoriesFound: 'मिली प्रयोगशालाएँ',
  },
};

const navItems = [
  { to: '/', labelKey: 'navHome', icon: Home },
  { to: '/ask-bis', labelKey: 'navAsk', icon: MessageSquareText },
  { to: '/standards', labelKey: 'navStandards', icon: BookOpenText },
  { to: '/certification', labelKey: 'navCertification', icon: ShieldCheck },
  { to: '/laboratories', labelKey: 'navLab', icon: Building2 },
  { to: '/dashboard', labelKey: 'navDashboard', icon: FileText },
];

function App() {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('bis-sahayak-language');
    return saved || 'en';
  });

  useEffect(() => {
    localStorage.setItem('bis-sahayak-language', language);
  }, [language]);

  return (
    <BrowserRouter>
      <AppShell language={language} setLanguage={setLanguage} />
    </BrowserRouter>
  );
}

function AppShell({ language, setLanguage }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = translations[language] || translations.en;

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <Navbar language={language} setLanguage={setLanguage} onMenuToggle={() => setMobileOpen((v) => !v)} />
      <div className="mx-auto max-w-[1600px] px-3 py-4 md:px-6 xl:px-8">
        <div className="flex gap-5">
          <Sidebar items={navItems} t={t} mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<LandingPage language={language} t={t} />} />
              <Route path="/ask-bis" element={<AskBisPage language={language} t={t} />} />
              <Route path="/standards" element={<StandardsPage language={language} t={t} />} />
              <Route path="/certification" element={<CertificationPage language={language} t={t} />} />
              <Route path="/laboratories" element={<LaboratoriesPage language={language} t={t} />} />
              <Route path="/dashboard" element={<DashboardPage language={language} t={t} />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
}

function Navbar({ language, setLanguage, onMenuToggle }) {
  return (
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 py-3 md:px-6 xl:px-8">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 md:hidden"
            onClick={onMenuToggle}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-white shadow-soft">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <div className="text-lg font-bold text-slate-900">BIS SAHAYAK</div>
              <div className="text-[11px] text-slate-500">Smart Automation</div>
            </div>
          </div>
        </div>

        <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-50 p-1 md:flex">
          <LanguageToggle language={language} setLanguage={setLanguage} />
        </div>
      </div>
    </header>
  );
}

function Sidebar({ items, t, mobileOpen, onClose }) {
  return (
    <aside className={`${mobileOpen ? 'block' : 'hidden'} w-full max-w-[260px] flex-col rounded-2xl border border-slate-200 bg-white p-3 shadow-soft md:flex`}>
      <div className="mb-3 flex items-center justify-between md:hidden">
        <div className="text-sm font-semibold text-slate-700">Menu</div>
        <button type="button" onClick={onClose} className="rounded p-1 hover:bg-slate-100">
          <X className="h-4 w-4" />
        </button>
      </div>
      <nav className="space-y-1">
        {items.map(({ to, labelKey, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                isActive
                  ? 'bg-navy text-white shadow-soft'
                  : 'text-slate-700 hover:bg-slate-100'
              }`
            }
          >
            <span className="flex items-center gap-3">
              <Icon className="h-4 w-4" />
              {t[labelKey]}
            </span>
            <ChevronRight className="h-4 w-4 opacity-70" />
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

function LanguageToggle({ language, setLanguage }) {
  return (
    <div className="inline-flex items-center rounded-full border border-slate-200 bg-white p-1">
      {['en', 'hi'].map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => setLanguage(lang)}
          className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
            language === lang ? 'bg-navy text-white' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          {lang === 'en' ? 'English' : 'हिंदी'}
        </button>
      ))}
    </div>
  );
}

function LandingPage({ t }) {
  const cards = [
    { title: t.standardFeature, description: 'Search standards by product, category and use-case.', icon: Search },
    { title: t.certFeature, description: 'Understand compliance steps and certification requirements.', icon: ShieldCheck },
    { title: t.labFeature, description: 'Locate testing labs and support services for compliance.', icon: Building2 },
    { title: t.infoFeature, description: 'Read BIS references, clauses and key information quickly.', icon: Info },
  ];

  return (
    <div className="space-y-6">
      <section className="rounded-[28px] border border-slate-200 bg-gradient-to-r from-slate-900 via-sky-950 to-sky-900 p-6 text-white shadow-soft md:p-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-sky-100">
              <Sparkles className="h-3.5 w-3.5" />
              BIS Sahayak Demo
            </div>
            <h1 className="text-3xl font-bold leading-tight md:text-5xl">{t.heroHeading}</h1>
            <p className="mt-4 max-w-xl text-sm text-slate-200 md:text-base">{t.heroDescription}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="light" to="/ask-bis">
                {t.askButton} <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="secondary" to="/standards">
                {t.exploreButton}
              </Button>
            </div>
          </div>
          <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-sky-100 md:min-w-[260px]">
            <div className="flex items-center justify-between rounded-xl bg-white/5 p-3">
              <span>Standards Matched</span>
              <strong className="text-white">42</strong>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-white/5 p-3">
              <span>Certifications</span>
              <strong className="text-white">19</strong>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-white/5 p-3">
              <span>Validated Labs</span>
              <strong className="text-white">11</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cards.map(({ title, description, icon: Icon }) => (
          <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            <p className="mt-2 text-sm text-slate-600">{description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

function AskBisPage({ language, t }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'assistant',
      text: 'I can help you find relevant BIS standards, certification guidance, testing pathways and accredited laboratory support.',
      evidence: {
        document: 'BIS Knowledge Base',
        standard: 'Guidance Index',
        section: 'Overview',
        clause: '1.0',
        source: 'BIS Knowledge Base',
        lastUpdated: '2026-09-01',
        relevance: 'High',
      },
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedEvidence, setSelectedEvidence] = useState(messages[0]?.evidence || evidenceLibrary[0]);

  useEffect(() => {
    if (messages[messages.length - 1]?.evidence) {
      setSelectedEvidence(messages[messages.length - 1].evidence);
    }
  }, [messages]);

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMessage = { id: Date.now(), role: 'user', text: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    setTimeout(() => {
      const result = generateMockResponse(trimmed, language);
      setMessages((prev) => [...prev, result]);
      setSelectedEvidence(result.evidence);
      setIsLoading(false);
    }, 900);
  }

  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-soft md:p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">{t.askTitle}</h2>
          <p className="text-sm text-slate-500">Evidence-first guidance for standards and BIS services.</p>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1.7fr)_320px]">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
          <div className="space-y-3">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} setSelectedEvidence={setSelectedEvidence} language={language} t={t} />
            ))}

            {isLoading && <LoadingAnimation text="Searching BIS knowledge..." />}
          </div>

          <form onSubmit={handleSubmit} className="mt-4 rounded-2xl border border-slate-200 bg-white p-3">
            <div className="flex flex-col gap-3 md:flex-row">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-primary focus:bg-white"
                placeholder={t.askPlaceholder}
              />
              <Button type="submit" variant="primary">
                Ask <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {queryExamples.map((example) => (
                <button
                  key={example}
                  type="button"
                  onClick={() => setInput(example)}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-600 transition hover:border-primary hover:text-primary"
                >
                  {example}
                </button>
              ))}
            </div>
          </form>
        </div>

        <EvidencePanel evidence={selectedEvidence || evidenceLibrary[0]} t={t} />
      </div>
    </div>
  );
}

function ChatMessage({ message, setSelectedEvidence, t }) {
  if (message.role === 'user') {
    return (
      <div className="flex justify-end">
        <div className="max-w-[85%] rounded-2xl bg-navy px-4 py-3 text-sm text-white shadow-soft">
          {message.text}
        </div>
      </div>
    );
  }

  const isUnsupported = message.type === 'unsupported';

  return (
    <div className="flex justify-start">
      <div className="max-w-[90%] rounded-2xl border border-slate-200 bg-white p-3 shadow-soft">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
          <BadgeCheck className="h-3.5 w-3.5" />
          {isUnsupported ? 'Insufficient Evidence' : t.evidenceBacking}
        </div>
        <p className="mt-2 text-sm leading-6 text-slate-700">{message.text}</p>

        {!isUnsupported && message.evidence && (
          <div className="mt-3">
            <EvidenceCard evidence={message.evidence} setSelectedEvidence={setSelectedEvidence} />
          </div>
        )}

        {isUnsupported && (
          <div className="mt-3 flex flex-wrap gap-2">
            <Button variant="secondary" size="sm">{t.refine}</Button>
            <Button variant="primary" size="sm">{t.searchStandards}</Button>
          </div>
        )}
      </div>
    </div>
  );
}

function EvidenceCard({ evidence, setSelectedEvidence }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
      <div className="mb-2 flex items-center justify-between gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
        <span>Source</span>
        <span className="rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-bold text-emerald-700">{evidence.relevance}</span>
      </div>
      <div className="space-y-2 text-sm text-slate-700">
        <p><span className="font-semibold text-slate-900">Document:</span> {evidence.document}</p>
        <p><span className="font-semibold text-slate-900">Section:</span> {evidence.section}</p>
        <p><span className="font-semibold text-slate-900">Clause:</span> {evidence.clause}</p>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setSelectedEvidence(evidence)}
          className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-primary hover:text-primary"
        >
          View Source
        </button>
        <button
          type="button"
          className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-primary hover:text-primary"
        >
          View Clause
        </button>
      </div>
    </div>
  );
}

function EvidencePanel({ evidence, t }) {
  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900">{t.evidence}</h3>
        <div className="rounded-full bg-emerald-100 p-2 text-emerald-700">
          <CheckCircle2 className="h-4 w-4" />
        </div>
      </div>

      <div className="space-y-3 text-sm text-slate-700">
        <div className="rounded-xl bg-slate-50 p-3">
          <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">Document</div>
          <div className="mt-1 font-semibold text-slate-900">{evidence.document}</div>
        </div>
        <div className="rounded-xl bg-slate-50 p-3">
          <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">Standard</div>
          <div className="mt-1 font-semibold text-slate-900">{evidence.standard}</div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
          <div className="rounded-xl bg-slate-50 p-3">
            <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">Section</div>
            <div className="mt-1 font-medium text-slate-800">{evidence.section}</div>
          </div>
          <div className="rounded-xl bg-slate-50 p-3">
            <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">Clause</div>
            <div className="mt-1 font-medium text-slate-800">{evidence.clause}</div>
          </div>
        </div>
        <div className="rounded-xl bg-slate-50 p-3">
          <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">Source</div>
          <div className="mt-1 font-medium text-slate-800">{evidence.source}</div>
        </div>
        <div className="rounded-xl bg-slate-50 p-3">
          <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">Last Updated</div>
          <div className="mt-1 font-medium text-slate-800">{evidence.lastUpdated}</div>
        </div>
      </div>

      <button type="button" className="mt-4 w-full rounded-xl bg-navy px-3 py-2 text-sm font-semibold text-white hover:bg-sky-900">
        Open Source
      </button>
    </aside>
  );
}

function StandardsPage({ t }) {
  const [form, setForm] = useState({ productName: '', category: 'appliance', intendedUse: '' });
  const [results, setResults] = useState(standards.slice(0, 3));

  const handleSubmit = (e) => {
    e.preventDefault();
    const filtered = standards.filter((item) => {
      const categoryMatch = form.category ? item.category === form.category : true;
      const textMatch = `${form.productName} ${form.intendedUse}`.toLowerCase();
      const productMatch = !textMatch ? true : item.name.toLowerCase().includes(textMatch) || item.applicableTo.toLowerCase().includes(textMatch);
      return categoryMatch && productMatch;
    });
    setResults(filtered.length ? filtered : standards.slice(0, 2));
  };

  return (
    <div className="space-y-5 rounded-[28px] border border-slate-200 bg-white p-4 shadow-soft md:p-5">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">{t.standardsTitle}</h2>
        <p className="text-sm text-slate-500">Map product descriptions to likely BIS Indian Standards.</p>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:grid-cols-3">
        <Field label={t.productName}>
          <input value={form.productName} onChange={(e) => setForm({ ...form, productName: e.target.value })} className="input" placeholder="e.g., Water heater" />
        </Field>
        <Field label={t.productCategory}>
          <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="input">
            <option value="appliance">Appliance</option>
            <option value="construction">Construction</option>
            <option value="plumbing">Plumbing</option>
            <option value="food">Food</option>
          </select>
        </Field>
        <Field label={t.intendedUse}>
          <input value={form.intendedUse} onChange={(e) => setForm({ ...form, intendedUse: e.target.value })} className="input" placeholder="e.g., domestic hot water use" />
        </Field>
        <div className="md:col-span-3">
          <Button type="submit" variant="primary">{t.findStandards}</Button>
        </div>
      </form>

      <div className="grid gap-4 lg:grid-cols-2">
        {results.map((item) => (
          <StandardCard key={item.code} standard={item} />
        ))}
      </div>
    </div>
  );
}

function StandardCard({ standard }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">{standard.code}</div>
          <h3 className="mt-1 text-lg font-semibold text-slate-900">{standard.name}</h3>
        </div>
        <StatusBadge label={standard.certification} tone={standard.certification === 'Required' ? 'amber' : 'emerald'} />
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-600">{standard.description}</p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-600">
        <span className="rounded-full bg-slate-100 px-2 py-1">Applicable To: {standard.applicableTo}</span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <Button variant="secondary" size="sm">View Standard</Button>
        <Button variant="primary" size="sm">View Certification</Button>
      </div>
    </div>
  );
}

function CertificationPage({ t }) {
  const [activeStep, setActiveStep] = useState('product');
  const active = certificationSteps.find((step) => step.id === activeStep) || certificationSteps[0];

  return (
    <div className="space-y-5 rounded-[28px] border border-slate-200 bg-white p-4 shadow-soft md:p-5">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">{t.certificationTitle}</h2>
        <p className="text-sm text-slate-500">Trace the compliance journey from product identification to certification.</p>
      </div>

      <CertificationStepper activeStep={activeStep} setActiveStep={setActiveStep} />

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <div className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary">Current Active Step</div>
        <h3 className="text-xl font-semibold text-slate-900">{active.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{active.detail}</p>
      </div>
    </div>
  );
}

function CertificationStepper({ activeStep, setActiveStep }) {
  return (
    <div className="grid gap-3 md:grid-cols-3 xl:grid-cols-6">
      {certificationSteps.map((step, index) => {
        const isActive = activeStep === step.id;
        return (
          <button
            key={step.id}
            type="button"
            onClick={() => setActiveStep(step.id)}
            className={`rounded-2xl border p-4 text-left transition ${
              isActive ? 'border-primary bg-primary/5 shadow-soft' : 'border-slate-200 bg-white hover:border-slate-300'
            }`}
          >
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                {String(index + 1).padStart(2, '0')}
              </span>
              {isActive && <Star className="h-4 w-4 text-primary" />}
            </div>
            <div className="text-base font-semibold text-slate-900">{step.title}</div>
          </button>
        );
      })}
    </div>
  );
}

function LaboratoriesPage({ t }) {
  const [form, setForm] = useState({ product: 'Electrical appliance', testingType: 'Safety', location: 'Delhi' });
  const [results, setResults] = useState(laboratories);

  const handleSubmit = (e) => {
    e.preventDefault();
    const filtered = laboratories.filter((lab) => {
      const byProduct = !form.product || lab.supportedStandards.join(' ').toLowerCase().includes(form.product.toLowerCase()) || lab.testingServices.join(' ').toLowerCase().includes(form.product.toLowerCase());
      const byType = !form.testingType || lab.testingServices.join(' ').toLowerCase().includes(form.testingType.toLowerCase());
      const byLocation = !form.location || lab.location.toLowerCase().includes(form.location.toLowerCase());
      return byProduct && byType && byLocation;
    });
    setResults(filtered.length ? filtered : laboratories.slice(0, 2));
  };

  return (
    <div className="space-y-5 rounded-[28px] border border-slate-200 bg-white p-4 shadow-soft md:p-5">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">{t.labTitle}</h2>
        <p className="text-sm text-slate-500">Locate BIS and accredited testing laboratories for your product.</p>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:grid-cols-3">
        <Field label={t.product}>
          <input value={form.product} onChange={(e) => setForm({ ...form, product: e.target.value })} className="input" placeholder="Electrical appliance" />
        </Field>
        <Field label={t.testingType}>
          <input value={form.testingType} onChange={(e) => setForm({ ...form, testingType: e.target.value })} className="input" placeholder="Safety" />
        </Field>
        <Field label={t.location}>
          <input value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className="input" placeholder="Delhi" />
        </Field>
        <div className="md:col-span-3">
          <Button type="submit" variant="primary">{t.searchLabs}</Button>
        </div>
      </form>

      <div className="grid gap-4 lg:grid-cols-2">
        {results.map((lab) => (
          <LaboratoryCard key={lab.name} lab={lab} />
        ))}
      </div>
    </div>
  );
}

function LaboratoryCard({ lab }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
      <div className="flex items-start justify-between gap-2">
        <div>
          <div className="text-lg font-semibold text-slate-900">{lab.name}</div>
          <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">
            <Building2 className="h-4 w-4" />
            {lab.location}
          </div>
        </div>
        <StatusBadge label="Approved" tone="emerald" />
      </div>
      <div className="mt-4 space-y-2 text-sm text-slate-600">
        <p><span className="font-semibold text-slate-800">Testing Services:</span> {lab.testingServices.join(', ')}</p>
        <p><span className="font-semibold text-slate-800">Supported Standards:</span> {lab.supportedStandards.join(', ')}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <Button variant="secondary" size="sm">View Details</Button>
        <Button variant="primary" size="sm">Contact</Button>
      </div>
    </div>
  );
}

function DashboardPage({ t }) {
  const [stats, setStats] = useState(() => {
    const stored = localStorage.getItem('bis-sahayak-dashboard');
    return stored ? JSON.parse(stored) : dashboardStats;
  });

  useEffect(() => {
    localStorage.setItem('bis-sahayak-dashboard', JSON.stringify(stats));
  }, [stats]);

  const cards = [
    { label: t.qAsked, value: stats.queriesAsked, icon: MessageSquareText },
    { label: t.standardsFound, value: stats.standardsFound, icon: Search },
    { label: t.certificationsViewed, value: stats.certificationsViewed, icon: BadgeCheck },
    { label: t.laboratoriesFound, value: stats.laboratoriesFound, icon: Building2 },
  ];

  return (
    <div className="space-y-5 rounded-[28px] border border-slate-200 bg-white p-4 shadow-soft md:p-5">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">{t.dashboardTitle}</h2>
        <p className="text-sm text-slate-500">Operational overview of BIS guidance usage and standard discovery.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cards.map(({ label, value, icon: Icon }) => (
          <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-center justify-between">
              <div className="text-sm text-slate-500">{label}</div>
              <div className="rounded-xl bg-white p-2 text-primary">
                <Icon className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-4 text-3xl font-bold text-slate-900">{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
      {label}
      {children}
    </label>
  );
}

function Button({ children, variant = 'primary', size = 'md', type = 'button', to, onClick }) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition';
  const variants = {
    primary: 'bg-navy text-white hover:bg-sky-900',
    secondary: 'border border-slate-200 bg-white text-slate-700 hover:border-primary hover:text-primary',
    light: 'border border-white/20 bg-white/10 text-white hover:bg-white/15',
  };
  const sizes = {
    sm: 'px-3 py-2 text-xs',
    md: 'px-4 py-2.5 text-sm',
  };

  if (to) {
    return (
      <NavLink to={to} className={`${base} ${variants[variant]} ${sizes[size]}`}>
        {children}
      </NavLink>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${base} ${variants[variant]} ${sizes[size]}`}>
      {children}
    </button>
  );
}

function StatusBadge({ label, tone = 'emerald' }) {
  const tones = {
    emerald: 'bg-emerald-100 text-emerald-700',
    amber: 'bg-amber-100 text-amber-700',
    blue: 'bg-sky-100 text-sky-700',
  };

  return <span className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] ${tones[tone]}`}>{label}</span>;
}

function LoadingAnimation({ text }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-soft">
      <div className="flex gap-1.5">
        <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-primary [animation-delay:-0.2s]" />
        <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-primary [animation-delay:-0.1s]" />
        <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-primary" />
      </div>
      <div className="text-sm font-medium text-slate-600">{text}</div>
    </div>
  );
}

export default App;
