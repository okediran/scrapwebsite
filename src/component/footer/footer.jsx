import { TwitterOutlined,FacebookFilled,DribbbleOutlined,InstagramOutlined,YoutubeFilled  } from '@ant-design/icons';
function Footer() {
  return (
      <footer>
            <div class="container-fluid pt-lg-21 ">
                <div class="row gy-6 gy-lg-0">
                    <div class="col-lg-4">
                        <div class="widget">
                            <h3 class="h2 mb-3 text-white">Join the Community</h3>
                            <p class="lead mb-5">Let's make something great together. We are trusted by over 5000+ clients. Join them by using our services and grow your business.</p>
                            <a to="" class="btn btn-light">Join Us</a>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-2 col-xm-1">
                        <div class="widget">
                            <h4 class="widget-title text-white mb-3">Need Help?</h4>
                            <ul class="list-unstyled text-reset mb-0">
                            <li><a className="footer_link" to="">Support</a></li>
                            <li><a className="footer_link" to="">Get Started</a></li>
                            <li><a className="footer_link" to="">Terms of Use</a></li>
                            <li><a className="footer_link" to="">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-2 col-xs-1">
                        <div class="widget">
                            <h4 class="widget-title text-white mb-3">Learn More</h4>
                            <ul class="list-unstyled  mb-0">
                            <li><a className="footer_link" to="">About Us</a></li>
                            <li><a className="footer_link" to="">Our Story</a></li>
                            <li><a className="footer_link" to="">Projects</a></li>
                            <li><a className="footer_link" to="">Pricing</a></li>
                            <li><a className="footer_link" to="">Features</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-2">
                        <div class="widget">
                            <h4 class="widget-title text-white mb-3">Get in Touch</h4>
                            <address>Moonshine St. 14/05 Light City, London, United Kingdom</address>
                            <a className="footer_link" to="ailto:first.last@email.com">info@email.com</a><br/> +00 (123) 456 78 90
                        </div>
                    </div>
                </div>
                <hr className="my-14 my-md-16" style={{margin:"9% 0px 3rem"}}/>
                <div class="d-md-flex align-items-center justify-content-between">
                    <p class="mb-2 mb-lg-0">© 2021 Sandbox. All rights reserved.</p>
                    <nav class="nav social social-white text-md-end">
                        <a className="footer_link" to="" style={{marginRight:"10px",fontSize:"22px"}}><TwitterOutlined /></a>
                        <a className="footer_link" to="" style={{marginRight:"10px",fontSize:"22px"}}><FacebookFilled /></a>
                        <a className="footer_link" to="" style={{marginRight:"10px",fontSize:"22px"}}><DribbbleOutlined /></a>
                        <a className="footer_link" to="" style={{marginRight:"10px",fontSize:"22px"}}><InstagramOutlined /></a>
                        <a className="footer_link" to="" style={{fontSize:"22px"}}><YoutubeFilled /></a>
                    </nav>
                </div>
            </div>
         </footer>
  );
}

export default Footer;
