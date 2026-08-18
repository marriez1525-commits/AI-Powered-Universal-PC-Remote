async function checkConnection() {

    const statusText = document.getElementById("status-text");
    const statusIcon = document.getElementById("status-icon");
    const connectionStatus =
        document.getElementById("connection-status");

    try {

        const response = await fetch("/api/status");

        if (!response.ok) {
            throw new Error("Server error");
        }

        const data = await response.json();

        if (data.status === "connected") {

            statusIcon.textContent = "🟢";
            statusText.textContent = "PCPilot is connected";
            connectionStatus.textContent = "🟢 Connected";

        }

    } catch (error) {

        statusIcon.textContent = "🔴";
        statusText.textContent = "Unable to connect";
        connectionStatus.textContent = "🔴 Disconnected";

        console.error(error);
    }
}

checkConnection();