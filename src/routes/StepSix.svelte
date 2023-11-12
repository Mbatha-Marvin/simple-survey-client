<script lang="ts">
	import { FileDropzone } from '@skeletonlabs/skeleton';
	export let files: FileList;
	export let formDetails;

	$: certificateData = formDetails!.certificate;


	function onChangeHandler(e: Event): void {
		console.log('file data:', e);
	}
</script>

<div>
	<FileDropzone name="files" multiple required accept=".{certificateData.fileType}" bind:files on:change={onChangeHandler}>
		<!-- <svelte:fragment slot="lead"><UploadSolid/></svelte:fragment> -->
		<svelte:fragment slot="message">Upload a file or Drag and Drop</svelte:fragment>
		<svelte:fragment slot="meta">PDF Only</svelte:fragment>
	</FileDropzone>

	{#if files}
		<div>
			{#each files as file}
				<div>
					{file.name}
				</div>
			{/each}
		</div>
	{/if}
</div>
