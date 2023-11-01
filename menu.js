jQuery(function($){ // use jQuery code inside this to avoid "$ is not defined" error
	$(document).ready(function(){
		
		//Submenu
		var $openSubmenu = $('#main-menu > .menu-item-has-children > a'),
			  $submenuParent = $('#main-menu > .menu-item-has-children'),
			  $activeMenu  = 'active';	// class usada para estilizar o submenu

    // O evento principal é qualquer clique feito no site
		$(document).on("click", function(e) {
      // verifica se o clique foi na tag <a> do item do menu (no primeiro nível) que tem submenu representado pela classe .menu-item-has-children
			if ( $(e.target).is($openSubmenu) === true ) {				
				e.preventDefault();
        // adiciona a classe ao <li> parent do <a> que recebeu o clique e remove dos irmãos (siblings)
				$(e.target).parent().addClass($activeMenu).siblings().removeClass($activeMenu);
				
			} else {
        // caso o clique não seja no item que abre o submenu, remove a classe de tudo, essa parte serve para fechar o menu caso o usuário clique fora do menu.
				$($submenuParent).removeClass($activeMenu);			
			}
		});
		
	});	
});
