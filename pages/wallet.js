import Link from 'next/link';

const Wallet = () => {
    return(
        <section className="wallet-section padding-top padding-bottom">
        <div className="container">
            <div className="wallet-inner">
                <div className="wallet-title text-center">
                    <h3 className="mb-3">Connect your crypto wallet</h3>
                    <p className="m-auto mb-5">Connect with one of available wallet providers or 
                    <Link href="/signup">
                    <a>create a
                            new wallet</a>
                    </Link>
                    </p>
                </div>
                <ul className="nav justify-content-center nav-pills wallet-tab-list" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <div className="nav-link wallet-tab active" id="wallet-tab-1" data-bs-toggle="pill"
                            data-bs-target="#pills-wallet-1" role="tab" aria-controls="pills-wallet-1"
                            aria-selected="true">
                            <img src="assets/images/wallet/metamask.svg" alt="Metamask" />
                            <span>Metamask</span>
                        </div>
                    </li>
                    <li className="nav-item" role="presentation">
                        <div className="nav-link wallet-tab" id="wallet-tab-2" data-bs-toggle="pill"
                            data-bs-target="#pills-wallet-2" role="tab" aria-controls="pills-wallet-2"
                            aria-selected="false">
                            <img src="assets/images/wallet/binance.svg" alt="Binance" /><span>Binance</span>

                        </div>
                    </li>
                    <li className="nav-item" role="presentation">
                        <div className="nav-link wallet-tab" id="wallet-tab-3" data-bs-toggle="pill"
                            data-bs-target="#pills-wallet-3" role="tab" aria-controls="pills-wallet-3"
                            aria-selected="false">
                            <img src="assets/images/wallet/formatic.svg" alt="Formatic" />
                            <span>Formatic</span>
                        </div>
                    </li>
                    <li className="nav-item" role="presentation">
                        <div className="nav-link wallet-tab" id="wallet-tab-4" data-bs-toggle="pill"
                            data-bs-target="#pills-wallet-4" role="tab" aria-controls="pills-wallet-4"
                            aria-selected="false">
                            <img src="assets/images/wallet/walletconnect.svg" alt="WalletConnect" />
                            <span>Walletconnect</span>
                        </div>
                    </li>
                </ul>

                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-wallet-1" role="tabpanel"
                        aria-labelledby="wallet-tab-1">
                        <div className="wallet-content">
                            <div className="wallet-img">
                                <img src="assets/images/wallet/metamask.svg" alt="Wallet Name" />
                            </div>
                            <div className="wallet-desc">
                                <h5>Connect Your MetaMask Wallet</h5>
                                <a href="#" className="default-btn small-btn move-right"><span>Sign In</span> </a>
                                <a href="#" target="_blank" rel="noopener noreferrer">Learn how to use Metamask
                                    wallet</a>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-wallet-2" role="tabpanel" aria-labelledby="wallet-tab-2">
                        <div className="wallet-content">
                            <div className="wallet-img">
                                <img src="assets/images/wallet/binance.svg" alt="Wallet Name" />
                            </div>
                            <div className="wallet-desc">
                                <h5>Connect Your Binance Wallet</h5>
                                <a href="#" className="default-btn small-btn move-right"> <span>Sign In</span></a>
                                <a href="#" target="_blank" rel="noopener noreferrer">Learn how to use Binance
                                    wallet</a>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-wallet-3" role="tabpanel" aria-labelledby="wallet-tab-3">
                        <div className="wallet-content">
                            <div className="wallet-img">
                                <img src="assets/images/wallet/formatic.svg" alt="Wallet Name" />
                            </div>
                            <div className="wallet-desc">
                                <h5>Connect Your Formatic Wallet</h5>
                                <a href="#" className="default-btn small-btn move-right"><span>Sign In</span></a>
                                <a href="#" target="_blank" rel="noopener noreferrer">Learn how to use Formatic
                                    wallet</a>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-wallet-4" role="tabpanel" aria-labelledby="wallet-tab-4">
                        <div className="wallet-content">
                            <div className="wallet-img">
                                <img src="assets/images/wallet/walletconnect.svg" alt="Wallet Name" />
                            </div>
                            <div className="wallet-desc">
                                <h5>Connect Your Walletconnect Wallet</h5>
                                <a href="#" className="default-btn small-btn move-right"> <span>Sign In</span></a>
                                <a href="#" target="_blank" rel="noopener noreferrer">Learn how to use WalletConnect
                                    wallet</a>
                            </div>
                        </div>
                    </div>
                </div>


                <p className="mt-5 mb-0 wallet-notice"><span className="me-1 theme-color"><i
                            className="icofont-bulb-alt"></i></span> You can use any type of crypto wallet if you wish. The
                    above wallets are shown only for demo purpose.</p>
            </div>
        </div>
    </section>
    )
}

export default Wallet;