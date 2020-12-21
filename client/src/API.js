// const API_URL = "http://localhost:1337";
const API_URL = "http://travel-log.com";

export async function listTeamEntries() {
    const response = await fetch(`${API_URL}/api/teams`);
    return response.json();
}

export async function listLogEntries() {
    const response = await fetch(`${API_URL}/api/logs`);
    return response.json();
}

export async function createLogEntries(entry) {
    const response = await fetch(`${API_URL}/api/logs`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(entry),
    });
    return response.json();
}

export async function getLoginUrl() {
    const response = await fetch(`${API_URL}/api/login`);
    return response.json();
    // fetch(`${API_URL}/api/login`);
}
