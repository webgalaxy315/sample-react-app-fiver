import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Slide, Fade, Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system"

import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import BgHeroImg0 from '../assets/image/hero/bg-hero0.png';
import BgHeroImg1 from '../assets/image/hero/bg-hero1.png';
import BgHeroImg2 from '../assets/image/hero/bg-hero2.png';
import BgHeroImg3 from '../assets/image/hero/bg-hero3.png';
import BgHeroImg4 from '../assets/image/hero/bg-hero4.png';

import facebook from '../assets/image/trusted/facebook.png';
import google from '../assets/image/trusted/google.png';
import netelix from '../assets/image/trusted/netelix.png';
import pg from '../assets/image/trusted/pg.png';
import paypal from '../assets/image/trusted/paypal.png';

import subcategory1 from '../assets/image/subcategory/1.png'
import subcategory2 from '../assets/image/subcategory/2.png'
import subcategory3 from '../assets/image/subcategory/3.png'
import subcategory4 from '../assets/image/subcategory/4.png'
import subcategory5 from '../assets/image/subcategory/5.png'
import subcategory6 from '../assets/image/subcategory/6.png'
import subcategory7 from '../assets/image/subcategory/7.png'
import subcategory8 from '../assets/image/subcategory/8.png'
import subcategory9 from '../assets/image/subcategory/9.png'
import subcategory10 from '../assets/image/subcategory/10.png'

import sellingPicture from '../assets/image/selling/selling.png'

import GraphicsDesign from '../assets/image/maincategory/GraphicsDesign.png'
import DigitalMarketing from '../assets/image/maincategory/DigitalMarketing.png'
import WritingTranslation from '../assets/image/maincategory/WritingTranslation.png'
import VideoAnimation from '../assets/image/maincategory/VideoAnimation.png'
import MusicAudio from '../assets/image/maincategory/MusicAudio.png'
import ProgrammingTech from '../assets/image/maincategory/ProgrammingTech.png'
import Business from '../assets/image/maincategory/Business.png'
import Lifestyle from '../assets/image/maincategory/Lifestyle.png'
import Data from '../assets/image/maincategory/Data.png'

import { BusinessLogo } from "./common/BusinessLogo";
import banner from '../assets/image/fibbanner/banner.png';

import testimonial1 from '../assets/image/testimonials/lavender.png'
import testimonial2 from '../assets/image/testimonials/rooted.png'
import testimonial3 from '../assets/image/testimonials/haerfest.png'
import testimonial4 from '../assets/image/testimonials/naadam.png'
import testimonialLogo1 from '../assets/image/testimonials/lavender-logo.png'
import testimonialLogo2 from '../assets/image/testimonials/rooted-logo.png'
import testimonialLogo3 from '../assets/image/testimonials/haerfest-logo.png'
import testimonialLogo4 from '../assets/image/testimonials/naadam-logo.png'

import { LogoMaker } from "./common/LogoMaker";
import logomakermobile from '../assets/image/logomaker/mobile.png'
import logomakerdesktop from '../assets/image/logomaker/desktop.png'

import BookDesign from '../assets/image/madeon/BookDesign.png';
import PortraitsCaricatures from '../assets/image/madeon/PortraitsCaricatures.png';
import PackagingDesign from '../assets/image/madeon/PackagingDesign.png';
import LogoDesign from '../assets/image/madeon/LogoDesign.png';
import SocialMediaDesign from '../assets/image/madeon/SocialMediaDesign.png';
import AnimatedGIFs from '../assets/image/madeon/AnimatedGIFs.png';
import FlyerDesign from '../assets/image/madeon/FlyerDesign.png';
import Illustration from '../assets/image/madeon/Illustration.png';
import LogoDesign1 from '../assets/image/madeon/LogoDesign1.png';
import ProductPhotography from '../assets/image/madeon/ProductPhotography.png';
import WebMobileDesign from '../assets/image/madeon/WebMobileDesign.png';
import UBookDesign from '../assets/image/madeon/user/BookDesign.png';
import UPortraitsCaricatures from '../assets/image/madeon/user/PortraitsCaricatures.png';
import UPackagingDesign from '../assets/image/madeon/user/PackagingDesign.png';
import ULogoDesign from '../assets/image/madeon/user/LogoDesign.png';
import USocialMediaDesign from '../assets/image/madeon/user/SocialMediaDesign.png';
import UAnimatedGIFs from '../assets/image/madeon/user/AnimatedGIFs.png';
import UFlyerDesign from '../assets/image/madeon/user/FlyerDesign.png';
import UIllustration from '../assets/image/madeon/user/Illustration.png';
import ULogoDesign1 from '../assets/image/madeon/user/LogoDesign1.png';
import UProductPhotography from '../assets/image/madeon/user/ProductPhotography.png';
import UWebMobileDesign from '../assets/image/madeon/user/WebMobileDesign.png';

