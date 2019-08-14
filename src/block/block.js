/**
 * BLOCK: reputation-bar
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import "./style.scss";
import "./editor.scss";

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { TextControl } = wp.components;
/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType("cgb/block-reputation-bar", {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __("reputation-bar - CGB Block"), // Block title.
	icon: "shield", // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: "common", // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__("reputation-bar — CGB Block"),
		__("CGB Example"),
		__("create-guten-block")
	],
	attributes: {
		sectionOneTitle: {
			type: "string",
			default: ""
		},
		sectionOneSubTitle: {
			type: "string",
			default: ""
		},
		sectionOneIcon: {
			type: "string",
			default: ""
		},
		sectionTwoTitle: {
			type: "string",
			default: ""
		},
		sectionTwoSubTitle: {
			type: "string",
			default: ""
		},
		sectionTwoIcon: {
			type: "string",
			default: ""
		},
		sectionThreeTitle: {
			type: "string",
			default: ""
		},
		sectionThreeSubTitle: {
			type: "string",
			default: ""
		},
		sectionThreeIcon: {
			type: "string",
			default: ""
		}
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: function(props) {
		const attributes = props.attributes;
		// Creates a <p class='wp-block-cgb-block-reputation-bar'></p>.
		return (
			<div className={props.className}>
				<p>
					{attributes.sectionOneTitle} — {attributes.sectionOneSubTitle} -
					{attributes.sectionOneIcon}
				</p>
				<TextControl
					onChange={content =>
						props.setAttributes({ sectionOneTitle: content })
					}
					value={attributes.sectionOneTitle}
					placeholder="Reputation Column 1 Heading"
					className="heading"
				/>
				<TextControl
					onChange={content =>
						props.setAttributes({ sectionOneSubTitle: content })
					}
					value={attributes.sectionOneSubTitle}
					placeholder="Reputation Column 1 Sub-Heading"
					className="heading"
				/>
				<TextControl
					onChange={content => props.setAttributes({ sectionOneIcon: content })}
					value={attributes.sectionOneIcon}
					placeholder="Reputation Column 1 Icon (ex. gavel)"
					className="heading"
				/>
				<p>
					{attributes.sectionTwoTitle} — {attributes.sectionTwoSubTitle} -
					{attributes.sectionTwoIcon}
				</p>
				<TextControl
					onChange={content =>
						props.setAttributes({ sectionTwoTitle: content })
					}
					value={attributes.sectionTwoTitle}
					placeholder="Reputation Column 2 Heading"
					className="heading"
				/>
				<TextControl
					onChange={content =>
						props.setAttributes({ sectionTwoSubTitle: content })
					}
					value={attributes.sectionTwoSubTitle}
					placeholder="Reputation Column 2 Sub-Heading"
					className="heading"
				/>
				<TextControl
					onChange={content => props.setAttributes({ sectionTwoIcon: content })}
					value={attributes.sectionTwoIcon}
					placeholder="Reputation Column 2 Icon (ex. gavel)"
					className="heading"
				/>
				<p>
					{attributes.sectionThreeTitle} — {attributes.sectionThreeSubTitle} -
					{attributes.sectionThreeIcon}
				</p>
				<TextControl
					onChange={content =>
						props.setAttributes({ sectionThreeTitle: content })
					}
					value={attributes.sectionThreeTitle}
					placeholder="Reputation Column 3 Heading"
					className="heading"
				/>
				<TextControl
					onChange={content =>
						props.setAttributes({ sectionThreeSubTitle: content })
					}
					value={attributes.sectionThreeSubTitle}
					placeholder="Reputation Column 3 Sub-Heading"
					className="heading"
				/>
				<TextControl
					onChange={content =>
						props.setAttributes({ sectionThreeIcon: content })
					}
					value={attributes.sectionThreeIcon}
					placeholder="Reputation Column 3 Icon (ex. gavel)"
					className="heading"
				/>
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: function(props) {
		const attributes = props.attributes;
		return (
			<div className="reputation-bar">
				<div className="reputation-bar--item">
					<div className="reputation-bar--item--icon">
						<i className={`fa fa-${attributes.sectionOneIcon}`} />
					</div>
					<div className="reputation-bar--item--content">
						<p className="reputation-bar--item--content--number">
							{attributes.sectionOneTitle}
						</p>
						<p className="reputation-bar--item--content--text">
							{attributes.sectionOneSubTitle}
						</p>
					</div>
				</div>
				<div className="reputation-bar--item">
					<div className="reputation-bar--item--icon">
						<i className={`fa fa-${attributes.sectionTwoIcon}`} />
					</div>
					<div className="reputation-bar--item--content">
						<p className="reputation-bar--item--content--number">
							{attributes.sectionTwoTitle}
						</p>
						<p className="reputation-bar--item--content--text">
							{attributes.sectionTwoSubTitle}
						</p>
					</div>
				</div>
				<div className="reputation-bar--item">
					<div className="reputation-bar--item--icon">
						<i className={`fa fa-${attributes.sectionThreeIcon}`} />
					</div>
					<div className="reputation-bar--item--content">
						<p className="reputation-bar--item--content--number">
							{attributes.sectionThreeTitle}
						</p>
						<p className="reputation-bar--item--content--text">
							{attributes.sectionThreeSubTitle}
						</p>
					</div>
				</div>
			</div>
		);
	}
});
