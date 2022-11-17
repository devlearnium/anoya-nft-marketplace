import PageHeader from '../components/PageHaeder';
import Signin from '../components/Signin';



const PageHeaderText =
{
    "linkText":"Home",
    "heading":"Sign In Page"
};

const Policy = () => {


    return (
        <div>
        <PageHeader text={PageHeaderText} />
        <div className="login-section padding-top padding-bottom">
            <div className=" container">
                <div className="row g-5 align-items-center flex-md-row-reverse">
                    <div className="col-lg-5">
                        <Signin />
                    </div>
                    <div className="col-lg-7">
                        <div className="account-img">
                            <img src="assets/images/account/sign-in.png" alt="shape-image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </div>
    )
}

export default Policy;