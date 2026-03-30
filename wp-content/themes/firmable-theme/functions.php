<?php
// Load the theme stylesheet
function firmable_enqueue_styles() {
    wp_enqueue_style('firmable-style', get_stylesheet_uri());
}
add_action('wp_enqueue_scripts', 'firmable_enqueue_styles');

// Register menus
function firmable_register_menus() {
    register_nav_menus( array(
        'primary' => __( 'Primary Menu', 'firmable' ),
        'footer'  => __( 'Footer Menu', 'firmable' ),
    ));
}
add_action( 'after_setup_theme', 'firmable_register_menus' );

// Register button styles (only the ones you need)
function firmable_register_button_styles() {
    register_block_style('core/button', [
        'name'  => 'primary',
        'label' => __( 'Primary', 'firmable' ),
    ]);

    register_block_style('core/button', [
        'name'  => 'primary-icon',
        'label' => __( 'Primary with Arrow', 'firmable' ),
    ]);

    register_block_style('core/button', [
        'name'  => 'secondary',
        'label' => __( 'Secondary', 'firmable' ),
    ]);

    register_block_style('core/button', [
        'name'  => 'secondary-icon',
        'label' => __( 'Secondary with Arrow', 'firmable' ),
    ]);

    register_block_style('core/button', [
        'name'  => 'text-icon',
        'label' => __( 'Text + Icon', 'firmable' ),
    ]);
}
add_action( 'init', 'firmable_register_button_styles' );

// Enqueue scripts
function firmable_scripts() {
  wp_enqueue_script(
    'navigation-js',
    get_template_directory_uri() . '/navigation.js',
    array(),
    null,
    true // load in footer
  );
}
add_action('wp_enqueue_scripts', 'firmable_scripts');


// Register pattern category
function firmable_register_pattern_category() {
    register_block_pattern_category(
        'firmable',
        array( 'label' => __( 'Firmable Patterns', 'firmable' ) )
    );
}
add_action( 'init', 'firmable_register_pattern_category' );

// Register block patterns
function firmable_register_patterns() {
    register_block_pattern(
        'firmable/hero-section',
        array(
            'title'       => __( 'Hero Section', 'firmable' ),
            'description' => __( 'A wide hero section with heading, subheading, and button.', 'firmable' ),
            'categories'  => array( 'firmable' ),
            'content'     => '
                <!-- wp:group {"align":"wide","className":"hero-section","layout":{"type":"constrained"}} -->
                <div class="wp-block-group alignwide hero-section">
                  <!-- wp:heading {"textAlign":"center","level":1,"fontSize":"large"} -->
                  <h1 class="wp-block-heading has-text-align-center has-large-font-size">From data to direction</h1>
                  <!-- /wp:heading -->

                  <!-- wp:paragraph {"align":"center","className":"hero-sub-heading"} -->
                  <p class="has-text-align-center hero-sub-heading">Firmable helps salespeople act at the right moment. We combine AI-driven insights and buying signals to show exactly who\'s ready to buy and when.</p>
                  <!-- /wp:paragraph -->

                  <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
                  <div class="wp-block-buttons">
                    <!-- wp:button {"textAlign":"center","className":"btn-primary is-style-primary"} -->
                    <div class="wp-block-button btn-primary is-style-primary">
                      <a class="wp-block-button__link has-text-align-center wp-element-button">Start free trial</a>
                    </div>
                    <!-- /wp:button -->
                  </div>
                  <!-- /wp:buttons -->
                </div>
                <!-- /wp:group -->
            ',
        )
    );
}
add_action( 'init', 'firmable_register_patterns' );
