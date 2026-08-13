import DashboardNavbars from '../components/DashboardNavbars.jsx';
/* Auto-converted from the original HTML. Visual/markup structure intentionally preserved. */
export default function AppsECommerceLandingProductsFilterPage() {
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
<div className="product-filter-container"><button className="btn btn-sm btn-phoenix-secondary text-body-tertiary mb-5 d-lg-none" data-phoenix-toggle="offcanvas" data-phoenix-target="#productFilterColumn"><span className="fa-solid fa-filter me-2"></span>Filter</button>
<div className="row">
<div className="col-lg-3 col-xxl-2 ps-2 ps-xxl-3">
<div className="phoenix-offcanvas-filter bg-body scrollbar phoenix-offcanvas phoenix-offcanvas-fixed" id="productFilterColumn" style={{top: "92px"}} data-breakpoint="lg">
<div className="d-flex justify-content-between align-items-center mb-3">
<h3 className="mb-0">Filters</h3><button className="btn d-lg-none p-0" data-phoenix-dismiss="offcanvas"><span className="uil uil-times fs-8"></span></button>
</div><a className="btn px-0 d-block collapse-indicator" data-bs-toggle="collapse" href="#collapseAvailability" role="button" aria-expanded="true" aria-controls="collapseAvailability">
<div className="d-flex align-items-center justify-content-between w-100">
<div className="fs-8 text-body-highlight">Availability</div><span className="fa-solid fa-angle-down toggle-icon text-body-quaternary"></span>
</div>
</a>
<div className="collapse show" id="collapseAvailability">
<div className="mb-2">
<div className="form-check mb-0"><input className="form-check-input mt-0" id="inStockInput" type="checkbox" name="color" checked /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="inStockInput">In stock</label></div>
<div className="form-check mb-0"><input className="form-check-input mt-0" id="preBookInput" type="checkbox" name="color" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="preBookInput">Pre-book</label></div>
<div className="form-check mb-0"><input className="form-check-input mt-0" id="outOfStockInput" type="checkbox" name="color" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="outOfStockInput">Out of stock</label></div>
</div>
</div><a className="btn px-0 d-block collapse-indicator" data-bs-toggle="collapse" href="#collapseColorFamily" role="button" aria-expanded="true" aria-controls="collapseColorFamily">
<div className="d-flex align-items-center justify-content-between w-100">
<div className="fs-8 text-body-highlight">Color family</div><span className="fa-solid fa-angle-down toggle-icon text-body-quaternary"></span>
</div>
</a>
<div className="collapse show" id="collapseColorFamily">
<div className="mb-2">
<div className="form-check mb-0"><input className="form-check-input mt-0" id="flexCheckBlack" type="checkbox" name="color" checked /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="flexCheckBlack">Black</label></div>
<div className="form-check mb-0"><input className="form-check-input mt-0" id="flexCheckBlue" type="checkbox" name="color" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="flexCheckBlue">Blue</label></div>
<div className="form-check mb-0"><input className="form-check-input mt-0" id="flexCheckRed" type="checkbox" name="color" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="flexCheckRed">Red</label></div>
</div>
</div><a className="btn px-0 d-block collapse-indicator" data-bs-toggle="collapse" href="#collapseBrands" role="button" aria-expanded="true" aria-controls="collapseBrands">
<div className="d-flex align-items-center justify-content-between w-100">
<div className="fs-8 text-body-highlight">Brands</div><span className="fa-solid fa-angle-down toggle-icon text-body-quaternary"></span>
</div>
</a>
<div className="collapse show" id="collapseBrands">
<div className="mb-2">
<div className="form-check mb-0"><input className="form-check-input mt-0" id="flexCheckBlackberry" type="checkbox" name="brands" checked /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="flexCheckBlackberry">Blackberry
                      </label></div>
<div className="form-check mb-0"><input className="form-check-input mt-0" id="flexCheckApple" type="checkbox" name="brands" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="flexCheckApple">Apple
                      </label></div>
<div className="form-check mb-0"><input className="form-check-input mt-0" id="flexCheckNokia" type="checkbox" name="brands" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="flexCheckNokia">Nokia
                      </label></div>
<div className="form-check mb-0"><input className="form-check-input mt-0" id="flexCheckSony" type="checkbox" name="brands" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="flexCheckSony">Sony
                      </label></div>
<div className="form-check mb-0"><input className="form-check-input mt-0" id="flexCheckLG" type="checkbox" name="brands" /><label className="form-check-label d-block lh-sm fs-8 text-body mb-0 fw-normal" htmlFor="flexCheckLG">LG
                      </label></div>
</div>
</div><a className="btn px-0 d-block collapse-indicator" data-bs-toggle="collapse" href="#collapsePriceRange" role="button" aria-expanded="true" aria-controls="collapsePriceRange">
<div className="d-flex align-items-center justify-content-between w-100">
<div className="fs-8 text-body-highlight">Price range</div><span className="fa-solid fa-angle-down toggle-icon text-body-quaternary"></span>
</div>
</a>
<div className="collapse show" id="collapsePriceRange">
<div className="d-flex justify-content-between mb-3">
<div className="input-group me-2"><input className="form-control" type="text" aria-label="First name" placeholder="Min" /><input className="form-control" type="text" aria-label="Last name" placeholder="Max" /></div><button className="btn btn-phoenix-primary px-3" type="button">Go</button>
</div>
</div><a className="btn px-0 y-4 d-block collapse-indicator" data-bs-toggle="collapse" href="#collapseRating" role="button" aria-expanded="true" aria-controls="collapseRating">
<div className="d-flex align-items-center justify-content-between w-100">
<div className="fs-8 text-body-highlight">Rating</div><span className="fa-solid fa-angle-down toggle-icon text-body-quaternary"></span>
</div>
</a>
<div className="collapse show" id="collapseRating">
<div className="d-flex align-items-center mb-1"><input className="form-check-input me-3" id="flexRadio1" type="radio" name="flexRadio" /><span className="fa fa-star text-warning fs-9 me-1"></span><span className="fa fa-star text-warning fs-9 me-1"></span><span className="fa fa-star text-warning fs-9 me-1"></span><span className="fa fa-star text-warning fs-9 me-1"></span><span className="fa fa-star text-warning fs-9 me-1"></span></div>
<div className="d-flex align-items-center mb-1"><input className="form-check-input me-3" id="flexRadio2" type="radio" name="flexRadio" /><span className="fa fa-star text-warning fs-9 me-1"></span><span className="fa fa-star text-warning fs-9 me-1"></span><span className="fa fa-star text-warning fs-9 me-1"></span><span className="fa fa-star text-warning fs-9 me-1"></span><span className="fa-regular fa-star text-warning-light fs-9 me-1" data-bs-theme="light"></span>
<p className="ms-1 mb-0">& above</p>
</div>
<div className="d-flex align-items-center mb-1"><input className="form-check-input me-3" id="flexRadio3" type="radio" name="flexRadio" /><span className="fa fa-star text-warning fs-9 me-1"></span><span className="fa fa-star text-warning fs-9 me-1"></span><span className="fa fa-star text-warning fs-9 me-1"></span><span className="fa-regular fa-star text-warning-light fs-9 me-1" data-bs-theme="light"></span><span className="fa-regular fa-star text-warning-light fs-9 me-1" data-bs-theme="light"></span>
<p className="ms-1 mb-0">& above </p>
</div>
<div className="d-flex align-items-center mb-1"><input className="form-check-input me-3" id="flexRadio4" type="radio" name="flexRadio" /><span className="fa fa-star text-warning fs-9 me-1"></span><span className="fa fa-star text-warning fs-9 me-1"></span><span className="fa-regular fa-star text-warning-light fs-9 me-1" data-bs-theme="light"></span><span className="fa-regular fa-star text-warning-light fs-9 me-1" data-bs-theme="light"></span><span className="fa-regular fa-star text-warning-light fs-9 me-1" data-bs-theme="light"></span>
<p className="ms-1 mb-0">& above</p>
</div>
<div className="d-flex align-items-center mb-3"><input className="form-check-input me-3" id="flexRadio5" type="radio" name="flexRadio" /><span className="fa fa-star text-warning fs-9 me-1"></span><span className="fa-regular fa-star text-warning-light fs-9 me-1" data-bs-theme="light"></span><span className="fa-regular fa-star text-warning-light fs-9 me-1" data-bs-theme="light"></span><span className="fa-regular fa-star text-warning-light fs-9 me-1" data-bs-theme="light"></span><span className="fa-regular fa-star text-warning-light fs-9 me-1" data-bs-theme="light"></span>
<p className="ms-1 mb-0">& above </p>
</div>
</div><a className="btn px-0 d-block collapse-indicator" data-bs-toggle="collapse" href="#collapseDisplayType" role="button" aria-expanded="true" aria-controls="collapseDisplayType">
<div className="d-flex align-items-center justify-content-between w-100">
<div className="fs-8 text-body-highlight">Display type</div><span className="fa-solid fa-angle-down toggle-icon text-body-quaternary"></span>
</div>
</a>
<div className="collapse show" id="collapseDisplayType">
<div className="mb-2">
<div className="form-check mb-0"><input className="form-check-input mt-0" id="lcdInput" type="checkbox" name="displayType" checked /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="lcdInput">LCD</label></div>
<div className="form-check mb-0"><input className="form-check-input mt-0" id="ipsInput" type="checkbox" name="displayType" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="ipsInput">IPS</label></div>
<div className="form-check mb-0"><input className="form-check-input mt-0" id="oledInput" type="checkbox" name="displayType" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="oledInput">OLED</label></div>
<div className="form-check mb-0"><input className="form-check-input mt-0" id="amoledInput" type="checkbox" name="displayType" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="amoledInput">AMOLED</label></div>
<div className="form-check mb-0"><input className="form-check-input mt-0" id="retinaInput" type="checkbox" name="displayType" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="retinaInput">Retina</label></div>
</div>
</div><a className="btn px-0 d-block collapse-indicator" data-bs-toggle="collapse" href="#collapseCondition" role="button" aria-expanded="true" aria-controls="collapseCondition">
<div className="d-flex align-items-center justify-content-between w-100">
<div className="fs-8 text-body-highlight">Condition</div><span className="fa-solid fa-angle-down toggle-icon text-body-quaternary"></span>
</div>
</a>
<div className="collapse show" id="collapseCondition">
<div className="mb-2">
<div className="form-check mb-0"><input className="form-check-input mt-0" id="newInput" type="checkbox" name="condition" checked /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="newInput">New</label></div>
<div className="form-check mb-0"><input className="form-check-input mt-0" id="usedInput" type="checkbox" name="condition" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="usedInput">Used</label></div>
<div className="form-check mb-0"><input className="form-check-input mt-0" id="refurbrishedInput" type="checkbox" name="condition" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="refurbrishedInput">Refurbrished</label></div>
</div>
</div><a className="btn px-0 d-block collapse-indicator" data-bs-toggle="collapse" href="#collapseDelivery" role="button" aria-expanded="true" aria-controls="collapseDelivery">
<div className="d-flex align-items-center justify-content-between w-100">
<div className="fs-8 text-body-highlight">Delivery</div><span className="fa-solid fa-angle-down toggle-icon text-body-quaternary"></span>
</div>
</a>
<div className="collapse show" id="collapseDelivery">
<div className="mb-2">
<div className="form-check mb-0"><input className="form-check-input mt-0" id="freeShippingInput" type="checkbox" name="delivery" checked /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="freeShippingInput">Free Shipping</label></div>
<div className="form-check mb-0"><input className="form-check-input mt-0" id="oneDayShippingInput" type="checkbox" name="delivery" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="oneDayShippingInput">One-day Shipping</label></div>
<div className="form-check mb-0"><input className="form-check-input mt-0" id="codInput" type="checkbox" name="delivery" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="codInput">Cash on Delivery</label></div>
</div>
</div><a className="btn px-0 d-block collapse-indicator" data-bs-toggle="collapse" href="#collapseCampaign" role="button" aria-expanded="true" aria-controls="collapseCampaign">
<div className="d-flex align-items-center justify-content-between w-100">
<div className="fs-8 text-body-highlight">Campaign</div><span className="fa-solid fa-angle-down toggle-icon text-body-quaternary"></span>
</div>
</a>
<div className="collapse show" id="collapseCampaign">
<div className="mb-2">
<div className="form-check mb-0"><input className="form-check-input mt-0" id="summerSaleInput" type="checkbox" name="campaign" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="summerSaleInput">Summer Sale</label></div>
<div className="form-check mb-0"><input className="form-check-input mt-0" id="marchMadnessInput" type="checkbox" name="campaign" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="marchMadnessInput">March Madness</label></div>
<div className="form-check mb-0"><input className="form-check-input mt-0" id="flashSaleInput" type="checkbox" name="campaign" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="flashSaleInput">Flash Sale</label></div>
<div className="form-check mb-0"><input className="form-check-input mt-0" id="bogoBlastInput" type="checkbox" name="campaign" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="bogoBlastInput">BOGO Blast</label></div>
</div>
</div><a className="btn px-0 d-block collapse-indicator" data-bs-toggle="collapse" href="#collapseWarranty" role="button" aria-expanded="true" aria-controls="collapseWarranty">
<div className="d-flex align-items-center justify-content-between w-100">
<div className="fs-8 text-body-highlight">Warranty</div><span className="fa-solid fa-angle-down toggle-icon text-body-quaternary"></span>
</div>
</a>
<div className="collapse show" id="collapseWarranty">
<div className="mb-2">
<div className="form-check mb-0"><input className="form-check-input mt-0" id="threeMonthInput" type="checkbox" name="warranty" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="threeMonthInput">3 months</label></div>
<div className="form-check mb-0"><input className="form-check-input mt-0" id="sixMonthInput" type="checkbox" name="warranty" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="sixMonthInput">6 months</label></div>
<div className="form-check mb-0"><input className="form-check-input mt-0" id="oneYearInput" type="checkbox" name="warranty" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="oneYearInput">1 year</label></div>
<div className="form-check mb-0"><input className="form-check-input mt-0" id="twoYearsInput" type="checkbox" name="warranty" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="twoYearsInput">2 years</label></div>
<div className="form-check mb-0"><input className="form-check-input mt-0" id="threeYearsInput" type="checkbox" name="warranty" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="threeYearsInput">3 years</label></div>
<div className="form-check mb-0"><input className="form-check-input mt-0" id="fiveYearsInput" type="checkbox" name="warranty" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="fiveYearsInput">5 years</label></div>
</div>
</div><a className="btn px-0 d-block collapse-indicator" data-bs-toggle="collapse" href="#collapseWarrantyType" role="button" aria-expanded="true" aria-controls="collapseWarrantyType">
<div className="d-flex align-items-center justify-content-between w-100">
<div className="fs-8 text-body-highlight">Warranty Type</div><span className="fa-solid fa-angle-down toggle-icon text-body-quaternary"></span>
</div>
</a>
<div className="collapse show" id="collapseWarrantyType">
<div className="mb-2">
<div className="form-check mb-0x"><input className="form-check-input mt-0" id="replacementInput" type="checkbox" name="warrantyType" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="replacementInput">Replacement</label></div>
<div className="form-check mb-0"><input className="form-check-input mt-0" id="serviceInput" type="checkbox" name="warrantyType" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="serviceInput">Service</label></div>
<div className="form-check mb-0"><input className="form-check-input mt-0" id="partialCoveregeInput" type="checkbox" name="warrantyType" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="partialCoveregeInput">Partial Coverage</label></div>
<div className="form-check mb-0"><input className="form-check-input mt-0" id="appleCareInput" type="checkbox" name="warrantyType" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="appleCareInput">Apple Care</label></div>
<div className="form-check mb-0"><input className="form-check-input mt-0" id="moneyBackInput" type="checkbox" name="warrantyType" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="moneyBackInput">Money back</label></div>
<div className="form-check mb-0"><input className="form-check-input mt-0" id="extendableInput" type="checkbox" name="warrantyType" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="extendableInput">Extendable</label></div>
</div>
</div><a className="btn px-0 d-block collapse-indicator" data-bs-toggle="collapse" href="#collapseCertification" role="button" aria-expanded="true" aria-controls="collapseCertification">
<div className="d-flex align-items-center justify-content-between w-100">
<div className="fs-8 text-body-highlight">Certification</div><span className="fa-solid fa-angle-down toggle-icon text-body-quaternary"></span>
</div>
</a>
<div className="collapse show" id="collapseCertification">
<div>
<div className="form-check mb-0"><input className="form-check-input mt-0" id="rohsInput" type="checkbox" name="certification" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="rohsInput">RoHS</label></div>
<div className="form-check mb-0"><input className="form-check-input mt-0" id="fccInput" type="checkbox" name="certification" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="fccInput">FCC</label></div>
<div className="form-check mb-0"><input className="form-check-input mt-0" id="conflictInput" type="checkbox" name="certification" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="conflictInput">Conflict Free</label></div>
<div className="form-check mb-0"><input className="form-check-input mt-0" id="isoOneInput" type="checkbox" name="certification" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="isoOneInput">ISO 9001:2015</label></div>
<div className="form-check mb-0"><input className="form-check-input mt-0" id="isoTwoInput" type="checkbox" name="certification" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="isoTwoInput">ISO 27001:2013</label></div>
<div className="form-check mb-0"><input className="form-check-input mt-0" id="isoThreeInput" type="checkbox" name="certification" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="isoThreeInput">IEC 61000-4-2</label></div>
</div>
</div>
</div>
<div className="phoenix-offcanvas-backdrop d-lg-none" data-phoenix-backdrop="" style={{top: "92px"}}></div>
</div>
<div className="col-lg-9 col-xxl-10">
<div className="row gx-3 gy-6 mb-8">
<div className="col-12 col-sm-6 col-md-4 col-xxl-2">
<div className="product-card-container h-100">
<div className="position-relative text-decoration-none product-card h-100">
<div className="d-flex flex-column justify-content-between h-100">
<div>
<div className="border border-1 border-translucent rounded-3 position-relative mb-3"><button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span className="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span className="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img className="img-fluid" src="/site/assets/img/products/6.png" alt="" /></div><a className="stretched-link" href="/apps/e-commerce/landing/product-details">
<h6 className="mb-2 lh-sm line-clamp-3 product-name">PlayStation 5 DualSense Wireless Controller</h6>
</a>
<p className="fs-9"><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="text-body-quaternary fw-semibold ms-1">(67 people rated)</span></p>
</div>
<div>
<p className="fs-9 text-body-tertiary mb-2">dbrand skin available</p>
<div className="d-flex align-items-center mb-1">
<p className="me-2 text-body text-decoration-line-through mb-0">$125.00</p>
<h3 className="text-body-emphasis mb-0">$89.00</h3>
</div>
<p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">2 colors</p>
</div>
</div>
</div>
</div>
</div>
<div className="col-12 col-sm-6 col-md-4 col-xxl-2">
<div className="product-card-container h-100">
<div className="position-relative text-decoration-none product-card h-100">
<div className="d-flex flex-column justify-content-between h-100">
<div>
<div className="border border-1 border-translucent rounded-3 position-relative mb-3"><button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span className="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span className="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img className="img-fluid" src="/site/assets/img/products/1.png" alt="" /><span className="badge text-bg-success fs-10 product-verified-badge">Verified<span className="fas fa-check ms-1"></span></span></div><a className="stretched-link" href="/apps/e-commerce/landing/product-details">
<h6 className="mb-2 lh-sm line-clamp-3 product-name">Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Management & Skin Temperature ...</h6>
</a>
<p className="fs-9"><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="text-body-quaternary fw-semibold ms-1">(74 people rated)</span></p>
</div>
<div>
<div className="d-flex align-items-center mb-1">
<p className="me-2 text-body text-decoration-line-through mb-0">$49.99</p>
<h3 className="text-body-emphasis mb-0">$34.99</h3>
</div>
<p className="text-success fw-bold fs-9 lh-1 mb-0">Deal time ends in days</p>
</div>
</div>
</div>
</div>
</div>
<div className="col-12 col-sm-6 col-md-4 col-xxl-2">
<div className="product-card-container h-100">
<div className="position-relative text-decoration-none product-card h-100">
<div className="d-flex flex-column justify-content-between h-100">
<div>
<div className="border border-1 border-translucent rounded-3 position-relative mb-3"><button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span className="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span className="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img className="img-fluid" src="/site/assets/img/products/2.png" alt="" /></div><a className="stretched-link" href="/apps/e-commerce/landing/product-details">
<h6 className="mb-2 lh-sm line-clamp-3 product-name">iPhone 13 pro max-Pacific Blue, 128GB storage</h6>
</a>
<p className="fs-9"><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="text-body-quaternary fw-semibold ms-1">(33 people rated)</span></p>
</div>
<div>
<p className="fs-9 text-body-highlight fw-bold mb-2">Stock limited</p>
<div className="d-flex align-items-center mb-1">
<p className="me-2 text-body text-decoration-line-through mb-0">$899.99</p>
<h3 className="text-body-emphasis mb-0">$850.99</h3>
</div>
<p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">5 colors</p>
</div>
</div>
</div>
</div>
</div>
<div className="col-12 col-sm-6 col-md-4 col-xxl-2">
<div className="product-card-container h-100">
<div className="position-relative text-decoration-none product-card h-100">
<div className="d-flex flex-column justify-content-between h-100">
<div>
<div className="border border-1 border-translucent rounded-3 position-relative mb-3"><button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span className="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span className="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img className="img-fluid" src="/site/assets/img/products/3.png" alt="" /></div><a className="stretched-link" href="/apps/e-commerce/landing/product-details">
<h6 className="mb-2 lh-sm line-clamp-3 product-name">Apple MacBook Pro 13 inch-M1-8/256GB-Space Gray</h6>
</a>
<p className="fs-9"><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="text-body-quaternary fw-semibold ms-1">(97 people rated)</span></p>
</div>
<div>
<p className="fs-9 text-body-highlight fw-bold mb-2">Apple care included</p>
<div className="d-flex align-items-center mb-1">
<p className="me-2 text-body text-decoration-line-through mb-0">$12.00</p>
<h3 className="text-body-emphasis mb-0">$11.00</h3>
</div>
<p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">2 colors</p>
</div>
</div>
</div>
</div>
</div>
<div className="col-12 col-sm-6 col-md-4 col-xxl-2">
<div className="product-card-container h-100">
<div className="position-relative text-decoration-none product-card h-100">
<div className="d-flex flex-column justify-content-between h-100">
<div>
<div className="border border-1 border-translucent rounded-3 position-relative mb-3"><button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span className="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span className="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img className="img-fluid" src="/site/assets/img/products/4.png" alt="" /></div><a className="stretched-link" href="/apps/e-commerce/landing/product-details">
<h6 className="mb-2 lh-sm line-clamp-3 product-name">Apple iMac 24" 4K Retina Display M1 8 Core CPU, 7 Core GPU, 256GB SSD, Green (MJV83ZP/A) 2021</h6>
</a>
<p className="fs-9"><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="text-body-quaternary fw-semibold ms-1">(134 people rated)</span></p>
</div>
<div>
<p className="fs-9 text-body-highlight fw-bold mb-2">Exchange with kidney</p>
<div className="d-flex align-items-center mb-1">
<p className="me-2 text-body text-decoration-line-through mb-0">$1499.00</p>
<h3 className="text-body-emphasis mb-0">$1399.00</h3>
</div>
<p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">7 colors</p>
</div>
</div>
</div>
</div>
</div>
<div className="col-12 col-sm-6 col-md-4 col-xxl-2">
<div className="product-card-container h-100">
<div className="position-relative text-decoration-none product-card h-100">
<div className="d-flex flex-column justify-content-between h-100">
<div>
<div className="border border-1 border-translucent rounded-3 position-relative mb-3"><button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span className="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span className="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img className="img-fluid" src="/site/assets/img/products/5.png" alt="" /></div><a className="stretched-link" href="/apps/e-commerce/landing/product-details">
<h6 className="mb-2 lh-sm line-clamp-3 product-name">Razer Kraken v3 x Wired 7.1 Surroung Sound Gaming headset</h6>
</a>
<p className="fs-9"><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="text-body-quaternary fw-semibold ms-1">(59 people rated)</span></p>
</div>
<div>
<h3 className="text-body-emphasis">$59.00</h3>
<p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">2 colors</p>
</div>
</div>
</div>
</div>
</div>
<div className="col-12 col-sm-6 col-md-4 col-xxl-2">
<div className="product-card-container h-100">
<div className="position-relative text-decoration-none product-card h-100">
<div className="d-flex flex-column justify-content-between h-100">
<div>
<div className="border border-1 border-translucent rounded-3 position-relative mb-3"><button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span className="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span className="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img className="img-fluid" src="/site/assets/img/products/7.png" alt="" /></div><a className="stretched-link" href="/apps/e-commerce/landing/product-details">
<h6 className="mb-2 lh-sm line-clamp-3 product-name">2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 128GB) - Space Gray</h6>
</a>
<p className="fs-9"><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="text-body-quaternary fw-semibold ms-1">(13 people rated)</span></p>
</div>
<div>
<h3 className="text-body-emphasis">$799.00</h3>
<p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">2 colors</p>
</div>
</div>
</div>
</div>
</div>
<div className="col-12 col-sm-6 col-md-4 col-xxl-2">
<div className="product-card-container h-100">
<div className="position-relative text-decoration-none product-card h-100">
<div className="d-flex flex-column justify-content-between h-100">
<div>
<div className="border border-1 border-translucent rounded-3 position-relative mb-3"><button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span className="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span className="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img className="img-fluid" src="/site/assets/img/products/12.png" alt="" /></div><a className="stretched-link" href="/apps/e-commerce/landing/product-details">
<h6 className="mb-2 lh-sm line-clamp-3 product-name">HORI Racing Wheel Apex for PlayStation 4/3, and PC</h6>
</a>
<p className="fs-9"><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="text-body-quaternary fw-semibold ms-1">(64 people rated)</span></p>
</div>
<div>
<h3 className="text-body-emphasis">$299.00</h3>
<p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">1 colors</p>
</div>
</div>
</div>
</div>
</div>
<div className="col-12 col-sm-6 col-md-4 col-xxl-2">
<div className="product-card-container h-100">
<div className="position-relative text-decoration-none product-card h-100">
<div className="d-flex flex-column justify-content-between h-100">
<div>
<div className="border border-1 border-translucent rounded-3 position-relative mb-3"><button className="btn btn-wish btn-wish-primary z-2 d-toggle-container active" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove from wishlist"><span className="fas fa-heart" data-fa-transform="down-1"></span></button><img className="img-fluid" src="/site/assets/img/products/1.png" alt="" /><span className="badge text-bg-success fs-10 product-verified-badge">Verified<span className="fas fa-check ms-1"></span></span></div><a className="stretched-link" href="/apps/e-commerce/landing/product-details">
<h6 className="mb-2 lh-sm line-clamp-3 product-name">Amazfit T-Rex Pro Smart Watch with GPS, Outdoor Fitness Watch for Men, Military Standard Certified</h6>
</a>
<p className="fs-9"><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="text-body-quaternary fw-semibold ms-1">(32 people rated)</span></p>
</div>
<div>
<h3 className="text-body-emphasis">$20.00</h3>
<p className="text-success fw-bold fs-9 lh-1 mb-0">Deal time ends in 24 hours</p>
</div>
</div>
</div>
</div>
</div>
<div className="col-12 col-sm-6 col-md-4 col-xxl-2">
<div className="product-card-container h-100">
<div className="position-relative text-decoration-none product-card h-100">
<div className="d-flex flex-column justify-content-between h-100">
<div>
<div className="border border-1 border-translucent rounded-3 position-relative mb-3"><button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span className="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span className="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img className="img-fluid" src="/site/assets/img/products/16.png" alt="" /></div><a className="stretched-link" href="/apps/e-commerce/landing/product-details">
<h6 className="mb-2 lh-sm line-clamp-3 product-name">Apple AirPods Pro</h6>
</a>
<p className="fs-9"><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="text-body-quaternary fw-semibold ms-1">(39 people rated)</span></p>
</div>
<div>
<h3 className="text-body-emphasis">$59.00</h3>
<p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">3 colors</p>
</div>
</div>
</div>
</div>
</div>
<div className="col-12 col-sm-6 col-md-4 col-xxl-2">
<div className="product-card-container h-100">
<div className="position-relative text-decoration-none product-card h-100">
<div className="d-flex flex-column justify-content-between h-100">
<div>
<div className="border border-1 border-translucent rounded-3 position-relative mb-3"><button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span className="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span className="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img className="img-fluid" src="/site/assets/img/products/10.png" alt="" /></div><a className="stretched-link" href="/apps/e-commerce/landing/product-details">
<h6 className="mb-2 lh-sm line-clamp-3 product-name">Apple Magic Mouse (Wireless, Rechargable) - Silver</h6>
</a>
<p className="fs-9"><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="text-body-quaternary fw-semibold ms-1">(6 people rated)</span></p>
</div>
<div>
<h3 className="text-body-emphasis">$89.00</h3>
<p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">2 colors</p>
</div>
</div>
</div>
</div>
</div>
<div className="col-12 col-sm-6 col-md-4 col-xxl-2">
<div className="product-card-container h-100">
<div className="position-relative text-decoration-none product-card h-100">
<div className="d-flex flex-column justify-content-between h-100">
<div>
<div className="border border-1 border-translucent rounded-3 position-relative mb-3"><button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span className="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span className="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img className="img-fluid" src="/site/assets/img/products/25.png" alt="" /></div><a className="stretched-link" href="/apps/e-commerce/landing/product-details">
<h6 className="mb-2 lh-sm line-clamp-3 product-name">RESPAWN 200 Racing Style Gaming Chair, in Gray RSP 200 GRY</h6>
</a>
<p className="fs-9"><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="text-body-quaternary fw-semibold ms-1">(8 people rated)</span></p>
</div>
<div>
<h3 className="text-body-emphasis">$499.00</h3>
<p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">2 colors</p>
</div>
</div>
</div>
</div>
</div>
<div className="col-12 col-sm-6 col-md-4 col-xxl-2">
<div className="product-card-container h-100">
<div className="position-relative text-decoration-none product-card h-100">
<div className="d-flex flex-column justify-content-between h-100">
<div>
<div className="border border-1 border-translucent rounded-3 position-relative mb-3"><button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span className="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span className="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img className="img-fluid" src="/site/assets/img/products/27.png" alt="" /></div><a className="stretched-link" href="/apps/e-commerce/landing/product-details">
<h6 className="mb-2 lh-sm line-clamp-3 product-name">LEVOIT Humidifiers for Bedroom Large Room 6L Warm and Cool Mist for...</h6>
</a>
<p className="fs-9"><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="text-body-quaternary fw-semibold ms-1">(3 people rated)</span></p>
</div>
<div>
<h3 className="text-body-emphasis">$299.00</h3>
<p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">3 colors</p>
</div>
</div>
</div>
</div>
</div>
<div className="col-12 col-sm-6 col-md-4 col-xxl-2">
<div className="product-card-container h-100">
<div className="position-relative text-decoration-none product-card h-100">
<div className="d-flex flex-column justify-content-between h-100">
<div>
<div className="border border-1 border-translucent rounded-3 position-relative mb-3"><button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span className="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span className="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img className="img-fluid" src="/site/assets/img/products/26.png" alt="" /></div><a className="stretched-link" href="/apps/e-commerce/landing/product-details">
<h6 className="mb-2 lh-sm line-clamp-3 product-name">NETGEAR Nighthawk Pro Gaming XR500 Wi-Fi Router with 4 Ethernet Ports...</h6>
</a>
<p className="fs-9"><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="text-body-quaternary fw-semibold ms-1">(8 people rated)</span></p>
</div>
<div>
<h3 className="text-body-emphasis">$49.00</h3>
<p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">4 colors</p>
</div>
</div>
</div>
</div>
</div>
<div className="col-12 col-sm-6 col-md-4 col-xxl-2">
<div className="product-card-container h-100">
<div className="position-relative text-decoration-none product-card h-100">
<div className="d-flex flex-column justify-content-between h-100">
<div>
<div className="border border-1 border-translucent rounded-3 position-relative mb-3"><button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span className="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span className="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img className="img-fluid" src="/site/assets/img/products/18.png" alt="" /></div><a className="stretched-link" href="/apps/e-commerce/landing/product-details">
<h6 className="mb-2 lh-sm line-clamp-3 product-name">Rachael Ray Cucina Bakeware Set Includes Nonstick Bread Baking Cookie Sheet...</h6>
</a>
<p className="fs-9"><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="text-body-quaternary fw-semibold ms-1">(1 people rated)</span></p>
</div>
<div>
<h3 className="text-body-emphasis">$29.00</h3>
<p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">3 colors</p>
</div>
</div>
</div>
</div>
</div>
<div className="col-12 col-sm-6 col-md-4 col-xxl-2">
<div className="product-card-container h-100">
<div className="position-relative text-decoration-none product-card h-100">
<div className="d-flex flex-column justify-content-between h-100">
<div>
<div className="border border-1 border-translucent rounded-3 position-relative mb-3"><button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span className="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span className="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img className="img-fluid" src="/site/assets/img/products/17.png" alt="" /></div><a className="stretched-link" href="/apps/e-commerce/landing/product-details">
<h6 className="mb-2 lh-sm line-clamp-3 product-name">Xbox Series S</h6>
</a>
<p className="fs-9"><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="text-body-quaternary fw-semibold ms-1">(6 people rated)</span></p>
</div>
<div>
<h3 className="text-body-emphasis">$19.00</h3>
<p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">2 colors</p>
</div>
</div>
</div>
</div>
</div>
<div className="col-12 col-sm-6 col-md-4 col-xxl-2">
<div className="product-card-container h-100">
<div className="position-relative text-decoration-none product-card h-100">
<div className="d-flex flex-column justify-content-between h-100">
<div>
<div className="border border-1 border-translucent rounded-3 position-relative mb-3"><button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span className="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span className="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img className="img-fluid" src="/site/assets/img/products/24.png" alt="" /></div><a className="stretched-link" href="/apps/e-commerce/landing/product-details">
<h6 className="mb-2 lh-sm line-clamp-3 product-name">FURINNO Computer Writing Desk, Walnut</h6>
</a>
<p className="fs-9"><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="text-body-quaternary fw-semibold ms-1">(8 people rated)</span></p>
</div>
<div>
<h3 className="text-body-emphasis">$199.00</h3>
<p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">2 colors</p>
</div>
</div>
</div>
</div>
</div>
<div className="col-12 col-sm-6 col-md-4 col-xxl-2">
<div className="product-card-container h-100">
<div className="position-relative text-decoration-none product-card h-100">
<div className="d-flex flex-column justify-content-between h-100">
<div>
<div className="border border-1 border-translucent rounded-3 position-relative mb-3"><button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span className="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span className="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img className="img-fluid" src="/site/assets/img/products/20.png" alt="" /></div><a className="stretched-link" href="/apps/e-commerce/landing/product-details">
<h6 className="mb-2 lh-sm line-clamp-3 product-name">ASUS TUF Gaming F15 Gaming Laptop</h6>
</a>
<p className="fs-9"><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa-regular fa-star text-warning-light" data-bs-theme="light"></span><span className="text-body-quaternary fw-semibold ms-1">(3 people rated)</span></p>
</div>
<div>
<h3 className="text-body-emphasis">$150.00</h3>
<p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">2 colors</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="d-flex justify-content-end">

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
<div className="d-flex align-items-center flex-1 gap-3 border border-translucent rounded-pill px-4"><input className="form-control outline-none border-0 flex-1 fs-9 px-0" type="text" placeholder="Write message" /></div><button className="btn p-0 border-0 send-btn"><span className="fa-solid fa-paper-plane fs-9"></span></button>
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
<div className="col-4"><input className="btn-check" id="themeSwitcherLight" name="theme-color" type="radio" value="light" data-theme-control="phoenixTheme" /></div>
<div className="col-4"><input className="btn-check" id="themeSwitcherDark" name="theme-color" type="radio" value="dark" data-theme-control="phoenixTheme" /></div>
<div className="col-4"><input className="btn-check" id="themeSwitcherAuto" name="theme-color" type="radio" value="auto" data-theme-control="phoenixTheme" /></div>
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
<div className="col-6"><input className="btn-check" id="navbarPositionVertical" name="navigation-type" type="radio" value="vertical" data-theme-control="phoenixNavbarPosition" disabled /></div>
<div className="col-6"><input className="btn-check" id="navbarPositionHorizontal" name="navigation-type" type="radio" value="horizontal" data-theme-control="phoenixNavbarPosition" disabled /></div>
<div className="col-6"><input className="btn-check" id="navbarPositionCombo" name="navigation-type" type="radio" value="combo" data-theme-control="phoenixNavbarPosition" disabled /></div>
<div className="col-6"><input className="btn-check" id="navbarPositionTopDouble" name="navigation-type" type="radio" value="dual-nav" data-theme-control="phoenixNavbarPosition" disabled /></div>
</div>
<p className="text-warning-dark font-medium"> <span className="fa-solid fa-triangle-exclamation me-2 text-warning"></span>You can't update navigation type in this page</p>
</div>
<div className="setting-panel-item">
<h5 className="setting-panel-item-title">Vertical Navbar Appearance</h5>
<div className="row gx-2">
<div className="col-6"><input className="btn-check" id="navbar-style-default" type="radio" name="config.name" value="default" data-theme-control="phoenixNavbarVerticalStyle" disabled /></div>
<div className="col-6"><input className="btn-check" id="navbar-style-dark" type="radio" name="config.name" value="darker" data-theme-control="phoenixNavbarVerticalStyle" disabled /></div>
</div>
<p className="text-warning-dark font-medium"> <span className="fa-solid fa-triangle-exclamation me-2 text-warning"></span>You can't update vertical navbar appearance in this page</p>
</div>
<div className="setting-panel-item">
<h5 className="setting-panel-item-title">Horizontal Navbar Shape</h5>
<div className="row gx-2">
<div className="col-6"><input className="btn-check" id="navbarShapeDefault" name="navbar-shape" type="radio" value="default" data-theme-control="phoenixNavbarTopShape" disabled /></div>
<div className="col-6"><input className="btn-check" id="navbarShapeSlim" name="navbar-shape" type="radio" value="slim" data-theme-control="phoenixNavbarTopShape" disabled /></div>
</div>
<p className="text-warning-dark font-medium"> <span className="fa-solid fa-triangle-exclamation me-2 text-warning"></span>You can't update horizontal navbar shape in this page</p>
</div>
<div className="setting-panel-item">
<h5 className="setting-panel-item-title">Horizontal Navbar Appearance</h5>
<div className="row gx-2">
<div className="col-6"><input className="btn-check" id="navbarTopDefault" name="navbar-top-style" type="radio" value="default" data-theme-control="phoenixNavbarTopStyle" disabled /></div>
<div className="col-6"><input className="btn-check" id="navbarTopDarker" name="navbar-top-style" type="radio" value="darker" data-theme-control="phoenixNavbarTopStyle" disabled /></div>
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
