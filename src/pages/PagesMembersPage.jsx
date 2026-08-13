import DashboardNavbars from '../components/DashboardNavbars.jsx';
/* Auto-converted from the original HTML. Visual/markup structure intentionally preserved. */
export default function PagesMembersPage() {
  return (
    <>




<main className="main" id="top">
<DashboardNavbars />










<div className="content">

<h2 className="text-bold text-body-emphasis mb-5">Members</h2>
<div id="members" data-list="&#123;&quot;valueNames&quot;:[&quot;customer&quot;,&quot;email&quot;,&quot;mobile_number&quot;,&quot;city&quot;,&quot;last_active&quot;,&quot;joined&quot;],&quot;page&quot;:10,&quot;pagination&quot;:true&#125;">
<div className="row align-items-center justify-content-between g-3 mb-4">
<div className="col col-auto">
<div className="search-box">
<form className="position-relative"><input className="form-control search-input search" type="search" placeholder="Search members" aria-label="Search" />
<span className="fas fa-search search-box-icon"></span>
</form>
</div>
</div>
<div className="col-auto">
<div className="d-flex align-items-center"><button className="btn btn-link text-body me-4 px-0"><span className="fa-solid fa-file-export fs-9 me-2"></span>Export</button>
<button className="btn btn-primary"><span className="fas fa-plus me-2"></span>Add member</button>
</div>
</div>
</div>
<div className="mx-n4 mx-lg-n6 px-4 px-lg-6 mb-9 bg-body-emphasis border-y mt-2 position-relative top-1">
<div className="table-responsive scrollbar ms-n1 ps-1">
<table className="table table-sm fs-9 mb-0">
<thead>
<tr>
<th className="white-space-nowrap fs-9 align-middle ps-0">
<div className="form-check mb-0 fs-8"><input className="form-check-input" id="checkbox-bulk-members-select" type="checkbox" data-bulk-select="&#123;&quot;body&quot;:&quot;members-table-body&quot;&#125;" /></div>
</th>
<th className="sort align-middle" scope="col" data-sort="customer" style={{width: "15%", minWidth: "200px"}}>CUSTOMER</th>
<th className="sort align-middle" scope="col" data-sort="email" style={{width: "15%", minWidth: "200px"}}>EMAIL</th>
<th className="sort align-middle pe-3" scope="col" data-sort="mobile_number" style={{width: "20%", minWidth: "200px"}}>MOBILE NUMBER</th>
<th className="sort align-middle" scope="col" data-sort="city" style={{width: "10%"}}>CITY</th>
<th className="sort align-middle text-end" scope="col" data-sort="last_active" style={{width: "21%", minWidth: "200px"}}>LAST ACTIVE</th>
<th className="sort align-middle text-end pe-0" scope="col" data-sort="joined" style={{width: "19%", minWidth: "200px"}}>JOINED</th>
</tr>
</thead>
<tbody className="list" id="members-table-body">
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="fs-9 align-middle ps-0 py-3">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;customer&quot;:&#123;&quot;avatar&quot;:&quot;/team/32.webp&quot;,&quot;name&quot;:&quot;Carry Anna&quot;&#125;,&quot;email&quot;:&quot;annac34@gmail.com&quot;,&quot;mobile&quot;:&quot;+912346578&quot;,&quot;city&quot;:&quot;Budapest&quot;,&quot;lastActive&quot;:&quot;34 min ago&quot;,&quot;joined&quot;:&quot;Dec 12, 12:56 PM&quot;&#125;" /></div>
</td>
<td className="customer align-middle white-space-nowrap"><a className="d-flex align-items-center text-body text-hover-1000" href="#!">
<div className="avatar avatar-m"><img className="rounded-circle" src="/site/assets/img/team/32.webp" alt="" /></div>
<h6 className="mb-0 ms-3 fw-semibold">Carry Anna</h6>
</a></td>
<td className="email align-middle white-space-nowrap"><a className="fw-semibold" href="mailto:annac34@gmail.com">annac34@gmail.com</a></td>
<td className="mobile_number align-middle white-space-nowrap"><a className="fw-bold text-body-emphasis" href="tel:+912346578">+912346578</a></td>
<td className="city align-middle white-space-nowrap text-body">Budapest</td>
<td className="last_active align-middle text-end white-space-nowrap text-body-tertiary">34 min ago</td>
<td className="joined align-middle white-space-nowrap text-body-tertiary text-end">Dec 12, 12:56 PM</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="fs-9 align-middle ps-0 py-3">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;customer&quot;:&#123;&quot;avatar&quot;:&quot;/team/avatar.webp&quot;,&quot;name&quot;:&quot;Milind Mikuja&quot;,&quot;placeholder&quot;:true&#125;,&quot;email&quot;:&quot;mimiku@yahoo.com&quot;,&quot;mobile&quot;:&quot;+8801564768976&quot;,&quot;city&quot;:&quot;Manchester&quot;,&quot;lastActive&quot;:&quot;6 hours ago&quot;,&quot;joined&quot;:&quot;Dec 9, 2:28 PM&quot;&#125;" /></div>
</td>
<td className="customer align-middle white-space-nowrap"><a className="d-flex align-items-center text-body text-hover-1000" href="#!">
<div className="avatar avatar-m"><img className="rounded-circle avatar-placeholder" src="/site/assets/img/team/avatar.webp" alt="" /></div>
<h6 className="mb-0 ms-3 fw-semibold">Milind Mikuja</h6>
</a></td>
<td className="email align-middle white-space-nowrap"><a className="fw-semibold" href="mailto:mimiku@yahoo.com">mimiku@yahoo.com</a></td>
<td className="mobile_number align-middle white-space-nowrap"><a className="fw-bold text-body-emphasis" href="tel:+8801564768976">+8801564768976</a></td>
<td className="city align-middle white-space-nowrap text-body">Manchester</td>
<td className="last_active align-middle text-end white-space-nowrap text-body-tertiary">6 hours ago</td>
<td className="joined align-middle white-space-nowrap text-body-tertiary text-end">Dec 9, 2:28 PM</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="fs-9 align-middle ps-0 py-3">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;customer&quot;:&#123;&quot;avatar&quot;:&quot;/team/35.webp&quot;,&quot;name&quot;:&quot;Stanly Drinkwater&quot;&#125;,&quot;email&quot;:&quot;stnlwasser@hotmail.com&quot;,&quot;mobile&quot;:&quot;+78675436798&quot;,&quot;city&quot;:&quot;Smallville&quot;,&quot;lastActive&quot;:&quot;43 min ago&quot;,&quot;joined&quot;:&quot;Dec 4, 12:56 PM&quot;&#125;" /></div>
</td>
<td className="customer align-middle white-space-nowrap"><a className="d-flex align-items-center text-body text-hover-1000" href="#!">
<div className="avatar avatar-m"><img className="rounded-circle" src="/site/assets/img/team/35.webp" alt="" /></div>
<h6 className="mb-0 ms-3 fw-semibold">Stanly Drinkwater</h6>
</a></td>
<td className="email align-middle white-space-nowrap"><a className="fw-semibold" href="mailto:stnlwasser@hotmail.com">stnlwasser@hotmail.com</a></td>
<td className="mobile_number align-middle white-space-nowrap"><a className="fw-bold text-body-emphasis" href="tel:+78675436798">+78675436798</a></td>
<td className="city align-middle white-space-nowrap text-body">Smallville</td>
<td className="last_active align-middle text-end white-space-nowrap text-body-tertiary">43 min ago</td>
<td className="joined align-middle white-space-nowrap text-body-tertiary text-end">Dec 4, 12:56 PM</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="fs-9 align-middle ps-0 py-3">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;customer&quot;:&#123;&quot;avatar&quot;:&quot;/team/57.webp&quot;,&quot;name&quot;:&quot;Josef Stravinsky&quot;&#125;,&quot;email&quot;:&quot;Josefsky@sni.it&quot;,&quot;mobile&quot;:&quot;+118796567894&quot;,&quot;city&quot;:&quot;Metropolis&quot;,&quot;lastActive&quot;:&quot;2 hours ago&quot;,&quot;joined&quot;:&quot;Dec 1,  4:07 AM&quot;&#125;" /></div>
</td>
<td className="customer align-middle white-space-nowrap"><a className="d-flex align-items-center text-body text-hover-1000" href="#!">
<div className="avatar avatar-m"><img className="rounded-circle" src="/site/assets/img/team/57.webp" alt="" /></div>
<h6 className="mb-0 ms-3 fw-semibold">Josef Stravinsky</h6>
</a></td>
<td className="email align-middle white-space-nowrap"><a className="fw-semibold" href="mailto:Josefsky@sni.it">Josefsky@sni.it</a></td>
<td className="mobile_number align-middle white-space-nowrap"><a className="fw-bold text-body-emphasis" href="tel:+118796567894">+118796567894</a></td>
<td className="city align-middle white-space-nowrap text-body">Metropolis</td>
<td className="last_active align-middle text-end white-space-nowrap text-body-tertiary">2 hours ago</td>
<td className="joined align-middle white-space-nowrap text-body-tertiary text-end">Dec 1, 4:07 AM</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="fs-9 align-middle ps-0 py-3">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;customer&quot;:&#123;&quot;avatar&quot;:&quot;/team/58.webp&quot;,&quot;name&quot;:&quot;Igor Borvibson&quot;&#125;,&quot;email&quot;:&quot;vibigorr@technext.it&quot;,&quot;mobile&quot;:&quot;+65899655678&quot;,&quot;city&quot;:&quot;Central city&quot;,&quot;lastActive&quot;:&quot;5 days ago&quot;,&quot;joined&quot;:&quot;Nov 28, 7:28 PM&quot;&#125;" /></div>
</td>
<td className="customer align-middle white-space-nowrap"><a className="d-flex align-items-center text-body text-hover-1000" href="#!">
<div className="avatar avatar-m"><img className="rounded-circle" src="/site/assets/img/team/58.webp" alt="" /></div>
<h6 className="mb-0 ms-3 fw-semibold">Igor Borvibson</h6>
</a></td>
<td className="email align-middle white-space-nowrap"><a className="fw-semibold" href="mailto:vibigorr@technext.it">vibigorr@technext.it</a></td>
<td className="mobile_number align-middle white-space-nowrap"><a className="fw-bold text-body-emphasis" href="tel:+65899655678">+65899655678</a></td>
<td className="city align-middle white-space-nowrap text-body">Central city</td>
<td className="last_active align-middle text-end white-space-nowrap text-body-tertiary">5 days ago</td>
<td className="joined align-middle white-space-nowrap text-body-tertiary text-end">Nov 28, 7:28 PM</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="fs-9 align-middle ps-0 py-3">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;customer&quot;:&#123;&quot;avatar&quot;:&quot;/team/59.webp&quot;,&quot;name&quot;:&quot;Katerina Karenin&quot;&#125;,&quot;email&quot;:&quot;karkat99@gmail.com&quot;,&quot;mobile&quot;:&quot;+00564327890&quot;,&quot;city&quot;:&quot;Gotham&quot;,&quot;lastActive&quot;:&quot;2 weeks ago&quot;,&quot;joined&quot;:&quot;Nov 24, 10:16 AM&quot;&#125;" /></div>
</td>
<td className="customer align-middle white-space-nowrap"><a className="d-flex align-items-center text-body text-hover-1000" href="#!">
<div className="avatar avatar-m"><img className="rounded-circle" src="/site/assets/img/team/59.webp" alt="" /></div>
<h6 className="mb-0 ms-3 fw-semibold">Katerina Karenin</h6>
</a></td>
<td className="email align-middle white-space-nowrap"><a className="fw-semibold" href="mailto:karkat99@gmail.com">karkat99@gmail.com</a></td>
<td className="mobile_number align-middle white-space-nowrap"><a className="fw-bold text-body-emphasis" href="tel:+00564327890">+00564327890</a></td>
<td className="city align-middle white-space-nowrap text-body">Gotham</td>
<td className="last_active align-middle text-end white-space-nowrap text-body-tertiary">2 weeks ago</td>
<td className="joined align-middle white-space-nowrap text-body-tertiary text-end">Nov 24, 10:16 AM</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="fs-9 align-middle ps-0 py-3">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;customer&quot;:&#123;&quot;avatar&quot;:&quot;&quot;,&quot;name&quot;:&quot;Roy Anderson&quot;&#125;,&quot;email&quot;:&quot;andersonroy@netflix.chill&quot;,&quot;mobile&quot;:&quot;+55890776&quot;,&quot;city&quot;:&quot;Vancouver&quot;,&quot;lastActive&quot;:&quot;4 days ago&quot;,&quot;joined&quot;:&quot;Nov 18, 5:43 PM&quot;&#125;" /></div>
</td>
<td className="customer align-middle white-space-nowrap"><a className="d-flex align-items-center text-body text-hover-1000" href="#!">
<div className="avatar avatar-m">
<div className="avatar-name rounded-circle"><span>R</span></div>
</div>
<h6 className="mb-0 ms-3 fw-semibold">Roy Anderson</h6>
</a></td>
<td className="email align-middle white-space-nowrap"><a className="fw-semibold" href="mailto:andersonroy@netflix.chill">andersonroy@netflix.chill</a></td>
<td className="mobile_number align-middle white-space-nowrap"><a className="fw-bold text-body-emphasis" href="tel:+55890776">+55890776</a></td>
<td className="city align-middle white-space-nowrap text-body">Vancouver</td>
<td className="last_active align-middle text-end white-space-nowrap text-body-tertiary">4 days ago</td>
<td className="joined align-middle white-space-nowrap text-body-tertiary text-end">Nov 18, 5:43 PM</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="fs-9 align-middle ps-0 py-3">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;customer&quot;:&#123;&quot;avatar&quot;:&quot;/team/31.webp&quot;,&quot;name&quot;:&quot;Martina scorcese&quot;&#125;,&quot;email&quot;:&quot;cesetina1@gmail.com&quot;,&quot;mobile&quot;:&quot;+666611896&quot;,&quot;city&quot;:&quot;Viena&quot;,&quot;lastActive&quot;:&quot;6 min ago&quot;,&quot;joined&quot;:&quot;Nov 18, 2:09 AM&quot;&#125;" /></div>
</td>
<td className="customer align-middle white-space-nowrap"><a className="d-flex align-items-center text-body text-hover-1000" href="#!">
<div className="avatar avatar-m"><img className="rounded-circle" src="/site/assets/img/team/31.webp" alt="" /></div>
<h6 className="mb-0 ms-3 fw-semibold">Martina scorcese</h6>
</a></td>
<td className="email align-middle white-space-nowrap"><a className="fw-semibold" href="mailto:cesetina1@gmail.com">cesetina1@gmail.com</a></td>
<td className="mobile_number align-middle white-space-nowrap"><a className="fw-bold text-body-emphasis" href="tel:+666611896">+666611896</a></td>
<td className="city align-middle white-space-nowrap text-body">Viena</td>
<td className="last_active align-middle text-end white-space-nowrap text-body-tertiary">6 min ago</td>
<td className="joined align-middle white-space-nowrap text-body-tertiary text-end">Nov 18, 2:09 AM</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="fs-9 align-middle ps-0 py-3">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;customer&quot;:&#123;&quot;avatar&quot;:&quot;/team/33.webp&quot;,&quot;name&quot;:&quot;Luis Bunuel&quot;&#125;,&quot;email&quot;:&quot;luisuel@live.com&quot;,&quot;mobile&quot;:&quot;+55786534&quot;,&quot;city&quot;:&quot;Bangalore&quot;,&quot;lastActive&quot;:&quot;56 min ago&quot;,&quot;joined&quot;:&quot;Nov 16, 3:22 PM&quot;&#125;" /></div>
</td>
<td className="customer align-middle white-space-nowrap"><a className="d-flex align-items-center text-body text-hover-1000" href="#!">
<div className="avatar avatar-m"><img className="rounded-circle" src="/site/assets/img/team/33.webp" alt="" /></div>
<h6 className="mb-0 ms-3 fw-semibold">Luis Bunuel</h6>
</a></td>
<td className="email align-middle white-space-nowrap"><a className="fw-semibold" href="mailto:luisuel@live.com">luisuel@live.com</a></td>
<td className="mobile_number align-middle white-space-nowrap"><a className="fw-bold text-body-emphasis" href="tel:+55786534">+55786534</a></td>
<td className="city align-middle white-space-nowrap text-body">Bangalore</td>
<td className="last_active align-middle text-end white-space-nowrap text-body-tertiary">56 min ago</td>
<td className="joined align-middle white-space-nowrap text-body-tertiary text-end">Nov 16, 3:22 PM</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="fs-9 align-middle ps-0 py-3">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;customer&quot;:&#123;&quot;avatar&quot;:&quot;/team/34.webp&quot;,&quot;name&quot;:&quot;Jean Renoir&quot;&#125;,&quot;email&quot;:&quot;renoirjean1836@gmail.com&quot;,&quot;mobile&quot;:&quot;+8801765458767&quot;,&quot;city&quot;:&quot;Chittagong&quot;,&quot;lastActive&quot;:&quot;Yesterday&quot;,&quot;joined&quot;:&quot;Nov 09, 8:49 AM&quot;&#125;" /></div>
</td>
<td className="customer align-middle white-space-nowrap"><a className="d-flex align-items-center text-body text-hover-1000" href="#!">
<div className="avatar avatar-m"><img className="rounded-circle" src="/site/assets/img/team/34.webp" alt="" /></div>
<h6 className="mb-0 ms-3 fw-semibold">Jean Renoir</h6>
</a></td>
<td className="email align-middle white-space-nowrap"><a className="fw-semibold" href="mailto:renoirjean1836@gmail.com">renoirjean1836@gmail.com</a></td>
<td className="mobile_number align-middle white-space-nowrap"><a className="fw-bold text-body-emphasis" href="tel:+8801765458767">+8801765458767</a></td>
<td className="city align-middle white-space-nowrap text-body">Chittagong</td>
<td className="last_active align-middle text-end white-space-nowrap text-body-tertiary">Yesterday</td>
<td className="joined align-middle white-space-nowrap text-body-tertiary text-end">Nov 09, 8:49 AM</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="fs-9 align-middle ps-0 py-3">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;customer&quot;:&#123;&quot;avatar&quot;:&quot;/team/29.webp&quot;,&quot;name&quot;:&quot;Ricky Antony&quot;&#125;,&quot;email&quot;:&quot;ricky@example.com&quot;,&quot;mobile&quot;:&quot;+2012001851&quot;,&quot;city&quot;:&quot;New Jersey&quot;,&quot;lastActive&quot;:&quot;1 hour ago&quot;,&quot;joined&quot;:&quot;Oct 19, 8:00 AM&quot;&#125;" /></div>
</td>
<td className="customer align-middle white-space-nowrap"><a className="d-flex align-items-center text-body text-hover-1000" href="#!">
<div className="avatar avatar-m"><img className="rounded-circle" src="/site/assets/img/team/29.webp" alt="" /></div>
<h6 className="mb-0 ms-3 fw-semibold">Ricky Antony</h6>
</a></td>
<td className="email align-middle white-space-nowrap"><a className="fw-semibold" href="mailto:ricky@example.com">ricky@example.com</a></td>
<td className="mobile_number align-middle white-space-nowrap"><a className="fw-bold text-body-emphasis" href="tel:+2012001851">+2012001851</a></td>
<td className="city align-middle white-space-nowrap text-body">New Jersey</td>
<td className="last_active align-middle text-end white-space-nowrap text-body-tertiary">1 hour ago</td>
<td className="joined align-middle white-space-nowrap text-body-tertiary text-end">Oct 19, 8:00 AM</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="fs-9 align-middle ps-0 py-3">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;customer&quot;:&#123;&quot;avatar&quot;:&quot;/team/3.webp&quot;,&quot;name&quot;:&quot;Emma Watson&quot;&#125;,&quot;email&quot;:&quot;emma@example.com&quot;,&quot;mobile&quot;:&quot;+2122288403&quot;,&quot;city&quot;:&quot;New York&quot;,&quot;lastActive&quot;:&quot;6 hours ago&quot;,&quot;joined&quot;:&quot;Oct 15, 12:00 PM&quot;&#125;" /></div>
</td>
<td className="customer align-middle white-space-nowrap"><a className="d-flex align-items-center text-body text-hover-1000" href="#!">
<div className="avatar avatar-m"><img className="rounded-circle" src="/site/assets/img/team/3.webp" alt="" /></div>
<h6 className="mb-0 ms-3 fw-semibold">Emma Watson</h6>
</a></td>
<td className="email align-middle white-space-nowrap"><a className="fw-semibold" href="mailto:emma@example.com">emma@example.com</a></td>
<td className="mobile_number align-middle white-space-nowrap"><a className="fw-bold text-body-emphasis" href="tel:+2122288403">+2122288403</a></td>
<td className="city align-middle white-space-nowrap text-body">New York</td>
<td className="last_active align-middle text-end white-space-nowrap text-body-tertiary">6 hours ago</td>
<td className="joined align-middle white-space-nowrap text-body-tertiary text-end">Oct 15, 12:00 PM</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="fs-9 align-middle ps-0 py-3">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;customer&quot;:&#123;&quot;avatar&quot;:&quot;/team/avatar.webp&quot;,&quot;name&quot;:&quot;Jennifer Schramm&quot;,&quot;placeholder&quot;:true&#125;,&quot;email&quot;:&quot;jennifer@example.com&quot;,&quot;mobile&quot;:&quot;+8283829631&quot;,&quot;city&quot;:&quot;Charlotte&quot;,&quot;lastActive&quot;:&quot;12 hours ago&quot;,&quot;joined&quot;:&quot;Oct 12, 11:00 AM&quot;&#125;" /></div>
</td>
<td className="customer align-middle white-space-nowrap"><a className="d-flex align-items-center text-body text-hover-1000" href="#!">
<div className="avatar avatar-m"><img className="rounded-circle avatar-placeholder" src="/site/assets/img/team/avatar.webp" alt="" /></div>
<h6 className="mb-0 ms-3 fw-semibold">Jennifer Schramm</h6>
</a></td>
<td className="email align-middle white-space-nowrap"><a className="fw-semibold" href="mailto:jennifer@example.com">jennifer@example.com</a></td>
<td className="mobile_number align-middle white-space-nowrap"><a className="fw-bold text-body-emphasis" href="tel:+8283829631">+8283829631</a></td>
<td className="city align-middle white-space-nowrap text-body">Charlotte</td>
<td className="last_active align-middle text-end white-space-nowrap text-body-tertiary">12 hours ago</td>
<td className="joined align-middle white-space-nowrap text-body-tertiary text-end">Oct 12, 11:00 AM</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="fs-9 align-middle ps-0 py-3">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;customer&quot;:&#123;&quot;avatar&quot;:&quot;/team/32.webp&quot;,&quot;name&quot;:&quot;Raymond Mims&quot;&#125;,&quot;email&quot;:&quot;raymond@example.com&quot;,&quot;mobile&quot;:&quot;+5624685646&quot;,&quot;city&quot;:&quot;Artesia&quot;,&quot;lastActive&quot;:&quot;2 day ago&quot;,&quot;joined&quot;:&quot;Oct 10, 8:30 AM&quot;&#125;" /></div>
</td>
<td className="customer align-middle white-space-nowrap"><a className="d-flex align-items-center text-body text-hover-1000" href="#!">
<div className="avatar avatar-m"><img className="rounded-circle" src="/site/assets/img/team/32.webp" alt="" /></div>
<h6 className="mb-0 ms-3 fw-semibold">Raymond Mims</h6>
</a></td>
<td className="email align-middle white-space-nowrap"><a className="fw-semibold" href="mailto:raymond@example.com">raymond@example.com</a></td>
<td className="mobile_number align-middle white-space-nowrap"><a className="fw-bold text-body-emphasis" href="tel:+5624685646">+5624685646</a></td>
<td className="city align-middle white-space-nowrap text-body">Artesia</td>
<td className="last_active align-middle text-end white-space-nowrap text-body-tertiary">2 day ago</td>
<td className="joined align-middle white-space-nowrap text-body-tertiary text-end">Oct 10, 8:30 AM</td>
</tr>
<tr className="hover-actions-trigger btn-reveal-trigger position-static">
<td className="fs-9 align-middle ps-0 py-3">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;customer&quot;:&#123;&quot;avatar&quot;:&quot;/team/25.webp&quot;,&quot;name&quot;:&quot;Michael Jenkins&quot;&#125;,&quot;email&quot;:&quot;jenkins@example.com&quot;,&quot;mobile&quot;:&quot;+3026138829&quot;,&quot;city&quot;:&quot;Philadelphia&quot;,&quot;lastActive&quot;:&quot;12 hours ago&quot;,&quot;joined&quot;:&quot;Oct 3, 8:30 AM&quot;&#125;" /></div>
</td>
<td className="customer align-middle white-space-nowrap"><a className="d-flex align-items-center text-body text-hover-1000" href="#!">
<div className="avatar avatar-m"><img className="rounded-circle" src="/site/assets/img/team/25.webp" alt="" /></div>
<h6 className="mb-0 ms-3 fw-semibold">Michael Jenkins</h6>
</a></td>
<td className="email align-middle white-space-nowrap"><a className="fw-semibold" href="mailto:jenkins@example.com">jenkins@example.com</a></td>
<td className="mobile_number align-middle white-space-nowrap"><a className="fw-bold text-body-emphasis" href="tel:+3026138829">+3026138829</a></td>
<td className="city align-middle white-space-nowrap text-body">Philadelphia</td>
<td className="last_active align-middle text-end white-space-nowrap text-body-tertiary">12 hours ago</td>
<td className="joined align-middle white-space-nowrap text-body-tertiary text-end">Oct 3, 8:30 AM</td>
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
