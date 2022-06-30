import { TwitterOutlined,FacebookFilled,DribbbleOutlined,InstagramOutlined,YoutubeFilled  } from '@ant-design/icons';
import { Link } from "react-router-dom";
import Slugs from "../../utilities/slug";
function Footer(props) {
  return (
      <footer>
            <div class="container-fluid pt-lg-21 ">
                <div class="row gy-6 gy-lg-0">
                    <div class="col-lg-4">
                        <div class="widget">
                            <h3 class="h2 mb-3 text-white">Join the Community</h3>
                            <p class="lead mb-5">Let's make something great together. We are trusted by over 5000+ clients. Join them by using our services and grow your business.</p>
                            <Link to="" class="btn btn-light">Join Us</Link>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-2 col-xm-1">
                        <div class="widget">
                            <h4 class="widget-title text-white mb-3">Need Help?</h4>
                            <ul class="list-unstyled text-reset mb-0">
                                <li><Link className="footer_link" to="">Support</Link></li>
                                <li><Link className="footer_link" to="">Get Started</Link></li>
                                <li><Link className="footer_link" to="">Terms of Use</Link></li>
                                <li><Link className="footer_link" to="">Privacy Policy</Link></li>
                                <li><Link className="footer_link" to="">Learn More</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-2 col-xs-1">
                        <div class="widget">
                            <h4 class="widget-title text-white mb-3">Learn More</h4>
                            <ul class="list-unstyled  mb-0">
                            <li><Link className="footer_link" onClick={props.loader} to={Slugs.about}>About Us</Link></li>
                            <li><Link className="footer_link"  onClick={props.loader} to={Slugs.project}>Projects</Link></li>
                            <li><Link className="footer_link"  onClick={props.loader} to={Slugs.gallery}>Gallery</Link></li>
                            <li><Link className="footer_link"  onClick={props.loader} to={Slugs.contact}>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-2">
                        <div class="widget">
                            <h4 class="widget-title text-white mb-3">Get in Touch</h4>
                            <address>47 Kawaji Street. Opposite Buhari Shopping Complex. Hadeja Road, Kano State</address>
                            <Link className="footer_link" to="ailto:first.last@email.com">info@email.com</Link><br/> +234 7080830433
                        </div>
                    </div>
                </div>
                <hr className="my-14 my-md-16" style={{margin:"9% 0px 3rem"}}/>
                <div class="d-md-flex align-items-center justify-content-between">
                    <p class="mb-2 mb-lg-0">© 2021 Sandbox. All rights reserved.</p>
                    <nav class="nav social social-white text-md-end">
                        <Link className="footer_link" to="" style={{marginRight:"10px",fontSize:"22px"}}><TwitterOutlined /></Link>
                        <Link className="footer_link" to="" style={{marginRight:"10px",fontSize:"22px"}}><FacebookFilled /></Link>
                        <Link className="footer_link" to="" style={{marginRight:"10px",fontSize:"22px"}}><DribbbleOutlined /></Link>
                        <Link className="footer_link" to="" style={{marginRight:"10px",fontSize:"22px"}}><InstagramOutlined /></Link>
                        <Link className="footer_link" to="" style={{fontSize:"22px"}}><YoutubeFilled /></Link>
                    </nav>
                </div>
            </div>
         </footer>
  );
}

export default Footer;
