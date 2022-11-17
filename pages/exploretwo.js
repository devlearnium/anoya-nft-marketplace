import { useState } from "react";
import PageHeader from '../components/PageHaeder';
import Products from '../data/Product/Products.json';
import ProductSingle from "../components/common/ProductSingle";

var productList = Products.slice(0,12);

const PageHeaderText =
{
    "linkText":"Home",
    "heading":"Explore V2"
};

const ExploreTwo = () => {
    const [showProducts,setshowProducts] = useState(productList);

    const getProductsByCategory = (category) => {
        if (category != 'All') {
            var productListFiltered = Products.filter((item) => item.category == category);
            setshowProducts(productListFiltered);
        }else {
            setshowProducts(productList);

        }
        
    }

    return (
        <div>
        <PageHeader text={PageHeaderText} />
        <section className="explore-section explore-page padding-top padding-bottom">
        <div className="container">

            <div className="section-wrapper">
                <div className="explore-category mb-5">
                    <div className="row g-2 justify-content-center">
                        <div className="col-xl-2 col-md-3 col-6 ">
                            <div className="excat-item active" data-filter=""><a onClick={() => getProductsByCategory("All")}><i
                                        className="icofont-cubes"></i>
                                    All</a></div>
                        </div>
                        <div className="col-xl-2 col-md-3 col-6 ">
                            <div className="excat-item" data-filter=".art"><a onClick={() => getProductsByCategory("Art")}><i
                                        className="icofont-drawing-tablet"></i> Art</a></div>
                        </div>
                        <div className="col-xl-2 col-md-3 col-6 ">
                            <div className="excat-item" data-filter=".virtual"><a onClick={() => getProductsByCategory("Virtual World")}><i
                                        className="icofont-diving-goggle"></i> Virtual World</a>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-3 col-6 ">
                            <div className="excat-item" data-filter=".trade"><a onClick={() => getProductsByCategory("Cards")} ><i
                                        className="icofont-penalty-card"></i>
                                    Cards</a>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-3 col-6 ">
                            <div className="excat-item" data-filter=".collect"><a onClick={() => getProductsByCategory("Collectibles")}><i
                                        className="icofont-cat-face"></i>
                                    Collectibles</a></div>
                        </div>
                        <div className="col-xl-2 col-md-3 col-6 ">
                            <div className="excat-item" data-filter=".sport"><a onClick={() => getProductsByCategory("Sports")}><i
                                        className="icofont-runner-alt-1"></i>
                                    Sports</a></div>
                        </div>
                    </div>
                </div>
                <div className="explore-wrapper g-4 explore-filter">
                    {
                        showProducts.map((item) => (
                            <ProductSingle data={item}  style={{ marginRight: '15px',marginBottom: '15px' }} key={item.id}/>
                        ))
                    }
                   
                    

                </div>
                
            </div>
        </div>
    </section>
        </div>
    )
}

export default ExploreTwo;