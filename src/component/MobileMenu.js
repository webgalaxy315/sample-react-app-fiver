import { useState } from "react"
import { Link } from "react-router-dom";
import { Box } from "@mui/system"
import { Menu, Typography } from "@mui/material";

import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LanguageIcon from '@mui/icons-material/Language';
import CheckIcon from '@mui/icons-material/Check';

const CategoriesInfo = [
    {
        link: '/categories/graphics-design?source=category_tree',
        title: 'Graphics & Design',
        child: [
            { title: 'Logo Design', link: '/categories/graphics-design/creative-logo-design', },
            { title: 'Brand Style Guides', link: '/categories/graphics-design/brand-style-guides', },
            { title: 'Game Art', link: '/categories/graphics-design/game-art', },
            { title: 'Graphics for Streamers', link: '/categories/graphics-design/graphics-for-streamers', },
            { title: 'Business Cards & Stationery', link: '/categories/graphics-design/sample-business-cards-design', },
            { title: 'Website Design', link: '/categories/graphics-design/website-design', },
            { title: 'App Design', link: '/categories/graphics-design/app-design', },
            { title: 'UX Design', link: '/categories/graphics-design/ux-design', },
            { title: 'Landing Page Design', link: '/categories/graphics-design/landing-page-design', },
            { title: 'Resume Design', link: '/categories/graphics-design/resume-design', },
            { title: 'Illustration', link: '/categories/graphics-design/digital-illustration', },
            { title: 'NFT Art', link: '/categories/graphics-design/nft', },
            { title: 'Pattern Design', link: '/categories/graphics-design/pattern-design', },
            { title: 'Fonts & Typography', link: '/categories/graphics-design/fonts-typography', },
            { title: 'Brochure Design', link: '/categories/graphics-design/brochure-design', },
            { title: 'Poster Design', link: '/categories/graphics-design/poster-design', },
            { title: 'Flyer Design', link: '/categories/graphics-design/flyer-design', },
            { title: 'Book Design', link: '/categories/graphics-design/book-design', },
            { title: 'Album Cover Design', link: '/categories/graphics-design/album-cover-design', },
            { title: 'Podcast Cover Art', link: '/categories/graphics-design/podcast-cover-art', },
            { title: 'Packaging & Label Design', link: '/categories/graphics-design/product-packaging-design', },
            { title: 'AR Filters & Lenses', link: '/categories/graphics-design/ar-filters-lenses', },
            { title: 'Storyboards', link: '/categories/graphics-design/storyboards', },
            { title: 'Social Media Design', link: '/categories/graphics-design/social-media-design', },
            { title: 'Postcard Design', link: '/categories/graphics-design/postcard-design', },
            { title: 'Catalog Design', link: '/categories/graphics-design/catalog-design', },
            { title: 'Menu Design', link: '/categories/graphics-design/menu-design', },
            { title: 'Invitation Design', link: '/categories/graphics-design/invitations', },
            { title: 'Portraits & Caricatures', link: '/categories/graphics-design/portraits-and-caricatures', },
            { title: 'Cartoons & Comics', link: '/categories/graphics-design/cartoons-and-comics', },
            { title: 'Tattoo Design', link: '/categories/graphics-design/tattoo-design', },
            { title: 'Signage Design', link: '/categories/graphics-design/signage-design', },
            { title: 'Web Banners', link: '/categories/graphics-design/banner-ads', },
            { title: 'Photoshop Editing', link: '/categories/graphics-design/buy-photos-online-photoshopping', },
            { title: 'Architecture & Interior Design', link: '/categories/graphics-design/architectural-design-services', },
            { title: 'Landscape Design', link: '/categories/graphics-design/landscape-design', },
            { title: 'Building Engineering', link: '/categories/graphics-design/building-engineering', },
            { title: 'Building Information Modeling', link: '/categories/graphics-design/bim-services', },
            { title: 'Character Modeling', link: '/categories/graphics-design/character-modeling', },
            { title: 'Industrial & Product Design', link: '/categories/graphics-design/product-design-services', },
            { title: 'Trade Booth Design', link: '/categories/graphics-design/booth-design', },
            { title: 'T-Shirts & Merchandise', link: '/categories/graphics-design/t-shirts', },
            { title: 'Fashion Design', link: '/categories/graphics-design/fashion-design', },
            { title: 'Jewelry Design', link: '/categories/graphics-design/jewelry-design', },
            { title: 'Presentation Design', link: '/categories/graphics-design/presentations-design', },
            { title: 'Email Design', link: '/categories/graphics-design/email-design', },
            { title: 'Icon Design', link: '/categories/graphics-design/icon-design', },
            { title: 'Infographic Design', link: '/categories/graphics-design/infographics-design', },
            { title: 'Car Wraps', link: '/categories/graphics-design/car-wrap-design', },
            { title: 'Vector Tracing', link: '/categories/graphics-design/vector-tracing', },
            { title: 'Other', link: '/categories/graphics-design/graphics-services', },
            { title: 'Twitch Store', link: '/stores/twitch', },
            { title: 'Design Advice', link: '/categories/graphics-design/design-advice', },
            { title: 'All in Graphics & Design', link: '/categories/graphics-design', },
        ]
    }, {
        link: '/categories/online-marketing?source=category_tree',
        title: 'Digital Marketing',
        child: [
            { title: 'Social Media Advertising', link: '/categories/online-marketing/social-media-advertising', },
            { title: 'Social Media Marketing', link: '/categories/online-marketing/social-marketing', },
            { title: 'Search Engine Optimization (SEO)', link: '/categories/online-marketing/seo-services', },
            { title: 'Public Relations', link: '/categories/online-marketing/public-relations', },
            { title: 'Content Marketing', link: '/categories/online-marketing/content-marketing', },
            { title: 'Book & eBook Marketing', link: '/categories/online-marketing/book-marketing-services', },
            { title: 'Podcast Marketing', link: '/categories/online-marketing/podcast-marketing', },
            { title: 'Video Marketing', link: '/categories/online-marketing/online-video-marketing', },
            { title: 'Other', link: '/categories/online-marketing/online-marketing-services', },
            { title: 'Email Marketing', link: '/categories/online-marketing/email-marketing', },
            { title: 'Text Message Marketing', link: '/categories/online-marketing/text-message-marketing', },
            { title: 'Crowdfunding', link: '/categories/online-marketing/crowdfunding', },
            { title: 'Search Engine Marketing (SEM)', link: '/categories/online-marketing/search-engine-marketing', },
            { title: 'Display Advertising', link: '/categories/online-marketing/display-advertising', },
            { title: 'Web Traffic', link: '/categories/online-marketing/website-traffic', },
            { title: 'Web Analytics', link: '/categories/online-marketing/web-analytics-services', },
            { title: 'Marketing Advice', link: '/categories/online-marketing/marketing-tips-and-advice', },
            { title: 'Influencer Marketing', link: '/categories/online-marketing/influencer-marketing', },
            { title: 'Marketing Strategy', link: '/categories/online-marketing/marketing-strategy', },
            { title: 'Community Management', link: '/categories/online-marketing/community-management', },
            { title: 'Local SEO', link: '/categories/online-marketing/local-seo-services', },
            { title: 'E-Commerce Marketing', link: '/categories/online-marketing/e-commerce-marketing', },
            { title: 'Affiliate Marketing', link: '/categories/online-marketing/affiliate-marketing', },
            { title: 'Mobile App Marketing', link: '/categories/online-marketing/mobile-app-marketing', },
            { title: 'Music Promotion', link: '/categories/online-marketing/music-promotion', },
            { title: 'All in Digital Marketing', link: '/categories/online-marketing', },
        ]
    }, {
        link: '/categories/writing-translation?source=category_tree',
        title: 'Writing & Translation',
        child: [
            { title: 'Articles & Blog Posts', link: '/categories/writing-translation/articles-blogposts', },
            { title: 'Proofreading & Editing', link: '/categories/writing-translation/proofreading-editing', },
            { title: 'Translation', link: '/categories/writing-translation/quality-translation-services', },
            { title: 'Website Content', link: '/categories/writing-translation/website-content', },
            { title: 'Product Descriptions', link: '/categories/writing-translation/product-description', },
            { title: 'Book & eBook Writing', link: '/categories/writing-translation/book-and-ebook-writing', },
            { title: 'Book Editing', link: '/categories/writing-translation/book-editing', },
            { title: 'Resume Writing', link: '/categories/writing-translation/resume-writing', },
            { title: 'Brand Voice & Tone', link: '/categories/writing-translation/tone-of-voice', },
            { title: 'UX Writing', link: '/categories/writing-translation/ux-writing', },
            { title: 'Email Copy', link: '/categories/writing-translation/email-copy', },
            { title: 'Technical Writing', link: '/categories/writing-translation/technical-writing-services', },
            { title: 'White Papers', link: '/categories/writing-translation/white-papers', },
            { title: 'Sales Copy', link: '/categories/writing-translation/sales-copy', },
            { title: 'Social Media Copy', link: '/categories/writing-translation/social-media-copywriting', },
            { title: 'Podcast Writing', link: '/categories/writing-translation/podcast', },
            { title: 'Ad Copy', link: '/categories/writing-translation/ad-copy', },
            { title: 'Cover Letters', link: '/categories/writing-translation/cover-letter-services', },
            { title: 'Press Releases', link: '/categories/writing-translation/writing-press-releases', },
            { title: 'Case Studies', link: '/categories/writing-translation/case-study-writing', },
            { title: 'LinkedIn Profiles', link: '/categories/writing-translation/linkedin-profile-services', },
            { title: 'Job Descriptions', link: '/categories/writing-translation/job-description-writing-services', },
            { title: 'Creative Writing', link: '/categories/writing-translation/creative-writing', },
            { title: 'Beta Reading', link: '/categories/writing-translation/beta-reader', },
            { title: 'Scriptwriting', link: '/categories/writing-translation/script-writing', },
            { title: 'Business Names & Slogans', link: '/categories/writing-translation/business-names-and-slogans', },
            { title: 'eLearning Content Development', link: '/categories/writing-translation/elearning-content-development', },
            { title: 'Speechwriting', link: '/categories/writing-translation/speech-writing', },
            { title: 'Grant Writing', link: '/categories/writing-translation/grant-writing-services', },
            { title: 'Transcription', link: '/categories/writing-translation/transcription', },
            { title: 'Research & Summaries', link: '/categories/writing-translation/research-summaries', },
            { title: 'Other', link: '/categories/writing-translation/writing-services', },
            { title: 'Writing Advice', link: '/categories/writing-translation/writing-tips-and-advice', },
            { title: 'All in Writing & Translation', link: '/categories/writing-translation', },
        ]
    }, {
        link: '/categories/video-animation?source=category_tree',
        title: 'Video & Animation',
        child: [
            { title: 'Whiteboard & Animated Explainers', link: '/categories/video-animation/animated-explainer-videos', },
            { title: 'Video Editing', link: '/categories/video-animation/video-editing', },
            { title: 'Short Video Ads', link: '/categories/video-animation/short-video-ads', },
            { title: 'Animated GIFs', link: '/categories/video-animation/animated-gifs', },
            { title: 'Logo Animation', link: '/categories/video-animation/logo-animation-services', },
            { title: 'Intros & Outros', link: '/categories/video-animation/video-intro-and-outro', },
            { title: 'Character Animation', link: '/categories/video-animation/animated-characters-modeling', },
            { title: '3D Product Animation', link: '/categories/video-animation/3d-product-animation', },
            { title: 'Social Media Videos', link: '/categories/video-animation/social-media-videos', },
            { title: 'Lyric & Music Videos', link: '/categories/video-animation/music-videos', },
            { title: 'NFT Animation', link: '/categories/video-animation/nft-animation', },
            { title: 'Animation for Kids', link: '/categories/video-animation/animation-for-kids', },
            { title: 'Animation for Streamers', link: '/categories/video-animation/animation-for-streamers', },
            { title: 'Live Action Explainers', link: '/categories/video-animation/live-action-videos', },
            { title: 'E-Commerce Product Videos', link: '/categories/video-animation/ecommerce-product-videos', },
            { title: 'Spokespersons Videos', link: '/categories/video-animation/buy-spokesperson-video', },
            { title: 'Subtitles & Captions', link: '/categories/video-animation/subtitles-captions', },
            { title: 'Visual Effects', link: '/categories/video-animation/visual-effects', },
            { title: 'Lottie & Website Animation', link: '/categories/video-animation/website-animation', },
            { title: 'eLearning Video Production', link: '/categories/video-animation/elearning-video-production', },
            { title: 'Article to Video', link: '/categories/video-animation/article-to-video', },
            { title: 'Unboxing Videos', link: '/categories/video-animation/unboxing-videos', },
            { title: 'Screencasting Videos', link: '/categories/video-animation/screencasting-videos', },
            { title: 'Corporate Videos', link: '/categories/video-animation/corporate-videos', },
            { title: 'Crowdfunding Videos', link: '/categories/video-animation/crowdfunding-videos', },
            { title: 'Slideshow Videos', link: '/categories/video-animation/slideshow-videos', },
            { title: 'Video Templates Editing', link: '/categories/video-animation/video-templates-editing', },
            { title: 'App & Website Previews', link: '/categories/video-animation/app-website-previews', },
            { title: 'Drone Videography', link: '/categories/video-animation/drone-videography', },
            { title: 'Book Trailers', link: '/categories/video-animation/book-trailers', },
            { title: 'Meditation Videos', link: '/categories/video-animation/meditation-videos', },
            { title: 'Real Estate Promos', link: '/categories/video-animation/real-estate-promos', },
            { title: 'Game Trailers', link: '/categories/video-animation/game-trailers', },
            { title: 'Product Photography', link: '/categories/video-animation/product-photography', },
            { title: 'Local Photography', link: '/categories/video-animation/local-photographers', },
            { title: 'Video Advice', link: '/categories/video-animation/video-advice', },
            { title: 'Other', link: '/categories/video-animation/video-services', },
            { title: 'All in Video & Animation', link: '/categories/video-animation', },
        ]
    }, {
        link: '/categories/music-audio?source=category_tree',
        title: 'Music & Audio',
        child: [
            { title: 'Voice Over', link: '/categories/music-audio/voice-overs', },
            { title: 'Mixing & Mastering', link: '/categories/music-audio/mixing-mastering', },
            { title: 'Producers & Composers', link: '/categories/music-audio/producers-composers', },
            { title: 'Singers & Vocalists', link: '/categories/music-audio/singers-vocalists', },
            { title: 'Session Musicians', link: '/categories/music-audio/session-musicians', },
            { title: 'Songwriters', link: '/categories/music-audio/songwriters', },
            { title: 'Beat Making', link: '/categories/music-audio/beat-making', },
            { title: 'Online Music Lessons', link: '/categories/music-audio/online-music-lessons', },
            { title: 'Podcast Editing', link: '/categories/music-audio/podcast-editing', },
            { title: 'Audiobook Production', link: '/categories/music-audio/audiobook-production', },
            { title: 'Audio Ads Production', link: '/categories/music-audio/audio-ads-production', },
            { title: 'Sound Design', link: '/categories/music-audio/sound-design', },
            { title: 'Dialogue Editing', link: '/categories/music-audio/dialogue-editing', },
            { title: 'Music Transcription', link: '/categories/music-audio/music-transcription', },
            { title: 'Vocal Tuning', link: '/categories/music-audio/vocal-tuning', },
            { title: 'DJ Drops & Tags', link: '/categories/music-audio/dj-drops-tags', },
            { title: 'DJ Mixing', link: '/categories/music-audio/dj-mixing', },
            { title: 'Remixing & Mashups', link: '/categories/music-audio/remixing-mashups', },
            { title: 'Synth Presets', link: '/categories/music-audio/synth-presets', },
            { title: 'Meditation Music', link: '/categories/music-audio/meditation-music', },
            { title: 'Jingles & Intros', link: '/categories/music-audio/jingles-intros', },
            { title: 'Audio Logo & Sonic Branding', link: '/categories/music-audio/audio-logo-sonic-branding', },
            { title: 'Music & Audio Advice', link: '/categories/music-audio/advice', },
            { title: 'Other', link: '/categories/music-audio/music-audio-services', },
            { title: 'All in Music & Audio', link: '/categories/music-audio', },
        ]
    }, {
        link: '/categories/programming-tech?source=category_tree',
        title: 'Programming & Tech',
        child: [
            { title: 'WordPress', link: '/categories/programming-tech/wordpress-services', },
            { title: 'Website Builders & CMS', link: '/categories/programming-tech/web-cms-services', },
            { title: 'Game Development', link: '/categories/programming-tech/game-development', },
            { title: 'Development for Streamers', link: '/categories/programming-tech/development-for-streamers', },
            { title: 'Web Programming', link: '/categories/programming-tech/web-programming-services', },
            { title: 'E-Commerce Development', link: '/categories/programming-tech/ecommerce-services', },
            { title: 'Mobile Apps', link: '/categories/programming-tech/mobile-app-services', },
            { title: 'Desktop Applications', link: '/categories/programming-tech/desktop-app-services', },
            { title: 'Blockchain & Cryptocurrency', link: '/categories/programming-tech/blockchain-cryptocurrency', },
            { title: 'NFT Development', link: '/categories/programming-tech/nft-development', },
            { title: 'Electronics Engineering', link: '/categories/programming-tech/electronics-engineering', },
            { title: 'Cybersecurity & Data Protection', link: '/categories/programming-tech/cybersecurity-data-protection', },
            { title: 'Support & IT', link: '/categories/programming-tech/support-it-services', },
            { title: 'Online Coding Lessons', link: '/categories/programming-tech/online-coding-lessons', },
            { title: 'Chatbots', link: '/categories/programming-tech/chatbots', },
            { title: 'Convert Files', link: '/categories/programming-tech/file-conversion-services', },
            { title: 'User Testing', link: '/categories/programming-tech/user-testing-services', },
            { title: 'QA & Review', link: '/categories/programming-tech/qa-services', },
            { title: 'Other', link: '/categories/programming-tech/programming-services', },
            { title: 'Website Development', link: '/categories/programming-tech/website-development', },
            { title: 'All in Programming & Tech', link: '/categories/programming-tech', },
        ]
    }, {
        link: '/categories/Data?source=category_tree',
        title: 'Data',
        child: [
            { title: 'Databases', link: '/categories/data/databases', },
            { title: 'Data Processing', link: '/categories/data/data-processing', },
            { title: 'Data Engineering', link: '/categories/data/data-engineering', },
            { title: 'Data Analytics', link: '/categories/data/data-analytics', },
            { title: 'Data Visualization', link: '/categories/data/data-visualization', },
            { title: 'Data Science', link: '/categories/data/data-science', },
            { title: 'Data Entry', link: '/categories/data/data-entry', },
            { title: 'Other', link: '/categories/data/data-services', },
            { title: 'All in Data', link: '/categories/data', },
        ]
    }, {
        link: '/categories/business?source=category_tree',
        title: 'Business',
        child: [
            { title: 'Sales', link: '/categories/business/sales', },
            { title: 'Virtual Assistant', link: '/categories/business/virtual-assistant-services', },
            { title: 'Market Research', link: '/categories/business/market-research-reports', },
            { title: 'Business Plans', link: '/categories/business/business-plans', },
            { title: 'Customer Care', link: '/categories/business/customer-care', },
            { title: 'Project Management', link: '/categories/business/project-management', },
            { title: 'HR Consulting', link: '/categories/business/hr-consulting', },
            { title: 'E-Commerce Management', link: '/categories/business/ecommerce-management', },
            { title: 'Event Management', link: '/categories/business/event-management', },
            { title: 'Legal Consulting', link: '/categories/business/legal-consulting-services', },
            { title: 'Financial Consulting', link: '/categories/business/financial-consulting-services', },
            { title: 'Business Consulting', link: '/categories/business/business-tips', },
            { title: 'Supply Chain Management', link: '/categories/business/supply-chain-management', },
            { title: 'Presentations', link: '/categories/business/online-presentations', },
            { title: 'Career Counseling', link: '/categories/business/career-counseling', },
            { title: 'Game Concept Design', link: '/categories/business/game-concept', },
            { title: 'Flyer Distribution', link: '/categories/business/flyer-distribution', },
            { title: 'Other', link: '/categories/business/business-services', },
            { title: 'All in Business', link: '/categories/business', },
        ]
    }, {
        link: '/categories/lifestyle?source=category_tree',
        title: 'Lifestyle',
        child: [
            { title: 'Gaming', link: '/categories/lifestyle/gaming', },
            { title: 'Online Tutoring', link: '/categories/lifestyle/online-tutoring', },
            { title: 'Life Coaching', link: '/categories/lifestyle/life-coaching', },
            { title: 'Astrology & Psychics', link: '/categories/lifestyle/astrology-psychics', },
            { title: 'Modeling & Acting', link: '/categories/lifestyle/modeling-acting', },
            { title: 'Fitness Lessons', link: '/categories/lifestyle/fitness-lessons', },
            { title: 'Dance Lessons', link: '/categories/lifestyle/dance-lessons', },
            { title: 'Personal Stylists', link: '/categories/lifestyle/personal-stylists', },
            { title: 'Cooking Lessons', link: '/categories/lifestyle/cooking-lessons', },
            { title: 'Craft Lessons', link: '/categories/lifestyle/craft-lessons', },
            { title: 'Arts & Crafts', link: '/categories/lifestyle/arts-crafts-gifts', },
            { title: 'Wellness', link: '/categories/lifestyle/wellness', },
            { title: 'Family & Genealogy', link: '/categories/lifestyle/family-genealogy', },
            { title: 'Greeting Cards & Videos', link: '/categories/lifestyle/greeting-cards-videos-online', },
            { title: 'Your Message On...', link: '/categories/lifestyle/promote-your-message', },
            { title: 'Collectibles', link: '/categories/lifestyle/collectibles', },
            { title: 'Traveling', link: '/categories/lifestyle/traveling', },
            { title: 'Other', link: '/categories/lifestyle/lifestyle-services', },
            { title: 'All in Lifestyle', link: '/categories/lifestyle', },
        ]
    },
];
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
        link: 'https://workspace.fiverr.com/?utm_source=fiverr&utm_medium=marketing_site&utm_content=menu_visitor'
    }
];
const Home = {
    title: 'Home',
    link: '/?source=side_navigation'
}
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

