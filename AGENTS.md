# Website guidance

- Keep all 12 locales (`en`, `de`, `es`, `fr`, `id`, `ja`, `ko`, `nl`, `pl`, `ru`, `zh-Hans`, `zh-Hant`) consistent with the current English source. Update every other locale when English UI or documentation changes.
- Blog post titles and content stay in English across locales. Do not add translated post copies; keep blog interface labels localized.
- Use `FAQ` consistently for the navbar label, page title, and heading. Translate the FAQ answers.
- Do not use the em dash character in translations.
- Make buttons and other controls expand to fit longer translations, with enough horizontal padding; avoid fixed widths that clip translated text.
- Preserve the homepage tagline's blue emphasis for the phrases 'all-in-one', 'efficient', and 'creative'.
- Keep locale-prefixed routes working, including documentation routes such as `/nl/docs`. When validating, investigate page crashes and npm warnings, and check the localized site for consistency.
