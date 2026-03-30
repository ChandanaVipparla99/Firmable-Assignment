<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '?i&!W%xhm4tz-1~pFoZ9K7JsWX%N3AP$8%uJroF^2Gw0@K!<jhwVy[~gRO8P@%vd' );
define( 'SECURE_AUTH_KEY',   '}4Kl;@EHBqT_LrB`VS{aCl.jLhj-J.:.`hA:T5Mz1%$kr)FW_;Jx:V7R^CK@*qhN' );
define( 'LOGGED_IN_KEY',     'UWOacDahpz~>1O#VtRHx>;/{${+30iz&mA~Z*7K;}cD5/Tc<#w^2/]xG9>+{?B6A' );
define( 'NONCE_KEY',         '|EH]>LVYRr1]xux%AH:/LK1M*+QChz>$p%(ORLg- Ugjf`i$FohF:Tk0gXErG))D' );
define( 'AUTH_SALT',         'Y^d6_(SP7s5ZgG2ariPAd1cK3LBXm,4DGGiL?9[~PTYKh<l^rI4PGph#7F$/OP7j' );
define( 'SECURE_AUTH_SALT',  'Qi8!z:9x9bf2a0(CbIAQ^UIK.|Dr7d!%s@6!_;o[viT B&CgUjIKWhKH$.bW;>hW' );
define( 'LOGGED_IN_SALT',    '-GBbeVN=0}yrYT-I8%S>iJrf}r?8B06AF)N7+#{1[^!G>n,r<H o|_`~V><58 gK' );
define( 'NONCE_SALT',        'i|`PjDgxX@s^im_W_^mNJ!P~D{;)7kO+i&q9S Y`&d#?+IY4WBYgbEt7/^(J_(u}' );
define( 'WP_CACHE_KEY_SALT', ';Yp8_2@QA.@uX _fo9j=D#<EYOrYTTA+yoN|EaVX[{ByQO)*iDwS[b-p17~s`jsM' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
