(function ($) {
	"use strict";

	/*----------------------------
	 jQuery MeanMenu
	------------------------------ */
	jQuery('nav#dropdown').meanmenu();
	/*----------------------------
	 jQuery myTab
	------------------------------ */
	$('#myTab a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	});
	$('#myTab3 a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	});
	$('#myTab4 a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	});

	$('#single-product-tab a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	});

	$('[data-toggle="tooltip"]').tooltip();

	$('#sidebarCollapse').on('click', function () {
		$('#sidebar').toggleClass('active');

	});
	// Collapse ibox function
	$('#sidebar ul li').on('click', function () {
		var button = $(this).find('i.fa.indicator-mn');
		button.toggleClass('fa-plus').toggleClass('fa-minus');

	});
	/*-----------------------------
			Menu Stick
		---------------------------------*/
	$(".sicker-menu").sticky({ topSpacing: 0 });

	$('#sidebarCollapse').on('click', function () {
		$("body").toggleClass("mini-navbar");
		SmoothlyMenu();
	});
	$(document).on('click', '.header-right-menu .dropdown-menu', function (e) {
		e.stopPropagation();
	});


	/*----------------------------
	 wow js active
	------------------------------ */
	new WOW().init();

	/*----------------------------
	 owl active
	------------------------------ */
	$("#owl-demo").owlCarousel({
		autoPlay: false,
		slideSpeed: 2000,
		pagination: false,
		navigation: true,
		items: 4,
		/* transitionStyle : "fade", */    /* [This code for animation ] */
		navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		itemsDesktop: [1199, 4],
		itemsDesktopSmall: [980, 3],
		itemsTablet: [768, 2],
		itemsMobile: [479, 1],
	});

	/*----------------------------
	 price-slider active
	------------------------------ */
	$("#slider-range").slider({
		range: true,
		min: 40,
		max: 600,
		values: [60, 570],
		slide: function (event, ui) {
			$("#amount").val("£" + ui.values[0] + " - £" + ui.values[1]);
		}
	});
	$("#amount").val("£" + $("#slider-range").slider("values", 0) +
		" - £" + $("#slider-range").slider("values", 1));

	/*--------------------------
	 scrollUp
	---------------------------- */
	$.scrollUp({
		scrollText: '<i class="fa fa-angle-up"></i>',
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'fade'
	});

})(jQuery);


// Vue.component('order-row-component', {
// 	props: {
// 		'orderdata': Object,
// 	},
// 	delimiters: ['[[', ']]'],
// 	template: `
// 				<tr>
// 					<td>[[orderdata.id]]</td>
// 					<td>[[orderdata.date]]</td>
//                     <td>[[orderdata.orderId]]</td>
//                     <td>[[orderdata.agentId]]</td>
// 					<td>[[orderdata.status]]</td>
// 					<td><button class="button is-primary is-light" @click="$emit('details-button')">View</button></td>
// 				</tr>
// 			`,
// })


const globalApiUrl = "https://tmos.online";

var app1 = new Vue({
	el: '#main-page-container-id',
	delimiters: ['[[', ']]'],
	data: {
		'totalNumbers': {
			'totalOrders': '',
			'totalCompanies': '',
			'totalPincodes': '',
			'totalAgents': '',
			'todayOrders': '',
		},
	},
	methods: {
		// ViewIssue: function (issue) {
		// 	//console.log(issueid);
		// 	//let index = this.listItems.findIndex(function () { return item.id == issueid });
		// 	this.detailItem.id = issue.id;
		// 	this.detailItem.date = issue.date;
		// 	this.detailItem.orderId = issue.orderId;
		// 	this.detailItem.agentId = issue.agentId;
		// 	this.detailItem.status = issue.status;
		// 	this.detailItem.issue = issue.issue;
		// 	this.detailItem.option = issue.option;
		// },
		LoadDetails: function () {
			axios.get(globalApiUrl + '/api/admin-dashboard/get-admin-details/')
				.then(function (response) {
					let responseData = JSON.parse(response.data);
					console.log(responseData);
					app1.totalNumbers.totalOrders = responseData.allOrders;
					app1.totalNumbers.totalAgents = responseData.allAgents;
					app1.totalNumbers.totalCompanies = responseData.allCompanies;
					app1.totalNumbers.totalPincodes = responseData.allPincodes;
					app1.totalNumbers.todayOrders = responseData.todayOrders;
				})
				.catch(function (error) {
					console.error(error);
					window.alert('Server Error, Please Try Again!');
				});
		},
		ReloadApi: function () {
			this.LoadDetails();
		},
		// SubmitStatus: function () {
		// 	axios.post(globalApiUrl + '/api/abms/agent-issue-status-change/', {
		// 		issueId: this.detailItem.id,
		// 		status: this.detailItem.status,
		// 	})
		// 		.then(function (response) {
		// 			let responseData = JSON.parse(response.data);
		// 			console.log(responseData);
		// 			app1.detailItem.selectStatus = false;
		// 		})
		// 		.catch(function (error) {
		// 			console.error(error);
		// 			window.alert('Server Error, Please Try Again!');
		// 		});
		// },
		// SubmitIssue: function () {
		// 	axios.post(globalApiUrl + '/api/abms/edit-issue-agent-issue/', {
		// 		issueId: this.detailItem.id,
		// 		issue: this.detailItem.issue,
		// 	})
		// 		.then(function (response) {
		// 			let responseData = JSON.parse(response.data);
		// 			console.log(responseData);
		// 			app1.detailItem.issueEdit = false;
		// 		})
		// 		.catch(function (error) {
		// 			console.error(error);
		// 			window.alert('Server Error, Please Try Again!');
		// 		});
	},
	mounted() {
		this.LoadDetails();
	},
});



// function ReloadButton() {
// 	app1.ReloadApi();
// }