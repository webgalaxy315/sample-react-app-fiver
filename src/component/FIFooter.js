import { Link } from "react-router-dom";
import { useState } from "react";
import { Grid, Menu, Typography } from "@mui/material";
import { Box } from "@mui/system"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CheckIcon from '@mui/icons-material/Check';

import { FooterLogo } from './common/FooterLogo';
import { TwitterIcon } from './common/footer/Twiterr';
import { FacebookIcon } from './common/footer/Facebook';
import { LinkedinIcon } from './common/footer/Linkedin';
import { PinterestIcon } from './common/footer/Pinterest';
import { InstagramIcon } from './common/footer/Instargram';
import { PeopleIcon } from './common/footer/People';

import LanguageIcon from '@mui/icons-material/Language';
import CloseIcon from '@mui/icons-material/Close';

const footerinfo = [
    {
        title: 'Categories',
        child: [
            { title: 'Graphics & Design', link: '/categories/graphics-design', },
            { title: 'Digital Marketing', link: '/categories/online-marketing', },
            { title: 'Writing & Translation', link: '/categories/writing-translation', },
            { title: 'Video & Animation', link: '/categories/video-animation', },
            { title: 'Music & Audio', link: '/categories/music-audio', },
            { title: 'Programming & Tech', link: '/categories/programming-tech', },
            { title: 'Data', link: '/categories/data', },
            { title: 'Business', link: '/categories/business', },
            { title: 'Lifestyle', link: '/categories/lifestyle', },
            { title: 'Sitemap', link: '/categories', },
        ],
    },
    {
        title: 'About',
        child: [
            { title: 'Careers', link: '/jobs?source=footer', },
            { title: 'Press & News', link: '/news/press-releases?source=footer', },
            { title: 'Partnerships', link: '/partnerships?source=footer', },
            { title: 'Privacy Policy', link: '/privacy-policy?source=footer', },
            { title: 'Terms of Service', link: '/terms_of_service?source=footer', },
            { title: 'Intellectual Property Claims', link: '/intellectual-property?source=footer', },
            { title: 'Investor Relations', link: 'https://investors.fiverr.com', },
        ],
    },
    {
        title: 'Support',
        child: [
            { title: 'Help & Support', link: '/support', },
            { title: 'Trust & Safety', link: '/trust_safety?source=footer', },
            { title: 'Selling on Fiverr', link: '/support/articles/360010451297-How-to-Start-Selling-on-Fiverr', },
            { title: 'Buying on Fiverr', link: '/content/how-fiverr-works?show_join&source=footer', },
        ],
    },
    {
        title: 'Community',
        child: [
            { title: 'Events', link: 'https://events.fiverr.com', },
            { title: 'Blog', link: 'https://blog.fiverr.com/?utm_source=fiverr&utm_medium=website', },
            { title: 'Forum', link: 'https://community.fiverr.com/welcome/?utm_source=fiverr&utm_medium=website', },
            { title: 'Community Standards', link: '/community/standards?source=footer', },
            { title: 'Podcast', link: 'https://podfollow.com/ninetwentynine', },
            { title: 'Affiliates', link: 'https://affiliates.fiverr.com', },
            { title: 'Invite a Friend', link: '/referral_program?source=footer', },
            { title: 'Become a Seller', link: '/start_selling?source=footer', },
        ],
    },
    {
        title: 'More From Fiverr',
        child: [
            { title: 'Fiverr Business', link: '/business?source=footer', },
            { title: 'Fiverr Pro', link: '/pro?source=footer', },
            { title: 'Fiverr Studios', link: '/studios?source=footer', },
            { title: 'Fiverr Logo Maker', link: '/logo-maker?source=footer', },
            { title: 'Fiverr Guides', link: '/resources/guides?source=footer', },
            {
                title: 'Get Inspired',
                link: 'https://discover.fiverr.com?utm_source=fiverr&utm_medium=link&utm_content=footer_link',
            },
            {
                title: 'ClearVoice',
                content: 'Content Marketing',
                link: 'https://www.clearvoice.com',
            },
            {
                title: 'Fiverr Workspace',
                content: 'Invoice Software',
                link: 'https://workspace.fiverr.com/?utm_source=fiverr&utm_medium=marketing_site&utm_content=footer_fib',
            },
            {
                title: 'Learn',
                content: 'Online Courses',
                link: 'https://learn.fiverr.com',
            },
            { title: 'Working Not Working', link: 'https://workingnotworking.com', },
        ],
    },
];

