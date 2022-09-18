import React from "react";

class Navbar extends React.Component{
render(){
return(
    <di>
{/* <!-- Navigation--> */}
        {/* <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div class="container px-4 px-lg-5">
                <a href="#" class="navbar-brand">
                    <img src="assets/assets/lastlogo.ico" width="45" alt="" class="d-inline-block align-middle mr-2"/>
                    <span class="text-uppercase font-weight-bold">Quick Check</span>
                  </a> */}
                {/* <img class="img-fluid" src="assets/lastlogo.ico"  href="#page-top" alt="..." />
                <a class="navbar-brand" href="#page-top">Quick Check</a> */}
                {/* <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i> 
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" href="#about">phone number</a></li>
                        <li class="nav-item"><a class="nav-link" href="#projects">Projects</a></li>
                        <li class="nav-item"><a class="nav-link" href="#emailCheck">Email</a></li>
                    </ul>
                </div>
            </div>
        </nav> */}


 {/* <!-- Masthead--> */}
        <header class="masthead">
            <div class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                <div class="d-flex justify-content-center">
                    <div class="text-center">
                        <h1 class="mx-auto my-0 text-uppercase">Be Safe !</h1>
                        <h2 class="text-white-50 mx-auto mt-2 mb-5">Do you always recive anonymous phone calls ? Do You always recive Fraud Email or URLs ? </h2>
                        <a class="btn btn-outline-secondary" href="Cards">Get Started</a>
                        {/* <button type="button" class="btn btn-outline-secondary" href="Cards">Get Started </button> */}

                    </div>
                </div>
            </div>
        </header>
        {/* <!-- phonenumber--> */}
        {/* <section class="about-section text-center" id="about">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-8">
                        <h2 class="text-white mb-4">Built with Bootstrap 5</h2>
                        <p class="text-white-50">
                            Grayscale is a free Bootstrap theme created by Start Bootstrap. It can be yours right now, simply download the template on
                            <a href="https://startbootstrap.com/theme/grayscale/">the preview page.</a>
                            The theme is open source, and you can use it for any purpose, personal or commercial.
                        </p>
                    </div>
                </div>
                <img class="img-fluid" src="assets/assets/img/ipad.png" alt="..." />
            </div>
        </section> */}
        {/* <!-- Projects--> */}
        {/* <section class="projects-section bg-light" id="projects">
            <div class="container px-4 px-lg-5"> */}
                {/* <!-- Featured Project Row--> */}
                {/* <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
                    <div class="col-xl-8 col-lg-7"><img class="img-fluid mb-3 mb-lg-0" src="https://t4.ftcdn.net/jpg/03/58/10/87/240_F_358108785_rNJtmort9m65M3pft5swd7lnKJcTCB8u.jpg" alt="..." /></div>

                    <div class="col-xl-4 col-lg-5">
                        <div class="featured-text text-center text-lg-left">
                            <h4>Shoreline</h4>
                            <p class="text-black-50 mb-0">Grayscale is open source and MIT licensed. This means you can use it for any project - even commercial projects! Download it, customize it, and publish your website!</p>
                        </div>
                    </div>
                </div> */}
                {/* <!-- Project One Row--> */}
                {/* <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                    <div class="col-lg-6"><img class="img-fluid" src="assets/assets/img/demo-image-01.jpg" alt="..." /></div>
                    <div class="col-lg-6">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 class="text-white">Misty</h4>
                                    <p class="mb-0 text-white-50">An example of where you can put an image of a project, or anything else, along with a description.</p>
                                    <hr class="d-none d-lg-block mb-0 ms-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <!-- Project Two Row--> */}
                {/* <div class="row gx-0 justify-content-center">
                    <div class="col-lg-6"><img class="img-fluid" src="assets/assets/img/demo-image-02.jpg" alt="..." /></div>
                    <div class="col-lg-6 order-lg-first">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 class="text-white">Mountains</h4>
                                    <p class="mb-0 text-white-50">Another example of a project with its respective description. These sections work well responsively as well, try this theme on a small screen!</p>
                                    <hr class="d-none d-lg-block mb-0 me-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
        {/* <!-- Email Check --> */}
        <section class="signup-section" id="emailCheck">
                <div class="container text-left">
                <div class="row h-100">
                <div class="col-6 pt-5">
                    

                        {/* <i class="fa-regular fa-envelope fa-2x mb-2 text-white"></i>
                         <h2 class="text-white mb-5">Enter The Sender Email !</h2>
                        <form class="form-signup" id="contactForm" > */}
                            {/* <!-- Email address input--> */}
                            {/* <div class="row input-group-newsletter">
                                <div class="col"><input class="form-control" id="emailAddress" type="email" placeholder="Enter The Sender Email..." aria-label="Enter email address..." data-sb-validations="required,email" /></div>
                                <div class="col-auto"><button class="btn btn-primary disabled" id="submitButton" type="submit">Search</button></div>
                            </div>
                        </form>
                </div>
                <div class="col-6"> */}
                    {/* <img class="img-auto " src="assets/assets/img/Picture3.jpg" class="col-md-6 float-md-end mb-3 ms-md-3" alt="..." />  */}
                        </div>
                </div>
                
            </div>
        </section>
        {/* <!-- Contact--> */}
        <section class="contact-section bg-black">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5">
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-map-marked-alt text-primary mb-2"></i>
                                <h4 class="text-uppercase m-0">Address</h4>
                                <hr class="my-4 mx-auto" />
                                <div class="small text-black-50">4923 Market Street, Orlando FL</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-envelope text-primary mb-2"></i>
                                <h4 class="text-uppercase m-0">Email</h4>
                                <hr class="my-4 mx-auto" />
                                <div class="small text-black-50"><a href="#!">hello@yourdomain.com</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-mobile-alt text-primary mb-2"></i>
                                <h4 class="text-uppercase m-0">Phone</h4>
                                <hr class="my-4 mx-auto" />
                                <div class="small text-black-50">+1 (555) 902-8832</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="social d-flex justify-content-center">
                    <a class="mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                    <a class="mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                    <a class="mx-2" href="#!"><i class="fab fa-github"></i></a>
                </div>
            </div>
        </section>
        {/* <!-- Footer--> */}
        <footer class="footer bg-black small text-center text-white-50"><div class="container px-4 px-lg-5">Copyright &copy; Your Website 2022</div></footer>
        {/* <!-- Bootstrap core JS--> */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        {/* <!-- Core theme JS--> */}
        <script src="js/scripts.js"></script>
        {/* <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *-->
        <!-- * *                               SB Forms JS                               * *-->
        <!-- * * Activate your form at https://startbootstrap.com/solution/contact-forms * *-->
        <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *--> */}
        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>



    </di>

);

}




}

export default Navbar;