import React from 'react';
import { createRoot } from 'react-dom/client';
import { PageRuntime } from './runtime/PageRuntime.jsx';
import { pageConfigs } from './runtime/pageConfigs.js';
import AppsCalendarPage from './pages/AppsCalendarPage.jsx';
import AppsChatPage from './pages/AppsChatPage.jsx';
import AppsECommerceAdminAddProductPage from './pages/AppsECommerceAdminAddProductPage.jsx';
import AppsECommerceAdminCustomerDetailsPage from './pages/AppsECommerceAdminCustomerDetailsPage.jsx';
import AppsECommerceAdminCustomersPage from './pages/AppsECommerceAdminCustomersPage.jsx';
import AppsECommerceAdminOrderDetailsPage from './pages/AppsECommerceAdminOrderDetailsPage.jsx';
import AppsECommerceAdminOrdersPage from './pages/AppsECommerceAdminOrdersPage.jsx';
import AppsECommerceAdminProductsPage from './pages/AppsECommerceAdminProductsPage.jsx';
import AppsECommerceAdminRefundPage from './pages/AppsECommerceAdminRefundPage.jsx';
import AppsECommerceLandingCartPage from './pages/AppsECommerceLandingCartPage.jsx';
import AppsECommerceLandingCheckoutPage from './pages/AppsECommerceLandingCheckoutPage.jsx';
import AppsECommerceLandingFavouriteStoresPage from './pages/AppsECommerceLandingFavouriteStoresPage.jsx';
import AppsECommerceLandingHomepagePage from './pages/AppsECommerceLandingHomepagePage.jsx';
import AppsECommerceLandingInvoicePage from './pages/AppsECommerceLandingInvoicePage.jsx';
import AppsECommerceLandingOrderTrackingPage from './pages/AppsECommerceLandingOrderTrackingPage.jsx';
import AppsECommerceLandingProductDetailsPage from './pages/AppsECommerceLandingProductDetailsPage.jsx';
import AppsECommerceLandingProductsFilterPage from './pages/AppsECommerceLandingProductsFilterPage.jsx';
import AppsECommerceLandingProfilePage from './pages/AppsECommerceLandingProfilePage.jsx';
import AppsECommerceLandingShippingInfoPage from './pages/AppsECommerceLandingShippingInfoPage.jsx';
import AppsECommerceLandingWishlistPage from './pages/AppsECommerceLandingWishlistPage.jsx';
import AppsEmailComposePage from './pages/AppsEmailComposePage.jsx';
import AppsEmailEmailDetailPage from './pages/AppsEmailEmailDetailPage.jsx';
import AppsEmailInboxPage from './pages/AppsEmailInboxPage.jsx';
import AppsEventsCreateAnEventPage from './pages/AppsEventsCreateAnEventPage.jsx';
import AppsEventsEventDetailPage from './pages/AppsEventsEventDetailPage.jsx';
import AppsFileManagerGridViewPage from './pages/AppsFileManagerGridViewPage.jsx';
import AppsFileManagerListViewPage from './pages/AppsFileManagerListViewPage.jsx';
import Index2Page from './pages/Index2Page.jsx';
import IndexPage from './pages/IndexPage.jsx';
import PagesAuthenticationCard2faPage from './pages/PagesAuthenticationCard2faPage.jsx';
import PagesAuthenticationCardForgotPasswordPage from './pages/PagesAuthenticationCardForgotPasswordPage.jsx';
import PagesAuthenticationCardLockScreenPage from './pages/PagesAuthenticationCardLockScreenPage.jsx';
import PagesAuthenticationCardResetPasswordPage from './pages/PagesAuthenticationCardResetPasswordPage.jsx';
import PagesAuthenticationCardSignInPage from './pages/PagesAuthenticationCardSignInPage.jsx';
import PagesAuthenticationCardSignOutPage from './pages/PagesAuthenticationCardSignOutPage.jsx';
import PagesAuthenticationCardSignUpPage from './pages/PagesAuthenticationCardSignUpPage.jsx';
import PagesAuthenticationSimple2faPage from './pages/PagesAuthenticationSimple2faPage.jsx';
import PagesAuthenticationSimpleForgotPasswordPage from './pages/PagesAuthenticationSimpleForgotPasswordPage.jsx';
import PagesAuthenticationSimpleLockScreenPage from './pages/PagesAuthenticationSimpleLockScreenPage.jsx';
import PagesAuthenticationSimpleResetPasswordPage from './pages/PagesAuthenticationSimpleResetPasswordPage.jsx';
import PagesAuthenticationSimpleSignInPage from './pages/PagesAuthenticationSimpleSignInPage.jsx';
import PagesAuthenticationSimpleSignOutPage from './pages/PagesAuthenticationSimpleSignOutPage.jsx';
import PagesAuthenticationSimpleSignUpPage from './pages/PagesAuthenticationSimpleSignUpPage.jsx';
import PagesAuthenticationSplit2faPage from './pages/PagesAuthenticationSplit2faPage.jsx';
import PagesAuthenticationSplitForgotPasswordPage from './pages/PagesAuthenticationSplitForgotPasswordPage.jsx';
import PagesAuthenticationSplitLockScreenPage from './pages/PagesAuthenticationSplitLockScreenPage.jsx';
import PagesAuthenticationSplitResetPasswordPage from './pages/PagesAuthenticationSplitResetPasswordPage.jsx';
import PagesAuthenticationSplitSignInPage from './pages/PagesAuthenticationSplitSignInPage.jsx';
import PagesAuthenticationSplitSignOutPage from './pages/PagesAuthenticationSplitSignOutPage.jsx';
import PagesAuthenticationSplitSignUpPage from './pages/PagesAuthenticationSplitSignUpPage.jsx';
import PagesMembersPage from './pages/PagesMembersPage.jsx';
import PagesNotificationsPage from './pages/PagesNotificationsPage.jsx';

