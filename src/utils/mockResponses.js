import { evidenceLibrary } from '../data/bisData.js';

const fallbackTranslations = {
  en: {
    unsupported: "I couldn't find sufficient verified evidence to answer this question.",
  },
  hi: {
    unsupported: 'इस प्रश्न का उत्तर देने के लिए पर्याप्त सत्यापित साक्ष्य नहीं मिले।',
  },
};

export function generateMockResponse(query, language = 'en', translations = fallbackTranslations) {
  const normalized = String(query || '').trim();
  const lower = normalized.toLowerCase();
  const t = translations[language] || translations.en || fallbackTranslations.en;

  const isCertificationQuery = /(certif|license|registration|application|approval|compliance)/i.test(lower);
  const isLaboratoryQuery = /(laboratory|lab|testing|test centre|test center)/i.test(lower);
  const isStandardQuery = /\b(?:standard|product|applies|cover|clause|require|compliance|\bis\s+\d+)\b/i.test(lower);

  if (isCertificationQuery) {
    const evidence = evidenceLibrary[2];
    return {
      id: Date.now() + 2,
      role: 'assistant',
      type: 'certification',
      text:
        'To seek BIS certification, identify the applicable Indian Standard, arrange product testing in an approved laboratory, prepare technical documentation, and submit the certification application with the required evidence.',
      evidence,
    };
  }

  if (isLaboratoryQuery) {
    const evidence = evidenceLibrary[3];
    return {
      id: Date.now() + 3,
      role: 'assistant',
      type: 'lab',
      text:
        'The most suitable route is to shortlist a BIS-recognised or accredited testing laboratory that supports your product category and required testing type, then validate sample performance before filing the certification application.',
      evidence,
    };
  }

  if (isStandardQuery) {
    const evidence = evidenceLibrary[0];
    return {
      id: Date.now() + 1,
      role: 'assistant',
      type: 'standard',
      text:
        'Based on the available BIS information, this product may require compliance with the relevant Indian Standard. The likely mapped standard is IS 14500 for electrical appliances and product safety requirements.',
      evidence,
    };
  }

  return {
    id: Date.now() + 4,
    role: 'assistant',
    type: 'unsupported',
    text: t.unsupported,
    evidence: evidenceLibrary[1],
  };
}
