import CPRCharacterActorSheet from "/systems/cyberpunk-red-core/modules/actor/sheet/cpr-character-sheet.js"
import LOGGER from "/systems/cyberpunk-red-core/modules/utils/cpr-logger.js"
export default class CPRCharacterActorMobileSheet extends CPRCharacterActorSheet {
	/**
	 * Set default options for character sheets, which include making sure vertical scrollbars do not
	 * get reset when re-rendering.
	 * See https://foundryvtt.com/api/Application.html for the complete list of options available.
	 *
	 * @static
	 * @override
	 */
	static get defaultOptions() {
		LOGGER.trace("defaultOptions | CPRCharacterActorSheet | CPRCharacterActorMobileSheet | Called.");
		const defaultWidth = "100%";
		const defaultHeight = "100%";
		return mergeObject(super.defaultOptions, {
			template: `modules/cpr-mobile/templates/actor/cpr-character-sheet-mobile.hbs`,
			width: defaultWidth,
			height: defaultHeight,
			resizable: true,
			scrollY: [".mobile-content-section"],
			tabs: [
				{
					navSelector: ".navtabs-mobile-primary",
					contentSelector: ".mobile-content-section",
					initial: "cpr-mobile-tab-stats",
				}
			],
		});
	}
}