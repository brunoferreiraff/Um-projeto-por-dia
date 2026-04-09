# 🎬 Hero Section com Vídeo de Fundo

Uma hero section responsiva com vídeo de fundo em tela cheia, sobreposição de gradiente e efeitos de hover interativos.

---

## 📋 Visão Geral

Este projeto implementa uma página de apresentação (hero section) com as seguintes características:

- Vídeo em tela cheia como fundo dinâmico
- Sobreposição com gradiente escuro para garantir legibilidade
- Título grande com efeito de contorno (outline) no hover
- Botão de chamada para ação (CTA) com inversão de cores no hover
- Layout totalmente responsivo, adaptando o vídeo a diferentes proporções de tela

---


## 🎨 Estrutura do CSS

### Reset Global (`*`)
Remove margens e paddings padrão do navegador e define a fonte padrão `Segoe UI` para toda a página.

### `.hero`
Container principal da seção. Ocupa 100% da largura e altura, usa **Flexbox** para centralizar o conteúdo (vertical e horizontalmente) e aplica um gradiente semitransparente sobre o vídeo.

### `.back-video`
Elemento de vídeo posicionado de forma absoluta no canto inferior direito, atrás de todos os outros elementos (`z-index: -1`).

### `.content h1`
Título principal com 160px de tamanho. Ao passar o mouse, aplica efeito de texto vazado (outline) com transição suave de 0.5s.

### `.content a`
Botão de CTA estilizado com borda branca. Ao passar o mouse, inverte as cores (fundo branco, texto preto) com transição suave.

### Media Queries
Garantem que o vídeo cubra toda a tela sem distorções:
- **Tela mais larga (> 16:9):** o vídeo ajusta pela largura (`width: 100%`)
- **Tela mais alta (< 16:9):** o vídeo ajusta pela altura (`height: 100%`)

---


## 🛠️ Tecnologias

- HTML5
- CSS

---
