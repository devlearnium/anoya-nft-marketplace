import PageHeader from '../components/PageHaeder';



const PageHeaderText =
{
    "linkText":"Home",
    "heading":"Maintainance Mode Page"
};

const Maintainance = () => {


    return (
        <div>
        <PageHeader text={PageHeaderText} />
        <section className="error-section padding-top padding-bottom">
            <div className="container">
                <div className="section-wrapper">
                    <div className="error-item">
                        <div className="error-thumb">
                            <img src="assets/images/404/maintainance.png" alt="404" />
                        </div>
                        <div className="error-content">
                            <h3>This Page is Under Maintainance</h3>
                            <p>We are Really Sorry But We wll be availabe very soon </p>
                            <a className="default-btn move-right"><span>Learn More</span> </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        </div>
    )
}

export default Maintainance;