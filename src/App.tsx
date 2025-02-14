import Layout from './layout/layout';
// import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './router/routes';

function App() {
  return (
    <>
      <Layout>
        <AppRoutes />
      </Layout>
    </>
  );
}

export default App;

// <div className="flex flex-col px-5 md:mx-16 mx-4 font-urbanist">
//   <Header />
//   <main className="">
//     {/* <main className="flex-1 bg-gray-100"> */}
//     <Suspense
//     // fallback={<div style={{ minHeight: '60vh' }}>Loading...</div>}
//     >
//       <RouterProvider />
//     </Suspense>
//   </main>
//   <Footer />
// </div>
