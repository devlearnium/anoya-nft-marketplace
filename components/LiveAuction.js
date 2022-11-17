import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import Products from '../data/Product/Products.json'
import ProductSingle from "./common/ProductSingle";

var productList = Products.slice(0,5);

SwiperCore.use([Navigation]);


const LiveAuction = () => {
    const swiperRef = React.useRef(null);

    return(
        <div>
            <section className="auction-section padding-bottom">
            <div className="container">
                <div className="section-header">
                    <h3 className="header-title">Live Auctions</h3>
                    <div className="header-content">
                        <ul className="arrows d-flex flex-wrap align-items-center">
                            <li className="li arrow-left auction-prev" onClick={() => swiperRef.current.swiper.slidePrev()}> <i className="icofont-rounded-left"></i> </li>
                            <li className="li arrow-right auction-next"  onClick={() => swiperRef.current.swiper.slideNext()}> <i className="icofont-rounded-right"></i></li>
                        </ul>
                    </div>
                </div>
                <div className="section-wrapper">
                    <div className="auction-holder">
                    <Swiper
                    spaceBetween={20}
                    slidesPerView={4}
                   
                    ref={swiperRef}
                    >
                    {
                        productList.map((item) => (
                            <SwiperSlide key={item.id}>
                            <div className="swiper-slide">

                                <ProductSingle key={item.id} data={item} countdown={true} />
                            </div>
                            </SwiperSlide>
                        ))
                    }
                    
                    </Swiper>
                        
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default LiveAuction