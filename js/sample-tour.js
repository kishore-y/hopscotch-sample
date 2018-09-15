// Define OUR TOUR

var bossTour = {
	id: 'boss-tour',
	steps: [
		{
			target: 'header',
			content:'This is your header This is your header This is your header This is your header This is your header This is your header This is your header This is your header This is your header This is your header This is your header .',
			placement:'bottom',
			arrowOffset: 60
		},
		{
			target: 'content',
			title: 'Content',
			content: 'This is for your referrence.',
			placement: 'bottom',
			arrowOffset: 60
		},
		{
			target: 'email',
			content: 'Enter here your email.',
			placement: 'top',
			arrowOffset: 60
		},
		{
			target: 'password',
			content: 'Enter your password.',
			placement: 'right',
			//arrowOffset: 60,
			yOffset: -20
		},
		{
			target: 'hopscotch',
			content: 'hopscotch.',
			placement: 'right',
			//arrowOffset: 60,
			yOffset: -20
			
		},
		
		{
			target: 'header1',
			content:'This is your header This is your header This is your header This is your header This is your header This is your header This is your header This is your header This is your header This is your header This is your header .',
			placement:'bottom',
			arrowOffset: 60
		},
		{
			target: 'content1',
			title: 'Content',
			content: 'This is for your referrence.',
			placement: 'right',
			//arrowOffset: 60,
			xOffset: -450,
			yOffset: -20
		},
		{
			target: 'email1',
			content: 'Enter here your email.',
			placement: 'right',
			//arrowOffset: 60,
			yOffset: -20
		},
		{
			target: 'password1',
			content: 'Enter your password.',
			placement: 'left',
			//arrowOffset: 60,
			yOffset: -20
		}
	],
	showPrevButton: true,
	scrollTopMargin: 100
};

// Start the tour!
$('#needHelp').click(function(){
	hopscotch.startTour(bossTour);
});

