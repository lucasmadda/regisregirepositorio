# Régis Regi · Portfólio 2026

Site estático de página única (HTML + CSS + JS puros, sem build) pensado para o GitHub Pages. O conceito visual é uma **sala de edição**: paleta de suíte escura, timecode rodando no topo, slate no hero e a carreira montada como uma **timeline de NLE**, com trilhas (V1 Coordenação, V2 Roteiro, V3 Edição, A1 Curadoria) e clipes coloridos clicáveis que levam à experiência correspondente.

## Estrutura

```
├── index.html                  → página única com todas as seções
├── css/style.css               → estilos (cores e fontes nas variáveis em :root)
├── js/main.js                  → timecode, reveals e animação da timeline
├── assets/
│   ├── RE_GIS_REGI_PORTFOLIO_CV_2026.pdf   → CV linkado nos botões "Baixar CV"
│   └── favicon.svg
├── .nojekyll                   → evita processamento Jekyll no Pages
└── README.md
```

## Como publicar no GitHub Pages

**Opção A · site principal (regisregi.github.io)**

1. Crie um repositório público chamado exatamente `SEUUSUARIO.github.io` (ex.: `regisregi.github.io`).
2. Envie o **conteúdo** desta pasta para a raiz do repositório (o `index.html` precisa ficar na raiz):

```bash
cd regis-regi-portfolio
git init
git add .
git commit -m "Portfólio 2026"
git branch -M main
git remote add origin https://github.com/SEUUSUARIO/SEUUSUARIO.github.io.git
git push -u origin main
```

3. Pronto. Em 1 ou 2 minutos o site sobe em `https://SEUUSUARIO.github.io`.

**Opção B · repositório com outro nome**

1. Suba os arquivos para qualquer repositório.
2. Em **Settings → Pages → Build and deployment**, escolha *Deploy from a branch*, branch `main`, pasta `/ (root)` e salve.
3. O site sobe em `https://SEUUSUARIO.github.io/NOME-DO-REPO`.

## Para testar localmente

```bash
cd regis-regi-portfolio
python3 -m http.server 8080
# abra http://localhost:8080
```

## O que personalizar

- **Links pendentes** (estão como `#`, marcados com comentários `<!-- TODO -->` no `index.html`):
  - Publicações: blog *Ex-TV Nerd* no Medium, monografia e artigo sobre a HBO.
  - Se quiser, dá para linkar Maracutaia.fm, As Seguidoras, 302/502 etc. nos cards de experiência.
- **CV**: para atualizar, basta substituir o PDF em `assets/` mantendo o mesmo nome de arquivo (ou trocar o nome nos três links `href="assets/..."` do `index.html`).
- **Cores**: tudo em `:root` no topo do `css/style.css`. As quatro cores de trilha são `--rec` (coordenação), `--amber` (roteiro), `--teal` (edição) e `--violet` (curadoria).
- **Timeline**: cada clipe é um `<a class="clip">` com `left` e `width` em % (escala: 2018 = 0% e meados de 2026 ≈ 100%, ou seja, 1 ano ≈ 11,63%). Para adicionar um trabalho novo, copie um clipe, ajuste posição, título e o `href` para o id do card.
- **Contato**: e-mail, WhatsApp e LinkedIn estão no rodapé (`#contato`).

## Créditos técnicos

Fontes via Google Fonts (Anton, Archivo e Space Mono). Sem dependências, sem frameworks, acessível (skip link, foco visível) e com `prefers-reduced-motion` respeitado.
