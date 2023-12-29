const defaults = {
    'primary-300': '210 9.3% 78.8%',
    'interactive-normal': '215 8.8% 73.3%', // --primary-330
    'channel-icon': '223 5.8% 52.9%', // --primary-400
};

export default {
    'announcement-channel': defaults['channel-icon'],
    'audio-max': defaults['primary-300'],
    bell: defaults['interactive-normal'],
    emoji: defaults['interactive-normal'],
    folder: defaults['interactive-normal'], // Not an actually assigned color
    'owner-crown': '40 86.4% 56.9%',
    pin: defaults['interactive-normal'],
    'rules-channel': defaults['channel-icon'],
    'server-booster': '302 100% 72.5%',
    'stage-channel': defaults['channel-icon'],
    sticker: defaults['interactive-normal'],
    'text-channel': defaults['channel-icon'],
    'voice-channel': defaults['channel-icon'],
    'forum-channel': defaults['channel-icon'],
    warning: null,
    email: defaults['interactive-normal'],
    person: defaults['interactive-normal'],
    role: defaults['interactive-normal'], // Not an actually assigned color
    mention: defaults['interactive-normal'],
    text: defaults['interactive-normal'],
    people: defaults['interactive-normal'],
    location: defaults['interactive-normal'],
    calendar: defaults['interactive-normal'],
    command: defaults['interactive-normal'],
    clock: defaults['interactive-normal'],
    thread: defaults['channel-icon'], // For standardization, uses slightly different colors
} as Record<string, string | null>;