const pages = {
  "/apps/calendar": AppsCalendarPage,
  "/apps/chat": AppsChatPage,
  "/apps/e-commerce/admin/add-product": AppsECommerceAdminAddProductPage,
  "/apps/e-commerce/admin/customer-details": AppsECommerceAdminCustomerDetailsPage,
  "/apps/e-commerce/admin/customers": AppsECommerceAdminCustomersPage,
  "/apps/e-commerce/admin/order-details": AppsECommerceAdminOrderDetailsPage,
  "/apps/e-commerce/admin/orders": AppsECommerceAdminOrdersPage,
  "/apps/e-commerce/admin/products": AppsECommerceAdminProductsPage,
  "/apps/e-commerce/admin/refund": AppsECommerceAdminRefundPage,
  "/apps/e-commerce/landing/cart": AppsECommerceLandingCartPage,
  "/apps/e-commerce/landing/checkout": AppsECommerceLandingCheckoutPage,
  "/apps/e-commerce/landing/favourite-stores": AppsECommerceLandingFavouriteStoresPage,
  "/apps/e-commerce/landing/homepage": AppsECommerceLandingHomepagePage,
  "/apps/e-commerce/landing/invoice": AppsECommerceLandingInvoicePage,
  "/apps/e-commerce/landing/order-tracking": AppsECommerceLandingOrderTrackingPage,
  "/apps/e-commerce/landing/product-details": AppsECommerceLandingProductDetailsPage,
  "/apps/e-commerce/landing/products-filter": AppsECommerceLandingProductsFilterPage,
  "/apps/e-commerce/landing/profile": AppsECommerceLandingProfilePage,
  "/apps/e-commerce/landing/shipping-info": AppsECommerceLandingShippingInfoPage,
  "/apps/e-commerce/landing/wishlist": AppsECommerceLandingWishlistPage,
  "/apps/email/compose": AppsEmailComposePage,
  "/apps/email/email-detail": AppsEmailEmailDetailPage,
  "/apps/email/inbox": AppsEmailInboxPage,
  "/apps/events/create-an-event": AppsEventsCreateAnEventPage,
  "/apps/events/event-detail": AppsEventsEventDetailPage,
  "/apps/file-manager/grid-view": AppsFileManagerGridViewPage,
  "/apps/file-manager/list-view": AppsFileManagerListViewPage,
  "/index-2": Index2Page,
  "/": IndexPage,
  "/pages/authentication/card/2FA": PagesAuthenticationCard2faPage,
  "/pages/authentication/card/forgot-password": PagesAuthenticationCardForgotPasswordPage,
  "/pages/authentication/card/lock-screen": PagesAuthenticationCardLockScreenPage,
  "/pages/authentication/card/reset-password": PagesAuthenticationCardResetPasswordPage,
  "/pages/authentication/card/sign-in": PagesAuthenticationCardSignInPage,
  "/pages/authentication/card/sign-out": PagesAuthenticationCardSignOutPage,
  "/pages/authentication/card/sign-up": PagesAuthenticationCardSignUpPage,
  "/pages/authentication/simple/2FA": PagesAuthenticationSimple2faPage,
  "/pages/authentication/simple/forgot-password": PagesAuthenticationSimpleForgotPasswordPage,
  "/pages/authentication/simple/lock-screen": PagesAuthenticationSimpleLockScreenPage,
  "/pages/authentication/simple/reset-password": PagesAuthenticationSimpleResetPasswordPage,
  "/pages/authentication/simple/sign-in": PagesAuthenticationSimpleSignInPage,
  "/pages/authentication/simple/sign-out": PagesAuthenticationSimpleSignOutPage,
  "/pages/authentication/simple/sign-up": PagesAuthenticationSimpleSignUpPage,
  "/pages/authentication/split/2FA": PagesAuthenticationSplit2faPage,
  "/pages/authentication/split/forgot-password": PagesAuthenticationSplitForgotPasswordPage,
  "/pages/authentication/split/lock-screen": PagesAuthenticationSplitLockScreenPage,
  "/pages/authentication/split/reset-password": PagesAuthenticationSplitResetPasswordPage,
  "/pages/authentication/split/sign-in": PagesAuthenticationSplitSignInPage,
  "/pages/authentication/split/sign-out": PagesAuthenticationSplitSignOutPage,
  "/pages/authentication/split/sign-up": PagesAuthenticationSplitSignUpPage,
  "/pages/members": PagesMembersPage,
  "/pages/notifications": PagesNotificationsPage,
};

function normalizePath(pathname) {
  if (!pathname) return '/';
  const clean = pathname.replace(/\/+$/, '') || '/';
  return clean;
}

function App() {
  const path = normalizePath(window.location.pathname);
  const Page = pages[path] || pages['/'];
  const config = pageConfigs[path] || pageConfigs['/'];
  return (
    <>
      <PageRuntime config={config} />
      <Page />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
