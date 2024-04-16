export * from "./types"
export * from "./supabase_utils"
export * from "./supabase_config"

export function generatePhone() {
    // Generate a random 10-digit number
    const min = 1_000_000_000; // Smallest 10-digit number
    const max = 9_999_999_999; // Largest 10-digit number

    // Generate a random number between min and max (inclusive)
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    return randomNumber;
}


export function generateRandomTime() {
    // Generate a random hour (0-23) and minute (0-59)
    const randomHour = Math.floor(Math.random() * 24);
    const randomMinute = Math.floor(Math.random() * 60);

    // Determine AM/PM and convert to 12-hour format
    const isPM = randomHour >= 12;
    const hour12 = randomHour % 12 || 12; // Convert 24-hour time to 12-hour time

    // Format the minute to always have two digits
    const formattedMinute = String(randomMinute).padStart(2, '0');

    // Determine AM/PM suffix
    const suffix = isPM ? 'PM' : 'AM';

    // Construct the time string in the format "HH:MM AM/PM"
    const timeString = `${hour12}:${formattedMinute} ${suffix}`;

    return timeString;
}

export const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    });
};

