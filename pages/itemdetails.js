import Link from "next/link";
import TimerTwo from "../components/common/TimerTwo";
import PageHeader from '../components/PageHaeder';

const PageHeaderText =
{
    "linkText":"Home",
    "heading":"Item Details"
};

const ItemInfo =
{
    "id": 1,
        "image": "assets/images/nft-item/item-details.gif",
        "description": "This is the second batch of Cybertino Genesis NFTs for early adopters and is 1 of 5. This Genesis NFT will be interactive: hold and wait for future exclusive benefits and early access to new drops!",
        "wishlist": "1.3",
        "expiredate": "2022-06-26",
        "title": "Dodo je Aliener Walk",
        "stock": "12",
        "price": "2.29",
        "size": "1000 x 1000 px.VIDEO (19.85MB)",
        "createdBy": "@alex joe",
        "listedBy": "@alex joe",
        "owners": [
            {
                "id":"1",
                "name":"Alex joe",
                "contactAddress":"0x1dDB2C0897daF134545641545462E71fdD2dbDC0eB3a9Ec",
                "token":"0005515456416",
                "blockchain":"Ethereum (ETH)",
                "image":"assets/images/seller/collector-3.gif",
                "verified": true,
                "prfileLink":"/"
            },{
                "id":"2",
                "name":"Alex joe",
                "contactAddress":"0x1dDB2C0897daF134545641545462E71fdD2dbDC0eB3a9Ec",
                "token":"0005515456416",
                "blockchain":"Ethereum (ETH)",
                "image":"assets/images/seller/collector-3.gif",
                "verified": true,
                "prfileLink":"/"
            }
        ],
        "history": [
            {

            }
        ]
};

