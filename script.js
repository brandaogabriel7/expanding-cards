const PANEL_CLASS = 'panel';
const ACTIVE_CLASS = 'active';

const panels = document.querySelectorAll(`.${PANEL_CLASS}`);

const makeFirstPanelActive = () => {
  panels[0].classList.add(ACTIVE_CLASS);
};

const deactivateCurrentActivePanel = () => {
  const currentActivePanel = document.querySelector(
    `.${PANEL_CLASS}.${ACTIVE_CLASS}`
  );
  currentActivePanel.classList.remove(ACTIVE_CLASS);
};

const setActivePanel = e => {
  const panel = e.currentTarget;
  if (!panel.classList.contains(ACTIVE_CLASS)) {
    deactivateCurrentActivePanel();
    panel.classList.add(ACTIVE_CLASS);
  }
};

const setUpPanelListeners = () => {
  panels.forEach(panel => panel.addEventListener('click', setActivePanel));
};

makeFirstPanelActive();
setUpPanelListeners();
