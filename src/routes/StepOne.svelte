<script lang="ts">
	import type { questions } from '$lib/helpers/processXmlResponse';
	export let formDetails: questions;
	export let fullName: string;

	$: title = formDetails.fullName.title.replaceAll("_", " ").toUpperCase()

	// export let goToNextStep:
</script>

<div>
	<div class="pb-6">
		<label class="label">
			<span>{title}</span>
			<input
				class="input"
				name="fullName"
				title="{title}"
				bind:value={fullName}
				type="text"
				placeholder="{title}"
				autocomplete="name"
				required
			/>
		</label>
	</div>
</div>
