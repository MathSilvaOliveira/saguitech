# Gerador de Nota Fiscal de Serviço (NFS-e)

Este projeto é uma aplicação web simples que permite ao usuário gerar uma Nota Fiscal de Serviço (NFS-e) com base no valor da venda e nos impostos aplicáveis. A aplicação é desenvolvida em HTML, CSS e JavaScript, utilizando o Bootstrap para estilização.

## Funcionalidades

- Entrada de dados para o valor da venda e itens vendidos.
- Cálculo automático dos impostos: IRPF, PIS, COFINS, INSS e ISSQN.
- Exibição da Nota Fiscal com detalhes da venda e dos impostos calculados.

## Tecnologias Utilizadas

- **HTML5**: Estrutura da página.
- **CSS**: Estilização com Bootstrap.
- **JavaScript**: Lógica de cálculo e manipulação do DOM.

## Estrutura do Projeto
/saguitech <br/>
---/index.html <br/>
---/index.js

- `index.html`: O arquivo principal que contém a estrutura da página e o formulário para entrada de dados.
- `index.js`: O arquivo JavaScript responsável pela lógica de cálculo e exibição da Nota Fiscal.

## Como Usar

1. Clone o repositório:
   ```bash
   git clone <URL do repositório>
   cd saguitech
   ```
    obs: Também estará disponivel o link da pagina gerada pelo github pages.

2. Abra o arquivo index.html em um navegador web
3. Preencha os campos do formulário:
   - **Valor da venda**
   - **Itens vendidos**
   - **Percentuais de IRPF, PIS, COFINS, INSS E ISSQN**
4. Clique no botão "Gerar Nota Fiscal" para visusalizar a NFS-e gerada.
