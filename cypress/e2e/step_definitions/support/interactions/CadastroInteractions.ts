import { Functions } from '../utils/Functions';
import { CadastroPage } from '../pageObjects/CadastroPage';

export class CadastroInteractions {
    static VISIT_URL = 'https://www.visiumkms.com/?gdmcid=88099e26-2780-4129-ae3b-bc985f944f7b';
    static CUSTOMER_PORTAL_LABEL = 'Discover the Best EHS Software for Your Business';
    static NAME_LABEL = 'Name';

    private page: CadastroPage;

    constructor() {
        this.page = new CadastroPage();
    }

    /** Visits the cadastro page. */
    visitar() {
        cy.visit(CadastroInteractions.VISIT_URL);
    }

    /** Clicks on the customer portal button. */
    clickCustormerPortal() {
        this.page.cadastro().contains(CadastroInteractions.CUSTOMER_PORTAL_LABEL).click();
    }

    /**
     * Fills the 'Name' field with the provided value.
     * @param name - The name to insert in the field.
     */
    preencherNome(name: string) {
        Functions.preencherCampoPorLabel(CadastroInteractions.NAME_LABEL, name);
    }
}