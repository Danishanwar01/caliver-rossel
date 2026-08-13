import DashboardNavbars from '../components/DashboardNavbars.jsx';
/* Auto-converted from the original HTML. Visual/markup structure intentionally preserved. */
export default function AppsEmailInboxPage() {
  return (
    <>




<main className="main" id="top">
<DashboardNavbars />










<div className="content pt-0">
<div className="email-container">
<div className="row gx-lg-6 gx-3 py-4 z-2 position-sticky bg-body email-header">
<div className="col-auto"><a className="btn btn-primary email-sidebar-width d-none d-lg-block" href="/apps/email/compose">Compose</a><button className="btn px-3 btn-phoenix-secondary text-body-tertiary d-lg-none" data-phoenix-toggle="offcanvas" data-phoenix-target="#emailSidebarColumn"><span className="fa-solid fa-bars"></span></button></div>
<div className="col-auto d-lg-none"><a className="btn btn-primary px-3 px-sm-4" href="/apps/email/compose"> <span className="d-none d-sm-inline-block">Compose</span><span className="d-sm-none fas fa-plus"></span></a></div>
<div className="col-auto flex-1">
<div className="search-box w-100">
<form className="position-relative"><input className="form-control search-input search" type="search" placeholder="Search ..." aria-label="Search" />
<span className="fas fa-search search-box-icon"></span>
</form>
</div>
</div>
</div>
<div className="row g-lg-6 mb-8">
<div className="col-lg-auto">
<div className="email-sidebar email-sidebar-width bg-body phoenix-offcanvas phoenix-offcanvas-fixed" id="emailSidebarColumn" data-breakpoint="lg">
<div className="email-content scrollbar-overlay">
<div className="d-flex justify-content-between align-items-center">
<p className="text-uppercase fs-10 text-body-tertiary text-opacity-85 mb-2 fw-bold">mailbox</p><button className="btn d-lg-none p-0 mb-2" data-phoenix-dismiss="offcanvas"><span className="uil uil-times fs-8"></span></button>
</div>
<ul className="nav flex-column border-top border-translucent fs-9 vertical-nav mb-4">
<li className="nav-item"><a className="nav-link py-2 ps-0 pe-3 border-end border-bottom border-translucent text-start outline-none" aria-current="page" href="/apps/email/inbox">
<div className="d-flex align-items-center"><span className="me-2 nav-icons uil uil-inbox"></span><span className="flex-1">Inbox</span><span className="nav-item-count">5</span></div>
</a></li>
<li className="nav-item"><a className="nav-link py-2 ps-0 pe-3 border-end border-bottom border-translucent text-start outline-none active" aria-current="page" href="#!">
<div className="d-flex align-items-center"><span className="me-2 nav-icons uil uil-location-arrow"></span><span className="flex-1">Sent</span><span className="nav-item-count">23</span></div>
</a></li>
<li className="nav-item"><a className="nav-link py-2 ps-0 pe-3 border-end border-bottom border-translucent text-start outline-none" aria-current="page" href="#!">
<div className="d-flex align-items-center"><span className="me-2 nav-icons uil uil-pen"></span><span className="flex-1">Draft</span></div>
</a></li>
<li className="nav-item"><a className="nav-link py-2 ps-0 pe-3 border-end border-bottom border-translucent text-start outline-none" aria-current="page" href="#!">
<div className="d-flex align-items-center"><span className="me-2 nav-icons uil uil-exclamation-circle"></span><span className="flex-1">Spam</span></div>
</a></li>
<li className="nav-item"><a className="nav-link py-2 ps-0 pe-3 border-end border-bottom border-translucent text-start outline-none" aria-current="page" href="#!">
<div className="d-flex align-items-center"><span className="me-2 nav-icons uil uil-trash"></span><span className="flex-1">Trash</span></div>
</a></li>
</ul>
<div className="d-flex justify-content-between">
<p className="text-uppercase fs-10 text-body-tertiary text-opacity-85 mb-2 fw-bold">Filtered</p><a className="fs-10 fw-bold" href="#!"><span className="fa-solid fa-plus me-2"></span>Add Folder</a>
</div>
<ul className="nav flex-column border-top border-translucent fs-9 vertical-nav mb-4">
<li className="nav-item"><a className="nav-link py-2 ps-0 pe-3 border-end border-bottom border-translucenttext-start outline-none" aria-current="page" href="#!">
<div className="d-flex align-items-center"><span className="me-2 nav-icons uil uil-star"></span><span className="flex-1">Starred</span></div>
</a></li>
<li className="nav-item"><a className="nav-link py-2 ps-0 pe-3 border-end border-bottom border-translucenttext-start outline-none" aria-current="page" href="#!">
<div className="d-flex align-items-center"><span className="me-2 nav-icons uil uil-archive"></span><span className="flex-1">Archive</span></div>
</a></li>
</ul>
<div className="d-flex justify-content-between">
<p className="text-uppercase fs-10 text-body-tertiary text-opacity-85 mb-2 fw-bold">Labels</p><a className="fs-10 fw-bold" href="#!"><span className="fa-solid fa-plus me-2"></span>Add Label</a>
</div>
<ul className="nav flex-column border-top border-translucent fs-9 vertical-nav">
<li className="nav-item"><a className="nav-link py-2 ps-0 pe-3 border-end border-bottom border-translucent text-start outline-none" aria-current="page" href="#!">
<div className="d-flex align-items-center"><span className="ms-n1 me-1 fa-solid fa-circle text-primary" data-fa-transform="shrink-10"></span><span className="flex-1">Personal</span></div>
</a></li>
<li className="nav-item"><a className="nav-link py-2 ps-0 pe-3 border-end border-bottom border-translucent text-start outline-none" aria-current="page" href="#!">
<div className="d-flex align-items-center"><span className="ms-n1 me-1 fa-solid fa-circle text-primary-dark" data-fa-transform="shrink-10"></span><span className="flex-1">Work</span></div>
</a></li>
<li className="nav-item"><a className="nav-link py-2 ps-0 pe-3 border-end border-bottom border-translucent text-start outline-none" aria-current="page" href="#!">
<div className="d-flex align-items-center"><span className="ms-n1 me-1 fa-solid fa-circle text-success" data-fa-transform="shrink-10"></span><span className="flex-1">Payments</span></div>
</a></li>
<li className="nav-item"><a className="nav-link py-2 ps-0 pe-3 border-end border-bottom border-translucent text-start outline-none" aria-current="page" href="#!">
<div className="d-flex align-items-center"><span className="ms-n1 me-1 fa-solid fa-circle text-warning" data-fa-transform="shrink-10"></span><span className="flex-1">Invoices</span></div>
</a></li>
<li className="nav-item"><a className="nav-link py-2 ps-0 pe-3 border-end border-bottom border-translucent text-start outline-none" aria-current="page" href="#!">
<div className="d-flex align-items-center"><span className="ms-n1 me-1 fa-solid fa-circle text-danger" data-fa-transform="shrink-10"></span><span className="flex-1">Accounts</span></div>
</a></li>
<li className="nav-item"><a className="nav-link py-2 ps-0 pe-3 border-end border-bottom border-translucent text-start outline-none" aria-current="page" href="#!">
<div className="d-flex align-items-center"><span className="ms-n1 me-1 fa-solid fa-circle text-info" data-fa-transform="shrink-10"></span><span className="flex-1">Forums</span></div>
</a></li>
</ul>
</div>
</div>
<div className="phoenix-offcanvas-backdrop d-lg-none top-0" data-phoenix-backdrop="data-phoenix-backdrop"></div>
</div>
<div className="col-lg">
<div className="px-lg-1">
<div className="d-flex align-items-center flex-wrap position-sticky pb-2 bg-body z-2 email-toolbar inbox-toolbar">
<div className="d-flex align-items-center flex-1 me-2"><button className="btn btn-sm p-0 me-2" type="button" onClick={() => window.location.reload()}><span className="text-primary fas fa-redo fs-10"></span></button>
<p className="fw-semibold fs-10 text-body-tertiary text-opacity-85 mb-0 lh-sm text-nowrap">Last refreshed 1m ago</p>
</div>
<div className="d-flex">
<p className="text-body-tertiary text-opacity-85 fs-9 fw-semibold mb-0 me-3">Showing : <span className="text-body">1-7 </span>of <span className="text-body">205</span></p><button className="btn p-0 me-3" type="button"><span className="text-body-quaternary fa-solid fa-angle-left fs-10"></span></button>
<button className="btn p-0" type="button"><span className="text-primary fa-solid fa-angle-right fs-10"></span></button>
</div>
</div>
<div className="border-top border-translucent py-2 d-flex justify-content-between">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="data-bulk-select-row" /></div>
<div><button className="btn p-0 me-2 text-body-quaternary hover text-body-tertiary text-opacity-85" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Archive"><span className="fas fa-archive fs-10"></span></button>
<button className="btn p-0 me-2 text-body-quaternary hover text-body-tertiary text-opacity-85" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Delete"><span className="fas fa-trash fs-10"></span></button>
<button className="btn p-0 me-2 text-body-quaternary hover text-body-tertiary text-opacity-85" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Star"><span className="fas fa-star fs-10"></span></button>
<button className="btn p-0 text-body-quaternary hover text-body-tertiary text-opacity-85" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tags"><span className="fas fa-tag fs-10"></span></button>
</div>
</div>
<div className="border-top border-translucent hover-actions-trigger py-3">
<div className="row align-items-sm-center gx-2">
<div className="col-auto">
<div className="d-flex flex-column flex-sm-row"><input className="form-check-input mb-2 m-sm-0 me-sm-2" type="checkbox" id="checkbox-1" data-bulk-select-row="data-bulk-select-row" /><button className="btn p-0"><span className="fas text-warning fa-star"></span></button></div>
</div>
<div className="col-auto">
<div className="avatar avatar-s rounded-circle">
<img className="rounded-circle" src="/site/assets/img/team/60.webp" alt="" />
</div>
</div>
<div className="col-auto"><a className="text-body-emphasis fw-bold inbox-link fs-9" href="/apps/email/email-detail">Jessica Ball</a></div>
<div className="col-auto ms-auto">
<div className="hover-actions end-0"><button className="btn btn-phoenix-secondary btn-icon dropdown-toggle dropdown-caret-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fa-solid fa-ellipsis"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark Unread</a><a className="dropdown-item" href="#!">Mark Important</a><a className="dropdown-item" href="#!">Archive</a><a className="dropdown-item" href="#!">Download</a><a className="dropdown-item" href="#!">Print</a><a className="dropdown-item" href="#!">Report Spam</a><a className="dropdown-item" href="#!">Report Phishing</a><a className="dropdown-item" href="#!">Mute Jessica Ball</a><a className="dropdown-item" href="#!">Block Jessica Ball</a><a className="dropdown-item text-danger" href="#!">Delete</a></div>
</div><span className="fs-10 fw-bold">1 M</span>
</div>
</div>
<div className="ms-4 mt-n3 mt-sm-0 ms-sm-11"><a className="d-block inbox-link" href="/apps/email/email-detail"><span className="fs-9 line-clamp-1 text-body-emphasis">Query about purchased soccer socks</span>
<p className="fs-9 ps-0 text-body-tertiary mb-0 line-clamp-2">Greetings. I have purchased some socks under the bundle offer you availed this week. According to the offer I was thrilled to get a 25% off of any product I bought. Regardless, I had to pay the exact full price for them...</p>
</a></div>
</div>
<div className="border-top border-translucent hover-actions-trigger py-3">
<div className="row align-items-sm-center gx-2">
<div className="col-auto">
<div className="d-flex flex-column flex-sm-row"><input className="form-check-input mb-2 m-sm-0 me-sm-2" type="checkbox" id="checkbox-2" data-bulk-select-row="data-bulk-select-row" /><button className="btn p-0"><span className="far text-body-quaternary fa-star"></span></button></div>
</div>
<div className="col-auto">
<div className="avatar avatar-s rounded-circle">
<img className="rounded-circle" src="/site/assets/img/team/58.webp" alt="" />
</div>
</div>
<div className="col-auto"><a className="text-body-emphasis fw-bold inbox-link fs-9" href="/apps/email/email-detail">Danny Reid</a></div>
<div className="col-auto ms-auto">
<div className="hover-actions end-0"><button className="btn btn-phoenix-secondary btn-icon dropdown-toggle dropdown-caret-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fa-solid fa-ellipsis"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark Unread</a><a className="dropdown-item" href="#!">Mark Important</a><a className="dropdown-item" href="#!">Archive</a><a className="dropdown-item" href="#!">Download</a><a className="dropdown-item" href="#!">Print</a><a className="dropdown-item" href="#!">Report Spam</a><a className="dropdown-item" href="#!">Report Phishing</a><a className="dropdown-item" href="#!">Mute Jessica Ball</a><a className="dropdown-item" href="#!">Block Jessica Ball</a><a className="dropdown-item text-danger" href="#!">Delete</a></div>
</div><span className="fs-10 fw-bold">3 M</span>
</div>
</div>
<div className="ms-4 mt-n3 mt-sm-0 ms-sm-11"><a className="d-block inbox-link" href="/apps/email/email-detail"><span className="fs-9 line-clamp-1 text-body-emphasis">How to take the headache out of Order</span>
<p className="fs-9 ps-0 text-body-tertiary mb-0 line-clamp-2">Hello! As I've mentioned before, we have this huge order deals to ship within this month. Also, the financial report is attached to this email. Hopefully, you'll find it useful for the company.</p>
</a><a className="d-inline-flex align-items-center border border-translucent rounded-pill px-3 py-1 me-2 mt-2 inbox-link" href="#!"><span className="fas fa-file-pdf text-warning fs-9"></span><span className="ms-2 fw-bold fs-10 text-body">Financial_Reports.pdf</span></a><a className="d-inline-flex align-items-center border border-translucent rounded-pill px-3 py-1 me-2 mt-2 inbox-link" href="#!"><span className="fas fa-file-zipper text-warning fs-9"></span><span className="ms-2 fw-bold fs-10 text-body">Frame20.zip</span></a></div>
</div>
<div className="border-top border-translucent hover-actions-trigger py-3">
<div className="row align-items-sm-center gx-2">
<div className="col-auto">
<div className="d-flex flex-column flex-sm-row"><input className="form-check-input mb-2 m-sm-0 me-sm-2" type="checkbox" id="checkbox-3" data-bulk-select-row="data-bulk-select-row" /><button className="btn p-0"><span className="fas text-warning fa-star"></span></button></div>
</div>
<div className="col-auto">
<div className="avatar avatar-s rounded-circle">
<img className="rounded-circle" src="/site/assets/img/team/57.webp" alt="" />
</div>
</div>
<div className="col-auto"><a className="text-body fw-semibold inbox-link fs-9" href="/apps/email/email-detail">Harley Brown</a></div>
<div className="col-auto ms-auto">
<div className="hover-actions end-0"><button className="btn btn-phoenix-secondary btn-icon dropdown-toggle dropdown-caret-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fa-solid fa-ellipsis"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark Unread</a><a className="dropdown-item" href="#!">Mark Important</a><a className="dropdown-item" href="#!">Archive</a><a className="dropdown-item" href="#!">Download</a><a className="dropdown-item" href="#!">Print</a><a className="dropdown-item" href="#!">Report Spam</a><a className="dropdown-item" href="#!">Report Phishing</a><a className="dropdown-item" href="#!">Mute Jessica Ball</a><a className="dropdown-item" href="#!">Block Jessica Ball</a><a className="dropdown-item text-danger" href="#!">Delete</a></div>
</div><span className="fs-10">5 M</span>
</div>
</div>
<div className="ms-4 mt-n3 mt-sm-0 ms-sm-11"><a className="d-block inbox-link" href="/apps/email/email-detail"><span className="fs-9 line-clamp-1 text-body-highlight">The Arnold Schwarzenegger of Order</span>
<p className="fs-9 ps-0 text-body-tertiary mb-0 line-clamp-2">I’ve come across your posts and found some favorable deals on your page. I’ve added a load of products to the cart and I don’t know the payment options you avail. Also, can you enlighten me about any discount or...</p>
</a></div>
</div>
<div className="border-top border-translucent hover-actions-trigger py-3">
<div className="row align-items-sm-center gx-2">
<div className="col-auto">
<div className="d-flex flex-column flex-sm-row"><input className="form-check-input mb-2 m-sm-0 me-sm-2" type="checkbox" id="checkbox-4" data-bulk-select-row="data-bulk-select-row" /><button className="btn p-0"><span className="far text-body-quaternary fa-star"></span></button></div>
</div>
<div className="col-auto">
<div className="avatar avatar-s rounded-circle">
<img className="rounded-circle" src="/site/assets/img/team/59.webp" alt="" />
</div>
</div>
<div className="col-auto"><a className="text-body-emphasis fw-bold inbox-link fs-9" href="/apps/email/email-detail">Hollie Stephens</a></div>
<div className="col-auto ms-auto">
<div className="hover-actions end-0"><button className="btn btn-phoenix-secondary btn-icon dropdown-toggle dropdown-caret-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fa-solid fa-ellipsis"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark Unread</a><a className="dropdown-item" href="#!">Mark Important</a><a className="dropdown-item" href="#!">Archive</a><a className="dropdown-item" href="#!">Download</a><a className="dropdown-item" href="#!">Print</a><a className="dropdown-item" href="#!">Report Spam</a><a className="dropdown-item" href="#!">Report Phishing</a><a className="dropdown-item" href="#!">Mute Jessica Ball</a><a className="dropdown-item" href="#!">Block Jessica Ball</a><a className="dropdown-item text-danger" href="#!">Delete</a></div>
</div><span className="fs-10 fw-bold">8 M</span>
</div>
</div>
<div className="ms-4 mt-n3 mt-sm-0 ms-sm-11"><a className="d-block inbox-link" href="/apps/email/email-detail"><span className="fs-9 line-clamp-1 text-body-emphasis">My order is not being taken</span>
<p className="fs-9 ps-0 text-body-tertiary mb-0 line-clamp-2">Hello. I’m knocking to let you know that I am trying to place some orders on your site. But my orders are not being taken, maybe it’s technical issues. Can you help me with it as I really need the products I am trying to...</p>
</a></div>
</div>
<div className="border-top border-translucent hover-actions-trigger py-3">
<div className="row align-items-sm-center gx-2">
<div className="col-auto">
<div className="d-flex flex-column flex-sm-row"><input className="form-check-input mb-2 m-sm-0 me-sm-2" type="checkbox" id="checkbox-5" data-bulk-select-row="data-bulk-select-row" /><button className="btn p-0"><span className="fas text-warning fa-star"></span></button></div>
</div>
<div className="col-auto">
<div className="avatar avatar-s rounded-circle">
<img className="rounded-circle avatar-placeholder" src="/site/assets/img/team/avatar.webp" alt="" />
</div>
</div>
<div className="col-auto"><a className="text-body fw-semibold inbox-link fs-9" href="/apps/email/email-detail">Natasha West</a></div>
<div className="col-auto ms-auto">
<div className="hover-actions end-0"><button className="btn btn-phoenix-secondary btn-icon dropdown-toggle dropdown-caret-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fa-solid fa-ellipsis"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark Unread</a><a className="dropdown-item" href="#!">Mark Important</a><a className="dropdown-item" href="#!">Archive</a><a className="dropdown-item" href="#!">Download</a><a className="dropdown-item" href="#!">Print</a><a className="dropdown-item" href="#!">Report Spam</a><a className="dropdown-item" href="#!">Report Phishing</a><a className="dropdown-item" href="#!">Mute Jessica Ball</a><a className="dropdown-item" href="#!">Block Jessica Ball</a><a className="dropdown-item text-danger" href="#!">Delete</a></div>
</div><span className="fs-10">20 M</span>
</div>
</div>
<div className="ms-4 mt-n3 mt-sm-0 ms-sm-11"><a className="d-block inbox-link" href="/apps/email/email-detail"><span className="fs-9 line-clamp-1 text-body-highlight">Shipment is missing</span>
<p className="fs-9 ps-0 text-body-tertiary mb-0 line-clamp-2">Greetings! I’ve got an email saying I was to get the products yesterday. But got a call instead saying the shipment was misplaced. Can you put some light on it? Really need the products.</p>
</a></div>
</div>
<div className="border-top border-translucent hover-actions-trigger py-3">
<div className="row align-items-sm-center gx-2">
<div className="col-auto">
<div className="d-flex flex-column flex-sm-row"><input className="form-check-input mb-2 m-sm-0 me-sm-2" type="checkbox" id="checkbox-6" data-bulk-select-row="data-bulk-select-row" /><button className="btn p-0"><span className="fas text-warning fa-star"></span></button></div>
</div>
<div className="col-auto">
<div className="avatar avatar-s">
<div className="avatar-name rounded-circle"><span>R</span></div>
</div>
</div>
<div className="col-auto"><a className="text-body fw-semibold inbox-link fs-9" href="/apps/email/email-detail">Max Williamson</a></div>
<div className="col-auto ms-auto">
<div className="hover-actions end-0"><button className="btn btn-phoenix-secondary btn-icon dropdown-toggle dropdown-caret-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fa-solid fa-ellipsis"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark Unread</a><a className="dropdown-item" href="#!">Mark Important</a><a className="dropdown-item" href="#!">Archive</a><a className="dropdown-item" href="#!">Download</a><a className="dropdown-item" href="#!">Print</a><a className="dropdown-item" href="#!">Report Spam</a><a className="dropdown-item" href="#!">Report Phishing</a><a className="dropdown-item" href="#!">Mute Jessica Ball</a><a className="dropdown-item" href="#!">Block Jessica Ball</a><a className="dropdown-item text-danger" href="#!">Delete</a></div>
</div><span className="fs-10">30 M</span>
</div>
</div>
<div className="ms-4 mt-n3 mt-sm-0 ms-sm-11"><a className="d-block inbox-link" href="/apps/email/email-detail"><span className="fs-9 line-clamp-1 text-body-highlight">How can I order something urgently?</span>
<p className="fs-9 ps-0 text-body-tertiary mb-0 line-clamp-2">I saw your promotion on 25% sales. Do you avail emergency orders and urgent shipments? If you do, I need to place some orders. Please reply, thanks.</p>
</a><a className="d-inline-flex align-items-center border border-translucent rounded-pill px-3 py-1 me-2 mt-2 inbox-link" href="#!"><span className="fa-solid fa-music text-primary fs-9"></span><span className="ms-2 fw-bold fs-10 text-body">syllabus</span></a></div>
</div>
<div className="border-top border-translucent hover-actions-trigger pt-3">
<div className="row align-items-sm-center gx-2">
<div className="col-auto">
<div className="d-flex flex-column flex-sm-row"><input className="form-check-input mb-2 m-sm-0 me-sm-2" type="checkbox" id="checkbox-7" data-bulk-select-row="data-bulk-select-row" /><button className="btn p-0"><span className="far text-body-quaternary fa-star"></span></button></div>
</div>
<div className="col-auto">
<div className="avatar avatar-s rounded-circle">
<img className="rounded-circle" src="/site/assets/img/team/30.webp" alt="" />
</div>
</div>
<div className="col-auto"><a className="text-body fw-semibold inbox-link fs-9" href="/apps/email/email-detail">Ethan Hawkins</a></div>
<div className="col-auto ms-auto">
<div className="hover-actions end-0"><button className="btn btn-phoenix-secondary btn-icon dropdown-toggle dropdown-caret-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fa-solid fa-ellipsis"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark Unread</a><a className="dropdown-item" href="#!">Mark Important</a><a className="dropdown-item" href="#!">Archive</a><a className="dropdown-item" href="#!">Download</a><a className="dropdown-item" href="#!">Print</a><a className="dropdown-item" href="#!">Report Spam</a><a className="dropdown-item" href="#!">Report Phishing</a><a className="dropdown-item" href="#!">Mute Jessica Ball</a><a className="dropdown-item" href="#!">Block Jessica Ball</a><a className="dropdown-item text-danger" href="#!">Delete</a></div>
</div><span className="fs-10">32 M</span>
</div>
</div>
<div className="ms-4 mt-n3 mt-sm-0 ms-sm-11"><a className="d-block inbox-link" href="/apps/email/email-detail"><span className="fs-9 line-clamp-1 text-body-highlight">How the delicacy of the products will be handled??</span>
<p className="fs-9 ps-0 text-body-tertiary mb-0 line-clamp-2">Hello! I need to purchase some delicate products. Can you tell me how you handle the delicacy of the products to be shipped? I don’t want to get my hands on broken things, so. Thank you! </p>
</a></div>
</div>
</div>
</div>
</div>
</div>
<footer className="footer position-absolute">
<div className="row g-0 justify-content-between align-items-center h-100">
<div className="col-12 col-sm-auto text-center">
<p className="mb-0 mt-2 mt-sm-0 text-body">Thank you for creating with Phoenix<span className="d-none d-sm-inline-block"></span><span className="d-none d-sm-inline-block mx-1">|</span><br className="d-sm-none" />2025 ©<a className="mx-1" href="https://themewagon.com/">Themewagon</a></p>
</div>
<div className="col-12 col-sm-auto text-center">
<p className="mb-0 text-body-tertiary text-opacity-85">v1.24.0</p>
</div>
</div>
</footer>
</div>
<div className="modal fade" id="searchBoxModal" tabIndex="-1" aria-hidden="true" data-bs-backdrop="true" data-phoenix-modal="data-phoenix-modal" style={{'--phoenix-backdrop-opacity': "1"}}>
<div className="modal-dialog">
<div className="modal-content mt-15 rounded-pill">
<div className="modal-body p-0">
<div className="search-box navbar-top-search-box" data-list="&#123;&quot;valueNames&quot;:[&quot;title&quot;]&#125;" style={{width: "auto"}}>
<form className="position-relative" data-bs-toggle="search" data-bs-display="static"><input className="form-control search-input fuzzy-search rounded-pill form-control-lg" type="search" placeholder="Search..." aria-label="Search" />
<span className="fas fa-search search-box-icon"></span>
</form>
<div className="btn-close position-absolute end-0 top-50 translate-middle cursor-pointer shadow-none" data-bs-dismiss="search"><button className="btn btn-link p-0" aria-label="Close"></button></div>
<div className="dropdown-menu border start-0 py-0 overflow-hidden w-100">
<div className="scrollbar-overlay" style={{maxHeight: "30rem"}}>
<div className="list pb-3">
<h6 className="dropdown-header text-body-highlight fs-10 py-2">24 <span className="text-body-quaternary">results</span></h6>
<hr className="my-0" />
<h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">Recently Searched </h6>
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
<h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">Products</h6>
<div className="py-2"><a className="dropdown-item py-2 d-flex align-items-center" href="/apps/e-commerce/landing/product-details">
<div className="file-thumbnail me-2"><img className="h-100 w-100 object-fit-cover rounded-3" src="/site/assets/img/products/60x60/3.png" alt="" /></div>
<div className="flex-1">
<h6 className="mb-0 text-body-highlight title">MacBook Air - 13″</h6>
<p className="fs-10 mb-0 d-flex text-body-tertiary"><span className="fw-medium text-body-tertiary text-opactity-85">8GB Memory - 1.6GHz - 128GB Storage</span></p>
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
<h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">Quick Links</h6>
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
<h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">Files</h6>
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
<h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">Members</h6>
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
<h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">Related Searches</h6>
<div className="py-2"><a className="dropdown-item" href="/apps/e-commerce/landing/product-details">
<div className="d-flex align-items-center">
<div className="fw-normal text-body-highlight title"><span className="fa-brands fa-firefox-browser text-body" data-fa-transform="shrink-2"></span> Search in the Web MacBook</div>
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
</div>
</div>
</div>
</div>
<div className="support-chat-container">
<div className="container-fluid support-chat">
<div className="card bg-body-emphasis">
<div className="card-header d-flex flex-between-center px-4 py-3 border-bottom border-translucent">
<h5 className="mb-0 d-flex align-items-center gap-2">Demo widget<span className="fa-solid fa-circle text-success fs-11"></span></h5>
<div className="btn-reveal-trigger"><button className="btn btn-link p-0 dropdown-toggle dropdown-caret-none transition-none d-flex" type="button" id="support-chat-dropdown" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h text-body"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2" aria-labelledby="support-chat-dropdown"><a className="dropdown-item" href="#!">Request a callback</a><a className="dropdown-item" href="#!">Search in chat</a><a className="dropdown-item" href="#!">Show history</a><a className="dropdown-item" href="#!">Report to Admin</a><a className="dropdown-item btn-support-chat" href="#!">Close Support</a></div>
</div>
</div>
<div className="card-body chat p-0">
<div className="d-flex flex-column-reverse scrollbar h-100 p-3">
<div className="text-end mt-6"><a className="mb-2 d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3" href="#!">
<p className="mb-0 fw-semibold fs-9">I need help with something</p><span className="fa-solid fa-paper-plane text-primary fs-9 ms-3"></span>
</a><a className="mb-2 d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3" href="#!">
<p className="mb-0 fw-semibold fs-9">I can’t reorder a product I previously ordered</p><span className="fa-solid fa-paper-plane text-primary fs-9 ms-3"></span>
</a><a className="mb-2 d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3" href="#!">
<p className="mb-0 fw-semibold fs-9">How do I place an order?</p><span className="fa-solid fa-paper-plane text-primary fs-9 ms-3"></span>
</a><a className="false d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3" href="#!">
<p className="mb-0 fw-semibold fs-9">My payment method not working</p><span className="fa-solid fa-paper-plane text-primary fs-9 ms-3"></span>
</a></div>
<div className="text-center mt-auto">
<div className="avatar avatar-3xl status-online"><img className="rounded-circle border border-3 border-light-subtle" src="/site/assets/img/team/30.webp" alt="" /></div>
<h5 className="mt-2 mb-3">Eric</h5>
<p className="text-center text-body-emphasis mb-0">Ask us anything – we’ll get back to you here or by email within 24 hours.</p>
</div>
</div>
</div>
<div className="card-footer d-flex align-items-center gap-2 border-top border-translucent ps-3 pe-4 py-3">
<div className="d-flex align-items-center flex-1 gap-3 border border-translucent rounded-pill px-4"><input className="form-control outline-none border-0 flex-1 fs-9 px-0" type="text" placeholder="Write message" /><label className="btn btn-link d-flex p-0 text-body-quaternary fs-9 border-0" htmlFor="supportChatPhotos"><span className="fa-solid fa-image"></span></label><input className="d-none" type="file" accept="image/*" id="supportChatPhotos" /><label className="btn btn-link d-flex p-0 text-body-quaternary fs-9 border-0" htmlFor="supportChatAttachment"> <span className="fa-solid fa-paperclip"></span></label><input className="d-none" type="file" id="supportChatAttachment" /></div><button className="btn p-0 border-0 send-btn"><span className="fa-solid fa-paper-plane fs-9"></span></button>
</div>
</div>
</div><button className="btn btn-support-chat p-0 border border-translucent"><span className="fs-8 btn-text text-primary text-nowrap">Chat demo</span><span className="ping-icon-wrapper mt-n4 ms-n6 mt-sm-0 ms-sm-2 position-absolute position-sm-relative"><span className="ping-icon-bg"></span><span className="fa-solid fa-circle ping-icon"></span></span><span className="fa-solid fa-headset text-primary fs-8 d-sm-none"></span><span className="fa-solid fa-chevron-down text-primary fs-7"></span></button>
</div>
</main>

<div></div>












    </>
  );
}
