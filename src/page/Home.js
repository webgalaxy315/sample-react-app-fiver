import { Box } from '@mui/material';
import '../assets/scss/index.scss';

import { MenuItems } from '../component/MenuItems';
import { Headericon } from '../component/HeaderIcon';
import { Categories_menu } from '../component/Categories_menu';
import { FIContent } from '../component/FIContent';
import { FIFooter } from '../component/FIFooter';

function Home() {
    return (
        <Box className='FI-page-containner'>
            <Box className='FI-header-wrap FI-center'>
                <Box className='FI-header-wrap-containner' data-spy="affix" data-offset-top="100">
                    <Box className='FI-header-icon'>
                        <Headericon />
                    </Box>
                    <Box className='FI-header-right'>
                        <Box className='FI-search-wrap'>

                        </Box>
                        <Box className='FI-menu-wrap'>
                            <MenuItems />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className='FI-categories-menu'>
                <Box className='categories-menu-containner' data-spy="affix" data-offset-top="250">
                    <Categories_menu />
                </Box>
            </Box>
            <Box className='FI-body-wrap'>
                <FIContent />
            </Box>
            <Box className='FI-footer-wrap'>
                <FIFooter />
            </Box>
        </Box>
    );
}

export default Home;