import business from '../assets/image/fiverrguide/business.png';
import createlogo from '../assets/image/fiverrguide/createlogo.png';
import marketing from '../assets/image/fiverrguide/marketing.png';
import guidsignup from '../assets/image/fiverrguide/guidsignup.png';

const HeroInfoList = [
    { color: '#023a15', img: BgHeroImg0 },
    { color: '#b64762', img: BgHeroImg1 },
    { color: '#540e1f', img: BgHeroImg2 },
    { color: '#023a15', img: BgHeroImg3 },
    { color: '#7d1a00', img: BgHeroImg4 },
];

const Herofooterinfo = [
    { title: 'Website Design', link: '/categories/graphics-design/web-plus-mobile-design?source=hplo_search_tag&amp;pos=1&amp;name=web-plus-mobile-design' },
    { title: 'WordPress', link: '/categories/programming-tech/wordpress-services?source=hplo_search_tag&amp;pos=2&amp;name=wordpress-services' },
    { title: 'Logo Design', link: '/categories/graphics-design/creative-logo-design?source=hplo_search_tag&amp;pos=3&amp;name=creative-logo-design' },
    { title: 'NFT Art', link: '/search/gigs?source=hplo_search_tag&amp;pos=4&amp;query=NFT%20Art' },
]

const subcategoryimg = {
    first: [
        { img: subcategory1, header: 'Build your brand', title: 'Logo Design', link: '/categories/graphics-design/creative-logo-design?source=hplo_subcat_first_step&amp;pos=1' },
        { img: subcategory2, header: 'Customize your site', title: 'WordPress', link: '/categories/programming-tech/wordpress-services?source=hplo_subcat_first_step&amp;pos=2" class="subcategory' },
        { img: subcategory3, header: 'Share your message', title: 'Voice Over', link: '/categories/music-audio/voice-overs?source=hplo_subcat_first_step&amp;pos=3' },
        { img: subcategory4, header: 'Engage your audience', title: 'Video Explainer', link: '/categories/video-animation/animated-explainer-videos?source=hplo_subcat_first_step&amp;pos=4' },
        { img: subcategory5, header: 'Reach more customers', title: 'Social Media', link: '/categories/online-marketing/social-marketing?source=hplo_subcat_first_step&amp;pos=5' },
    ],

    two: [
        { img: subcategory6, header: 'Unlock growth online', title: 'SEO', link: '/categories/online-marketing/seo-services?source=hplo_subcat_first_step&amp;pos=6' },
        { img: subcategory7, header: 'Color your dreams', title: 'Illustration', link: '/categories/graphics-design/digital-illustration?source=hplo_subcat_first_step&amp;pos=7' },
        { img: subcategory8, header: 'Go global', title: 'Translation', link: '/categories/writing-translation/quality-translation-services?source=hplo_subcat_first_step&amp;pos=8' },
        { img: subcategory9, header: 'Learn your business', title: 'Data Entry', link: 'categories/data/data-entry?source=hplo_subcat_first_step&amp;pos=9' },
        { img: subcategory10, header: 'Showcase your story', title: 'Book Covers', link: '/categories/graphics-design/book-design/cover?source=hplo_subcat_first_step&amp;pos=10' },
    ]
}

