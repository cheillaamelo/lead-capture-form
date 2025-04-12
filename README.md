# Formulário de Captura de Leads
Este projeto é um formulário de captura de leads desenvolvido com React, TypeScript e Vite. Ele permite coletar informações de usuários interessados em seus produtos ou serviços.

## 🛠️ Tecnologias Utilizadas
- React

- TypeScript

- Tailwind CSS (para estilização)

- API Mock (simulação com setTimeout)

## 🔍 Funcionalidades
- Formulário Responsivo: Adaptável a diferentes tamanhos de tela.

- Validação de Campos: Garante que os dados inseridos pelos usuários sejam válidos.

- Integração com API: Envia os dados coletados para uma API para processamento posterior.

## 📁 Estrutura do Projeto
```
src/
├── api/
│   └── leadService.ts              # Simulação de chamada à API
├── components/
│   └── Form.tsx
│   └── FormCheckbox.tsx
│   └── FormInput.tsx
│   └── FormStatus.tsx
├── types/
│   └── Form.ts
│   └── Lead.ts
│   └── LeadErrors.ts 
└── App.tsx                  # Página principal com filtro, loading e erro
```

## ▶️ Como Rodar o Projeto
1- Clone o repositório:
```
git clone https://github.com/cheillaamelo/lead-capture-form.git

```
2- Navegue até o diretório do projeto:
```
cd lead-capture-form

```

3- Instale as dependências:
```
npm install

```

4- Inicie o servidor de desenvolvimento:
```
npm run dev

```
## 📄 Licença
Este projeto está sob a licença MIT.


