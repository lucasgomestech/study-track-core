import { Document } from '../../models';
import { DocumentType } from '../../enums';

describe(Document.name, () => {
    it('should initialize a document without errors', async () => {
        const id = 1;
        const ownerId = 1;
        const documentId = '173167370X';
        const documentType = DocumentType.PASSPORT;
        const countryId = 4;
        const today = new Date();
        const yesterday = new Date();
        yesterday.setDate(today.getDate() - 1);

        const document = new Document(
            id,
            ownerId,
            documentId,
            documentType,
            countryId,
            today,
            yesterday,
        );

        expect(document).toBeInstanceOf(Document);
        expect(document).toHaveProperty('id', id);
        expect(document).toHaveProperty('ownerId', ownerId);
        expect(document).toHaveProperty('documentId', documentId);
        expect(document).toHaveProperty('documentType', documentType);
        expect(document).toHaveProperty('countryId', countryId);
        expect(document).toHaveProperty('modifiedAt', today);
        expect(document).toHaveProperty('createdAt', yesterday);
    });
});
