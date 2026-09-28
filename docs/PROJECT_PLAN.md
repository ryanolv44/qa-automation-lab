# QA Automation Lab

Projeto de estudo e portfólio focado em **Quality Assurance, API Testing e Test Automation**.

## 1. Sobre o projeto

O QA Automation Lab é um projeto criado para desenvolver e demonstrar, na prática, conhecimentos de QA moderno com foco em automação.

Em vez de desenvolver uma aplicação própria, utilizarei uma aplicação/API existente como **System Under Test (SUT)**. O objetivo é simular o trabalho de QA em um projeto de software real: entender o sistema, identificar riscos, definir cenários, executar testes, encontrar e documentar defeitos, automatizar os testes mais relevantes e integrar a suíte ao CI.

O projeto será desenvolvido com foco em **API testing e automação**, mantendo os fundamentos de QA como base para todas as decisões.

---

# 2. Objetivos

## Objetivo principal

Desenvolver experiência prática no processo de QA e construir um portfólio que demonstre capacidade de:

* analisar requisitos e comportamento de um sistema;
* identificar riscos;
* definir cenários de teste;
* aplicar técnicas de test design;
* testar APIs;
* utilizar Postman;
* automatizar testes com Playwright e TypeScript;
* utilizar SQL como ferramenta de investigação;
* encontrar e documentar defeitos;
* estruturar testes de regressão e smoke;
* utilizar Git e GitHub;
* executar testes automaticamente através de CI/CD.

## Objetivos profissionais

O projeto deve servir como demonstração prática para oportunidades de:

* QA;
* QA Automation;
* Quality Engineering;
* Software Testing;
* Test Automation;
* posições iniciais relacionadas a qualidade de software.

As habilidades desenvolvidas também devem ser úteis para desenvolvimento, suporte a sistemas, automação e outras áreas de engenharia de software.

---

# 3. Filosofia do projeto

O objetivo não é criar a maior quantidade possível de testes.

O objetivo é criar **testes relevantes, justificáveis e sustentáveis**.

Para cada teste importante, devo conseguir responder:

> O que estou testando?

> Por que isso precisa ser testado?

> Qual risco esse teste cobre?

> Por que esse teste foi automatizado?

> O que significa se ele falhar?

A automação será utilizada para melhorar repetibilidade, velocidade e capacidade de regressão, mas não substituirá o raciocínio necessário para decidir o que deve ser testado.

---

# 4. Sistema sob teste

O projeto utilizará o **Restful Booker** como principal System Under Test.

O Restful Booker é um ambiente criado para prática de testes de APIs, com funcionalidades de autenticação e operações relacionadas a reservas.

Inicialmente, o projeto será **API-first**.

A interface web poderá ser adicionada posteriormente, caso ela agregue valor aos objetivos do projeto.

---

# 5. Escopo funcional

O escopo inicial estará concentrado em:

## Autenticação

* autenticação com credenciais válidas;
* credenciais inválidas;
* ausência de autenticação;
* token inválido;
* comportamento de endpoints protegidos.

## Bookings

* criação;
* consulta;
* atualização completa;
* atualização parcial;
* exclusão.

## Validação

* status codes;
* headers;
* response body;
* estrutura e tipos de dados;
* campos obrigatórios;
* dados inválidos;
* comportamento de erro;
* regras relevantes do sistema.

---

# 6. Abordagem de testes

O projeto seguirá o fluxo:

```text
Entender o sistema
        ↓
Identificar riscos
        ↓
Definir cenários
        ↓
Explorar
        ↓
Testar
        ↓
Documentar defeitos
        ↓
Automatizar cenários relevantes
        ↓
Executar regressão
        ↓
Executar no CI
        ↓
Analisar resultados
```

---

# 7. Técnicas de Test Design

Serão utilizadas, quando aplicáveis:

## Equivalence Partitioning

Divisão das entradas em classes equivalentes para selecionar casos representativos.

## Boundary Value Analysis

Testes próximos aos limites relevantes de entradas e regras.

## Positive Testing

Validação de fluxos esperados.

