import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
    return ( <
        div >
        <
        Head >
        <
        title > ANOYA - NFT Marketplace < />title> <meta name="description"
        content = "Anftiz is a full-fledged NFT or Digital assets marketplace HTML template. It is suitable for selling NFTs, or non-fungible tokens, Digital Arts, Digital Music & All types of Digital Assets. You can create, sell & collect NFT’s or digital assets through this website." / >
        <
        link rel = "icon"
        type = "image/png"
        href = "assets/images/favicon.png" / >
        <
        />Head> <
        Header > < />Header> <Component {...pageProps} / > <
        Footer > < />Footer> < / > div >

    )
}

export default MyApp < /></ > < /></ > < />);
}