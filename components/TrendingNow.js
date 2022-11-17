import Products from '../data/Product/Trending.json';
import ProductSingle from "./common/ProductSingle";

var productList = Products;

const TrendingNow = () => {
    return(
        <div>
            <section className="artwork-section">
            <div className="container">
                <div className="section-header">
                    <h3 className="header-title">Trending Now</h3>
                    <div className="header-content">
                        <ul className="filter-group d-flex flex-wrap align-items-center">
                            <li className="li collection-filter">
                                <div className="select-wrapper arrow-blue" data-icon="&#xef29;">
                                    <select className="form-select " aria-label="Collection select">
                                        <option>Recently Added</option>
                                        <option value="1">Newest</option>
                                        <option value="2">Trending</option>
                                        <option value="3">Most Popular</option>
                                    </select>
                                </div>
                            </li>
                            <li className="li day-filter">
                                <div className="select-wrapper arrow-blue" data-icon="&#xef74;">
                                    <select className="form-select" aria-label="Day select">
                                        <option>Category</option>
                                        <option value="1">Crypto Card</option>
                                        <option value="2">Sports</option>
                                        <option value="3">Crypto Art</option>
                                    </select>
                                </div>
                            </li>
                            <li className="li day-filter">
                                <div className="select-wrapper arrow-blue" data-icon="&#xef74;">
                                    <select className=" form-select" aria-label="Day select">
                                        <option>Last 7 Days</option>
                                        <option value="1">Last 15 Day</option>
                                        <option value="2">Last Month</option>
                                        <option value="3">All Time</option>
                                    </select>
                                </div>
                            </li>
                            <li className="li day-filter">
                                <div className="select-wrapper arrow-blue" data-icon="&#xee84;">
                                    <select className="form-select" aria-label="Day select">
                                        <option>Sell Type</option>
                                        <option value="1">Collectibles</option>
                                        <option value="2">Trending</option>
                                    </select>
                                </div>
                            </li>
                            <li className="li day-filter">
                                <div className="select-wrapper arrow-blue" data-icon="&#xe9d8;">
                                    <select className="form-select" aria-label="Day select">
                                        <option>Price Range</option>
                                        <option value="1">$0-$500</option>
                                        <option value="2">$500-$1000</option>
                                        <option value="3">$1000-infinite</option>
                                    </select>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="section-wrapper">
                    <div className="row justify-content-center g-4">
                        {
                            productList.map((item) => (
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-9" key={item.id}>
                                    <ProductSingle data={item} />
                                </div>
                            ))
                        }
                        
                        
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default TrendingNow;