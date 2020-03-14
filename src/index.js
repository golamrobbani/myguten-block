const { registerBlockType } = wp.blocks;
const {RichText}=wp.editor;

registerBlockType("myguten-block/test-block", {
  title: "Basic Example",
  icon: "megaphone",
  category: "widgets",

  attributes: {
        content: {
            type: 'array',
            source: 'children',
            selector: 'p',
        },
    },


  edit: props => {

	console.log('editor',props)
	
	return(
		<div>
		golam
		</div>
	)
  },
  save: props => <div></div>
});