const Language = {
    icon: <LanguageIcon className="icon" />,
    child: [
        {
            header: 'English',
            content: '',
            link: 'https://www.fiverr.com'
        }, {
            header: 'Deutsch',
            content: '',
            link: 'https://de.fiverr.com/'
        }, {
            header: 'Español',
            content: '',
            link: 'https://es.fiverr.com/'
        }, {
            header: 'Français',
            content: '',
            link: 'https://fr.fiverr.com/'
        },
        {
            header: 'Português',
            content: '',
            link: 'https://br.fiverr.com/'
        }, {
            header: 'Italiano',
            content: '',
            link: 'https://it.fiverr.com/'
        }, {
            header: 'Nederlands',
            content: '',
            link: 'https://nl.fiverr.com/'
        }
    ]
};
const costlist = [
    {
        header: 'United States Dollar',
        cost_unit: 'USD',
        simbol: '$'
    }, {
        header: 'Euro',
        cost_unit: 'EUR',
        simbol: '€'
    }, {
        header: 'British Pound',
        cost_unit: 'GBP',
        simbol: '£'
    }, {
        header: 'Australlan Dollar',
        cost_unit: 'AUD',
        simbol: 'A$'
    }, {
        header: 'Canadian Dollar',
        cost_unit: 'CAD',
        simbol: 'CA$'
    }, {
        header: 'Israeli Shekel',
        cost_unit: 'ILS',
        simbol: '₪'
    }, {
        header: 'Hong Kong Dollar',
        cost_unit: 'HKD',
        simbol: 'HK$'
    }, {
        header: 'Swedish Krona',
        cost_unit: 'SEK',
        simbol: 'SEK'
    }, {
        header: 'New Zealand Dollar',
        cost_unit: 'NZD',
        simbol: 'NZ$'
    }, {
        header: 'Singapore Dollar',
        cost_unit: 'SGD',
        simbol: 'SGD'
    }, {
        header: 'Swiss Franc',
        cost_unit: 'CHF',
        simbol: 'CHF'
    }, {
        header: 'South African Rand',
        cost_unit: 'ZAR',
        simbol: 'ZAR'
    }, {
        header: 'Chinese Renminbi Yuan',
        cost_unit: 'CNY',
        simbol: 'CN¥'
    }, {
        header: 'Indian Rupee',
        cost_unit: 'INR',
        simbol: '₹'
    }, {
        header: 'Malaysian Ringglit',
        cost_unit: 'MYR',
        simbol: 'MYR'
    }, {
        header: 'Mexican Peso',
        cost_unit: 'MXN',
        simbol: 'MX$'
    }, {
        header: 'Pakistani Rupee',
        cost_unit: 'PKR',
        simbol: 'PKR'
    }, {
        header: 'Philippine Peso',
        cost_unit: 'PHP',
        simbol: '₱'
    }, {
        header: 'New Taiwan Dollar',
        cost_unit: 'TWD',
        simbol: 'NT$'
    }, {
        header: 'Thai Bagt',
        cost_unit: 'THB',
        simbol: 'THB'
    }, {
        header: 'Turkish New Lira',
        cost_unit: 'TRY',
        simbol: 'TRY'
    }, {
        header: 'United Arab Emirates Dirham',
        cost_unit: 'AED',
        simbol: 'AED'
    }
];

