# Convert

Aplicação web simples para conversão de moedas (USD, EUR e GBP) para Real Brasileiro (BRL).

## Visão geral

O projeto permite informar um valor, selecionar uma moeda e exibir o resultado convertido em reais.

## Funcionalidades

- Conversão de:
  - Dólar Americano (USD)
  - Euro (EUR)
  - Libra Esterlina (GBP)
- Exibição da cotação usada no cálculo
- Formatação do resultado no padrão brasileiro (`pt-BR`)
- Validação simples do campo de valor (aceita apenas números)
- Layout responsivo

## Tecnologias

- HTML5
- CSS3
- JavaScript (Vanilla)

## Estrutura do projeto

```text
.
├── index.html
├── scripts.js
├── styles.css
└── img/
```

## Como executar

Como é um projeto estático, você pode abrir o arquivo `index.html` diretamente no navegador.

Opcionalmente, para melhor experiência durante o desenvolvimento, use uma extensão como Live Server no VS Code.

## Regras de conversão atuais

As cotações estão definidas diretamente no arquivo `scripts.js`:

- USD = 5.23
- EUR = 6.15
- GBP = 7.03

Para atualizar os valores, edite essas constantes no início do arquivo.

## Melhorias futuras sugeridas

- Buscar cotações em tempo real via API
- Permitir valores decimais no campo de entrada
- Adicionar testes para funções de formatação e conversão
