import LOGGER from "/systems/cyberpunk-red-core/modules/utils/cpr-logger.js";


export default function preloadHandlebarsTemplates() {
	LOGGER.log("CPR-Mobile|Calling Preload Handlebars");
	return loadTemplates([
		"modules/cpr-mobile/templates/actor/cpr-character-sheet-mobile.hbs",
	]);
}