export const MobileMenu = () => {
    const [MenuEL, setMenuEL] = useState(null);
    const MenuOpen = Boolean(MenuEL);

    const [CatState, SetCatState] = useState(false);
    const [ExploreState, SetExploreState] = useState(false);
    const [LanguageState, SetLanguageState] = useState(false);
    const [costState, SetcostState] = useState(false);

    const [coostSel, SetcostSel] = useState(0);
    const [LanguageSel, SetLanguageSel] = useState(0);

    return (
        <>
            <MenuIcon className="mobile-menu" onClick={(e) => { setMenuEL(e.target); }} />
            <Menu
                className='Mobile-menu-items'
                anchorEl={MenuEL}
                open={MenuOpen}
                onClose={() => { setMenuEL(null); }}
                PaperProps={{
                    'aria-labelledby': 'lock-button',
                    role: 'listbox',
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 0,
                        top: '0px !important',
                        left: '0px !important',
                        backgroundColor: 'unset',
                        '& .MuiList-root': {
                            padding: '0px'
                        }
                    },
                }}
            >
                <Box className='Mobile-menu-containner'>
                    <Box className='sidbar-header'>
                        <Box className='JoinFiverr'>
                            Join Fiverr
                        </Box>
                    </Box>
                    <Box className='sidebar-menu'>
                        <Box className='menu-item' onClick={() => { setMenuEL(null); }}>
                            <Link to={`/login?source=side_navigations`}>
                                <Typography>Sign in</Typography>
                            </Link>
                        </Box>
                        <Box className='menu-item' onClick={(e) => { SetCatState(!CatState); }}>
                            <Typography>Browse Categories</Typography>
                            {CatState ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </Box>
                        {
                            CatState ?
                                <Box className='child-items-wrap'>
                                    {
                                        CategoriesInfo.map((item, index) => {
                                            return (
                                                <CategoriesChildItems item={item} menuEL={setMenuEL} key={index} />
                                            )
                                        })
                                    }
                                </Box>
                                : <></>
                        }


                        <Box className='menu-item' onClick={(e) => { SetExploreState(!ExploreState); }}>
                            <Typography>Explore</Typography>
                            {ExploreState ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </Box>
                        {
                            ExploreState ?
                                <Box className='child-items-wrap'>
                                    {
                                        Explore.map((item, index) => {
                                            return (
                                                <Box className='child-item' key={index} onClick={() => { setMenuEL(null); }}>
                                                    <Link to={item.link}>
                                                        <Typography>
                                                            {item.header}
                                                        </Typography>
                                                    </Link>
                                                </Box>
                                            )
                                        })
                                    }
                                </Box>
                                : <></>
                        }

                        <Box className='menu-item Fiverr-item' onClick={() => { setMenuEL(null); }}>
                            <Link to={`business?source=side_navigation`}>
                                <Typography>Fiverr Business</Typography>
                            </Link>
                        </Box>

                        <Box className='General-item'>
                            <Typography>General</Typography>
                        </Box>
                        <Box className='menu-item' onClick={() => { setMenuEL(null); }}>
                            <Link to={`/login?source=side_navigations`}>
                                <Typography>Home</Typography>
                            </Link>
                        </Box>
                        <Box className='menu-item' onClick={(e) => { SetLanguageState(!LanguageState); }}>
                            <Typography>{Language.child[LanguageSel].header} {Language.icon}</Typography>
                            {LanguageState ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </Box>
                        {
                            LanguageState ?
                                <Box className='child-items-wrap check-item-menu'>
                                    {
                                        Language.child.map((item, index) => {
                                            return (
                                                <Box className='child-item' key={index} onClick={() => { setMenuEL(null); }}>
                                                    <Box className='checkicon' >
                                                        {
                                                            LanguageSel == index ?
                                                                <CheckIcon /> : <></>
                                                        }
                                                    </Box>
                                                    <Typography onClick={() => { SetLanguageSel(index); }}>
                                                        {`${item.header}`}
                                                    </Typography>
                                                </Box>
                                            )
                                        })
                                    }
                                </Box>
                                : <></>
                        }

                        <Box className='menu-item' onClick={(e) => { SetcostState(!costState); }}>
                            <Typography>{costlist[coostSel].cost_unit}</Typography>
                            {costState ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </Box>
                        {
                            costState ?
                                <Box className='child-items-wrap check-item-menu'>
                                    {
                                        costlist.map((item, index) => {
                                            return (
                                                <Box className='child-item' key={index} onClick={() => { setMenuEL(null); }}>
                                                    <Box className='checkicon' >
                                                        {
                                                            coostSel == index ?
                                                                <CheckIcon /> : <></>
                                                        }
                                                    </Box>
                                                    <Typography onClick={() => { SetcostSel(index) }}>
                                                        {`${item.cost_unit} - ${item.simbol}`}
                                                    </Typography>
                                                </Box>
                                            )
                                        })
                                    }
                                </Box>
                                : <></>
                        }

                    </Box>
                </Box>
            </Menu>
        </>
    )
};

export const CategoriesChildItems = ({ item, menuEL }) => {
    const [openState, SetopenState] = useState(false);
    return (
        <>
            <Box className='child-item' onClick={() => { SetopenState(!openState) }}>
                <Typography>{item.title}</Typography>
                {openState ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </Box>
            {
                openState ?
                    <Box className='child-items-wrap'>
                        {item.child.map((item2, index2) => {
                            return (
                                <Box className='child-item' key={index2} onClick={() => { menuEL(null) }}>
                                    <Link to={item2.title}>
                                        <Typography>{item2.title}</Typography>
                                    </Link>
                                </Box>
                            )
                        })}
                    </Box> : <></>
            }
        </>
    )
}