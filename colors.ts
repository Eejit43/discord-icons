export const colors = {
    'interactive-normal': '215 8.8% 73.3%', // --primary-330
    'channel-icon': '223 5.8% 52.9%', // --primary-400
};

/* 
    Icons that use the default color for standardization purposes:
        - bot
        - folder
        - lock
        - role
        - video
    
    Notes:
        - "image" uses the Media Channel icon as no other image exists
        - "cross" doesn't actually have white in the app, it was added for consistency with "check"
        - "thread" doesn't actually use the channel icon color, this is used for consistency with other channel icons
 */

export const overrides = {
    'announcement-channel': colors['channel-icon'],
    'check': null,
    'cross': null,
    'forum-channel': colors['channel-icon'],
    'media-channel': colors['channel-icon'],
    'owner-crown': '40 86.4% 56.9%',
    'rules-channel': colors['channel-icon'],
    'server-booster': '302 100% 72.5%',
    'stage-channel': colors['channel-icon'],
    'text-channel': colors['channel-icon'],
    'thread': colors['channel-icon'],
    'voice-channel': colors['channel-icon'],
    'warning': null,
} as Record<string, string | null>;
