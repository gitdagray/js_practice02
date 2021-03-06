document.getElementById("reloadPage").addEventListener("click", (event) => {
  location.reload();
});

document
  .getElementById("submitButton")
  .addEventListener("click", async (event) => {
    const pass = document.querySelectorAll(".pass").length;
    const total = (tests = document.querySelectorAll(".test").length);
    const percent = Math.round((pass / total) * 100);
    const assignment = document.querySelector("title").textContent.slice(-1);

    const submission = prompt(
      `assignment: ${assignment}\npass: ${pass}\ntotal: ${total}\npercentage: ${percent}%\n\nIf you are ready to submit, please enter your User ID and click ok.`
    );

    if (submission == null || submission == "") return;
    const data = {
      userId: submission.trim(),
      assignment: assignment,
      correct: pass,
      total: total,
      score: percent
    };
    const body = document.getElementsByTagName("body")[0];
    try {
      body.className = "spinner";
      const response = await fetch(
        "https://verdant-waiting-flame.glitch.me/api/users/assignments/add",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }
      );
      const success = await response.json();
      body.classList.remove("spinner");
      if (response.ok) {
        alert(
          "Success! Your assignment is submitted.\nIf you want to update your score, you can resubmit. The last score you submit will be counted for your grade.\n\nYour score: " +
            success.score
        );
      } else {
        alert(
          "There was a problem with your submission.\nMaybe typo in User ID?"
        );
      }
    } catch (err) {
      body.classList.remove("spinner");
      alert(
        "There has been an error. Please check the console log in dev tools"
      );
      console.log(err);
    }
  });
