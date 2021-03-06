/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library sap.suite.statusindicator.
 */
sap.ui.define([], function () {
	"use strict";

	/**
	 * UI5 library: sap.suite.statusindicator.
	 *
	 * @namespace
	 * @name sap.suite.statusindicator
	 * @public
	 */

	// delegate further initialization of this library to the Core
	sap.ui.getCore().initLibrary({
		name: "sap.suite.statusindicator",
		dependencies: ["sap.ui.core"],
		types: [
			"sap.suite.statusindicator.FillingType",
			"sap.suite.statusindicator.FillingDirectionType",
			"sap.suite.statusindicator.HorizontalAlignmentType",
			"sap.suite.statusindicator.LabelPositionType",
			"sap.suite.statusindicator.SizeType",
			"sap.suite.statusindicator.VerticalAlignmentType"
		],
		interfaces: [],
		controls: [
			"sap.suite.statusindicator.Example"
		],
		elements: [],
		noLibraryCSS: false,
		version: "${version}"
	});

	/**
	 * The type of filling.
	 *
	 * @public
	 * @enum {string}
	 */
	sap.suite.statusindicator.FillingType = {

		/**
		 * The shape is filled with a linear gradient.
		 *
		 * @public
		 */
		Linear: "Linear",

		/**
		 * The shape is filled with a radial gradient.
		 */
		Radial: "Radial",

		/**
		 * Clockwise or counterclockwise circular filling is applied.
		 *
		 * <p>
		 * For details, see {@link sap.suite.statusindicator.FillingDirectionType}.
		 * </p>
		 *
		 * @public
		 */
		Circular: "Circular",

		/**
		 * No filling is applied.
		 *
		 * @public
		 */
		None: "None"
	};

	/**
	 * The direction of animation.<br>
	 *
	 * The direction types <code>Up</code>, <code>Down</code>, <code>Left</code>, and <code>Right</code> are available when
	 * {@link sap.suite.statusindicator.FillingType} is set to <code>Linear</code>.<br>
	 * The direction types <code>Clockwise</code> and <code>Counterclockwise</code> are available when
	 * {@link sap.suite.statusindicator.FillingType} is set to <code>Circular</code>.
	 *
	 * @public
	 * @enum {string}
	 */
	sap.suite.statusindicator.FillingDirectionType = {

		/**
		 * From bottom upwards.
		 *
		 * @public
		 */
		Up: "Up",

		/**
		 * From top to bottom.
		 *
		 * @public
		 */
		Down: "Down",

		/**
		 * From right to left.
		 *
		 * @public
		 */
		Left: "Left",

		/**
		 * From left to right.
		 *
		 * @public
		 */
		Right: "Right",

		/**
		 * Clockwise.
		 *
		 * @public
		 */
		Clockwise: "Clockwise",

		/**
		 * Counterclockwise.
		 *
		 * @public
		 */
		CounterClockwise: "CounterClockwise"
	};

	/**
	 * The horizontal alignment of the status indicator within its parent container.
	 *
	 * @public
	 * @enum {string}
	 */
	sap.suite.statusindicator.HorizontalAlignmentType = {

		/**
		 * Left.
		 *
		 * @public
		 */
		Left: "Left",

		/**
		 * Middle.
		 *
		 * @public
		 */
		Middle: "Middle",

		/**
		 * Right.
		 *
		 * @public
		 */
		Right: "Right"
	};

	/**
	 * Position of the label, relative to the status indicator.
	 *
	 * @public
	 * @enum {string}
	 */
	sap.suite.statusindicator.LabelPositionType = {

		/**
		 * Top.
		 *
		 * @public
		 */
		Top: "Top",

		/**
		 * Right.
		 *
		 * @public
		 */
		Right: "Right",

		/**
		 * Bottom.
		 *
		 * @public
		 */
		Bottom: "Bottom",

		/**
		 * Left
		 *
		 * @public
		 */
		Left: "Left"
	};

	/**
	 * Predefined sizes of the status indicator.
	 *
	 * @public
	 * @enum {string}
	 */
	sap.suite.statusindicator.SizeType = {

		/**
		 * No size settings are applied.
		 * @public
		 */
		None: "None",

		/**
		 * Small status indicator.
		 *
		 * @public
		 */
		Small: "Small",

		/**
		 * Medium status indicator.
		 *
		 * @public
		 */
		Medium: "Medium",

		/**
		 * Large status indicator.
		 *
		 * @public
		 */
		Large: "Large",

		/**
		 * Extra large status indicator.
		 *
		 * @public
		 */
		ExtraLarge: "ExtraLarge"
	};

	/**
	 * The vertical alignment of the status indicator within its parent container.
	 *
	 * @public
	 * @enum {string}
	 */
	sap.suite.statusindicator.VerticalAlignmentType = {

		/**
		 * Top.
		 *
		 * @public
		 */
		Top: "Top",

		/**
		 * Middle.
		 *
		 * @public
		 */
		Middle: "Middle",

		/**
		 * Bottom.
		 *
		 * @public
		 */
		Bottom: "Bottom"
	};

	return sap.suite.statusindicator;

});
