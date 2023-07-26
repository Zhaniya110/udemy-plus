import { registerBlockType} from '@wordpress/blocks'
import block from 'block.json'
registerBlockType('udemy-plus/fancy-header',{
    edit(){
        return <p>Hello!</p>
    }
})