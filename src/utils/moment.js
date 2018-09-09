import moment from 'moment';

export const formatTime = datetime => moment(datetime).format('YYYY-MM-DD HH:mm');
