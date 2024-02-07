export function formatTimeStamp(timestamp: string): string {
    const timestampInt = parseInt(timestamp, 10); // Assuming the timestamp is in milliseconds
    const date = new Date(timestampInt);
    return date
        .toISOString()
        .replace(/:\d{2}\.\d{3}Z$/, "")
        .replace("T", " ");
}
