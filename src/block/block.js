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
const { InspectorControls } = wp.editor;
const { TextControl, PanelBody, PanelRow } = wp.components;
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
		return [
			<InspectorControls>
				<PanelBody title={__("Reputation Bar Settings")}>
					<PanelRow>
						<TextControl
							onChange={content =>
								props.setAttributes({ sectionOneTitle: content })
							}
							label="Column 1 Heading"
							value={attributes.sectionOneTitle}
							placeholder="200"
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							onChange={content =>
								props.setAttributes({ sectionOneSubTitle: content })
							}
							label="Column 1 Sub-Heading"
							value={attributes.sectionOneSubTitle}
							placeholder="Cases Won"
							className="heading"
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							onChange={content =>
								props.setAttributes({ sectionOneIcon: content })
							}
							label="Column 1 Font Awesome Icon Name (ex. gavel, exclude 'fa-')"
							value={attributes.sectionOneIcon}
							placeholder="gavel"
							className="heading"
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							onChange={content =>
								props.setAttributes({ sectionTwoTitle: content })
							}
							label="Column 2 Heading"
							value={attributes.sectionTwoTitle}
							placeholder="200"
							className="heading"
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							onChange={content =>
								props.setAttributes({ sectionTwoSubTitle: content })
							}
							label="Column 2 Sub-Heading"
							value={attributes.sectionTwoSubTitle}
							placeholder="Cases Won"
							className="heading"
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							onChange={content =>
								props.setAttributes({ sectionTwoIcon: content })
							}
							label="Column 2 Font Awesome Icon Name (ex. gavel, exclude 'fa-')"
							value={attributes.sectionTwoIcon}
							placeholder="gavel"
							className="heading"
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							onChange={content =>
								props.setAttributes({ sectionThreeTitle: content })
							}
							label="Column 3 Heading"
							value={attributes.sectionThreeTitle}
							placeholder="200"
							className="heading"
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							onChange={content =>
								props.setAttributes({ sectionThreeSubTitle: content })
							}
							label="Column 3 Sub-Heading"
							value={attributes.sectionThreeSubTitle}
							placeholder="Cases Won"
							className="heading"
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							onChange={content =>
								props.setAttributes({ sectionThreeIcon: content })
							}
							label="Column 3 Font Awesome Icon Name (ex. gavel, exclude 'fa-')"
							value={attributes.sectionThreeIcon}
							placeholder="gavel"
							className="heading"
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>,
			<div className={props.className}>
				<div className={`reputation-bar`}>
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
			</div>
		];
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
			<div>
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
			</div>
		);
	}
});
