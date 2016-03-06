if (0 === Bars.find().count())
{
	Bars.insert({	
	    title: 'HaBirzia',
	    offer: '1+1 until time',
	    url: 'https://www.facebook.com/pages/%D7%94%D7%91%D7%A8%D7%96%D7%99%D7%94/121145897963497?fref=ts/',
        loc : {
  	    	type : "Point",
 	   		// coordinates : [ 34.80904420000002, 31.9013714 ]
 	   		coordinates : [ 34.80904420000002, 31.9013714 ]

    	},
    	startHappyHour: 16.00,
    	endHappyHour: 18.33
	});

	Bars.insert({
	    title: 'Herzl',
	    offer: '1+1 until time',
	    url: 'http://herzl.rest.co.il/',
		loc :
		{
      		type : "Point",
      		coordinates : [ 34.80870010000001, 31.9020471 ]
    	},
    	startHappyHour: 22.00,
    	endHappyHour: 0.33
	});

	Bars.insert({
	  	title: 'Barshevski',
	  	offer: '1+1 until time',
    	url: 'https://www.facebook.com/pages/Barshevski-Bar/161952297191913',
    	loc : {
      		type : "Point",
      		coordinates : [ 34.80937779999999, 31.9741452]
    	},
    	startHappyHour: 19.00,
    	endHappyHour: 20.30
    	

	});

	Bars.insert({
	  	title: 'weizmann',
	  	offer: '1+1 until time',
    	url: 'https://www.facebook.com/pages/Barshevski-Bar/161952297191913',
    	loc : {
      		type : "Point",
      		coordinates : [34.79793070000005, 31.92405249999999 ]
    	},
    	startHappyHour: 17.00,
    	endHappyHour: 21.00

	});
}