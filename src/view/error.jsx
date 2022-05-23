import { Link } from "react-router-dom";
import Slugs from "../utilities/slug";
function Error() {
    return (
        <section className='authincation h-100'>
            <div class="container h-100">
                <div class="row justify-content-center h-100 align-items-center">
                    <div class="col-md-8">
                        <div class="form-input-content text-center error-page">
                            <h1 class="error-text font-weight-bold">404</h1>
                            <h4><i class="fa fa-exclamation-triangle text-warning"></i> The page you were looking for is not found!</h4>
                            <p>You may have mistyped the address or the page may have moved.</p>
                            <div>
                                <Link class="btn" to={Slugs.home} style={{background:"purple",color:"white"}} href="./index.html">Back to Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Error;