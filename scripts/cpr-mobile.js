
import CPRCharacterActorMobileSheet from "./sheets/cpr-character-sheet-mobile.js"
import {initDragListener} from "./drag.js"
import CPRItemMobileSheet from "./sheets/cpr-item-sheet-mobile.js";

let initialClickToDismiss;

const character_types = [
  "character", 
  "mook",
];

const item_types = [
  "ammo",
  "armor",
  "clothing",
  "criticalInjury",
  "cyberdeck",
  "cyberware",
  "drug",
  "gear",
  "itemUpgrade",
  "netarch",
  "program",
  "role",
  "skill",
  "vehicle",
  "weapon",
]


function enableMobileSheets() {
  DocumentSheetConfig.updateDefaultSheets({ 
    Actor: character_types.reduce((a, v) => ({ ...a, [v]: "cyberpunk-red-core.CPRCharacterActorMobileSheet"}), {}),
    Item: item_types.reduce((a, v) => ({ ...a, [v]: "cyberpunk-red-core.CPRItemMobileSheet"}), {}),
  });
  initDragListener();
  console.log("CPR-Mobile | Enable Mobile Sheets");
}

function disableMobileSheets() {
  DocumentSheetConfig.updateDefaultSheets({ 
    Actor: character_types.reduce((a, v) => ({ ...a, [v]: "cyberpunk-red-core.CPRCharacterActorSheet"}), {}),
    Item: item_types.reduce((a, v) => ({ ...a, [v]: "cyberpunk-red-core.CPRItemMobileSheet"}), {}),
  });
  console.log("CPR-Mobile | Disable Mobile Sheets");
}

Hooks.on("init", function() {
  Actors.registerSheet(game.system.id, CPRCharacterActorMobileSheet, {
    label: "Character Sheet Mobile",
    types: character_types,
    makeDefault: false,
  });

  Items.registerSheet(game.system.id, CPRItemMobileSheet, {
    label: "Item Sheet Mobile",
    types: item_types,
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
