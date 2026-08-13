import DashboardNavbars from '../components/DashboardNavbars.jsx';
/* Auto-converted from the original HTML. Visual/markup structure intentionally preserved. */
export default function AppsECommerceLandingProfilePage() {
  return (
    <>




<main className="main" id="top">
<DashboardNavbars />



<section className="py-0">
<div className="container-small">
<div className="ecommerce-topbar">

</div>
</div>
</section>




<section className="pt-5 pb-9">
<div className="container-small">

<div className="row align-items-center justify-content-between g-3 mb-4">
<div className="col-auto">
<h2 className="mb-0">Profile</h2>
</div>
<div className="col-auto">
<div className="row g-2 g-sm-3">
<div className="col-auto"><button className="btn btn-phoenix-danger"><span className="fas fa-trash-alt me-2"></span>Delete customer</button></div>
<div className="col-auto"><button className="btn btn-phoenix-secondary"><span className="fas fa-key me-2"></span>Reset password</button></div>
</div>
</div>
</div>
<div className="row g-3 mb-6">
<div className="col-12 col-lg-8">
<div className="card h-100">
<div className="card-body">
<div className="border-bottom border-dashed pb-4">
<div className="row align-items-center g-3 g-sm-5 text-center text-sm-start">
<div className="col-12 col-sm-auto"><input className="d-none" id="avatarFile" type="file" /><label className="cursor-pointer avatar avatar-5xl" htmlFor="avatarFile"><img className="rounded-circle" src="/site/assets/img/team/15.webp" alt="" /></label></div>
<div className="col-12 col-sm-auto flex-1">
<h3>Ansolo Lazinatov</h3>
<p className="text-body-secondary">Joined 3 months ago</p>
<div><a className="me-2" href="#!"><span className="fab fa-linkedin-in text-body-quaternary text-opacity-75 text-primary-hover"></span></a><a className="me-2" href="#!"><span className="fab fa-facebook text-body-quaternary text-opacity-75 text-primary-hover"></span></a><a href="#!"><span className="fab fa-twitter text-body-quaternary text-opacity-75 text-primary-hover"></span></a></div>
</div>
</div>
</div>
<div className="d-flex flex-between-center pt-4">
<div>
<h6 className="mb-2 text-body-secondary">Total Spent</h6>
<h4 className="fs-7 text-body-highlight mb-0">$894</h4>
</div>
<div className="text-end">
<h6 className="mb-2 text-body-secondary">Last Order</h6>
<h4 className="fs-7 text-body-highlight mb-0">1 week ago</h4>
</div>
<div className="text-end">
<h6 className="mb-2 text-body-secondary">Total Orders</h6>
<h4 className="fs-7 text-body-highlight mb-0">97 </h4>
</div>
</div>
</div>
</div>
</div>
<div className="col-12 col-lg-4">
<div className="card h-100">
<div className="card-body">
<div className="border-bottom border-dashed">
<h4 className="mb-3">Default Address<button className="btn btn-link p-0" type="button"> <span className="fas fa-edit fs-9 ms-3 text-body-quaternary"></span></button></h4>
</div>
<div className="pt-4 mb-7 mb-lg-4 mb-xl-7">
<div className="row justify-content-between">
<div className="col-auto">
<h5 className="text-body-highlight">Address</h5>
</div>
<div className="col-auto">
<p className="text-body-secondary">Vancouver, British Columbia<br />Canada</p>
</div>
</div>
</div>
<div className="border-top border-dashed pt-4">
<div className="row flex-between-center mb-2">
<div className="col-auto">
<h5 className="text-body-highlight mb-0">Email</h5>
</div>
<div className="col-auto"><a className="lh-1" href="mailto:shatinon@jeemail.com">shatinon@jeemail.com</a></div>
</div>
<div className="row flex-between-center">
<div className="col-auto">
<h5 className="text-body-highlight mb-0">Phone</h5>
</div>
<div className="col-auto"><a href="tel:+1234567890">+1234567890</a></div>
</div>
</div>
</div>
</div>
</div>
</div>
<div>
<div className="scrollbar">
<ul className="nav nav-underline fs-9 flex-nowrap mb-3 pb-1" id="myTab" role="tablist">
<li className="nav-item me-3"><a className="nav-link text-nowrap active" id="orders-tab" data-bs-toggle="tab" href="#tab-orders" role="tab" aria-controls="tab-orders" aria-selected="true"><span className="fas fa-shopping-cart me-2"></span>Orders <span className="text-body-tertiary fw-normal"> (35)</span></a></li>
<li className="nav-item me-3"><a className="nav-link text-nowrap" id="reviews-tab" data-bs-toggle="tab" href="#tab-reviews" role="tab" aria-controls="tab-orders" aria-selected="true"><span className="fas fa-star me-2"></span>Reviews<span className="text-body-tertiary fw-normal"> (24)</span></a></li>
<li className="nav-item me-3"><a className="nav-link text-nowrap" id="wishlist-tab" data-bs-toggle="tab" href="#tab-wishlist" role="tab" aria-controls="tab-orders" aria-selected="true"><span className="fas fa-heart me-2"></span>Wishlist</a></li>
<li className="nav-item me-3"><a className="nav-link text-nowrap" id="stores-tab" data-bs-toggle="tab" href="#tab-stores" role="tab" aria-controls="tab-stores" aria-selected="true"><span className="fas fa-home me-2"></span>Stores</a></li>
<li className="nav-item"><a className="nav-link text-nowrap" id="personal-info-tab" data-bs-toggle="tab" href="#tab-personal-info" role="tab" aria-controls="tab-personal-info" aria-selected="true"><span className="fas fa-user me-2"></span>Personal info</a></li>
</ul>
</div>
<div className="tab-content" id="profileTabContent">
<div className="tab-pane fade show active" id="tab-orders" role="tabpanel" aria-labelledby="orders-tab">
<div className="border-top border-bottom border-translucent" id="profileOrdersTable" data-list="&#123;&quot;valueNames&quot;:[&quot;order&quot;,&quot;status&quot;,&quot;delivery&quot;,&quot;date&quot;,&quot;total&quot;],&quot;page&quot;:6,&quot;pagination&quot;:true&#125;">
<div className="table-responsive scrollbar">
<table className="table fs-9 mb-0">
<thead>
<tr>
<th className="sort white-space-nowrap align-middle pe-3 ps-0" scope="col" data-sort="order" style={{width: "15%", minWidth: "140px"}}>ORDER</th>
<th className="sort align-middle pe-3" scope="col" data-sort="status" style={{width: "15%", minWidth: "180px"}}>STATUS</th>
<th className="sort align-middle text-start" scope="col" data-sort="delivery" style={{width: "20%", minWidth: "160px"}}>DELIVERY METHOD</th>
<th className="sort align-middle pe-0 text-end" scope="col" data-sort="date" style={{width: "15%", minWidth: "160px"}}>DATE</th>
<th className="sort align-middle text-end" scope="col" data-sort="total" style={{width: "15%", minWidth: "160px"}}>TOTAL</th>
<th className="align-middle pe-0 text-end" scope="col" style={{width: "15%"}}> </th>
</tr>
</thead>
<tbody className="list" id="profile-order-table-body">
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="order align-middle white-space-nowrap py-2 ps-0"><a className="fw-semibold text-primary" href="#!">#2453</a></td>
<td className="status align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2"><span className="badge badge-phoenix fs-10 badge-phoenix-success"><span className="badge-label">Shipped</span><span className="ms-1" data-feather="check" style={{height: "12.8px", width: "12.8px"}}></span></span></td>
<td className="delivery align-middle white-space-nowrap text-body py-2">Cash on delivery</td>
<td className="total align-middle text-body-tertiary text-end py-2">Dec 12, 12:56 PM</td>
<td className="date align-middle fw-semibold text-end py-2 text-body-highlight">$87</td>
<td className="align-middle text-end white-space-nowrap pe-0 action py-2">
<div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
<div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
</div>
</div>
</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="order align-middle white-space-nowrap py-2 ps-0"><a className="fw-semibold text-primary" href="#!">#2452</a></td>
<td className="status align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2"><span className="badge badge-phoenix fs-10 badge-phoenix-info"><span className="badge-label">Ready to pickup</span><span className="ms-1" data-feather="info" style={{height: "12.8px", width: "12.8px"}}></span></span></td>
<td className="delivery align-middle white-space-nowrap text-body py-2">Free shipping</td>
<td className="total align-middle text-body-tertiary text-end py-2">Dec 9, 2:28PM</td>
<td className="date align-middle fw-semibold text-end py-2 text-body-highlight">$7264</td>
<td className="align-middle text-end white-space-nowrap pe-0 action py-2">
<div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
<div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
</div>
</div>
</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="order align-middle white-space-nowrap py-2 ps-0"><a className="fw-semibold text-primary" href="#!">#2451</a></td>
<td className="status align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2"><span className="badge badge-phoenix fs-10 badge-phoenix-warning"><span className="badge-label">Partially fulfilled</span><span className="ms-1" data-feather="clock" style={{height: "12.8px", width: "12.8px"}}></span></span></td>
<td className="delivery align-middle white-space-nowrap text-body py-2">Local pickup</td>
<td className="total align-middle text-body-tertiary text-end py-2">Dec 4, 12:56 PM</td>
<td className="date align-middle fw-semibold text-end py-2 text-body-highlight">$375</td>
<td className="align-middle text-end white-space-nowrap pe-0 action py-2">
<div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
<div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
</div>
</div>
</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="order align-middle white-space-nowrap py-2 ps-0"><a className="fw-semibold text-primary" href="#!">#2450</a></td>
<td className="status align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2"><span className="badge badge-phoenix fs-10 badge-phoenix-secondary"><span className="badge-label">Canceled</span><span className="ms-1" data-feather="x" style={{height: "12.8px", width: "12.8px"}}></span></span></td>
<td className="delivery align-middle white-space-nowrap text-body py-2">Standard shipping</td>
<td className="total align-middle text-body-tertiary text-end py-2">Dec 1, 4:07 AM</td>
<td className="date align-middle fw-semibold text-end py-2 text-body-highlight">$657</td>
<td className="align-middle text-end white-space-nowrap pe-0 action py-2">
<div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
<div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
</div>
</div>
</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="order align-middle white-space-nowrap py-2 ps-0"><a className="fw-semibold text-primary" href="#!">#2449</a></td>
<td className="status align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2"><span className="badge badge-phoenix fs-10 badge-phoenix-success"><span className="badge-label">fulfilled</span><span className="ms-1" data-feather="check" style={{height: "12.8px", width: "12.8px"}}></span></span></td>
<td className="delivery align-middle white-space-nowrap text-body py-2">Express</td>
<td className="total align-middle text-body-tertiary text-end py-2">Nov 28, 7:28 PM</td>
<td className="date align-middle fw-semibold text-end py-2 text-body-highlight">$9562</td>
<td className="align-middle text-end white-space-nowrap pe-0 action py-2">
<div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
<div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
</div>
</div>
</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="order align-middle white-space-nowrap py-2 ps-0"><a className="fw-semibold text-primary" href="#!">#2448</a></td>
<td className="status align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2"><span className="badge badge-phoenix fs-10 badge-phoenix-danger"><span className="badge-label">Unfulfilled</span><span className="ms-1" data-feather="check" style={{height: "12.8px", width: "12.8px"}}></span></span></td>
<td className="delivery align-middle white-space-nowrap text-body py-2">Local delivery</td>
<td className="total align-middle text-body-tertiary text-end py-2">Nov 24, 10:16 AM</td>
<td className="date align-middle fw-semibold text-end py-2 text-body-highlight">$256</td>
<td className="align-middle text-end white-space-nowrap pe-0 action py-2">
<div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
<div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
</div>
</div>
</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="order align-middle white-space-nowrap py-2 ps-0"><a className="fw-semibold text-body-tertiary text-opacity-85 pointers-events-none text-decoration-none" href="#!">#2447</a></td>
<td className="status align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2"><span className="badge badge-phoenix fs-10 badge-phoenix-secondary"><span className="badge-label">Cancelled</span><span className="ms-1" data-feather="x" style={{height: "12.8px", width: "12.8px"}}></span></span></td>
<td className="delivery align-middle white-space-nowrap text-body py-2">Standard shipping</td>
<td className="total align-middle text-body-tertiary text-end py-2">Nov 10, 12:00 PM</td>
<td className="date align-middle fw-semibold text-end py-2 text-body-tertiary text-opacity-85">$898</td>
<td className="align-middle text-end white-space-nowrap pe-0 action py-2">
<div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
<div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
</div>
</div>
</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="order align-middle white-space-nowrap py-2 ps-0"><a className="fw-semibold text-primary" href="#!">#2446</a></td>
<td className="status align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2"><span className="badge badge-phoenix fs-10 badge-phoenix-success"><span className="badge-label">shipped</span><span className="ms-1" data-feather="check" style={{height: "12.8px", width: "12.8px"}}></span></span></td>
<td className="delivery align-middle white-space-nowrap text-body py-2">Express</td>
<td className="total align-middle text-body-tertiary text-end py-2">Nov 12, 12:20 PM</td>
<td className="date align-middle fw-semibold text-end py-2 text-body-highlight">$4116</td>
<td className="align-middle text-end white-space-nowrap pe-0 action py-2">
<div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
<div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
</div>
</div>
</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="order align-middle white-space-nowrap py-2 ps-0"><a className="fw-semibold text-body-tertiary text-opacity-85 pointers-events-none text-decoration-none" href="#!">#2445</a></td>
<td className="status align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2"><span className="badge badge-phoenix fs-10 badge-phoenix-success"><span className="badge-label">fulfilled</span><span className="ms-1" data-feather="check" style={{height: "12.8px", width: "12.8px"}}></span></span></td>
<td className="delivery align-middle white-space-nowrap text-body py-2">Free shipping</td>
<td className="total align-middle text-body-tertiary text-end py-2">Oct 19, 1:20 PM</td>
<td className="date align-middle fw-semibold text-end py-2 text-body-tertiary text-opacity-85">$4116</td>
<td className="align-middle text-end white-space-nowrap pe-0 action py-2">
<div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
<div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
</div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
<div className="col-auto d-flex">
<p className="mb-0 d-none d-sm-block me-3 fw-semibold text-body" data-list-info="data-list-info"></p><a className="fw-semibold" href="#!" data-list-view="*">View all<span className="fas fa-angle-right ms-1" data-fa-transform="down-1"></span></a><a className="fw-semibold d-none" href="#!" data-list-view="less">View Less<span className="fas fa-angle-right ms-1" data-fa-transform="down-1"></span></a>
</div>
<div className="col-auto d-flex"><button className="page-link" data-list-pagination="prev"><span className="fas fa-chevron-left"></span></button>
<ul className="mb-0 pagination"></ul><button className="page-link pe-0" data-list-pagination="next"><span className="fas fa-chevron-right"></span></button>
</div>
</div>
</div>
</div>
<div className="tab-pane fade" id="tab-reviews" role="tabpanel" aria-labelledby="reviews-tab">
<div className="border-y" id="profileRatingTable" data-list="&#123;&quot;valueNames&quot;:[&quot;product&quot;,&quot;rating&quot;,&quot;review&quot;,&quot;status&quot;,&quot;date&quot;],&quot;page&quot;:6,&quot;pagination&quot;:true&#125;">
<div className="table-responsive scrollbar">
<table className="table fs-9 mb-0">
<thead>
<tr>
<th className="sort white-space-nowrap align-middle" scope="col" style={{minWidth: "220px"}} data-sort="product">PRODUCT</th>
<th className="sort align-middle" scope="col" data-sort="rating" style={{maxWidth: "10%"}}>RATING</th>
<th className="sort align-middle" scope="col" style={{minWidth: "480px"}} data-sort="review">REVIEW</th>
<th className="sort align-middle" scope="col" style={{maxWidth: "12%"}} data-sort="status">STATUS</th>
<th className="sort text-end align-middle" scope="col" style={{maxWidth: "10%"}} data-sort="date">DATE</th>
<th className="sort text-end pe-0 align-middle" scope="col" style={{width: "7%"}}> </th>
</tr>
</thead>
<tbody className="list" id="profile-review-table-body">
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="align-middle product pe-3"><a className="fw-semibold line-clamp-1" href="/apps/e-commerce/landing/product-details">Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Management & Skin Temperature Trends, Carbon/Graphite, One Size (S & L Bands)</a></td>
<td className="align-middle rating white-space-nowrap fs-10"><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa-regular fa-star text-warning-light" data-bs-theme="light"></span></td>
<td className="align-middle review pe-7">
<p className="fw-semibold text-body-highlight mb-0 line-clamp-2">This Fitbit is fantastic! I was trying to be in better shape and needed some motivation, so I decided to treat myself to a new Fitbit.</p>
</td>
<td className="align-middle status pe-9"><span className="badge badge-phoenix fs-10 badge-phoenix-success">Approaved<span className="ms-1" data-feather="check" style={{height: "12.8px", width: "12.8px"}}></span></span></td>
<td className="align-middle text-end date white-space-nowrap">
<p className="text-body-tertiary mb-0">Just now</p>
</td>
<td className="align-middle white-space-nowrap text-end pe-0">
<div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
<div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
</div>
</div>
</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="align-middle product pe-3"><a className="fw-semibold line-clamp-1" href="/apps/e-commerce/landing/product-details">iPhone 13 pro max-Pacific Blue-128GB storage</a></td>
<td className="align-middle rating white-space-nowrap fs-10"><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa-regular fa-star text-warning-light" data-bs-theme="light"></span></td>
<td className="align-middle review pe-7">
<p className="fw-semibold text-body-highlight mb-0 line-clamp-2">The order was delivered ahead of schedule. To give us additional time, you should leave the packaging sealed with plastic.</p>
</td>
<td className="align-middle status pe-9"><span className="badge badge-phoenix fs-10 badge-phoenix-warning">Pending<span className="ms-1" data-feather="clock" style={{height: "12.8px", width: "12.8px"}}></span></span></td>
<td className="align-middle text-end date white-space-nowrap">
<p className="text-body-tertiary mb-0">Dec 9, 2:28 PM</p>
</td>
<td className="align-middle white-space-nowrap text-end pe-0">
<div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
<div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
</div>
</div>
</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="align-middle product pe-3"><a className="fw-semibold line-clamp-1" href="/apps/e-commerce/landing/product-details">Apple MacBook Pro 13 inch-M1-8/256GB-space</a></td>
<td className="align-middle rating white-space-nowrap fs-10"><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star-half-alt star-icon text-warning"></span></td>
<td className="align-middle review pe-7">
<p className="fw-semibold text-body-highlight mb-0 line-clamp-2">It's a Mac, after all. Once you've gone Mac, there's no going back. My first Mac lasted over nine years, and this is my second.</p>
</td>
<td className="align-middle status pe-9"><span className="badge badge-phoenix fs-10 badge-phoenix-success">Approaved<span className="ms-1" data-feather="check" style={{height: "12.8px", width: "12.8px"}}></span></span></td>
<td className="align-middle text-end date white-space-nowrap">
<p className="text-body-tertiary mb-0">Dec 4, 12:56 PM</p>
</td>
<td className="align-middle white-space-nowrap text-end pe-0">
<div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
<div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
</div>
</div>
</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="align-middle product pe-3"><a className="fw-semibold line-clamp-1" href="/apps/e-commerce/landing/product-details">Apple iMac 24" 4K Retina Display M1 8 Core CPU, 7 Core GPU, 256GB SSD, Green (MJV83ZP/A) 2021</a></td>
<td className="align-middle rating white-space-nowrap fs-10"><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa-regular fa-star text-warning-light" data-bs-theme="light"></span><span className="fa-regular fa-star text-warning-light" data-bs-theme="light"></span></td>
<td className="align-middle review pe-7">
<p className="fw-semibold text-body-highlight mb-0 line-clamp-2">Personally, I like the minimalist style, but I wouldn't choose it if I were searching for a computer that I would use frequently. It's not horrible in terms of speed and power</p>
</td>
<td className="align-middle status pe-9"><span className="badge badge-phoenix fs-10 badge-phoenix-success">Approaved<span className="ms-1" data-feather="check" style={{height: "12.8px", width: "12.8px"}}></span></span></td>
<td className="align-middle text-end date white-space-nowrap">
<p className="text-body-tertiary mb-0">Nov 28, 7:28 PM</p>
</td>
<td className="align-middle white-space-nowrap text-end pe-0">
<div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
<div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
</div>
</div>
</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="align-middle product pe-3"><a className="fw-semibold line-clamp-1" href="/apps/e-commerce/landing/product-details">Razer Kraken v3 x Wired 7.1 Surroung Sound Gaming headset</a></td>
<td className="align-middle rating white-space-nowrap fs-10"><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span></td>
<td className="align-middle review pe-7">
<p className="fw-semibold text-body-highlight mb-0 line-clamp-2">It performs exactly as expected. There are three of these in the family.</p>
</td>
<td className="align-middle status pe-9"><span className="badge badge-phoenix fs-10 badge-phoenix-secondary">Cancelled<span className="ms-1" data-feather="x" style={{height: "12.8px", width: "12.8px"}}></span></span></td>
<td className="align-middle text-end date white-space-nowrap">
<p className="text-body-tertiary mb-0">Nov 24, 10:16 AM</p>
</td>
<td className="align-middle white-space-nowrap text-end pe-0">
<div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
<div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
</div>
</div>
</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="align-middle product pe-3"><a className="fw-semibold line-clamp-1" href="/apps/e-commerce/landing/product-details">PlayStation 5 DualSense Wireless Controller</a></td>
<td className="align-middle rating white-space-nowrap fs-10"><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span></td>
<td className="align-middle review pe-7">
<p className="fw-semibold text-body-highlight mb-0 line-clamp-2">The controller is quite comfy for me. Despite its increased size, the controller still fits well in my hands.</p>
</td>
<td className="align-middle status pe-9"><span className="badge badge-phoenix fs-10 badge-phoenix-success">Approaved<span className="ms-1" data-feather="check" style={{height: "12.8px", width: "12.8px"}}></span></span></td>
<td className="align-middle text-end date white-space-nowrap">
<p className="text-body-tertiary mb-0">Just now</p>
</td>
<td className="align-middle white-space-nowrap text-end pe-0">
<div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
<div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
</div>
</div>
</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="align-middle product pe-3"><a className="fw-semibold line-clamp-1" href="/apps/e-commerce/landing/product-details">2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 128GB) - Space Gray</a></td>
<td className="align-middle rating white-space-nowrap fs-10"><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa-regular fa-star text-warning-light" data-bs-theme="light"></span></td>
<td className="align-middle review pe-7">
<p className="fw-semibold text-body-highlight mb-0 line-clamp-2">The response time and service I received when contacted the designers were Phenomenal!</p>
</td>
<td className="align-middle status pe-9"><span className="badge badge-phoenix fs-10 badge-phoenix-warning">Pending<span className="ms-1" data-feather="fas fa-stopwatch" style={{height: "12.8px", width: "12.8px"}}></span></span></td>
<td className="align-middle text-end date white-space-nowrap">
<p className="text-body-tertiary mb-0">Nov 07, 9:00 PM</p>
</td>
<td className="align-middle white-space-nowrap text-end pe-0">
<div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
<div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
</div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
<div className="col-auto d-flex">
<p className="mb-0 d-none d-sm-block me-3 fw-semibold text-body" data-list-info="data-list-info"></p><a className="fw-semibold" href="#!" data-list-view="*">View all<span className="fas fa-angle-right ms-1" data-fa-transform="down-1"></span></a><a className="fw-semibold d-none" href="#!" data-list-view="less">View Less<span className="fas fa-angle-right ms-1" data-fa-transform="down-1"></span></a>
</div>
<div className="col-auto d-flex"><button className="page-link" data-list-pagination="prev"><span className="fas fa-chevron-left"></span></button>
<ul className="mb-0 pagination"></ul><button className="page-link pe-0" data-list-pagination="next"><span className="fas fa-chevron-right"></span></button>
</div>
</div>
</div>
</div>
<div className="tab-pane fade" id="tab-wishlist" role="tabpanel" aria-labelledby="wishlist-tab">
<div className="border-y border-translucent" id="productWishlistTable" data-list="&#123;&quot;valueNames&quot;:[&quot;products&quot;,&quot;color&quot;,&quot;size&quot;,&quot;price&quot;,&quot;quantity&quot;,&quot;total&quot;],&quot;page&quot;:5,&quot;pagination&quot;:true&#125;">
<div className="table-responsive scrollbar">
<table className="table fs-9 mb-0">
<thead>
<tr>
<th className="sort white-space-nowrap align-middle fs-10" scope="col" style={{width: "7%"}}></th>
<th className="sort white-space-nowrap align-middle" scope="col" style={{width: "30%", minWidth: "250px"}} data-sort="products">PRODUCTS</th>
<th className="sort align-middle" scope="col" data-sort="color" style={{width: "16%"}}>COLOR</th>
<th className="sort align-middle" scope="col" data-sort="size" style={{width: "10%"}}>SIZE</th>
<th className="sort align-middle text-end" scope="col" data-sort="price" style={{width: "10%"}}>PRICE</th>
<th className="sort align-middle text-end pe-0" scope="col" style={{width: "35%"}}> </th>
</tr>
</thead>
<tbody className="list" id="profile-wishlist-table-body">
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="align-middle white-space-nowrap ps-0 py-0"><a className="border border-translucent rounded-2 d-inline-block" href="/apps/e-commerce/landing/product-details"><img src="/site/assets/img/products/1.png" alt="" width="53" /></a></td>
<td className="products align-middle pe-11"><a className="fw-semibold mb-0 line-clamp-1" href="/apps/e-commerce/landing/product-details">Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Management & Skin Temperature Trends, Carbon/Graphite, One Size (S & L Bands)</a></td>
<td className="color align-middle white-space-nowrap fs-9 text-body">Pure matte black</td>
<td className="size align-middle white-space-nowrap text-body-tertiary fs-9 fw-semibold">42</td>
<td className="price align-middle text-body fs-9 fw-semibold text-end">$57</td>
<td className="total align-middle fw-bold text-body-highlight text-end text-nowrap pe-0"><button className="btn btn-sm text-body-quaternary text-body-tertiary-hover me-2"><span className="fas fa-trash"></span></button>
<button className="btn btn-primary fs-10"><span className="fas fa-shopping-cart me-1 fs-10"></span>Add to cart</button>
</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="align-middle white-space-nowrap ps-0 py-0"><a className="border border-translucent rounded-2 d-inline-block" href="/apps/e-commerce/landing/product-details"><img src="/site/assets/img/products/7.png" alt="" width="53" /></a></td>
<td className="products align-middle pe-11"><a className="fw-semibold mb-0 line-clamp-1" href="/apps/e-commerce/landing/product-details">2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 128GB) - Space Gray</a></td>
<td className="color align-middle white-space-nowrap fs-9 text-body">Black</td>
<td className="size align-middle white-space-nowrap text-body-tertiary fs-9 fw-semibold">Pro</td>
<td className="price align-middle text-body fs-9 fw-semibold text-end">$1,499</td>
<td className="total align-middle fw-bold text-body-highlight text-end text-nowrap pe-0"><button className="btn btn-sm text-body-quaternary text-body-tertiary-hover me-2"><span className="fas fa-trash"></span></button>
<button className="btn btn-primary fs-10"><span className="fas fa-shopping-cart me-1 fs-10"></span>Add to cart</button>
</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="align-middle white-space-nowrap ps-0 py-0"><a className="border border-translucent rounded-2 d-inline-block" href="/apps/e-commerce/landing/product-details"><img src="/site/assets/img/products/6.png" alt="" width="53" /></a></td>
<td className="products align-middle pe-11"><a className="fw-semibold mb-0 line-clamp-1" href="/apps/e-commerce/landing/product-details">PlayStation 5 DualSense Wireless Controller</a></td>
<td className="color align-middle white-space-nowrap fs-9 text-body">White</td>
<td className="size align-middle white-space-nowrap text-body-tertiary fs-9 fw-semibold">Regular</td>
<td className="price align-middle text-body fs-9 fw-semibold text-end">$299</td>
<td className="total align-middle fw-bold text-body-highlight text-end text-nowrap pe-0"><button className="btn btn-sm text-body-quaternary text-body-tertiary-hover me-2"><span className="fas fa-trash"></span></button>
<button className="btn btn-primary fs-10"><span className="fas fa-shopping-cart me-1 fs-10"></span>Add to cart</button>
</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="align-middle white-space-nowrap ps-0 py-0"><a className="border border-translucent rounded-2 d-inline-block" href="/apps/e-commerce/landing/product-details"><img src="/site/assets/img/products/3.png" alt="" width="53" /></a></td>
<td className="products align-middle pe-11"><a className="fw-semibold mb-0 line-clamp-1" href="/apps/e-commerce/landing/product-details">Apple MacBook Pro 13 inch-M1-8/256GB-space</a></td>
<td className="color align-middle white-space-nowrap fs-9 text-body">Space Gray</td>
<td className="size align-middle white-space-nowrap text-body-tertiary fs-9 fw-semibold">Pro</td>
<td className="price align-middle text-body fs-9 fw-semibold text-end">$1,699</td>
<td className="total align-middle fw-bold text-body-highlight text-end text-nowrap pe-0"><button className="btn btn-sm text-body-quaternary text-body-tertiary-hover me-2"><span className="fas fa-trash"></span></button>
<button className="btn btn-primary fs-10"><span className="fas fa-shopping-cart me-1 fs-10"></span>Add to cart</button>
</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="align-middle white-space-nowrap ps-0 py-0"><a className="border border-translucent rounded-2 d-inline-block" href="/apps/e-commerce/landing/product-details"><img src="/site/assets/img/products/4.png" alt="" width="53" /></a></td>
<td className="products align-middle pe-11"><a className="fw-semibold mb-0 line-clamp-1" href="/apps/e-commerce/landing/product-details">Apple iMac 24" 4K Retina Display M1 8 Core CPU, 7 Core GPU, 256GB SSD, Green (MJV83ZP/A) 2021</a></td>
<td className="color align-middle white-space-nowrap fs-9 text-body">Ocean Blue</td>
<td className="size align-middle white-space-nowrap text-body-tertiary fs-9 fw-semibold">21"</td>
<td className="price align-middle text-body fs-9 fw-semibold text-end">$65</td>
<td className="total align-middle fw-bold text-body-highlight text-end text-nowrap pe-0"><button className="btn btn-sm text-body-quaternary text-body-tertiary-hover me-2"><span className="fas fa-trash"></span></button>
<button className="btn btn-primary fs-10"><span className="fas fa-shopping-cart me-1 fs-10"></span>Add to cart</button>
</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="align-middle white-space-nowrap ps-0 py-0"><a className="border border-translucent rounded-2 d-inline-block" href="/apps/e-commerce/landing/product-details"><img src="/site/assets/img/products/10.png" alt="" width="53" /></a></td>
<td className="products align-middle pe-11"><a className="fw-semibold mb-0 line-clamp-1" href="/apps/e-commerce/landing/product-details">Apple Magic Mouse (Wireless, Rechargable) - Silver</a></td>
<td className="color align-middle white-space-nowrap fs-9 text-body">White</td>
<td className="size align-middle white-space-nowrap text-body-tertiary fs-9 fw-semibold">Regular</td>
<td className="price align-middle text-body fs-9 fw-semibold text-end">$30</td>
<td className="total align-middle fw-bold text-body-highlight text-end text-nowrap pe-0"><button className="btn btn-sm text-body-quaternary text-body-tertiary-hover me-2"><span className="fas fa-trash"></span></button>
<button className="btn btn-primary fs-10"><span className="fas fa-shopping-cart me-1 fs-10"></span>Add to cart</button>
</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="align-middle white-space-nowrap ps-0 py-0"><a className="border border-translucent rounded-2 d-inline-block" href="/apps/e-commerce/landing/product-details"><img src="/site/assets/img/products/8.png" alt="" width="53" /></a></td>
<td className="products align-middle pe-11"><a className="fw-semibold mb-0 line-clamp-1" href="/apps/e-commerce/landing/product-details">Amazon Basics Matte Black Wired Keyboard - US Layout (QWERTY)</a></td>
<td className="color align-middle white-space-nowrap fs-9 text-body">Black</td>
<td className="size align-middle white-space-nowrap text-body-tertiary fs-9 fw-semibold">MD</td>
<td className="price align-middle text-body fs-9 fw-semibold text-end">$40</td>
<td className="total align-middle fw-bold text-body-highlight text-end text-nowrap pe-0"><button className="btn btn-sm text-body-quaternary text-body-tertiary-hover me-2"><span className="fas fa-trash"></span></button>
<button className="btn btn-primary fs-10"><span className="fas fa-shopping-cart me-1 fs-10"></span>Add to cart</button>
</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="align-middle white-space-nowrap ps-0 py-0"><a className="border border-translucent rounded-2 d-inline-block" href="/apps/e-commerce/landing/product-details"><img src="/site/assets/img/products/12.png" alt="" width="53" /></a></td>
<td className="products align-middle pe-11"><a className="fw-semibold mb-0 line-clamp-1" href="/apps/e-commerce/landing/product-details">HORI Racing Wheel Apex for PlayStation 4_3, and PC</a></td>
<td className="color align-middle white-space-nowrap fs-9 text-body">Black</td>
<td className="size align-middle white-space-nowrap text-body-tertiary fs-9 fw-semibold">45</td>
<td className="price align-middle text-body fs-9 fw-semibold text-end">$130</td>
<td className="total align-middle fw-bold text-body-highlight text-end text-nowrap pe-0"><button className="btn btn-sm text-body-quaternary text-body-tertiary-hover me-2"><span className="fas fa-trash"></span></button>
<button className="btn btn-primary fs-10"><span className="fas fa-shopping-cart me-1 fs-10"></span>Add to cart</button>
</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="align-middle white-space-nowrap ps-0 py-0"><a className="border border-translucent rounded-2 d-inline-block" href="/apps/e-commerce/landing/product-details"><img src="/site/assets/img/products/17.png" alt="" width="53" /></a></td>
<td className="products align-middle pe-11"><a className="fw-semibold mb-0 line-clamp-1" href="/apps/e-commerce/landing/product-details">Xbox Series S</a></td>
<td className="color align-middle white-space-nowrap fs-9 text-body">Space Gray</td>
<td className="size align-middle white-space-nowrap text-body-tertiary fs-9 fw-semibold">sm</td>
<td className="price align-middle text-body fs-9 fw-semibold text-end">$99</td>
<td className="total align-middle fw-bold text-body-highlight text-end text-nowrap pe-0"><button className="btn btn-sm text-body-quaternary text-body-tertiary-hover me-2"><span className="fas fa-trash"></span></button>
<button className="btn btn-primary fs-10"><span className="fas fa-shopping-cart me-1 fs-10"></span>Add to cart</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
<div className="col-auto d-flex">
<p className="mb-0 d-none d-sm-block me-3 fw-semibold text-body" data-list-info="data-list-info"></p><a className="fw-semibold" href="#!" data-list-view="*">View all<span className="fas fa-angle-right ms-1" data-fa-transform="down-1"></span></a><a className="fw-semibold d-none" href="#!" data-list-view="less">View Less<span className="fas fa-angle-right ms-1" data-fa-transform="down-1"></span></a>
</div>
<div className="col-auto d-flex"><button className="page-link" data-list-pagination="prev"><span className="fas fa-chevron-left"></span></button>
<ul className="mb-0 pagination"></ul><button className="page-link pe-0" data-list-pagination="next"><span className="fas fa-chevron-right"></span></button>
</div>
</div>
</div>
</div>
<div className="tab-pane fade" id="tab-stores" role="tabpanel" aria-labelledby="wishlist-tab">
<div className="border-y border-translucent mb-6" id="profileStoreTable" data-list="&#123;&quot;valueNames&quot;:[&quot;products&quot;,&quot;color&quot;,&quot;size&quot;,&quot;price&quot;,&quot;quantity&quot;,&quot;total&quot;],&quot;page&quot;:5,&quot;pagination&quot;:true&#125;">
<div className="table-responsive scrollbar">
<table className="table table-sm fs-9 mb-0">
<thead>
<tr>
<th className="sort white-space-nowrap align-middle fs-10" scope="col" style={{width: "7%", minWidth: "80px"}}></th>
<th className="sort white-space-nowrap align-middle" scope="col" style={{width: "20%", minWidth: "150px"}} data-sort="products">VENDOR</th>
<th className="sort align-middle" scope="col" data-sort="color" style={{width: "15%", minWidth: "150px"}}>STORE RATING</th>
<th className="sort align-middle text-end" scope="col" data-sort="price" style={{width: "12%", minWidth: "150px"}}>ORDERS</th>
<th className="sort align-middle text-end" scope="col" data-sort="size" style={{width: "15%", minWidth: "150px"}}>TOTAL SPENT</th>
<th className="sort align-middle text-end" scope="col" data-sort="price" style={{width: "15%", minWidth: "150px"}}>LAST ORDER</th>
<th className="sort align-middle text-end pe-0" scope="col" style={{width: "30%", minWidth: "150px"}}> </th>
</tr>
</thead>
<tbody className="list" id="profile-stores-table-body">
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="align-middle white-space-nowrap ps-0 py-0"><a href="#!"> <img src="/site/assets/img/brand2/dell.png" alt="" width="53" /></a></td>
<td className="products align-middle"><a className="fw-semibold mb-0" href="#!">Dell Technologies</a></td>
<td className="color align-middle white-space-nowrap fs-9 text-body"><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span></td>
<td className="size align-middle white-space-nowrap text-primary fs-9 fw-bold text-end">3</td>
<td className="price align-middle text-end text-body fw-semibold">$ 23987</td>
<td className="price align-middle text-body-tertiary fs-9 text-end">Dec 12, 12:56 PM</td>
<td className="total align-middle fw-bold text-body-highlight text-end">
<div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
<div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
</div>
</div>
</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="align-middle white-space-nowrap ps-0 py-0"><a href="#!"> <img src="/site/assets/img/brand2/honda.png" alt="" width="53" /></a></td>
<td className="products align-middle"><a className="fw-semibold mb-0" href="#!">Honda</a></td>
<td className="color align-middle white-space-nowrap fs-9 text-body"><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa-regular fa-star text-warning-light" data-bs-theme="light"></span><span className="fa-regular fa-star text-warning-light" data-bs-theme="light"></span></td>
<td className="size align-middle white-space-nowrap text-primary fs-9 fw-bold text-end">5</td>
<td className="price align-middle text-end text-body fw-semibold">$ 1250</td>
<td className="price align-middle text-body-tertiary fs-9 text-end">Dec 09, 10:48 AM</td>
<td className="total align-middle fw-bold text-body-highlight text-end">
<div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
<div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
</div>
</div>
</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="align-middle white-space-nowrap ps-0 py-0"><a href="#!"> <img src="/site/assets/img/brand2/xiaomi.png" alt="" width="53" /></a></td>
<td className="products align-middle"><a className="fw-semibold mb-0" href="#!">Xiaomi</a></td>
<td className="color align-middle white-space-nowrap fs-9 text-body"><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa-regular fa-star text-warning-light" data-bs-theme="light"></span><span className="fa-regular fa-star text-warning-light" data-bs-theme="light"></span></td>
<td className="size align-middle white-space-nowrap text-primary fs-9 fw-bold text-end">6</td>
<td className="price align-middle text-end text-body fw-semibold">$ 360</td>
<td className="price align-middle text-body-tertiary fs-9 text-end">Dec 03, 05:45 PM</td>
<td className="total align-middle fw-bold text-body-highlight text-end">
<div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
<div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
</div>
</div>
</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="align-middle white-space-nowrap ps-0 py-0"><a href="#!"> <img src="/site/assets/img/brand/huawei.png" alt="" width="53" /></a></td>
<td className="products align-middle"><a className="fw-semibold mb-0" href="#!">Huawei Shop BD</a></td>
<td className="color align-middle white-space-nowrap fs-9 text-body"><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa-regular fa-star text-warning-light" data-bs-theme="light"></span><span className="fa-regular fa-star text-warning-light" data-bs-theme="light"></span></td>
<td className="size align-middle white-space-nowrap text-primary fs-9 fw-bold text-end">1</td>
<td className="price align-middle text-end text-body fw-semibold">$1,799</td>
<td className="price align-middle text-body-tertiary fs-9 text-end">Nov 27, 06:20 PM</td>
<td className="total align-middle fw-bold text-body-highlight text-end">
<div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
<div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
</div>
</div>
</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="align-middle white-space-nowrap ps-0 py-0"><a href="#!"> <img src="/site/assets/img/brand2/intel-2.png" alt="" width="53" /></a></td>
<td className="products align-middle"><a className="fw-semibold mb-0" href="#!">Intel</a></td>
<td className="color align-middle white-space-nowrap fs-9 text-body"><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa-regular fa-star text-warning-light" data-bs-theme="light"></span></td>
<td className="size align-middle white-space-nowrap text-primary fs-9 fw-bold text-end">2</td>
<td className="price align-middle text-end text-body fw-semibold">$65</td>
<td className="price align-middle text-body-tertiary fs-9 text-end">Nov 21, 10:25 AM</td>
<td className="total align-middle fw-bold text-body-highlight text-end">
<div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
<div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
</div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
<div className="col-auto d-flex">
<p className="mb-0 d-none d-sm-block me-3 fw-semibold text-body" data-list-info="data-list-info"></p><a className="fw-semibold" href="#!" data-list-view="*">View all<span className="fas fa-angle-right ms-1" data-fa-transform="down-1"></span></a><a className="fw-semibold d-none" href="#!" data-list-view="less">View Less<span className="fas fa-angle-right ms-1" data-fa-transform="down-1"></span></a>
</div>
<div className="col-auto d-flex"><button className="page-link" data-list-pagination="prev"><span className="fas fa-chevron-left"></span></button>
<ul className="mb-0 pagination"></ul><button className="page-link pe-0" data-list-pagination="next"><span className="fas fa-chevron-right"></span></button>
</div>
</div>
</div>
<div className="d-flex flex-between-center mb-5">
<div>
<h3 className="text-body-emphasis mb-2">My Favourite Stores</h3>
<h5 className="text-body-tertiary fw-semibold">Essential for a better life</h5>
</div><button className="btn btn-phoenix-primary">View all</button>
</div>
<div className="row gx-3 gy-5">
<div className="col-6 col-sm-4 col-md-3 col-lg-2 hover-actions-trigger btn-reveal-trigger">
<div className="border border-translucent d-flex flex-center rounded-3 mb-3 p-4" style={{height: "180px"}}><img className="mw-100" src="/site/assets/img/brand2/dell.png" alt="Dell Technologies" /></div>
<h5 className="mb-2">Dell Technologies</h5>
<div className="mb-1 fs-9"><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa-regular fa-star text-warning-light" data-bs-theme="light"></span></div>
<p className="text-body-quaternary fs-9 mb-2 fw-semibold">(1263 people rated)</p><a className="btn btn-link p-0" href="#!">Visit Store<span className="fas fa-chevron-right ms-1 fs-10"></span></a>
<div className="hover-actions top-0 end-0 mt-2 me-3">
<div className="btn-reveal-trigger"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal lh-1 bg-body-highlight rounded-1" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-9"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
<div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
</div>
</div>
</div>
</div>
<div className="col-6 col-sm-4 col-md-3 col-lg-2 hover-actions-trigger btn-reveal-trigger">
<div className="border border-translucent d-flex flex-center rounded-3 mb-3 p-4" style={{height: "180px"}}><img className="mw-100" src="/site/assets/img/brand2/hp.png" alt="HP Global Store" /></div>
<h5 className="mb-2">HP Global Store</h5>
<div className="mb-1 fs-9"><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa-regular fa-star text-warning-light" data-bs-theme="light"></span><span className="fa-regular fa-star text-warning-light" data-bs-theme="light"></span></div>
<p className="text-body-quaternary fs-9 mb-2 fw-semibold">(365 people rated)</p><a className="btn btn-link p-0" href="#!">Visit Store<span className="fas fa-chevron-right ms-1 fs-10"></span></a>
<div className="hover-actions top-0 end-0 mt-2 me-3">
<div className="btn-reveal-trigger"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal lh-1 bg-body-highlight rounded-1" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-9"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
<div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
</div>
</div>
</div>
</div>
<div className="col-6 col-sm-4 col-md-3 col-lg-2 hover-actions-trigger btn-reveal-trigger">
<div className="border border-translucent d-flex flex-center rounded-3 mb-3 p-4" style={{height: "180px"}}><img className="mw-100" src="/site/assets/img/brand2/honda.png" alt="Honda" /></div>
<h5 className="mb-2">Honda</h5>
<div className="mb-1 fs-9"><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span></div>
<p className="text-body-quaternary fs-9 mb-2 fw-semibold">(596 people rated)</p><a className="btn btn-link p-0" href="#!">Visit Store<span className="fas fa-chevron-right ms-1 fs-10"></span></a>
<div className="hover-actions top-0 end-0 mt-2 me-3">
<div className="btn-reveal-trigger"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal lh-1 bg-body-highlight rounded-1" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-9"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
<div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
</div>
</div>
</div>
</div>
<div className="col-6 col-sm-4 col-md-3 col-lg-2 hover-actions-trigger btn-reveal-trigger">
<div className="border border-translucent d-flex flex-center rounded-3 mb-3 p-4" style={{height: "180px"}}><img className="mw-100" src="/site/assets/img/brand2/asus-rog.png" alt="Asus ROG" /></div>
<h5 className="mb-2">Asus ROG</h5>
<div className="mb-1 fs-9"><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa-regular fa-star text-warning-light" data-bs-theme="light"></span><span className="fa-regular fa-star text-warning-light" data-bs-theme="light"></span></div>
<p className="text-body-quaternary fs-9 mb-2 fw-semibold">(2365 people rated)</p><a className="btn btn-link p-0" href="#!">Visit Store<span className="fas fa-chevron-right ms-1 fs-10"></span></a>
<div className="hover-actions top-0 end-0 mt-2 me-3">
<div className="btn-reveal-trigger"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal lh-1 bg-body-highlight rounded-1" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-9"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
<div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
</div>
</div>
</div>
</div>
<div className="col-6 col-sm-4 col-md-3 col-lg-2 hover-actions-trigger btn-reveal-trigger">
<div className="border border-translucent d-flex flex-center rounded-3 mb-3 p-4" style={{height: "180px"}}><img className="mw-100" src="/site/assets/img/brand2/yamaha.png" alt="Yamaha" /></div>
<h5 className="mb-2">Yamaha</h5>
<div className="mb-1 fs-9"><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span></div>
<p className="text-body-quaternary fs-9 mb-2 fw-semibold">(1253 people rated)</p><a className="btn btn-link p-0" href="#!">Visit Store<span className="fas fa-chevron-right ms-1 fs-10"></span></a>
<div className="hover-actions top-0 end-0 mt-2 me-3">
<div className="btn-reveal-trigger"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal lh-1 bg-body-highlight rounded-1" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-9"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
<div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
</div>
</div>
</div>
</div>
<div className="col-6 col-sm-4 col-md-3 col-lg-2 hover-actions-trigger btn-reveal-trigger">
<div className="border border-translucent d-flex flex-center rounded-3 mb-3 p-4" style={{height: "180px"}}><img className="mw-100" src="/site/assets/img/brand2/ibm.png" alt="IBM" /></div>
<h5 className="mb-2">IBM</h5>
<div className="mb-1 fs-9"><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa-regular fa-star text-warning-light" data-bs-theme="light"></span><span className="fa-regular fa-star text-warning-light" data-bs-theme="light"></span></div>
<p className="text-body-quaternary fs-9 mb-2 fw-semibold">(996 people rated)</p><a className="btn btn-link p-0" href="#!">Visit Store<span className="fas fa-chevron-right ms-1 fs-10"></span></a>
<div className="hover-actions top-0 end-0 mt-2 me-3">
<div className="btn-reveal-trigger"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal lh-1 bg-body-highlight rounded-1" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-9"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
<div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
</div>
</div>
</div>
</div>
<div className="col-6 col-sm-4 col-md-3 col-lg-2 hover-actions-trigger btn-reveal-trigger">
<div className="border border-translucent d-flex flex-center rounded-3 mb-3 p-4" style={{height: "180px"}}><img className="mw-100" src="/site/assets/img/brand2/apple-2.png" alt="Apple Store" /></div>
<h5 className="mb-2">Apple Store</h5>
<div className="mb-1 fs-9"><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa-regular fa-star text-warning-light" data-bs-theme="light"></span><span className="fa-regular fa-star text-warning-light" data-bs-theme="light"></span></div>
<p className="text-body-quaternary fs-9 mb-2 fw-semibold">(365 people rated)</p><a className="btn btn-link p-0" href="#!">Visit Store<span className="fas fa-chevron-right ms-1 fs-10"></span></a>
<div className="hover-actions top-0 end-0 mt-2 me-3">
<div className="btn-reveal-trigger"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal lh-1 bg-body-highlight rounded-1" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-9"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
<div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
</div>
</div>
</div>
</div>
<div className="col-6 col-sm-4 col-md-3 col-lg-2 hover-actions-trigger btn-reveal-trigger">
<div className="border border-translucent d-flex flex-center rounded-3 mb-3 p-4" style={{height: "180px"}}><img className="mw-100" src="/site/assets/img/brand2/oppo.png" alt="Oppo" /></div>
<h5 className="mb-2">Oppo</h5>
<div className="mb-1 fs-9"><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa-regular fa-star text-warning-light" data-bs-theme="light"></span><span className="fa-regular fa-star text-warning-light" data-bs-theme="light"></span></div>
<p className="text-body-quaternary fs-9 mb-2 fw-semibold">(576 people rated)</p><a className="btn btn-link p-0" href="#!">Visit Store<span className="fas fa-chevron-right ms-1 fs-10"></span></a>
<div className="hover-actions top-0 end-0 mt-2 me-3">
<div className="btn-reveal-trigger"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal lh-1 bg-body-highlight rounded-1" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-9"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
<div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
</div>
</div>
</div>
</div>
<div className="col-6 col-sm-4 col-md-3 col-lg-2 hover-actions-trigger btn-reveal-trigger">
<div className="border border-translucent d-flex flex-center rounded-3 mb-3 p-4" style={{height: "180px"}}><img className="mw-100" src="/site/assets/img/brand2/redragon.png" alt="Redragon" /></div>
<h5 className="mb-2">Redragon</h5>
<div className="mb-1 fs-9"><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa-regular fa-star text-warning-light" data-bs-theme="light"></span><span className="fa-regular fa-star text-warning-light" data-bs-theme="light"></span><span className="fa-regular fa-star text-warning-light" data-bs-theme="light"></span></div>
<p className="text-body-quaternary fs-9 mb-2 fw-semibold">(1125 people rated)</p><a className="btn btn-link p-0" href="#!">Visit Store<span className="fas fa-chevron-right ms-1 fs-10"></span></a>
<div className="hover-actions top-0 end-0 mt-2 me-3">
<div className="btn-reveal-trigger"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal lh-1 bg-body-highlight rounded-1" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-9"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
<div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
</div>
</div>
</div>
</div>
<div className="col-6 col-sm-4 col-md-3 col-lg-2 hover-actions-trigger btn-reveal-trigger">
<div className="border border-translucent d-flex flex-center rounded-3 mb-3 p-4" style={{height: "180px"}}><img className="mw-100" src="/site/assets/img/brand2/xbox.png" alt="Microsoft XBOX" /></div>
<h5 className="mb-2">Microsoft XBOX</h5>
<div className="mb-1 fs-9"><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa-regular fa-star text-warning-light" data-bs-theme="light"></span></div>
<p className="text-body-quaternary fs-9 mb-2 fw-semibold">(830 people rated)</p><a className="btn btn-link p-0" href="#!">Visit Store<span className="fas fa-chevron-right ms-1 fs-10"></span></a>
<div className="hover-actions top-0 end-0 mt-2 me-3">
<div className="btn-reveal-trigger"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal lh-1 bg-body-highlight rounded-1" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-9"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
<div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
</div>
</div>
</div>
</div>
<div className="col-6 col-sm-4 col-md-3 col-lg-2 hover-actions-trigger btn-reveal-trigger">
<div className="border border-translucent d-flex flex-center rounded-3 mb-3 p-4" style={{height: "180px"}}><img className="mw-100" src="/site/assets/img/brand2/lenovo.png" alt="Lenovo" /></div>
<h5 className="mb-2">Lenovo</h5>
<div className="mb-1 fs-9"><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa-regular fa-star text-warning-light" data-bs-theme="light"></span><span className="fa-regular fa-star text-warning-light" data-bs-theme="light"></span></div>
<p className="text-body-quaternary fs-9 mb-2 fw-semibold">(1032 people rated)</p><a className="btn btn-link p-0" href="#!">Visit Store<span className="fas fa-chevron-right ms-1 fs-10"></span></a>
<div className="hover-actions top-0 end-0 mt-2 me-3">
<div className="btn-reveal-trigger"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal lh-1 bg-body-highlight rounded-1" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-9"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
<div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
</div>
</div>
</div>
</div>
<div className="col-6 col-sm-4 col-md-3 col-lg-2 hover-actions-trigger btn-reveal-trigger">
<div className="border border-translucent d-flex flex-center rounded-3 mb-3 p-4" style={{height: "180px"}}><img className="mw-100" src="/site/assets/img/brand2/xiaomi.png" alt="Xiaomi" /></div>
<h5 className="mb-2">Xiaomi</h5>
<div className="mb-1 fs-9"><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa-regular fa-star text-warning-light" data-bs-theme="light"></span><span className="fa-regular fa-star text-warning-light" data-bs-theme="light"></span></div>
<p className="text-body-quaternary fs-9 mb-2 fw-semibold">(965 people rated)</p><a className="btn btn-link p-0" href="#!">Visit Store<span className="fas fa-chevron-right ms-1 fs-10"></span></a>
<div className="hover-actions top-0 end-0 mt-2 me-3">
<div className="btn-reveal-trigger"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal lh-1 bg-body-highlight rounded-1" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-9"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
<div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="tab-pane fade" id="tab-personal-info" role="tabpanel" aria-labelledby="personal-info-tab">
<div className="row gx-3 gy-4 mb-5">
<div className="col-12 col-lg-6"><label className="form-label text-body-highlight fs-8 ps-0 text-capitalize lh-sm" htmlFor="fullName">Full name</label><input className="form-control" id="fullName" type="text" placeholder="Full name" /></div>
<div className="col-12 col-lg-6"><label className="form-label text-body-highlight fs-8 ps-0 text-capitalize lh-sm" htmlFor="gender">Gender</label><select className="form-select" id="gender">
<option value="male">Male</option>
<option value="female">Female</option>
<option value="non-binary">Non-binary</option>
<option value="not-to-say">Prefer not to say</option>
</select></div>
<div className="col-12 col-lg-6"><label className="form-label text-body-highlight fs-8 ps-0 text-capitalize lh-sm" htmlFor="email">Email</label><input className="form-control" id="email" type="text" placeholder="Email" /></div>
<div className="col-12 col-lg-6">
<div className="row g-2 gy-lg-0"><label className="form-label text-body-highlight fs-8 ps-1 text-capitalize lh-sm mb-1">Date of birth</label>
<div className="col-6 col-sm-2 col-lg-3 col-xl-2"><select className="form-select" id="date">
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
<option value="9">9</option>
<option value="10">10</option>
<option value="11">11</option>
<option value="12">12</option>
<option value="13">13</option>
<option value="14">14</option>
<option value="15">15</option>
<option value="16">16</option>
<option value="17">17</option>
<option value="18">18</option>
<option value="19">19</option>
<option value="20">20</option>
<option value="21">21</option>
<option value="22">22</option>
<option value="23">23</option>
<option value="24">24</option>
<option value="25">25</option>
<option value="26">26</option>
<option value="27">27</option>
<option value="28">28</option>
<option value="29">29</option>
<option value="30">30</option>
</select></div>
<div className="col-6 col-sm-2 col-lg-3 col-xl-2"><select className="form-select" id="month">
<option value="Jan">Jan</option>
<option value="Feb">Feb</option>
<option value="Mar">Mar</option>
<option value="Apr">Apr</option>
<option value="May">May</option>
<option value="Jun">Jun</option>
<option value="Jul">Jul</option>
<option value="Aug">Aug</option>
<option value="Sep">Sep</option>
<option value="Oct">Oct</option>
<option value="Nov">Nov</option>
<option value="Dec">Dec</option>
</select></div>
<div className="col-12 col-sm-8 col-lg-6 col-xl-8"><select className="form-select" id="year">
<option value="1990">1990</option>
<option value="1991">1991</option>
<option value="1992">1992</option>
<option value="1993">1993</option>
<option value="1994">1994</option>
<option value="1995">1995</option>
<option value="1996">1996</option>
<option value="1997">1997</option>
<option value="1998">1998</option>
<option value="1999">1999</option>
<option value="2000">2000</option>
<option value="2001">2001</option>
<option value="2002">2002</option>
<option value="2003">2003</option>
<option value="2004">2004</option>
<option value="2005">2005</option>
<option value="2006">2006</option>
<option value="2007">2007</option>
<option value="2008">2008</option>
<option value="2009">2009</option>
<option value="2010">2010</option>
<option value="2011">2011</option>
<option value="2012">2012</option>
<option value="2013">2013</option>
<option value="2014">2014</option>
<option value="2015">2015</option>
<option value="2016">2016</option>
<option value="2017">2017</option>
<option value="2018">2018</option>
<option value="2019">2019</option>
<option value="2020">2020</option>
<option value="2021">2021</option>
<option value="2022">2022</option>
</select></div>
</div>
</div>
<div className="col-12 col-lg-6"><label className="form-label text-body-highlight fw-bold fs-8 ps-0 text-capitalize lh-sm" htmlFor="phone">Phone</label><input className="form-control" id="phone" type="text" placeholder="+1234567890" /></div>
<div className="col-12 col-lg-6"><label className="form-label text-body-highlight fw-bold fs-8 ps-0 text-capitalize lh-sm" htmlFor="alternative_phone">Alternative phone</label><input className="form-control" id="alternative_phone" type="text" placeholder="+1234567890" /></div>
<div className="col-12 col-lg-4"><label className="form-label text-body-highlight fw-bold fs-8 ps-0 text-capitalize lh-sm" htmlFor="facebook">Facebook</label><input className="form-control" id="facebook" type="text" placeholder="Facebook" /></div>
<div className="col-12 col-lg-4"><label className="form-label text-body-highlight fw-bold fs-8 ps-0 text-capitalize lh-sm" htmlFor="instagram">Instagram</label><input className="form-control" id="instagram" type="text" placeholder="Instagram" /></div>
<div className="col-12 col-lg-4"><label className="form-label text-body-highlight fw-bold fs-8 ps-0 text-capitalize lh-sm" htmlFor="twitter">Twitter</label><input className="form-control" id="twitter" type="text" placeholder="Twitter" /></div>
</div>
<div className="text-end"><button className="btn btn-primary px-7">Save changes</button></div>
</div>
</div>
</div>
</div>
</section>

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


