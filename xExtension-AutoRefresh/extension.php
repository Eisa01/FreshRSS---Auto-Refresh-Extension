<?php

class AutoRefreshExtension extends Minz_Extension {

    public function init() {
        Minz_View::appendScript($this->getFileUrl('jquery-3.3.1.min.js', 'js'),'','','');
        Minz_View::appendScript($this->getFileUrl('script.js', 'js'),'','','');   
    }

}
