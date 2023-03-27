import { Breadcrumb, Sidebar, Header, Footer } from '../components';
import { useLocation } from 'react-router-dom';

export default function Layout(WrappedComponent) {
  const generateBreadcrumbs = (pathname) => {
    const pathParts = pathname.split('/').filter((part) => part !== '');
    const breadcrumbs = pathParts.map((part, index) => ({
      label: part.charAt(0).toUpperCase() + part.slice(1),
      href: '/' + pathParts.slice(0, index + 1).join('/'),
    }));

    return breadcrumbs;
  };

  const WrappedComponentWithBreadcrumbs = (props) => {
    const { pathname } = useLocation();
    const breadcrumbs = generateBreadcrumbs(pathname);

    return (
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Header />
          <div style={{ flex: 1, paddingLeft: 50, paddingRight: 50 }}>
            <Breadcrumb links={breadcrumbs} />
            <div style={{ paddingTop: 50 }}>
              <WrappedComponent {...props} />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  };

  return WrappedComponentWithBreadcrumbs;
}
