<?php

class AutoRefreshExtension extends Minz_Extension {
    const DEFAULT_REFRESH_RATE = 1;

    public function init() {
        Minz_View::appendScript($this->getFileUrl('script.js', 'js'),'','','');

        $this->registerHook('js_vars', [$this, 'addVariables']);
    }

    public function addVariables($vars) {
        $vars[$this->getName()]['configuration'] = [
            'refresh-rate' => $this->getRefreshRate(),
        ];

        return $vars;
    }

    public function handleConfigureAction() {
        $this->registerTranslates();

        if (Minz_Request::isPost()) {
            $configuration = [
                'refresh-rate' => Minz_Request::param('refresh-rate', self::DEFAULT_REFRESH_RATE),
            ];
            $this->setUserConfiguration($configuration);
        }
    }

    public function getRefreshRate() {
        return $this->getUserConfigurationValue('refresh-rate', static::DEFAULT_REFRESH_RATE);
    }
}
