<script lang="ts">
	export let gender: String;
	// import type { questions } from '$lib/helpers/processXmlResponse';
	export let formDetails;

	$: genderData = formDetails!.gender;
	// export let optionsList:Array<String>
</script>

<div class="pb-2">
	<label class="label">
		<span class="pr-24">{genderData.displayText}</span>
		<select
			class="select pe-8"
			size="1"
			name="gender"
			id="gender-select"
			bind:value={gender}
			required
		>
			<option value="MALE">Male</option>
			<option value="FEMALE">Female</option>
			<option value="OTHER">Other</option>
		</select>
	</label>
</div>