export const FIFooter = () => {
    const [LanguageElement, setLanguageElement] = useState(null);
    const Languageopen = Boolean(LanguageElement);
    const [Lan_Select, SetLan_Select] = useState(0);

    const [Cost_unitElement, setCost_unitElement] = useState(null);
    const Cost_unitopen = Boolean(Cost_unitElement);
    const [CostUnit_Select, SetCostUnit_Select] = useState(0);

    return (
        <Box className='FI-footer-containner' >
            <Box className='footer-menu-wrap'>
                <Grid container spacing={0}>
                    {
                        footerinfo.map((item, index) => {
                            return (
                                <FooterMenuItems item={item} key={index} />
                            )
                        })
                    }
                </Grid>
            </Box>
            <Box className='footer-bottom-wrap'>
                <Box className='footer-left-sec'>
                    <FooterLogo />
                    <Typography>© Fiverr International Ltd. 2022</Typography>
                </Box>
                <Box className='footer-right-sec'>
                    <Box className='social-wrap'>
                        <TwitterIcon /><FacebookIcon /><LinkedinIcon /><PinterestIcon /><InstagramIcon />
                    </Box>
                    <Box className='settings-buttons-wrap'>
                        <Box className='local-setting-package language-selection-trigger' onClick={(e) => { setLanguageElement(e.currentTarget); }}>
                            {Language.icon} {Language.child[Lan_Select].header}
                        </Box>
                        <Menu
                            className='footer-Language-menu-items'
                            anchorEl={LanguageElement}
                            open={Languageopen}
                            onClose={() => { setLanguageElement(null); }}
                            PaperProps={{
                                'aria-labelledby': 'lock-button',
                                role: 'listbox',
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 0,
                                    top: 'auto !important',
                                    left: 'auto !important',
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                    display: 'flex',
                                    backgroundColor: 'unset',
                                    '& .MuiList-root': {
                                        padding: '0px'
                                    }
                                },
                            }}
                        >
                            <Box className='Language-menu-containner' >
                                <Box className='l-menu-header'>
                                    Choose a language
                                    <CloseIcon onClick={() => { setLanguageElement(null); }} />
                                </Box>
                                {
                                    Language.child.map((item, index) => {
                                        let num = index;
                                        return (
                                            <Box className='Language-menu-item' key={index} onClick={() => { SetLan_Select(index) }}>
                                                <Box className='L-check-icon'>
                                                    {Lan_Select == index ? <CheckIcon /> : <></>}
                                                </Box>
                                                <Box className='L-content'>
                                                    {item.header}
                                                </Box>
                                            </Box>
                                        )
                                    })
                                }
                            </Box>
                        </Menu>
                        <Box className='local-setting-package currency-selection-trigger' onClick={(e) => { setCost_unitElement(e.currentTarget); }}>
                            {`${costlist[CostUnit_Select].simbol} ${costlist[CostUnit_Select].cost_unit}`}
                        </Box>
                        <Menu
                            className='footer-CostUnit-menu-items'
                            anchorEl={Cost_unitElement}
                            open={Cost_unitopen}
                            onClose={() => { setCost_unitElement(null); }}

                            PaperProps={{
                                'aria-labelledby': 'lock-button',
                                role: 'listbox',
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    top: 'auto !important',
                                    left: 'auto !important',
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                    display: 'flex',
                                    backgroundColor: 'unset',
                                    '& .MuiList-root': {
                                        padding: '0px'
                                    }
                                },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            <Box className='CostUnit-menu-containner' >
                                <Box className='l-menu-header'>
                                    Choose a currency
                                    <CloseIcon onClick={() => { setCost_unitElement(null); }} />
                                </Box>
                                <Box className='l-menu-content'>
                                    {
                                        costlist.map((item, index) => {
                                            return (
                                                <Box className='CostUnit-menu-item' key={index}>
                                                    <Box className='CostUnit-icon'>
                                                        {CostUnit_Select == index ? <CheckIcon /> : <></>}
                                                    </Box>
                                                    <Box className='CostUnit-body' onClick={() => { SetCostUnit_Select(index); }}>
                                                        <Box className='CostItem-header'>
                                                            {item.header}
                                                        </Box>
                                                        <Box className='CostItem-content'>
                                                            {`${costlist[index].simbol} - ${costlist[index].cost_unit}`}
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            )
                                        })
                                    }
                                </Box>
                            </Box>
                        </Menu>
                        <Box className='accessibility-button'>
                            <PeopleIcon />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export const FooterMenuItems = ({ item }) => {
    const [menuState, SetmenuState] = useState(false);
    const menuListOpen = (e) => {
        let innerWidth = window.innerWidth;
        if (innerWidth < 600) SetmenuState(!menuState);
    }
    return (
        <Grid item xs={12} sm={4} md={2.4} lg={2.4} xl={2.4}>
            <Box className='footer-menu-item'>
                <Box className='menu-item-header' onClick={menuListOpen}>
                    <Typography>{item.title}</Typography>
                    {
                        menuState ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
                    }
                </Box>
                <Box className='footer-menu-list-wrap' style={{ display: menuState ? 'block' : 'none' }} >
                    {
                        item.child.map((item, index) => {
                            return (
                                <Box className='menu-list' key={index}>
                                    <Link to={item.link}>
                                        <Typography>{item.title}</Typography>
                                    </Link>
                                </Box>
                            )
                        })
                    }
                </Box>
            </Box>
        </Grid>
    )
}