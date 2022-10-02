// __tests__/index.test.jsx
import 'isomorphic-fetch';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { MockedDescription } from '../__mocks__/fileMock';
import { getDescriptionData } from '../pages/api/description';
import Description from '../pages/description';


describe('Description', () => {
    it('should render description', async () => {
        const component = render(
            <Description data={MockedDescription} />
        );
        
        const jobLinkId = component.getByText(/jobLinkId/);
        expect(jobLinkId).toHaveTextContent('jobLinkId');
    })

    it('should return an object with jobLinkId', async () => {
        const res = await getDescriptionData();
        expect(res).toHaveProperty('jobLinkId');
    });
});