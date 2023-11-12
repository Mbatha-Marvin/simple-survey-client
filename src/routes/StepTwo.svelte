<script lang="ts">
	export let emailAddress: string;
	// import type { questions } from '$lib/helpers/processXmlResponse';
	export let formDetails;

	$: emailAddressData = formDetails!.emailAddress
</script>

<div class="pb-4">
	<label class="label">
		<span>{emailAddressData.displayText}</span>
		<input
			class="input"
			name="emailAddress"
			title="Email Address"
			bind:value={emailAddress}
			type="email"
			placeholder="johndoe@example.com"
			autocomplete="email"
			required
		/>
	</label>
</div>
