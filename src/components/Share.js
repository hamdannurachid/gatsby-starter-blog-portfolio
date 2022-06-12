import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    FacebookShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    RedditShareButton,
} from 'react-share';

import {
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    HatenaIcon,
    InstapaperIcon,
    LineIcon,
    LinkedinIcon,
    LivejournalIcon,
    MailruIcon,
    OKIcon,
    PinterestIcon,
    PocketIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    ViberIcon,
    VKIcon,
    WeiboIcon,
    WhatsappIcon,
    WorkplaceIcon
} from "react-share";

const Share = ({ socialConfig }) => (
    <div className="post-social flex space-x-4 text-gray-500">

        <FacebookShareButton url={socialConfig.config.url} className="button outline-1 is-rounded facebook" >
            <FacebookIcon size={32} round={true} bgStyle={{ fill: '' }} />

        </FacebookShareButton>
        <TwitterShareButton url={socialConfig.config.url} className="button outline-1 is-rounded facebook" via={`HamdanNur_`}>
            <TwitterIcon size={32} round={true} />

        </TwitterShareButton>

        <LinkedinShareButton url={socialConfig.config.url} className="button outline-1 is-rounded linkedin" title={socialConfig.config.title} >
            <LinkedinIcon size={32} round={true} />

        </LinkedinShareButton>
        <WhatsappShareButton url={socialConfig.config.url} className="button outline-1 is-rounded whatsapp" title={socialConfig.config.title} >

            <WhatsappIcon size={32} round={true} />

        </WhatsappShareButton>
    </div>
);

Share.propTypes = {
    socialConfig: PropTypes.shape({
        // twitterHandle: PropTypes.string.isRequired,
        config: PropTypes.shape({
            url: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        }),
    }).isRequired,
};

export default Share;