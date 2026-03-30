<?php
/**
 * Plugin Name:       Firmable Landing Blocks
 * Plugin URI:        https://firmable.com
 * Description:       Custom Gutenberg blocks for the Firmable landing page — Hero, Logos, Features, Testimonials, and CTA sections.
 * Version:           1.0.0
 * Requires at least: 6.2
 * Requires PHP:      8.0
 * Author:            Firmable
 * License:           GPL-2.0-or-later
 * Text Domain:       firmable-landing-blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

function firmable_landing_blocks_init() {
    $blocks = [ 'hero', 'logos', 'features', 'testimonials', 'cta' ];

    foreach ( $blocks as $block ) {
        register_block_type( __DIR__ . '/build/' . $block );
    }
}
add_action( 'init', 'firmable_landing_blocks_init' );
