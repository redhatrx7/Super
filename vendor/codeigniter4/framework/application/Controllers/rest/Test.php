<?php namespace App\Controllers\Rest;

class Test extends \App\Core\Controller
{
	public function index()
	{
		$this->view('home');
	}
}
