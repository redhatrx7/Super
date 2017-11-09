<?php namespace App\Core;

class Controller extends \CodeIgniter\Controller
{
	protected $js;
	protected $css;
	protected $class_name;
	protected $header = 'header/header';
	protected $footer = 'footer/footer';

	public function __construct(...$params)
	{
		parent::__construct(...$params);

		helper( 'url' );

		$this->class_name = (new \ReflectionClass($this))->getShortName();
		$this->_get_default_bundles();
	}

	private function _get_default_bundles()
	{
		$class = strtolower($this->class_name);
		$env = (ENVIRONMENT === 'production' ? 'prod' :
			(ENVIRONMENT === 'testing' ? 'test' : 'dev'));
		$js_file = "assets/js/$class.$env.js";
		$css_file = "assets/css/$class.$env.css";

		if (file_exists($js_file))
		{
			$this->js = $js_file;
		}
		else
		{
			log_message('warning', "$this->class_name has no js bundle for ".ENVIRONMENT);
		}

		if (file_exists($css_file))
		{
			$this->css = $css_file;
		}
		else
		{
			log_message('warning', "$this->class_name has no css bundle for ".ENVIRONMENT);
		}
	}

	protected function view(string $view, array $parameters = array())
	{
		echo view($this->header, ['css' => $this->css, 'title' => $this->class_name]);
		echo view($view, array_merge($parameters, array('h1' => $this->class_name)));
		echo view($this->footer, ['js' => $this->js]);
	}
}