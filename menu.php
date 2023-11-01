<?php
// menu exemplo
?>
<header>
<?php
  // Colocar o nome do menu que você encontra em Personalisar > Menus
	$menuHeader = 'Principal';
	
	if( $menuHeader ) {
		wp_nav_menu( array(
			'menu'          => $menuHeader, // Do not fall back to first non-empty menu.
			'fallback_cb'   => false, // Do not fall back to wp_page_menu()
			'menu_class'	=> 'main-menu-header',  // Classe do menu <ul>
			'menu_id'		=> 'main-menu', // ID do menu <ul>
			'container_class' => 'main-menu-container' // class do container do menu <div> que envolve o <ul>
		));
	}
?>
</header>
