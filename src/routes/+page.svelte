<script lang="ts">
	import { Stepper, Step } from '@skeletonlabs/skeleton';
	import type { questions } from '$lib/helpers/processXmlResponse';

	// components
	import StepOne from './StepOne.svelte';
	import StepTwo from './StepTwo.svelte';
	import StepThree from './StepThree.svelte';
	import StepFour from './StepFour.svelte';
	import StepFive from './StepFive.svelte';
	import StepSix from './StepSix.svelte';
	import FinalStep from './FinalStep.svelte';

	// helper functions
	import * as fieldValidators from '$lib/helpers/inputValidators';

	// load server side fetched data
	export let data ;
	let formDetails: questions = data.questions
	console.log(formDetails);

	let emailAddress = '';
	let description = ``;
	let gender = '';
	let programmingStack: string[] = [];

	let fullName = '';
	$: programmingStackString = programmingStack.toString();
	$: proceedToEmail = !fieldValidators.validateUserNames(fullName);
	$: proceedToDescription = !fieldValidators.validateUserEmail(emailAddress);
	$: proceedToGenderSelection = !fieldValidators.validateUserDescription(description);
	$: proceedToProgrammingStack = !fieldValidators.validateUserGender(gender);
	$: proceedToCertificateUpload =
		!fieldValidators.validateProgrammingStackString(programmingStackString);
	$: proceedToSummary = !fieldValidators.validateFilesUpload(files);


	// console.log(questions);

	let files: FileList;
</script>

<div class="h-screen flex flex-col items-center justify-center">
	<form>
		<div class="max-w-md">
			<Stepper>
				<Step bind:locked={proceedToEmail}>
					<svelte:fragment slot="header">{formDetails.fullName.displayText}</svelte:fragment>
					<StepOne bind:fullName bind:formDetails />
					<svelte:fragment slot="navigation">
						<button />
					</svelte:fragment>
				</Step>
				<Step locked={proceedToDescription}>
					<svelte:fragment slot="header">{formDetails.emailAddress.displayText}</svelte:fragment>
					<StepTwo bind:emailAddress bind:formDetails />
				</Step>
				<Step locked={proceedToGenderSelection}>
					<svelte:fragment slot="header">{formDetails.description.displayText}</svelte:fragment>
					<StepThree bind:description bind:formDetails  />
				</Step>
				<Step locked={proceedToProgrammingStack}>
					<svelte:fragment slot="header">{formDetails.gender.displayText}</svelte:fragment>
					<StepFour bind:gender bind:formDetails />
				</Step>
				<Step locked={proceedToCertificateUpload}>
					<svelte:fragment slot="header"
						>{formDetails.programmingStack.displayText}</svelte:fragment
					>
					<StepFive bind:programmingStack bind:formDetails  />
				</Step>
				<Step locked={proceedToSummary}>
					<svelte:fragment slot="header">{formDetails.certificate.displayText}</svelte:fragment>
					<StepSix bind:files bind:formDetails   />
				</Step>
				<Step>
					<svelte:fragment slot="header">Survey Summary</svelte:fragment>
					<FinalStep
						bind:fullName
						bind:emailAddress
						bind:description
						bind:gender
						bind:programmingStackString
						bind:files
					/>
				</Step>
			</Stepper>
		</div>
	</form>
</div>
