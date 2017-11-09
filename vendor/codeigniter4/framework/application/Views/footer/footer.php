<? if(isset($js)): ?>
	<script src="<?=$js ?>"></script>
<? endif; ?>
<? if(ENVIRONMENT === 'development' && CI_DEBUG): ?>
	<div class="footer">
		version <?= CodeIgniter\CodeIgniter::CI_VERSION ?>: Page rendered in {elapsed_time} seconds.
		(<a href="https://bcit-ci.github.io/CodeIgniter4">User Guide</a>)
	</div>
<? endif; ?>
	</body>
</html>