import React from 'react';

import ToastPlayground from '../ToastPlayground';
import Footer from '../Footer';
import ToastListProvider from '../ToastListProvider/ToastListProvider';

function App() {
	return (
		<>
			<ToastListProvider>
				<ToastPlayground />
			</ToastListProvider>
			<Footer />
		</>
	);
}

export default App;
