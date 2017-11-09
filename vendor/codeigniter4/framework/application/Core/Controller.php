<?php namespace App\Core;

class Controller extends \CodeIgniter\Controller 
{
	protected $js;
	protected $css;
	protected $header = 'header/header';
	protected $footer = 'footer/footer';

	public function __construct(...$params)
	{
		parent::__construct(...$params);

		helper( 'url' );
		$this->_get_default_bundles();
	}

	private function _get_default_bundles()
	{
		$class_name = strtolower(get_class($this));
		$env = (ENVIRONMENT === 'production' ? 'prod' :
			(ENVIRONMENT === 'testing' ? 'test' : 'dev'));
		$js_file = "assets/js/$class_name.$env.js";
		$css_file = "assets/css/$class_name.$env.css";

		if (file_exists($js_file))
		{
			$this->js = $js_file;
		}
		else
		{
			log_message('warning', "$class_name has no js bundle for ".ENVIRONMENT);
		}

		if (file_exists($css_file))
		{
			$this->css = $css_file;
		}
		else
		{
			log_message('warning', "$class_name has no css bundle for ".ENVIRONMENT);
		}
	}

	public function view(string $view, array $parameters = array())
	{
		$class = get_class($this);
		echo view($this->header, ['css' => $this->css, 'title' => $class]);
		echo view($view, array_merge($parameters, array('h1' => $class)));
		echo view($this->footer, ['js' => $this->js]);
	}
}