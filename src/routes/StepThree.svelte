<script lang="ts">
	export let description: String;
	// import type { questions } from '$lib/helpers/processXmlResponse';
	export let formDetails;

	$: descriptionData = formDetails!.description
</script>

<div >
	<label class="label">
		<span >{descriptionData.displayText}</span>
		<textarea
			class="textarea"
			rows="4"
			name="description"
			bind:value={description}
			placeholder="Tell us a bit more about yourself"
			required
		/>
	</label>
</div>
