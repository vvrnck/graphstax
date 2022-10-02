// pages/500.tsx
import type { ReactElement } from 'react';
import FormLayout from '../layouts/FormLayout';

export default function Page() {
  return (
	<>
		<h1>404 - Not Found</h1>
	</>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
	return (
		<FormLayout>
			{page}
		</FormLayout>
	)
}