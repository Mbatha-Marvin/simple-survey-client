<script lang="ts">
	import axios from 'axios';
	import { goto } from '$app/navigation';
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
	export let data;
	let formDetails: questions = data.questions;
	console.log(formDetails);

	let emailAddress = 'test@test.com';
	let description = `this is a test description for the form data  `;
	let gender = 'MALE';
	let programmingStack: string[] = [];

	let fullName = 'test fullname ';
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

	const sendData = async () => {
		let headers = {
			'Content-Type': 'multipart/form-data'
		};
		console.log('sending data to back end');
		console.log(typeof files);
		console.log(files.length);

		let formData = new FormData();
		formData.append('full_name', fullName);
		formData.append('email_address', emailAddress);
		formData.append('description', description);
		formData.append('programming_stack', programmingStackString);
		formData.append('gender', gender);

		for (let i = 0; i < files.length; i++) {
			formData.append('certificates', files[i]);
		}

		console.log(formData.get('full_name'));
		const response = await axios
			.put('http://localhost:8001/api/questions/responses', formData, {
				headers: headers
			})
			.then((res) => {
				return res.data;
			})
			.catch((err) => console.log(err));

		goto('/responses');
	};
</script>

<div class="h-screen flex flex-col items-center justify-center">
	<div class="max-w-md">
		<Stepper on:complete={sendData}>
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
				<StepThree bind:description bind:formDetails />
			</Step>
			<Step locked={proceedToProgrammingStack}>
				<svelte:fragment slot="header">{formDetails.gender.displayText}</svelte:fragment>
				<StepFour bind:gender bind:formDetails />
			</Step>
			<Step locked={proceedToCertificateUpload}>
				<svelte:fragment slot="header">{formDetails.programmingStack.displayText}</svelte:fragment>
				<StepFive bind:programmingStack bind:formDetails />
			</Step>
			<Step locked={proceedToSummary}>
				<svelte:fragment slot="header">{formDetails.certificate.displayText}</svelte:fragment>
				<StepSix bind:files bind:formDetails />
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
</div>