## Negative Testing

Validação do comportamento diante de entradas inválidas ou estados inesperados.

## Risk-based Testing

Priorização dos testes de acordo com impacto e probabilidade dos riscos.

---

# 8. Testes exploratórios

A exploração inicial do sistema será utilizada para:

* compreender seu comportamento;
* identificar inconsistências;
* encontrar casos que não estavam previstos;
* descobrir defeitos;
* gerar novos cenários;
* decidir quais fluxos merecem automação.

Exploratory testing não será tratado apenas como uma etapa descartável antes da automação. As descobertas feitas durante a exploração poderão influenciar a estratégia e a suíte automatizada.

---

# 9. API Testing

API testing será uma das partes centrais do projeto.

Os testes deverão abordar:

* métodos HTTP;
* status codes;
* headers;
* request body;
* response body;
* autenticação;
* dados válidos;
* dados inválidos;
* ausência de campos;
* tipos incorretos;
* recursos inexistentes;
* comportamento de erro;
* cenários de atualização;
* consistência das respostas.

---

# 10. Postman

O Postman será utilizado principalmente para:

* exploração da API;
* criação de Collections;
* organização dos endpoints;
* utilização de environments e variables;
* criação de assertions;
* execução de testes;
* validações iniciais;
* testes exploratórios reproduzíveis.

A Collection será organizada de maneira a separar as principais funcionalidades.

Estrutura inicial esperada:

```text
Restful Booker
├── Authentication
├── Booking - GET
├── Booking - POST
├── Booking - PUT
├── Booking - PATCH
├── Booking - DELETE
└── Negative Tests
```

---

# 11. Automação com Playwright

Depois que os cenários forem entendidos e validados, os casos relevantes serão automatizados com:

**Playwright + TypeScript**

Inicialmente, a automação terá foco em API testing.

Serão estudados e utilizados, conforme necessidade:

* APIRequestContext;
* assertions;
* fixtures;
* test data;
* isolamento dos testes;
* organização da suíte;
* configuração;
* tracing;
* screenshots e evidências quando relevantes.

A suíte deve priorizar estabilidade, legibilidade e manutenção.

---

# 12. Estratégia Postman → Playwright

Postman e Playwright terão papéis diferentes.

### Postman

Exploração, experimentação, Collections e validações iniciais.

### Playwright

Automação versionada, regressão e integração com CI.

O fluxo esperado é:

```text
Explorar API
      ↓
Entender comportamento
      ↓
Criar cenário
      ↓
Validar no Postman
      ↓
Automatizar com Playwright
      ↓
Adicionar à regressão
      ↓
Executar no CI
```

---

# 13. SQL

SQL será utilizado como ferramenta de investigação e validação quando os dados necessários estiverem disponíveis.

O objetivo é conseguir investigar situações como:

* se uma operação alterou o dado esperado;
* se o registro correto foi criado;
* se o estado do dado está consistente;
* se o resultado observado na API corresponde ao estado esperado.

SQL será tratado como uma competência complementar de QA, e não como o foco principal do projeto.

---

# 14. Bug Reporting

Defeitos encontrados deverão ser documentados de forma reproduzível.

Cada bug deverá registrar, quando aplicável:

* ID;
* título;
* ambiente;
* pré-condições;
* passos para reproduzir;
* resultado esperado;
* resultado atual;
* evidências;
* severity;
* priority;
* frequência/reprodutibilidade;
* impacto;
* status.

Sempre que possível, a evidência poderá incluir:

* screenshot;
* request/response;
* payload;
* log;
* trace;
* vídeo.

O objetivo é reproduzir uma comunicação de defeitos próxima da utilizada em ambientes profissionais.

---

# 15. Severity e Priority

Severity e Priority deverão ser tratados como conceitos diferentes.

**Severity** representa o impacto do defeito.

**Priority** representa a urgência/importância da correção.

As classificações deverão ser justificadas de acordo com o contexto.

---

# 16. Regression e Smoke Testing

A automação deverá permitir separar testes por finalidade.

## Smoke

