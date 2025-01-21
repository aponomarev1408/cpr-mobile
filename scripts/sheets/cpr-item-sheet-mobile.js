import CPRItemSheet from "/systems/cyberpunk-red-core/modules/item/sheet/cpr-item-sheet.js"
import LOGGER from "/systems/cyberpunk-red-core/modules/utils/cpr-logger.js"
export default class CPRItemMobileSheet extends CPRItemSheet {
	/**
	 * Set default options for character sheets, which include making sure vertical scrollbars do not
	 * get reset when re-rendering.
	 * See https://foundryvtt.com/api/Application.html for the complete list of options available.
	 *
	 * @static
	 * @override
	 */
	static get defaultOptions() {
		LOGGER.trace("defaultOptions | CPRItemSheet | CPRItemMobileSheet | Called.");
		const defaultWidth = "100%";
		const defaultHeight = "100%";
		return mergeObject(super.defaultOptions, {
			width: defaultWidth,
			height: defaultHeight,

		});
	}

	get template() {
		LOGGER.trace("template | CPRItemMobileSheet | CPRItemSheet | Called.");
		return `modules/cpr-mobile/templates/item/cpr-item-sheet-mobile.hbs`;
	}
}