<?php /*

 * Plugin Name:       Udemy Plus
 * Plugin URI:        https://udemy.com
 * Description:       Handle the basics with this plugin.
 * Version:           1.10.3
 * Requires at least: 5.9
 * Requires PHP:      7.2
 * Author:            Udemy
 * Author URI:        https://udemy.com/
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Update URI:        https://example.com/my-plugin/
 * Text Domain:       udemy-plus-tutorial
 * Domain Path:       /languages
 */
if ( !function_exists( 'add_action' ) ) {
	echo 'Hi there!  I\'m just a plugin, not much I can do when called directly.';
	exit;
}



//setup
define('UP_PLUGIN_DIR', plugin_dir_path(__FILE__));
//includes
include( UP_PLUGIN_DIR . 'includes/register-blocks.php');

//hooks
add_action( 'init', 'up_register_blocks' );
