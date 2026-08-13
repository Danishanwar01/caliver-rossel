import DashboardNavbars from '../components/DashboardNavbars.jsx';
/* Auto-converted from the original HTML. Visual/markup structure intentionally preserved. */
export default function AppsEventsCreateAnEventPage() {
  return (
    <>




<main className="main" id="top">
<DashboardNavbars />










<div className="content">

<form className="mb-9">
<div className="row justify-content-between align-items-end g-3 mb-5">
<div className="col-12 col-sm-auto col-xl-8">
<h2 className="mb-0">Create an Event</h2>
</div>
<div className="col-12 col-sm-auto col-xl-4">
<div className="d-flex"><button className="btn btn-phoenix-primary px-5 me-2">Save</button><a className="btn btn-primary px-5 w-100 text-nowrap" href="/apps/events/event-detail">Publish event</a></div>
</div>
</div>
<div className="row g-5">
<div className="col-xl-8">
<div className="row gx-3 gy-4">
<h4 className="fs-7 mb-0">Event Details</h4>
<div className="col-sm-6 col-md-12">
<div className="form-floating"><input className="form-control" id="floatingEventInput" type="text" placeholder="Event title" /><label htmlFor="floatingEventInput">Event title</label></div>
</div>
<div className="col-sm-6 col-md-6">
<div className="form-floating"><select className="form-select" id="floatingSelectTask">
<option selected>Select event type</option>
<option value="1">technical</option>
<option value="2">external</option>
<option value="3">organizational</option>
</select><label htmlFor="floatingSelectTask">type</label></div>
</div>
<div className="col-sm-6 col-md-6">
<div className="form-floating"><select className="form-select" id="floatingSelectPrivacy">
<option selected>Select topic</option>
<option value="1">Data select topic One</option>
<option value="2">Data select topic Two</option>
<option value="3">Data select topic Three</option>
</select><label htmlFor="floatingSelectPrivacy">topic</label></div>
</div>
<div className="col-12 mt-4">
<div className="form-check form-check-inline"><input className="form-check-input" id="inlineRadio1" type="radio" name="inlineRadioOptions" value="option1" checked /><label className="form-check-label" htmlFor="inlineRadio1">Online</label></div>
<div className="form-check form-check-inline"><input className="form-check-input" id="inlineRadio2" type="radio" name="inlineRadioOptions" value="option2" /><label className="form-check-label" htmlFor="inlineRadio2">Offline</label></div>
<div className="form-check form-check-inline"><input className="form-check-input" id="inlineRadio3" type="radio" name="inlineRadioOptions" value="option3" /><label className="form-check-label" htmlFor="inlineRadio3">Both</label></div>
</div>
<div className="col-sm-6 col-md-12 mt-md-0 mt-lg-1">
<div className="form-floating"><input className="form-control" id="floatingVenueInput" type="text" placeholder="Venue" /><label htmlFor="floatingVenueInput">Venue</label></div>
</div>
<div className="col-sm-6 col-md-4">
<div className="form-floating"><select className="form-select" id="floatingSelectCountry">
<option selected>Select Country</option>
<option value="1">Country One</option>
<option value="2">Country Two</option>
<option value="3">Country Three</option>
</select><label htmlFor="floatingSelectCountry">Country</label></div>
</div>
<div className="col-sm-6 col-md-4">
<div className="form-floating"><select className="form-select" id="floatingSelectState">
<option selected>Select State </option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</select><label htmlFor="floatingSelectState"> State</label></div>
</div>
<div className="col-sm-6 col-md-4">
<div className="form-floating"><select className="form-select" id="floatingSelectCity">
<option selected>Select city</option>
<option value="1">Data Privacy One</option>
<option value="2">Data Privacy Two</option>
<option value="3">Data Privacy Three</option>
</select><label htmlFor="floatingSelectCity">City</label></div>
</div>
<h4 className="fs-7 mt-7">Schedule</h4>
<div className="col-sm-6">
<div className="flatpickr-input-container">
<div className="form-floating"><input className="form-control datetimepicker" id="startDatepicker" type="text" placeholder="start date" data-options="&#123;&quot;disableMobile&quot;:true&#125;" /><span className="uil uil-calendar-alt flatpickr-icon text-body-tertiary"></span><label className="ps-6" htmlFor="startDatepicker">Start date</label></div>
</div>
</div>
<div className="col-sm-6">
<div className="form-floating"><input className="form-control datetimepicker" id="timepickerEvent" type="text" placeholder="H:i" data-options="&#123;&quot;enableTime&quot;:true,&quot;noCalendar&quot;:true,&quot;dateFormat&quot;:&quot;H:i&quot;,&quot;disableMobile&quot;:true&#125;" /><label htmlFor="timepickerEvent">Start Time</label></div>
</div>
<div className="col-sm-6">
<div className="flatpickr-input-container">
<div className="form-floating"><input className="form-control datetimepicker" id="endDatepicker" type="text" placeholder="end date" data-options="&#123;&quot;disableMobile&quot;:true&#125;" /><span className="uil uil-calendar-alt flatpickr-icon text-body-tertiary"></span><label className="ps-6" htmlFor="endDatepicker">End date</label></div>
</div>
</div>
<div className="col-sm-6">
<div className="form-floating"><input className="form-control datetimepicker" id="timepickerEvent2" type="text" placeholder="H:i" data-options="&#123;&quot;enableTime&quot;:true,&quot;noCalendar&quot;:true,&quot;dateFormat&quot;:&quot;H:i&quot;,&quot;disableMobile&quot;:true&#125;" /><label htmlFor="timepickerEvent2">End Time</label></div>
</div>
<div className="col-sm-6">
<div className="form-floating"><select className="form-select" id="floatingSelectTimeZone">
<option selected>Select time zone</option>
<option value="1">Data Privacy One</option>
<option value="2">Data Privacy Two</option>
<option value="3">Data Privacy Three</option>
</select><label htmlFor="floatingSelectTimeZone">Time zone</label></div>
</div>
<div className="col-sm-6">
<div className="flatpickr-input-container">
<div className="form-floating"><input className="form-control datetimepicker" id="datepicker" type="text" placeholder="registration deadline" data-options="&#123;&quot;disableMobile&quot;:true&#125;" /><label htmlFor="datepicker">Registration deadline</label></div>
</div>
</div>
<div className="col-12 gy-6">
<div className="form-floating"><textarea className="form-control" id="floatingProjectDescription" placeholder="Leave a comment here" style={{height: "128px"}}></textarea><label htmlFor="floatingProjectDescription">Description</label></div>
</div>
<div className="col-sm-6 gy-6">
<div className="form-floating"><input className="form-control" id="floatingOrganizersInput" type="text" placeholder="ORGANIZERS" /><label htmlFor="floatingOrganizersInput">ORGANIZERS</label></div>
</div>
<div className="col-sm-6 gy-6">
<div className="form-floating"><input className="form-control" id="floatingSponsorsInput" type="text" placeholder="SPONSORS" /><label htmlFor="floatingSponsorsInput">SPONSORS</label></div>
</div>
<div className="col-12 gy-6">
<div className="dropzone dropzone-multiple p-0 mb-5" id="my-awesome-dropzone" data-dropzone="data-dropzone">
<div className="fallback"><input name="file" type="file" multiple /></div>
<div className="dz-preview d-flex flex-wrap">
<div className="border border-translucent bg-body-emphasis rounded-3 d-flex flex-center position-relative me-2 mb-2" style={{height: "80px", width: "80px"}}><img className="dz-image" src="/site/assets/img/products/23.png" alt="..." data-dz-thumbnail="data-dz-thumbnail" /><a className="dz-remove text-body-quaternary" href="#!" data-dz-remove="data-dz-remove"><span data-feather="x"></span></a></div>
</div>
<div className="dz-message text-body-tertiary text-center" data-dz-message="data-dz-message"> Drag your photo here <span className="text-body-secondary">or </span><button className="btn btn-link p-0" type="button">Browse from device </button><br /><img className="mt-3 me-2" src="/site/assets/img/icons/image-icon.png" width="40" alt="" /></div>
</div>
</div>
<div className="col-12">
<div style={{'--phoenix-choices-inner-min-height': "128px"}}><select className="form-select mb-3" data-choices="data-choices" multiple data-options="&#123;&quot;removeItemButton&quot;:true,&quot;placeholder&quot;:true&#125;">
<option value="">Add tags</option>
<option value="MUSIC">Music</option>
<option value="CONCEERT">CONCEERT</option>
<option value="GREATEST SHOW ON EARTH">GREATEST SHOW ON EARTH </option>
</select></div>
</div>
</div>
</div>
<div className="col-xl-4">
<div className="border-bottom border-translucent pb-6 mb-6">
<h4 className="fs-7 mb-4">Privacy</h4>
<div className="form-check mb-2"><input className="form-check-input" id="exampleRadios1" type="radio" name="exampleRadios" value="option1" checked /><label className="form-check-label fw-normal" htmlFor="exampleRadios1"><span className="h5 d-block mt-1">Public</span>On Phoenix, our distribution partners, and search engines,<br />anybody can find the event </label></div>
<div className="form-check mb-0"><input className="form-check-input" id="exampleRadios2" type="radio" name="exampleRadios" value="option2" /><label className="form-check-label fw-normal" htmlFor="exampleRadios2"><span className="h5 d-block mt-1">Private</span>Only the individuals you select have access to it.</label></div>
</div>
<div className="border-bottom border-translucent mb-6">
<div className="form-check"><input className="form-check-input" id="flexChecked" type="checkbox" checked /><label className="form-check-label fw-bold fs-8 mb-5" htmlFor="flexChecked">Show the number of available tickets</label></div>
</div>
<h4 className="fs-7 mb-4">Ticket pricing</h4>
<div className="form-check form-check-inline"><input className="form-check-input" id="freeTicket" type="radio" name="ticketPricing" value="freeTicket" checked /><label className="form-check-label" htmlFor="freeTicket">Free</label></div>
<div className="form-check form-check-inline"><input className="form-check-input" id="paidTicket" type="radio" name="ticketPricing" value="paidTicket" /><label className="form-check-label" htmlFor="paidTicket">Paid</label></div>
<div className="row g-3 mb-7 mt-1 border-bottom border-translucent pb-5">
<div className="col-6 col col-xl-7">
<h4 className="fs-9">Option</h4>
</div>
<div className="col-6 col-xl-5">
<h4 className="fs-9">Price</h4>
</div>
<div className="col-6 col-xl-7"><input className="form-control" type="text" placeholder="Top Gallery" /></div>
<div className="col-6 col-xl-5"><input className="form-control" type="number" placeholder="$0.0" /></div>
<div className="col-6 col-xl-7"><input className="form-control" type="text" placeholder="VIP" /></div>
<div className="col-6 col-xl-5"><input className="form-control" type="number" placeholder="$0.0" /></div>
<div className="col-6 col-xl-7"><input className="form-control" type="text" placeholder="Front row" /></div>
<div className="col-6 col-xl-5"><input className="form-control" type="number" placeholder="$0.0" /></div>
<div className="col-12"><button className="btn btn-link p-0" type="button"><span className="fa-solid fa-plus me-2"></span>Add an option </button></div>
</div>
<h4 className="fs-7 mb-3">Custom fields</h4>
<div className="row g-3 mb-3">
<div className="col-md-6 col-lg-12 col-xl-6"><label className="form-label" htmlFor="inputName">Name</label><input className="form-control" id="inputName" type="text" placeholder="Item name (e.g. Special T-shirt)" /></div>
<div className="col-md-6 col-lg-12 col-xl-6"><label className="form-label" htmlFor="inputState1">Type</label><select className="form-select" id="inputState1">
<option value="">Choose...</option>
<option value="">Type One</option>
<option value="">Type Two</option>
</select></div>
<div className="col-12"><label className="form-label" htmlFor="filedOptions">Field options</label><textarea className="form-control" id="filedOptions" placeholder="Description" rows="6"></textarea></div>
</div>
<div className="row g-3">
<div className="col-md-6 col-lg-12 col-xl-6"><label className="form-label" htmlFor="inputName2">Name</label><input className="form-control" id="inputName2" type="text" placeholder="Item name (e.g. Special T-shirt)" /></div>
<div className="col-md-6 col-lg-12 col-xl-6"><label className="form-label" htmlFor="inputState2">Type</label><select className="form-select" id="inputState2">
<option value="">Choose...</option>
<option value="">Type Three</option>
<option value="">Type Four</option>
</select></div>
<div className="col-12"><label className="form-label" htmlFor="filedOptions2">Field options</label><textarea className="form-control" id="filedOptions2" placeholder="Description" rows="6"></textarea></div>
<div className="col-12"><button className="btn btn-link p-0" type="button"><span className="fa-solid fa-plus me-2"></span>Add an item</button></div>
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
