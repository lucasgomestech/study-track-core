/**
 * Enum for document type.
 *
 * @readonly
 * @enum {string}
 */
export enum DocumentType {
    /** Brazilian RG. */
    RG = 'RG',

    /** Brazilian CPF. */
    CPF = 'CPF',

    /** Brazilian corporate CNPJ. */
    CNPJ = 'CNPJ',

    /** International passport. */
    PASSPORT = 'PASSPORT',

    /** Other national id types. */
    OTHER = 'OTHER',
}