const trustedinfo = [{ img: facebook }, { img: google }, { img: netelix }, { img: pg }, { img: paypal },];

const sellingtextInfo = {
    header: 'A whole world of freelance talent at your fingertips',
    child: [
        {
            header: 'The best for every budget',
            content: 'Find high-quality services at every price point. No hourly rates, just project-based pricing.',
            icon: <CheckCircleOutlineIcon />,
        }, {
            header: 'Quality work done quickly',
            content: 'Find the right freelancer to begin working on your project within minutes.',
            icon: <CheckCircleOutlineIcon />,
        }, {
            header: 'Protected payments, every time',
            content: 'Always know what you`ll pay upfront.Your payment isn`t released until you approve the work.',
            icon: <CheckCircleOutlineIcon />,
        }, {
            header: '24/7 support',
            content: 'Questions? Our round-the-clock support team is available to help anytime, anywhere.',
            icon: <CheckCircleOutlineIcon />,
        }
    ]
}

const mainCategoriesInfo = [
    { title: 'Graphics & Design', img: GraphicsDesign, link: '' },
    { title: 'Digital Marketing', img: DigitalMarketing, link: '' },
    { title: 'Writing & Translation', img: WritingTranslation, link: '' },
    { title: 'Video & Animation', img: VideoAnimation, link: '' },
    { title: 'Music & Audio', img: MusicAudio, link: '' },
    { title: 'Programming & Tech', img: ProgrammingTech, link: '' },
    { title: 'Business', img: Business, link: '' },
    { title: 'Lifestyle', img: Lifestyle, link: '' },
    { title: 'Data', img: Data, link: '' },
];

const businessInfo = {
    logo: <BusinessLogo />,
    header: 'A business solution designed for',
    header2: 'Upgrade to a curated experience packed with tools and benefits, dedicated to businesses',
    child: [
        {
            header: 'Connect to freelancers with proven business experience',
            icon: <CheckCircleOutlineIcon />,
        }, {
            header: 'Get matched with the perfect talent by a customer success manager',
            icon: <CheckCircleOutlineIcon />,
        }, {
            header: 'Manage teamwork and boost productivity with one powerful workspace',
            icon: <CheckCircleOutlineIcon />,
        },
    ]
}

const testimonialInfo = [
    {
        img: testimonial1,
        logo: testimonialLogo1,
        header: 'Brighid Gannon (DNP, PMHNP-BC), Co-Founder',
        content: '"We used Fiverr for SEO, our logo, website, copy, animated videos — literally everything. It was like working with a human right next to you versus being across the world."'
    }, {
        img: testimonial2,
        logo: testimonialLogo2,
        header: 'Kay Kim, Co-Founder',
        content: '"It`s extremely exciting that Fiverr has freelancers from all over the world—it broadens the talent pool.One of the best things about Fiverr is that while we`re sleeping, someone`s working."'
    }, {
        img: testimonial3,
        logo: testimonialLogo3,
        header: 'Tim and Dan Joo, Co-Founders',
        content: '"When you want to create a business bigger than yourself, you need a lot of help. That`s what Fiverr does."'
    }, {
        img: testimonial4,
        logo: testimonialLogo4,
        header: 'Brighid Gannon (DNP, PMHNP-BC), Co-Founder',
        content: '"We`ve used Fiverr for Shopify web development, graphic design, and backend web development. Working with Fiverr makes my job a little easier every day."'
    }
]

