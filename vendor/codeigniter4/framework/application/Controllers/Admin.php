<?php namespace App\Controllers;

use \App\Core\Controller;

class Admin extends Controller
{
	public function __construct(...$params)
	{
		parent::__construct(...$params);
		$site = \Config\Database::connect();
	}

	public function index()
	{
		$this->view('admin');
	}
	
	public function users()
	{
		
	}
}