<section className="bg-body-highlight dark__bg-gray-1100 py-9">
<div className="container-small">
<div className="row justify-content-between gy-4">
<div className="col-12 col-lg-4">
<div className="d-flex align-items-center mb-3"><img src="/site/assets/img/icons/logo.png" alt="phoenix" width="27" />
<h5 className="logo-text ms-2">phoenix</h5>
</div>
<p className="text-body-tertiary mb-1 fw-semibold lh-sm fs-9">Phoenix is an admin dashboard template with fascinating features and amazing layout. The template is responsive to all major browsers and is compatible with all available devices and screen sizes.</p>
</div>
<div className="col-6 col-md-auto">
<h5 className="fw-bolder mb-3">About Phoenix</h5>
<div className="d-flex flex-column"><a className="text-body-tertiary fw-semibold fs-9 mb-1" href="#!">Careers</a><a className="text-body-tertiary fw-semibold fs-9 mb-1" href="#!">Affiliate Program</a><a className="text-body-tertiary fw-semibold fs-9 mb-1" href="#!">Privacy Policy</a><a className="text-body-tertiary fw-semibold fs-9 mb-1" href="#!">Terms & Conditions</a></div>
</div>
<div className="col-6 col-md-auto">
<h5 className="fw-bolder mb-3">Stay Connected</h5>
<div className="d-flex flex-column"><a className="text-body-tertiary fw-semibold fs-9 mb-1" href="#!">Blogs</a><a className="mb-1 fw-semibold fs-9 d-flex" href="#!"><span className="fab fa-facebook-square text-primary me-2 fs-8"></span><span className="text-body-secondary">Facebook</span></a><a className="mb-1 fw-semibold fs-9 d-flex" href="#!"><span className="fab fa-twitter-square text-info me-2 fs-8"></span><span className="text-body-secondary">Twitter</span></a></div>
</div>
<div className="col-6 col-md-auto">
<h5 className="fw-bolder mb-3">Customer Service</h5>
<div className="d-flex flex-column"><a className="text-body-tertiary fw-semibold fs-9 mb-1" href="#!">Help Desk</a><a className="text-body-tertiary fw-semibold fs-9 mb-1" href="#!">Support, 24/7</a><a className="text-body-tertiary fw-semibold fs-9 mb-1" href="#!">Community of Phoenix</a></div>
</div>
<div className="col-6 col-md-auto">
<h5 className="fw-bolder mb-3">Payment Method</h5>
<div className="d-flex flex-column"><a className="text-body-tertiary fw-semibold fs-9 mb-1" href="#!">Cash on Delivery</a><a className="text-body-tertiary fw-semibold fs-9 mb-1" href="#!">Online Payment</a><a className="text-body-tertiary fw-semibold fs-9 mb-1" href="#!">PayPal</a><a className="text-body-tertiary fw-semibold fs-9 mb-1" href="#!">Installment</a></div>
</div>
</div>
</div>
</section>

