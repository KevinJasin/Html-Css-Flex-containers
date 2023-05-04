function calculate() {
    let totalHours = 0;
    let freeHours = 0;
  
    const workHours = parseInt(document.getElementById("work-hours").value) || 0;
    const studyHours = parseInt(document.getElementById("study-hours").value) || 0;
    const sleepHours = parseInt(document.getElementById("sleep-hours").value) || 0;
    const gamingHours = parseInt(document.getElementById("gaming-hours").value) || 0;
    const schoolHours = parseInt(document.getElementById("school-hours").value) || 0;
    const hobbyHours = parseInt(document.getElementById("hobby-hours").value) || 0;
    const eatHours = parseInt(document.getElementById("eat-hours").value) || 0;
  
    totalHours = workHours + studyHours + sleepHours + gamingHours + schoolHours + hobbyHours + eatHours;
    freeHours = 168 - totalHours;
  
    const resultElement = document.getElementById("result");
  
    if (totalHours > 168) {
      resultElement.innerHTML = `You have exceeded the total number of hours in a week!`;
    } else {
      resultElement.innerHTML = `You have ${freeHours} hours free this week!`;
    }
  }
  
