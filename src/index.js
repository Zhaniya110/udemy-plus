import { registerBlockType } from '@wordpress/blocks';
import { RichText, useBlockProps } from '@wordpress/block-editor';
import block from './block.json';
import { __ } from '@wordpress/i18n';

registerBlockType(
    block.name, {
    edit({ attributes, setAttributes }) {
        const blockProps = useBlockProps()
        const { content } = attributes;
        return (
            <RichText
            {... blockProps}
                tagName="h2" 
                placeholder={__('Enter heading', 'udemy-plus')}
                value={content}
                onChange={newVal => setAttributes({ content: newVal })}


            />)


    },
    save({ attributes }) {
        const blockProps = useBlockProps.save()
        const { content } = attributes
        return <RichText.Content
        {... blockProps}
            tagName="h2"
            value={content} />
    }
}
)