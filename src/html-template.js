const generateTeam = (team) => {

    const generateManager = (manager) => {
        return `<div class="bxs-01 f-1 m">
    <div class="bgc-blue c-white fz-18 p">
    <div class="fw-600">${manager.getName()}</div>
    <div class="ai-c d-f mt--">
        <svg aria-hidden="true" focusable="false" class="h-24 w-24" role="img"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path class="f-white"
                d="M127.1 146.5c1.3 7.7 8 13.5 16 13.5h16.5c9.8 0 17.6-8.5 16.3-18-3.8-28.2-16.4-54.2-36.6-74.7-14.4-14.7-23.6-33.3-26.4-53.5C111.8 5.9 105 0 96.8 0H80.4C70.6 0 63 8.5 64.1 18c3.9 31.9 18 61.3 40.6 84.4 12 12.2 19.7 27.5 22.4 44.1zm112 0c1.3 7.7 8 13.5 16 13.5h16.5c9.8 0 17.6-8.5 16.3-18-3.8-28.2-16.4-54.2-36.6-74.7-14.4-14.7-23.6-33.3-26.4-53.5C223.8 5.9 217 0 208.8 0h-16.4c-9.8 0-17.5 8.5-16.3 18 3.9 31.9 18 61.3 40.6 84.4 12 12.2 19.7 27.5 22.4 44.1zM400 192H32c-17.7 0-32 14.3-32 32v192c0 53 43 96 96 96h192c53 0 96-43 96-96h16c61.8 0 112-50.2 112-112s-50.2-112-112-112zm0 160h-16v-96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48z">
            </path>
        </svg>
        <div class="ml--">${manager.getRole()}</div>
    </div>
    </div>
    <div class="p">
        <div class="bdc-gray bdls-s bdrs-s bdts-s bdw-1 p-">id: ${manager.getId()}</div>
        <div class="bdc-gray bdls-s bdrs-s bdts-s bdw-1 p-">email: ${manager.getEmail()}</div>
        <div class="bdc-gray bdbs-s bdls-s bdrs-s bdts-s bdw-1 p-">office number: ${manager.getOfficeNumber()}</div>
    </div>
    </div>`;
    };

    const generateEngineer = (engineer) => {
        return `<div class="bxs-01 f-1 m">
    <div class="bgc-blue c-white fz-18 p">
    <div class="fw-600">${engineer.getName()}</div>
    <div class="ai-c d-f mt--">
        <svg aria-hidden="true" focusable="false" class="h-24 w-24" role="img"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path class="f-white"
                d="M574.1 280.37L528.75 98.66c-5.91-23.7-21.59-44.05-43-55.81-21.44-11.73-46.97-14.11-70.19-6.33l-15.25 5.08c-8.39 2.79-12.92 11.86-10.12 20.24l5.06 15.18c2.79 8.38 11.85 12.91 20.23 10.12l13.18-4.39c10.87-3.62 23-3.57 33.16 1.73 10.29 5.37 17.57 14.56 20.37 25.82l38.46 153.82c-22.19-6.81-49.79-12.46-81.2-12.46-34.77 0-73.98 7.02-114.85 26.74h-73.18c-40.87-19.74-80.08-26.75-114.86-26.75-31.42 0-59.02 5.65-81.21 12.46l38.46-153.83c2.79-11.25 10.09-20.45 20.38-25.81 10.16-5.3 22.28-5.35 33.15-1.73l13.17 4.39c8.38 2.79 17.44-1.74 20.23-10.12l5.06-15.18c2.8-8.38-1.73-17.45-10.12-20.24l-15.25-5.08c-23.22-7.78-48.75-5.41-70.19 6.33-21.41 11.77-37.09 32.11-43 55.8L1.9 280.37A64.218 64.218 0 0 0 0 295.86v70.25C0 429.01 51.58 480 115.2 480h37.12c60.28 0 110.37-45.94 114.88-105.37l2.93-38.63h35.75l2.93 38.63C313.31 434.06 363.4 480 423.68 480h37.12c63.62 0 115.2-50.99 115.2-113.88v-70.25c0-5.23-.64-10.43-1.9-15.5zm-370.72 89.42c-1.97 25.91-24.4 46.21-51.06 46.21H115.2C86.97 416 64 393.62 64 366.11v-37.54c18.12-6.49 43.42-12.92 72.58-12.92 23.86 0 47.26 4.33 69.93 12.92l-3.13 41.22zM512 366.12c0 27.51-22.97 49.88-51.2 49.88h-37.12c-26.67 0-49.1-20.3-51.06-46.21l-3.13-41.22c22.67-8.59 46.08-12.92 69.95-12.92 29.12 0 54.43 6.44 72.55 12.93v37.54z">
            </path>
        </svg>
        <div class="ml--">${engineer.getRole()}</div>
    </div>
    </div>
    <div class="p">
        <div class="bdc-gray bdls-s bdrs-s bdts-s bdw-1 p-">id: ${engineer.getId()}</div>
        <div class="bdc-gray bdls-s bdrs-s bdts-s bdw-1 p-">email: ${engineer.getEmail()}</div>
        <div class="bdc-gray bdbs-s bdls-s bdrs-s bdts-s bdw-1 p-">github: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></div>
    </div>
    </div>`;
    };

    const generateIntern = (intern) => {
        return `<div class="bxs-01 f-1 m">
    <div class="bgc-blue c-white fz-18 p">
    <div class="fw-600">${intern.getName()}</div>
    <div class="ai-c d-f mt--">
        <svg aria-hidden="true" focusable="false" class="h-24 w-24" role="img"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path class="f-white"
                d="M319.4 320.6L224 416l-95.4-95.4C57.1 323.7 0 382.2 0 454.4v9.6c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-9.6c0-72.2-57.1-130.7-128.6-133.8zM13.6 79.8l6.4 1.5v58.4c-7 4.2-12 11.5-12 20.3 0 8.4 4.6 15.4 11.1 19.7L3.5 242c-1.7 6.9 2.1 14 7.6 14h41.8c5.5 0 9.3-7.1 7.6-14l-15.6-62.3C51.4 175.4 56 168.4 56 160c0-8.8-5-16.1-12-20.3V87.1l66 15.9c-8.6 17.2-14 36.4-14 57 0 70.7 57.3 128 128 128s128-57.3 128-128c0-20.6-5.3-39.8-14-57l96.3-23.2c18.2-4.4 18.2-27.1 0-31.5l-190.4-46c-13-3.1-26.7-3.1-39.7 0L13.6 48.2c-18.1 4.4-18.1 27.2 0 31.6z">
            </path>
        </svg>
        <div class="ml--">${intern.getRole()}</div>
    </div>
    </div>
    <div class="p">
        <div class="bdc-gray bdls-s bdrs-s bdts-s bdw-1 p-">id: ${intern.getId()}</div>
        <div class="bdc-gray bdls-s bdrs-s bdts-s bdw-1 p-">email: ${intern.getEmail()}</div>
        <div class="bdc-gray bdbs-s bdls-s bdrs-s bdts-s bdw-1 p-">school: ${intern.getSchool()}</div>
    </div>
    </div>`;
    };

    const html = [];
    html.push(team.filter(employee => employee.getRole() === 'Manager').map(manager => generateManager(manager)));
    html.push(team.filter(employee => employee.getRole() === 'Engineer').map(engineer => generateEngineer(engineer)).join(''));
    html.push(team.filter(employee => employee.getRole() === 'Intern').map(intern => generateIntern(intern)).join(''));

    return html.join('');
}

module.exports = (team) => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./main.css">
    <title>The Team</title>
</head>
<body>
    <!-- header of the team -->
    <header class="bgc-tomato c-white d-f fz-24 jc-c p">My Team</header>
    <!-- team cards -->
    <section class="d-f fw-w jc-c mt+">
        ${generateTeam(team)}
    </section>
</body>
</html>`;
}