Conjunto reduzido de testes destinados a verificar rapidamente se as funcionalidades mais importantes estão funcionando.

## Regression

Conjunto mais amplo destinado a verificar se comportamentos anteriormente validados continuam funcionando após alterações.

A suíte deverá crescer com base em risco e valor, e não simplesmente pela quantidade.

---

# 17. Git e GitHub

Git será utilizado durante todo o desenvolvimento.

O repositório deverá demonstrar:

* commits organizados;
* branches quando fizer sentido;
* pull requests;
* histórico de mudanças;
* documentação versionada;
* código de testes versionado.

A organização do GitHub também fará parte do portfólio.

---

# 18. CI/CD

O projeto terá uma pipeline inicial utilizando **GitHub Actions**.

Fluxo esperado:

```text
Push / Pull Request
        ↓
Instalar dependências
        ↓
Executar testes
        ↓
Gerar resultados
        ↓
Disponibilizar evidências/artefatos quando necessário
```

O objetivo é demonstrar que os testes podem ser executados automaticamente e que uma falha de teste pode interromper o workflow.

Jenkins poderá ser estudado posteriormente, mas não é requisito para o MVP.

---

# 19. Documentação

O projeto deverá conter documentação suficiente para que outra pessoa entenda sua estratégia sem depender de explicações externas.

Estrutura prevista:

```text
docs/
├── PROJECT_PLAN.md
├── strategy/
│   ├── test-plan.md
│   ├── test-scenarios.md
│   ├── risk-matrix.md
│   └── traceability-matrix.md
├── test-data/
│   └── test-data.md
├── defects/
│   ├── BUG-001.md
│   └── ...
└── execution/
    └── test-execution-report.md
```

---

# 20. Ferramentas

## Núcleo do projeto

* Postman
* Playwright
* TypeScript
* JavaScript
* SQL
* Git
* GitHub
* GitHub Actions

## Possíveis extensões

Depois que o núcleo estiver funcionando, poderão ser explorados:

* Gherkin / BDD;
* Allure;
* Jenkins;
* schema validation;
* contract testing;
* performance testing;
* API security testing;
* accessibility testing.

Essas ferramentas não serão adicionadas apenas para aumentar a lista de tecnologias. Cada uma deverá ter uma finalidade clara.

---

# 21. Uso de Inteligência Artificial

A IA será utilizada desde o começo como ferramenta de produtividade e aprendizado.

Ela poderá ser usada para:

* explicar conceitos;
* ensinar ferramentas;
* sugerir cenários;
* sugerir casos negativos;
* questionar possíveis lacunas;
* revisar test cases;
* gerar boilerplate;
* gerar código repetitivo;
* implementar automações a partir de cenários definidos;
* revisar código;
* investigar erros;
* ajudar na documentação;
* ajudar na configuração de ferramentas;
* sugerir melhorias.

Entretanto, a IA não será considerada a autoridade sobre o comportamento do sistema.

Decisões como:

* o que deve ser testado;
* qual é o comportamento esperado;
* qual é o risco;
* se um defeito é válido;
* severity;
* priority;
* se determinado teste realmente cobre um requisito;

deverão ser avaliadas e aprovadas por mim.

---

# 22. Limites do uso de IA neste projeto

Este projeto **não é um projeto de Agentic QA**.

Não fazem parte do escopo principal:

* Planner;
* Generator;
* Healer;
* MCP;
* multi-agent workflows;
* autonomous QA;
* orchestration de agentes;
* engenharia de contexto avançada;
* avaliação formal de agentes.

Esses assuntos serão explorados posteriormente em um projeto separado chamado provisoriamente:

**AI QA / Agentic QA Lab**

O primeiro projeto deve garantir que eu entenda QA e automação antes de delegar esse processo para agentes.

---

# 23. Princípio de aprendizagem

O processo de aprendizagem seguirá:

```text
Entender
   ↓
Pensar
   ↓
Testar
   ↓
Automatizar
   ↓
Revisar
   ↓
Executar
```

A IA pode participar de todas essas etapas como assistente.

