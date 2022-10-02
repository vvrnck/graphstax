// __tests__/index.test.jsx
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Home from '../pages/index';

describe('Home', () => {
	beforeEach(async () => {
		await act(() => {
			render(<Home />)
		})
	})

	it('should render header', async () => {
		await waitFor(() => {
			const heading = screen.getByRole('heading');
			expect(heading).toBeInTheDocument();
		});
	})

	it('should render information', async () => {
		await waitFor(() => {
			const information = screen.queryByText('Workwolf');
			expect(information).toBeInTheDocument();
		});
	});

	it('should render form', async () => {
		await waitFor(() => {
			const inputs = screen.getAllByDisplayValue('');
			inputs.map(input => expect(input).toBeInTheDocument());
		});
	})

	it('should render footer', async () => {
		await waitFor(() => {
			const information = screen.queryByText('Sign In');
			expect(information).toBeInTheDocument();
		});
	})
});