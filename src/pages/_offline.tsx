// pages/500.tsx
import type { ReactElement } from 'react';
import FormLayout from '../layouts/FormLayout';


export default function Page() {
  return (
	<>
		<h1>500 - Server-side error occurred</h1>
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