import React from 'react';

const HeroGraphic: React.FC = () => {
    return (
        <svg
            width="100%"
            viewBox="0 0 520 520"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <g clipPath="url(#clip0_105_2)">
                <rect width="520" height="520" rx="260" fill="#E0F2F1" />
                <path
                    d="M520 260C520 116.406 403.594 0 260 0V0C116.406 0 0 116.406 0 260C0 269.953 0.546875 279.812 1.64062 289.5C12.8906 388.5 97.9688 471.484 195.5 496.187C206.5 498.875 217.875 501.016 229.5 502.547C239.531 503.875 249.719 504.688 260 504.688C314.484 504.688 365.156 486.234 404.109 455.094L520 260Z"
                    fill="#004D40"
                />
                <circle cx="410" cy="410" r="110" fill="#FFC107" />
                <path
                    d="M331.5 540C417.848 540 488 469.848 488 383.5C488 297.152 417.848 227 331.5 227C245.152 227 175 297.152 175 383.5C175 469.848 245.152 540 331.5 540Z"
                    stroke="white"
                    strokeWidth="16"
                />
            </g>
            <defs>
                <clipPath id="clip0_105_2">
                    <rect width="520" height="520" rx="260" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default HeroGraphic;