const ItemDetails = () => {
    return (
        <div>
        <PageHeader text={PageHeaderText} />
        <div className="item-details-section padding-top padding-bottom">
        <div className="container">
            <div className="item-details-wrapper">
                <div className="row g-5">
                    <div className="col-lg-6">
                        <div className="item-desc-part">
                            <div className="item-desc-inner">
                                <div className="item-desc-thumb">
                                    <img src={`${ItemInfo.image}`} alt="item-img" />
                                </div>
                                <div className="item-desc-content">
                                    <nav>
                                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                            <button className="nav-link active" id="nav-details-tab" data-bs-toggle="tab"
                                                data-bs-target="#nav-details" type="button" role="tab"
                                                aria-controls="nav-details" aria-selected="true">Details</button>
                                            <button className="nav-link" id="nav-bids-tab" data-bs-toggle="tab"
                                                data-bs-target="#nav-bids" type="button" role="tab"
                                                aria-controls="nav-bids" aria-selected="false">Bids</button>
                                            <button className="nav-link" id="nav-history-tab" data-bs-toggle="tab"
                                                data-bs-target="#nav-history" type="button" role="tab"
                                                aria-controls="nav-history" aria-selected="false">History</button>
                                        </div>
                                    </nav>
                                    <div className="tab-content" id="nav-tabContent">
                                        <div className="details-tab tab-pane fade show active" id="nav-details"
                                            role="tabpanel" aria-labelledby="nav-details-tab">

                                            <p>{`${ItemInfo.description}`}</p>
                                            <div className="author-profile d-flex flex-wrap align-items-center gap-15">
                                                <div className="author-p-thumb">
                                                <Link href="/author">
                                                    <a><img
                                                            src="assets/images/seller/collector-3.gif"
                                                            alt="author-img " /></a>
                                                </Link>
                                                </div>
                                                <div className="author-p-info">
                                                    <p className="mb-0">Owner</p>
                                                    <h6>
                                                        <Link href="/author"><a>{`${ItemInfo.owners[0].name}`}</a></Link>
                                                        
                                                    </h6>
                                                </div>
                                            </div>
                                            <ul className="other-info-list">
                                                <li className="item-other-info">
                                                    <div className="item-info-title">
                                                        <h6>Contact Address</h6>
                                                    </div>
                                                    <div className="item-info-details">
                                                        <div id="cryptoCode" className="crypto-page">
                                                            <input id="cryptoLink"
                                                                value={`${ItemInfo.owners[0].contactAddress}`}
                                                                readOnly />
                                                            <div id="cryptoCopy" data-bs-toggle="tooltip"
                                                                data-bs-placement="top" title="Copy Address">
                                                                <span className="copy-icon">
                                                                    <i className="icofont-ui-copy" aria-hidden="true"
                                                                        data-copytarget="#cryptoLink"></i>
                                                                </span>

                                                            </div>
                                                        </div>
                                                    </div>

                                                </li>
                                                <li className="item-other-info">
                                                    <div className="item-info-title">
                                                        <h6>Token ID</h6>
                                                    </div>
                                                    <div className="item-info-details">
                                                        <p>{`${ItemInfo.owners[0].token}`}</p>
                                                    </div>

                                                </li>
                                                <li className="item-other-info">
                                                    <div className="item-info-title">
                                                        <h6>Blockchain</h6>
                                                    </div>
                                                    <div className="item-info-details">
                                                        <p>{`${ItemInfo.owners[0].blockchain}`}</p>
                                                    </div>
                                                </li>

                                                <li className="item-other-info">
                                                    <div className="item-info-title">
                                                        <h6>Size</h6>
                                                    </div>
                                                    <div className="item-info-details">
                                                        <p>{`${ItemInfo.size}`}</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bids-tab tab-pane fade" id="nav-bids" role="tabpanel"
                                            aria-labelledby="nav-bids-tab">
                                            <span><i className="icofont-law-order"></i></span>
                                            <p>No active bids yet. Be the first to make a bid!</p>
                                        </div>
                                        <div className="history-tab tab-pane fade" id="nav-history" role="tabpanel"
                                            aria-labelledby="nav-history-tab">
                                            <ul className="item-histo-list">
                                                <li className="histo-item">
                                                    <p>Created by <Link href="/author"><a>{`${ItemInfo.createdBy}`}</a></Link></p>
                                                    <time>2022-08-04 23:05:07</time>
                                                </li>
                                                <li className="histo-item">
                                                    <p>Listed by <Link href="/author"><a >{`${ItemInfo.listedBy}`}</a></Link></p>
                                                    <time>2022-08-04 20:05:07</time>
                                                </li>
                                                <li className="histo-item">
                                                    <p>Owned by <Link href="/author"><a>{`${ItemInfo.owners[0].name}`}</a></Link></p>
                                                    <time>2022-08-04 22:05:07</time>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="item-buy-part">
                            <div className="nft-item-title">
                                <h3>#003 da Silly Cat wid baLoon NFT: size 1/50</h3>
                                <div className="share-btn">
                                    <div className=" dropstart">
                                        <a className=" dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                            aria-expanded="false" data-bs-offset="25,0">
                                            <i className="icofont-share-alt"></i>
                                        </a>

                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#"><span>
                                                        <i className="icofont-twitter"></i>
                                                    </span> Twitter </a>
                                            </li>
                                            <li><a className="dropdown-item" href="#"><span><i
                                                            className="icofont-telegram"></i></span> Telegram</a></li>
                                            <li><a className="dropdown-item" href="#"><span><i
                                                            className="icofont-envelope"></i></span> Email</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="item-details-countdown">
                                <h4>Ends In:</h4>
                                <TimerTwo data={ItemInfo}/>
                            </div>
                            <div className="item-price">
                                <h4>Price</h4>
                                <p><span><i className="icofont-coins"></i> {`${ItemInfo.price}`} ETH
                                    </span>($ 6,227.15)</p>
                            </div>
                            <div className="buying-btns d-flex flex-wrap">
                                <Link href="/wallet">
                                <a className="default-btn move-right"><span>Buy Now</span> </a>
                                </Link>
                                <Link href="/wallet">
                                <a className="default-btn style-2 move-right"><span>Place a Bid</span>
                                </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}

export default ItemDetails;