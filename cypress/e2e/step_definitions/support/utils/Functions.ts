export class Functions {

    /**
     * Metodo dinâmico para preencher campos em qualquer selector
     * @param seletor - Seletor CSS para o campo
     * @param valor - Valor a ser preenchido
     */
    static preencherCampo(seletor: string, valor: string): void {
        cy.get(seletor)
            .should('be.visible')
            .clear()
            .type(valor);
    }

    /**
     * Metodo dinâmico para clicar em qualquer elemento via seletor
     * @param seletor - Seletor CSS para o elemento
     */
    static clicarElemento(seletor: string): void {
        cy.get(seletor, { timeout: 10000 })
            .should('exist')
            .scrollIntoView()
            .should('be.visible')
            .click({ force: true });
    }

    /**
     * Preenche um campo de input associado a um label específico
     * @param label - Texto do label
     * @param valor - Valor a ser preenchido
     */
    static preencherCampoPorLabel(label: string, valor: string): void {
        cy.contains('label', label).then(() => {
            cy.get('label')
                .filter((_i: number, el: HTMLElement) => el.innerText.includes(label)) // garante que o texto é parcial
                .last() // pega o último label encontrado
                .invoke('attr', 'for')
                .then((id: string | undefined) => {
                    if (id) {
                        cy.get(`input#${id}`)
                            .last()
                            .scrollIntoView()
                            .should('be.visible')
                            .clear()
                            .type(valor);
                    }
                });
        });
    }
}