const madeonInfo = {
    first: [
        {
            img: BookDesign,
            userimg: UBookDesign,
            header: 'Book Design',
            content: 'by annapietrangeli',
            imglink: '/annapietrangeli/design-your-printable-or-electronic-book?source=hplo_made_on_fiverr&amp;pos=1',
            contentlink: '/annapietrangeli?source=hplo_made_on_fiverr&amp;pos=1',
        }, {
            img: PortraitsCaricatures,
            userimg: UPortraitsCaricatures,
            header: 'Portraits & Caricatures',
            content: 'by noneyn',
            imglink: '/annapietrangeli/design-your-printable-or-electronic-book?source=hplo_made_on_fiverr&amp;pos=2',
            contentlink: '/annapietrangeli?source=hplo_made_on_fiverr&amp;pos=2',
        }, {
            img: PackagingDesign,
            userimg: UPackagingDesign,
            header: 'Packaging Design',
            content: 'by mijalzagier',
            imglink: '/annapietrangeli/design-your-printable-or-electronic-book?source=hplo_made_on_fiverr&amp;pos=3',
            contentlink: '/annapietrangeli?source=hplo_made_on_fiverr&amp;pos=3',
        }, {
            img: LogoDesign,
            userimg: ULogoDesign,
            header: 'Logo Design',
            content: 'by eveeelin',
            imglink: '/annapietrangeli/design-your-printable-or-electronic-book?source=hplo_made_on_fiverr&amp;pos=4',
            contentlink: '/annapietrangeli?source=hplo_made_on_fiverr&amp;pos=4',
        }
    ],
    two: [
        {
            img: SocialMediaDesign,
            userimg: USocialMediaDesign,
            header: 'Social Media Design',
            content: 'by fernandobengua',
            imglink: '/annapietrangeli/design-your-printable-or-electronic-book?source=hplo_made_on_fiverr&amp;pos=5',
            contentlink: '/annapietrangeli?source=hplo_made_on_fiverr&amp;pos=5',
        }, {
            img: AnimatedGIFs,
            userimg: UAnimatedGIFs,
            header: 'Animated GIFs',
            content: 'by lamonastudio',
            imglink: '/annapietrangeli/design-your-printable-or-electronic-book?source=hplo_made_on_fiverr&amp;pos=6',
            contentlink: '/annapietrangeli?source=hplo_made_on_fiverr&amp;pos=6',
        }, {
            img: FlyerDesign,
            userimg: UFlyerDesign,
            header: 'Flyer Design',
            content: 'by spickex',
            imglink: '/annapietrangeli/design-your-printable-or-electronic-book?source=hplo_made_on_fiverr&amp;pos=7',
            contentlink: '/annapietrangeli?source=hplo_made_on_fiverr&amp;pos=7',
        }, {
            img: Illustration,
            userimg: UIllustration,
            header: 'Illustration',
            content: 'by christophbrandl',
            imglink: '/annapietrangeli/design-your-printable-or-electronic-book?source=hplo_made_on_fiverr&amp;pos=8',
            contentlink: '/annapietrangeli?source=hplo_made_on_fiverr&amp;pos=8',
        }
    ],
    three: [
        {
            img: Illustration,
            userimg: UIllustration,
            header: 'Illustration',
            content: 'by christophbrandl',
            imglink: '/annapietrangeli/design-your-printable-or-electronic-book?source=hplo_made_on_fiverr&amp;pos=9',
            contentlink: '/annapietrangeli?source=hplo_made_on_fiverr&amp;pos=9',
        }, {
            img: LogoDesign1,
            userimg: ULogoDesign1,
            header: 'Logo Design',
            content: 'by bruno_malagrino',
            imglink: '/annapietrangeli/design-your-printable-or-electronic-book?source=hplo_made_on_fiverr&amp;pos=10',
            contentlink: '/annapietrangeli?source=hplo_made_on_fiverr&amp;pos=10',
        }, {
            img: ProductPhotography,
            userimg: UProductPhotography,
            header: 'Product Photography',
            content: 'by passionshake',
            imglink: '/annapietrangeli/design-your-printable-or-electronic-book?source=hplo_made_on_fiverr&amp;pos=11',
            contentlink: '/annapietrangeli?source=hplo_made_on_fiverr&amp;pos=11',
        }, {
            img: WebMobileDesign,
            userimg: UWebMobileDesign,
            header: 'Web & Mobile Design',
            content: 'by skydesigner',
            imglink: '/annapietrangeli/design-your-printable-or-electronic-book?source=hplo_made_on_fiverr&amp;pos=12',
            contentlink: '/annapietrangeli?source=hplo_made_on_fiverr&amp;pos=12',
        }
    ]
}

