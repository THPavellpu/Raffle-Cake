document.addEventListener("DOMContentLoaded", function() {
    const submitEntryBtn = document.getElementById("submitEntry");
    const drawButton = document.getElementById("drawButton");
    const participantsList = document.getElementById("participants");
    const winnerDisplay = document.getElementById("winner");

    // Array to store participants
    let participants = [];

    // Event listener for submitting an entry
    submitEntryBtn.addEventListener("click", function() {
        const participantName = document.getElementById("participantName").value;
        if (participantName.trim() !== "") {
            participants.push(participantName);
            displayParticipants();
            document.getElementById("participantName").value = ""; // Clear the input field
        }
    });

    // Event listener for drawing the winner
    drawButton.addEventListener("click", function() {
        const winner = drawWinner();
        displayWinner(winner);
    });

    // Function to display participants in the list
    function displayParticipants() {
        participantsList.innerHTML = ""; // Clear the previous list
        participants.forEach(function(participant) {
            const li = document.createElement("li");
            li.textContent = participant;
            participantsList.appendChild(li);
        });
    }

    // Function to draw a random winner
    function drawWinner() {
        if (participants.length === 0) {
            return "No participants yet";
        } else {
            const randomIndex = Math.floor(Math.random() * participants.length);
            return participants[randomIndex];
        }
    }

    // Function to display the winner
    function displayWinner(winner) {
        winnerDisplay.innerHTML = `<p>${winner} wins! 🎉🍰</p>`;
    }
});
