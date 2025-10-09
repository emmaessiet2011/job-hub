import React from 'react';

interface IconProps {
    className?: string;
}

const TrelloIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-4 w-4 ${className || ''}`}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M21 4H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zM11 17H7v-7h4v7zm6 0h-4V7h4v10z" />
  </svg>
);

export default TrelloIcon;