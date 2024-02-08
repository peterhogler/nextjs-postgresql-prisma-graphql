import moment from "moment";

export function formatTimeStamp(timestamp: string): string {
    const now = moment();
    const date = moment(parseInt(timestamp, 10));
    const diffMinutes = now.diff(date, "minutes");
    const diffHours = now.diff(date, "hours");
    const diffDays = now.diff(date, "days");

    if (diffMinutes < 60) {
        return `Just Now`;
    } else if (diffHours < 24) {
        return `${diffHours}h`;
    } else if (diffDays < 365 || now.year() === date.year()) {
        return date.format("MMM DD");
    } else {
        return date.format("MMM DD - YYYY");
    }
}
