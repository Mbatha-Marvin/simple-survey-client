<script lang="ts">
	export let fullName: string;
	export let emailAddress: string;
	export let description: string;
	export let gender: string;
	export let programmingStackString: string;
	export let files: FileList;
</script>

<div>
	<!-- full name -->
	<div class="pb-4">
		<label class="label">
			<div class="pb-2">
				<span>Full Name</span>
			</div>
			<div class="ps-2">
				<input
					class="input"
					name="fullName"
					title="Full Name"
					bind:value={fullName}
					type="text"
					readonly
				/>
			</div>
		</label>
	</div>
	<!-- email address -->
	<div class="pb-4">
		<label class="label">
			<div class="pb-2">
				<span>Email</span>
			</div>
			<div class="ps-2">
				<input
					class="input"
					name="emailAddress"
					title="Email Address"
					bind:value={emailAddress}
					type="text"
					readonly
				/>
			</div>
		</label>
	</div>

	<!-- description -->
	<div class="pb-4">
		<label class="label">
			<div class="pb-2">
				<span>Description</span>
			</div>

			<div class="ps-2">
				<textarea
					class="textarea"
					rows="4"
					name="description"
					bind:value={description}
					placeholder="Tell us a bit more about yourself"
					readonly
				/>
			</div>
		</label>
	</div>

	<!-- Gender -->
	<div class="pb-4">
		<label class="label">
			<div class="pb-2">
				<span>Gender</span>
			</div>
			<div class="ps-2">
				<input
					class="input"
					name="gender"
					title="Gender"
					bind:value={gender}
					type="text"
					readonly
				/>
			</div>
		</label>
	</div>

	<!-- Programming stack -->

	<div class="pb-4">
		<label class="label">
			<div class="pb-2">
				<span class="">Programming Stack </span>
			</div>

			<div class="ps-2">
				<input
					class="input"
					name="programmingStackString"
					title="Programming Stack"
					bind:value={programmingStackString}
					type="text"
					readonly
				/>
			</div>
		</label>
	</div>

	<!-- Certificates  -->

	<div>
		<span>Files to Upload:</span>
		<ol class="list pt-2">
			{#if files}
				{#each files as file, index}
					<li class="ps-8">
						<span>{index + 1}.</span>
						<span class="flex-auto">{file.name}</span>
					</li>
				{/each}
			{/if}
		</ol>
	</div>
</div>
