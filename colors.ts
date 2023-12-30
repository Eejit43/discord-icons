const defaults = {
    'primary-300': '210 9.3% 78.8%',
    'interactive-normal': '215 8.8% 73.3%', // --primary-330
    'channel-icon': '223 5.8% 52.9%', // --primary-400
};

export default {
    'announcement-channel': defaults['channel-icon'],
    'audio-muted': defaults['primary-300'],
    'bell': defaults['interactive-normal'],
    'bot': defaults['interactive-normal'], // For standardization
    'calendar': defaults['interactive-normal'],
    'check': null,
    'clock': defaults['interactive-normal'],
    'command': defaults['interactive-normal'],
    'cross': null, // Doesn't actually use white, added for consistency
    'email': defaults['interactive-normal'],
    'emoji': defaults['interactive-normal'],
    'folder': defaults['interactive-normal'], // Not an actually assigned color
    'forum-channel': defaults['channel-icon'],
    'id': defaults['interactive-normal'],
    'image': defaults['interactive-normal'], // Media channel icon
    'link': defaults['interactive-normal'],
    'location': defaults['interactive-normal'],
    'lock': defaults['interactive-normal'], // For standardization
    'media-channel': defaults['channel-icon'],
    'mention': defaults['interactive-normal'],
    'microphone': defaults['interactive-normal'],
    'more': defaults['interactive-normal'],
    'owner-crown': '40 86.4% 56.9%',
    'people': defaults['interactive-normal'],
    'person': defaults['interactive-normal'],
    'pin': defaults['interactive-normal'],
    'popout': defaults['primary-300'],
    'role': defaults['interactive-normal'], // Not an actually assigned color
    'rules-channel': defaults['channel-icon'],
    'search': defaults['interactive-normal'],
    'server-booster': '302 100% 72.5%',
    'settings': defaults['interactive-normal'],
    'sort': defaults['interactive-normal'],
    'stage-channel': defaults['channel-icon'],
    'sticker': defaults['interactive-normal'],
    'text-channel': defaults['channel-icon'],
    'text': defaults['interactive-normal'],
    'thread': defaults['channel-icon'], // For standardization, uses slightly different colors
    'video': defaults['interactive-normal'], // For standardization
    'voice-channel': defaults['channel-icon'],
    'warning': null,
} as Record<string, string | null>;