const GuideInfo = [
    {
        img: business,
        header: 'Start an online business and work from home',
        content: 'A complete guide to starting a small business online',
        link: '/resources/guides/business/start-online-business-and-work-from-home'
    }, {
        img: createlogo,
        header: 'Digital marketing made easy',
        content: 'A practical guide to understand what is digital marketing',
        link: '/resources/guides/digital-marketing/what-is-digital-marketing'
    }, {
        img: marketing,
        header: 'Create a logo for your business',
        content: 'A step-by-step guide to create a memorable business logo',
        link: '/resources/guides/graphic-design/how-to-create-business-logo'
    }
]

export const FIContent = () => {
    const [HeroActive, SetHeroActive] = useState(3);
    // useEffect(() => {
    //     setTimeout(() => {
    //         let temp = HeroActive + 1;
    //         SetHeroActive(temp % 5);
    //     }, 4000);
    // }, [HeroActive]);


    return (
        <>
            <Box className='FI-hero-wrap' style={{ backgroundColor: HeroInfoList[HeroActive].color }} >
                <Box className='FI-hero-bg'>
                    <img src={HeroInfoList[HeroActive].img} />
                </Box>

                <Box className='FI-hero-content-wrap'>
                    <Box className='FI-hero-content'>
                        <Box className='hero-content-header'>
                            Find the perfect <i>freelance</i> services for your business
                        </Box>
                        <Box className='hero-search-section'>
                            <Box className="search-input">
                                <input placeholder='Try "building mobile app"' />
                                <Box className="search-icon">
                                    <SearchIcon />
                                </Box>
                                <Box className='cancel-icon'>
                                    <CloseIcon />
                                </Box>
                            </Box>
                            <Box className='search-btn'>
                                Search
                            </Box>
                        </Box>
                        <Box className='here-footer-sec'>
                            <Box className='footer-content'>Popular : </Box>
                            <Box className='footer-items'>
                                {
                                    Herofooterinfo.map((item, index) => {
                                        return (
                                            <Box className='footer-item' key={index}>
                                                <Link to={item.link}>{item.title}</Link>
                                            </Box>
                                        )
                                    })
                                }
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box className='trusted-by-wrapper lohp-row'>
                <Box className='trusted-text'>Trusted by </Box>
                <Box className='trusted-items-wrap'>
                    {
                        trustedinfo.map((item, index) => {
                            return (
                                <Box className='trusted-item' key={index}><img src={item.img} /></Box>
                            )
                        })
                    }
                </Box>
            </Box>

            <Box className='subcategory-carousel-wrap lohp-row'>
                <Box className='subcategory-text'>Popular professional services</Box>
                <Box className='slider-wrap'>
                    <Slide className='slider-containner' duration={1000 * 60 * 60 * 24} transitionDuration={2000}>
                        <Box className='Slider_items-group'>
                            {
                                subcategoryimg.first.map((item, index) => {
                                    return (
                                        <Box className='slider-item' key={index}>
                                            <Link to={item.link}>
                                                <img src={item.img} />
                                                <Box className='slider-content'>
                                                    <Box className='content-header'>
                                                        {item.header}
                                                    </Box>
                                                    <Box className='content-title'>
                                                        {item.title}
                                                    </Box>
                                                </Box>
                                            </Link>
                                        </Box>
                                    )
                                })
                            }
                        </Box>
                        <Box className='Slider_items-group'>
                            {
                                subcategoryimg.two.map((item, index) => {
                                    return (
                                        <Box className='slider-item' key={index}>
                                            <Link to={item.link}>
                                                <img src={item.img} />
                                                <Box className='slider-content'>
                                                    <Box className='content-header'>
                                                        {item.header}
                                                    </Box>
                                                    <Box className='content-title'>
                                                        {item.title}
                                                    </Box>
                                                </Box>
                                            </Link>
                                        </Box>
                                    )
                                })
                            }
                        </Box>
                    </Slide>
                </Box>
            </Box>

            <Box className='selling-proposition-wrap lohp-row'>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Box className='selling-text'>
                            <Box className='text-header'>{sellingtextInfo.header}</Box>
                            <Box className='text-items-wrap'>
                                {
                                    sellingtextInfo.child.map((item, index) => {
                                        return (
                                            <Box className='text-item' key={index}>
                                                <Box className='item-header'>
                                                    {item.icon} {item.header}
                                                </Box>
                                                <Box className='item-content'>
                                                    {item.content}
                                                </Box>
                                            </Box>
                                        )
                                    })
                                }
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Box className='selling-picture'>
                            <img src={sellingPicture} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Box className='main-categories-wrap lohp-row '>
                <Box className='m-categories-header'>
                    Explore the marketplace
                </Box>
                <Box className='m-categories-items-wrap'>
                    <Grid container spacing={0}>
                        {
                            mainCategoriesInfo.map((item, index) => {
                                return (
                                    <Grid item xs={6} sm={4} md={2.4} lg={2.4} xl={2.4} key={index}>
                                        <Box className='m-categories-item'>
                                            <Link to={``}>
                                                <Box className='m-categories-icon'>
                                                    <img src={item.img} />
                                                </Box>
                                                <Box className='m-categories-little'>
                                                    {item.title}
                                                </Box>
                                            </Link>
                                        </Box>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Box>
            </Box>

            <Box className='fib-banner-wrap lohp-row'>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Box className='business-text'>
                            <Box className='business-logo-wrap'>{businessInfo.logo}<Typography>NEW</Typography></Box>
                            <Box className='text-header'>{businessInfo.header} <i>teams</i></Box>
                            <Box className='text-header-2'>{businessInfo.header2}</Box>
                            <Box className='text-items-wrap'>
                                {
                                    businessInfo.child.map((item, index) => {
                                        return (
                                            <Box className='text-item' key={index}>
                                                <Box className='item-header'>
                                                    {item.icon} {item.header}
                                                </Box>
                                            </Box>
                                        )
                                    })
                                }
                            </Box>
                            <Box className='businessbtn-wrap'>
                                <Link to={`business?source=LOHP_business_banner`}>
                                    <Typography>Explore Fiverr Business</Typography>
                                </Link>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Box className='business-image'>
                            <img src={banner} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Box className='testimonials-wrap lohp-row '>
                <Slide className='slider-containner' duration={1000 * 60 * 60 * 24} transitionDuration={1000}>
                    {
                        testimonialInfo.map((item, index) => {
                            return (
                                <Box className='Slider_item' key={index}>
                                    <Box className='img-sec'>
                                        <img src={item.img} />
                                    </Box>
                                    <Box className='text-content'>
                                        <Box className='content-header'>
                                            <Typography>{item.header}</Typography>
                                            <Box className='header-logo'>
                                                <img src={item.logo} />
                                            </Box>
                                        </Box>
                                        <Box className='content-title'><i>{item.content}</i></Box>
                                    </Box>
                                </Box>
                            )
                        })
                    }
                </Slide>
            </Box>

            <Box className='logo-maker-banner-wrap lohp-row'>
                <Box className='logo-maker-banner'>
                    <Box className='descriptions-wrapper'>
                        <Box className='logo-img'>
                            <LogoMaker />
                        </Box>
                        <Box className='maker-header'>
                            Make an incredible logo <i>in minutes</i>
                        </Box>
                        <Box className='description'>
                            Pre-designed by top talent. Just add your touch.
                        </Box>
                        <Box className='logo-maker-btn'>
                            <Link to={`/logo-maker?source=LOHP_banner`}>
                                <Typography>Try Fiverr Logo Maker</Typography>
                            </Link>
                        </Box>
                    </Box>
                    <Box className='mobile-image'>
                        <img src={logomakermobile} />
                    </Box>
                    <Box className='desktop-image'>
                        <img src={logomakerdesktop} />
                    </Box>
                </Box>
            </Box>

            <Box className='made-on-fiverr-wrapper lohp-row'>
                <Box className='header'>
                    Get inspired with projects made by our freelancers
                </Box>
                <Box className='slider-wrap'>
                    <Slide className='slider-containner' duration={1000 * 60 * 60 * 24}>
                        <Box className='Slider_items-group'>
                            {
                                madeonInfo.first.map((item, index) => {
                                    return (
                                        <Box className='item-wrap' key={index}>
                                            <Box className='img-sec'>
                                                <img src={item.img} />
                                            </Box>
                                            <Box className='content-sec'>
                                                <Link to={item.contentlink}>
                                                    <Box className='user-img'>
                                                        <img src={item.userimg} />
                                                    </Box>
                                                    <Box className='content-wrap'>
                                                        <Box className='header-title'>
                                                            {item.header}
                                                        </Box>
                                                        <Box className='content-title'>
                                                            {item.content}
                                                        </Box>
                                                    </Box>
                                                </Link>
                                            </Box>
                                        </Box>
                                    )
                                })
                            }
                        </Box>
                        <Box className='Slider_items-group'>
                            {
                                madeonInfo.two.map((item, index) => {
                                    return (
                                        <Box className='item-wrap' key={index}>
                                            <Box className='img-sec'>
                                                <img src={item.img} />
                                            </Box>
                                            <Box className='content-sec'>
                                                <Link to={item.contentlink}>
                                                    <Box className='user-img'>
                                                        <img src={item.userimg} />
                                                    </Box>
                                                    <Box className='content-wrap'>
                                                        <Box className='header-title'>
                                                            {item.header}
                                                        </Box>
                                                        <Box className='content-title'>
                                                            {item.content}
                                                        </Box>
                                                    </Box>
                                                </Link>
                                            </Box>
                                        </Box>
                                    )
                                })
                            }
                        </Box>
                        <Box className='Slider_items-group'>
                            {
                                madeonInfo.three.map((item, index) => {
                                    return (
                                        <Box className='item-wrap' key={index}>
                                            <Box className='img-sec'>
                                                <img src={item.img} />
                                            </Box>
                                            <Box className='content-sec'>
                                                <Link to={item.contentlink}>
                                                    <Box className='user-img'>
                                                        <img src={item.userimg} />
                                                    </Box>
                                                    <Box className='content-wrap'>
                                                        <Box className='header-title'>
                                                            {item.header}
                                                        </Box>
                                                        <Box className='content-title'>
                                                            {item.content}
                                                        </Box>
                                                    </Box>
                                                </Link>
                                            </Box>
                                        </Box>
                                    )
                                })
                            }
                        </Box>
                    </Slide>
                </Box>
                <Box className='see-more-link'>
                    <Link to={`https://discover.fiverr.com/?utm_source=fiverr&amp;utm_medium=link&amp;utm_content=lohp_link`}>
                        <Typography>See More Projects <NavigateNextIcon /></Typography>
                    </Link>
                </Box>
            </Box>

            <Box className='fiverr-guides-wrap lohp-row'>
                <Box className='header-sec'>
                    <Typography>Fiverr guides</Typography>
                </Box>
                <Box className='guid-items-section'>
                    {
                        GuideInfo.map((item, index) => {
                            return (
                                <Box className='guide-item' key={index}>
                                    <Box className='guide-img-wrap'>
                                        <img src={item.img} />
                                    </Box>
                                    <Box className='guide-content-wrap'>
                                        <Box className='guide-header'>
                                            {item.header}
                                        </Box>
                                        <Box className='guide-title'>
                                            {item.content}
                                        </Box>
                                    </Box>
                                </Box>
                            )
                        })
                    }
                </Box>
            </Box>

            <Box className='fiverr-signup-wrap lohp-row'>
                <Box className='fi-signup-section'>
                    <Box className='signup-image'>
                        <img src={guidsignup} />
                    </Box>
                    <Box className='signup-text'>
                        <Box className='text-display-1'>
                            Find the <i>talent</i> needed to get your business <i>growing.</i>
                        </Box>
                        <Box className='signup-btn-wrap'>
                            <Link to={``}>
                                <Typography>Get Started</Typography>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}