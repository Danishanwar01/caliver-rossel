import DashboardNavbars from '../components/DashboardNavbars.jsx';
/* Auto-converted from the original HTML. Visual/markup structure intentionally preserved. */
export default function AppsECommerceAdminCustomersPage() {
  return (
    <>




<main className="main" id="top">
<DashboardNavbars />










<div className="content">

<div className="mb-9">
<div className="row g-2 mb-4">
<div className="col-auto">
<h2 className="mb-0">Customers</h2>
</div>
</div>
<ul className="nav nav-links mb-3 mb-lg-2 mx-n3">
<li className="nav-item"><a className="nav-link active" aria-current="page" href="#"><span>All </span><span className="text-body-tertiary fw-semibold">(68817)</span></a></li>
<li className="nav-item"><a className="nav-link" href="#"><span>New </span><span className="text-body-tertiary fw-semibold">(6)</span></a></li>
<li className="nav-item"><a className="nav-link" href="#"><span>Abandoned checkouts </span><span className="text-body-tertiary fw-semibold">(17)</span></a></li>
<li className="nav-item"><a className="nav-link" href="#"><span>Locals </span><span className="text-body-tertiary fw-semibold">(6,810)</span></a></li>
<li className="nav-item"><a className="nav-link" href="#"><span>Email subscribers </span><span className="text-body-tertiary fw-semibold">(8)</span></a></li>
<li className="nav-item"><a className="nav-link" href="#"><span>Top reviews </span><span className="text-body-tertiary fw-semibold">(2)</span></a></li>
</ul>
<div id="products" data-list="&#123;&quot;valueNames&quot;:[&quot;customer&quot;,&quot;email&quot;,&quot;total-orders&quot;,&quot;total-spent&quot;,&quot;city&quot;,&quot;last-seen&quot;,&quot;last-order&quot;],&quot;page&quot;:10,&quot;pagination&quot;:true&#125;">
<div className="mb-4">
<div className="row g-3">
<div className="col-auto">
<div className="search-box">
<form className="position-relative"><input className="form-control search-input search" type="search" placeholder="Search customers" aria-label="Search" />
<span className="fas fa-search search-box-icon"></span>
</form>
</div>
</div>
<div className="col-auto scrollbar overflow-hidden-y flex-grow-1">
<div className="btn-group position-static" role="group">
<div className="btn-group position-static text-nowrap"><button className="btn btn-phoenix-secondary px-7 flex-shrink-0" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"> Country<span className="fas fa-angle-down ms-2"></span></button>
<ul className="dropdown-menu">
<li><a className="dropdown-item" href="#">US</a></li>
<li><a className="dropdown-item" href="#">Uk</a></li>
<li><a className="dropdown-item" href="#">Australia</a></li>
</ul>
</div>
<div className="btn-group position-static text-nowrap"><button className="btn btn-sm btn-phoenix-secondary px-7 flex-shrink-0" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"> VIP<span className="fas fa-angle-down ms-2"></span></button>
<ul className="dropdown-menu">
<li><a className="dropdown-item" href="#">VIP 1</a></li>
<li><a className="dropdown-item" href="#">VIP 2</a></li>
<li><a className="dropdown-item" href="#">VIP 3</a></li>
<li></li>
</ul>
</div><button className="btn btn-phoenix-secondary px-7 flex-shrink-0">More filters</button>
</div>
</div>
<div className="col-auto"><button className="btn btn-link text-body me-4 px-0"><span className="fa-solid fa-file-export fs-9 me-2"></span>Export</button>
<button className="btn btn-primary"><span className="fas fa-plus me-2"></span>Add customer</button>
</div>
</div>
</div>
<div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
<div className="table-responsive scrollbar-overlay mx-n1 px-1">
<table className="table table-sm fs-9 mb-0">
<thead>
<tr>
<th className="white-space-nowrap fs-9 align-middle ps-0">
<div className="form-check mb-0 fs-8"><input className="form-check-input" id="checkbox-bulk-customers-select" type="checkbox" data-bulk-select="&#123;&quot;body&quot;:&quot;customers-table-body&quot;&#125;" /></div>
</th>
<th className="sort align-middle pe-5" scope="col" data-sort="customer" style={{width: "10%"}}>CUSTOMER</th>
<th className="sort align-middle pe-5" scope="col" data-sort="email" style={{width: "20%"}}>EMAIL</th>
<th className="sort align-middle text-end" scope="col" data-sort="total-orders" style={{width: "10%"}}>ORDERS</th>
<th className="sort align-middle text-end ps-3" scope="col" data-sort="total-spent" style={{width: "10%"}}>TOTAL SPENT</th>
<th className="sort align-middle ps-7" scope="col" data-sort="city" style={{width: "25%"}}>CITY</th>
<th className="sort align-middle text-end" scope="col" data-sort="last-seen" style={{width: "15%"}}>LAST SEEN</th>
<th className="sort align-middle text-end pe-0" scope="col" data-sort="last-order" style={{width: "10%", minWidth: "150px"}}>LAST ORDER</th>
</tr>
</thead>
<tbody className="list" id="customers-table-body">
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="fs-9 align-middle ps-0 py-3">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;customer&quot;:&#123;&quot;avatar&quot;:&quot;/team/32.webp&quot;,&quot;name&quot;:&quot;Carry Anna&quot;&#125;,&quot;email&quot;:&quot;annac34@gmail.com&quot;,&quot;city&quot;:&quot;Budapest&quot;,&quot;totalOrders&quot;:89,&quot;totalSpent&quot;:23987,&quot;lastSeen&quot;:&quot;34 min ago&quot;,&quot;lastOrder&quot;:&quot;Dec 12, 12:56 PM&quot;&#125;" /></div>
</td>
<td className="customer align-middle white-space-nowrap pe-5"><a className="d-flex align-items-center text-body-emphasis" href="/apps/e-commerce/admin/customer-details">
<div className="avatar avatar-m"><img className="rounded-circle" src="/site/assets/img/team/32.webp" alt="" /></div>
<p className="mb-0 ms-3 text-body-emphasis fw-bold">Carry Anna</p>
</a></td>
<td className="email align-middle white-space-nowrap pe-5"><a className="fw-semibold" href="mailto:annac34@gmail.com">annac34@gmail.com</a></td>
<td className="total-orders align-middle white-space-nowrap fw-semibold text-end text-body-highlight">89</td>
<td className="total-spent align-middle white-space-nowrap fw-bold text-end ps-3 text-body-emphasis">$ 23987</td>
<td className="city align-middle white-space-nowrap text-body-highlight ps-7">Budapest</td>
<td className="last-seen align-middle white-space-nowrap text-body-tertiary text-end">34 min ago</td>
<td className="last-order align-middle white-space-nowrap text-body-tertiary text-end">Dec 12, 12:56 PM</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="fs-9 align-middle ps-0 py-3">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;customer&quot;:&#123;&quot;avatar&quot;:&quot;/team/avatar.webp&quot;,&quot;name&quot;:&quot;Milind Mikuja&quot;,&quot;placeholder&quot;:true&#125;,&quot;email&quot;:&quot;mimiku@yahoo.com&quot;,&quot;city&quot;:&quot;Manchester&quot;,&quot;totalOrders&quot;:76,&quot;totalSpent&quot;:21567,&quot;lastSeen&quot;:&quot;6 hours ago&quot;,&quot;lastOrder&quot;:&quot;Dec 9, 2:28 PM&quot;&#125;" /></div>
</td>
<td className="customer align-middle white-space-nowrap pe-5"><a className="d-flex align-items-center text-body-emphasis" href="/apps/e-commerce/admin/customer-details">
<div className="avatar avatar-m"><img className="rounded-circle avatar-placeholder" src="/site/assets/img/team/avatar.webp" alt="" /></div>
<p className="mb-0 ms-3 text-body-emphasis fw-bold">Milind Mikuja</p>
</a></td>
<td className="email align-middle white-space-nowrap pe-5"><a className="fw-semibold" href="mailto:mimiku@yahoo.com">mimiku@yahoo.com</a></td>
<td className="total-orders align-middle white-space-nowrap fw-semibold text-end text-body-highlight">76</td>
<td className="total-spent align-middle white-space-nowrap fw-bold text-end ps-3 text-body-emphasis">$ 21567</td>
<td className="city align-middle white-space-nowrap text-body-highlight ps-7">Manchester</td>
<td className="last-seen align-middle white-space-nowrap text-body-tertiary text-end">6 hours ago</td>
<td className="last-order align-middle white-space-nowrap text-body-tertiary text-end">Dec 9, 2:28 PM</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="fs-9 align-middle ps-0 py-3">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;customer&quot;:&#123;&quot;avatar&quot;:&quot;/team/35.webp&quot;,&quot;name&quot;:&quot;Stanly Drinkwater&quot;&#125;,&quot;email&quot;:&quot;stnlwasser@hotmail.com&quot;,&quot;city&quot;:&quot;Smallville&quot;,&quot;totalOrders&quot;:69,&quot;totalSpent&quot;:19872,&quot;lastSeen&quot;:&quot;43 min ago&quot;,&quot;lastOrder&quot;:&quot;Dec 4, 12:56 PM&quot;&#125;" /></div>
</td>
<td className="customer align-middle white-space-nowrap pe-5"><a className="d-flex align-items-center text-body-emphasis" href="/apps/e-commerce/admin/customer-details">
<div className="avatar avatar-m"><img className="rounded-circle" src="/site/assets/img/team/35.webp" alt="" /></div>
<p className="mb-0 ms-3 text-body-emphasis fw-bold">Stanly Drinkwater</p>
</a></td>
<td className="email align-middle white-space-nowrap pe-5"><a className="fw-semibold" href="mailto:stnlwasser@hotmail.com">stnlwasser@hotmail.com</a></td>
<td className="total-orders align-middle white-space-nowrap fw-semibold text-end text-body-highlight">69</td>
<td className="total-spent align-middle white-space-nowrap fw-bold text-end ps-3 text-body-emphasis">$ 19872</td>
<td className="city align-middle white-space-nowrap text-body-highlight ps-7">Smallville</td>
<td className="last-seen align-middle white-space-nowrap text-body-tertiary text-end">43 min ago</td>
<td className="last-order align-middle white-space-nowrap text-body-tertiary text-end">Dec 4, 12:56 PM</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="fs-9 align-middle ps-0 py-3">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;customer&quot;:&#123;&quot;avatar&quot;:&quot;/team/57.webp&quot;,&quot;name&quot;:&quot;Josef Stravinsky&quot;&#125;,&quot;email&quot;:&quot;Josefsky@sni.it&quot;,&quot;city&quot;:&quot;Metropolis&quot;,&quot;totalOrders&quot;:67,&quot;totalSpent&quot;:17996,&quot;lastSeen&quot;:&quot;2 hours ago&quot;,&quot;lastOrder&quot;:&quot;Dec 1,  4:07 AM&quot;&#125;" /></div>
</td>
<td className="customer align-middle white-space-nowrap pe-5"><a className="d-flex align-items-center text-body-emphasis" href="/apps/e-commerce/admin/customer-details">
<div className="avatar avatar-m"><img className="rounded-circle" src="/site/assets/img/team/57.webp" alt="" /></div>
<p className="mb-0 ms-3 text-body-emphasis fw-bold">Josef Stravinsky</p>
</a></td>
<td className="email align-middle white-space-nowrap pe-5"><a className="fw-semibold" href="mailto:Josefsky@sni.it">Josefsky@sni.it</a></td>
<td className="total-orders align-middle white-space-nowrap fw-semibold text-end text-body-highlight">67</td>
<td className="total-spent align-middle white-space-nowrap fw-bold text-end ps-3 text-body-emphasis">$ 17996</td>
<td className="city align-middle white-space-nowrap text-body-highlight ps-7">Metropolis</td>
<td className="last-seen align-middle white-space-nowrap text-body-tertiary text-end">2 hours ago</td>
<td className="last-order align-middle white-space-nowrap text-body-tertiary text-end">Dec 1, 4:07 AM</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="fs-9 align-middle ps-0 py-3">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;customer&quot;:&#123;&quot;avatar&quot;:&quot;/team/58.webp&quot;,&quot;name&quot;:&quot;Igor Borvibson&quot;&#125;,&quot;email&quot;:&quot;vibigorr@technext.it&quot;,&quot;city&quot;:&quot;Central city&quot;,&quot;totalOrders&quot;:61,&quot;totalSpent&quot;:16785,&quot;lastSeen&quot;:&quot;5 days ago&quot;,&quot;lastOrder&quot;:&quot;Nov 28, 7:28 PM&quot;&#125;" /></div>
</td>
<td className="customer align-middle white-space-nowrap pe-5"><a className="d-flex align-items-center text-body-emphasis" href="/apps/e-commerce/admin/customer-details">
<div className="avatar avatar-m"><img className="rounded-circle" src="/site/assets/img/team/58.webp" alt="" /></div>
<p className="mb-0 ms-3 text-body-emphasis fw-bold">Igor Borvibson</p>
</a></td>
<td className="email align-middle white-space-nowrap pe-5"><a className="fw-semibold" href="mailto:vibigorr@technext.it">vibigorr@technext.it</a></td>
<td className="total-orders align-middle white-space-nowrap fw-semibold text-end text-body-highlight">61</td>
<td className="total-spent align-middle white-space-nowrap fw-bold text-end ps-3 text-body-emphasis">$ 16785</td>
<td className="city align-middle white-space-nowrap text-body-highlight ps-7">Central city</td>
<td className="last-seen align-middle white-space-nowrap text-body-tertiary text-end">5 days ago</td>
<td className="last-order align-middle white-space-nowrap text-body-tertiary text-end">Nov 28, 7:28 PM</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="fs-9 align-middle ps-0 py-3">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;customer&quot;:&#123;&quot;avatar&quot;:&quot;/team/59.webp&quot;,&quot;name&quot;:&quot;Katerina Karenin&quot;&#125;,&quot;email&quot;:&quot;karkat99@gmail.com&quot;,&quot;city&quot;:&quot;Gotham&quot;,&quot;totalOrders&quot;:58,&quot;totalSpent&quot;:14956,&quot;lastSeen&quot;:&quot;2 weeks ago&quot;,&quot;lastOrder&quot;:&quot;Nov 24, 10:16 AM&quot;&#125;" /></div>
</td>
<td className="customer align-middle white-space-nowrap pe-5"><a className="d-flex align-items-center text-body-emphasis" href="/apps/e-commerce/admin/customer-details">
<div className="avatar avatar-m"><img className="rounded-circle" src="/site/assets/img/team/59.webp" alt="" /></div>
<p className="mb-0 ms-3 text-body-emphasis fw-bold">Katerina Karenin</p>
</a></td>
<td className="email align-middle white-space-nowrap pe-5"><a className="fw-semibold" href="mailto:karkat99@gmail.com">karkat99@gmail.com</a></td>
<td className="total-orders align-middle white-space-nowrap fw-semibold text-end text-body-highlight">58</td>
<td className="total-spent align-middle white-space-nowrap fw-bold text-end ps-3 text-body-emphasis">$ 14956</td>
<td className="city align-middle white-space-nowrap text-body-highlight ps-7">Gotham</td>
<td className="last-seen align-middle white-space-nowrap text-body-tertiary text-end">2 weeks ago</td>
<td className="last-order align-middle white-space-nowrap text-body-tertiary text-end">Nov 24, 10:16 AM</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="fs-9 align-middle ps-0 py-3">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;customer&quot;:&#123;&quot;avatar&quot;:&quot;&quot;,&quot;name&quot;:&quot;Roy Anderson&quot;&#125;,&quot;email&quot;:&quot;andersonroy@netflix.chill&quot;,&quot;city&quot;:&quot;Vancouver&quot;,&quot;totalOrders&quot;:52,&quot;totalSpent&quot;:12509,&quot;lastSeen&quot;:&quot;4 days ago&quot;,&quot;lastOrder&quot;:&quot;Nov 18, 5:43 PM&quot;&#125;" /></div>
</td>
<td className="customer align-middle white-space-nowrap pe-5"><a className="d-flex align-items-center text-body-emphasis" href="/apps/e-commerce/admin/customer-details">
<div className="avatar avatar-m">
<div className="avatar-name rounded-circle"><span>R</span></div>
</div>
<p className="mb-0 ms-3 text-body-emphasis fw-bold">Roy Anderson</p>
</a></td>
<td className="email align-middle white-space-nowrap pe-5"><a className="fw-semibold" href="mailto:andersonroy@netflix.chill">andersonroy@netflix.chill</a></td>
<td className="total-orders align-middle white-space-nowrap fw-semibold text-end text-body-highlight">52</td>
<td className="total-spent align-middle white-space-nowrap fw-bold text-end ps-3 text-body-emphasis">$ 12509</td>
<td className="city align-middle white-space-nowrap text-body-highlight ps-7">Vancouver</td>
<td className="last-seen align-middle white-space-nowrap text-body-tertiary text-end">4 days ago</td>
<td className="last-order align-middle white-space-nowrap text-body-tertiary text-end">Nov 18, 5:43 PM</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="fs-9 align-middle ps-0 py-3">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;customer&quot;:&#123;&quot;avatar&quot;:&quot;/team/31.webp&quot;,&quot;name&quot;:&quot;Martina scorcese&quot;&#125;,&quot;email&quot;:&quot;cesetina1@gmail.com&quot;,&quot;city&quot;:&quot;Viena&quot;,&quot;totalOrders&quot;:49,&quot;totalSpent&quot;:11003,&quot;lastSeen&quot;:&quot;6 min ago&quot;,&quot;lastOrder&quot;:&quot;Nov 18, 2:09 AM&quot;&#125;" /></div>
</td>
<td className="customer align-middle white-space-nowrap pe-5"><a className="d-flex align-items-center text-body-emphasis" href="/apps/e-commerce/admin/customer-details">
<div className="avatar avatar-m"><img className="rounded-circle" src="/site/assets/img/team/31.webp" alt="" /></div>
<p className="mb-0 ms-3 text-body-emphasis fw-bold">Martina scorcese</p>
</a></td>
<td className="email align-middle white-space-nowrap pe-5"><a className="fw-semibold" href="mailto:cesetina1@gmail.com">cesetina1@gmail.com</a></td>
<td className="total-orders align-middle white-space-nowrap fw-semibold text-end text-body-highlight">49</td>
<td className="total-spent align-middle white-space-nowrap fw-bold text-end ps-3 text-body-emphasis">$ 11003</td>
<td className="city align-middle white-space-nowrap text-body-highlight ps-7">Viena</td>
<td className="last-seen align-middle white-space-nowrap text-body-tertiary text-end">6 min ago</td>
<td className="last-order align-middle white-space-nowrap text-body-tertiary text-end">Nov 18, 2:09 AM</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="fs-9 align-middle ps-0 py-3">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;customer&quot;:&#123;&quot;avatar&quot;:&quot;/team/33.webp&quot;,&quot;name&quot;:&quot;Luis Bunuel&quot;&#125;,&quot;email&quot;:&quot;luisuel@live.com&quot;,&quot;city&quot;:&quot;Bangalore&quot;,&quot;totalOrders&quot;:44,&quot;totalSpent&quot;:7897,&quot;lastSeen&quot;:&quot;56 min ago&quot;,&quot;lastOrder&quot;:&quot;Nov 16, 3:22 PM&quot;&#125;" /></div>
</td>
<td className="customer align-middle white-space-nowrap pe-5"><a className="d-flex align-items-center text-body-emphasis" href="/apps/e-commerce/admin/customer-details">
<div className="avatar avatar-m"><img className="rounded-circle" src="/site/assets/img/team/33.webp" alt="" /></div>
<p className="mb-0 ms-3 text-body-emphasis fw-bold">Luis Bunuel</p>
</a></td>
<td className="email align-middle white-space-nowrap pe-5"><a className="fw-semibold" href="mailto:luisuel@live.com">luisuel@live.com</a></td>
<td className="total-orders align-middle white-space-nowrap fw-semibold text-end text-body-highlight">44</td>
<td className="total-spent align-middle white-space-nowrap fw-bold text-end ps-3 text-body-emphasis">$ 7897</td>
<td className="city align-middle white-space-nowrap text-body-highlight ps-7">Bangalore</td>
<td className="last-seen align-middle white-space-nowrap text-body-tertiary text-end">56 min ago</td>
<td className="last-order align-middle white-space-nowrap text-body-tertiary text-end">Nov 16, 3:22 PM</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="fs-9 align-middle ps-0 py-3">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;customer&quot;:&#123;&quot;avatar&quot;:&quot;/team/34.webp&quot;,&quot;name&quot;:&quot;Jean Renoir&quot;&#125;,&quot;email&quot;:&quot;renoirjean1836@gmail.com&quot;,&quot;city&quot;:&quot;Chittagong&quot;,&quot;totalOrders&quot;:37,&quot;totalSpent&quot;:7781,&quot;lastSeen&quot;:&quot;Yesterday&quot;,&quot;lastOrder&quot;:&quot;Nov 09, 8:49 AM&quot;&#125;" /></div>
</td>
<td className="customer align-middle white-space-nowrap pe-5"><a className="d-flex align-items-center text-body-emphasis" href="/apps/e-commerce/admin/customer-details">
<div className="avatar avatar-m"><img className="rounded-circle" src="/site/assets/img/team/34.webp" alt="" /></div>
<p className="mb-0 ms-3 text-body-emphasis fw-bold">Jean Renoir</p>
</a></td>
<td className="email align-middle white-space-nowrap pe-5"><a className="fw-semibold" href="mailto:renoirjean1836@gmail.com">renoirjean1836@gmail.com</a></td>
<td className="total-orders align-middle white-space-nowrap fw-semibold text-end text-body-highlight">37</td>
<td className="total-spent align-middle white-space-nowrap fw-bold text-end ps-3 text-body-emphasis">$ 7781</td>
<td className="city align-middle white-space-nowrap text-body-highlight ps-7">Chittagong</td>
<td className="last-seen align-middle white-space-nowrap text-body-tertiary text-end">Yesterday</td>
<td className="last-order align-middle white-space-nowrap text-body-tertiary text-end">Nov 09, 8:49 AM</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="fs-9 align-middle ps-0 py-3">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;customer&quot;:&#123;&quot;avatar&quot;:&quot;/team/29.webp&quot;,&quot;name&quot;:&quot;Ricky Antony&quot;&#125;,&quot;email&quot;:&quot;ricky@example.com&quot;,&quot;city&quot;:&quot;New Jersey&quot;,&quot;totalOrders&quot;:33,&quot;totalSpent&quot;:7825,&quot;lastSeen&quot;:&quot;1 hour ago&quot;,&quot;lastOrder&quot;:&quot;Oct 19, 8:00 AM&quot;&#125;" /></div>
</td>
<td className="customer align-middle white-space-nowrap pe-5"><a className="d-flex align-items-center text-body-emphasis" href="/apps/e-commerce/admin/customer-details">
<div className="avatar avatar-m"><img className="rounded-circle" src="/site/assets/img/team/29.webp" alt="" /></div>
<p className="mb-0 ms-3 text-body-emphasis fw-bold">Ricky Antony</p>
</a></td>
<td className="email align-middle white-space-nowrap pe-5"><a className="fw-semibold" href="mailto:ricky@example.com">ricky@example.com</a></td>
<td className="total-orders align-middle white-space-nowrap fw-semibold text-end text-body-highlight">33</td>
<td className="total-spent align-middle white-space-nowrap fw-bold text-end ps-3 text-body-emphasis">$ 7825</td>
<td className="city align-middle white-space-nowrap text-body-highlight ps-7">New Jersey</td>
<td className="last-seen align-middle white-space-nowrap text-body-tertiary text-end">1 hour ago</td>
<td className="last-order align-middle white-space-nowrap text-body-tertiary text-end">Oct 19, 8:00 AM</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="fs-9 align-middle ps-0 py-3">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;customer&quot;:&#123;&quot;avatar&quot;:&quot;/team/3.webp&quot;,&quot;name&quot;:&quot;Emma Watson&quot;&#125;,&quot;email&quot;:&quot;emma@example.com&quot;,&quot;city&quot;:&quot;New York&quot;,&quot;totalOrders&quot;:45,&quot;totalSpent&quot;:18975,&quot;lastSeen&quot;:&quot;6 hours ago&quot;,&quot;lastOrder&quot;:&quot;Oct 15, 12:00 PM&quot;&#125;" /></div>
</td>
<td className="customer align-middle white-space-nowrap pe-5"><a className="d-flex align-items-center text-body-emphasis" href="/apps/e-commerce/admin/customer-details">
<div className="avatar avatar-m"><img className="rounded-circle" src="/site/assets/img/team/3.webp" alt="" /></div>
<p className="mb-0 ms-3 text-body-emphasis fw-bold">Emma Watson</p>
</a></td>
<td className="email align-middle white-space-nowrap pe-5"><a className="fw-semibold" href="mailto:emma@example.com">emma@example.com</a></td>
<td className="total-orders align-middle white-space-nowrap fw-semibold text-end text-body-highlight">45</td>
<td className="total-spent align-middle white-space-nowrap fw-bold text-end ps-3 text-body-emphasis">$ 18975</td>
<td className="city align-middle white-space-nowrap text-body-highlight ps-7">New York</td>
<td className="last-seen align-middle white-space-nowrap text-body-tertiary text-end">6 hours ago</td>
<td className="last-order align-middle white-space-nowrap text-body-tertiary text-end">Oct 15, 12:00 PM</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="fs-9 align-middle ps-0 py-3">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;customer&quot;:&#123;&quot;avatar&quot;:&quot;/team/avatar.webp&quot;,&quot;name&quot;:&quot;Jennifer Schramm&quot;,&quot;placeholder&quot;:true&#125;,&quot;email&quot;:&quot;jennifer@example.com&quot;,&quot;city&quot;:&quot;Charlotte&quot;,&quot;totalOrders&quot;:39,&quot;totalSpent&quot;:8967,&quot;lastSeen&quot;:&quot;12 hours ago&quot;,&quot;lastOrder&quot;:&quot;Oct 12, 11:00 AM&quot;&#125;" /></div>
</td>
<td className="customer align-middle white-space-nowrap pe-5"><a className="d-flex align-items-center text-body-emphasis" href="/apps/e-commerce/admin/customer-details">
<div className="avatar avatar-m"><img className="rounded-circle avatar-placeholder" src="/site/assets/img/team/avatar.webp" alt="" /></div>
<p className="mb-0 ms-3 text-body-emphasis fw-bold">Jennifer Schramm</p>
</a></td>
<td className="email align-middle white-space-nowrap pe-5"><a className="fw-semibold" href="mailto:jennifer@example.com">jennifer@example.com</a></td>
<td className="total-orders align-middle white-space-nowrap fw-semibold text-end text-body-highlight">39</td>
<td className="total-spent align-middle white-space-nowrap fw-bold text-end ps-3 text-body-emphasis">$ 8967</td>
<td className="city align-middle white-space-nowrap text-body-highlight ps-7">Charlotte</td>
<td className="last-seen align-middle white-space-nowrap text-body-tertiary text-end">12 hours ago</td>
<td className="last-order align-middle white-space-nowrap text-body-tertiary text-end">Oct 12, 11:00 AM</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="fs-9 align-middle ps-0 py-3">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;customer&quot;:&#123;&quot;avatar&quot;:&quot;/team/32.webp&quot;,&quot;name&quot;:&quot;Raymond Mims&quot;&#125;,&quot;email&quot;:&quot;raymond@example.com&quot;,&quot;city&quot;:&quot;Artesia&quot;,&quot;totalOrders&quot;:30,&quot;totalSpent&quot;:14587,&quot;lastSeen&quot;:&quot;2 day ago&quot;,&quot;lastOrder&quot;:&quot;Oct 10, 8:30 AM&quot;&#125;" /></div>
</td>
<td className="customer align-middle white-space-nowrap pe-5"><a className="d-flex align-items-center text-body-emphasis" href="/apps/e-commerce/admin/customer-details">
<div className="avatar avatar-m"><img className="rounded-circle" src="/site/assets/img/team/32.webp" alt="" /></div>
<p className="mb-0 ms-3 text-body-emphasis fw-bold">Raymond Mims</p>
</a></td>
<td className="email align-middle white-space-nowrap pe-5"><a className="fw-semibold" href="mailto:raymond@example.com">raymond@example.com</a></td>
<td className="total-orders align-middle white-space-nowrap fw-semibold text-end text-body-highlight">30</td>
<td className="total-spent align-middle white-space-nowrap fw-bold text-end ps-3 text-body-emphasis">$ 14587</td>
<td className="city align-middle white-space-nowrap text-body-highlight ps-7">Artesia</td>
<td className="last-seen align-middle white-space-nowrap text-body-tertiary text-end">2 day ago</td>
<td className="last-order align-middle white-space-nowrap text-body-tertiary text-end">Oct 10, 8:30 AM</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="fs-9 align-middle ps-0 py-3">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;customer&quot;:&#123;&quot;avatar&quot;:&quot;/team/25.webp&quot;,&quot;name&quot;:&quot;Michael Jenkins&quot;&#125;,&quot;email&quot;:&quot;jenkins@example.com&quot;,&quot;city&quot;:&quot;Philadelphia&quot;,&quot;totalOrders&quot;:43,&quot;totalSpent&quot;:45697,&quot;lastSeen&quot;:&quot;12 hours ago&quot;,&quot;lastOrder&quot;:&quot;Oct 3, 8:30 AM&quot;&#125;" /></div>
</td>
<td className="customer align-middle white-space-nowrap pe-5"><a className="d-flex align-items-center text-body-emphasis" href="/apps/e-commerce/admin/customer-details">
<div className="avatar avatar-m"><img className="rounded-circle" src="/site/assets/img/team/25.webp" alt="" /></div>
<p className="mb-0 ms-3 text-body-emphasis fw-bold">Michael Jenkins</p>
</a></td>
<td className="email align-middle white-space-nowrap pe-5"><a className="fw-semibold" href="mailto:jenkins@example.com">jenkins@example.com</a></td>
<td className="total-orders align-middle white-space-nowrap fw-semibold text-end text-body-highlight">43</td>
<td className="total-spent align-middle white-space-nowrap fw-bold text-end ps-3 text-body-emphasis">$ 45697</td>
<td className="city align-middle white-space-nowrap text-body-highlight ps-7">Philadelphia</td>
<td className="last-seen align-middle white-space-nowrap text-body-tertiary text-end">12 hours ago</td>
<td className="last-order align-middle white-space-nowrap text-body-tertiary text-end">Oct 3, 8:30 AM</td>
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
