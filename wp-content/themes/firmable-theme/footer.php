<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="brand-information">
        <!-- <h2 class="footer-heading">Firmable</h2> -->
         <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="navigation-logo">
            <img src="<?php echo esc_url( get_template_directory_uri() ); ?>\images\firmable-logo-reversed.png" 
                alt="<?php bloginfo( 'name' ); ?>" />
          </a>
        <p class="body-small">AI-powered sales intelligence platform</p>
      </div>
       <?php
          wp_nav_menu( array(
            'theme_location' => 'primary',
            'menu_class'     => 'navigation-menu footer-menu',
            'container'      => 'nav',
            'container_class'=> 'navigation-header',
            'fallback_cb'    => false,
          ) );
        ?>
    </div>
    <div class="footer-bottom">
      <p class="body-small">&copy; <?php echo date('Y'); ?> Firmable. All rights reserved.</p>
    </div>
  </div>
  <?php wp_footer(); ?>
</footer>
</body>
</html>