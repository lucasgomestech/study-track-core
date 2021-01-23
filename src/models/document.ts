import { DocumentType } from "../enums";

/**
 * Data model of a document.
 *
 * @property {number}       id              Document unique identifier.
 * @property {number}       ownerId         Person unique identifier.
 * @property {string}       documentId      Document value.
 * @property {DocumentType} documentType    Document type.
 * @property {number}       countryId       Country unique identifier.
 * @property {Date}         modifiedAt      Date in which the document data was modified.
 * @property {Date}         createdAt       Date in which the document data was created.
 */
export class Document {
    constructor(
        public id?: number, 
        public ownerId?: number, 
        public documentId?: string, 
        public documentType?: DocumentType, 
        public countryId?: number,
        public modifiedAt?: Date,
        public createdAt?: Date
    ) {}
}
