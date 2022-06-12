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



const Share = ({ socialConfig }) => (
    <div className="post-social flex space-x-4 text-gray-500">
        <FacebookShareButton url={socialConfig.config.url} className="button outline-1 is-rounded facebook" >
            <span className="sr-only">Facebook</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
            </svg>
        </FacebookShareButton>
        <TwitterShareButton url={socialConfig.config.url} className="button outline-1 is-rounded facebook" >
            <span className="sr-only">Twitter</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
        </TwitterShareButton>

        <LinkedinShareButton url={socialConfig.config.url} className="button outline-1 is-rounded linkedin" title={socialConfig.config.title} >
            <span className="sr-only">LinkedIn</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.30512 8.85279H12.9572V10.6719C13.4833 9.62569 14.8324 8.68563 16.859 8.68563C20.7441 8.68563 21.6665 10.7683 21.6665 14.5895V21.6665H17.7332V15.4598C17.7332 13.2837 17.2071 12.0565 15.8678 12.0565C14.0103 12.0565 13.2384 13.379 13.2384 15.4588V21.6665H9.30512V8.85279V8.85279ZM2.5605 21.4993H6.4938V8.68563H2.5605V21.4993V21.4993ZM7.05724 4.50748C7.05739 4.83716 6.992 5.16359 6.86489 5.46778C6.73778 5.77198 6.55147 6.04787 6.3168 6.27943C5.84126 6.75204 5.19759 7.01658 4.52715 7.01496C3.85788 7.01451 3.2157 6.75064 2.73946 6.28042C2.50564 6.04807 2.31996 5.77186 2.19307 5.46763C2.06618 5.1634 2.00057 4.83711 2 4.50748C2 3.84177 2.2655 3.20457 2.74044 2.73454C3.21626 2.26369 3.85872 1.99971 4.52813 2C5.19876 2 5.84185 2.26451 6.3168 2.73454C6.79076 3.20457 7.05724 3.84177 7.05724 4.50748Z" />
            </svg>
        </LinkedinShareButton>
        <WhatsappShareButton url={socialConfig.config.url} className="button outline-1 is-rounded whatsapp" title={socialConfig.config.title} >

            <span className="sr-only">WhatsApp</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.6538 7.15092C16.9613 2.99986 11.4639 1.76576 7.20066 4.34615C3.0496 6.92654 1.70331 12.5361 4.39589 16.6871L4.62028 17.0237L3.72275 20.3894L7.08847 19.4919L7.42505 19.7163C8.88353 20.5016 10.4542 20.9504 12.0249 20.9504C13.7077 20.9504 15.3906 20.5016 16.8491 19.6041C21.0001 16.9115 22.2342 11.4142 19.6538 7.15092V7.15092ZM17.2978 15.7896C16.8491 16.4628 16.2881 16.9115 15.5028 17.0237C15.054 17.0237 14.4931 17.2481 12.2493 16.3506C10.342 15.453 8.77134 13.9946 7.64943 12.3117C6.97628 11.5264 6.63971 10.5166 6.52752 9.50693C6.52752 8.60941 6.86409 7.82407 7.42505 7.26312C7.64943 7.03873 7.87381 6.92654 8.09819 6.92654H8.65915C8.88353 6.92654 9.10791 6.92654 9.2201 7.37531C9.44448 7.93626 10.0054 9.28255 10.0054 9.39474C10.1176 9.50693 10.1176 9.73131 10.0054 9.8435C10.1176 10.0679 10.0054 10.2923 9.89325 10.4045C9.78105 10.5166 9.66886 10.741 9.55667 10.8532C9.33229 10.9654 9.2201 11.1898 9.33229 11.4142C9.78105 12.0873 10.342 12.7605 10.903 13.3214C11.5761 13.8824 12.2493 14.3311 13.0346 14.6677C13.259 14.7799 13.4834 14.7799 13.5955 14.5555C13.7077 14.3311 14.2687 13.7702 14.4931 13.5458C14.7175 13.3214 14.8296 13.3214 15.054 13.4336L16.8491 14.3311C17.0735 14.4433 17.2978 14.5555 17.41 14.6677C17.5222 15.0043 17.5222 15.453 17.2978 15.7896V15.7896Z" />
            </svg>


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