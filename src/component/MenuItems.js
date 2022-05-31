import { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Menu, Typography } from "@mui/material";
import { Box } from "@mui/system";
import LanguageIcon from '@mui/icons-material/Language';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

import { FacebookIcon } from './common/header/Facebook';
import { GoogleIcon } from './common/header/Google';
import { AppleIcon } from './common/header/Apple';

const Fiverr_Business = {
    title: 'Fiverr Business',
    link: 'business?source=top_nav',
};
const Explore = [
    {
        header: 'Discover',
        content: 'Inspiring projects made on Fiverr',
        link: 'https://discover.fiverr.com/?source=explore-tab'
    }, {
        header: 'Community',
        content: 'Connect with Fiverr`s team and community',
        link: 'https://events.fiverr.com/?source=explore-tab'
    }, {
        header: 'Guides',
        content: 'In-depth guides covering business topics',
        link: '/resources/guides?source=explore-tab'
    }, {
        header: 'Podcast',
        content: 'Inside tips from top business minds',
        link: 'https://play.acast.com/s/ninetwentynine?source=explore-tab'
    }, {
        header: 'Learn',
        content: 'Professional online courses, led by experts',
        link: 'https://learn.fiverr.com/?source=explore-tab'
    }, {
        header: 'Blog',
        content: 'News, information and community stories',
        link: 'https://blog.fiverr.com/?source=explore-tab'
    }, {
        header: 'Logo Maker',
        content: 'Create your logo instantly',
        link: 'https://www.fiverr.com/logo-maker?source=explore-tab'
    }, {
        header: 'Fiverr Workspace',
        content: 'One place to manage your business',
        link: 'https://workspace.fiverr.com/?utm_source=fiverr&amp;utm_medium=marketing_site&amp;utm_content=menu_visitor'
    }
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
const BecomeSeller = {
    title: 'Become a Seller',
    link: '/start_selling?source=top_nav'
}

export const MenuItems = () => {
    const [ExploreElement, setExploreElement] = useState(null);
    const ExploreOpen = Boolean(ExploreElement);


    const [LanguageElement, setLanguageElement] = useState(null);
    const Languageopen = Boolean(LanguageElement);
    const [Lan_Select, SetLan_Select] = useState(0);


    const [Cost_unitElement, setCost_unitElement] = useState(null);
    const Cost_unitopen = Boolean(Cost_unitElement);
    const [CostUnit_Select, SetCostUnit_Select] = useState(0);

    const [JoinElement, setJoinElement] = useState(null);
    const Joinopen = Boolean(JoinElement);

    return (
        <Box className='menu-bar-containner  FI-right'>
            <Box className='menu-item menu-section-1'>
                <Box className='menu-item-wrap'>
                    <Link to={Fiverr_Business.link}>
                        <Typography className="Fiverr-hover" >{Fiverr_Business.title}</Typography>
                    </Link>
                </Box>
            </Box>
            <Box className='menu-item menu-section-1'>
                <Box className='menu-item-wrap' onClick={(e) => { setExploreElement(e.currentTarget); }}>
                    <Typography>Explore</Typography>
                </Box>
                <Menu
                    className='Explore-menu-items'
                    anchorEl={ExploreElement}
                    open={ExploreOpen}
                    onClose={() => { setExploreElement(null); }}
                    onClick={() => { setExploreElement(null); }}
                    PaperProps={{
                        'aria-labelledby': 'lock-button',
                        role: 'listbox',
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(1px 1px 3px rgba(0,0,0,0.32))',
                            mt: 2.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: '50%',
                                width: 20,
                                height: 20,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        }
                    }}
                    transformOrigin={{ horizontal: 'center', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
                >
                    <Box className='Explore-items-containner' onClick={() => { setLanguageElement(null); }}>
                        <Grid container spacing={0}>
                            {
                                Explore.map((item, index) => {
                                    return (
                                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} key={index} >
                                            <Link to={item.link} className='Explore-item'>
                                                <Box className='item-header'>
                                                    {item.header}
                                                </Box>
                                                <Box className='item-content'>
                                                    {item.content}
                                                </Box>
                                            </Link>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Box>
                </Menu>
            </Box >
            <Box className='menu-item menu-section-2'>
                <Box className='menu-item-wrap' onClick={(e) => { setLanguageElement(e.currentTarget); }}>
                    {Language.icon}
                    <Typography>{Language.child[Lan_Select].header}</Typography>
                </Box>
                <Menu
                    className='Language-menu-items'
                    anchorEl={LanguageElement}
                    open={Languageopen}
                    onClose={() => { setLanguageElement(null); }}
                    onClick={() => { setLanguageElement(null); }}
                    PaperProps={{
                        'aria-labelledby': 'lock-button',
                        role: 'listbox',
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            backgroundColor: 'unset',
                            '& .MuiList-root': {
                                padding: '0px'
                            }
                        },
                    }}
                    transformOrigin={{ horizontal: 'center', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
                >
                    <Box className='Language-menu-containner' onClick={() => { setLanguageElement(null); }}>
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
            </Box >
            <Box className='menu-item menu-section-2'>
                <Box className='menu-item-wrap' onClick={(e) => { setCost_unitElement(e.currentTarget); }}>
                    <Typography>{`${costlist[CostUnit_Select].simbol} ${costlist[CostUnit_Select].cost_unit}`}</Typography>
                </Box>
                <Menu
                    className='CostUnit-menu-items'
                    anchorEl={Cost_unitElement}
                    open={Cost_unitopen}
                    onClose={() => { setCost_unitElement(null); }}
                    onClick={() => { setCost_unitElement(null); }}
                    PaperProps={{
                        'aria-labelledby': 'lock-button',
                        role: 'listbox',
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 2,
                            backgroundColor: 'unset',
                            '& .MuiList-root': {
                                padding: '0px'
                            }
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <Box className='CostUnit-menu-containner' onClick={() => { setCost_unitElement(null); }}>
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
                </Menu>
            </Box>
            <Box className='menu-item menu-section-1'>
                <Box className='menu-item-wrap'>
                    <Link to={BecomeSeller.link}>
                        <Typography>{BecomeSeller.title}</Typography>
                    </Link>
                </Box>
            </Box>
            <Box className='menu-item menu-section-3'>
                <Box className='menu-item-wrap'>
                    <Typography>Sign in</Typography>
                </Box>
            </Box>
            <Box className='menu-item menu-item-join'>
                <Box className='menu-item-wrap' onClick={(e) => { setJoinElement(e.currentTarget) }}>
                    <Typography>Join</Typography>
                </Box>
                <Menu
                    className='join-menu-items'
                    anchorEl={JoinElement}
                    open={Joinopen}
                    onClose={() => { setJoinElement(null); }}

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
                    <Box className='join-menu-containner' >
                        <Box className='join-menu-header'>
                            Join Fiverr
                            <CloseIcon onClick={() => { setJoinElement(null); }} />
                        </Box>
                        <Box className='join-menu-content'>
                            <Box className='facebook-link-item'>
                                <FacebookIcon />
                                <Typography>Continue with Facebook</Typography>
                            </Box>
                            <Box className='google-link-item'>
                                <GoogleIcon />
                                <Typography>Continue with Google</Typography>
                            </Box>
                            <Box className='apple-link-item'>
                                <AppleIcon />
                                <Typography>Continue with Apple</Typography>
                            </Box>
                            <Box className='or-item'>
                                <Typography>OR</Typography>
                            </Box>
                            <Box className='email-input-item'>

                            </Box>
                            <Box className='continue-btn'>

                            </Box>
                            <Box className='error-text-sec'>

                            </Box>
                            <Box className='text-sec'>

                            </Box>
                        </Box>
                        <Box className='join-menu-footer'>

                        </Box>
                    </Box>
                </Menu>
            </Box>
        </Box >
    )
}