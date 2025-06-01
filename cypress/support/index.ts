import 'cypress-xpath';

/// <reference types="cypress" />

// @ts-ignore
Cypress.on(
    'uncaught:exception',
    (err: Error & { message?: string }, runnable: unknown) => {
        if (err.message && err.message.includes('at <unknown> (https://www.santander.com.br/')) {
            return false;
        }
        if (err.message && err.message.includes('angular is not defined')) {
            return false;
        }
    }
);