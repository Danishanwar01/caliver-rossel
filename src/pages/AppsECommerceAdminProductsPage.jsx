import DashboardNavbars from '../components/DashboardNavbars.jsx';
/* Auto-converted from the original HTML. Visual/markup structure intentionally preserved. */
export default function AppsECommerceAdminProductsPage() {
  return (
    <>




<main className="main" id="top">
<DashboardNavbars />










<div className="content">

<div className="mb-9">
<div className="row g-3 mb-4">
<div className="col-auto">
<h2 className="mb-0">Products</h2>
</div>
</div>
<ul className="nav nav-links mb-3 mb-lg-2 mx-n3">
<li className="nav-item"><a className="nav-link active" aria-current="page" href="#"><span>All </span><span className="text-body-tertiary fw-semibold">(68817)</span></a></li>
<li className="nav-item"><a className="nav-link" href="#"><span>Published </span><span className="text-body-tertiary fw-semibold">(70348)</span></a></li>
<li className="nav-item"><a className="nav-link" href="#"><span>Drafts </span><span className="text-body-tertiary fw-semibold">(17)</span></a></li>
<li className="nav-item"><a className="nav-link" href="#"><span>On discount </span><span className="text-body-tertiary fw-semibold">(810)</span></a></li>
</ul>
<div id="products" data-list="&#123;&quot;valueNames&quot;:[&quot;product&quot;,&quot;price&quot;,&quot;category&quot;,&quot;tags&quot;,&quot;vendor&quot;,&quot;time&quot;],&quot;page&quot;:10,&quot;pagination&quot;:true&#125;">
<div className="mb-4">
<div className="d-flex flex-wrap gap-3">
<div className="search-box">
<form className="position-relative"><input className="form-control search-input search" type="search" placeholder="Search products" aria-label="Search" />
<span className="fas fa-search search-box-icon"></span>
</form>
</div>
<div className="scrollbar overflow-hidden-y">
<div className="btn-group position-static" role="group">
<div className="btn-group position-static text-nowrap"><button className="btn btn-phoenix-secondary px-7 flex-shrink-0" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"> Category<span className="fas fa-angle-down ms-2"></span></button>
<ul className="dropdown-menu">
<li><a className="dropdown-item" href="#">Action</a></li>
<li><a className="dropdown-item" href="#">Another action</a></li>
<li><a className="dropdown-item" href="#">Something else here</a></li>
<li>
<hr className="dropdown-divider" />
</li>
<li><a className="dropdown-item" href="#">Separated link</a></li>
</ul>
</div>
<div className="btn-group position-static text-nowrap"><button className="btn btn-sm btn-phoenix-secondary px-7 flex-shrink-0" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"> Vendor<span className="fas fa-angle-down ms-2"></span></button>
<ul className="dropdown-menu">
<li><a className="dropdown-item" href="#">Action</a></li>
<li><a className="dropdown-item" href="#">Another action</a></li>
<li><a className="dropdown-item" href="#">Something else here</a></li>
<li>
<hr className="dropdown-divider" />
</li>
<li><a className="dropdown-item" href="#">Separated link</a></li>
</ul>
</div><button className="btn btn-sm btn-phoenix-secondary px-7 flex-shrink-0">More filters</button>
</div>
</div>
<div className="ms-xxl-auto"><button className="btn btn-link text-body me-4 px-0"><span className="fa-solid fa-file-export fs-9 me-2"></span>Export</button>
<button className="btn btn-primary" id="addBtn"><span className="fas fa-plus me-2"></span>Add product</button>
</div>
</div>
</div>
<div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
<div className="table-responsive scrollbar mx-n1 px-1">
<table className="table fs-9 mb-0">
<thead>
<tr>
<th className="white-space-nowrap fs-9 align-middle ps-0" style={{maxWidth: "20px", width: "18px"}}>
<div className="form-check mb-0 fs-8"><input className="form-check-input" id="checkbox-bulk-products-select" type="checkbox" data-bulk-select="&#123;&quot;body&quot;:&quot;products-table-body&quot;&#125;" /></div>
</th>
<th className="sort white-space-nowrap align-middle fs-10" scope="col" style={{width: "70px"}}></th>
<th className="sort white-space-nowrap align-middle ps-4" scope="col" style={{width: "350px"}} data-sort="product">PRODUCT NAME</th>
<th className="sort align-middle text-end ps-4" scope="col" data-sort="price" style={{width: "150px"}}>PRICE</th>
<th className="sort align-middle ps-4" scope="col" data-sort="category" style={{width: "150px"}}>CATEGORY</th>
<th className="sort align-middle ps-3" scope="col" data-sort="tags" style={{width: "250px"}}>TAGS</th>
<th className="sort align-middle fs-8 text-center ps-4" scope="col" style={{width: "125px"}}></th>
<th className="sort align-middle ps-4" scope="col" data-sort="vendor" style={{width: "200px"}}>VENDOR</th>
<th className="sort align-middle ps-4" scope="col" data-sort="time" style={{width: "50px"}}>PUBLISHED ON</th>
<th className="sort text-end align-middle pe-0 ps-4" scope="col"></th>
</tr>
</thead>
<tbody className="list" id="products-table-body">
<tr className="position-static">
<td className="fs-9 align-middle">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;product&quot;:&quot;Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Management & Skin Temperature Trends, Carbon/Graphite, One Size (S & L Bands...&quot;,&quot;productImage&quot;:&quot;/products/1.png&quot;,&quot;price&quot;:&quot;$39&quot;,&quot;category&quot;:&quot;Plants&quot;,&quot;tags&quot;:[&quot;Health&quot;,&quot;Exercise&quot;,&quot;Discipline&quot;,&quot;Lifestyle&quot;,&quot;Fitness&quot;],&quot;star&quot;:false,&quot;vendor&quot;:&quot;Blue Olive Plant sellers. Inc&quot;,&quot;publishedOn&quot;:&quot;Nov 12, 10:45 PM&quot;&#125;" /></div>
</td>
<td className="align-middle white-space-nowrap py-0"><a className="d-block border border-translucent rounded-2" href="/apps/e-commerce/landing/product-details"><img src="/site/assets/img/products/1.png" alt="" width="53" /></a></td>
<td className="product align-middle ps-4"><a className="fw-semibold line-clamp-3 mb-0" href="/apps/e-commerce/landing/product-details">Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Management & Skin Temperature Trends, Carbon/Graphite, One Size (S & ...</a></td>
<td className="price align-middle white-space-nowrap text-end fw-bold text-body-tertiary ps-4">$39</td>
<td className="category align-middle white-space-nowrap text-body-quaternary fs-9 ps-4 fw-semibold">Plants</td>
<td className="tags align-middle review pb-2 ps-3" style={{minWidth: "225px"}}><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Health</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Exercise</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Discipline</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Lifestyle</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Fitness</span></a></td>
<td className="align-middle review fs-8 text-center ps-4">
<div className="d-toggle-container">
<div className="d-block-hover"><span className="fas fa-star text-warning"></span></div>
<div className="d-none-hover"><span className="far fa-star text-warning"></span></div>
</div>
</td>
<td className="vendor align-middle text-start fw-semibold ps-4"><a href="#!">Blue Olive Plant sellers. Inc</a></td>
<td className="time align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4">Nov 12, 10:45 PM</td>
<td className="align-middle white-space-nowrap text-end pe-0 ps-4 btn-reveal-trigger">
<div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
<div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
</div>
</div>
</td>
</tr>
<tr className="position-static">
<td className="fs-9 align-middle">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;product&quot;:&quot;iPhone 13 pro max-Pacific Blue-128GB storage&quot;,&quot;productImage&quot;:&quot;/products/2.png&quot;,&quot;price&quot;:&quot;$87&quot;,&quot;category&quot;:&quot;Furniture&quot;,&quot;tags&quot;:[&quot;Class&quot;,&quot;Camera&quot;,&quot;Discipline&quot;,&quot;invincible&quot;,&quot;Pro&quot;,&quot;Swag&quot;],&quot;star&quot;:true,&quot;vendor&quot;:&quot;Beatrice Furnitures&quot;,&quot;publishedOn&quot;:&quot;Nov 11, 7:36 PM&quot;&#125;" /></div>
</td>
<td className="align-middle white-space-nowrap py-0"><a className="d-block border border-translucent rounded-2" href="/apps/e-commerce/landing/product-details"><img src="/site/assets/img/products/2.png" alt="" width="53" /></a></td>
<td className="product align-middle ps-4"><a className="fw-semibold line-clamp-3 mb-0" href="/apps/e-commerce/landing/product-details">iPhone 13 pro max-Pacific Blue-128GB storage</a></td>
<td className="price align-middle white-space-nowrap text-end fw-bold text-body-tertiary ps-4">$87</td>
<td className="category align-middle white-space-nowrap text-body-quaternary fs-9 ps-4 fw-semibold">Furniture</td>
<td className="tags align-middle review pb-2 ps-3" style={{minWidth: "225px"}}><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Class</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Camera</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Discipline</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">invincible</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Pro</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Swag</span></a></td>
<td className="align-middle review fs-8 text-center ps-4"><span className="fas fa-star text-warning"></span></td>
<td className="vendor align-middle text-start fw-semibold ps-4"><a href="#!">Beatrice Furnitures</a></td>
<td className="time align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4">Nov 11, 7:36 PM</td>
<td className="align-middle white-space-nowrap text-end pe-0 ps-4 btn-reveal-trigger">
<div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
<div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
</div>
</div>
</td>
</tr>
<tr className="position-static">
<td className="fs-9 align-middle">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;product&quot;:&quot;Apple MacBook Pro 13 inch-M1-8/256GB-space&quot;,&quot;productImage&quot;:&quot;/products/3.png&quot;,&quot;price&quot;:&quot;$9&quot;,&quot;category&quot;:&quot;Plants&quot;,&quot;tags&quot;:[&quot;Efficiency&quot;,&quot;Handy&quot;,&quot;Apple&quot;,&quot;Creativity&quot;,&quot;Gray&quot;],&quot;star&quot;:false,&quot;vendor&quot;:&quot;PlantPlanet&quot;,&quot;publishedOn&quot;:&quot;Nov 11, 8:16 AM&quot;&#125;" /></div>
</td>
<td className="align-middle white-space-nowrap py-0"><a className="d-block border border-translucent rounded-2" href="/apps/e-commerce/landing/product-details"><img src="/site/assets/img/products/3.png" alt="" width="53" /></a></td>
<td className="product align-middle ps-4"><a className="fw-semibold line-clamp-3 mb-0" href="/apps/e-commerce/landing/product-details">Apple MacBook Pro 13 inch-M1-8/256GB-space</a></td>
<td className="price align-middle white-space-nowrap text-end fw-bold text-body-tertiary ps-4">$9</td>
<td className="category align-middle white-space-nowrap text-body-quaternary fs-9 ps-4 fw-semibold">Plants</td>
<td className="tags align-middle review pb-2 ps-3" style={{minWidth: "225px"}}><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Efficiency</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Handy</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Apple</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Creativity</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Gray</span></a></td>
<td className="align-middle review fs-8 text-center ps-4">
<div className="d-toggle-container">
<div className="d-block-hover"><span className="fas fa-star text-warning"></span></div>
<div className="d-none-hover"><span className="far fa-star text-warning"></span></div>
</div>
</td>
<td className="vendor align-middle text-start fw-semibold ps-4"><a href="#!">PlantPlanet</a></td>
<td className="time align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4">Nov 11, 8:16 AM</td>
<td className="align-middle white-space-nowrap text-end pe-0 ps-4 btn-reveal-trigger">
<div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
<div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
</div>
</div>
</td>
</tr>
<tr className="position-static">
<td className="fs-9 align-middle">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;product&quot;:&quot;Apple iMac 24\\&quot; 4K Retina Display M1 8 Core CPU...&quot;,&quot;productImage&quot;:&quot;/products/4.png&quot;,&quot;price&quot;:&quot;$8 - $58&quot;,&quot;category&quot;:&quot;Toys&quot;,&quot;tags&quot;:[&quot;Color&quot;,&quot;Stunning&quot;,&quot;Retina&quot;,&quot;Green&quot;,&quot;PC killer&quot;],&quot;star&quot;:false,&quot;vendor&quot;:&quot;Kizzstore&quot;,&quot;publishedOn&quot;:&quot;Nov 8, 6:39 PM&quot;&#125;" /></div>
</td>
<td className="align-middle white-space-nowrap py-0"><a className="d-block border border-translucent rounded-2" href="/apps/e-commerce/landing/product-details"><img src="/site/assets/img/products/4.png" alt="" width="53" /></a></td>
<td className="product align-middle ps-4"><a className="fw-semibold line-clamp-3 mb-0" href="/apps/e-commerce/landing/product-details">Apple iMac 24" 4K Retina Display M1 8 Core CPU...</a></td>
<td className="price align-middle white-space-nowrap text-end fw-bold text-body-tertiary ps-4">$8 - $58</td>
<td className="category align-middle white-space-nowrap text-body-quaternary fs-9 ps-4 fw-semibold">Toys</td>
<td className="tags align-middle review pb-2 ps-3" style={{minWidth: "225px"}}><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Color</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Stunning</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Retina</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Green</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">PC killer</span></a></td>
<td className="align-middle review fs-8 text-center ps-4">
<div className="d-toggle-container">
<div className="d-block-hover"><span className="fas fa-star text-warning"></span></div>
<div className="d-none-hover"><span className="far fa-star text-warning"></span></div>
</div>
</td>
<td className="vendor align-middle text-start fw-semibold ps-4"><a href="#!">Kizzstore</a></td>
<td className="time align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4">Nov 8, 6:39 PM</td>
<td className="align-middle white-space-nowrap text-end pe-0 ps-4 btn-reveal-trigger">
<div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
<div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
</div>
</div>
</td>
</tr>
<tr className="position-static">
<td className="fs-9 align-middle">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;product&quot;:&quot;Razer Kraken v3 x Wired 7.1 Surroung Sound Gaming headset&quot;,&quot;productImage&quot;:&quot;/products/5.png&quot;,&quot;price&quot;:&quot;$120&quot;,&quot;category&quot;:&quot;Fashion&quot;,&quot;tags&quot;:[&quot;Music&quot;,&quot;Audio&quot;,&quot;Meeting&quot;,&quot;Record&quot;,&quot;Sound&quot;],&quot;star&quot;:false,&quot;vendor&quot;:&quot;Inertia Fashion&quot;,&quot;publishedOn&quot;:&quot;Nov 8, 5:32 PM&quot;&#125;" /></div>
</td>
<td className="align-middle white-space-nowrap py-0"><a className="d-block border border-translucent rounded-2" href="/apps/e-commerce/landing/product-details"><img src="/site/assets/img/products/5.png" alt="" width="53" /></a></td>
<td className="product align-middle ps-4"><a className="fw-semibold line-clamp-3 mb-0" href="/apps/e-commerce/landing/product-details">Razer Kraken v3 x Wired 7.1 Surroung Sound Gaming headset</a></td>
<td className="price align-middle white-space-nowrap text-end fw-bold text-body-tertiary ps-4">$120</td>
<td className="category align-middle white-space-nowrap text-body-quaternary fs-9 ps-4 fw-semibold">Fashion</td>
<td className="tags align-middle review pb-2 ps-3" style={{minWidth: "225px"}}><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Music</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Audio</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Meeting</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Record</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Sound</span></a></td>
<td className="align-middle review fs-8 text-center ps-4">
<div className="d-toggle-container">
<div className="d-block-hover"><span className="fas fa-star text-warning"></span></div>
<div className="d-none-hover"><span className="far fa-star text-warning"></span></div>
</div>
</td>
<td className="vendor align-middle text-start fw-semibold ps-4"><a href="#!">Inertia Fashion</a></td>
<td className="time align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4">Nov 8, 5:32 PM</td>
<td className="align-middle white-space-nowrap text-end pe-0 ps-4 btn-reveal-trigger">
<div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
<div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
</div>
</div>
</td>
</tr>
<tr className="position-static">
<td className="fs-9 align-middle">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;product&quot;:&quot;PlayStation 5 DualSense Wireless Controller&quot;,&quot;productImage&quot;:&quot;/products/6.png&quot;,&quot;price&quot;:&quot;$239&quot;,&quot;category&quot;:&quot;Gadgets&quot;,&quot;tags&quot;:[&quot;Game&quot;,&quot;Control&quot;,&quot;Nav&quot;,&quot;Playstation&quot;,&quot;Wireless&quot;],&quot;star&quot;:false,&quot;vendor&quot;:&quot;FutureTech Inc&quot;,&quot;publishedOn&quot;:&quot;Nov 6, 11:34 PM&quot;&#125;" /></div>
</td>
<td className="align-middle white-space-nowrap py-0"><a className="d-block border border-translucent rounded-2" href="/apps/e-commerce/landing/product-details"><img src="/site/assets/img/products/6.png" alt="" width="53" /></a></td>
<td className="product align-middle ps-4"><a className="fw-semibold line-clamp-3 mb-0" href="/apps/e-commerce/landing/product-details">PlayStation 5 DualSense Wireless Controller</a></td>
<td className="price align-middle white-space-nowrap text-end fw-bold text-body-tertiary ps-4">$239</td>
<td className="category align-middle white-space-nowrap text-body-quaternary fs-9 ps-4 fw-semibold">Gadgets</td>
<td className="tags align-middle review pb-2 ps-3" style={{minWidth: "225px"}}><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Game</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Control</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Nav</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Playstation</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Wireless</span></a></td>
<td className="align-middle review fs-8 text-center ps-4">
<div className="d-toggle-container">
<div className="d-block-hover"><span className="fas fa-star text-warning"></span></div>
<div className="d-none-hover"><span className="far fa-star text-warning"></span></div>
</div>
</td>
<td className="vendor align-middle text-start fw-semibold ps-4"><a href="#!">FutureTech Inc</a></td>
<td className="time align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4">Nov 6, 11:34 PM</td>
<td className="align-middle white-space-nowrap text-end pe-0 ps-4 btn-reveal-trigger">
<div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
<div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
</div>
</div>
</td>
</tr>
<tr className="position-static">
<td className="fs-9 align-middle">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;product&quot;:&quot;2021 Apple 12.9-inch iPad Pro (Wi\u2011Fi, 128GB) - Space Gray&quot;,&quot;productImage&quot;:&quot;/products/7.png&quot;,&quot;price&quot;:&quot;$4&quot;,&quot;category&quot;:&quot;Food&quot;,&quot;tags&quot;:[&quot;Ipad&quot;,&quot;Pro&quot;,&quot;Creativity&quot;,&quot;Thunderbolt&quot;,&quot;Space&quot;],&quot;star&quot;:false,&quot;vendor&quot;:&quot;Maimuna\u2019s Bakery&quot;,&quot;publishedOn&quot;:&quot;Nov 1, 7:45 AM&quot;&#125;" /></div>
</td>
<td className="align-middle white-space-nowrap py-0"><a className="d-block border border-translucent rounded-2" href="/apps/e-commerce/landing/product-details"><img src="/site/assets/img/products/7.png" alt="" width="53" /></a></td>
<td className="product align-middle ps-4"><a className="fw-semibold line-clamp-3 mb-0" href="/apps/e-commerce/landing/product-details">2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 128GB) - Space Gray</a></td>
<td className="price align-middle white-space-nowrap text-end fw-bold text-body-tertiary ps-4">$4</td>
<td className="category align-middle white-space-nowrap text-body-quaternary fs-9 ps-4 fw-semibold">Food</td>
<td className="tags align-middle review pb-2 ps-3" style={{minWidth: "225px"}}><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Ipad</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Pro</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Creativity</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Thunderbolt</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Space</span></a></td>
<td className="align-middle review fs-8 text-center ps-4">
<div className="d-toggle-container">
<div className="d-block-hover"><span className="fas fa-star text-warning"></span></div>
<div className="d-none-hover"><span className="far fa-star text-warning"></span></div>
</div>
</td>
<td className="vendor align-middle text-start fw-semibold ps-4"><a href="#!">Maimuna’s Bakery</a></td>
<td className="time align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4">Nov 1, 7:45 AM</td>
<td className="align-middle white-space-nowrap text-end pe-0 ps-4 btn-reveal-trigger">
<div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
<div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
</div>
</div>
</td>
</tr>
<tr className="position-static">
<td className="fs-9 align-middle">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;product&quot;:&quot;Amazon Basics Matte Black Wired Keyboard - US Layout (QWERTY)&quot;,&quot;productImage&quot;:&quot;/products/8.png&quot;,&quot;price&quot;:&quot;$98&quot;,&quot;category&quot;:&quot;Fashion&quot;,&quot;tags&quot;:[&quot;Keyboard&quot;,&quot;Smooth&quot;,&quot;Butter&quot;,&quot;RGB&quot;,&quot;Black&quot;],&quot;star&quot;:false,&quot;vendor&quot;:&quot;Green fashion&quot;,&quot;publishedOn&quot;:&quot;Nov 3, 12:27 PM&quot;&#125;" /></div>
</td>
<td className="align-middle white-space-nowrap py-0"><a className="d-block border border-translucent rounded-2" href="/apps/e-commerce/landing/product-details"><img src="/site/assets/img/products/8.png" alt="" width="53" /></a></td>
<td className="product align-middle ps-4"><a className="fw-semibold line-clamp-3 mb-0" href="/apps/e-commerce/landing/product-details">Amazon Basics Matte Black Wired Keyboard - US Layout (QWERTY)</a></td>
<td className="price align-middle white-space-nowrap text-end fw-bold text-body-tertiary ps-4">$98</td>
<td className="category align-middle white-space-nowrap text-body-quaternary fs-9 ps-4 fw-semibold">Fashion</td>
<td className="tags align-middle review pb-2 ps-3" style={{minWidth: "225px"}}><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Keyboard</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Smooth</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Butter</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">RGB</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Black</span></a></td>
<td className="align-middle review fs-8 text-center ps-4">
<div className="d-toggle-container">
<div className="d-block-hover"><span className="fas fa-star text-warning"></span></div>
<div className="d-none-hover"><span className="far fa-star text-warning"></span></div>
</div>
</td>
<td className="vendor align-middle text-start fw-semibold ps-4"><a href="#!">Green fashion</a></td>
<td className="time align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4">Nov 3, 12:27 PM</td>
<td className="align-middle white-space-nowrap text-end pe-0 ps-4 btn-reveal-trigger">
<div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
<div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
</div>
</div>
</td>
</tr>
<tr className="position-static">
<td className="fs-9 align-middle">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;product&quot;:&quot;Apple Magic Mouse (Wireless, Rechargable) - Silver&quot;,&quot;productImage&quot;:&quot;/products/10.png&quot;,&quot;price&quot;:&quot;$568&quot;,&quot;category&quot;:&quot;Fashion&quot;,&quot;tags&quot;:[&quot;Apple&quot;,&quot;Wireless&quot;,&quot;Battery&quot;,&quot;Magic&quot;,&quot;Performance&quot;],&quot;star&quot;:false,&quot;vendor&quot;:&quot;Eastacy&quot;,&quot;publishedOn&quot;:&quot;Nov 1, 9:39 AM&quot;&#125;" /></div>
</td>
<td className="align-middle white-space-nowrap py-0"><a className="d-block border border-translucent rounded-2" href="/apps/e-commerce/landing/product-details"><img src="/site/assets/img/products/10.png" alt="" width="53" /></a></td>
<td className="product align-middle ps-4"><a className="fw-semibold line-clamp-3 mb-0" href="/apps/e-commerce/landing/product-details">Apple Magic Mouse (Wireless, Rechargable) - Silver</a></td>
<td className="price align-middle white-space-nowrap text-end fw-bold text-body-tertiary ps-4">$568</td>
<td className="category align-middle white-space-nowrap text-body-quaternary fs-9 ps-4 fw-semibold">Fashion</td>
<td className="tags align-middle review pb-2 ps-3" style={{minWidth: "225px"}}><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Apple</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Wireless</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Battery</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Magic</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Performance</span></a></td>
<td className="align-middle review fs-8 text-center ps-4">
<div className="d-toggle-container">
<div className="d-block-hover"><span className="fas fa-star text-warning"></span></div>
<div className="d-none-hover"><span className="far fa-star text-warning"></span></div>
</div>
</td>
<td className="vendor align-middle text-start fw-semibold ps-4"><a href="#!">Eastacy</a></td>
<td className="time align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4">Nov 1, 9:39 AM</td>
<td className="align-middle white-space-nowrap text-end pe-0 ps-4 btn-reveal-trigger">
<div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
<div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
</div>
</div>
</td>
</tr>
<tr className="position-static">
<td className="fs-9 align-middle">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;product&quot;:&quot;HORI Racing Wheel Apex for PlayStation 4_3, and PC&quot;,&quot;productImage&quot;:&quot;/products/12.png&quot;,&quot;price&quot;:&quot;$17&quot;,&quot;category&quot;:&quot;Drinks&quot;,&quot;tags&quot;:[&quot;Steering&quot;,&quot;Gaming&quot;,&quot;PS4/3&quot;,&quot;Racing&quot;,&quot;Apex&quot;],&quot;star&quot;:false,&quot;vendor&quot;:&quot;BrewerBro&quot;,&quot;publishedOn&quot;:&quot;Oct 30, 3:49 PM&quot;&#125;" /></div>
</td>
<td className="align-middle white-space-nowrap py-0"><a className="d-block border border-translucent rounded-2" href="/apps/e-commerce/landing/product-details"><img src="/site/assets/img/products/12.png" alt="" width="53" /></a></td>
<td className="product align-middle ps-4"><a className="fw-semibold line-clamp-3 mb-0" href="/apps/e-commerce/landing/product-details">HORI Racing Wheel Apex for PlayStation 4_3, and PC</a></td>
<td className="price align-middle white-space-nowrap text-end fw-bold text-body-tertiary ps-4">$17</td>
<td className="category align-middle white-space-nowrap text-body-quaternary fs-9 ps-4 fw-semibold">Drinks</td>
<td className="tags align-middle review pb-2 ps-3" style={{minWidth: "225px"}}><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Steering</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Gaming</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">PS4/3</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Racing</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Apex</span></a></td>
<td className="align-middle review fs-8 text-center ps-4">
<div className="d-toggle-container">
<div className="d-block-hover"><span className="fas fa-star text-warning"></span></div>
<div className="d-none-hover"><span className="far fa-star text-warning"></span></div>
</div>
</td>
<td className="vendor align-middle text-start fw-semibold ps-4"><a href="#!">BrewerBro</a></td>
<td className="time align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4">Oct 30, 3:49 PM</td>
<td className="align-middle white-space-nowrap text-end pe-0 ps-4 btn-reveal-trigger">
<div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
<div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
</div>
</div>
</td>
</tr>
<tr className="position-static">
<td className="fs-9 align-middle">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;product&quot;:&quot;Apple Pencil (2nd Generation)&quot;,&quot;productImage&quot;:&quot;/products/21.png&quot;,&quot;price&quot;:&quot;$28&quot;,&quot;category&quot;:&quot;Fashion&quot;,&quot;tags&quot;:[&quot;Apple&quot;,&quot;Creativity&quot;,&quot;Color&quot;,&quot;Stunning&quot;,&quot;Apex&quot;],&quot;star&quot;:false,&quot;vendor&quot;:&quot;Eastacy&quot;,&quot;publishedOn&quot;:&quot;Nov 25, 5:00 PM&quot;&#125;" /></div>
</td>
<td className="align-middle white-space-nowrap py-0"><a className="d-block border border-translucent rounded-2" href="/apps/e-commerce/landing/product-details"><img src="/site/assets/img/products/21.png" alt="" width="53" /></a></td>
<td className="product align-middle ps-4"><a className="fw-semibold line-clamp-3 mb-0" href="/apps/e-commerce/landing/product-details">Apple Pencil (2nd Generation)</a></td>
<td className="price align-middle white-space-nowrap text-end fw-bold text-body-tertiary ps-4">$28</td>
<td className="category align-middle white-space-nowrap text-body-quaternary fs-9 ps-4 fw-semibold">Fashion</td>
<td className="tags align-middle review pb-2 ps-3" style={{minWidth: "225px"}}><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Apple</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Creativity</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Color</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Stunning</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Apex</span></a></td>
<td className="align-middle review fs-8 text-center ps-4">
<div className="d-toggle-container">
<div className="d-block-hover"><span className="fas fa-star text-warning"></span></div>
<div className="d-none-hover"><span className="far fa-star text-warning"></span></div>
</div>
</td>
<td className="vendor align-middle text-start fw-semibold ps-4"><a href="#!">Eastacy</a></td>
<td className="time align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4">Nov 25, 5:00 PM</td>
<td className="align-middle white-space-nowrap text-end pe-0 ps-4 btn-reveal-trigger">
<div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
<div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
</div>
</div>
</td>
</tr>
<tr className="position-static">
<td className="fs-9 align-middle">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;product&quot;:&quot;Apple AirPods (2nd Generation)&quot;,&quot;productImage&quot;:&quot;/products/16.png&quot;,&quot;price&quot;:&quot;$20&quot;,&quot;category&quot;:&quot;Fashion&quot;,&quot;tags&quot;:[&quot;Music&quot;,&quot;Audio&quot;,&quot;Meeting&quot;,&quot;Record&quot;,&quot;Sound&quot;],&quot;star&quot;:true,&quot;vendor&quot;:&quot;FutureTech Inc&quot;,&quot;publishedOn&quot;:&quot;Sep 20, 1:00 PM&quot;&#125;" /></div>
</td>
<td className="align-middle white-space-nowrap py-0"><a className="d-block border border-translucent rounded-2" href="/apps/e-commerce/landing/product-details"><img src="/site/assets/img/products/16.png" alt="" width="53" /></a></td>
<td className="product align-middle ps-4"><a className="fw-semibold line-clamp-3 mb-0" href="/apps/e-commerce/landing/product-details">Apple AirPods (2nd Generation)</a></td>
<td className="price align-middle white-space-nowrap text-end fw-bold text-body-tertiary ps-4">$20</td>
<td className="category align-middle white-space-nowrap text-body-quaternary fs-9 ps-4 fw-semibold">Fashion</td>
<td className="tags align-middle review pb-2 ps-3" style={{minWidth: "225px"}}><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Music</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Audio</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Meeting</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Record</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Sound</span></a></td>
<td className="align-middle review fs-8 text-center ps-4"><span className="fas fa-star text-warning"></span></td>
<td className="vendor align-middle text-start fw-semibold ps-4"><a href="#!">FutureTech Inc</a></td>
<td className="time align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4">Sep 20, 1:00 PM</td>
<td className="align-middle white-space-nowrap text-end pe-0 ps-4 btn-reveal-trigger">
<div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
<div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
</div>
</div>
</td>
</tr>
<tr className="position-static">
<td className="fs-9 align-middle">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;product&quot;:&quot;Xbox Series S&quot;,&quot;productImage&quot;:&quot;/products/17.png&quot;,&quot;price&quot;:&quot;$30&quot;,&quot;category&quot;:&quot;Gadget&quot;,&quot;tags&quot;:[&quot;Lifestyle&quot;,&quot;Audio&quot;,&quot;Magic&quot;,&quot;Performance&quot;,&quot;Apex&quot;],&quot;star&quot;:false,&quot;vendor&quot;:&quot;FutureTech Inc&quot;,&quot;publishedOn&quot;:&quot;Oct 18, 3:40 PM&quot;&#125;" /></div>
</td>
<td className="align-middle white-space-nowrap py-0"><a className="d-block border border-translucent rounded-2" href="/apps/e-commerce/landing/product-details"><img src="/site/assets/img/products/17.png" alt="" width="53" /></a></td>
<td className="product align-middle ps-4"><a className="fw-semibold line-clamp-3 mb-0" href="/apps/e-commerce/landing/product-details">Xbox Series S</a></td>
<td className="price align-middle white-space-nowrap text-end fw-bold text-body-tertiary ps-4">$30</td>
<td className="category align-middle white-space-nowrap text-body-quaternary fs-9 ps-4 fw-semibold">Gadget</td>
<td className="tags align-middle review pb-2 ps-3" style={{minWidth: "225px"}}><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Lifestyle</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Audio</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Magic</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Performance</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Apex</span></a></td>
<td className="align-middle review fs-8 text-center ps-4">
<div className="d-toggle-container">
<div className="d-block-hover"><span className="fas fa-star text-warning"></span></div>
<div className="d-none-hover"><span className="far fa-star text-warning"></span></div>
</div>
</td>
<td className="vendor align-middle text-start fw-semibold ps-4"><a href="#!">FutureTech Inc</a></td>
<td className="time align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4">Oct 18, 3:40 PM</td>
<td className="align-middle white-space-nowrap text-end pe-0 ps-4 btn-reveal-trigger">
<div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
<div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
</div>
</div>
</td>
</tr>
<tr className="position-static">
<td className="fs-9 align-middle">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;product&quot;:&quot;Seagate Portable 2TB External Hard Drive Portable HDD&quot;,&quot;productImage&quot;:&quot;/products/18.png&quot;,&quot;price&quot;:&quot;$50&quot;,&quot;category&quot;:&quot;Accessories&quot;,&quot;tags&quot;:[&quot;Portable&quot;,&quot;Gaming&quot;,&quot;Magic&quot;,&quot;Performance&quot;,&quot;Black&quot;],&quot;star&quot;:false,&quot;vendor&quot;:&quot;Kizzstore&quot;,&quot;publishedOn&quot;:&quot;Sep 20, 1:00 PM&quot;&#125;" /></div>
</td>
<td className="align-middle white-space-nowrap py-0"><a className="d-block border border-translucent rounded-2" href="/apps/e-commerce/landing/product-details"><img src="/site/assets/img/products/18.png" alt="" width="53" /></a></td>
<td className="product align-middle ps-4"><a className="fw-semibold line-clamp-3 mb-0" href="/apps/e-commerce/landing/product-details">Seagate Portable 2TB External Hard Drive Portable HDD</a></td>
<td className="price align-middle white-space-nowrap text-end fw-bold text-body-tertiary ps-4">$50</td>
<td className="category align-middle white-space-nowrap text-body-quaternary fs-9 ps-4 fw-semibold">Accessories</td>
<td className="tags align-middle review pb-2 ps-3" style={{minWidth: "225px"}}><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Portable</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Gaming</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Magic</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Performance</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Black</span></a></td>
<td className="align-middle review fs-8 text-center ps-4">
<div className="d-toggle-container">
<div className="d-block-hover"><span className="fas fa-star text-warning"></span></div>
<div className="d-none-hover"><span className="far fa-star text-warning"></span></div>
</div>
</td>
<td className="vendor align-middle text-start fw-semibold ps-4"><a href="#!">Kizzstore</a></td>
<td className="time align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4">Sep 20, 1:00 PM</td>
<td className="align-middle white-space-nowrap text-end pe-0 ps-4 btn-reveal-trigger">
<div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
<div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
</div>
</div>
</td>
</tr>
<tr className="position-static">
<td className="fs-9 align-middle">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;product&quot;:&quot;Intel Core i9-11900K Desktop Processor 8 Cores up to 5.3 GHz Unlocked&quot;,&quot;productImage&quot;:&quot;/products/19.png&quot;,&quot;price&quot;:&quot;$80&quot;,&quot;category&quot;:&quot;Accessories&quot;,&quot;tags&quot;:[&quot;Intel&quot;,&quot;Gaming&quot;,&quot;Apex&quot;,&quot;Performance&quot;,&quot;Lifestyle&quot;],&quot;star&quot;:true,&quot;vendor&quot;:&quot;BrewerBro&quot;,&quot;publishedOn&quot;:&quot;Dec 01, 12:00 PM&quot;&#125;" /></div>
</td>
<td className="align-middle white-space-nowrap py-0"><a className="d-block border border-translucent rounded-2" href="/apps/e-commerce/landing/product-details"><img src="/site/assets/img/products/19.png" alt="" width="53" /></a></td>
<td className="product align-middle ps-4"><a className="fw-semibold line-clamp-3 mb-0" href="/apps/e-commerce/landing/product-details">Intel Core i9-11900K Desktop Processor 8 Cores up to 5.3 GHz Unlocked</a></td>
<td className="price align-middle white-space-nowrap text-end fw-bold text-body-tertiary ps-4">$80</td>
<td className="category align-middle white-space-nowrap text-body-quaternary fs-9 ps-4 fw-semibold">Accessories</td>
<td className="tags align-middle review pb-2 ps-3" style={{minWidth: "225px"}}><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Intel</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Gaming</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Apex</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Performance</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Lifestyle</span></a></td>
<td className="align-middle review fs-8 text-center ps-4"><span className="fas fa-star text-warning"></span></td>
<td className="vendor align-middle text-start fw-semibold ps-4"><a href="#!">BrewerBro</a></td>
<td className="time align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4">Dec 01, 12:00 PM</td>
<td className="align-middle white-space-nowrap text-end pe-0 ps-4 btn-reveal-trigger">
<div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10"></span></button>
<div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
<div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
</div>
</div>
</td>
</tr>
<tr className="position-static">
<td className="fs-9 align-middle">
<div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="&#123;&quot;product&quot;:&quot;ASUS TUF Gaming F15 Gaming Laptop&quot;,&quot;productImage&quot;:&quot;/products/20.png&quot;,&quot;price&quot;:&quot;$150&quot;,&quot;category&quot;:&quot;Computer&quot;,&quot;tags&quot;:[&quot;Gaming&quot;,&quot;Battery&quot;,&quot;Performance&quot;,&quot;Wireless&quot;],&quot;star&quot;:false,&quot;vendor&quot;:&quot;Kizzstore&quot;,&quot;publishedOn&quot;:&quot;Dec 01, 12:00 PM&quot;&#125;" /></div>
</td>
<td className="align-middle white-space-nowrap py-0"><a className="d-block border border-translucent rounded-2" href="/apps/e-commerce/landing/product-details"><img src="/site/assets/img/products/20.png" alt="" width="53" /></a></td>
<td className="product align-middle ps-4"><a className="fw-semibold line-clamp-3 mb-0" href="/apps/e-commerce/landing/product-details">ASUS TUF Gaming F15 Gaming Laptop</a></td>
<td className="price align-middle white-space-nowrap text-end fw-bold text-body-tertiary ps-4">$150</td>
<td className="category align-middle white-space-nowrap text-body-quaternary fs-9 ps-4 fw-semibold">Computer</td>
<td className="tags align-middle review pb-2 ps-3" style={{minWidth: "225px"}}><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Gaming</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Battery</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Performance</span></a><a className="text-decoration-none" href="#!"><span className="badge badge-tag me-2 mb-2">Wireless</span></a></td>
<td className="align-middle review fs-8 text-center ps-4">
<div className="d-toggle-container">
<div className="d-block-hover"><span className="fas fa-star text-warning"></span></div>
<div className="d-none-hover"><span className="far fa-star text-warning"></span></div>
</div>
</td>
<td className="vendor align-middle text-start fw-semibold ps-4"><a href="#!">Kizzstore</a></td>
<td className="time align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4">Dec 01, 12:00 PM</td>
<td className="align-middle white-space-nowrap text-end pe-0 ps-4 btn-reveal-trigger">
<div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10"></span></button>
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
