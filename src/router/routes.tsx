import ContactUs from '@/pages/contactUs';
import Donate from '@/pages/donate';
import GetInvolved from '@/pages/getInvolved';
import MainPage from '@/pages/home';
import ImpactAreas from '@/pages/impactAreas';
import News from '@/pages/news';
import SuccessStories from '@/pages/successStories';
// import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import ProtectedRoute from './protectedRoute';

// Lazy loading components
// const HomePage = lazy(() => import('../pages/home'));
// const GetInvolved = lazy(() => import('../pages/getInvolved'));
// const Donate = lazy(() => import('../pages/donate'));
// const ImpactAreas = lazy(() => import('../pages/impactAreas'));
// const SuccessStories = lazy(() => import('../pages/successStories'));
// const News = lazy(() => import('../pages/news'));

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/get_involved" element={<GetInvolved />} />
    <Route path="/donate" element={<Donate />} />
    <Route path="/impact_areas" element={<ImpactAreas />} />
    <Route path="/success_stories" element={<SuccessStories />} />
    <Route path="/news" element={<News />} />
    <Route path="/contact" element={<ContactUs />} />

    {/* <Route path="/" element={<HomePage />} />
    <Route path="/get_involved" element={<GetInvolved />} />
    <Route path="/donate" element={<Donate />} />
    <Route path="/impact-areas" element={<ImpactAreas />} />
    <Route path="/success-stories" element={<SuccessStories />} />
    <Route path="/news" element={<News />} />
    <Route path="/contact" element={<ContactUs />} /> */}
  </Routes>
);

export default AppRoutes;
