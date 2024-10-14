![inspect the perfect combination of your colors](./public/seo-og-image.webp "inspect the perfect combination of your colors")

## Features

- 🔎 Feedback on contrast ratio and compliance levels.
- ⚡️ Suggestions to enhance your colors contrast.
- 👀 Preview the results with samples, such as a minimalistic page or a set of UI elements.
- 🎨 Editing in different color spaces.

## Install

Install packages

```bash
npm install
```

Run to generate panda-css output

```bash
npm run panda:prepare
```

Start the dev server

```bash
npm run dev
```

Start https dev server

> [!NOTE]
> Not recommended for production. Only for local development to test the installable PWA.
> Use the `--experimental-https` flag to enable HTTPS.
> Ignore `certificates` folder.

```bash
npm run dev -- --experimental-https
```

## Building

```bash
npm run panda:prepare && npm run build
```

## Testing

```bash
# execute test suites
npm run test

# generates code coverage reports
npm run test:coverage
```

## License

MIT License © 2023-2024-Present [Alex Garrixen](https://github.com/AlexGarrixen)
