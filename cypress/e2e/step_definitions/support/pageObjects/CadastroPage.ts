export class CadastroPage {
    cadastroSelector: string = 'a.elementor-button';

    /**
     * Retorna o elemento do botão de cadastro.
     * @returns Cypress.Chainable<JQuery<HTMLElement>>
     */
    cadastro(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.cadastroSelector);
    }
}