import moment from "moment";

export function formatTimeStampFull(timestamp: string): string {
    const date = moment(parseInt(timestamp, 10));
    return date.format("h:mm A · MMM D, YYYY");
}
