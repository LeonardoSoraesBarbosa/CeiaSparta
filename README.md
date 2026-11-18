# Ceia da Sparta

Projeto preparado para publicação automática no GitHub Pages.

## Páginas

- `index.html`: Ex-Moradores por R$ 160 e Acompanhantes por R$ 80.
- `valor-unico.html`: Convidado por R$ 80.

## Rodar localmente

```bash
npm ci
npm run dev
```

Acesse:

- `http://localhost:3000/`
- `http://localhost:3000/valor-unico.html`

## Publicar no GitHub Pages

1. Envie o conteúdo deste diretório para um repositório no GitHub, na branch `main` ou `master`.
2. No repositório, abra **Settings → Pages**.
3. Em **Build and deployment → Source**, escolha **GitHub Actions**.
4. Abra a aba **Actions** e acompanhe o workflow **Deploy to GitHub Pages**.

Após isso, cada novo push publica as duas páginas automaticamente. A segunda página fica disponível acrescentando `/valor-unico.html` ao endereço do site.

## Validação

```bash
npm run lint
npm test
npm run build
```