<footer className="footer position-relative">
<div className="row g-0 justify-content-between align-items-center h-100">
<div className="col-12 col-sm-auto text-center">
<p className="mb-0 mt-2 mt-sm-0 text-body">Thank you for creating with Phoenix<span className="d-none d-sm-inline-block"></span><span className="d-none d-sm-inline-block mx-1">|</span><br className="d-sm-none" />2025 ©<a className="mx-1" href="https://themewagon.com/">Themewagon</a></p>
</div>
<div className="col-12 col-sm-auto text-center">
<p className="mb-0 text-body-tertiary text-opacity-85">v1.24.0</p>
</div>
</div>
</footer>
</main>


<div className="offcanvas offcanvas-end settings-panel border-0" id="settings-offcanvas" tabIndex="-1" aria-labelledby="settings-offcanvas">
<div className="offcanvas-header align-items-start border-bottom flex-column border-translucent">
<div className="pt-1 w-100 mb-6 d-flex justify-content-between align-items-start">
<div>
<h5 className="mb-2 me-2 lh-sm"><span className="fas fa-palette me-2 fs-8"></span>Theme Customizer</h5>
<p className="mb-0 fs-9">Explore different styles according to your preferences</p>
</div><button className="btn p-1 fw-bolder" type="button" data-bs-dismiss="offcanvas" aria-label="Close"><span className="fas fa-times fs-8"> </span></button>
</div><button className="btn btn-phoenix-secondary w-100" data-theme-control="reset"><span className="fas fa-arrows-rotate me-2 fs-10"></span>Reset to default</button>
</div>
<div className="offcanvas-body scrollbar px-card" id="themeController">
<div className="setting-panel-item mt-0">
<h5 className="setting-panel-item-title">Color Scheme</h5>
<div className="row gx-2">
<div className="col-4"><input className="btn-check" id="themeSwitcherLight" name="theme-color" type="radio" value="light" data-theme-control="phoenixTheme" /><label className="btn d-inline-block btn-navbar-style fs-9" htmlFor="themeSwitcherLight"> <span className="mb-2 rounded d-block"><img className="img-fluid img-prototype mb-0" src="/site/assets/img/generic/default-light.png" alt="" /></span><span className="label-text">Light</span></label></div>
<div className="col-4"><input className="btn-check" id="themeSwitcherDark" name="theme-color" type="radio" value="dark" data-theme-control="phoenixTheme" /><label className="btn d-inline-block btn-navbar-style fs-9" htmlFor="themeSwitcherDark"> <span className="mb-2 rounded d-block"><img className="img-fluid img-prototype mb-0" src="/site/assets/img/generic/default-dark.png" alt="" /></span><span className="label-text"> Dark</span></label></div>
<div className="col-4"><input className="btn-check" id="themeSwitcherAuto" name="theme-color" type="radio" value="auto" data-theme-control="phoenixTheme" /><label className="btn d-inline-block btn-navbar-style fs-9" htmlFor="themeSwitcherAuto"> <span className="mb-2 rounded d-block"><img className="img-fluid img-prototype mb-0" src="/site/assets/img/generic/auto.png" alt="" /></span><span className="label-text"> Auto</span></label></div>
</div>
</div>
<div className="border border-translucent rounded-3 p-4 setting-panel-item bg-body-emphasis">
<div className="d-flex justify-content-between align-items-center">
<h5 className="setting-panel-item-title mb-1">RTL </h5>
<div className="form-check form-switch mb-0"><input className="form-check-input ms-auto" type="checkbox" data-theme-control="phoenixIsRTL" /></div>
</div>
<p className="mb-0 text-body-tertiary">Change text direction</p>
</div>
<div className="border border-translucent rounded-3 p-4 setting-panel-item bg-body-emphasis">
<div className="d-flex justify-content-between align-items-center">
<h5 className="setting-panel-item-title mb-1">Support Chat </h5>
<div className="form-check form-switch mb-0"><input className="form-check-input ms-auto" type="checkbox" data-theme-control="phoenixSupportChat" /></div>
</div>
<p className="mb-0 text-body-tertiary">Toggle support chat</p>
</div>
<div className="setting-panel-item">
<h5 className="setting-panel-item-title">Navigation Type</h5>
<div className="row gx-2">
<div className="col-6"><input className="btn-check" id="navbarPositionVertical" name="navigation-type" type="radio" value="vertical" data-theme-control="phoenixNavbarPosition" disabled /><label className="btn d-inline-block btn-navbar-style fs-9" htmlFor="navbarPositionVertical"> <span className="rounded d-block"><img className="img-fluid img-prototype d-dark-none" src="/site/assets/img/generic/default-light.png" alt="" /><img className="img-fluid img-prototype d-light-none" src="/site/assets/img/generic/default-dark.png" alt="" /></span><span className="label-text">Vertical</span></label></div>
<div className="col-6"><input className="btn-check" id="navbarPositionHorizontal" name="navigation-type" type="radio" value="horizontal" data-theme-control="phoenixNavbarPosition" disabled /><label className="btn d-inline-block btn-navbar-style fs-9" htmlFor="navbarPositionHorizontal"> <span className="rounded d-block"><img className="img-fluid img-prototype d-dark-none" src="/site/assets/img/generic/top-default.png" alt="" /><img className="img-fluid img-prototype d-light-none" src="/site/assets/img/generic/top-default-dark.png" alt="" /></span><span className="label-text"> Horizontal</span></label></div>
<div className="col-6"><input className="btn-check" id="navbarPositionCombo" name="navigation-type" type="radio" value="combo" data-theme-control="phoenixNavbarPosition" disabled /><label className="btn d-inline-block btn-navbar-style fs-9" htmlFor="navbarPositionCombo"> <span className="rounded d-block"><img className="img-fluid img-prototype d-dark-none" src="/site/assets/img/generic/nav-combo-light.png" alt="" /><img className="img-fluid img-prototype d-light-none" src="/site/assets/img/generic/nav-combo-dark.png" alt="" /></span><span className="label-text"> Combo</span></label></div>
<div className="col-6"><input className="btn-check" id="navbarPositionTopDouble" name="navigation-type" type="radio" value="dual-nav" data-theme-control="phoenixNavbarPosition" disabled /><label className="btn d-inline-block btn-navbar-style fs-9" htmlFor="navbarPositionTopDouble"> <span className="rounded d-block"><img className="img-fluid img-prototype d-dark-none" src="/site/assets/img/generic/dual-light.png" alt="" /><img className="img-fluid img-prototype d-light-none" src="/site/assets/img/generic/dual-dark.png" alt="" /></span><span className="label-text"> Dual nav</span></label></div>
</div>
<p className="text-warning-dark font-medium"> <span className="fa-solid fa-triangle-exclamation me-2 text-warning"></span>You can't update navigation type in this page</p>
</div>
<div className="setting-panel-item">
<h5 className="setting-panel-item-title">Vertical Navbar Appearance</h5>
<div className="row gx-2">
<div className="col-6"><input className="btn-check" id="navbar-style-default" type="radio" name="config.name" value="default" data-theme-control="phoenixNavbarVerticalStyle" disabled /><label className="btn d-block w-100 btn-navbar-style fs-9" htmlFor="navbar-style-default"> <img className="img-fluid img-prototype d-dark-none" src="/site/assets/img/generic/default-light.png" alt="" /><img className="img-fluid img-prototype d-light-none" src="/site/assets/img/generic/default-dark.png" alt="" /><span className="label-text d-dark-none"> Default</span><span className="label-text d-light-none">Default</span></label></div>
<div className="col-6"><input className="btn-check" id="navbar-style-dark" type="radio" name="config.name" value="darker" data-theme-control="phoenixNavbarVerticalStyle" disabled /><label className="btn d-block w-100 btn-navbar-style fs-9" htmlFor="navbar-style-dark"> <img className="img-fluid img-prototype d-dark-none" src="/site/assets/img/generic/vertical-darker.png" alt="" /><img className="img-fluid img-prototype d-light-none" src="/site/assets/img/generic/vertical-lighter.png" alt="" /><span className="label-text d-dark-none"> Darker</span><span className="label-text d-light-none">Lighter</span></label></div>
</div>
<p className="text-warning-dark font-medium"> <span className="fa-solid fa-triangle-exclamation me-2 text-warning"></span>You can't update vertical navbar appearance in this page</p>
</div>
<div className="setting-panel-item">
<h5 className="setting-panel-item-title">Horizontal Navbar Shape</h5>
<div className="row gx-2">
<div className="col-6"><input className="btn-check" id="navbarShapeDefault" name="navbar-shape" type="radio" value="default" data-theme-control="phoenixNavbarTopShape" disabled /><label className="btn d-inline-block btn-navbar-style fs-9" htmlFor="navbarShapeDefault"> <span className="mb-2 rounded d-block"><img className="img-fluid img-prototype d-dark-none mb-0" src="/site/assets/img/generic/top-default.png" alt="" /><img className="img-fluid img-prototype d-light-none mb-0" src="/site/assets/img/generic/top-default-dark.png" alt="" /></span><span className="label-text">Default</span></label></div>
<div className="col-6"><input className="btn-check" id="navbarShapeSlim" name="navbar-shape" type="radio" value="slim" data-theme-control="phoenixNavbarTopShape" disabled /><label className="btn d-inline-block btn-navbar-style fs-9" htmlFor="navbarShapeSlim"> <span className="mb-2 rounded d-block"><img className="img-fluid img-prototype d-dark-none mb-0" src="/site/assets/img/generic/top-slim.png" alt="" /><img className="img-fluid img-prototype d-light-none mb-0" src="/site/assets/img/generic/top-slim-dark.png" alt="" /></span><span className="label-text"> Slim</span></label></div>
</div>
<p className="text-warning-dark font-medium"> <span className="fa-solid fa-triangle-exclamation me-2 text-warning"></span>You can't update horizontal navbar shape in this page</p>
</div>
<div className="setting-panel-item">
<h5 className="setting-panel-item-title">Horizontal Navbar Appearance</h5>
<div className="row gx-2">
<div className="col-6"><input className="btn-check" id="navbarTopDefault" name="navbar-top-style" type="radio" value="default" data-theme-control="phoenixNavbarTopStyle" disabled /><label className="btn d-inline-block btn-navbar-style fs-9" htmlFor="navbarTopDefault"> <span className="mb-2 rounded d-block"><img className="img-fluid img-prototype d-dark-none mb-0" src="/site/assets/img/generic/top-default.png" alt="" /><img className="img-fluid img-prototype d-light-none mb-0" src="/site/assets/img/generic/top-style-darker.png" alt="" /></span><span className="label-text">Default</span></label></div>
<div className="col-6"><input className="btn-check" id="navbarTopDarker" name="navbar-top-style" type="radio" value="darker" data-theme-control="phoenixNavbarTopStyle" disabled /><label className="btn d-inline-block btn-navbar-style fs-9" htmlFor="navbarTopDarker"> <span className="mb-2 rounded d-block"><img className="img-fluid img-prototype d-dark-none mb-0" src="/site/assets/img/generic/navbar-top-style-light.png" alt="" /><img className="img-fluid img-prototype d-light-none mb-0" src="/site/assets/img/generic/top-style-lighter.png" alt="" /></span><span className="label-text d-dark-none">Darker</span><span className="label-text d-light-none">Lighter</span></label></div>
</div>
<p className="text-warning-dark font-medium"> <span className="fa-solid fa-triangle-exclamation me-2 text-warning"></span>You can't update horizontal navbar appearance in this page</p>
</div><a className="bun btn-primary d-grid mb-3 text-white mt-5 btn btn-primary" href="https://themewagon.com/themes/phoenix/" target="_blank">Purchase template</a>
</div>
</div><a className="card setting-toggle" href="#settings-offcanvas" data-bs-toggle="offcanvas">
<div className="card-body d-flex align-items-center px-2 py-1">
<div className="position-relative rounded-start" style={{height: "34px", width: "28px"}}>
<div className="settings-popover"><span className="ripple"><span className="fa-spin position-absolute all-0 d-flex flex-center"><span className="icon-spin position-absolute all-0 d-flex flex-center"><svg width="20" height="20" viewbox="0 0 20 20" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"><path d="M19.7369 12.3941L19.1989 12.1065C18.4459 11.7041 18.0843 10.8487 18.0843 9.99495C18.0843 9.14118 18.4459 8.28582 19.1989 7.88336L19.7369 7.59581C19.9474 7.47484 20.0316 7.23291 19.9474 7.03131C19.4842 5.57973 18.6843 4.28943 17.6738 3.20075C17.5053 3.03946 17.2527 2.99914 17.0422 3.12011L16.393 3.46714C15.6883 3.84379 14.8377 3.74529 14.1476 3.3427C14.0988 3.31422 14.0496 3.28621 14.0002 3.25868C13.2568 2.84453 12.7055 2.10629 12.7055 1.25525V0.70081C12.7055 0.499202 12.5371 0.297594 12.2845 0.257272C10.7266 -0.105622 9.16879 -0.0653007 7.69516 0.257272C7.44254 0.297594 7.31623 0.499202 7.31623 0.70081V1.23474C7.31623 2.09575 6.74999 2.8362 5.99824 3.25599C5.95774 3.27861 5.91747 3.30159 5.87744 3.32493C5.15643 3.74527 4.26453 3.85902 3.53534 3.45302L2.93743 3.12011C2.72691 2.99914 2.47429 3.03946 2.30587 3.20075C1.29538 4.28943 0.495411 5.57973 0.0322686 7.03131C-0.051939 7.23291 0.0322686 7.47484 0.242788 7.59581L0.784376 7.8853C1.54166 8.29007 1.92694 9.13627 1.92694 9.99495C1.92694 10.8536 1.54166 11.6998 0.784375 12.1046L0.242788 12.3941C0.0322686 12.515 -0.051939 12.757 0.0322686 12.9586C0.495411 14.4102 1.29538 15.7005 2.30587 16.7891C2.47429 16.9504 2.72691 16.9907 2.93743 16.8698L3.58669 16.5227C4.29133 16.1461 5.14131 16.2457 5.8331 16.6455C5.88713 16.6767 5.94159 16.7074 5.99648 16.7375C6.75162 17.1511 7.31623 17.8941 7.31623 18.7552V19.2891C7.31623 19.4425 7.41373 19.5959 7.55309 19.696C7.64066 19.7589 7.74815 19.7843 7.85406 19.8046C9.35884 20.0925 10.8609 20.0456 12.2845 19.7729C12.5371 19.6923 12.7055 19.4907 12.7055 19.2891V18.7346C12.7055 17.8836 13.2568 17.1454 14.0002 16.7312C14.0496 16.7037 14.0988 16.6757 14.1476 16.6472C14.8377 16.2446 15.6883 16.1461 16.393 16.5227L17.0422 16.8698C17.2527 16.9907 17.5053 16.9504 17.6738 16.7891C18.7264 15.7005 19.4842 14.4102 19.9895 12.9586C20.0316 12.757 19.9474 12.515 19.7369 12.3941ZM10.0109 13.2005C8.1162 13.2005 6.64257 11.7893 6.64257 9.97478C6.64257 8.20063 8.1162 6.74905 10.0109 6.74905C11.8634 6.74905 13.3792 8.20063 13.3792 9.97478C13.3792 11.7893 11.8634 13.2005 10.0109 13.2005Z" fill="#2A7BE4"></path></svg></span></span></span></div>
</div><small className="text-uppercase text-body-tertiary fw-bold py-2 pe-2 ps-1 rounded-end">customize</small>
</div>
</a>














    </>
  );
}
