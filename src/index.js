import { registerBlockType} from '@wordpress/blocks';
import { RichText} from '@wordpress/block-editor';
import block from './block.json';
import {__} from '@wordpress/i18n';

registerBlockType(
    block.name, {
        edit({attributes, setAttributes}){
            const {content} = attributes;
            return (<RichText tagName="h2" placeholder={__('Enter heading','udemy-plus')}
            value= {content}
            onChange = {newVal => setAttributes({content: newVal})}
            
            
            />)
          
            
        },
        save({attributes}){
            const {content } = attributes
            return <RichText.Content
            tagName="h2"
            value={content}/>
                        }
    }
)