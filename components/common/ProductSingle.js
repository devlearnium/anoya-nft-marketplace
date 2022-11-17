import OwnerList from "./OwnerList";
import Timer from './Timer';
import Link from 'next/link';




const ProductSingle = ({data,countdown=false,style}) => {
    
    return (
        <div className="nft-item" style={style}>
            <div className="nft-inner">
                
                <div className="nft-item-top d-flex justify-content-between align-items-center">
                    <div className="author-part">
                        <ul className="author-list d-flex">
                            {
                                data.owners.map((item) =>(
                                    <OwnerList data={item} key={item.id} />
                                ))
                            }
                            
                        </ul>
                    </div>
                    <div className="more-part">
                        <div className=" dropstart">
                            <a className=" dropdown-toggle" href="#" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false"
                                data-bs-offset="25,0">
                                <i className="icofont-flikr"></i>
                            </a>

                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#"><span>
                                    <i className="icofont-warning"></i>
                                </span> Report </a>
                                </li>
                                <li><a className="dropdown-item" href="#"><span><i
                                    className="icofont-reply"></i></span> Share</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="nft-item-bottom">
                    
                    <div className="nft-thumb">
                        <img src={`${data.image}`} alt="nft-img" />

                            
                            {countdown == true ? (<Timer data={data}/>): '' }
                            <span className="badge rounded-pill position-absolute"><i
                                className="icofont-heart"></i>
                                {`${data.wishlist}`}k</span>
                    </div>
                    <div className="nft-content">
                        <div className="content-title">
                            <h5>
                                <Link href="/itemdetails">
                                <a>{`${data.title}`}</a> 
                                </Link>
                            </h5>
                        </div>

                        <div
                            className="nft-status d-flex flex-wrap justify-content-between align-items-center ">
                            <span className="nft-view">
                                <Link href="/activity">
                                <a><i
                                className="icofont-eye-alt"></i> View
                                History</a> 
                                </Link>
                                
                                </span>
                            <div className="nft-stock"> {`${data.stock}`} in Stock</div>
                        </div>
                        <div className="price-like d-flex justify-content-between align-items-center">
                            <div className="nft-price d-flex align-items-center">
                                <span className="currency-img">
                                    <img src='assets/images/currency/currency-3.png'
                                        alt="currency img" />
                                </span>
                                <p>{`${data.price}`} ETH
                                </p>
                            </div>
                            <Link href="/itemdetails">
                            <a className="nft-bid">Place Bid</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductSingle;