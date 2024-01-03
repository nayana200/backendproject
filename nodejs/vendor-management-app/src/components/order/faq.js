import React from 'react'

const Faq = () => {
    return (
        <div>
            <section className="section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-5 col-12 d-none d-md-block">
                            <div className="rounded shadow p-4 sticky-bar">
                                <ul className="list-unstyled mb-0">
                                    <li><a href="#tech" className="mouse-down h6 text-dark">Buying Questions</a></li>
                                    <li className="mt-4"><a href="#general" className="mouse-down h6 text-dark">General Questions</a></li>
                                    <li className="mt-4"><a href="#payment" className="mouse-down h6 text-dark">Payments Questions</a></li>
                                    <li className="mt-4"><a href="#support" className="mouse-down h6 text-dark">Support Questions</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-7 col-12">
                            <div className="section-title" id="tech">
                                <h4>Buying Product</h4>
                            </div>
                            <div className="faq-content mt-4 pt-2">
                                <div className="accordion" id="accordionExampleone">
                                    <div className="card border-0 rounded mb-2">
                                        <a data-toggle="collapse" href="#collapseone" className="faq position-relative" aria-expanded="true" aria-controls="collapseone">
                                            <div className="card-header border-0 bg-light p-3 pr-5" id="headingfifone">
                                                <h6 className="title mb-0"> How our  work ? </h6>
                                            </div>
                                        </a>
                                        <div id="collapseone" className="collapse show" aria-labelledby="headingfifone" data-parent="#accordionExampleone">
                                            <div className="card-body px-2 py-4">
                                                <p className="text-muted mb-0 faq-ans">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card border-0 rounded mb-2">
                                        <a data-toggle="collapse" href="#collapsetwo" className="faq position-relative collapsed" aria-expanded="false" aria-controls="collapsetwo">
                                            <div className="card-header border-0 bg-light p-3 pr-5" id="headingtwo">
                                                <h6 className="title mb-0"> What is the main process open account ? </h6>
                                            </div>
                                        </a>
                                        <div id="collapsetwo" className="collapse" aria-labelledby="headingtwo" data-parent="#accordionExampleone">
                                            <div className="card-body px-2 py-4">
                                                <p className="text-muted mb-0 faq-ans">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card border-0 rounded mb-2">
                                        <a data-toggle="collapse" href="#collapsethree" className="faq position-relative collapsed" aria-expanded="false" aria-controls="collapsethree">
                                            <div className="card-header border-0 bg-light p-3 pr-5" id="headingthree">
                                                <h6 className="title mb-0"> How to make unlimited data entry ? </h6>
                                            </div>
                                        </a>
                                        <div id="collapsethree" className="collapse" aria-labelledby="headingthree" data-parent="#accordionExampleone">
                                            <div className="card-body px-2 py-4">
                                                <p className="text-muted mb-0 faq-ans">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card border-0 rounded mb-2">
                                        <a data-toggle="collapse" href="#collapsefour" className="faq position-relative collapsed" aria-expanded="false" aria-controls="collapsefour">
                                            <div className="card-header border-0 bg-light p-3 pr-5" id="headingfour">
                                                <h6 className="title mb-0"> Is safer to use with my account ? </h6>
                                            </div>
                                        </a>
                                        <div id="collapsefour" className="collapse" aria-labelledby="headingfour" data-parent="#accordionExampleone">
                                            <div className="card-body px-2 py-4">
                                                <p className="text-muted mb-0 faq-ans">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card border-0 rounded">
                                        <a data-toggle="collapse" href="#collapsefive2" className="faq position-relative collapsed" aria-expanded="false" aria-controls="collapsefive2">
                                            <div className="card-header border-0 bg-light p-3 pr-5" id="headingfive2">
                                                <h6 className="title mb-0"> How can i contact your technical team ? </h6>
                                            </div>
                                        </a>
                                        <div id="collapsefive2" className="collapse" aria-labelledby="headingfive2" data-parent="#accordionExampleone">
                                            <div className="card-body px-2 py-4">
                                                <p className="text-muted mb-0 faq-ans">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="section-title mt-5" id="general">
                                <h4>General Questions</h4>
                            </div>

                            <div className="faq-content mt-4 pt-3">
                                <div className="accordion" id="accordionExampletwo">
                                    <div className="card border-0 rounded mb-2">
                                        <a data-toggle="collapse" href="#collapsefive" className="faq position-relative" aria-expanded="true" aria-controls="collapsefive">
                                            <div className="card-header border-0 bg-light p-3 pr-5" id="headingfive">
                                                <h6 className="title mb-0"> How our  work ? </h6>
                                            </div>
                                        </a>
                                        <div id="collapsefive" className="collapse show" aria-labelledby="headingfive" data-parent="#accordionExampletwo">
                                            <div className="card-body px-2 py-4">
                                                <p className="text-muted mb-0 faq-ans">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card border-0 rounded mb-2">
                                        <a data-toggle="collapse" href="#collapsesix" className="faq position-relative collapsed" aria-expanded="false" aria-controls="collapsesix">
                                            <div className="card-header border-0 bg-light p-3 pr-5" id="headingsix">
                                                <h6 className="title mb-0"> What is the main process open account ? </h6>
                                            </div>
                                        </a>
                                        <div id="collapsesix" className="collapse" aria-labelledby="headingsix" data-parent="#accordionExampletwo">
                                            <div className="card-body px-2 py-4">
                                                <p className="text-muted mb-0 faq-ans">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card border-0 rounded mb-2">
                                        <a data-toggle="collapse" href="#collapseseven" className="faq position-relative collapsed" aria-expanded="false" aria-controls="collapseseven">
                                            <div className="card-header border-0 bg-light p-3 pr-5" id="headingseven">
                                                <h6 className="title mb-0"> How to make unlimited data entry ? </h6>
                                            </div>
                                        </a>
                                        <div id="collapseseven" className="collapse" aria-labelledby="headingseven" data-parent="#accordionExampletwo">
                                            <div className="card-body px-2 py-4">
                                                <p className="text-muted mb-0 faq-ans">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card border-0 rounded mb-2">
                                        <a data-toggle="collapse" href="#collapseeight" className="faq position-relative collapsed" aria-expanded="false" aria-controls="collapseeight">
                                            <div className="card-header border-0 bg-light p-3 pr-5" id="headingeight">
                                                <h6 className="title mb-0"> Is  safer to use with my account ? </h6>
                                            </div>
                                        </a>
                                        <div id="collapseeight" className="collapse" aria-labelledby="headingeight" data-parent="#accordionExampletwo">
                                            <div className="card-body px-2 py-4">
                                                <p className="text-muted mb-0 faq-ans">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card border-0 rounded">
                                        <a data-toggle="collapse" href="#collapsenine" className="faq position-relative collapsed" aria-expanded="false" aria-controls="collapsenine">
                                            <div className="card-header border-0 bg-light p-3 pr-5" id="headingnine">
                                                <h6 className="title mb-0"> How can i contact your technical team ? </h6>
                                            </div>
                                        </a>
                                        <div id="collapsenine" className="collapse" aria-labelledby="headingnine" data-parent="#accordionExampletwo">
                                            <div className="card-body px-2 py-4">
                                                <p className="text-muted mb-0 faq-ans">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="section-title mt-5" id="payment">
                                <h4>Payments Questions</h4>
                            </div>

                            <div className="faq-content mt-4 pt-3">
                                <div className="accordion" id="accordionExamplethree">
                                    <div className="card border-0 rounded mb-2">
                                        <a data-toggle="collapse" href="#collapseten" className="faq position-relative" aria-expanded="true" aria-controls="collapseten">
                                            <div className="card-header border-0 bg-light p-3 pr-5" id="headingten">
                                                <h6 className="title mb-0"> How our  work ? </h6>
                                            </div>
                                        </a>
                                        <div id="collapseten" className="collapse show" aria-labelledby="headingten" data-parent="#accordionExamplethree">
                                            <div className="card-body px-2 py-4">
                                                <p className="text-muted mb-0 faq-ans">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card border-0 rounded mb-2">
                                        <a data-toggle="collapse" href="#collapseeleven" className="faq position-relative collapsed" aria-expanded="false" aria-controls="collapseeleven">
                                            <div className="card-header border-0 bg-light p-3 pr-5" id="headingeleven">
                                                <h6 className="title mb-0"> What is the main process open account ? </h6>
                                            </div>
                                        </a>
                                        <div id="collapseeleven" className="collapse" aria-labelledby="headingeleven" data-parent="#accordionExamplethree">
                                            <div className="card-body px-2 py-4">
                                                <p className="text-muted mb-0 faq-ans">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card border-0 rounded mb-2">
                                        <a data-toggle="collapse" href="#collapsetwelve" className="faq position-relative collapsed" aria-expanded="false" aria-controls="collapsetwelve">
                                            <div className="card-header border-0 bg-light p-3 pr-5" id="headingtwelve">
                                                <h6 className="title mb-0"> How to make unlimited data entry ? </h6>
                                            </div>
                                        </a>
                                        <div id="collapsetwelve" className="collapse" aria-labelledby="headingtwelve" data-parent="#accordionExamplethree">
                                            <div className="card-body px-2 py-4">
                                                <p className="text-muted mb-0 faq-ans">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card border-0 rounded mb-2">
                                        <a data-toggle="collapse" href="#collapsethirteen" className="faq position-relative collapsed" aria-expanded="false" aria-controls="collapsethirteen">
                                            <div className="card-header border-0 bg-light p-3 pr-5" id="headingthirteen">
                                                <h6 className="title mb-0"> Is  safer to use with my account ? </h6>
                                            </div>
                                        </a>
                                        <div id="collapsethirteen" className="collapse" aria-labelledby="headingthirteen" data-parent="#accordionExamplethree">
                                            <div className="card-body px-2 py-4">
                                                <p className="text-muted mb-0 faq-ans">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card border-0 rounded">
                                        <a data-toggle="collapse" href="#collapsefourteen" className="faq position-relative collapsed" aria-expanded="false" aria-controls="collapsefourteen">
                                            <div className="card-header border-0 bg-light p-3 pr-5" id="headingfourteen">
                                                <h6 className="title mb-0"> How can i contact your technical team ? </h6>
                                            </div>
                                        </a>
                                        <div id="collapsefourteen" className="collapse" aria-labelledby="headingfourteen" data-parent="#accordionExamplethree">
                                            <div className="card-body px-2 py-4">
                                                <p className="text-muted mb-0 faq-ans">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="section-title mt-5" id="support">
                                <h4>Support Questions</h4>
                            </div>

                            <div className="faq-content mt-4 pt-3">
                                <div className="accordion" id="accordionExamplefour">
                                    <div className="card border-0 rounded mb-2">
                                        <a data-toggle="collapse" href="#collapsefifthenn" className="faq position-relative" aria-expanded="true" aria-controls="collapsefifthenn">
                                            <div className="card-header border-0 bg-light p-3 pr-5" id="headingfiftheen">
                                                <h6 className="title mb-0"> How our work ? </h6>
                                            </div>
                                        </a>
                                        <div id="collapsefifthenn" className="collapse show" aria-labelledby="headingfiftheen" data-parent="#accordionExamplefour">
                                            <div className="card-body px-2 py-4">
                                                <p className="text-muted mb-0 faq-ans">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card border-0 rounded mb-2">
                                        <a data-toggle="collapse" href="#collapsesixteen" className="faq position-relative collapsed" aria-expanded="false" aria-controls="collapsesixteen">
                                            <div className="card-header border-0 bg-light p-3 pr-5" id="headingsixteen">
                                                <h6 className="title mb-0"> What is the main process open account ? </h6>
                                            </div>
                                        </a>
                                        <div id="collapsesixteen" className="collapse" aria-labelledby="headingsixteen" data-parent="#accordionExamplefour">
                                            <div className="card-body px-2 py-4">
                                                <p className="text-muted mb-0 faq-ans">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card border-0 rounded mb-2">
                                        <a data-toggle="collapse" href="#collapseseventeen" className="faq position-relative collapsed" aria-expanded="false" aria-controls="collapseseventeen">
                                            <div className="card-header border-0 bg-light p-3 pr-5" id="headingseventeen">
                                                <h6 className="title mb-0"> How to make unlimited data entry ? </h6>
                                            </div>
                                        </a>
                                        <div id="collapseseventeen" className="collapse" aria-labelledby="headingseventeen" data-parent="#accordionExamplefour">
                                            <div className="card-body px-2 py-4">
                                                <p className="text-muted mb-0 faq-ans">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card border-0 rounded mb-2">
                                        <a data-toggle="collapse" href="#collapseeigheteen" className="faq position-relative collapsed" aria-expanded="false" aria-controls="collapseeigheteen">
                                            <div className="card-header border-0 bg-light p-3 pr-5" id="headingeighteen">
                                                <h6 className="title mb-0"> Is safer to use with my account ? </h6>
                                            </div>
                                        </a>
                                        <div id="collapseeigheteen" className="collapse" aria-labelledby="headingeighteen" data-parent="#accordionExamplefour">
                                            <div className="card-body px-2 py-4">
                                                <p className="text-muted mb-0 faq-ans">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card border-0 rounded">
                                        <a data-toggle="collapse" href="#collapsenineteen" className="faq position-relative collapsed" aria-expanded="false" aria-controls="collapsenineteen">
                                            <div className="card-header border-0 bg-light p-3 pr-5" id="headingnineteen">
                                                <h6 className="title mb-0"> How can i contact your technical team ? </h6>
                                            </div>
                                        </a>
                                        <div id="collapsenineteen" className="collapse" aria-labelledby="headingnineteen" data-parent="#accordionExamplefour">
                                            <div className="card-body px-2 py-4">
                                                <p className="text-muted mb-0 faq-ans">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-100 mt-60">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="media align-items-center shadow rounded p-4 features">
                                <div className="icons m-0 rounded h2 text-primary text-center px-2">
                                    <i className="uil uil-envelope-check"></i>
                                </div>
                                <div className="content ml-4">
                                    <h5 className="mb-1"><a href="gy" className="text-dark">Get in Touch !</a></h5>
                                    <p className="text-muted mb-0">This is required when, for text is not yet available.</p>
                                    <div className="mt-2">
                                        <a href="jjhj" className="btn btn-sm btn-soft-primary">Submit a Request</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="media align-items-center shadow rounded p-4 features">
                                <div className="icons m-0 rounded h2 text-primary text-center px-2">
                                    <i className="uil uil-webcam"></i>
                                </div>
                                <div className="content ml-4">
                                    <h5 className="mb-1"><a href="vghfhg" className="text-dark">Start a Meeting</a></h5>
                                    <p className="text-muted mb-0">This is required when, for text is not yet available.</p>
                                    <div className="mt-2">
                                        <a href="hjg" className="btn btn-sm btn-soft-primary">Start Video Chat</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Faq
