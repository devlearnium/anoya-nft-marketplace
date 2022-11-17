import PageHeader from '../components/PageHaeder';

const PageHeaderText =
{
    "linkText":"Home",
    "heading":"Create NFT"
};

const CreateNft = () => {
    return (
        <div>
        <PageHeader text={PageHeaderText} />
        <section className="create-nft-section padding-bottom padding-top">
        <div className="container">
            <div className="section-wrapper">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="create-nft py-5 px-4">
                            <div className="create-nft-form">
                                <div className="upload-item mb-30">
                                    <p>PNG,JPG,JPEG,SVG,WEBP,Mp3 & Mp4
                                        (Max-150mb)</p>
                                    <div className="custom-upload">
                                        <div className="file-btn"><i className="icofont-upload-alt"></i>
                                            Upload a file</div>
                                        <input type="file" />
                                    </div>
                                </div>
                                <div className="form-floating item-name-field mb-3">
                                    <input type="text" className="form-control" id="itemNameInput" placeholder="Item Name" />
                                    <label>Item
                                        Name</label>
                                </div>
                                
                                <div className="form-floating item-desc-field mb-30">
                                    <textarea className="form-control" placeholder="Item Description"
                                        id="itemDesc"></textarea>
                                    <label>Item
                                        Description</label>
                                </div>
                                
                                <div className="item-category-field mb-30">
                                    <h4>Select Item Catergory</h4>
                                    <ul className="item-cat-list d-flex flex-wrap">
                                        <li className="item-cat-btn active">
                                            <span><i className="icofont-vector-path"></i></span>
                                            Art
                                        </li>
                                        <li className="item-cat-btn">
                                            <span><i className="icofont-penalty-card"></i></span>
                                            Cards
                                        </li>
                                        <li className="item-cat-btn">
                                            <span><i className="icofont-ui-game"></i></span>
                                            Gaming
                                        </li>
                                        <li className="item-cat-btn">
                                            <span><i className="icofont-music-disk"></i></span>
                                            Music
                                        </li>

                                        <li className="item-cat-btn">
                                            <span><i className="icofont-twitter"></i></span>
                                            Tweets
                                        </li>
                                        <li className="item-cat-btn">
                                            <span><i className="icofont-bill"></i></span>
                                            Rare Item
                                        </li>
                                        <li className="item-cat-btn">
                                            <span>
                                                <i className="icofont-box"></i>
                                            </span> Collectibles
                                        </li>
                                        <li className="item-cat-btn">
                                            <span><i className="icofont-gift"></i></span>
                                            NFT
                                            Gifts
                                        </li>
                                    </ul>
                                </div>
                                
                                <div className="item-price-field mb-3">
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <select className="form-select" id="selectCrypto"
                                                    aria-label="Floating label select">
                                                    <option>
                                                        Ethereum
                                                    </option>
                                                    <option value="1">
                                                        BitCoin
                                                    </option>
                                                    <option value="2">Dollar
                                                    </option>
                                                    <option value="3">Pound
                                                    </option>
                                                </select>
                                                <label>Select
                                                    Currency</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="itemPriceInput"
                                                    placeholder="Item Price" />
                                                <label>Item
                                                    Price</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                                <div className="item-price-field mb-5">
                                    <div className="row g-3 justify-content-center">
                                        <div className="col-md-6 col-lg-4">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="royalityInput"
                                                    placeholder="Royalities" />
                                                <label>Royalities</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="sizeInput"
                                                    placeholder="Size" />
                                                <label>Size
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="itemNumbersInput"
                                                    placeholder="Number of Copies" />
                                                <label>Number
                                                    of Copies</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                                <div className="submit-btn-field text-center">
                                    <button>Create
                                        Item</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
        </div>
    )
}

export default CreateNft;