Ela não deve ser usada para esconder a falta de entendimento.

Sempre que possível, antes de pedir para a IA resolver um problema, devo tentar formular minha própria hipótese.

Depois posso usar a IA para:

* verificar;
* corrigir;
* aprofundar;
* implementar.

---

# 24. Critérios para automatizar

Nem todo teste precisa ser automatizado.

Um teste será um bom candidato quando apresentar características como:

* execução frequente;
* alto risco;
* comportamento estável;
* repetitividade;
* necessidade de regressão;
* alto custo manual;
* validação objetiva;
* ganho significativo de velocidade.

Testes exploratórios podem continuar sendo manuais quando isso fizer sentido.

---

# 25. Princípios da automação

A suíte deverá priorizar:

* legibilidade;
* estabilidade;
* isolamento;
* assertions significativas;
* manutenção simples;
* baixo acoplamento;
* reutilização quando trouxer benefício;
* facilidade de diagnóstico em caso de falha.

Evitar abstrações desnecessárias.

Evitar testes que apenas verificam detalhes de implementação quando o comportamento do sistema puder ser validado diretamente.

---

# 26. Estrutura do repositório

A estrutura inicial esperada é:

```text
qa-automation-lab/
│
├── README.md
├── AGENTS.md
│
├── docs/
│   ├── PROJECT_PLAN.md
│   ├── strategy/
│   ├── test-data/
│   ├── defects/
│   └── execution/
│
├── postman/
│   ├── collections/
│   └── environments/
│
├── tests/
│   └── api/
│
├── fixtures/
│
├── .github/
│   └── workflows/
│
├── playwright.config.ts
├── package.json
└── tsconfig.json
```

A estrutura poderá mudar quando houver necessidade real.

---

# 27. Milestones

## M0 — Repository Setup

* criar repositório;
* configurar Node/TypeScript;
* instalar Playwright;
* configurar estrutura inicial;
* configurar Git;
* criar documentação inicial;
* preparar GitHub Actions.

## M1 — System Understanding

* conhecer o Restful Booker;
* mapear endpoints;
* estudar autenticação;
* entender os recursos;
* identificar riscos iniciais.

## M2 — Test Design

* criar Test Plan;
* criar cenários;
* aplicar equivalence partitioning;
* aplicar boundary analysis;
* definir dados de teste;
* definir prioridades.

## M3 — Postman

* criar Collection;
* configurar environment;
* utilizar variables;
* implementar assertions;
* testar happy paths;
* testar negative paths;
* validar autenticação.

## M4 — Exploratory Testing

* explorar comportamentos não previstos;
* investigar inconsistências;
* procurar defeitos;
* reproduzir problemas;
* criar bug reports;
* atualizar cenários quando necessário.

## M5 — Playwright API Automation

* configurar testes;
* automatizar smoke;
* automatizar fluxos funcionais;
* automatizar cenários negativos;
* criar fixtures;
* organizar test data;
* criar assertions.

## M6 — Regression

* consolidar suíte;
* separar smoke/regression;
* reduzir redundância;
* revisar estabilidade;
* adicionar regressões relacionadas a defeitos encontrados.

## M7 — CI

* configurar GitHub Actions;
* executar testes no workflow;
* tratar falhas;
* disponibilizar evidências/artefatos;
* documentar pipeline.

## M8 — Test Reporting

* registrar execuções;
* consolidar resultados;
* documentar defeitos;
* gerar relatório de execução;
* avaliar qualidade da suíte.

## M9 — Extensions

Explorar, de acordo com a utilidade:

* UI automation;
* Gherkin;
* Allure;
* Jenkins;
* schema validation;
* contract testing;
* performance;
* security;
* accessibility.

---

# 28. MVP

O MVP estará concluído quando eu tiver:

