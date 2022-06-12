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


const Share = ({ socialConfig, tags }) => (
    <div className="post-social">
        <FacebookShareButton url={socialConfig.config.url} className="button is-outlined is-rounded facebook" >
            <span className="icon">
                <FontAwesomeIcon icon={['fab', 'facebook-f']} />
            </span>
            <span className="text">Facebook</span>
        </FacebookShareButton>

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