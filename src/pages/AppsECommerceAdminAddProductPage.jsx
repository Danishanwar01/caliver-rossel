import DashboardNavbars from '../components/DashboardNavbars.jsx';
/* Auto-converted from the original HTML. Visual/markup structure intentionally preserved. */
export default function AppsECommerceAdminAddProductPage() {
  return (
    <>




<main className="main" id="top">
<DashboardNavbars />










<div className="content">

<form className="mb-9">
<div className="row g-3 flex-between-end mb-5">
<div className="col-auto">
<h2 className="mb-2">Add a product</h2>
<h5 className="text-body-tertiary fw-semibold">Orders placed across your store</h5>
</div>
<div className="col-auto"><button className="btn btn-phoenix-secondary me-2 mb-2 mb-sm-0" type="button">Discard</button>
<button className="btn btn-phoenix-primary me-2 mb-2 mb-sm-0" type="button">Save draft</button>
<button className="btn btn-primary mb-2 mb-sm-0" type="submit">Publish product</button>
</div>
</div>
<div className="row g-5">
<div className="col-12 col-xl-8">
<h4 className="mb-3">Product Title</h4><input className="form-control mb-5" type="text" placeholder="Write title here..." />
<div className="mb-6">
<h4 className="mb-3"> Product Description</h4><textarea className="tinymce" name="content" data-tinymce="&#123;&quot;height&quot;:&quot;15rem&quot;,&quot;placeholder&quot;:&quot;Write a description here...&quot;&#125;"></textarea>
</div>
<h4 className="mb-3">Display images</h4>
<div className="dropzone dropzone-multiple p-0 mb-5" id="my-awesome-dropzone" data-dropzone="data-dropzone">
<div className="fallback"><input name="file" type="file" multiple /></div>
<div className="dz-preview d-flex flex-wrap">
<div className="border border-translucent bg-body-emphasis rounded-3 d-flex flex-center position-relative me-2 mb-2" style={{height: "80px", width: "80px"}}><img className="dz-image" src="/site/assets/img/products/23.png" alt="..." data-dz-thumbnail="data-dz-thumbnail" /><a className="dz-remove text-body-quaternary" href="#!" data-dz-remove="data-dz-remove"><span data-feather="x"></span></a></div>
</div>
<div className="dz-message text-body-tertiary text-opacity-85" data-dz-message="data-dz-message">Drag your photo here<span className="text-body-secondary px-1">or</span><button className="btn btn-link p-0" type="button">Browse from device</button><br /><img className="mt-3 me-2" src="/site/assets/img/icons/image-icon.png" width="40" alt="" /></div>
</div>
<h4 className="mb-3">Inventory</h4>
<div className="row g-0 border-top border-bottom">
<div className="col-sm-4">
<div className="nav flex-sm-column border-bottom border-bottom-sm-0 border-end-sm fs-9 vertical-tab h-100 justify-content-between" role="tablist" aria-orientation="vertical"><a className="nav-link border-end border-end-sm-0 border-bottom-sm text-center text-sm-start cursor-pointer outline-none d-sm-flex align-items-sm-center active" id="pricingTab" data-bs-toggle="tab" data-bs-target="#pricingTabContent" role="tab" aria-controls="pricingTabContent" aria-selected="true"> <span className="me-sm-2 fs-4 nav-icons" data-feather="tag"></span><span className="d-none d-sm-inline">Pricing</span></a><a className="nav-link border-end border-end-sm-0 border-bottom-sm text-center text-sm-start cursor-pointer outline-none d-sm-flex align-items-sm-center" id="restockTab" data-bs-toggle="tab" data-bs-target="#restockTabContent" role="tab" aria-controls="restockTabContent" aria-selected="false"> <span className="me-sm-2 fs-4 nav-icons" data-feather="package"></span><span className="d-none d-sm-inline">Restock</span></a><a className="nav-link border-end border-end-sm-0 border-bottom-sm text-center text-sm-start cursor-pointer outline-none d-sm-flex align-items-sm-center" id="shippingTab" data-bs-toggle="tab" data-bs-target="#shippingTabContent" role="tab" aria-controls="shippingTabContent" aria-selected="false"> <span className="me-sm-2 fs-4 nav-icons" data-feather="truck"></span><span className="d-none d-sm-inline">Shipping</span></a><a className="nav-link border-end border-end-sm-0 border-bottom-sm text-center text-sm-start cursor-pointer outline-none d-sm-flex align-items-sm-center" id="productsTab" data-bs-toggle="tab" data-bs-target="#productsTabContent" role="tab" aria-controls="productsTabContent" aria-selected="false"> <span className="me-sm-2 fs-4 nav-icons" data-feather="globe"></span><span className="d-none d-sm-inline">Global Delivery</span></a><a className="nav-link border-end border-end-sm-0 border-bottom-sm text-center text-sm-start cursor-pointer outline-none d-sm-flex align-items-sm-center" id="attributesTab" data-bs-toggle="tab" data-bs-target="#attributesTabContent" role="tab" aria-controls="attributesTabContent" aria-selected="false"> <span className="me-sm-2 fs-4 nav-icons" data-feather="sliders"></span><span className="d-none d-sm-inline">Attributes</span></a><a className="nav-link text-center text-sm-start cursor-pointer outline-none d-sm-flex align-items-sm-center" id="advancedTab" data-bs-toggle="tab" data-bs-target="#advancedTabContent" role="tab" aria-controls="advancedTabContent" aria-selected="false"> <span className="me-sm-2 fs-4 nav-icons" data-feather="lock"></span><span className="d-none d-sm-inline">Advanced</span></a></div>
</div>
<div className="col-sm-8">
<div className="tab-content py-3 ps-sm-4 h-100">
<div className="tab-pane fade show active" id="pricingTabContent" role="tabpanel">
<h4 className="mb-3 d-sm-none">Pricing</h4>
<div className="row g-3">
<div className="col-12 col-lg-6">
<h5 className="mb-2 text-body-highlight">Regular price</h5><input className="form-control" type="text" placeholder="$$$" />
</div>
<div className="col-12 col-lg-6">
<h5 className="mb-2 text-body-highlight">Sale price</h5><input className="form-control" type="text" placeholder="$$$" />
</div>
</div>
</div>
<div className="tab-pane fade h-100" id="restockTabContent" role="tabpanel" aria-labelledby="restockTab">
<div className="d-flex flex-column h-100">
<h5 className="mb-3 text-body-highlight">Add to Stock</h5>
<div className="row g-3 flex-1 mb-4">
<div className="col-sm-7"><input className="form-control" type="number" placeholder="Quantity" /></div>
<div className="col-sm"><button className="btn btn-primary" type="button"><span className="fa-solid fa-check me-1 fs-10"></span>Confirm</button></div>
</div>
<table>
<thead>
<tr>
<th style={{width: "200px"}}></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td className="text-body-highlight fw-bold py-1">Product in stock now:</td>
<td className="text-body-tertiary fw-semibold py-1">$1,090<button className="btn p-0" type="button"><span className="fa-solid fa-rotate text-body ms-1" style={{'--phoenix-text-opacity': ".6"}}></span></button></td>
</tr>
<tr>
<td className="text-body-highlight fw-bold py-1">Product in transit:</td>
<td className="text-body-tertiary fw-semibold py-1">5000</td>
</tr>
<tr>
<td className="text-body-highlight fw-bold py-1">Last time restocked:</td>
<td className="text-body-tertiary fw-semibold py-1">30th June, 2021</td>
</tr>
<tr>
<td className="text-body-highlight fw-bold py-1">Total stock over lifetime:</td>
<td className="text-body-tertiary fw-semibold py-1">20,000</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="tab-pane fade h-100" id="shippingTabContent" role="tabpanel" aria-labelledby="shippingTab">
<div className="d-flex flex-column h-100">
<h5 className="mb-3 text-body-highlight">Shipping Type</h5>
<div className="flex-1">
<div className="mb-4">
<div className="form-check mb-1"><input className="form-check-input" type="radio" name="shippingRadio" id="fullfilledBySeller" /><label className="form-check-label fs-8 text-body" htmlFor="fullfilledBySeller">Fullfilled by Seller</label></div>
<div className="ps-4">
<p className="text-body-secondary fs-9 mb-0">You’ll be responsible for product delivery. <br />Any damage or delay during shipping may cost you a Damage fee.</p>
</div>
</div>
<div className="mb-4">
<div className="form-check mb-1"><input className="form-check-input" type="radio" name="shippingRadio" id="fullfilledByPhoenix" checked /><label className="form-check-label fs-8 text-body d-flex align-items-center" htmlFor="fullfilledByPhoenix">Fullfilled by Phoenix <span className="badge badge-phoenix badge-phoenix-warning fs-10 ms-2">Recommended</span></label></div>
<div className="ps-4">
<p className="text-body-secondary fs-9 mb-0">Your product, Our responsibility.<br />For a measly fee, we will handle the delivery process for you.</p>
</div>
</div>
</div>
<p className="fs-9 fw-semibold mb-0">See our <a className="fw-bold" href="#!">Delivery terms and conditions </a>for details.</p>
</div>
</div>
<div className="tab-pane fade" id="productsTabContent" role="tabpanel" aria-labelledby="productsTab">
<h5 className="mb-3 text-body-highlight">Global Delivery</h5>
<div className="mb-3">
<div className="form-check"><input className="form-check-input" type="radio" name="deliveryRadio" id="worldwideDelivery" /><label className="form-check-label fs-8 text-body" htmlFor="worldwideDelivery">Worldwide delivery</label></div>
<div className="ps-4">
<p className="fs-9 mb-0 text-body-secondary">Only available with Shipping method: <a href="#!">Fullfilled by Phoenix</a></p>
</div>
</div>
<div className="mb-3">
<div className="form-check"><input className="form-check-input" type="radio" name="deliveryRadio" checked id="selectedCountry" /><label className="form-check-label fs-8 text-body" htmlFor="selectedCountry">Selected Countries</label></div>
<div className="ps-4" style={{maxWidth: "350px"}}><select className="form-select ps-4" id="organizerMultiple" data-choices="data-choices" multiple data-options="&#123;&quot;removeItemButton&quot;:true,&quot;placeholder&quot;:true&#125;">
<option value="">Type Country name</option>
<option>United States of America</option>
<option>United Kingdom</option>
<option>Canada</option>
<option>Mexico</option>
</select></div>
</div>
<div>
<div className="form-check"><input className="form-check-input" type="radio" name="deliveryRadio" id="localDelivery" /><label className="form-check-label fs-8 text-body" htmlFor="localDelivery">Local delivery</label></div>
<p className="fs-9 ms-4 mb-0 text-body-secondary">Deliver to your country of residence <a href="#!">Change profile address </a></p>
</div>
</div>
<div className="tab-pane fade" id="attributesTabContent" role="tabpanel" aria-labelledby="attributesTab">
<h5 className="mb-3 text-body-highlight">Attributes</h5>
<div className="form-check"><input className="form-check-input" id="fragileCheck" type="checkbox" /><label className="form-check-label text-body fs-8" htmlFor="fragileCheck">Fragile Product</label></div>
<div className="form-check"><input className="form-check-input" id="biodegradableCheck" type="checkbox" /><label className="form-check-label text-body fs-8" htmlFor="biodegradableCheck">Biodegradable</label></div>
<div className="mb-3">
<div className="form-check"><input className="form-check-input" id="frozenCheck" type="checkbox" checked /><label className="form-check-label text-body fs-8" htmlFor="frozenCheck">Frozen Product</label><input className="form-control" type="text" placeholder="Max. allowed Temperature" style={{maxWidth: "350px"}} /></div>
</div>
<div className="form-check"><input className="form-check-input" id="productCheck" type="checkbox" checked /><label className="form-check-label text-body fs-8" htmlFor="productCheck">Expiry Date of Product</label><input className="form-control inventory-attributes datetimepicker" id="inventory" type="text" style={{maxWidth: "350px"}} placeholder="d/m/y" data-options="&#123;&quot;disableMobile&quot;:true&#125;" /></div>
</div>
<div className="tab-pane fade" id="advancedTabContent" role="tabpanel" aria-labelledby="advancedTab">
<h5 className="mb-3 text-body-highlight">Advanced</h5>
<div className="row g-3">
<div className="col-12 col-lg-6">
<h5 className="mb-2 text-body-highlight">Product ID Type</h5><select className="form-select" aria-label="form-select-lg example">
<option selected>ISBN</option>
<option value="1">UPC</option>
<option value="2">EAN</option>
<option value="3">JAN</option>
</select>
</div>
<div className="col-12 col-lg-6">
<h5 className="mb-2 text-body-highlight">Product ID</h5><input className="form-control" type="text" placeholder="ISBN Number" />
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="col-12 col-xl-4">
<div className="row g-2">
<div className="col-12 col-xl-12">
<div className="card mb-3">
<div className="card-body">
<h4 className="card-title mb-4">Organize</h4>
<div className="row gx-3">
<div className="col-12 col-sm-6 col-xl-12">
<div className="mb-4">
<div className="d-flex flex-wrap flex-between-center mb-2">
<h5 className="mb-0 text-body-highlight me-2">Category</h5><a className="fw-bold fs-9" href="#!">Add new category</a>
</div><select className="form-select mb-3" aria-label="category">
<option value="men-cloth">Men's Clothing</option>
<option value="women-cloth">Womens's Clothing</option>
<option value="kid-cloth">Kid's Clothing</option>
</select>
</div>
</div>
<div className="col-12 col-sm-6 col-xl-12">
<div className="mb-4">
<div className="d-flex flex-wrap flex-between-center mb-2">
<h5 className="mb-0 text-body-highlight me-2">Vendor</h5><a className="fw-bold fs-9" href="#!">Add new vendor</a>
</div><select className="form-select mb-3" aria-label="category">
<option value="men-cloth">Men's Clothing</option>
<option value="women-cloth">Womens's Clothing</option>
<option value="kid-cloth">Kid's Clothing</option>
</select>
</div>
</div>
<div className="col-12 col-sm-6 col-xl-12">
<div className="mb-4">
<div className="d-flex flex-wrap mb-2 flex-between-center">
<h5 className="mb-2 text-body-highlight">Collection</h5><a className="fw-bold fs-9" href="#!">Add new collection</a>
</div><input className="form-control mb-xl-3" type="text" placeholder="Collection" />
</div>
</div>
<div className="col-12 col-sm-6 col-xl-12">
<div className="d-flex flex-wrap flex-between-center mb-2">
<h5 className="mb-0 text-body-highlight me-2">Tags</h5><a className="fw-bold fs-9 lh-sm" href="#!">View all tags</a>
</div><select className="form-select" aria-label="category">
<option value="men-cloth">Men's Clothing</option>
<option value="women-cloth">Womens's Clothing</option>
<option value="kid-cloth">Kid's Clothing</option>
</select>
</div>
</div>
</div>
</div>
</div>
<div className="col-12 col-xl-12">
<div className="card">
<div className="card-body">
<h4 className="card-title mb-4">Variants</h4>
<div className="row g-3">
<div className="col-12 col-sm-6 col-xl-12">
<div className="border-bottom border-translucent border-dashed border-sm-0 border-bottom-xl pb-4">
<div className="d-flex flex-wrap flex-between-center mb-2">
<h5 className="text-body-highlight me-2">Option 1</h5><a className="fw-bold fs-9" href="#!">Remove</a>
</div><select className="form-select mb-3">
<option value="size">Size</option>
<option value="color">Color</option>
<option value="weight">Weight</option>
<option value="smell">Smell</option>
</select>
<div className="product-variant-select-menu"><select className="form-select mb-3" data-choices="data-choices" multiple data-options="&#123;&quot;removeItemButton&quot;:true,&quot;placeholder&quot;:true&#125;">
<option value="size">4x6 in</option>
<option value="color">9x6 in</option>
<option value="weight">11x8 in</option>
</select></div>
</div>
</div>
<div className="col-12 col-sm-6 col-xl-12">
<div className="d-flex flex-wrap flex-between-center mb-2">
<h5 className="text-body-highlight me-2">Option 2</h5><a className="fw-bold fs-9" href="#!">Remove</a>
</div><select className="form-select mb-3">
<option value="size">Size</option>
<option value="color">Color</option>
<option value="weight">Weight</option>
<option value="smell">Smell</option>
</select>
<div className="product-variant-select-menu mb-3"><select className="form-select mb-3" data-choices="data-choices" multiple data-options="&#123;&quot;removeItemButton&quot;:true,&quot;placeholder&quot;:true&#125;">
<option value="size">4x6 in</option>
<option value="color">9x6 in</option>
<option value="weight">11x8 in</option>
</select></div>
</div>
</div><button className="btn btn-phoenix-primary w-100" type="button">Add another option</button>
</div>
</div>
</div>
</div>
</div>
</div>
</form>
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
