import DashboardNavbars from '../components/DashboardNavbars.jsx';
/* Auto-converted from the original HTML. Visual/markup structure intentionally preserved. */
export default function AppsECommerceAdminOrdersPage() {
  return (
    <>




<main className="main" id="top">
<DashboardNavbars />










<div className="content">

<div className="mb-9">
<div className="row g-3 mb-4">
<div className="col-auto">
<h2 className="mb-0">Orders</h2>
</div>
</div>
<ul className="nav nav-links mb-3 mb-lg-2 mx-n3">
<li className="nav-item"><a className="nav-link active" aria-current="page" href="#"><span>All </span><span className="text-body-tertiary fw-semibold">(68817)</span></a></li>
<li className="nav-item"><a className="nav-link" href="#"><span>Pending payment </span><span className="text-body-tertiary fw-semibold">(6)</span></a></li>
<li className="nav-item"><a className="nav-link" href="#"><span>Unfulfilled </span><span className="text-body-tertiary fw-semibold">(17)</span></a></li>
<li className="nav-item"><a className="nav-link" href="#"><span>Completed</span><span className="text-body-tertiary fw-semibold">(6,810)</span></a></li>
<li className="nav-item"><a className="nav-link" href="#"><span>Refunded</span><span className="text-body-tertiary fw-semibold">(8)</span></a></li>
<li className="nav-item"><a className="nav-link" href="#"><span>Failed</span><span className="text-body-tertiary fw-semibold">(2)</span></a></li>
</ul>
<div id="orderTable" data-list="&#123;&quot;valueNames&quot;:[&quot;order&quot;,&quot;total&quot;,&quot;customer&quot;,&quot;payment_status&quot;,&quot;fulfilment_status&quot;,&quot;delivery_type&quot;,&quot;date&quot;],&quot;page&quot;:10,&quot;pagination&quot;:true&#125;">
<div className="mb-4">
<div className="row g-3">
<div className="col-auto">
<div className="search-box">
<form className="position-relative"><input className="form-control search-input search" type="search" placeholder="Search orders" aria-label="Search" />
<span className="fas fa-search search-box-icon"></span>
</form>
</div>
</div>
<div className="col-auto scrollbar overflow-hidden-y flex-grow-1">
<div className="btn-group position-static" role="group">
<div className="btn-group position-static text-nowrap" role="group"><button className="btn btn-phoenix-secondary px-7 flex-shrink-0" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"> Payment status<span className="fas fa-angle-down ms-2"></span></button>
<ul className="dropdown-menu dropdown-menu-end">
<li><a className="dropdown-item" href="#">Action</a></li>
<li><a className="dropdown-item" href="#">Another action</a></li>
<li><a className="dropdown-item" href="#">Something else here</a></li>
<li>
<hr className="dropdown-divider" />
</li>
<li><a className="dropdown-item" href="#">Separated link</a></li>
</ul>
</div>
<div className="btn-group position-static text-nowrap" role="group"><button className="btn btn-sm btn-phoenix-secondary px-7 flex-shrink-0" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"> Fulfilment status<span className="fas fa-angle-down ms-2"></span></button>
<ul className="dropdown-menu dropdown-menu-end">
<li><a className="dropdown-item" href="#">Action</a></li>
<li><a className="dropdown-item" href="#">Another action</a></li>
<li><a className="dropdown-item" href="#">Something else here</a></li>
<li>
<hr className="dropdown-divider" />
</li>
<li><a className="dropdown-item" href="#">Separated link</a></li>
</ul>
</div><button className="btn btn-sm btn-phoenix-secondary px-7 flex-shrink-0">More filters </button>
</div>
</div>
<div className="col-auto"><button className="btn btn-link text-body me-4 px-0"><span className="fa-solid fa-file-export fs-9 me-2"></span>Export</button>
<button className="btn btn-primary"><span className="fas fa-plus me-2"></span>Add order</button>
</div>
</div>
</div>
<div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
<div className="table-responsive scrollbar mx-n1 px-1">
<table className="table table-sm fs-9 mb-0">
<thead>
<tr>
<th className="white-space-nowrap fs-9 align-middle ps-0" style={{width: "26px"}}>
<div className="form-check mb-0 fs-8"><input className="form-check-input" id="checkbox-bulk-order-select" type="checkbox" data-bulk-select="&#123;&quot;body&quot;:&quot;order-table-body&quot;&#125;" /></div>
</th>
<th className="sort white-space-nowrap align-middle pe-3" scope="col" data-sort="order" style={{width: "5%"}}>ORDER</th>
<th className="sort align-middle text-end" scope="col" data-sort="total" style={{width: "6%"}}>TOTAL</th>
<th className="sort align-middle ps-8" scope="col" data-sort="customer" style={{width: "28%", minWidth: "250px"}}>CUSTOMER</th>
<th className="sort align-middle pe-3" scope="col" data-sort="payment_status" style={{width: "10%"}}>PAYMENT STATUS</th>
<th className="sort align-middle text-start pe-3" scope="col" data-sort="fulfilment_status" style={{width: "12%", minWidth: "200px"}}>FULFILMENT STATUS</th>
<th className="sort align-middle text-start" scope="col" data-sort="delivery_type" style={{width: "30%"}}>DELIVERY TYPE</th>
<th className="sort align-middle text-end pe-0" scope="col" data-sort="date">DATE</th>
</tr>
</thead>
<tbody className="list" id="order-table-body">
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="fs-9 align-middle px-0 py-3">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;order&quot;:2453,&quot;total&quot;:87,&quot;customer&quot;:&#123;&quot;avatar&quot;:&quot;/team/32.webp&quot;,&quot;name&quot;:&quot;Carry Anna&quot;&#125;,&quot;payment_status&quot;:&#123;&quot;label&quot;:&quot;Complete&quot;,&quot;type&quot;:&quot;badge-phoenix-success&quot;,&quot;icon&quot;:&quot;check&quot;&#125;,&quot;fulfilment_status&quot;:&#123;&quot;label&quot;:&quot;Cancelled&quot;,&quot;type&quot;:&quot;badge-phoenix-secondary&quot;,&quot;icon&quot;:&quot;x&quot;&#125;,&quot;delivery_type&quot;:&quot;Cash on delivery&quot;,&quot;date&quot;:&quot;Dec 12, 12:56 PM&quot;&#125;" /></div>
</td>
<td className="order align-middle white-space-nowrap py-0"><a className="fw-semibold" href="#!">#2453</a></td>
<td className="total align-middle text-end fw-semibold text-body-highlight">$87</td>
<td className="customer align-middle white-space-nowrap ps-8"><a className="d-flex align-items-center text-body" href="/apps/e-commerce/landing/profile">
<div className="avatar avatar-m"><img className="rounded-circle" src="/site/assets/img/team/32.webp" alt="" /></div>
<h6 className="mb-0 ms-3 text-body">Carry Anna</h6>
</a></td>
<td className="payment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary"><span className="badge badge-phoenix fs-10 badge-phoenix-success"><span className="badge-label">Complete</span><span className="ms-1" data-feather="check" style={{height: "12.8px", width: "12.8px"}}></span></span></td>
<td className="fulfilment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary"><span className="badge badge-phoenix fs-10 badge-phoenix-secondary"><span className="badge-label">Cancelled</span><span className="ms-1" data-feather="x" style={{height: "12.8px", width: "12.8px"}}></span></span></td>
<td className="delivery_type align-middle white-space-nowrap text-body fs-9 text-start">Cash on delivery</td>
<td className="date align-middle white-space-nowrap text-body-tertiary fs-9 ps-4 text-end">Dec 12, 12:56 PM</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="fs-9 align-middle px-0 py-3">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;order&quot;:2452,&quot;total&quot;:7264,&quot;customer&quot;:&#123;&quot;avatar&quot;:&quot;&quot;,&quot;name&quot;:&quot;Milind Mikuja&quot;&#125;,&quot;fulfilment_status&quot;:&#123;&quot;label&quot;:&quot;Ready to pickup&quot;,&quot;type&quot;:&quot;badge-phoenix-info&quot;,&quot;icon&quot;:&quot;info&quot;&#125;,&quot;payment_status&quot;:&#123;&quot;label&quot;:&quot;Cancelled&quot;,&quot;type&quot;:&quot;badge-phoenix-secondary&quot;,&quot;icon&quot;:&quot;x&quot;&#125;,&quot;delivery_type&quot;:&quot;Free shipping&quot;,&quot;date&quot;:&quot;Dec 9, 2:28PM&quot;&#125;" /></div>
</td>
<td className="order align-middle white-space-nowrap py-0"><a className="fw-semibold" href="#!">#2452</a></td>
<td className="total align-middle text-end fw-semibold text-body-highlight">$7264</td>
<td className="customer align-middle white-space-nowrap ps-8"><a className="d-flex align-items-center text-body" href="/apps/e-commerce/landing/profile">
<div className="avatar avatar-m">
<div className="avatar-name rounded-circle"><span>M</span></div>
</div>
<h6 className="mb-0 ms-3 text-body">Milind Mikuja</h6>
</a></td>
<td className="payment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary"><span className="badge badge-phoenix fs-10 badge-phoenix-secondary"><span className="badge-label">Cancelled</span><span className="ms-1" data-feather="x" style={{height: "12.8px", width: "12.8px"}}></span></span></td>
<td className="fulfilment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary"><span className="badge badge-phoenix fs-10 badge-phoenix-info"><span className="badge-label">Ready to pickup</span><span className="ms-1" data-feather="info" style={{height: "12.8px", width: "12.8px"}}></span></span></td>
<td className="delivery_type align-middle white-space-nowrap text-body fs-9 text-start">Free shipping</td>
<td className="date align-middle white-space-nowrap text-body-tertiary fs-9 ps-4 text-end">Dec 9, 2:28PM</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="fs-9 align-middle px-0 py-3">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;order&quot;:2451,&quot;total&quot;:375,&quot;customer&quot;:&#123;&quot;avatar&quot;:&quot;/team/35.webp&quot;,&quot;name&quot;:&quot;Stanly Drinkwater&quot;&#125;,&quot;payment_status&quot;:&#123;&quot;label&quot;:&quot;Pending&quot;,&quot;type&quot;:&quot;badge-phoenix-warning&quot;,&quot;icon&quot;:&quot;clock&quot;&#125;,&quot;fulfilment_status&quot;:&#123;&quot;label&quot;:&quot;Completed&quot;,&quot;type&quot;:&quot;badge-phoenix-success&quot;,&quot;icon&quot;:&quot;check&quot;&#125;,&quot;delivery_type&quot;:&quot;Local pickup&quot;,&quot;date&quot;:&quot;Dec 4, 12:56 PM&quot;&#125;" /></div>
</td>
<td className="order align-middle white-space-nowrap py-0"><a className="fw-semibold" href="#!">#2451</a></td>
<td className="total align-middle text-end fw-semibold text-body-highlight">$375</td>
<td className="customer align-middle white-space-nowrap ps-8"><a className="d-flex align-items-center text-body" href="/apps/e-commerce/landing/profile">
<div className="avatar avatar-m"><img className="rounded-circle" src="/site/assets/img/team/35.webp" alt="" /></div>
<h6 className="mb-0 ms-3 text-body">Stanly Drinkwater</h6>
</a></td>
<td className="payment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary"><span className="badge badge-phoenix fs-10 badge-phoenix-warning"><span className="badge-label">Pending</span><span className="ms-1" data-feather="clock" style={{height: "12.8px", width: "12.8px"}}></span></span></td>
<td className="fulfilment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary"><span className="badge badge-phoenix fs-10 badge-phoenix-success"><span className="badge-label">Completed</span><span className="ms-1" data-feather="check" style={{height: "12.8px", width: "12.8px"}}></span></span></td>
<td className="delivery_type align-middle white-space-nowrap text-body fs-9 text-start">Local pickup</td>
<td className="date align-middle white-space-nowrap text-body-tertiary fs-9 ps-4 text-end">Dec 4, 12:56 PM</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="fs-9 align-middle px-0 py-3">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;order&quot;:2450,&quot;total&quot;:657,&quot;customer&quot;:&#123;&quot;avatar&quot;:&quot;/team/57.webp&quot;,&quot;name&quot;:&quot;Josef Stravinsky&quot;&#125;,&quot;payment_status&quot;:&#123;&quot;label&quot;:&quot;Cancelled&quot;,&quot;type&quot;:&quot;badge-phoenix-secondary&quot;,&quot;icon&quot;:&quot;x&quot;&#125;,&quot;fulfilment_status&quot;:&#123;&quot;label&quot;:&quot;Partially Fulfiled&quot;,&quot;type&quot;:&quot;badge-phoenix-warning&quot;,&quot;icon&quot;:&quot;clock&quot;&#125;,&quot;delivery_type&quot;:&quot;Standard shipping&quot;,&quot;date&quot;:&quot;Dec 1, 4:07 AM&quot;&#125;" /></div>
</td>
<td className="order align-middle white-space-nowrap py-0"><a className="fw-semibold" href="#!">#2450</a></td>
<td className="total align-middle text-end fw-semibold text-body-highlight">$657</td>
<td className="customer align-middle white-space-nowrap ps-8"><a className="d-flex align-items-center text-body" href="/apps/e-commerce/landing/profile">
<div className="avatar avatar-m"><img className="rounded-circle" src="/site/assets/img/team/57.webp" alt="" /></div>
<h6 className="mb-0 ms-3 text-body">Josef Stravinsky</h6>
</a></td>
<td className="payment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary"><span className="badge badge-phoenix fs-10 badge-phoenix-secondary"><span className="badge-label">Cancelled</span><span className="ms-1" data-feather="x" style={{height: "12.8px", width: "12.8px"}}></span></span></td>
<td className="fulfilment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary"><span className="badge badge-phoenix fs-10 badge-phoenix-warning"><span className="badge-label">Partially Fulfiled</span><span className="ms-1" data-feather="clock" style={{height: "12.8px", width: "12.8px"}}></span></span></td>
<td className="delivery_type align-middle white-space-nowrap text-body fs-9 text-start">Standard shipping</td>
<td className="date align-middle white-space-nowrap text-body-tertiary fs-9 ps-4 text-end">Dec 1, 4:07 AM</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="fs-9 align-middle px-0 py-3">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;order&quot;:2449,&quot;total&quot;:9562,&quot;customer&quot;:&#123;&quot;avatar&quot;:&quot;/team/58.webp&quot;,&quot;name&quot;:&quot;Igor Borvibson&quot;&#125;,&quot;payment_status&quot;:&#123;&quot;label&quot;:&quot;Failed&quot;,&quot;type&quot;:&quot;badge-phoenix-danger&quot;,&quot;icon&quot;:&quot;x&quot;&#125;,&quot;fulfilment_status&quot;:&#123;&quot;label&quot;:&quot;Partially Fulfiled&quot;,&quot;type&quot;:&quot;badge-phoenix-success&quot;,&quot;icon&quot;:&quot;check&quot;&#125;,&quot;delivery_type&quot;:&quot;Express&quot;,&quot;date&quot;:&quot;Nov 28, 7:28 PM&quot;&#125;" /></div>
</td>
<td className="order align-middle white-space-nowrap py-0"><a className="fw-semibold" href="#!">#2449</a></td>
<td className="total align-middle text-end fw-semibold text-body-highlight">$9562</td>
<td className="customer align-middle white-space-nowrap ps-8"><a className="d-flex align-items-center text-body" href="/apps/e-commerce/landing/profile">
<div className="avatar avatar-m"><img className="rounded-circle" src="/site/assets/img/team/58.webp" alt="" /></div>
<h6 className="mb-0 ms-3 text-body">Igor Borvibson</h6>
</a></td>
<td className="payment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary"><span className="badge badge-phoenix fs-10 badge-phoenix-danger"><span className="badge-label">Failed</span><span className="ms-1" data-feather="x" style={{height: "12.8px", width: "12.8px"}}></span></span></td>
<td className="fulfilment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary"><span className="badge badge-phoenix fs-10 badge-phoenix-success"><span className="badge-label">Partially Fulfiled</span><span className="ms-1" data-feather="check" style={{height: "12.8px", width: "12.8px"}}></span></span></td>
<td className="delivery_type align-middle white-space-nowrap text-body fs-9 text-start">Express</td>
<td className="date align-middle white-space-nowrap text-body-tertiary fs-9 ps-4 text-end">Nov 28, 7:28 PM</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="fs-9 align-middle px-0 py-3">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;order&quot;:2448,&quot;total&quot;:46,&quot;customer&quot;:&#123;&quot;avatar&quot;:&quot;/team/59.webp&quot;,&quot;name&quot;:&quot;Katerina Karenin&quot;&#125;,&quot;payment_status&quot;:&#123;&quot;label&quot;:&quot;Paid&quot;,&quot;type&quot;:&quot;badge-phoenix-success&quot;,&quot;icon&quot;:&quot;check&quot;&#125;,&quot;fulfilment_status&quot;:&#123;&quot;label&quot;:&quot;Unfulfiled&quot;,&quot;type&quot;:&quot;badge-phoenix-danger&quot;,&quot;icon&quot;:&quot;x&quot;&#125;,&quot;delivery_type&quot;:&quot;Local delivery&quot;,&quot;date&quot;:&quot;Nov 24, 10:16 AM&quot;&#125;" /></div>
</td>
<td className="order align-middle white-space-nowrap py-0"><a className="fw-semibold" href="#!">#2448</a></td>
<td className="total align-middle text-end fw-semibold text-body-highlight">$46</td>
<td className="customer align-middle white-space-nowrap ps-8"><a className="d-flex align-items-center text-body" href="/apps/e-commerce/landing/profile">
<div className="avatar avatar-m"><img className="rounded-circle" src="/site/assets/img/team/59.webp" alt="" /></div>
<h6 className="mb-0 ms-3 text-body">Katerina Karenin</h6>
</a></td>
<td className="payment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary"><span className="badge badge-phoenix fs-10 badge-phoenix-success"><span className="badge-label">Paid</span><span className="ms-1" data-feather="check" style={{height: "12.8px", width: "12.8px"}}></span></span></td>
<td className="fulfilment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary"><span className="badge badge-phoenix fs-10 badge-phoenix-danger"><span className="badge-label">Unfulfiled</span><span className="ms-1" data-feather="x" style={{height: "12.8px", width: "12.8px"}}></span></span></td>
<td className="delivery_type align-middle white-space-nowrap text-body fs-9 text-start">Local delivery</td>
<td className="date align-middle white-space-nowrap text-body-tertiary fs-9 ps-4 text-end">Nov 24, 10:16 AM</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="fs-9 align-middle px-0 py-3">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;order&quot;:2447,&quot;total&quot;:953,&quot;customer&quot;:&#123;&quot;avatar&quot;:&quot;&quot;,&quot;name&quot;:&quot;Roy Anderson&quot;&#125;,&quot;payment_status&quot;:&#123;&quot;label&quot;:&quot;Pending&quot;,&quot;type&quot;:&quot;badge-phoenix-warning&quot;,&quot;icon&quot;:&quot;clock&quot;&#125;,&quot;fulfilment_status&quot;:&#123;&quot;label&quot;:&quot;Fulfiled&quot;,&quot;type&quot;:&quot;badge-phoenix-success&quot;,&quot;icon&quot;:&quot;check&quot;&#125;,&quot;delivery_type&quot;:&quot;Cash on delivery&quot;,&quot;date&quot;:&quot;Nov 18, 5:43 PM&quot;&#125;" /></div>
</td>
<td className="order align-middle white-space-nowrap py-0"><a className="fw-semibold" href="#!">#2447</a></td>
<td className="total align-middle text-end fw-semibold text-body-highlight">$953</td>
<td className="customer align-middle white-space-nowrap ps-8"><a className="d-flex align-items-center text-body" href="/apps/e-commerce/landing/profile">
<div className="avatar avatar-m">
<div className="avatar-name rounded-circle"><span>R</span></div>
</div>
<h6 className="mb-0 ms-3 text-body">Roy Anderson</h6>
</a></td>
<td className="payment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary"><span className="badge badge-phoenix fs-10 badge-phoenix-warning"><span className="badge-label">Pending</span><span className="ms-1" data-feather="clock" style={{height: "12.8px", width: "12.8px"}}></span></span></td>
<td className="fulfilment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary"><span className="badge badge-phoenix fs-10 badge-phoenix-success"><span className="badge-label">Fulfiled</span><span className="ms-1" data-feather="check" style={{height: "12.8px", width: "12.8px"}}></span></span></td>
<td className="delivery_type align-middle white-space-nowrap text-body fs-9 text-start">Cash on delivery</td>
<td className="date align-middle white-space-nowrap text-body-tertiary fs-9 ps-4 text-end">Nov 18, 5:43 PM</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="fs-9 align-middle px-0 py-3">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;order&quot;:2446,&quot;total&quot;:12,&quot;customer&quot;:&#123;&quot;avatar&quot;:&quot;/team/31.webp&quot;,&quot;name&quot;:&quot;Martina scorcese&quot;&#125;,&quot;payment_status&quot;:&#123;&quot;label&quot;:&quot;Pending&quot;,&quot;type&quot;:&quot;badge-phoenix-warning&quot;,&quot;icon&quot;:&quot;clock&quot;&#125;,&quot;fulfilment_status&quot;:&#123;&quot;label&quot;:&quot;Fulfiled&quot;,&quot;type&quot;:&quot;badge-phoenix-success&quot;,&quot;icon&quot;:&quot;check&quot;&#125;,&quot;delivery_type&quot;:&quot;Standard shipping&quot;,&quot;date&quot;:&quot;Nov 18, 2:09 AM&quot;&#125;" /></div>
</td>
<td className="order align-middle white-space-nowrap py-0"><a className="fw-semibold" href="#!">#2446</a></td>
<td className="total align-middle text-end fw-semibold text-body-highlight">$12</td>
<td className="customer align-middle white-space-nowrap ps-8"><a className="d-flex align-items-center text-body" href="/apps/e-commerce/landing/profile">
<div className="avatar avatar-m"><img className="rounded-circle" src="/site/assets/img/team/31.webp" alt="" /></div>
<h6 className="mb-0 ms-3 text-body">Martina scorcese</h6>
</a></td>
<td className="payment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary"><span className="badge badge-phoenix fs-10 badge-phoenix-warning"><span className="badge-label">Pending</span><span className="ms-1" data-feather="clock" style={{height: "12.8px", width: "12.8px"}}></span></span></td>
<td className="fulfilment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary"><span className="badge badge-phoenix fs-10 badge-phoenix-success"><span className="badge-label">Fulfiled</span><span className="ms-1" data-feather="check" style={{height: "12.8px", width: "12.8px"}}></span></span></td>
<td className="delivery_type align-middle white-space-nowrap text-body fs-9 text-start">Standard shipping</td>
<td className="date align-middle white-space-nowrap text-body-tertiary fs-9 ps-4 text-end">Nov 18, 2:09 AM</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="fs-9 align-middle px-0 py-3">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;order&quot;:2445,&quot;total&quot;:3927,&quot;customer&quot;:&#123;&quot;avatar&quot;:&quot;/team/33.webp&quot;,&quot;name&quot;:&quot;Luis Bunuel&quot;&#125;,&quot;payment_status&quot;:&#123;&quot;label&quot;:&quot;Paid&quot;,&quot;type&quot;:&quot;badge-phoenix-success&quot;,&quot;icon&quot;:&quot;check&quot;&#125;,&quot;fulfilment_status&quot;:&#123;&quot;label&quot;:&quot;Canceled&quot;,&quot;type&quot;:&quot;badge-phoenix-secondary&quot;,&quot;icon&quot;:&quot;x&quot;&#125;,&quot;delivery_type&quot;:&quot;Cash on delivery&quot;,&quot;date&quot;:&quot;Nov 16, 3:22 PM&quot;&#125;" /></div>
</td>
<td className="order align-middle white-space-nowrap py-0"><a className="fw-semibold" href="#!">#2445</a></td>
<td className="total align-middle text-end fw-semibold text-body-highlight">$3927</td>
<td className="customer align-middle white-space-nowrap ps-8"><a className="d-flex align-items-center text-body" href="/apps/e-commerce/landing/profile">
<div className="avatar avatar-m"><img className="rounded-circle" src="/site/assets/img/team/33.webp" alt="" /></div>
<h6 className="mb-0 ms-3 text-body">Luis Bunuel</h6>
</a></td>
<td className="payment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary"><span className="badge badge-phoenix fs-10 badge-phoenix-success"><span className="badge-label">Paid</span><span className="ms-1" data-feather="check" style={{height: "12.8px", width: "12.8px"}}></span></span></td>
<td className="fulfilment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary"><span className="badge badge-phoenix fs-10 badge-phoenix-secondary"><span className="badge-label">Canceled</span><span className="ms-1" data-feather="x" style={{height: "12.8px", width: "12.8px"}}></span></span></td>
<td className="delivery_type align-middle white-space-nowrap text-body fs-9 text-start">Cash on delivery</td>
<td className="date align-middle white-space-nowrap text-body-tertiary fs-9 ps-4 text-end">Nov 16, 3:22 PM</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="fs-9 align-middle px-0 py-3">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;order&quot;:2444,&quot;total&quot;:5937,&quot;customer&quot;:&#123;&quot;avatar&quot;:&quot;/team/34.webp&quot;,&quot;name&quot;:&quot;Jean Renoir&quot;&#125;,&quot;payment_status&quot;:&#123;&quot;label&quot;:&quot;Paid&quot;,&quot;type&quot;:&quot;badge-phoenix-success&quot;,&quot;icon&quot;:&quot;check&quot;&#125;,&quot;fulfilment_status&quot;:&#123;&quot;label&quot;:&quot;Ready to pickup&quot;,&quot;type&quot;:&quot;badge-phoenix-secondary&quot;,&quot;icon&quot;:&quot;info&quot;&#125;,&quot;delivery_type&quot;:&quot;Local pickup&quot;,&quot;date&quot;:&quot;Nov 09, 8:49 AM&quot;&#125;" /></div>
</td>
<td className="order align-middle white-space-nowrap py-0"><a className="fw-semibold" href="#!">#2444</a></td>
<td className="total align-middle text-end fw-semibold text-body-highlight">$5937</td>
<td className="customer align-middle white-space-nowrap ps-8"><a className="d-flex align-items-center text-body" href="/apps/e-commerce/landing/profile">
<div className="avatar avatar-m"><img className="rounded-circle" src="/site/assets/img/team/34.webp" alt="" /></div>
<h6 className="mb-0 ms-3 text-body">Jean Renoir</h6>
</a></td>
<td className="payment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary"><span className="badge badge-phoenix fs-10 badge-phoenix-success"><span className="badge-label">Paid</span><span className="ms-1" data-feather="check" style={{height: "12.8px", width: "12.8px"}}></span></span></td>
<td className="fulfilment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary"><span className="badge badge-phoenix fs-10 badge-phoenix-secondary"><span className="badge-label">Ready to pickup</span><span className="ms-1" data-feather="info" style={{height: "12.8px", width: "12.8px"}}></span></span></td>
<td className="delivery_type align-middle white-space-nowrap text-body fs-9 text-start">Local pickup</td>
<td className="date align-middle white-space-nowrap text-body-tertiary fs-9 ps-4 text-end">Nov 09, 8:49 AM</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="fs-9 align-middle px-0 py-3">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;order&quot;:2443,&quot;total&quot;:124,&quot;customer&quot;:&#123;&quot;avatar&quot;:&quot;/team/29.webp&quot;,&quot;name&quot;:&quot;Ricky Antony&quot;&#125;,&quot;payment_status&quot;:&#123;&quot;label&quot;:&quot;Failed&quot;,&quot;type&quot;:&quot;badge-phoenix-danger&quot;,&quot;icon&quot;:&quot;x&quot;&#125;,&quot;fulfilment_status&quot;:&#123;&quot;label&quot;:&quot;Unfulfiled&quot;,&quot;type&quot;:&quot;badge-phoenix-danger&quot;,&quot;icon&quot;:&quot;x&quot;&#125;,&quot;delivery_type&quot;:&quot;Cash on delivery&quot;,&quot;date&quot;:&quot;Nov 05, 4:35 PM&quot;&#125;" /></div>
</td>
<td className="order align-middle white-space-nowrap py-0"><a className="fw-semibold" href="#!">#2443</a></td>
<td className="total align-middle text-end fw-semibold text-body-highlight">$124</td>
<td className="customer align-middle white-space-nowrap ps-8"><a className="d-flex align-items-center text-body" href="/apps/e-commerce/landing/profile">
<div className="avatar avatar-m"><img className="rounded-circle" src="/site/assets/img/team/29.webp" alt="" /></div>
<h6 className="mb-0 ms-3 text-body">Ricky Antony</h6>
</a></td>
<td className="payment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary"><span className="badge badge-phoenix fs-10 badge-phoenix-danger"><span className="badge-label">Failed</span><span className="ms-1" data-feather="x" style={{height: "12.8px", width: "12.8px"}}></span></span></td>
<td className="fulfilment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary"><span className="badge badge-phoenix fs-10 badge-phoenix-danger"><span className="badge-label">Unfulfiled</span><span className="ms-1" data-feather="x" style={{height: "12.8px", width: "12.8px"}}></span></span></td>
<td className="delivery_type align-middle white-space-nowrap text-body fs-9 text-start">Cash on delivery</td>
<td className="date align-middle white-space-nowrap text-body-tertiary fs-9 ps-4 text-end">Nov 05, 4:35 PM</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="fs-9 align-middle px-0 py-3">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;order&quot;:2442,&quot;total&quot;:542,&quot;customer&quot;:&#123;&quot;avatar&quot;:&quot;/team/3.webp&quot;,&quot;name&quot;:&quot;Emma Watson&quot;&#125;,&quot;payment_status&quot;:&#123;&quot;label&quot;:&quot;Pending&quot;,&quot;type&quot;:&quot;badge-phoenix-warning&quot;,&quot;icon&quot;:&quot;clock&quot;&#125;,&quot;fulfilment_status&quot;:&#123;&quot;label&quot;:&quot;Fulfiled&quot;,&quot;type&quot;:&quot;badge-phoenix-success&quot;,&quot;icon&quot;:&quot;check&quot;&#125;,&quot;delivery_type&quot;:&quot;Standard shipping&quot;,&quot;date&quot;:&quot;Nov 05, 12:00 PM&quot;&#125;" /></div>
</td>
<td className="order align-middle white-space-nowrap py-0"><a className="fw-semibold" href="#!">#2442</a></td>
<td className="total align-middle text-end fw-semibold text-body-highlight">$542</td>
<td className="customer align-middle white-space-nowrap ps-8"><a className="d-flex align-items-center text-body" href="/apps/e-commerce/landing/profile">
<div className="avatar avatar-m"><img className="rounded-circle" src="/site/assets/img/team/3.webp" alt="" /></div>
<h6 className="mb-0 ms-3 text-body">Emma Watson</h6>
</a></td>
<td className="payment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary"><span className="badge badge-phoenix fs-10 badge-phoenix-warning"><span className="badge-label">Pending</span><span className="ms-1" data-feather="clock" style={{height: "12.8px", width: "12.8px"}}></span></span></td>
<td className="fulfilment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary"><span className="badge badge-phoenix fs-10 badge-phoenix-success"><span className="badge-label">Fulfiled</span><span className="ms-1" data-feather="check" style={{height: "12.8px", width: "12.8px"}}></span></span></td>
<td className="delivery_type align-middle white-space-nowrap text-body fs-9 text-start">Standard shipping</td>
<td className="date align-middle white-space-nowrap text-body-tertiary fs-9 ps-4 text-end">Nov 05, 12:00 PM</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="fs-9 align-middle px-0 py-3">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;order&quot;:2441,&quot;total&quot;:1480,&quot;customer&quot;:&#123;&quot;avatar&quot;:&quot;/team/avatar.webp&quot;,&quot;name&quot;:&quot;Jennifer Schramm&quot;,&quot;placeholder&quot;:true&#125;,&quot;payment_status&quot;:&#123;&quot;label&quot;:&quot;Paid&quot;,&quot;type&quot;:&quot;badge-phoenix-success&quot;,&quot;icon&quot;:&quot;check&quot;&#125;,&quot;fulfilment_status&quot;:&#123;&quot;label&quot;:&quot;Ready to pickup&quot;,&quot;type&quot;:&quot;badge-phoenix-info&quot;,&quot;icon&quot;:&quot;info&quot;&#125;,&quot;delivery_type&quot;:&quot;Local delivery&quot;,&quot;date&quot;:&quot;Nov 02, 2:00 AM&quot;&#125;" /></div>
</td>
<td className="order align-middle white-space-nowrap py-0"><a className="fw-semibold" href="#!">#2441</a></td>
<td className="total align-middle text-end fw-semibold text-body-highlight">$1480</td>
<td className="customer align-middle white-space-nowrap ps-8"><a className="d-flex align-items-center text-body" href="/apps/e-commerce/landing/profile">
<div className="avatar avatar-m"><img className="rounded-circle avatar-placeholder" src="/site/assets/img/team/avatar.webp" alt="" /></div>
<h6 className="mb-0 ms-3 text-body">Jennifer Schramm</h6>
</a></td>
<td className="payment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary"><span className="badge badge-phoenix fs-10 badge-phoenix-success"><span className="badge-label">Paid</span><span className="ms-1" data-feather="check" style={{height: "12.8px", width: "12.8px"}}></span></span></td>
<td className="fulfilment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary"><span className="badge badge-phoenix fs-10 badge-phoenix-info"><span className="badge-label">Ready to pickup</span><span className="ms-1" data-feather="info" style={{height: "12.8px", width: "12.8px"}}></span></span></td>
<td className="delivery_type align-middle white-space-nowrap text-body fs-9 text-start">Local delivery</td>
<td className="date align-middle white-space-nowrap text-body-tertiary fs-9 ps-4 text-end">Nov 02, 2:00 AM</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="fs-9 align-middle px-0 py-3">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;order&quot;:2440,&quot;total&quot;:80,&quot;customer&quot;:&#123;&quot;avatar&quot;:&quot;/team/25.webp&quot;,&quot;name&quot;:&quot;Michael Jenkins&quot;&#125;,&quot;payment_status&quot;:&#123;&quot;label&quot;:&quot;Cancelled&quot;,&quot;type&quot;:&quot;badge-phoenix-secondary&quot;,&quot;icon&quot;:&quot;x&quot;&#125;,&quot;fulfilment_status&quot;:&#123;&quot;label&quot;:&quot;Unfulfiled&quot;,&quot;type&quot;:&quot;badge-phoenix-danger&quot;,&quot;icon&quot;:&quot;x&quot;&#125;,&quot;delivery_type&quot;:&quot;Free shipping&quot;,&quot;date&quot;:&quot;Oct 30, 4:25 PM&quot;&#125;" /></div>
</td>
<td className="order align-middle white-space-nowrap py-0"><a className="fw-semibold" href="#!">#2440</a></td>
<td className="total align-middle text-end fw-semibold text-body-highlight">$80</td>
<td className="customer align-middle white-space-nowrap ps-8"><a className="d-flex align-items-center text-body" href="/apps/e-commerce/landing/profile">
<div className="avatar avatar-m"><img className="rounded-circle" src="/site/assets/img/team/25.webp" alt="" /></div>
<h6 className="mb-0 ms-3 text-body">Michael Jenkins</h6>
</a></td>
<td className="payment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary"><span className="badge badge-phoenix fs-10 badge-phoenix-secondary"><span className="badge-label">Cancelled</span><span className="ms-1" data-feather="x" style={{height: "12.8px", width: "12.8px"}}></span></span></td>
<td className="fulfilment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary"><span className="badge badge-phoenix fs-10 badge-phoenix-danger"><span className="badge-label">Unfulfiled</span><span className="ms-1" data-feather="x" style={{height: "12.8px", width: "12.8px"}}></span></span></td>
<td className="delivery_type align-middle white-space-nowrap text-body fs-9 text-start">Free shipping</td>
<td className="date align-middle white-space-nowrap text-body-tertiary fs-9 ps-4 text-end">Oct 30, 4:25 PM</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="fs-9 align-middle px-0 py-3">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;order&quot;:2439,&quot;total&quot;:999,&quot;customer&quot;:&#123;&quot;avatar&quot;:&quot;/team/32.webp&quot;,&quot;name&quot;:&quot;Raymond Mims&quot;&#125;,&quot;payment_status&quot;:&#123;&quot;label&quot;:&quot;Pending&quot;,&quot;type&quot;:&quot;badge-phoenix-warning&quot;,&quot;icon&quot;:&quot;clock&quot;&#125;,&quot;fulfilment_status&quot;:&#123;&quot;label&quot;:&quot;Fulfiled&quot;,&quot;type&quot;:&quot;badge-phoenix-success&quot;,&quot;icon&quot;:&quot;check&quot;&#125;,&quot;delivery_type&quot;:&quot;Cash on delivery&quot;,&quot;date&quot;:&quot;Oct 28, 3:00 PM&quot;&#125;" /></div>
</td>
<td className="order align-middle white-space-nowrap py-0"><a className="fw-semibold" href="#!">#2439</a></td>
<td className="total align-middle text-end fw-semibold text-body-highlight">$999</td>
<td className="customer align-middle white-space-nowrap ps-8"><a className="d-flex align-items-center text-body" href="/apps/e-commerce/landing/profile">
<div className="avatar avatar-m"><img className="rounded-circle" src="/site/assets/img/team/32.webp" alt="" /></div>
<h6 className="mb-0 ms-3 text-body">Raymond Mims</h6>
</a></td>
<td className="payment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary"><span className="badge badge-phoenix fs-10 badge-phoenix-warning"><span className="badge-label">Pending</span><span className="ms-1" data-feather="clock" style={{height: "12.8px", width: "12.8px"}}></span></span></td>
<td className="fulfilment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary"><span className="badge badge-phoenix fs-10 badge-phoenix-success"><span className="badge-label">Fulfiled</span><span className="ms-1" data-feather="check" style={{height: "12.8px", width: "12.8px"}}></span></span></td>
<td className="delivery_type align-middle white-space-nowrap text-body fs-9 text-start">Cash on delivery</td>
<td className="date align-middle white-space-nowrap text-body-tertiary fs-9 ps-4 text-end">Oct 28, 3:00 PM</td>
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
