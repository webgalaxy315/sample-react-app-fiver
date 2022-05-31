import { Box } from "@mui/system"
import { Link } from "react-router-dom"
import { Typography } from "@mui/material"
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { useEffect, useState } from "react"

const CategoriesInfo = [
    { link: '/categories/graphics-design?source=category_tree', title: 'Graphics & Design' },
    { link: '/categories/online-marketing?source=category_tree', title: 'Digital Marketing' },
    { link: '/categories/writing-translation?source=category_tree', title: 'Writing & Translation' },
    { link: '/categories/video-animation?source=category_tree', title: 'Video & Animation' },
    { link: '/categories/music-audio?source=category_tree', title: 'Music & Audio' },
    { link: '/categories/programming-tech?source=category_tree', title: 'Programming & Tech' },
    { link: '/categories/business?source=category_tree', title: 'Business' },
    { link: '/categories/lifestyle?source=category_tree', title: 'Lifestyle' },
    { link: '', title: 'Trending' }
]

export const Categories_menu = () => {
    const [LeftState, SetLeftState] = useState(false);
    const LeftClick = (e) => {
        let EL = window.$('.Categories-items-wrap');
        let leftPos = EL.scrollLeft() - 200;
        let scrollWidth = EL[0].scrollWidth;
        let CurrentWidth = leftPos + EL[0].offsetWidth;
        let offsetWidth = EL[0].offsetWidth;
        EL.animate({ scrollLeft: leftPos }, 100);
        console.log('123')

        if (scrollWidth <= CurrentWidth || scrollWidth == offsetWidth) SetRightState(false)
        else SetRightState(true);
        if (leftPos <= 0 || scrollWidth == offsetWidth) SetLeftState(false);
        else SetLeftState(true);
    }

    const [RightState, SetRightState] = useState(false);
    const RightClick = (e) => {
        let EL = window.$('.Categories-items-wrap');
        let leftPos = EL.scrollLeft() + 200;
        let scrollWidth = EL[0].scrollWidth;
        let CurrentWidth = leftPos + EL[0].offsetWidth;
        let offsetWidth = EL[0].offsetWidth;
        EL.animate({ scrollLeft: leftPos }, 100);

        if (scrollWidth <= CurrentWidth || scrollWidth == offsetWidth) SetRightState(false)
        else SetRightState(true);
        if (leftPos <= 0 || scrollWidth == offsetWidth) SetLeftState(false);
        else SetLeftState(true);

    }

    useEffect(() => {
        const LRBtnStateCheck = () => {
            let EL = window.$('.Categories-items-wrap');
            let leftPos = EL.scrollLeft();
            let scrollWidth = EL[0].scrollWidth;
            let CurrentWidth = leftPos + EL[0].offsetWidth;
            let offsetWidth = EL[0].offsetWidth;
            if (scrollWidth <= CurrentWidth || scrollWidth == offsetWidth) SetRightState(false)
            else SetRightState(true);
            if (leftPos <= 0 || scrollWidth == offsetWidth) SetLeftState(false);
            else SetLeftState(true);
        }
        window.$(window).resize(function () { LRBtnStateCheck(); });
        LRBtnStateCheck();
    }, []);

    return (
        <>
            {
                LeftState ?
                    <Box className='menu-left-btn' onClick={LeftClick}>
                        <KeyboardArrowLeftIcon />
                    </Box> : <></>
            }
            <Box className='Categories-items-wrap'>
                {
                    CategoriesInfo.map((item, index) => {
                        return (
                            <Box className='Categories-item' key={index}>
                                {item.link ?
                                    <Link to={item.link}>
                                        <Typography>{item.title}</Typography>
                                    </Link> :
                                    <Typography>{item.title}</Typography>
                                }
                            </Box>
                        )
                    })
                }
            </Box>
            {
                RightState ?
                    <Box className='menu-right-btn' onClick={RightClick}>
                        <ChevronRightIcon />
                    </Box> : <></>
            }
        </>
    )
}