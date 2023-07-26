import { registerBlockType} from '@wordpress/blocks';

registerBlockType('udemy-plus/fancy-header',{
    edit(){
        return <p>Hello!</p>
    }
})