// To handle votes and results
const votes = {
    "Candidate A": 0,
    "Candidate B": 0,
    "Candidate C": 0,
  };
  
  // Handle voting logic
  if (document.getElementById("voteForm")) {
    document.getElementById("voteForm").addEventListener("submit", (event) => {
      event.preventDefault();
      const selected = document.querySelector('input[name="candidate"]:checked');
      if (selected) {
        votes[selected.value]++;
        alert(`Thank you for voting for ${selected.value}!`);
        window.location.href = "results.html";
      } else {
        alert("Please select a candidate to vote.");
      }
    });
  }
  
  // Display results
  if (document.getElementById("resultsList")) {
    const resultsList = document.getElementById("resultsList");
    for (const candidate in votes) {
      const li = document.createElement("li");
      li.textContent = `${candidate}: ${votes[candidate]} votes`;
      resultsList.appendChild(li);
    }
  }
  