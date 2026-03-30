<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<header class="site-header">
  <div class="container">
    
    <!-- Logo -->
    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="navigation-logo">
      <img src="<?php echo esc_url( get_template_directory_uri() ); ?>\images\firmable-logo-colour.png" 
          alt="<?php bloginfo( 'name' ); ?>" />
    </a>

    <!-- Dynamic Menu -->
    <?php
      wp_nav_menu( array(
        'theme_location' => 'primary',
        'menu_class'     => 'navigation-menu',
        'container'      => 'nav',
        'container_class'=> 'navigation-header',
        'fallback_cb'    => false,
      ) );
    ?>

    <!-- Utilities -->
    <div class="navigation-utilities">
      <button class="btn-secondary"><?php _e( 'Sign in', 'firmable' ); ?></button>
      <button class="btn-primary"><?php _e( 'Start free trial', 'firmable' ); ?></button>
    </div>
    <!-- Hamburger toggle (visible on mobile) -->
    <button class="navbar-toggle" aria-label="Toggle navigation">☰</button>
  </div>
</header>
