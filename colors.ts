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
        - "error" doesn't actually exist, it is simply a recolored version of "warning"
        - "image" doesn't actually exist, it is simply a recolored version of "media-channel"
        - "cross" doesn't actually have white in the app, it was added for consistency with "check"
        - "thread" doesn't actually use the "channel-icon" color, this is used for consistency with other channel icons
        - "flag" doesn't actually use the "interactive-normal" color, this is for consistency with other emojis
        - "flag" doesn't actually use the "interactive-normal" color, this is for consistency with other emojis
        - "text-channel-nsfw" uses the "interactive-normal" color instead of the "channel-icon" color for consistency with other emojis where it is used
 */

export const overrides = {
    'announcement-channel': colors['channel-icon'],
    'check': false,
    'cross': false,
    'error': false,
    'forum-channel': colors['channel-icon'],
    'media-channel': colors['channel-icon'],
    'owner-crown': '40 86.4% 56.9%',
    'ping-green': '145 65% 39.2%',
    'rules-channel': colors['channel-icon'],
    'server-booster': '302 100% 72.5%',
    'stage-channel': colors['channel-icon'],
    'text-channel': colors['channel-icon'],
    'thread': colors['channel-icon'],
    'voice-channel': colors['channel-icon'],
    'warning': false,
} as Record<string, string | false>;
