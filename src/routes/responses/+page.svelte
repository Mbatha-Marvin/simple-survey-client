<script lang="ts">
	// import { fullName, emailAddress, gender, programmingStack, description, certificate } from './../../lib/helpers/processXmlResponse.ts';
	import { Paginator, type PaginationSettings, Table } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';

	export let data: PageData;

	const responses = data.responses.questionResponses;
	let emailToFind = "";

	let emailList = []
	let tableData = [];

	responses.forEach((element) => {
		let full_name = element.full_name;
		let email_address = element.email_address;
		let gender = element.gender;
		let programming_stack = element.programming_stack;
		let description = element.description;
		let NumberOfCertificates = element.certificates.length;

		let singleEntry = [
			full_name,
			email_address,
			gender,
			programming_stack,
			description,
			NumberOfCertificates
		];
		tableData.push(singleEntry);
		emailList.push(email_address)
	});


	$: paginatedSource = tableData.slice(
		paginationSettings.page * paginationSettings.limit,
		paginationSettings.page * paginationSettings.limit + paginationSettings.limit
	);

	let paginationSettings = {
		page: parseInt(data.responses.currentPage),
		limit: parseInt(data.responses.pageSize),
		size: tableData.length,
		amounts: [1, 2, 5, 10]
	} satisfies PaginationSettings;

	let tableHeaders: string[] = [
		'FullName',
		'EmailAddress',
		'Gender',
		'ProgrammingStack',
		'Description',
		'Number Of Certificates'
	];
</script>

<div>
	
	<div class="h-screen flex flex-col items-center justify-center">
		<div class="pb-16">
			<input class="input" type="search" name="demo" bind:value={emailToFind} placeholder="Search..." />
		</div>

		
		<div>
			<div class="pb-8">
				<Table interactive={true} source={{ head: tableHeaders, body: paginatedSource }} />
			</div>
			<Paginator
				bind:settings={paginationSettings}
				showFirstLastButtons={false}
				showPreviousNextButtons={true}
			/>
		</div>

	</div>
</div>


