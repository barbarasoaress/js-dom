# Saudação DEV 👩‍💻

Projeto de estudo de **JavaScript e manipulação do DOM**. A página recebe um nome e uma tecnologia, exibe uma saudação personalizada e apresenta essas informações em um cartão.

## Funcionalidades

- Leitura dos campos de nome e tecnologia.
- Aviso quando um campo está vazio.
- Exibição de uma saudação e de um cartão com os dados preenchidos.
- Botão **LIMPAR** para apagar os campos, a mensagem e o cartão.

## Tecnologias utilizadas

- **HTML5:** estrutura da página e campos de entrada.
- **CSS3:** estilos, estados de foco e hover e ajustes para telas menores.
- **JavaScript:** validação e atualização dos elementos da página.

## Como executar

1. Baixe o repositório pelo botão **Code → Download ZIP** e extraia os arquivos, ou clone:

   ```bash
   git clone https://github.com/barbarasoaress/js-dom.git
   ```

2. Abra o arquivo `index.html` no navegador.
3. Preencha **Nome** e **Tecnologia** e clique em **SAUDAR**.
4. Clique em **LIMPAR** para começar novamente.

Também é possível abrir a pasta no VS Code e usar a extensão Live Server. O projeto não exige instalação de pacotes nem servidor de back-end.

## Exemplo de uso

Preencha o nome com **Bárbara** e a tecnologia com **JavaScript**. Ao clicar em **SAUDAR**, a página mostrará uma mensagem com esses valores e um cartão identificando o nome e a tecnologia.

## Organização dos arquivos

| Arquivo | Responsabilidade |
| --- | --- |
| `index.html` | Estrutura, campos e botões. |
| `style.css` | Aparência e ajustes de layout. |
| `script.js` | Funções `saudar()` e `limpar()`, validação e manipulação do DOM. |

## Conceitos praticados

- Seleção de elementos com `document.getElementById()`.
- Leitura e alteração de campos com `.value`.
- Condicionais `if` e interrupção da função com `return`.
- Template strings para combinar textos e valores.
- Alteração do conteúdo com `.innerHTML`.
- Exibição e ocultação de elementos com `.style.display`.
- Chamadas de funções pelo atributo `onclick`.

## Próximas melhorias

- Tratar entradas compostas apenas por espaços com `trim()`.
- Usar `textContent` e criação de elementos para exibir os valores digitados.
- Substituir `onclick` por `addEventListener()`.
- Associar os rótulos aos campos com o atributo `for`.
- Revisar detalhes de CSS e a adaptação do cartão a telas pequenas.

Os dados são usados apenas na página: não são salvos nem enviados a um servidor.

---

Desenvolvido por [Bárbara Soares](https://github.com/barbarasoaress) como parte dos estudos de desenvolvimento web.
