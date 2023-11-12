<script lang="ts">
	export let programmingStack: String[];
	// import type { questions } from '$lib/helpers/processXmlResponse';
	export let formDetails;

	$: programmingStackData = formDetails!.programmingStack
	// export let optionsList:Array<String>
</script>

<div>
	<label class="label">
		<span class="pr-24">{programmingStackData.displayText}</span>

		<select
			class="select"
			multiple
			required
			size="4"
			id="programming-stack-select"
			name="programmingStack"
			bind:value={programmingStack}
		>
			<option value="REACT">React JS</option>
			<option value="ANGULAR">Angular JS</option>
			<option value="VUE">Vue JS</option>
			<option value="SQL">SQL</option>
			<option value="POSTGRES">Postgres</option>
			<option value="MYSQL">MySQL</option>
			<option value="MSSQL">Microsoft SQL Server</option>
			<option value="Java">Java</option>
			<option value="PHP">PHP</option>
			<option value="GO">Go</option>
			<option value="RUST">Rust</option>
		</select>
	</label>
</div>
