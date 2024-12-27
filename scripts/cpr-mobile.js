
import CPRCharacterActorMobileSheet from "./sheets/cpr-character-sheet-mobile.js"
import {initDragListener} from "./drag.js"

function enableMobileSheets() {
  DocumentSheetConfig.updateDefaultSheets({ Actor: {character: "cyberpunk-red-core.CPRCharacterActorMobileSheet" } });
  initDragListener();
  console.log("CPR-Mobile | Enable Mobile Sheets");
}

function disableMobileSheets() {
  DocumentSheetConfig.updateDefaultSheets({ Actor: {character: "cyberpunk-red-core.CPRCharacterActorSheet"} });
  console.log("CPR-Mobile | Disable Mobile Sheets");
}

Hooks.on("init", function() {
  Actors.registerSheet(game.system.id, CPRCharacterActorMobileSheet, {
    label: "Character Sheet Mobile",
    types: ["character", "mook"],
    makeDefault: false,
  });


  console.log("CPR-Mobile | Initialized");
});

Hooks.on("ready", function() {
  // On mobile this boolean is set during ready event
  // But mobile-improvements hooks are not triggered if it's set here (only when switching)
  if (globalThis.MobileMode.enabled) {
    enableMobileSheets();
  }
})

Hooks.on("mobile-improvements:enter", enableMobileSheets);
Hooks.on("mobile-improvements:leave", disableMobileSheets);