* [ ] sistema sob teste documentado;
* [ ] Test Plan;
* [ ] principais riscos identificados;
* [ ] cenários de teste;
* [ ] casos relevantes;
* [ ] Collection Postman;
* [ ] assertions;
* [ ] testes positivos;
* [ ] testes negativos;
* [ ] exploração do sistema;
* [ ] defeitos documentados;
* [ ] Playwright configurado;
* [ ] testes API automatizados;
* [ ] smoke tests;
* [ ] regression tests iniciais;
* [ ] Git/GitHub;
* [ ] GitHub Actions;
* [ ] README;
* [ ] documentação de execução.

Nesse ponto, o projeto já deve ser suficientemente completo para ser apresentado como portfólio.

---

# 29. Projeto completo

Depois do MVP, o projeto poderá receber:

* UI automation;
* Allure;
* Jenkins;
* Gherkin/BDD;
* schema validation;
* contract testing;
* performance;
* security;
* accessibility.

Essas extensões são secundárias.

O objetivo é evitar ficar meses expandindo o projeto sem começar a utilizá-lo para candidaturas.

---

# 30. Definition of Done

Uma funcionalidade ou etapa estará concluída quando:

1. o comportamento esperado estiver entendido;
2. os cenários relevantes tiverem sido definidos;
3. os testes necessários tiverem sido executados;
4. os defeitos encontrados tiverem sido documentados;
5. a automação tiver sido criada quando houver justificativa;
6. os testes relevantes tiverem sido executados com sucesso;
7. a documentação correspondente estiver atualizada.

---

# 31. Qualidade do portfólio

O projeto não será avaliado pela quantidade de ferramentas ou de testes.

Ele deverá demonstrar capacidade de:

**entender → analisar → testar → encontrar problemas → automatizar → validar → comunicar.**

O código de automação é apenas uma parte do projeto.

A estratégia de testes, os defeitos encontrados, as decisões tomadas e as evidências também fazem parte do portfólio.

---

# 32. Relação com o segundo projeto

Este projeto possui foco em **QA e automação tradicional/moderna**.

Depois de concluir uma parte significativa dele, será criado um segundo projeto independente:

## AI QA / Agentic QA Lab

O segundo projeto terá foco em:

* AI-assisted test design;
* AI-assisted exploration;
* test generation;
* test healing;
* Planner;
* Generator;
* Healer;
* MCP;
* context engineering;
* human-in-the-loop;
* avaliação de resultados gerados por agentes.

A separação é intencional.

**Projeto 1:** aprender a fazer QA.

**Projeto 2:** aprender a utilizar agentes para ampliar o trabalho de QA.

---

# 33. Regra para mudanças no projeto

Uma nova ideia não deve ser adicionada simplesmente porque parece interessante.

Antes de adicionar uma tecnologia, framework ou etapa, verificar:

1. ela está relacionada ao objetivo do projeto?
2. ela representa uma prática relevante de QA?
3. ela traz aprendizado ou valor de portfólio?
4. ela é necessária neste momento?
5. ela pertence ao Projeto 1 ou deveria ficar para o Projeto 2?

O escopo não deve mudar silenciosamente.

---

# 34. Estado do projeto

O estado atual do projeto será mantido separadamente em:

`docs/CURRENT.md`

Esse arquivo deverá registrar:

* milestone atual;
* tarefa atual;
* tarefas concluídas;
* próximos passos;
* problemas conhecidos;
* decisões recentes.

Dessa forma, sessões futuras de IA não precisarão depender da memória de conversas anteriores.

---

# 35. Fonte de verdade

Para este projeto:

**Git/repositório = fonte de verdade.**

O chat é uma ferramenta de trabalho, não o armazenamento principal das decisões.

Documentação importante deverá existir no repositório.

Isso permite que diferentes ferramentas de IA trabalhem sobre o mesmo contexto sem depender de uma conversa específica.

---

# 36. Resultado esperado

Ao finalizar o projeto, o repositório deverá demonstrar uma experiência prática coerente de:

**QA → API Testing → Test Design → Postman → Automation → Playwright → SQL → Bug Reporting → Regression → Git → CI/CD**

O objetivo final é ter um projeto pequeno o suficiente para ser concluído, mas completo o suficiente para demonstrar que consigo trabalhar com **Quality Assurance e Test Automation de forma técnica e organizada**.
