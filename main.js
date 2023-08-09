const modeToggleSwitch = document.querySelector('.mode-switch-icon');
/*const elements = document.querySelectorAll(`.main-container, .border-panel, .dashboard-menu, .admin-bar,
        .project-tile, .project-title, .side-content-tile, .project-info, .announcement-content,
        .usertag, .admin-btn, .fav-project, .watch-project, .share-project, .notification-icon`);
*/

const mainContainer = document.querySelector('.main-container');
const dashboardMenu = document.querySelector('.dashboard-menu');
const adminBar = document.querySelector('.admin-bar');
const notificationIcon = document.querySelector('.notification-icon');

const borderPanel = document.querySelectorAll('.border-panel');
const projectTile = document.querySelectorAll('.project-tile');
const projectTitle = document.querySelectorAll('.project-title');
const sideContentTile = document.querySelectorAll('.side-content-tile');
const projectInfo = document.querySelectorAll('.project-info');
const announcementContent = document.querySelectorAll('.announcement-content');
const usertag = document.querySelectorAll('.usertag');
const adminBtn = document.querySelectorAll('.admin-btn');
const favProject = document.querySelectorAll('.fav-project');
const watchProject = document.querySelectorAll('.watch-project');
const shareProject = document.querySelectorAll('.share-project');

modeToggleSwitch.addEventListener('click', toggleMode);

function toggleMode(evt){
    console.log('click');
    console.log(evt.target);
    if(evt.target.matches(".dark-mode-switch-icon")){
        removeDarkMode();
    }else{
        addDarkMode();
    }
};

function addDarkMode() {
    modeToggleSwitch.classList.add('dark-mode-switch-icon');

    mainContainer.classList.add('dark-mode-main-container');
    dashboardMenu.classList.add('dark-mode-dashboard-menu');
    adminBar.classList.add('dark-mode-admin-bar');
    notificationIcon.classList.add('dark-mode-notification-icon');

    borderPanel.forEach((bPanel) => {
        bPanel.classList.add('dark-mode-border-panel');
    });
    projectTile.forEach((pTile)=>{
        pTile.classList.add('dark-mode-project-tile');
    });
    projectTitle.forEach((pTitle) => {
        pTitle.classList.add('dark-mode-project-title');
    });
    sideContentTile.forEach((sideCTile) => {
        sideCTile.classList.add('dark-mode-side-content-tile');
    });
    projectInfo.forEach((pInfo) => {
        pInfo.classList.add('dark-mode-project-info');
    });
    announcementContent.forEach((aContent) => {
        aContent.classList.add('dark-mode-announcement-content');
    });
    usertag.forEach((uTag) => {
        uTag.classList.add('dark-mode-usertag');
    });
    adminBtn.forEach((aBtn) => {
        aBtn.classList.add('dark-mode-admin-btn');
    });
    favProject.forEach((fProj) => {
        fProj.classList.add('dark-mode-fav-project');
    });
    watchProject.forEach((wProj) => {
        wProj.classList.add('dark-mode-watch-project');
    });
    shareProject.forEach((sProj) => {
        sProj.classList.add('dark-mode-share-project');
    });
};

function removeDarkMode(){
    modeToggleSwitch.classList.remove('dark-mode-switch-icon');

    mainContainer.classList.remove('dark-mode-main-container');
    dashboardMenu.classList.remove('dark-mode-dashboard-menu');
    adminBar.classList.remove('dark-mode-admin-bar');
    notificationIcon.classList.remove('dark-mode-notification-icon');

    borderPanel.forEach((bPanel) => {
        bPanel.classList.remove('dark-mode-border-panel');
    });
    projectTile.forEach((pTile)=>{
        pTile.classList.remove('dark-mode-project-tile');
    });
    projectTitle.forEach((pTitle) => {
        pTitle.classList.remove('dark-mode-project-title');
    });
    sideContentTile.forEach((sideCTile) => {
        sideCTile.classList.remove('dark-mode-side-content-tile');
    });
    projectInfo.forEach((pInfo) => {
        pInfo.classList.remove('dark-mode-project-info');
    });
    announcementContent.forEach((aContent) => {
        aContent.classList.remove('dark-mode-announcement-content');
    });
    usertag.forEach((uTag) => {
        uTag.classList.remove('dark-mode-usertag');
    });
    adminBtn.forEach((aBtn) => {
        aBtn.classList.remove('dark-mode-admin-btn');
    });
    favProject.forEach((fProj) => {
        fProj.classList.remove('dark-mode-fav-project');
    });
    watchProject.forEach((wProj) => {
        wProj.classList.remove('dark-mode-watch-project');
    });
    shareProject.forEach((sProj) => {
        sProj.classList.remove('dark-mode-share-project');
    });
};