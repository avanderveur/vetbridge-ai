const generateButton = document.getElementById("generateButton");

generateButton.addEventListener("click", function () {
  const branch = document.getElementById("branch").value;
  const militaryRole = document.getElementById("militaryRole").value;
  const yearsServed = document.getElementById("yearsServed").value;
  const mainDuties = document.getElementById("mainDuties").value;
  const leadershipExperience = document.getElementById("leadershipExperience").value;
  const targetJob = document.getElementById("targetJob").value;

  const skillsOutput = document.getElementById("skillsOutput");
  const resumeOutput = document.getElementById("resumeOutput");
  const keywordsOutput = document.getElementById("keywordsOutput");
  const interviewOutput = document.getElementById("interviewOutput");

  if (
    branch === "" ||
    militaryRole === "" ||
    yearsServed === "" ||
    mainDuties === "" ||
    leadershipExperience === "" ||
    targetJob === ""
  ) {
    alert("Please fill out every section before generating your career language.");
    return;
  }

  skillsOutput.innerHTML = `
    <li>Leadership and team support</li>
    <li>Clear communication in structured environments</li>
    <li>Organization and task management</li>
    <li>Problem solving under pressure</li>
    <li>Professional accountability</li>
    <li>Adaptability and attention to detail</li>
  `;

  resumeOutput.innerHTML = `
    <li>Translated experience from ${branch} service as a ${militaryRole} into civilian career skills related to ${targetJob}.</li>
    <li>Managed responsibilities such as ${mainDuties} while maintaining accuracy, discipline, and accountability.</li>
    <li>Applied leadership experience including ${leadershipExperience} to support teamwork, communication, and daily operations.</li>
    <li>Developed strong professional habits through ${yearsServed} of military service, including reliability, adaptability, and mission focused problem solving.</li>
  `;

  keywordsOutput.innerHTML = `
    <li>${targetJob}</li>
    <li>Operations Assistant</li>
    <li>Administrative Support</li>
    <li>Team Coordinator</li>
    <li>Program Support Specialist</li>
    <li>Customer Service Representative</li>
    <li>Office Coordinator</li>
    <li>Veteran Career Transition</li>
  `;

  interviewOutput.textContent =
    "My military experience in the " +
    branch +
    " helped me develop discipline, adaptability, communication, and accountability. As a " +
    militaryRole +
    ", I gained experience with " +
    mainDuties +
    ". I also developed leadership skills through " +
    leadershipExperience +
    ". These experiences prepared me for civilian roles such as " +
    targetJob +
    " because I know how to stay organized, support a team, solve problems, and follow through on responsibilities.";
});