import { CONFIG } from '../../ioc';

describe('CONFIG', () => {
    it('should initialize without errors', async () => {
        const env = CONFIG.UNDEFINED;
        expect(env).toBeUndefined();
    });
});
