# Translation System

This project uses a JSON-based translation system with separate files per language for easy maintenance and scalability. Language preferences are automatically saved to localStorage for a better user experience.

## Structure

### File Locations
- **Language Configuration**: `public/translations/config.json`
- **Spanish Translations**: `public/translations/es.json`
- **English Translations**: `public/translations/en.json`
- **Hook**: `hooks/useTranslations.ts`
- **Language Preference Hook**: `hooks/useLanguagePreference.ts`
- **Types**: `hooks/useTranslations.ts`

### Translation Structure
Each language file contains all sections for that language:

```json
// public/translations/es.json
{
  "header": { ... },
  "hero": { ... },
  "services": { ... },
  "industries": { ... },
  "team": { ... },
  "portfolio": { ... },
  "cta": { ... },
  "footer": { ... }
}
```

### Configuration Structure
```json
// public/translations/config.json
{
  "languages": {
    "es": {
      "name": "Español",
      "nativeName": "Español",
      "flag": "🇪🇸",
      "direction": "ltr"
    },
    "en": {
      "name": "English",
      "nativeName": "English",
      "flag": "🇺🇸",
      "direction": "ltr"
    }
  },
  "defaultLanguage": "es",
  "fallbackLanguage": "en"
}
```

## Usage

### In Components
```tsx
import { useTranslations } from "@/hooks"

export function MyComponent() {
  const { translations, loading, error } = useTranslations()
  
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  
  const t = translations.es // or translations.en
  
  return <div>{t.header.services}</div>
}
```

### In Main Page
```tsx
export default function HomePage() {
  const { translations, config, loading, error } = useTranslations()
  const { language, changeLanguage, isInitialized } = useLanguagePreference(defaultLanguage)
  
  if (loading || !isInitialized) return <LoadingSpinner />
  if (error) return <ErrorMessage error={error} />
  
  const t = translations[language]
  
  return (
    <div>
      <Header language={language} setLanguage={handleLanguageChange} t={t.header} />
      <Hero t={t.hero} />
      <Services t={t.services} />
      {/* ... other components */}
    </div>
  )
}
```

### Language Preference Hook
```tsx
import { useLanguagePreference } from "@/hooks"

export function LanguageSwitcher() {
  const { language, changeLanguage, isInitialized } = useLanguagePreference("es")
  
  if (!isInitialized) return <div>Loading...</div>
  
  return (
    <button onClick={() => changeLanguage("en")}>
      Switch to English
    </button>
  )
}
```

## Benefits

✅ **Easy Maintenance** - Each language in its own file  
✅ **Better Organization** - Clear separation of languages  
✅ **Scalable** - Easy to add new languages  
✅ **Type Safety** - Full TypeScript support with interfaces  
✅ **Performance** - Translations loaded once and cached  
✅ **Separation of Concerns** - UI logic separate from content  
✅ **Version Control** - Easy to track translation changes per language  
✅ **Team Collaboration** - Different translators can work on different files  
✅ **User Experience** - Language preference automatically saved  
✅ **Persistence** - Language choice remembered across sessions  

## Language Persistence

### localStorage Integration
- **Automatic Saving**: Language choice is automatically saved to localStorage
- **Session Persistence**: User's language preference is remembered across browser sessions
- **Fallback Handling**: Falls back to default language if localStorage is unavailable
- **Error Handling**: Gracefully handles localStorage errors (private browsing, etc.)

### Storage Key
- **Key**: `dev-services-language`
- **Format**: String (language code, e.g., "es", "en")
- **Fallback**: Default language from config if no saved preference

## Adding New Languages

1. **Create language file**: `public/translations/[lang].json`
2. **Add to config**: Update `public/translations/config.json`
3. **Update types**: Add new language to `TranslationsData` interface if needed

### Example: Adding French
```json
// public/translations/fr.json
{
  "header": { ... },
  "hero": { ... },
  // ... all sections
}

// public/translations/config.json
{
  "languages": {
    "es": { ... },
    "en": { ... },
    "fr": {
      "name": "Français",
      "nativeName": "Français",
      "flag": "🇫🇷",
      "direction": "ltr"
    }
  },
  "defaultLanguage": "es",
  "fallbackLanguage": "en"
}
```

## Adding New Sections

1. **Add to all language files**: Update each `[lang].json` file
2. **Update interface**: Add new section to `Translations` interface
3. **Update components**: Modify component interfaces to use new section

## Error Handling

The hooks provide comprehensive error handling:
- `loading`: Shows while translations are being fetched
- `error`: Contains error message if any fetch fails
- `translations`: Contains the loaded translations or null
- `config`: Contains language configuration or null
- `isInitialized`: Indicates if language preference has been loaded from localStorage

## Performance

- **Parallel Loading**: All language files loaded simultaneously
- **Single Fetch**: Configuration loaded once, then all languages
- **Caching**: Translations cached in component state
- **No Re-fetching**: Language changes use cached data
- **Fast Access**: JSON files served from public directory
- **localStorage**: Fast access to saved language preference

## File Organization

```
public/translations/
├── config.json          # Language configuration
├── es.json             # Spanish translations
├── en.json             # English translations
└── [lang].json         # Additional languages

hooks/
├── useTranslations.ts      # Main translation hook
├── useLanguagePreference.ts # Language preference hook
└── index.ts                # Hook exports
```

## Best Practices

1. **Keep language files in sync** - All languages should have the same structure
2. **Use consistent keys** - Same section and key names across all languages
3. **Validate JSON** - Ensure all files are valid JSON
4. **Version control** - Track changes to each language file separately
5. **Backup** - Keep backups of translation files
6. **Test localStorage** - Ensure language persistence works in different browsers
7. **Handle errors gracefully** - Provide fallbacks for localStorage failures

## Browser Compatibility

- **Modern Browsers**: Full localStorage support
- **Private Browsing**: Graceful fallback to default language
- **Mobile Browsers**: Full support for language persistence
- **Progressive Enhancement**: Works without localStorage (just no persistence) 