{
	// Place your global snippets here. Each snippet is defined under a snippet name and has a scope, prefix, body and 
	// description. Add comma separated ids of the languages where the snippet is applicable in the scope field. If scope 
	// is left empty or omitted, the snippet gets applied to all languages. The prefix is what is 
	// used to trigger the snippet and the body will be expanded and inserted. Possible variables are: 
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. 
	// Placeholders with the same ids are connected.
	// Example:
	"PHP Echo": {
		"prefix": "phpecho",
		"body": [
			"<?= $1 ?>",
		],
		"description": "PHP Echo"
	},
	"phpforeach": {
		"prefix": "phpforeach",
		"body": [
			"<?php foreach($$items as $$item) : ?>",
			"",
			"<?php endforeach; ?>"
		],
		"description": "PHP Foreach"
	},
	"phpif": {
		"prefix": "phpif",
		"body": [
			"<?php if($1) : ?>",
					"",
			"<?php endif; ?>"
		],
		"description": "PHP IF"
	},
	"phpifelse": {
		"prefix": "phpifelse",
		"body": [
			"<?php if($1) : ?>",
					"",
			"<?php else : ?>",
					"",
			"<?php endif; ?>"
		],
		"description": "PHP IF"
	},
	"phpwhile": {
		"prefix": "phpwhile",
		"body": [
			"<?php while($1) : ?>",
					"",
			"<?php endwhile; ?>"
		],
		"description": "PHP IF"
	},
	"phprequire": {
		"prefix": "phprequire",
		"body": [
			"<?php require '$1' ?>"
		],
		"description": "PHP Require"
	},
	"phpdd": {
		"prefix": "phpdd",
		"body": [
			"var_dump($1);die;"
		],
		"description": "PHP Require"
	},
	"laravelformfroupinput": {
		"prefix": "laravelformfroupinput",
		"body": [
			"<div class='form-group mb-3'>",
				"<label for='$1' class='mb-2'>$1</label>",
				"<input type='text' name='$1' id='$1' class='form-control @error('$1') is-invalid @enderror' value='{{ old('$1') }}'>",
				"@error('$1')",
					"<div class='invalid-feedback'>",
						"{{ $$message }}",
					"</div>",
				"@enderror",
			"</div>"
		],
		"description": "Laravel Form Group Input"
	},
	"laravelformgrouptextarea": {
		"prefix": "laravelformgrouptextarea",
		"body": [
			"<div class='form-group mb-3'>",
				"<label for='$1' class='mb-2'>$1</label>",
				"<textarea name='$1' id='$1' cols='30' rows='3' class='form-control @error('$1') is-invalid @enderror'>{{ old('$1') }}</textarea>",
				"@error('$1')",
					"<div class='invalid-feedback'>",
						"{{ $$message }}",
					"</div>",
				"@enderror",
			"</div>"
		],
		"description": "Laravel Form Group Text Area"
	},
	"laravelformgRoupradiobutton": {
		"prefix": "laravelformgRoupradiobutton",
		"body": [
			"<div class='form-group mb-3'>",
				"<label class='mb-2' for='$1'>$1</label>",
				"<br>",
				"<div class='form-check form-check-inline'>",
					"<input class='form-check-input' type='radio' name='$1' @if(old('$1') === '$2') selected @endif  id='$2' value='$2'>",
					"<label class='form-check-label' for='$2'>$2</label>",
				"</div>",
				"@error('$1')",
					"<div class='invalid-feedback d-inline'>",
						"{{ $$message }}",
					"</div>",
				"@enderror",
			"</div>"
		],
		"description": "Laravel Form Group Radio Button"
	},
	"laravelFormGroupSelect": {
		"prefix": "laravelformgroupselect",
		"body":[
			"<div class='form-group'>",
				"<label for='$1'>$1</label>",
				"<select name='$1' id='$1' class='form-control @error('$1') is-invalid @enderror'>",
					"<option value='' selected disabled>Pilih $1</option>",
					"@foreach ($$items as $$item)",
						"<option @selected($$item->id == old('$1')) value='{{ $$item->id }}'>{{ $$item->name }}</option>",
					"@endforeach",
				"</select>",
				"@error('$1')",
					"<div class='invalid-feedback'>",
						"{{ $$message }}",
					"</div>",
				"@enderror",
			"</div>",
		]
	},
	"laraveldbtransaction":{
		"prefix": "Laravel DB Transaction",
		"body": [
			"DB::beginTransaction();",
			"try{",
			"",
			"DB::commit();",
			"",
			"}catch('\'Throwable $$th){",
			"",
			"throw $$th;",
			"  }"
		];
	},
	"ci3forminput":{
		"prefix": "Codeigniter 3 Form Input",
		"body": [
			"<div class='form-group mb-3'>",
				"<label for='$1' class='mb-2'>$1</label>",
				"<input type='text' name='$1' class='form-control <?php if (form_error('$1')) : ?> is-invalid <?php endif; ?>'>",
				"<?php if (form_error('$1')) : ?>",
					"<div class='invalid-feedback'>",
						"<?= form_error('$1') ?>",
					"</div>",
				"<?php endif; ?>",
			"</div>"
		],
	},
	"ci3formradiobutton":{
		"prefix": "Codeigniter 3 Form Radio Button",
		"body": [
			"<div class='form-group mb-3'>",
				"<label class='mb-2' for='$1'>$1</label>",
				"<br>",
				"<div class='form-check form-check-inline'>",
					"<input class='form-check-input' type='radio' name='$1' id='$2' value='$2'>",
					"<label class='form-check-label' for='$2'>$2</label>",
				"</div>",
				"<?php if (form_error('$1')) : ?>",
					"<div class='invalid-feedback d-inline'>",
					"<?= form_error('$1') ?>",
					"</div>",
				"<?php endif; ?>",
			"</div>"
		],
	},
	"ci3formTextarea":{
		"prefix": "Codeigniter 3 Form Textare",
		"body": [
			"<div class='form-group mb-3'>",
				"<label for='$1' class='mb-2'>$1</label>",
				"<textarea name='$1' class='form-control <?php if (form_error('$1')) : ?> is-invalid <?php endif; ?>' id='$1' cols='10' rows='3'></textarea>",
				"<?php if (form_error('$1')) : ?>",
					"<div class='invalid-feedback'>",
						"<?= form_error('$1') ?>",
					"</div>",
				"<?php endif; ?>",
			"</div>"
		],
	},
	"ci3formSelect":{
		"prefix": "Codeigniter 3 Form Select",
		"body": [
			"<div class='form-group mb-3'>",
				"<label for='$1' class='mb-2'>$1</label>",
				"<textarea name='$1' class='form-control <?php if (form_error('$1')) : ?> is-invalid <?php endif; ?>' id='$1' cols='10' rows='3'></textarea>",
				"<?php if (form_error('$1')) : ?>",
					"<div class='invalid-feedback'>",
						"<?= form_error('$1') ?>",
					"</div>",
				"<?php endif; ?>",
			"</div>"
		],
	},
	"ci4forminputtext" : {
		"prefix": "CI 4 Form Input Text",
		"body": [
			"<div class='form-group'>",
			"<label label='$1'>$1</label>",
			"<input type='text' class='form-control <?php echo session('errors.$1') ? 'is-invalid' : ''; ?>' value='<?php echo old('$1'); ?>' required='' name='$1'>",
			"<?php if (session('errors.$1')) : ?>",
				"<div class='invalid-feedback'>",
					"<?php echo session('errors.$1'); ?>",
				"</div>",
			"<?php endif; ?>",
		"</div>"
		]
	},
	"ci4extend" : {
		"prefix": "CI 4 Extend",
		"body": [
			"<?= $$this->extend('$1') ?>"
		]
	},
	"ci4section" : {
		"prefix": "CI 4 Section",
		"body": [
			"<?= $$this->section('$1') ?>",
			"",
			"<?= $$this->endSection() ?>"
		]
	},
	"ci4textarea":{
		"prefix": "CI 4 form Textarea",
		"body": [
			"<div class='form-group'>",
			"<label for='$1'>$1</label>",
			"<textarea name='$1' id='$1' cols='30' rows='5' class='form-control <?php echo session('errors.$1') ? 'is-invalid' : '' ?>'><?= old('$1') ?></textarea>",
			"<?php if (session('errors.$1')) : ?>",
				"<div class='invalid-feedback'>",
					"<?php echo session('errors.$1'); ?>",
				"</div>",
			"<?php endif; ?>",
		"</div>"
		]
	},
	"ci4select":{
		"prefix": "CI 4 form Select",
		"body": [
			"<div class='form-group'>",
			"<label label='$1'>$1</label>",
			"<select name='$1' id='$1' class='form-control <?php echo session('errors.$1') ? 'is-invalid' : ''; ?>'>",
				"<option value='' selected disabled>Pilih $1</option>",
				"<?php foreach ($$items as $$item) : ?>",
					"<option value='<?= $$item['id'] ?>'><?= $$item['nama'] ?></option>",
				"<?php endforeach; ?>",
			"</select>",
			"<?php if (session('errors.$1')) : ?>",
				"<div class='invalid-feedback'>",
					"<?php echo session('errors.$1'); ?>",
				"</div>",
			"<?php endif; ?>",
		"</div>"
		]
	},
	"ci4methodpatch" : {
		"prefix": "Ci 4 Method Patch",
		"body": "<input type='hidden' name='_method' value='PATCh'>"
	},
	"ci4csrffield" : {
		"prefix": "Ci 4 CSRF FIELD",
		"body": "  <?= csrf_field() ?>"
	},
	"ci4cinlude" :{
		"prefix": "CI 4 Include",
		"body": "<?= $$this->include('$1') ?>"
	},
	"ci4migration":{
		"prefix": "CI 4 Migration",
		"body": [
			"$$this->forge->addField([",
				"'id' => [",
					"'type' => 'INT',",
					"'constraint' => 11,",
					"'unsigned'  => true,",
					"'auto_increment' => true",
				"],",
				"'nama' => [",
					"'type' => 'VARCHAR',",
					"'constraint' => 50",
				"],",
				"'created_at' => [",
					"'type' => 'TIMESTAMP',",
					"'null' => true,",
					"'default' => null,",
				"],",
				"'updated_at' => [",
					"'type' => 'TIMESTAMP',",
					"'null' => true,",
					"'default' => null,",
					"'on update' => 'CURRENT_TIMESTAMP',",
				"],",
			"]);",
			"$$this->forge->addKey('id', true);",
			"$$this->forge->createTable('$1');",
		]
	}
}
