/* Shared shell copied from IndexPage so every dashboard page uses the exact same navigation markup. */
export default function DashboardNavbars() {
  return (
    <>

<nav className="navbar navbar-vertical navbar-expand-lg" style={{display: "none"}}>
<div className="collapse navbar-collapse" id="navbarVerticalCollapse">

<div className="navbar-vertical-content">
<ul className="navbar-nav flex-column" id="navbarVerticalNav">
<li className="nav-item">

<p className="navbar-vertical-label">Apps</p>
<hr className="navbar-vertical-line" />
<div className="nav-item-wrapper"><a className="nav-link dropdown-indicator label-1" href="#nv-e-commerce" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-e-commerce">
<div className="d-flex align-items-center">
<div className="dropdown-indicator-icon-wrapper"><span className="fas fa-caret-right dropdown-indicator-icon"></span></div><span className="nav-link-icon"><span data-feather="shopping-cart"></span></span><span className="nav-link-text">E commerce</span>
</div>
</a>
<div className="parent-wrapper label-1">
<ul className="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-e-commerce">
<li className="collapsed-nav-item-title d-none">E commerce</li>
<li className="nav-item"><a className="nav-link dropdown-indicator" href="#nv-admin" data-bs-toggle="collapse" aria-expanded="true" aria-controls="nv-admin">
<div className="d-flex align-items-center">
<div className="dropdown-indicator-icon-wrapper"><span className="fas fa-caret-right dropdown-indicator-icon"></span></div><span className="nav-link-text">Admin</span>
</div>
</a>
<div className="parent-wrapper">
<ul className="nav collapse parent show" data-bs-parent="#e-commerce" id="nv-admin">
<li className="nav-item"><a className="nav-link" href="/apps/e-commerce/admin/add-product">
<div className="d-flex align-items-center"><span className="nav-link-text">Add product</span>
</div>
</a>
</li>
<li className="nav-item"><a className="nav-link" href="/apps/e-commerce/admin/products">
<div className="d-flex align-items-center"><span className="nav-link-text">Products</span></div>
</a>
</li>
<li className="nav-item"><a className="nav-link" href="/apps/e-commerce/admin/customers">
<div className="d-flex align-items-center"><span className="nav-link-text">Customers</span></div>
</a>
</li>
<li className="nav-item"><a className="nav-link" href="/apps/e-commerce/admin/customer-details">
<div className="d-flex align-items-center"><span className="nav-link-text">Customer details</span>
</div>
</a>
</li>
<li className="nav-item"><a className="nav-link" href="/apps/e-commerce/admin/orders">
<div className="d-flex align-items-center"><span className="nav-link-text">Orders</span></div>
</a>
</li>
<li className="nav-item"><a className="nav-link" href="/apps/e-commerce/admin/order-details">
<div className="d-flex align-items-center"><span className="nav-link-text">Order details</span>
</div>
</a>
</li>
<li className="nav-item"><a className="nav-link" href="/apps/e-commerce/admin/refund">
<div className="d-flex align-items-center"><span className="nav-link-text">Refund</span></div>
</a>
</li>
</ul>
</div>
</li>
<li className="nav-item"><a className="nav-link dropdown-indicator" href="#nv-customer" data-bs-toggle="collapse" aria-expanded="true" aria-controls="nv-customer">
<div className="d-flex align-items-center">
<div className="dropdown-indicator-icon-wrapper"><span className="fas fa-caret-right dropdown-indicator-icon"></span></div><span className="nav-link-text">Customer</span>
</div>
</a>
<div className="parent-wrapper">
<ul className="nav collapse parent show" data-bs-parent="#e-commerce" id="nv-customer">
<li className="nav-item"><a className="nav-link" href="/apps/e-commerce/landing/homepage">
<div className="d-flex align-items-center"><span className="nav-link-text">Homepage</span></div>
</a>
</li>
<li className="nav-item"><a className="nav-link" href="/apps/e-commerce/landing/product-details">
<div className="d-flex align-items-center"><span className="nav-link-text">Product details</span>
</div>
</a>
</li>
<li className="nav-item"><a className="nav-link" href="/apps/e-commerce/landing/products-filter">
<div className="d-flex align-items-center"><span className="nav-link-text">Products filter</span>
</div>
</a>
</li>
<li className="nav-item"><a className="nav-link" href="/apps/e-commerce/landing/cart">
<div className="d-flex align-items-center"><span className="nav-link-text">Cart</span></div>
</a>
</li>
<li className="nav-item"><a className="nav-link" href="/apps/e-commerce/landing/checkout">
<div className="d-flex align-items-center"><span className="nav-link-text">Checkout</span></div>
</a>
</li>
<li className="nav-item"><a className="nav-link" href="/apps/e-commerce/landing/shipping-info">
<div className="d-flex align-items-center"><span className="nav-link-text">Shipping info</span>
</div>
</a>
</li>
<li className="nav-item"><a className="nav-link" href="/apps/e-commerce/landing/profile">
<div className="d-flex align-items-center"><span className="nav-link-text">Profile</span></div>
</a>
</li>
<li className="nav-item"><a className="nav-link" href="/apps/e-commerce/landing/favourite-stores">
<div className="d-flex align-items-center"><span className="nav-link-text">Favourite stores</span>
</div>
</a>
</li>
<li className="nav-item"><a className="nav-link" href="/apps/e-commerce/landing/wishlist">
<div className="d-flex align-items-center"><span className="nav-link-text">Wishlist</span></div>
</a>
</li>
<li className="nav-item"><a className="nav-link" href="/apps/e-commerce/landing/order-tracking">
<div className="d-flex align-items-center"><span className="nav-link-text">Order tracking</span>
</div>
</a>
</li>
<li className="nav-item"><a className="nav-link" href="/apps/e-commerce/landing/invoice">
<div className="d-flex align-items-center"><span className="nav-link-text">Invoice</span></div>
</a>
</li>
</ul>
</div>
</li>
</ul>
</div>
</div>
<div className="nav-item-wrapper"><a className="nav-link label-1" href="/apps/chat" role="button" data-bs-toggle="" aria-expanded="false">
<div className="d-flex align-items-center"><span className="nav-link-icon"><span data-feather="message-square"></span></span><span className="nav-link-text-wrapper"><span className="nav-link-text">Chat</span></span></div>
</a></div>
<div className="nav-item-wrapper"><a className="nav-link dropdown-indicator label-1" href="#nv-email" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-email">
<div className="d-flex align-items-center">
<div className="dropdown-indicator-icon-wrapper"><span className="fas fa-caret-right dropdown-indicator-icon"></span></div><span className="nav-link-icon"><span data-feather="mail"></span></span><span className="nav-link-text">Email</span>
</div>
</a>
<div className="parent-wrapper label-1">
<ul className="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-email">
<li className="collapsed-nav-item-title d-none">Email</li>
<li className="nav-item"><a className="nav-link" href="/apps/email/inbox">
<div className="d-flex align-items-center"><span className="nav-link-text">Inbox</span></div>
</a>
</li>
<li className="nav-item"><a className="nav-link" href="/apps/email/email-detail">
<div className="d-flex align-items-center"><span className="nav-link-text">Email detail</span></div>
</a>
</li>
<li className="nav-item"><a className="nav-link" href="/apps/email/compose">
<div className="d-flex align-items-center"><span className="nav-link-text">Compose</span></div>
</a>
</li>
</ul>
</div>
</div>
<div className="nav-item-wrapper"><a className="nav-link dropdown-indicator label-1" href="#nv-events" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-events">
<div className="d-flex align-items-center">
<div className="dropdown-indicator-icon-wrapper"><span className="fas fa-caret-right dropdown-indicator-icon"></span></div><span className="nav-link-icon"><span data-feather="bookmark"></span></span><span className="nav-link-text">Events</span>
</div>
</a>
<div className="parent-wrapper label-1">
<ul className="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-events">
<li className="collapsed-nav-item-title d-none">Events</li>
<li className="nav-item"><a className="nav-link" href="/apps/events/create-an-event">
<div className="d-flex align-items-center"><span className="nav-link-text">Create an event</span></div>
</a>
</li>
<li className="nav-item"><a className="nav-link" href="/apps/events/event-detail">
<div className="d-flex align-items-center"><span className="nav-link-text">Event detail</span></div>
</a>
</li>
</ul>
</div>
</div>
<div className="nav-item-wrapper"><a className="nav-link dropdown-indicator label-1" href="#nv-file-manager" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-file-manager">
<div className="d-flex align-items-center">
<div className="dropdown-indicator-icon-wrapper"><span className="fas fa-caret-right dropdown-indicator-icon"></span></div><span className="nav-link-icon"><span data-feather="folder"></span></span><span className="nav-link-text">File
                      manager</span>
</div>
</a>
<div className="parent-wrapper label-1">
<ul className="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-file-manager">
<li className="collapsed-nav-item-title d-none">File manager</li>
<li className="nav-item"><a className="nav-link" href="/apps/file-manager/grid-view">
<div className="d-flex align-items-center"><span className="nav-link-text">Grid view</span></div>
</a>
</li>
<li className="nav-item"><a className="nav-link" href="/apps/file-manager/list-view">
<div className="d-flex align-items-center"><span className="nav-link-text">List view</span></div>
</a>
</li>
</ul>
</div>
</div>
<div className="nav-item-wrapper"><a className="nav-link label-1" href="/apps/calendar" role="button" data-bs-toggle="" aria-expanded="false">
<div className="d-flex align-items-center"><span className="nav-link-icon"><span data-feather="calendar"></span></span><span className="nav-link-text-wrapper"><span className="nav-link-text">Calendar</span></span></div>
</a></div>
</li>
<li className="nav-item">

<p className="navbar-vertical-label">Pages</p>
<hr className="navbar-vertical-line" />
<div className="nav-item-wrapper"><a className="nav-link label-1" href="/pages/members" role="button" data-bs-toggle="" aria-expanded="false">
<div className="d-flex align-items-center"><span className="nav-link-icon"><span data-feather="users"></span></span><span className="nav-link-text-wrapper"><span className="nav-link-text">Members</span></span></div>
</a></div>
<div className="nav-item-wrapper"><a className="nav-link dropdown-indicator label-1" href="#nv-authentication" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-authentication">
<div className="d-flex align-items-center">
<div className="dropdown-indicator-icon-wrapper"><span className="fas fa-caret-right dropdown-indicator-icon"></span></div><span className="nav-link-icon"><span data-feather="lock"></span></span><span className="nav-link-text">Authentication</span>
</div>
</a>
<div className="parent-wrapper label-1">
<ul className="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-authentication">
<li className="collapsed-nav-item-title d-none">Authentication</li>
<li className="nav-item"><a className="nav-link dropdown-indicator" href="#nv-simple" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-simple">
<div className="d-flex align-items-center">
<div className="dropdown-indicator-icon-wrapper"><span className="fas fa-caret-right dropdown-indicator-icon"></span></div><span className="nav-link-text">Simple</span>
</div>
</a>
<div className="parent-wrapper">
<ul className="nav collapse parent" data-bs-parent="#authentication" id="nv-simple">
<li className="nav-item"><a className="nav-link" href="/pages/authentication/simple/sign-in">
<div className="d-flex align-items-center"><span className="nav-link-text">Sign in</span></div>
</a>
</li>
<li className="nav-item"><a className="nav-link" href="/pages/authentication/simple/sign-up">
<div className="d-flex align-items-center"><span className="nav-link-text">Sign up</span></div>
</a>
</li>
<li className="nav-item"><a className="nav-link" href="/pages/authentication/simple/sign-out">
<div className="d-flex align-items-center"><span className="nav-link-text">Sign out</span></div>
</a>
</li>
<li className="nav-item"><a className="nav-link" href="/pages/authentication/simple/forgot-password">
<div className="d-flex align-items-center"><span className="nav-link-text">Forgot password</span>
</div>
</a>
</li>
<li className="nav-item"><a className="nav-link" href="/pages/authentication/simple/reset-password">
<div className="d-flex align-items-center"><span className="nav-link-text">Reset password</span>
</div>
</a>
</li>
<li className="nav-item"><a className="nav-link" href="/pages/authentication/simple/lock-screen">
<div className="d-flex align-items-center"><span className="nav-link-text">Lock screen</span>
</div>
</a>
</li>
<li className="nav-item"><a className="nav-link" href="/pages/authentication/simple/2FA">
<div className="d-flex align-items-center"><span className="nav-link-text">2FA</span></div>
</a>
</li>
</ul>
</div>
</li>
<li className="nav-item"><a className="nav-link dropdown-indicator" href="#nv-split" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-split">
<div className="d-flex align-items-center">
<div className="dropdown-indicator-icon-wrapper"><span className="fas fa-caret-right dropdown-indicator-icon"></span></div><span className="nav-link-text">Split</span>
</div>
</a>
<div className="parent-wrapper">
<ul className="nav collapse parent" data-bs-parent="#authentication" id="nv-split">
<li className="nav-item"><a className="nav-link" href="/pages/authentication/split/sign-in">
<div className="d-flex align-items-center"><span className="nav-link-text">Sign in</span></div>
</a>
</li>
<li className="nav-item"><a className="nav-link" href="/pages/authentication/split/sign-up">
<div className="d-flex align-items-center"><span className="nav-link-text">Sign up</span></div>
</a>
</li>
<li className="nav-item"><a className="nav-link" href="/pages/authentication/split/sign-out">
<div className="d-flex align-items-center"><span className="nav-link-text">Sign out</span></div>
</a>
</li>
<li className="nav-item"><a className="nav-link" href="/pages/authentication/split/forgot-password">
<div className="d-flex align-items-center"><span className="nav-link-text">Forgot password</span>
</div>
</a>
</li>
<li className="nav-item"><a className="nav-link" href="/pages/authentication/split/reset-password">
<div className="d-flex align-items-center"><span className="nav-link-text">Reset password</span>
</div>
</a>
</li>
<li className="nav-item"><a className="nav-link" href="/pages/authentication/split/lock-screen">
<div className="d-flex align-items-center"><span className="nav-link-text">Lock screen</span>
</div>
</a>
</li>
<li className="nav-item"><a className="nav-link" href="/pages/authentication/split/2FA">
<div className="d-flex align-items-center"><span className="nav-link-text">2FA</span></div>
</a>
</li>
</ul>
</div>
</li>
<li className="nav-item"><a className="nav-link dropdown-indicator" href="#nv-Card" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-Card">
<div className="d-flex align-items-center">
<div className="dropdown-indicator-icon-wrapper"><span className="fas fa-caret-right dropdown-indicator-icon"></span></div><span className="nav-link-text">Card</span>
</div>
</a>
<div className="parent-wrapper">
<ul className="nav collapse parent" data-bs-parent="#authentication" id="nv-Card">
<li className="nav-item"><a className="nav-link" href="/pages/authentication/card/sign-in">
<div className="d-flex align-items-center"><span className="nav-link-text">Sign in</span></div>
</a>
</li>
<li className="nav-item"><a className="nav-link" href="/pages/authentication/card/sign-up">
<div className="d-flex align-items-center"><span className="nav-link-text">Sign up</span></div>
</a>
</li>
<li className="nav-item"><a className="nav-link" href="/pages/authentication/card/sign-out">
<div className="d-flex align-items-center"><span className="nav-link-text">Sign out</span></div>
</a>
</li>
<li className="nav-item"><a className="nav-link" href="/pages/authentication/card/forgot-password">
<div className="d-flex align-items-center"><span className="nav-link-text">Forgot password</span>
</div>
</a>
</li>
<li className="nav-item"><a className="nav-link" href="/pages/authentication/card/reset-password">
<div className="d-flex align-items-center"><span className="nav-link-text">Reset password</span>
</div>
</a>
</li>
<li className="nav-item"><a className="nav-link" href="/pages/authentication/card/lock-screen">
<div className="d-flex align-items-center"><span className="nav-link-text">Lock screen</span>
</div>
</a>
</li>
<li className="nav-item"><a className="nav-link" href="/pages/authentication/card/2FA">
<div className="d-flex align-items-center"><span className="nav-link-text">2FA</span></div>
</a>
</li>
</ul>
</div>
</li>
</ul>
</div>
</div>
</li>
</ul>
</div>
</div>
<div className="navbar-vertical-footer"><button className="btn navbar-vertical-toggle border-0 fw-semibold w-100 white-space-nowrap d-flex align-items-center"><span className="uil uil-left-arrow-to-left fs-8"></span><span className="uil uil-arrow-from-right fs-8"></span><span className="navbar-vertical-footer-text ms-2">Collapsed View</span></button></div>
</nav>

<nav className="navbar navbar-top fixed-top navbar-expand" id="navbarDefault" style={{display: "none"}}>
<div className="collapse navbar-collapse justify-content-between">
<div className="navbar-logo">
<button className="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalCollapse" aria-controls="navbarVerticalCollapse" aria-expanded="false" aria-label="Toggle Navigation"><span className="navbar-toggle-icon"><span className="toggle-line"></span></span></button>
<a className="navbar-brand me-1 me-sm-3" href="/">
<div className="d-flex align-items-center">
<div className="d-flex align-items-center"><img src="/site/assets/img/icons/logo.png" alt="phoenix" width="27" />
<h5 className="logo-text ms-2 d-none d-sm-block">Caliver Rossil</h5>
</div>
</div>
</a>
</div>
<div className="search-box navbar-top-search-box d-none d-lg-block" data-list="&#123;&quot;valueNames&quot;:[&quot;title&quot;]&#125;" style={{width: "25rem"}}>
<form className="position-relative" data-bs-toggle="search" data-bs-display="static"><input className="form-control search-input fuzzy-search rounded-pill form-control-sm" type="search" placeholder="Search..." aria-label="Search" />
<span className="fas fa-search search-box-icon"></span>
</form>
<div className="btn-close position-absolute end-0 top-50 translate-middle cursor-pointer shadow-none" data-bs-dismiss="search"><button className="btn btn-link p-0" aria-label="Close"></button></div>
<div className="dropdown-menu border start-0 py-0 overflow-hidden w-100">
<div className="scrollbar-overlay" style={{maxHeight: "30rem"}}>
<div className="list pb-3">
<h6 className="dropdown-header text-body-highlight fs-10 py-2">24 <span className="text-body-quaternary">results</span></h6>
<hr className="my-0" />
<h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
                  Recently Searched </h6>
<div className="py-2"><a className="dropdown-item" href="/apps/e-commerce/landing/product-details">
<div className="d-flex align-items-center">
<div className="fw-normal text-body-highlight title"><span className="fa-solid fa-clock-rotate-left" data-fa-transform="shrink-2"></span> Store Macbook</div>
</div>
</a>
<a className="dropdown-item" href="/apps/e-commerce/landing/product-details">
<div className="d-flex align-items-center">
<div className="fw-normal text-body-highlight title"> <span className="fa-solid fa-clock-rotate-left" data-fa-transform="shrink-2"></span> MacBook Air - 13″</div>
</div>
</a>
</div>
<hr className="my-0" />
<h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
                  Products</h6>
<div className="py-2"><a className="dropdown-item py-2 d-flex align-items-center" href="/apps/e-commerce/landing/product-details">
<div className="file-thumbnail me-2"><img className="h-100 w-100 object-fit-cover rounded-3" src="/site/assets/img/products/60x60/3.png" alt="" /></div>
<div className="flex-1">
<h6 className="mb-0 text-body-highlight title">MacBook Air - 13″</h6>
<p className="fs-10 mb-0 d-flex text-body-tertiary"><span className="fw-medium text-body-tertiary text-opactity-85">8GB Memory - 1.6GHz - 128GB
                          Storage</span></p>
</div>
</a>
<a className="dropdown-item py-2 d-flex align-items-center" href="/apps/e-commerce/landing/product-details">
<div className="file-thumbnail me-2"><img className="img-fluid" src="/site/assets/img/products/60x60/3.png" alt="" /></div>
<div className="flex-1">
<h6 className="mb-0 text-body-highlight title">MacBook Pro - 13″</h6>
<p className="fs-10 mb-0 d-flex text-body-tertiary"><span className="fw-medium text-body-tertiary text-opactity-85">30 Sep at 12:30 PM</span></p>
</div>
</a>
</div>
<hr className="my-0" />
<h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">Quick
                  Links</h6>
<div className="py-2"><a className="dropdown-item" href="/apps/e-commerce/landing/product-details">
<div className="d-flex align-items-center">
<div className="fw-normal text-body-highlight title"><span className="fa-solid fa-link text-body" data-fa-transform="shrink-2"></span> Support MacBook House</div>
</div>
</a>
<a className="dropdown-item" href="/apps/e-commerce/landing/product-details">
<div className="d-flex align-items-center">
<div className="fw-normal text-body-highlight title"> <span className="fa-solid fa-link text-body" data-fa-transform="shrink-2"></span> Store MacBook″</div>
</div>
</a>
</div>
<hr className="my-0" />
<h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">Files
                </h6>
<div className="py-2"><a className="dropdown-item" href="/apps/e-commerce/landing/product-details">
<div className="d-flex align-items-center">
<div className="fw-normal text-body-highlight title"><span className="fa-solid fa-file-zipper text-body" data-fa-transform="shrink-2"></span> Library MacBook folder.rar</div>
</div>
</a>
<a className="dropdown-item" href="/apps/e-commerce/landing/product-details">
<div className="d-flex align-items-center">
<div className="fw-normal text-body-highlight title"> <span className="fa-solid fa-file-lines text-body" data-fa-transform="shrink-2"></span> Feature MacBook extensions.txt</div>
</div>
</a>
<a className="dropdown-item" href="/apps/e-commerce/landing/product-details">
<div className="d-flex align-items-center">
<div className="fw-normal text-body-highlight title"> <span className="fa-solid fa-image text-body" data-fa-transform="shrink-2"></span> MacBook Pro_13.jpg</div>
</div>
</a>
</div>
<hr className="my-0" />
<h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">Members
                </h6>
<div className="py-2"><a className="dropdown-item py-2 d-flex align-items-center" href="/pages/members">
<div className="avatar avatar-l status-online me-2 text-body">
<img className="rounded-circle" src="/site/assets/img/team/40x40/10.webp" alt="" />
</div>
<div className="flex-1">
<h6 className="mb-0 text-body-highlight title">Carry Anna</h6>
<p className="fs-10 mb-0 d-flex text-body-tertiary">anna@technext.it</p>
</div>
</a>
<a className="dropdown-item py-2 d-flex align-items-center" href="/pages/members">
<div className="avatar avatar-l me-2 text-body">
<img className="rounded-circle" src="/site/assets/img/team/40x40/12.webp" alt="" />
</div>
<div className="flex-1">
<h6 className="mb-0 text-body-highlight title">John Smith</h6>
<p className="fs-10 mb-0 d-flex text-body-tertiary">smith@technext.it</p>
</div>
</a>
</div>
<hr className="my-0" />
<h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">Related
                  Searches</h6>
<div className="py-2"><a className="dropdown-item" href="/apps/e-commerce/landing/product-details">
<div className="d-flex align-items-center">
<div className="fw-normal text-body-highlight title"><span className="fa-brands fa-firefox-browser text-body" data-fa-transform="shrink-2"></span> Search in
                        the Web MacBook</div>
</div>
</a>
<a className="dropdown-item" href="/apps/e-commerce/landing/product-details">
<div className="d-flex align-items-center">
<div className="fw-normal text-body-highlight title"> <span className="fa-brands fa-chrome text-body" data-fa-transform="shrink-2"></span> Store MacBook″</div>
</div>
</a>
</div>
</div>
<div className="text-center">
<p className="fallback fw-bold fs-7 d-none">No Result Found.</p>
</div>
</div>
</div>
</div>
<ul className="navbar-nav navbar-nav-icons flex-row">
<li className="nav-item">
<div className="theme-control-toggle feather-icon-wait px-2"><input className="form-check-input ms-0 theme-control-toggle-input" type="checkbox" data-theme-control="phoenixTheme" value="dark" id="themeControlToggle" /><label className="mb-0 theme-control-toggle-label theme-control-toggle-light" htmlFor="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Switch theme" style={{height: "32px", width: "32px"}}><span className="icon" data-feather="moon"></span></label><label className="mb-0 theme-control-toggle-label theme-control-toggle-dark" htmlFor="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Switch theme" style={{height: "32px", width: "32px"}}><span className="icon" data-feather="sun"></span></label></div>
</li>
<li className="nav-item d-lg-none"><a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#searchBoxModal"><span className="d-block" style={{height: "20px", width: "20px"}}><span data-feather="search" style={{height: "19px", width: "19px", marginBottom: "2px"}}></span></span></a></li>
<li className="nav-item dropdown">
<a className="nav-link" href="#" style={{minWidth: "2.25rem"}} role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-auto-close="outside"><span className="d-block" style={{height: "20px", width: "20px"}}><span data-feather="bell" style={{height: "20px", width: "20px"}}></span></span></a>
<div className="dropdown-menu dropdown-menu-end notification-dropdown-menu py-0 shadow border navbar-dropdown-caret" id="navbarDropdownNotfication" aria-labelledby="navbarDropdownNotfication">
<div className="card position-relative border-0">
<div className="card-header p-2">
<div className="d-flex justify-content-between">
<h5 className="text-body-emphasis mb-0">Notifications</h5><button className="btn btn-link p-0 fs-9 fw-normal" type="button">Mark all as read</button>
</div>
</div>
<div className="card-body p-0">
<div className="scrollbar-overlay" style={{height: "27rem"}}>
<div className="px-2 px-sm-3 py-3 notification-card position-relative read border-bottom">
<div className="d-flex align-items-center justify-content-between position-relative">
<div className="d-flex">
<div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="/site/assets/img/team/40x40/30.webp" alt="" /></div>
<div className="flex-1 me-sm-3">
<h4 className="fs-9 text-body-emphasis">Jessie Samson</h4>
<p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className="me-1 fs-10">💬</span>Mentioned you in a comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">10m</span></p>
<p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:41 AM </span>August 7,2021</p>
</div>
</div>
<div className="dropdown notification-dropdown"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
<div className="dropdown-menu py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
</div>
</div>
</div>
<div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
<div className="d-flex align-items-center justify-content-between position-relative">
<div className="d-flex">
<div className="avatar avatar-m status-online me-3">
<div className="avatar-name rounded-circle"><span>J</span></div>
</div>
<div className="flex-1 me-sm-3">
<h4 className="fs-9 text-body-emphasis">Jane Foster</h4>
<p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className="me-1 fs-10">📅</span>Created an event.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">20m</span></p>
<p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:20 AM </span>August 7,2021</p>
</div>
</div>
<div className="dropdown notification-dropdown"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
<div className="dropdown-menu py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
</div>
</div>
</div>
<div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
<div className="d-flex align-items-center justify-content-between position-relative">
<div className="d-flex">
<div className="avatar avatar-m status-online me-3"><img className="rounded-circle avatar-placeholder" src="/site/assets/img/team/40x40/avatar.webp" alt="" /></div>
<div className="flex-1 me-sm-3">
<h4 className="fs-9 text-body-emphasis">Jessie Samson</h4>
<p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className="me-1 fs-10">👍</span>Liked your comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">1h</span></p>
<p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">9:30 AM </span>August 7,2021</p>
</div>
</div>
<div className="dropdown notification-dropdown"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
<div className="dropdown-menu py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
</div>
</div>
</div>
<div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
<div className="d-flex align-items-center justify-content-between position-relative">
<div className="d-flex">
<div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="/site/assets/img/team/40x40/57.webp" alt="" /></div>
<div className="flex-1 me-sm-3">
<h4 className="fs-9 text-body-emphasis">Kiera Anderson</h4>
<p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className="me-1 fs-10">💬</span>Mentioned you in a comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
<p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">9:11 AM </span>August 7,2021</p>
</div>
</div>
<div className="dropdown notification-dropdown"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
<div className="dropdown-menu py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
</div>
</div>
</div>
<div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
<div className="d-flex align-items-center justify-content-between position-relative">
<div className="d-flex">
<div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="/site/assets/img/team/40x40/59.webp" alt="" /></div>
<div className="flex-1 me-sm-3">
<h4 className="fs-9 text-body-emphasis">Herman Carter</h4>
<p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className="me-1 fs-10">👤</span>Tagged you in a comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
<p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:58 PM </span>August 7,2021</p>
</div>
</div>
<div className="dropdown notification-dropdown"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
<div className="dropdown-menu py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
</div>
</div>
</div>
<div className="px-2 px-sm-3 py-3 notification-card position-relative read">
<div className="d-flex align-items-center justify-content-between position-relative">
<div className="d-flex">
<div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="/site/assets/img/team/40x40/58.webp" alt="" /></div>
<div className="flex-1 me-sm-3">
<h4 className="fs-9 text-body-emphasis">Benjamin Button</h4>
<p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className="me-1 fs-10">👍</span>Liked your comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
<p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:18 AM </span>August 7,2021</p>
</div>
</div>
<div className="dropdown notification-dropdown"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
<div className="dropdown-menu py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
</div>
</div>
</div>
</div>
</div>
<div className="card-footer p-0 border-top border-translucent border-0">
<div className="my-2 text-center fw-bold fs-10 text-body-tertiary text-opactity-85"><a className="fw-bolder" href="/pages/notifications">Notification history</a></div>
</div>
</div>
</div>
</li>
<li className="nav-item dropdown">
<a className="nav-link" id="navbarDropdownNindeDots" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" data-bs-auto-close="outside" aria-expanded="false"><svg width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="2" cy="2" r="2" fill="currentColor"></circle>
<circle cx="2" cy="8" r="2" fill="currentColor"></circle>
<circle cx="2" cy="14" r="2" fill="currentColor"></circle>
<circle cx="8" cy="8" r="2" fill="currentColor"></circle>
<circle cx="8" cy="14" r="2" fill="currentColor"></circle>
<circle cx="14" cy="8" r="2" fill="currentColor"></circle>
<circle cx="14" cy="14" r="2" fill="currentColor"></circle>
<circle cx="8" cy="2" r="2" fill="currentColor"></circle>
<circle cx="14" cy="2" r="2" fill="currentColor"></circle>
</svg></a>
<div className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-nine-dots shadow border" aria-labelledby="navbarDropdownNindeDots">
<div className="card bg-body-emphasis position-relative border-0">
<div className="card-body pt-3 px-3 pb-0 overflow-auto scrollbar" style={{height: "20rem"}}>
<div className="row text-center align-items-center gx-0 gy-0">
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/behance.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Behance</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/google-cloud.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Cloud</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/slack.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Slack</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/gitlab.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Gitlab</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/bitbucket.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">BitBucket</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/google-drive.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Drive</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/trello.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Trello</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/figma.webp" alt="" width="20" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Figma</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/twitter.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Twitter</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/pinterest.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Pinterest</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/ln.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Linkedin</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/google-maps.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Maps</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/google-photos.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Photos</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/spotify.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Spotify</p>
</a></div>
</div>
</div>
</div>
</div>
</li>
<li className="nav-item dropdown"><a className="nav-link lh-1 pe-0" id="navbarDropdownUser" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">
<div className="avatar avatar-l">
<img className="rounded-circle" src="/site/assets/img/team/40x40/57.webp" alt="" />
</div>
</a>
<div className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-profile shadow border" aria-labelledby="navbarDropdownUser">
<div className="card position-relative border-0">
<div className="card-body p-0">
<div className="text-center pt-4 pb-3">
<div className="avatar avatar-xl">
<img className="rounded-circle" src="/site/assets/img/team/72x72/57.webp" alt="" />
</div>
<h6 className="mt-2 text-body-emphasis">Jerry Seinfield</h6>
</div>
<div className="mb-3 mx-3"><input className="form-control form-control-sm" id="statusUpdateInput" type="text" placeholder="Update your status" /></div>
</div>
<div className="overflow-auto scrollbar" style={{height: "10rem"}}>
<ul className="nav d-flex flex-column mb-2 pb-1">
<li className="nav-item"><a className="nav-link px-3 d-block" href="#!"> <span className="me-2 text-body align-bottom" data-feather="user"></span><span>Profile</span></a></li>
<li className="nav-item"><a className="nav-link px-3 d-block" href="#!"><span className="me-2 text-body align-bottom" data-feather="pie-chart"></span>Dashboard</a></li>
<li className="nav-item"><a className="nav-link px-3 d-block" href="#!"> <span className="me-2 text-body align-bottom" data-feather="lock"></span>Posts & Activity</a></li>
<li className="nav-item"><a className="nav-link px-3 d-block" href="#!"> <span className="me-2 text-body align-bottom" data-feather="settings"></span>Settings & Privacy </a>
</li>
<li className="nav-item"><a className="nav-link px-3 d-block" href="#!"> <span className="me-2 text-body align-bottom" data-feather="help-circle"></span>Help Center</a></li>
<li className="nav-item"><a className="nav-link px-3 d-block" href="#!"> <span className="me-2 text-body align-bottom" data-feather="globe"></span>Language</a></li>
</ul>
</div>
<div className="card-footer p-0 border-top border-translucent">
<ul className="nav d-flex flex-column my-3">
<li className="nav-item"><a className="nav-link px-3 d-block" href="#!"> <span className="me-2 text-body align-bottom" data-feather="user-plus"></span>Add another account</a>
</li>
</ul>
<hr />
<div className="px-3"> <a className="btn btn-phoenix-secondary d-flex flex-center w-100" href="#!"> <span className="me-2" data-feather="log-out"> </span>Sign out</a></div>
<div className="my-2 text-center fw-bold fs-10 text-body-quaternary"><a className="text-body-quaternary me-1" href="#!">Privacy policy</a>•<a className="text-body-quaternary mx-1" href="#!">Terms</a>•<a className="text-body-quaternary ms-1" href="#!">Cookies</a></div>
</div>
</div>
</div>
</li>
</ul>
</div>
</nav>

<nav className="navbar navbar-top navbar-slim fixed-top navbar-expand" id="topNavSlim" style={{display: "none"}}>
<div className="collapse navbar-collapse justify-content-between">
<div className="navbar-logo">
<button className="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalCollapse" aria-controls="navbarVerticalCollapse" aria-expanded="false" aria-label="Toggle Navigation"><span className="navbar-toggle-icon"><span className="toggle-line"></span></span></button>
<a className="navbar-brand navbar-brand" href="/">Caliver Rossil <span className="text-body-highlight d-none d-sm-inline">slim</span></a>
</div>
<ul className="navbar-nav navbar-nav-icons flex-row">
<li className="nav-item">
<div className="theme-control-toggle fa-ion-wait pe-2 theme-control-toggle-slim"><input className="form-check-input ms-0 theme-control-toggle-input" id="themeControlToggle" type="checkbox" data-theme-control="phoenixTheme" value="dark" /><label className="mb-0 theme-control-toggle-label theme-control-toggle-light" htmlFor="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch theme"><span className="d-none d-sm-flex flex-center" style={{height: "16px", width: "16px"}}><span className="me-1 icon" data-feather="moon"></span></span><span className="fs-9 fw-bold">Dark</span></label><label className="mb-0 theme-control-toggle-label theme-control-toggle-dark" htmlFor="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch theme"><span className="d-none d-sm-flex flex-center" style={{height: "16px", width: "16px"}}><span className="me-1 icon" data-feather="sun"></span></span><span className="fs-9 fw-bold">Light</span></label></div>
</li>
<li className="nav-item"> <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#searchBoxModal"><span className="d-inline-block" style={{height: "12px", width: "12px"}}><span data-feather="search" style={{height: "12px", width: "12px"}}></span></span></a></li>
<li className="nav-item dropdown">
<a className="nav-link" id="navbarDropdownNotification" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="d-inline-block" style={{height: "12px", width: "12px"}}><span data-feather="bell" style={{height: "12px", width: "12px"}}></span></span></a>
<div className="dropdown-menu dropdown-menu-end notification-dropdown-menu py-0 shadow border navbar-dropdown-caret" id="navbarDropdownNotfication" aria-labelledby="navbarDropdownNotfication">
<div className="card position-relative border-0">
<div className="card-header p-2">
<div className="d-flex justify-content-between">
<h5 className="text-body-emphasis mb-0">Notifications</h5><button className="btn btn-link p-0 fs-9 fw-normal" type="button">Mark all as read</button>
</div>
</div>
<div className="card-body p-0">
<div className="scrollbar-overlay" style={{height: "27rem"}}>
<div className="px-2 px-sm-3 py-3 notification-card position-relative read border-bottom">
<div className="d-flex align-items-center justify-content-between position-relative">
<div className="d-flex">
<div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="/site/assets/img/team/40x40/30.webp" alt="" /></div>
<div className="flex-1 me-sm-3">
<h4 className="fs-9 text-body-emphasis">Jessie Samson</h4>
<p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className="me-1 fs-10">💬</span>Mentioned you in a comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">10m</span></p>
<p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:41 AM </span>August 7,2021</p>
</div>
</div>
<div className="dropdown notification-dropdown"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
<div className="dropdown-menu py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
</div>
</div>
</div>
<div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
<div className="d-flex align-items-center justify-content-between position-relative">
<div className="d-flex">
<div className="avatar avatar-m status-online me-3">
<div className="avatar-name rounded-circle"><span>J</span></div>
</div>
<div className="flex-1 me-sm-3">
<h4 className="fs-9 text-body-emphasis">Jane Foster</h4>
<p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className="me-1 fs-10">📅</span>Created an event.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">20m</span></p>
<p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:20 AM </span>August 7,2021</p>
</div>
</div>
<div className="dropdown notification-dropdown"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
<div className="dropdown-menu py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
</div>
</div>
</div>
<div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
<div className="d-flex align-items-center justify-content-between position-relative">
<div className="d-flex">
<div className="avatar avatar-m status-online me-3"><img className="rounded-circle avatar-placeholder" src="/site/assets/img/team/40x40/avatar.webp" alt="" /></div>
<div className="flex-1 me-sm-3">
<h4 className="fs-9 text-body-emphasis">Jessie Samson</h4>
<p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className="me-1 fs-10">👍</span>Liked your comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">1h</span></p>
<p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">9:30 AM </span>August 7,2021</p>
</div>
</div>
<div className="dropdown notification-dropdown"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
<div className="dropdown-menu py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
</div>
</div>
</div>
<div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
<div className="d-flex align-items-center justify-content-between position-relative">
<div className="d-flex">
<div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="/site/assets/img/team/40x40/57.webp" alt="" /></div>
<div className="flex-1 me-sm-3">
<h4 className="fs-9 text-body-emphasis">Kiera Anderson</h4>
<p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className="me-1 fs-10">💬</span>Mentioned you in a comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
<p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">9:11 AM </span>August 7,2021</p>
</div>
</div>
<div className="dropdown notification-dropdown"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
<div className="dropdown-menu py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
</div>
</div>
</div>
<div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
<div className="d-flex align-items-center justify-content-between position-relative">
<div className="d-flex">
<div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="/site/assets/img/team/40x40/59.webp" alt="" /></div>
<div className="flex-1 me-sm-3">
<h4 className="fs-9 text-body-emphasis">Herman Carter</h4>
<p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className="me-1 fs-10">👤</span>Tagged you in a comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
<p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:58 PM </span>August 7,2021</p>
</div>
</div>
<div className="dropdown notification-dropdown"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
<div className="dropdown-menu py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
</div>
</div>
</div>
<div className="px-2 px-sm-3 py-3 notification-card position-relative read">
<div className="d-flex align-items-center justify-content-between position-relative">
<div className="d-flex">
<div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="/site/assets/img/team/40x40/58.webp" alt="" /></div>
<div className="flex-1 me-sm-3">
<h4 className="fs-9 text-body-emphasis">Benjamin Button</h4>
<p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className="me-1 fs-10">👍</span>Liked your comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
<p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:18 AM </span>August 7,2021</p>
</div>
</div>
<div className="dropdown notification-dropdown"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
<div className="dropdown-menu py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
</div>
</div>
</div>
</div>
</div>
<div className="card-footer p-0 border-top border-translucent border-0">
<div className="my-2 text-center fw-bold fs-10 text-body-tertiary text-opactity-85"><a className="fw-bolder" href="/pages/notifications">Notification history</a></div>
</div>
</div>
</div>
</li>
<li className="nav-item dropdown">
<a className="nav-link" id="navbarDropdownNindeDots" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" data-bs-auto-close="outside" aria-expanded="false"><svg width="10" height="10" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="2" cy="2" r="2" fill="currentColor"></circle>
<circle cx="2" cy="8" r="2" fill="currentColor"></circle>
<circle cx="2" cy="14" r="2" fill="currentColor"></circle>
<circle cx="8" cy="8" r="2" fill="currentColor"></circle>
<circle cx="8" cy="14" r="2" fill="currentColor"></circle>
<circle cx="14" cy="8" r="2" fill="currentColor"></circle>
<circle cx="14" cy="14" r="2" fill="currentColor"></circle>
<circle cx="8" cy="2" r="2" fill="currentColor"></circle>
<circle cx="14" cy="2" r="2" fill="currentColor"></circle>
</svg></a>
<div className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-nine-dots shadow border" aria-labelledby="navbarDropdownNindeDots">
<div className="card bg-body-emphasis position-relative border-0">
<div className="card-body pt-3 px-3 pb-0 overflow-auto scrollbar" style={{height: "20rem"}}>
<div className="row text-center align-items-center gx-0 gy-0">
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/behance.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Behance</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/google-cloud.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Cloud</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/slack.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Slack</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/gitlab.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Gitlab</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/bitbucket.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">BitBucket</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/google-drive.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Drive</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/trello.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Trello</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/figma.webp" alt="" width="20" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Figma</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/twitter.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Twitter</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/pinterest.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Pinterest</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/ln.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Linkedin</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/google-maps.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Maps</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/google-photos.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Photos</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/spotify.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Spotify</p>
</a></div>
</div>
</div>
</div>
</div>
</li>
<li className="nav-item dropdown"><a className="nav-link lh-1 pe-0 white-space-nowrap" id="navbarDropdownUser" href="#!" role="button" data-bs-toggle="dropdown" aria-haspopup="true" data-bs-auto-close="outside" aria-expanded="false">Olivia <span className="d-inline-block" style={{height: "10.2px", width: "10.2px"}}><span className="fa-solid fa-chevron-down fs-10"></span></span></a>
<div className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-profile shadow border" aria-labelledby="navbarDropdownUser">
<div className="card position-relative border-0">
<div className="card-body p-0">
<div className="text-center pt-4 pb-3">
<div className="avatar avatar-xl">
<img className="rounded-circle" src="/site/assets/img/team/72x72/57.webp" alt="" />
</div>
<h6 className="mt-2 text-body-emphasis">Jerry Seinfield</h6>
</div>
<div className="mb-3 mx-3"><input className="form-control form-control-sm" id="statusUpdateInput" type="text" placeholder="Update your status" /></div>
</div>
<div className="overflow-auto scrollbar" style={{height: "10rem"}}>
<ul className="nav d-flex flex-column mb-2 pb-1">
<li className="nav-item"><a className="nav-link px-3 d-block" href="#!"> <span className="me-2 text-body align-bottom" data-feather="user"></span><span>Profile</span></a></li>
<li className="nav-item"><a className="nav-link px-3 d-block" href="#!"><span className="me-2 text-body align-bottom" data-feather="pie-chart"></span>Dashboard</a></li>
<li className="nav-item"><a className="nav-link px-3 d-block" href="#!"> <span className="me-2 text-body align-bottom" data-feather="lock"></span>Posts & Activity</a></li>
<li className="nav-item"><a className="nav-link px-3 d-block" href="#!"> <span className="me-2 text-body align-bottom" data-feather="settings"></span>Settings & Privacy </a>
</li>
<li className="nav-item"><a className="nav-link px-3 d-block" href="#!"> <span className="me-2 text-body align-bottom" data-feather="help-circle"></span>Help Center</a></li>
<li className="nav-item"><a className="nav-link px-3 d-block" href="#!"> <span className="me-2 text-body align-bottom" data-feather="globe"></span>Language</a></li>
</ul>
</div>
<div className="card-footer p-0 border-top border-translucent">
<ul className="nav d-flex flex-column my-3">
<li className="nav-item"><a className="nav-link px-3 d-block" href="#!"> <span className="me-2 text-body align-bottom" data-feather="user-plus"></span>Add another account</a>
</li>
</ul>
<hr />
<div className="px-3"> <a className="btn btn-phoenix-secondary d-flex flex-center w-100" href="#!"> <span className="me-2" data-feather="log-out"> </span>Sign out</a></div>
<div className="my-2 text-center fw-bold fs-10 text-body-quaternary"><a className="text-body-quaternary me-1" href="#!">Privacy policy</a>•<a className="text-body-quaternary mx-1" href="#!">Terms</a>•<a className="text-body-quaternary ms-1" href="#!">Cookies</a></div>
</div>
</div>
</div>
</li>
</ul>
</div>
</nav>

<nav className="navbar navbar-top fixed-top navbar-expand-lg" id="navbarTop" style={{display: "none"}}>
<div className="navbar-logo">
<button className="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTopCollapse" aria-controls="navbarTopCollapse" aria-expanded="false" aria-label="Toggle Navigation"><span className="navbar-toggle-icon"><span className="toggle-line"></span></span></button>
<a className="navbar-brand me-1 me-sm-3" href="/">
<div className="d-flex align-items-center">
<div className="d-flex align-items-center"><img src="/site/assets/img/icons/logo.png" alt="phoenix" width="27" />
<h5 className="logo-text ms-2 d-none d-sm-block">Caliver Rosil</h5>
</div>
</div>
</a>
</div>
<ul className="navbar-nav navbar-nav-icons flex-row">
<li className="nav-item">
<div className="theme-control-toggle feather-icon-wait px-2"><input className="form-check-input ms-0 theme-control-toggle-input" type="checkbox" data-theme-control="phoenixTheme" value="dark" id="themeControlToggle" /><label className="mb-0 theme-control-toggle-label theme-control-toggle-light" htmlFor="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Switch theme" style={{height: "32px", width: "32px"}}><span className="icon" data-feather="moon"></span></label><label className="mb-0 theme-control-toggle-label theme-control-toggle-dark" htmlFor="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Switch theme" style={{height: "32px", width: "32px"}}><span className="icon" data-feather="sun"></span></label></div>
</li>
<li className="nav-item"><a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#searchBoxModal"><span className="d-block" style={{height: "20px", width: "20px"}}><span data-feather="search" style={{height: "19px", width: "19px", marginBottom: "2px"}}></span></span></a></li>
<li className="nav-item dropdown">
<a className="nav-link" href="#" style={{minWidth: "2.25rem"}} role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-auto-close="outside"><span className="d-block" style={{height: "20px", width: "20px"}}><span data-feather="bell" style={{height: "20px", width: "20px"}}></span></span></a>
<div className="dropdown-menu dropdown-menu-end notification-dropdown-menu py-0 shadow border navbar-dropdown-caret" id="navbarDropdownNotfication" aria-labelledby="navbarDropdownNotfication">
<div className="card position-relative border-0">
<div className="card-header p-2">
<div className="d-flex justify-content-between">
<h5 className="text-body-emphasis mb-0">Notifications</h5><button className="btn btn-link p-0 fs-9 fw-normal" type="button">Mark all as read</button>
</div>
</div>
<div className="card-body p-0">
<div className="scrollbar-overlay" style={{height: "27rem"}}>
<div className="px-2 px-sm-3 py-3 notification-card position-relative read border-bottom">
<div className="d-flex align-items-center justify-content-between position-relative">
<div className="d-flex">
<div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="/site/assets/img/team/40x40/30.webp" alt="" /></div>
<div className="flex-1 me-sm-3">
<h4 className="fs-9 text-body-emphasis">Jessie Samson</h4>
<p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className="me-1 fs-10">💬</span>Mentioned you in a comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">10m</span></p>
<p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:41 AM </span>August 7,2021</p>
</div>
</div>
<div className="dropdown notification-dropdown"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
<div className="dropdown-menu py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
</div>
</div>
</div>
<div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
<div className="d-flex align-items-center justify-content-between position-relative">
<div className="d-flex">
<div className="avatar avatar-m status-online me-3">
<div className="avatar-name rounded-circle"><span>J</span></div>
</div>
<div className="flex-1 me-sm-3">
<h4 className="fs-9 text-body-emphasis">Jane Foster</h4>
<p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className="me-1 fs-10">📅</span>Created an event.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">20m</span></p>
<p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:20 AM </span>August 7,2021</p>
</div>
</div>
<div className="dropdown notification-dropdown"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
<div className="dropdown-menu py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
</div>
</div>
</div>
<div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
<div className="d-flex align-items-center justify-content-between position-relative">
<div className="d-flex">
<div className="avatar avatar-m status-online me-3"><img className="rounded-circle avatar-placeholder" src="/site/assets/img/team/40x40/avatar.webp" alt="" /></div>
<div className="flex-1 me-sm-3">
<h4 className="fs-9 text-body-emphasis">Jessie Samson</h4>
<p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className="me-1 fs-10">👍</span>Liked your comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">1h</span></p>
<p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">9:30 AM </span>August 7,2021</p>
</div>
</div>
<div className="dropdown notification-dropdown"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
<div className="dropdown-menu py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
</div>
</div>
</div>
<div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
<div className="d-flex align-items-center justify-content-between position-relative">
<div className="d-flex">
<div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="/site/assets/img/team/40x40/57.webp" alt="" /></div>
<div className="flex-1 me-sm-3">
<h4 className="fs-9 text-body-emphasis">Kiera Anderson</h4>
<p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className="me-1 fs-10">💬</span>Mentioned you in a comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
<p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">9:11 AM </span>August 7,2021</p>
</div>
</div>
<div className="dropdown notification-dropdown"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
<div className="dropdown-menu py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
</div>
</div>
</div>
<div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
<div className="d-flex align-items-center justify-content-between position-relative">
<div className="d-flex">
<div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="/site/assets/img/team/40x40/59.webp" alt="" /></div>
<div className="flex-1 me-sm-3">
<h4 className="fs-9 text-body-emphasis">Herman Carter</h4>
<p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className="me-1 fs-10">👤</span>Tagged you in a comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
<p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:58 PM </span>August 7,2021</p>
</div>
</div>
<div className="dropdown notification-dropdown"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
<div className="dropdown-menu py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
</div>
</div>
</div>
<div className="px-2 px-sm-3 py-3 notification-card position-relative read">
<div className="d-flex align-items-center justify-content-between position-relative">
<div className="d-flex">
<div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="/site/assets/img/team/40x40/58.webp" alt="" /></div>
<div className="flex-1 me-sm-3">
<h4 className="fs-9 text-body-emphasis">Benjamin Button</h4>
<p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className="me-1 fs-10">👍</span>Liked your comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
<p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:18 AM </span>August 7,2021</p>
</div>
</div>
<div className="dropdown notification-dropdown"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
<div className="dropdown-menu py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
</div>
</div>
</div>
</div>
</div>
<div className="card-footer p-0 border-top border-translucent border-0">
<div className="my-2 text-center fw-bold fs-10 text-body-tertiary text-opactity-85"><a className="fw-bolder" href="/pages/notifications">Notification history</a></div>
</div>
</div>
</div>
</li>
<li className="nav-item dropdown">
<a className="nav-link" id="navbarDropdownNindeDots" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" data-bs-auto-close="outside" aria-expanded="false"><svg width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="2" cy="2" r="2" fill="currentColor"></circle>
<circle cx="2" cy="8" r="2" fill="currentColor"></circle>
<circle cx="2" cy="14" r="2" fill="currentColor"></circle>
<circle cx="8" cy="8" r="2" fill="currentColor"></circle>
<circle cx="8" cy="14" r="2" fill="currentColor"></circle>
<circle cx="14" cy="8" r="2" fill="currentColor"></circle>
<circle cx="14" cy="14" r="2" fill="currentColor"></circle>
<circle cx="8" cy="2" r="2" fill="currentColor"></circle>
<circle cx="14" cy="2" r="2" fill="currentColor"></circle>
</svg></a>
<div className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-nine-dots shadow border" aria-labelledby="navbarDropdownNindeDots">
<div className="card bg-body-emphasis position-relative border-0">
<div className="card-body pt-3 px-3 pb-0 overflow-auto scrollbar" style={{height: "20rem"}}>
<div className="row text-center align-items-center gx-0 gy-0">
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/behance.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Behance</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/google-cloud.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Cloud</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/slack.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Slack</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/gitlab.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Gitlab</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/bitbucket.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">BitBucket</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/google-drive.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Drive</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/trello.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Trello</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/figma.webp" alt="" width="20" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Figma</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/twitter.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Twitter</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/pinterest.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Pinterest</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/ln.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Linkedin</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/google-maps.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Maps</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/google-photos.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Photos</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/spotify.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Spotify</p>
</a></div>
</div>
</div>
</div>
</div>
</li>
<li className="nav-item dropdown"><a className="nav-link lh-1 pe-0" id="navbarDropdownUser" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">
<div className="avatar avatar-l">
<img className="rounded-circle" src="/site/assets/img/team/40x40/57.webp" alt="" />
</div>
</a>
<div className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-profile shadow border" aria-labelledby="navbarDropdownUser">
<div className="card position-relative border-0">
<div className="card-body p-0">
<div className="text-center pt-4 pb-3">
<div className="avatar avatar-xl">
<img className="rounded-circle" src="/site/assets/img/team/72x72/57.webp" alt="" />
</div>
<h6 className="mt-2 text-body-emphasis">Jerry Seinfield</h6>
</div>
<div className="mb-3 mx-3"><input className="form-control form-control-sm" id="statusUpdateInput" type="text" placeholder="Update your status" /></div>
</div>
<div className="overflow-auto scrollbar" style={{height: "10rem"}}>
<ul className="nav d-flex flex-column mb-2 pb-1">
<li className="nav-item"><a className="nav-link px-3 d-block" href="#!"> <span className="me-2 text-body align-bottom" data-feather="user"></span><span>Profile</span></a></li>
<li className="nav-item"><a className="nav-link px-3 d-block" href="#!"><span className="me-2 text-body align-bottom" data-feather="pie-chart"></span>Dashboard</a></li>
<li className="nav-item"><a className="nav-link px-3 d-block" href="#!"> <span className="me-2 text-body align-bottom" data-feather="lock"></span>Posts & Activity</a></li>
<li className="nav-item"><a className="nav-link px-3 d-block" href="#!"> <span className="me-2 text-body align-bottom" data-feather="settings"></span>Settings & Privacy </a>
</li>
<li className="nav-item"><a className="nav-link px-3 d-block" href="#!"> <span className="me-2 text-body align-bottom" data-feather="help-circle"></span>Help Center</a></li>
<li className="nav-item"><a className="nav-link px-3 d-block" href="#!"> <span className="me-2 text-body align-bottom" data-feather="globe"></span>Language</a></li>
</ul>
</div>
<div className="card-footer p-0 border-top border-translucent">
<ul className="nav d-flex flex-column my-3">
<li className="nav-item"><a className="nav-link px-3 d-block" href="#!"> <span className="me-2 text-body align-bottom" data-feather="user-plus"></span>Add another account</a></li>
</ul>
<hr />
<div className="px-3"> <a className="btn btn-phoenix-secondary d-flex flex-center w-100" href="#!"> <span className="me-2" data-feather="log-out"> </span>Sign out</a></div>
<div className="my-2 text-center fw-bold fs-10 text-body-quaternary"><a className="text-body-quaternary me-1" href="#!">Privacy policy</a>•<a className="text-body-quaternary mx-1" href="#!">Terms</a>•<a className="text-body-quaternary ms-1" href="#!">Cookies</a></div>
</div>
</div>
</div>
</li>
</ul>
</nav>

<nav className="navbar navbar-top navbar-slim justify-content-between fixed-top navbar-expand-lg" id="navbarTopSlim" style={{display: "none"}}>
<div className="navbar-logo">
<button className="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTopCollapse" aria-controls="navbarTopCollapse" aria-expanded="false" aria-label="Toggle Navigation"><span className="navbar-toggle-icon"><span className="toggle-line"></span></span></button>
<a className="navbar-brand navbar-brand" href="/">Caliver Rossil <span className="text-body-highlight d-none d-sm-inline">slim</span></a>
</div>
<ul className="navbar-nav navbar-nav-icons flex-row">
<li className="nav-item">
<div className="theme-control-toggle fa-ion-wait pe-2 theme-control-toggle-slim"><input className="form-check-input ms-0 theme-control-toggle-input" id="themeControlToggle" type="checkbox" data-theme-control="phoenixTheme" value="dark" /><label className="mb-0 theme-control-toggle-label theme-control-toggle-light" htmlFor="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch theme"><span className="d-none d-sm-flex flex-center" style={{height: "16px", width: "16px"}}><span className="me-1 icon" data-feather="moon"></span></span><span className="fs-9 fw-bold">Dark</span></label><label className="mb-0 theme-control-toggle-label theme-control-toggle-dark" htmlFor="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch theme"><span className="d-none d-sm-flex flex-center" style={{height: "16px", width: "16px"}}><span className="me-1 icon" data-feather="sun"></span></span><span className="fs-9 fw-bold">Light</span></label></div>
</li>
<li className="nav-item"> <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#searchBoxModal"><span className="d-inline-block" style={{height: "12px", width: "12px"}}><span data-feather="search" style={{height: "12px", width: "12px"}}></span></span></a></li>
<li className="nav-item dropdown">
<a className="nav-link" id="navbarDropdownNotification" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="d-inline-block" style={{height: "12px", width: "12px"}}><span data-feather="bell" style={{height: "12px", width: "12px"}}></span></span></a>
<div className="dropdown-menu dropdown-menu-end notification-dropdown-menu py-0 shadow border navbar-dropdown-caret" id="navbarDropdownNotfication" aria-labelledby="navbarDropdownNotfication">
<div className="card position-relative border-0">
<div className="card-header p-2">
<div className="d-flex justify-content-between">
<h5 className="text-body-emphasis mb-0">Notifications</h5><button className="btn btn-link p-0 fs-9 fw-normal" type="button">Mark all as read</button>
</div>
</div>
<div className="card-body p-0">
<div className="scrollbar-overlay" style={{height: "27rem"}}>
<div className="px-2 px-sm-3 py-3 notification-card position-relative read border-bottom">
<div className="d-flex align-items-center justify-content-between position-relative">
<div className="d-flex">
<div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="/site/assets/img/team/40x40/30.webp" alt="" /></div>
<div className="flex-1 me-sm-3">
<h4 className="fs-9 text-body-emphasis">Jessie Samson</h4>
<p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className="me-1 fs-10">💬</span>Mentioned you in a comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">10m</span></p>
<p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:41 AM </span>August 7,2021</p>
</div>
</div>
<div className="dropdown notification-dropdown"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
<div className="dropdown-menu py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
</div>
</div>
</div>
<div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
<div className="d-flex align-items-center justify-content-between position-relative">
<div className="d-flex">
<div className="avatar avatar-m status-online me-3">
<div className="avatar-name rounded-circle"><span>J</span></div>
</div>
<div className="flex-1 me-sm-3">
<h4 className="fs-9 text-body-emphasis">Jane Foster</h4>
<p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className="me-1 fs-10">📅</span>Created an event.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">20m</span></p>
<p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:20 AM </span>August 7,2021</p>
</div>
</div>
<div className="dropdown notification-dropdown"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
<div className="dropdown-menu py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
</div>
</div>
</div>
<div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
<div className="d-flex align-items-center justify-content-between position-relative">
<div className="d-flex">
<div className="avatar avatar-m status-online me-3"><img className="rounded-circle avatar-placeholder" src="/site/assets/img/team/40x40/avatar.webp" alt="" /></div>
<div className="flex-1 me-sm-3">
<h4 className="fs-9 text-body-emphasis">Jessie Samson</h4>
<p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className="me-1 fs-10">👍</span>Liked your comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">1h</span></p>
<p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">9:30 AM </span>August 7,2021</p>
</div>
</div>
<div className="dropdown notification-dropdown"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
<div className="dropdown-menu py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
</div>
</div>
</div>
<div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
<div className="d-flex align-items-center justify-content-between position-relative">
<div className="d-flex">
<div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="/site/assets/img/team/40x40/57.webp" alt="" /></div>
<div className="flex-1 me-sm-3">
<h4 className="fs-9 text-body-emphasis">Kiera Anderson</h4>
<p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className="me-1 fs-10">💬</span>Mentioned you in a comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
<p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">9:11 AM </span>August 7,2021</p>
</div>
</div>
<div className="dropdown notification-dropdown"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
<div className="dropdown-menu py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
</div>
</div>
</div>
<div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
<div className="d-flex align-items-center justify-content-between position-relative">
<div className="d-flex">
<div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="/site/assets/img/team/40x40/59.webp" alt="" /></div>
<div className="flex-1 me-sm-3">
<h4 className="fs-9 text-body-emphasis">Herman Carter</h4>
<p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className="me-1 fs-10">👤</span>Tagged you in a comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
<p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:58 PM </span>August 7,2021</p>
</div>
</div>
<div className="dropdown notification-dropdown"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
<div className="dropdown-menu py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
</div>
</div>
</div>
<div className="px-2 px-sm-3 py-3 notification-card position-relative read">
<div className="d-flex align-items-center justify-content-between position-relative">
<div className="d-flex">
<div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="/site/assets/img/team/40x40/58.webp" alt="" /></div>
<div className="flex-1 me-sm-3">
<h4 className="fs-9 text-body-emphasis">Benjamin Button</h4>
<p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className="me-1 fs-10">👍</span>Liked your comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
<p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:18 AM </span>August 7,2021</p>
</div>
</div>
<div className="dropdown notification-dropdown"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
<div className="dropdown-menu py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
</div>
</div>
</div>
</div>
</div>
<div className="card-footer p-0 border-top border-translucent border-0">
<div className="my-2 text-center fw-bold fs-10 text-body-tertiary text-opactity-85"><a className="fw-bolder" href="/pages/notifications">Notification history</a></div>
</div>
</div>
</div>
</li>
<li className="nav-item dropdown">
<a className="nav-link" id="navbarDropdownNindeDots" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" data-bs-auto-close="outside" aria-expanded="false"><svg width="10" height="10" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="2" cy="2" r="2" fill="currentColor"></circle>
<circle cx="2" cy="8" r="2" fill="currentColor"></circle>
<circle cx="2" cy="14" r="2" fill="currentColor"></circle>
<circle cx="8" cy="8" r="2" fill="currentColor"></circle>
<circle cx="8" cy="14" r="2" fill="currentColor"></circle>
<circle cx="14" cy="8" r="2" fill="currentColor"></circle>
<circle cx="14" cy="14" r="2" fill="currentColor"></circle>
<circle cx="8" cy="2" r="2" fill="currentColor"></circle>
<circle cx="14" cy="2" r="2" fill="currentColor"></circle>
</svg></a>
<div className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-nine-dots shadow border" aria-labelledby="navbarDropdownNindeDots">
<div className="card bg-body-emphasis position-relative border-0">
<div className="card-body pt-3 px-3 pb-0 overflow-auto scrollbar" style={{height: "20rem"}}>
<div className="row text-center align-items-center gx-0 gy-0">
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/behance.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Behance</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/google-cloud.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Cloud</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/slack.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Slack</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/gitlab.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Gitlab</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/bitbucket.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">BitBucket</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/google-drive.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Drive</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/trello.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Trello</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/figma.webp" alt="" width="20" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Figma</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/twitter.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Twitter</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/pinterest.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Pinterest</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/ln.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Linkedin</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/google-maps.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Maps</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/google-photos.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Photos</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/spotify.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Spotify</p>
</a></div>
</div>
</div>
</div>
</div>
</li>
<li className="nav-item dropdown"><a className="nav-link lh-1 pe-0 white-space-nowrap" id="navbarDropdownUser" href="#!" role="button" data-bs-toggle="dropdown" aria-haspopup="true" data-bs-auto-close="outside" aria-expanded="false">Olivia <span className="d-inline-block" style={{height: "10.2px", width: "10.2px"}}><span className="fa-solid fa-chevron-down fs-10"></span></span></a>
<div className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-profile shadow border" aria-labelledby="navbarDropdownUser">
<div className="card position-relative border-0">
<div className="card-body p-0">
<div className="text-center pt-4 pb-3">
<div className="avatar avatar-xl">
<img className="rounded-circle" src="/site/assets/img/team/72x72/57.webp" alt="" />
</div>
<h6 className="mt-2 text-body-emphasis">Jerry Seinfield</h6>
</div>
<div className="mb-3 mx-3"><input className="form-control form-control-sm" id="statusUpdateInput" type="text" placeholder="Update your status" /></div>
</div>
<div className="overflow-auto scrollbar" style={{height: "10rem"}}>
<ul className="nav d-flex flex-column mb-2 pb-1">
<li className="nav-item"><a className="nav-link px-3 d-block" href="#!"> <span className="me-2 text-body align-bottom" data-feather="user"></span><span>Profile</span></a></li>
<li className="nav-item"><a className="nav-link px-3 d-block" href="#!"><span className="me-2 text-body align-bottom" data-feather="pie-chart"></span>Dashboard</a></li>
<li className="nav-item"><a className="nav-link px-3 d-block" href="#!"> <span className="me-2 text-body align-bottom" data-feather="lock"></span>Posts & Activity</a></li>
<li className="nav-item"><a className="nav-link px-3 d-block" href="#!"> <span className="me-2 text-body align-bottom" data-feather="settings"></span>Settings & Privacy </a>
</li>
<li className="nav-item"><a className="nav-link px-3 d-block" href="#!"> <span className="me-2 text-body align-bottom" data-feather="help-circle"></span>Help Center</a></li>
<li className="nav-item"><a className="nav-link px-3 d-block" href="#!"> <span className="me-2 text-body align-bottom" data-feather="globe"></span>Language</a></li>
</ul>
</div>
<div className="card-footer p-0 border-top border-translucent">
<ul className="nav d-flex flex-column my-3">
<li className="nav-item"><a className="nav-link px-3 d-block" href="#!"> <span className="me-2 text-body align-bottom" data-feather="user-plus"></span>Add another account</a></li>
</ul>
<hr />
<div className="px-3"> <a className="btn btn-phoenix-secondary d-flex flex-center w-100" href="#!"> <span className="me-2" data-feather="log-out"> </span>Sign out</a></div>
<div className="my-2 text-center fw-bold fs-10 text-body-quaternary"><a className="text-body-quaternary me-1" href="#!">Privacy policy</a>•<a className="text-body-quaternary mx-1" href="#!">Terms</a>•<a className="text-body-quaternary ms-1" href="#!">Cookies</a></div>
</div>
</div>
</div>
</li>
</ul>
</nav>

<nav className="navbar navbar-top fixed-top navbar-expand-lg" id="navbarCombo" data-navbar-top="combo" data-move-target="#navbarVerticalNav" style={{display: "none"}}>
<div className="navbar-logo">
<button className="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalCollapse" aria-controls="navbarVerticalCollapse" aria-expanded="false" aria-label="Toggle Navigation"><span className="navbar-toggle-icon"><span className="toggle-line"></span></span></button>
<a className="navbar-brand me-1 me-sm-3" href="/">
<div className="d-flex align-items-center">
<div className="d-flex align-items-center"><img src="/site/assets/img/icons/logo.png" alt="phoenix" width="27" />
<h5 className="logo-text ms-2 d-none d-sm-block">Caliver Rossil</h5>
</div>
</div>
</a>
</div>
<ul className="navbar-nav navbar-nav-icons flex-row">
<li className="nav-item">
<div className="theme-control-toggle feather-icon-wait px-2"><input className="form-check-input ms-0 theme-control-toggle-input" type="checkbox" data-theme-control="phoenixTheme" value="dark" id="themeControlToggle" /><label className="mb-0 theme-control-toggle-label theme-control-toggle-light" htmlFor="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Switch theme" style={{height: "32px", width: "32px"}}><span className="icon" data-feather="moon"></span></label><label className="mb-0 theme-control-toggle-label theme-control-toggle-dark" htmlFor="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Switch theme" style={{height: "32px", width: "32px"}}><span className="icon" data-feather="sun"></span></label></div>
</li>
<li className="nav-item"><a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#searchBoxModal"><span className="d-block" style={{height: "20px", width: "20px"}}><span data-feather="search" style={{height: "19px", width: "19px", marginBottom: "2px"}}></span></span></a></li>
<li className="nav-item dropdown">
<a className="nav-link" href="#" style={{minWidth: "2.25rem"}} role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-auto-close="outside"><span className="d-block" style={{height: "20px", width: "20px"}}><span data-feather="bell" style={{height: "20px", width: "20px"}}></span></span></a>
<div className="dropdown-menu dropdown-menu-end notification-dropdown-menu py-0 shadow border navbar-dropdown-caret" id="navbarDropdownNotfication" aria-labelledby="navbarDropdownNotfication">
<div className="card position-relative border-0">
<div className="card-header p-2">
<div className="d-flex justify-content-between">
<h5 className="text-body-emphasis mb-0">Notifications</h5><button className="btn btn-link p-0 fs-9 fw-normal" type="button">Mark all as read</button>
</div>
</div>
<div className="card-body p-0">
<div className="scrollbar-overlay" style={{height: "27rem"}}>
<div className="px-2 px-sm-3 py-3 notification-card position-relative read border-bottom">
<div className="d-flex align-items-center justify-content-between position-relative">
<div className="d-flex">
<div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="/site/assets/img/team/40x40/30.webp" alt="" /></div>
<div className="flex-1 me-sm-3">
<h4 className="fs-9 text-body-emphasis">Jessie Samson</h4>
<p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className="me-1 fs-10">💬</span>Mentioned you in a comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">10m</span></p>
<p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:41 AM </span>August 7,2021</p>
</div>
</div>
<div className="dropdown notification-dropdown"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
<div className="dropdown-menu py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
</div>
</div>
</div>
<div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
<div className="d-flex align-items-center justify-content-between position-relative">
<div className="d-flex">
<div className="avatar avatar-m status-online me-3">
<div className="avatar-name rounded-circle"><span>J</span></div>
</div>
<div className="flex-1 me-sm-3">
<h4 className="fs-9 text-body-emphasis">Jane Foster</h4>
<p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className="me-1 fs-10">📅</span>Created an event.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">20m</span></p>
<p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:20 AM </span>August 7,2021</p>
</div>
</div>
<div className="dropdown notification-dropdown"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
<div className="dropdown-menu py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
</div>
</div>
</div>
<div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
<div className="d-flex align-items-center justify-content-between position-relative">
<div className="d-flex">
<div className="avatar avatar-m status-online me-3"><img className="rounded-circle avatar-placeholder" src="/site/assets/img/team/40x40/avatar.webp" alt="" /></div>
<div className="flex-1 me-sm-3">
<h4 className="fs-9 text-body-emphasis">Jessie Samson</h4>
<p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className="me-1 fs-10">👍</span>Liked your comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">1h</span></p>
<p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">9:30 AM </span>August 7,2021</p>
</div>
</div>
<div className="dropdown notification-dropdown"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
<div className="dropdown-menu py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
</div>
</div>
</div>
<div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
<div className="d-flex align-items-center justify-content-between position-relative">
<div className="d-flex">
<div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="/site/assets/img/team/40x40/57.webp" alt="" /></div>
<div className="flex-1 me-sm-3">
<h4 className="fs-9 text-body-emphasis">Kiera Anderson</h4>
<p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className="me-1 fs-10">💬</span>Mentioned you in a comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
<p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">9:11 AM </span>August 7,2021</p>
</div>
</div>
<div className="dropdown notification-dropdown"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
<div className="dropdown-menu py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
</div>
</div>
</div>
<div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
<div className="d-flex align-items-center justify-content-between position-relative">
<div className="d-flex">
<div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="/site/assets/img/team/40x40/59.webp" alt="" /></div>
<div className="flex-1 me-sm-3">
<h4 className="fs-9 text-body-emphasis">Herman Carter</h4>
<p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className="me-1 fs-10">👤</span>Tagged you in a comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
<p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:58 PM </span>August 7,2021</p>
</div>
</div>
<div className="dropdown notification-dropdown"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
<div className="dropdown-menu py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
</div>
</div>
</div>
<div className="px-2 px-sm-3 py-3 notification-card position-relative read">
<div className="d-flex align-items-center justify-content-between position-relative">
<div className="d-flex">
<div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="/site/assets/img/team/40x40/58.webp" alt="" /></div>
<div className="flex-1 me-sm-3">
<h4 className="fs-9 text-body-emphasis">Benjamin Button</h4>
<p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className="me-1 fs-10">👍</span>Liked your comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
<p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:18 AM </span>August 7,2021</p>
</div>
</div>
<div className="dropdown notification-dropdown"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
<div className="dropdown-menu py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
</div>
</div>
</div>
</div>
</div>
<div className="card-footer p-0 border-top border-translucent border-0">
<div className="my-2 text-center fw-bold fs-10 text-body-tertiary text-opactity-85"><a className="fw-bolder" href="/pages/notifications">Notification history</a></div>
</div>
</div>
</div>
</li>
<li className="nav-item dropdown">
<a className="nav-link" id="navbarDropdownNindeDots" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" data-bs-auto-close="outside" aria-expanded="false"><svg width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="2" cy="2" r="2" fill="currentColor"></circle>
<circle cx="2" cy="8" r="2" fill="currentColor"></circle>
<circle cx="2" cy="14" r="2" fill="currentColor"></circle>
<circle cx="8" cy="8" r="2" fill="currentColor"></circle>
<circle cx="8" cy="14" r="2" fill="currentColor"></circle>
<circle cx="14" cy="8" r="2" fill="currentColor"></circle>
<circle cx="14" cy="14" r="2" fill="currentColor"></circle>
<circle cx="8" cy="2" r="2" fill="currentColor"></circle>
<circle cx="14" cy="2" r="2" fill="currentColor"></circle>
</svg></a>
<div className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-nine-dots shadow border" aria-labelledby="navbarDropdownNindeDots">
<div className="card bg-body-emphasis position-relative border-0">
<div className="card-body pt-3 px-3 pb-0 overflow-auto scrollbar" style={{height: "20rem"}}>
<div className="row text-center align-items-center gx-0 gy-0">
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/behance.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Behance</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/google-cloud.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Cloud</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/slack.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Slack</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/gitlab.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Gitlab</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/bitbucket.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">BitBucket</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/google-drive.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Drive</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/trello.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Trello</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/figma.webp" alt="" width="20" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Figma</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/twitter.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Twitter</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/pinterest.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Pinterest</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/ln.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Linkedin</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/google-maps.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Maps</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/google-photos.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Photos</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/spotify.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Spotify</p>
</a></div>
</div>
</div>
</div>
</div>
</li>
<li className="nav-item dropdown"><a className="nav-link lh-1 pe-0" id="navbarDropdownUser" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">
<div className="avatar avatar-l">
<img className="rounded-circle" src="/site/assets/img/team/40x40/57.webp" alt="" />
</div>
</a>
<div className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-profile shadow border" aria-labelledby="navbarDropdownUser">
<div className="card position-relative border-0">
<div className="card-body p-0">
<div className="text-center pt-4 pb-3">
<div className="avatar avatar-xl">
<img className="rounded-circle" src="/site/assets/img/team/72x72/57.webp" alt="" />
</div>
<h6 className="mt-2 text-body-emphasis">Jerry Seinfield</h6>
</div>
<div className="mb-3 mx-3"><input className="form-control form-control-sm" id="statusUpdateInput" type="text" placeholder="Update your status" /></div>
</div>
<div className="overflow-auto scrollbar" style={{height: "10rem"}}>
<ul className="nav d-flex flex-column mb-2 pb-1">
<li className="nav-item"><a className="nav-link px-3 d-block" href="#!"> <span className="me-2 text-body align-bottom" data-feather="user"></span><span>Profile</span></a></li>
<li className="nav-item"><a className="nav-link px-3 d-block" href="#!"><span className="me-2 text-body align-bottom" data-feather="pie-chart"></span>Dashboard</a></li>
<li className="nav-item"><a className="nav-link px-3 d-block" href="#!"> <span className="me-2 text-body align-bottom" data-feather="lock"></span>Posts & Activity</a></li>
<li className="nav-item"><a className="nav-link px-3 d-block" href="#!"> <span className="me-2 text-body align-bottom" data-feather="settings"></span>Settings & Privacy </a>
</li>
<li className="nav-item"><a className="nav-link px-3 d-block" href="#!"> <span className="me-2 text-body align-bottom" data-feather="help-circle"></span>Help Center</a></li>
<li className="nav-item"><a className="nav-link px-3 d-block" href="#!"> <span className="me-2 text-body align-bottom" data-feather="globe"></span>Language</a></li>
</ul>
</div>
<div className="card-footer p-0 border-top border-translucent">
<ul className="nav d-flex flex-column my-3">
<li className="nav-item"><a className="nav-link px-3 d-block" href="#!"> <span className="me-2 text-body align-bottom" data-feather="user-plus"></span>Add another account</a></li>
</ul>
<hr />
<div className="px-3"> <a className="btn btn-phoenix-secondary d-flex flex-center w-100" href="#!"> <span className="me-2" data-feather="log-out"> </span>Sign out</a></div>
<div className="my-2 text-center fw-bold fs-10 text-body-quaternary"><a className="text-body-quaternary me-1" href="#!">Privacy policy</a>•<a className="text-body-quaternary mx-1" href="#!">Terms</a>•<a className="text-body-quaternary ms-1" href="#!">Cookies</a></div>
</div>
</div>
</div>
</li>
</ul>
</nav>

<nav className="navbar navbar-top fixed-top navbar-slim justify-content-between navbar-expand-lg" id="navbarComboSlim" data-navbar-top="combo" data-move-target="#navbarVerticalNav" style={{display: "none"}}>
<div className="navbar-logo">
<button className="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalCollapse" aria-controls="navbarVerticalCollapse" aria-expanded="false" aria-label="Toggle Navigation"><span className="navbar-toggle-icon"><span className="toggle-line"></span></span></button>
<a className="navbar-brand navbar-brand" href="/">Caliver Rossil <span className="text-body-highlight d-none d-sm-inline">slim</span></a>
</div>
<ul className="navbar-nav navbar-nav-icons flex-row">
<li className="nav-item">
<div className="theme-control-toggle fa-ion-wait pe-2 theme-control-toggle-slim"><input className="form-check-input ms-0 theme-control-toggle-input" id="themeControlToggle" type="checkbox" data-theme-control="phoenixTheme" value="dark" /><label className="mb-0 theme-control-toggle-label theme-control-toggle-light" htmlFor="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch theme"><span className="d-none d-sm-flex flex-center" style={{height: "16px", width: "16px"}}><span className="me-1 icon" data-feather="moon"></span></span><span className="fs-9 fw-bold">Dark</span></label><label className="mb-0 theme-control-toggle-label theme-control-toggle-dark" htmlFor="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch theme"><span className="d-none d-sm-flex flex-center" style={{height: "16px", width: "16px"}}><span className="me-1 icon" data-feather="sun"></span></span><span className="fs-9 fw-bold">Light</span></label></div>
</li>
<li className="nav-item"> <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#searchBoxModal"><span className="d-inline-block" style={{height: "12px", width: "12px"}}><span data-feather="search" style={{height: "12px", width: "12px"}}></span></span></a></li>
<li className="nav-item dropdown">
<a className="nav-link" id="navbarDropdownNotification" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="d-inline-block" style={{height: "12px", width: "12px"}}><span data-feather="bell" style={{height: "12px", width: "12px"}}></span></span></a>
<div className="dropdown-menu dropdown-menu-end notification-dropdown-menu py-0 shadow border navbar-dropdown-caret" id="navbarDropdownNotfication" aria-labelledby="navbarDropdownNotfication">
<div className="card position-relative border-0">
<div className="card-header p-2">
<div className="d-flex justify-content-between">
<h5 className="text-body-emphasis mb-0">Notifications</h5><button className="btn btn-link p-0 fs-9 fw-normal" type="button">Mark all as read</button>
</div>
</div>
<div className="card-body p-0">
<div className="scrollbar-overlay" style={{height: "27rem"}}>
<div className="px-2 px-sm-3 py-3 notification-card position-relative read border-bottom">
<div className="d-flex align-items-center justify-content-between position-relative">
<div className="d-flex">
<div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="/site/assets/img/team/40x40/30.webp" alt="" /></div>
<div className="flex-1 me-sm-3">
<h4 className="fs-9 text-body-emphasis">Jessie Samson</h4>
<p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className="me-1 fs-10">💬</span>Mentioned you in a comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">10m</span></p>
<p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:41 AM </span>August 7,2021</p>
</div>
</div>
<div className="dropdown notification-dropdown"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
<div className="dropdown-menu py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
</div>
</div>
</div>
<div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
<div className="d-flex align-items-center justify-content-between position-relative">
<div className="d-flex">
<div className="avatar avatar-m status-online me-3">
<div className="avatar-name rounded-circle"><span>J</span></div>
</div>
<div className="flex-1 me-sm-3">
<h4 className="fs-9 text-body-emphasis">Jane Foster</h4>
<p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className="me-1 fs-10">📅</span>Created an event.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">20m</span></p>
<p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:20 AM </span>August 7,2021</p>
</div>
</div>
<div className="dropdown notification-dropdown"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
<div className="dropdown-menu py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
</div>
</div>
</div>
<div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
<div className="d-flex align-items-center justify-content-between position-relative">
<div className="d-flex">
<div className="avatar avatar-m status-online me-3"><img className="rounded-circle avatar-placeholder" src="/site/assets/img/team/40x40/avatar.webp" alt="" /></div>
<div className="flex-1 me-sm-3">
<h4 className="fs-9 text-body-emphasis">Jessie Samson</h4>
<p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className="me-1 fs-10">👍</span>Liked your comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">1h</span></p>
<p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">9:30 AM </span>August 7,2021</p>
</div>
</div>
<div className="dropdown notification-dropdown"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
<div className="dropdown-menu py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
</div>
</div>
</div>
<div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
<div className="d-flex align-items-center justify-content-between position-relative">
<div className="d-flex">
<div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="/site/assets/img/team/40x40/57.webp" alt="" /></div>
<div className="flex-1 me-sm-3">
<h4 className="fs-9 text-body-emphasis">Kiera Anderson</h4>
<p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className="me-1 fs-10">💬</span>Mentioned you in a comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
<p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">9:11 AM </span>August 7,2021</p>
</div>
</div>
<div className="dropdown notification-dropdown"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
<div className="dropdown-menu py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
</div>
</div>
</div>
<div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
<div className="d-flex align-items-center justify-content-between position-relative">
<div className="d-flex">
<div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="/site/assets/img/team/40x40/59.webp" alt="" /></div>
<div className="flex-1 me-sm-3">
<h4 className="fs-9 text-body-emphasis">Herman Carter</h4>
<p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className="me-1 fs-10">👤</span>Tagged you in a comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
<p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:58 PM </span>August 7,2021</p>
</div>
</div>
<div className="dropdown notification-dropdown"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
<div className="dropdown-menu py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
</div>
</div>
</div>
<div className="px-2 px-sm-3 py-3 notification-card position-relative read">
<div className="d-flex align-items-center justify-content-between position-relative">
<div className="d-flex">
<div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="/site/assets/img/team/40x40/58.webp" alt="" /></div>
<div className="flex-1 me-sm-3">
<h4 className="fs-9 text-body-emphasis">Benjamin Button</h4>
<p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className="me-1 fs-10">👍</span>Liked your comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
<p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:18 AM </span>August 7,2021</p>
</div>
</div>
<div className="dropdown notification-dropdown"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
<div className="dropdown-menu py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
</div>
</div>
</div>
</div>
</div>
<div className="card-footer p-0 border-top border-translucent border-0">
<div className="my-2 text-center fw-bold fs-10 text-body-tertiary text-opactity-85"><a className="fw-bolder" href="/pages/notifications">Notification history</a></div>
</div>
</div>
</div>
</li>
<li className="nav-item dropdown">
<a className="nav-link" id="navbarDropdownNindeDots" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" data-bs-auto-close="outside" aria-expanded="false"><svg width="10" height="10" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="2" cy="2" r="2" fill="currentColor"></circle>
<circle cx="2" cy="8" r="2" fill="currentColor"></circle>
<circle cx="2" cy="14" r="2" fill="currentColor"></circle>
<circle cx="8" cy="8" r="2" fill="currentColor"></circle>
<circle cx="8" cy="14" r="2" fill="currentColor"></circle>
<circle cx="14" cy="8" r="2" fill="currentColor"></circle>
<circle cx="14" cy="14" r="2" fill="currentColor"></circle>
<circle cx="8" cy="2" r="2" fill="currentColor"></circle>
<circle cx="14" cy="2" r="2" fill="currentColor"></circle>
</svg></a>
<div className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-nine-dots shadow border" aria-labelledby="navbarDropdownNindeDots">
<div className="card bg-body-emphasis position-relative border-0">
<div className="card-body pt-3 px-3 pb-0 overflow-auto scrollbar" style={{height: "20rem"}}>
<div className="row text-center align-items-center gx-0 gy-0">
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/behance.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Behance</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/google-cloud.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Cloud</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/slack.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Slack</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/gitlab.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Gitlab</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/bitbucket.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">BitBucket</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/google-drive.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Drive</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/trello.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Trello</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/figma.webp" alt="" width="20" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Figma</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/twitter.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Twitter</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/pinterest.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Pinterest</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/ln.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Linkedin</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/google-maps.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Maps</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/google-photos.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Photos</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/spotify.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Spotify</p>
</a></div>
</div>
</div>
</div>
</div>
</li>
<li className="nav-item dropdown"><a className="nav-link lh-1 pe-0 white-space-nowrap" id="navbarDropdownUser" href="#!" role="button" data-bs-toggle="dropdown" aria-haspopup="true" data-bs-auto-close="outside" aria-expanded="false">Olivia <span className="d-inline-block" style={{height: "10.2px", width: "10.2px"}}><span className="fa-solid fa-chevron-down fs-10"></span></span></a>
<div className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-profile shadow border" aria-labelledby="navbarDropdownUser">
<div className="card position-relative border-0">
<div className="card-body p-0">
<div className="text-center pt-4 pb-3">
<div className="avatar avatar-xl">
<img className="rounded-circle" src="/site/assets/img/team/72x72/57.webp" alt="" />
</div>
<h6 className="mt-2 text-body-emphasis">Jerry Seinfield</h6>
</div>
<div className="mb-3 mx-3"><input className="form-control form-control-sm" id="statusUpdateInput" type="text" placeholder="Update your status" /></div>
</div>
<div className="overflow-auto scrollbar" style={{height: "10rem"}}>
<ul className="nav d-flex flex-column mb-2 pb-1">
<li className="nav-item"><a className="nav-link px-3 d-block" href="#!"> <span className="me-2 text-body align-bottom" data-feather="user"></span><span>Profile</span></a></li>
<li className="nav-item"><a className="nav-link px-3 d-block" href="#!"><span className="me-2 text-body align-bottom" data-feather="pie-chart"></span>Dashboard</a></li>
<li className="nav-item"><a className="nav-link px-3 d-block" href="#!"> <span className="me-2 text-body align-bottom" data-feather="lock"></span>Posts & Activity</a></li>
<li className="nav-item"><a className="nav-link px-3 d-block" href="#!"> <span className="me-2 text-body align-bottom" data-feather="settings"></span>Settings & Privacy </a>
</li>
<li className="nav-item"><a className="nav-link px-3 d-block" href="#!"> <span className="me-2 text-body align-bottom" data-feather="help-circle"></span>Help Center</a></li>
<li className="nav-item"><a className="nav-link px-3 d-block" href="#!"> <span className="me-2 text-body align-bottom" data-feather="globe"></span>Language</a></li>
</ul>
</div>
<div className="card-footer p-0 border-top border-translucent">
<ul className="nav d-flex flex-column my-3">
<li className="nav-item"><a className="nav-link px-3 d-block" href="#!"> <span className="me-2 text-body align-bottom" data-feather="user-plus"></span>Add another account</a></li>
</ul>
<hr />
<div className="px-3"> <a className="btn btn-phoenix-secondary d-flex flex-center w-100" href="#!"> <span className="me-2" data-feather="log-out"> </span>Sign out</a></div>
<div className="my-2 text-center fw-bold fs-10 text-body-quaternary"><a className="text-body-quaternary me-1" href="#!">Privacy policy</a>•<a className="text-body-quaternary mx-1" href="#!">Terms</a>•<a className="text-body-quaternary ms-1" href="#!">Cookies</a></div>
</div>
</div>
</div>
</li>
</ul>
</nav>

<nav className="navbar navbar-top fixed-top navbar-expand-lg" id="dualNav" style={{display: "none"}}>
<div className="w-100">
<div className="d-flex flex-between-center dual-nav-first-layer">
<div className="navbar-logo">
<button className="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTopCollapse" aria-controls="navbarTopCollapse" aria-expanded="false" aria-label="Toggle Navigation"><span className="navbar-toggle-icon"><span className="toggle-line"></span></span></button>
<a className="navbar-brand me-1 me-sm-3" href="/">
<div className="d-flex align-items-center">
<div className="d-flex align-items-center"><img src="/site/assets/img/icons/logo.png" alt="phoenix" width="27" />
<h5 className="logo-text ms-2 d-none d-sm-block">phoenix</h5>
</div>
</div>
</a>
</div>
<div className="search-box navbar-top-search-box d-none d-lg-block" data-list="&#123;&quot;valueNames&quot;:[&quot;title&quot;]&#125;" style={{width: "25rem"}}>
<form className="position-relative" data-bs-toggle="search" data-bs-display="static"><input className="form-control search-input fuzzy-search rounded-pill form-control-sm" type="search" placeholder="Search..." aria-label="Search" />
<span className="fas fa-search search-box-icon"></span>
</form>
<div className="btn-close position-absolute end-0 top-50 translate-middle cursor-pointer shadow-none" data-bs-dismiss="search"><button className="btn btn-link p-0" aria-label="Close"></button></div>
<div className="dropdown-menu border start-0 py-0 overflow-hidden w-100">
<div className="scrollbar-overlay" style={{maxHeight: "30rem"}}>
<div className="list pb-3">
<h6 className="dropdown-header text-body-highlight fs-10 py-2">24 <span className="text-body-quaternary">results</span></h6>
<hr className="my-0" />
<h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
                    Recently Searched </h6>
<div className="py-2"><a className="dropdown-item" href="/apps/e-commerce/landing/product-details">
<div className="d-flex align-items-center">
<div className="fw-normal text-body-highlight title"><span className="fa-solid fa-clock-rotate-left" data-fa-transform="shrink-2"></span> Store Macbook</div>
</div>
</a>
<a className="dropdown-item" href="/apps/e-commerce/landing/product-details">
<div className="d-flex align-items-center">
<div className="fw-normal text-body-highlight title"> <span className="fa-solid fa-clock-rotate-left" data-fa-transform="shrink-2"></span> MacBook Air - 13″</div>
</div>
</a>
</div>
<hr className="my-0" />
<h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
                    Products</h6>
<div className="py-2"><a className="dropdown-item py-2 d-flex align-items-center" href="/apps/e-commerce/landing/product-details">
<div className="file-thumbnail me-2"><img className="h-100 w-100 object-fit-cover rounded-3" src="/site/assets/img/products/60x60/3.png" alt="" /></div>
<div className="flex-1">
<h6 className="mb-0 text-body-highlight title">MacBook Air - 13″</h6>
<p className="fs-10 mb-0 d-flex text-body-tertiary"><span className="fw-medium text-body-tertiary text-opactity-85">8GB Memory - 1.6GHz - 128GB
                            Storage</span></p>
</div>
</a>
<a className="dropdown-item py-2 d-flex align-items-center" href="/apps/e-commerce/landing/product-details">
<div className="file-thumbnail me-2"><img className="img-fluid" src="/site/assets/img/products/60x60/3.png" alt="" /></div>
<div className="flex-1">
<h6 className="mb-0 text-body-highlight title">MacBook Pro - 13″</h6>
<p className="fs-10 mb-0 d-flex text-body-tertiary"><span className="fw-medium text-body-tertiary text-opactity-85">30 Sep at 12:30 PM</span></p>
</div>
</a>
</div>
<hr className="my-0" />
<h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">Quick
                    Links</h6>
<div className="py-2"><a className="dropdown-item" href="/apps/e-commerce/landing/product-details">
<div className="d-flex align-items-center">
<div className="fw-normal text-body-highlight title"><span className="fa-solid fa-link text-body" data-fa-transform="shrink-2"></span> Support MacBook House</div>
</div>
</a>
<a className="dropdown-item" href="/apps/e-commerce/landing/product-details">
<div className="d-flex align-items-center">
<div className="fw-normal text-body-highlight title"> <span className="fa-solid fa-link text-body" data-fa-transform="shrink-2"></span> Store MacBook″</div>
</div>
</a>
</div>
<hr className="my-0" />
<h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">Files
                  </h6>
<div className="py-2"><a className="dropdown-item" href="/apps/e-commerce/landing/product-details">
<div className="d-flex align-items-center">
<div className="fw-normal text-body-highlight title"><span className="fa-solid fa-file-zipper text-body" data-fa-transform="shrink-2"></span> Library MacBook folder.rar</div>
</div>
</a>
<a className="dropdown-item" href="/apps/e-commerce/landing/product-details">
<div className="d-flex align-items-center">
<div className="fw-normal text-body-highlight title"> <span className="fa-solid fa-file-lines text-body" data-fa-transform="shrink-2"></span> Feature MacBook extensions.txt</div>
</div>
</a>
<a className="dropdown-item" href="/apps/e-commerce/landing/product-details">
<div className="d-flex align-items-center">
<div className="fw-normal text-body-highlight title"> <span className="fa-solid fa-image text-body" data-fa-transform="shrink-2"></span> MacBook Pro_13.jpg</div>
</div>
</a>
</div>
<hr className="my-0" />
<h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
                    Members</h6>
<div className="py-2"><a className="dropdown-item py-2 d-flex align-items-center" href="/pages/members">
<div className="avatar avatar-l status-online me-2 text-body">
<img className="rounded-circle" src="/site/assets/img/team/40x40/10.webp" alt="" />
</div>
<div className="flex-1">
<h6 className="mb-0 text-body-highlight title">Carry Anna</h6>
<p className="fs-10 mb-0 d-flex text-body-tertiary">anna@technext.it</p>
</div>
</a>
<a className="dropdown-item py-2 d-flex align-items-center" href="/pages/members">
<div className="avatar avatar-l me-2 text-body">
<img className="rounded-circle" src="/site/assets/img/team/40x40/12.webp" alt="" />
</div>
<div className="flex-1">
<h6 className="mb-0 text-body-highlight title">John Smith</h6>
<p className="fs-10 mb-0 d-flex text-body-tertiary">smith@technext.it</p>
</div>
</a>
</div>
<hr className="my-0" />
<h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
                    Related Searches</h6>
<div className="py-2"><a className="dropdown-item" href="/apps/e-commerce/landing/product-details">
<div className="d-flex align-items-center">
<div className="fw-normal text-body-highlight title"><span className="fa-brands fa-firefox-browser text-body" data-fa-transform="shrink-2"></span> Search
                          in the Web MacBook</div>
</div>
</a>
<a className="dropdown-item" href="/apps/e-commerce/landing/product-details">
<div className="d-flex align-items-center">
<div className="fw-normal text-body-highlight title"> <span className="fa-brands fa-chrome text-body" data-fa-transform="shrink-2"></span> Store MacBook″</div>
</div>
</a>
</div>
</div>
<div className="text-center">
<p className="fallback fw-bold fs-7 d-none">No Result Found.</p>
</div>
</div>
</div>
</div>
<ul className="navbar-nav navbar-nav-icons flex-row">
<li className="nav-item">
<div className="theme-control-toggle feather-icon-wait px-2"><input className="form-check-input ms-0 theme-control-toggle-input" type="checkbox" data-theme-control="phoenixTheme" value="dark" id="themeControlToggle" /><label className="mb-0 theme-control-toggle-label theme-control-toggle-light" htmlFor="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Switch theme" style={{height: "32px", width: "32px"}}><span className="icon" data-feather="moon"></span></label><label className="mb-0 theme-control-toggle-label theme-control-toggle-dark" htmlFor="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Switch theme" style={{height: "32px", width: "32px"}}><span className="icon" data-feather="sun"></span></label></div>
</li>
<li className="nav-item dropdown">
<a className="nav-link" href="#" style={{minWidth: "2.25rem"}} role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-auto-close="outside"><span className="d-block" style={{height: "20px", width: "20px"}}><span data-feather="bell" style={{height: "20px", width: "20px"}}></span></span></a>
<div className="dropdown-menu dropdown-menu-end notification-dropdown-menu py-0 shadow border navbar-dropdown-caret" id="navbarDropdownNotfication" aria-labelledby="navbarDropdownNotfication">
<div className="card position-relative border-0">
<div className="card-header p-2">
<div className="d-flex justify-content-between">
<h5 className="text-body-emphasis mb-0">Notifications</h5><button className="btn btn-link p-0 fs-9 fw-normal" type="button">Mark all as read</button>
</div>
</div>
<div className="card-body p-0">
<div className="scrollbar-overlay" style={{height: "27rem"}}>
<div className="px-2 px-sm-3 py-3 notification-card position-relative read border-bottom">
<div className="d-flex align-items-center justify-content-between position-relative">
<div className="d-flex">
<div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="/site/assets/img/team/40x40/30.webp" alt="" /></div>
<div className="flex-1 me-sm-3">
<h4 className="fs-9 text-body-emphasis">Jessie Samson</h4>
<p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className="me-1 fs-10">💬</span>Mentioned you in a comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">10m</span></p>
<p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:41 AM </span>August 7,2021</p>
</div>
</div>
<div className="dropdown notification-dropdown"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
<div className="dropdown-menu py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
</div>
</div>
</div>
<div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
<div className="d-flex align-items-center justify-content-between position-relative">
<div className="d-flex">
<div className="avatar avatar-m status-online me-3">
<div className="avatar-name rounded-circle"><span>J</span></div>
</div>
<div className="flex-1 me-sm-3">
<h4 className="fs-9 text-body-emphasis">Jane Foster</h4>
<p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className="me-1 fs-10">📅</span>Created an event.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">20m</span></p>
<p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:20 AM </span>August 7,2021</p>
</div>
</div>
<div className="dropdown notification-dropdown"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
<div className="dropdown-menu py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
</div>
</div>
</div>
<div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
<div className="d-flex align-items-center justify-content-between position-relative">
<div className="d-flex">
<div className="avatar avatar-m status-online me-3"><img className="rounded-circle avatar-placeholder" src="/site/assets/img/team/40x40/avatar.webp" alt="" /></div>
<div className="flex-1 me-sm-3">
<h4 className="fs-9 text-body-emphasis">Jessie Samson</h4>
<p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className="me-1 fs-10">👍</span>Liked your comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">1h</span></p>
<p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">9:30 AM </span>August 7,2021</p>
</div>
</div>
<div className="dropdown notification-dropdown"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
<div className="dropdown-menu py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
</div>
</div>
</div>
<div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
<div className="d-flex align-items-center justify-content-between position-relative">
<div className="d-flex">
<div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="/site/assets/img/team/40x40/57.webp" alt="" /></div>
<div className="flex-1 me-sm-3">
<h4 className="fs-9 text-body-emphasis">Kiera Anderson</h4>
<p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className="me-1 fs-10">💬</span>Mentioned you in a comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
<p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">9:11 AM </span>August 7,2021</p>
</div>
</div>
<div className="dropdown notification-dropdown"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
<div className="dropdown-menu py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
</div>
</div>
</div>
<div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
<div className="d-flex align-items-center justify-content-between position-relative">
<div className="d-flex">
<div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="/site/assets/img/team/40x40/59.webp" alt="" /></div>
<div className="flex-1 me-sm-3">
<h4 className="fs-9 text-body-emphasis">Herman Carter</h4>
<p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className="me-1 fs-10">👤</span>Tagged you in a comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
<p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:58 PM </span>August 7,2021</p>
</div>
</div>
<div className="dropdown notification-dropdown"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
<div className="dropdown-menu py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
</div>
</div>
</div>
<div className="px-2 px-sm-3 py-3 notification-card position-relative read">
<div className="d-flex align-items-center justify-content-between position-relative">
<div className="d-flex">
<div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="/site/assets/img/team/40x40/58.webp" alt="" /></div>
<div className="flex-1 me-sm-3">
<h4 className="fs-9 text-body-emphasis">Benjamin Button</h4>
<p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className="me-1 fs-10">👍</span>Liked your comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
<p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:18 AM </span>August 7,2021</p>
</div>
</div>
<div className="dropdown notification-dropdown"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
<div className="dropdown-menu py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
</div>
</div>
</div>
</div>
</div>
<div className="card-footer p-0 border-top border-translucent border-0">
<div className="my-2 text-center fw-bold fs-10 text-body-tertiary text-opactity-85"><a className="fw-bolder" href="/pages/notifications">Notification history</a></div>
</div>
</div>
</div>
</li>
<li className="nav-item dropdown">
<a className="nav-link" id="navbarDropdownNindeDots" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" data-bs-auto-close="outside" aria-expanded="false"><svg width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="2" cy="2" r="2" fill="currentColor"></circle>
<circle cx="2" cy="8" r="2" fill="currentColor"></circle>
<circle cx="2" cy="14" r="2" fill="currentColor"></circle>
<circle cx="8" cy="8" r="2" fill="currentColor"></circle>
<circle cx="8" cy="14" r="2" fill="currentColor"></circle>
<circle cx="14" cy="8" r="2" fill="currentColor"></circle>
<circle cx="14" cy="14" r="2" fill="currentColor"></circle>
<circle cx="8" cy="2" r="2" fill="currentColor"></circle>
<circle cx="14" cy="2" r="2" fill="currentColor"></circle>
</svg></a>
<div className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-nine-dots shadow border" aria-labelledby="navbarDropdownNindeDots">
<div className="card bg-body-emphasis position-relative border-0">
<div className="card-body pt-3 px-3 pb-0 overflow-auto scrollbar" style={{height: "20rem"}}>
<div className="row text-center align-items-center gx-0 gy-0">
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/behance.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Behance</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/google-cloud.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Cloud</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/slack.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Slack</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/gitlab.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Gitlab</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/bitbucket.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">BitBucket</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/google-drive.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Drive</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/trello.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Trello</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/figma.webp" alt="" width="20" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Figma</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/twitter.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Twitter</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/pinterest.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Pinterest</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/ln.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Linkedin</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/google-maps.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Maps</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/google-photos.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Photos</p>
</a></div>
<div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="/site/assets/img/nav-icons/spotify.webp" alt="" width="30" />
<p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Spotify</p>
</a></div>
</div>
</div>
</div>
</div>
</li>
<li className="nav-item dropdown"><a className="nav-link lh-1 pe-0" id="navbarDropdownUser" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">
<div className="avatar avatar-l">
<img className="rounded-circle" src="/site/assets/img/team/40x40/57.webp" alt="" />
</div>
</a>
<div className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-profile shadow border" aria-labelledby="navbarDropdownUser">
<div className="card position-relative border-0">
<div className="card-body p-0">
<div className="text-center pt-4 pb-3">
<div className="avatar avatar-xl">
<img className="rounded-circle" src="/site/assets/img/team/72x72/57.webp" alt="" />
</div>
<h6 className="mt-2 text-body-emphasis">Jerry Seinfield</h6>
</div>
<div className="mb-3 mx-3"><input className="form-control form-control-sm" id="statusUpdateInput" type="text" placeholder="Update your status" /></div>
</div>
<div className="overflow-auto scrollbar" style={{height: "10rem"}}>
<ul className="nav d-flex flex-column mb-2 pb-1">
<li className="nav-item"><a className="nav-link px-3 d-block" href="#!"> <span className="me-2 text-body align-bottom" data-feather="user"></span><span>Profile</span></a></li>
<li className="nav-item"><a className="nav-link px-3 d-block" href="#!"><span className="me-2 text-body align-bottom" data-feather="pie-chart"></span>Dashboard</a></li>
<li className="nav-item"><a className="nav-link px-3 d-block" href="#!"> <span className="me-2 text-body align-bottom" data-feather="lock"></span>Posts & Activity</a></li>
<li className="nav-item"><a className="nav-link px-3 d-block" href="#!"> <span className="me-2 text-body align-bottom" data-feather="settings"></span>Settings & Privacy
                        </a></li>
<li className="nav-item"><a className="nav-link px-3 d-block" href="#!"> <span className="me-2 text-body align-bottom" data-feather="help-circle"></span>Help Center</a></li>
<li className="nav-item"><a className="nav-link px-3 d-block" href="#!"> <span className="me-2 text-body align-bottom" data-feather="globe"></span>Language</a></li>
</ul>
</div>
<div className="card-footer p-0 border-top border-translucent">
<ul className="nav d-flex flex-column my-3">
<li className="nav-item"><a className="nav-link px-3 d-block" href="#!"> <span className="me-2 text-body align-bottom" data-feather="user-plus"></span>Add another account</a>
</li>
</ul>
<hr />
<div className="px-3"> <a className="btn btn-phoenix-secondary d-flex flex-center w-100" href="#!"> <span className="me-2" data-feather="log-out"> </span>Sign out</a></div>
<div className="my-2 text-center fw-bold fs-10 text-body-quaternary"><a className="text-body-quaternary me-1" href="#!">Privacy policy</a>•<a className="text-body-quaternary mx-1" href="#!">Terms</a>•<a className="text-body-quaternary ms-1" href="#!">Cookies</a></div>
</div>
</div>
</div>
</li>
</ul>
</div>
</div>
</nav>
    </>
  );
}
