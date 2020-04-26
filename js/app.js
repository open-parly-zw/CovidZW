		/////////////////// Transmission Type /////////////////////////////////////
	function  Transmission_Type(seriesData){
    	new Chartist.Bar('.ct-chart5',
    			{labels: ['Travel', 'Local', 'Pending'],series: [seriesData,]}, 
    			{seriesBarDistance: 5}, 
    			responsiveOptionz);

    	var responsiveOptionz = [
			[
				'screen and (min-width: 641px) and (max-width: 1024px)', 
				{
					seriesBarDistance: 10,
					axisX: {
						labelInterpolationFnc: function (value) {
							return value;
						}
					}
				}],

			[

				'screen and (max-width: 640px)', {
					seriesBarDistance: 5,
					axisX: {
						labelInterpolationFnc: function (value) {
							return value[0];
						}
					}
				}
			]
    	];

	}
	///////////////////End Of  Transmission Type ////////////////////////////////        	
	///////////////////Reported Cases Per Province //////////////////////////////
	function Reported_Cases_Per_Province(seriesData){
		new Chartist.Bar('.ct-chart', {
										labels: ["BUL", "HRE", "MNL", "MSC", "MSE", "MSW", "MVG", "MBN", "MBS", "MID", ],				
										series: [
											//[1,5,0,0,4,0,0,1,0,0]
											seriesData
										]
									},
									{
										axisY : 
										{
										 onlyInteger:"yes"
										}
									}
			);
	}	
	///////////////////End of Reported Cases Per Province ////////////////////////
	///////////////////Gender BreakDown //////////////////////////////////////////
    function Gender_BreakDown(seriesData){
    	new Chartist.Pie('.ct-chart4', {
    	  labels: ['Male','Female'],
    	  //labels:labelData,
    	  //series: [7,4]
    	  series: seriesData
    	}, options, responsiveOptions);
    	

    	var options = {
    	  labelInterpolationFnc: function(value) {
    	    return value[0]
    	  }
    	};

    	var responsiveOptions = [
    	  ['screen and (min-width: 640px)', {
    	    chartPadding: 30,
    	    labelOffset: 100,
    	    labelDirection: 'explode',
    	    labelInterpolationFnc: function(value) {
    	      return value;
    	    }
    	  }],
    	  ['screen and (min-width: 1024px)', {
    	    labelOffset: 80,
    	    chartPadding: 20
    	  }]
    	];
    }

   ///////////////////End ofGender BreakDown ///////////////////////////////////
   ///////////////////Total Positive Cases /////////////////////////////////////      

   function Total_Positive(seriesData,lablesData){
		var data2 = {
               // A labels array that can contain any sort of values
				labels: lablesData,
               // Our series array that contains series objects or in this case series data arrays
               series: [
			   seriesData
               ]
             };
        //FIX THE Y AXIS	     
	        var steps = 1;
	        var max = 10;
	        new Chartist.Line('.ct-chart3', data2,
							{
								axisY : 
										{
										 onlyInteger:"yes"
										}
							}
						);
	}	
	///////////////////End of Total Positive Cases ///////////////////////////////
	/////////////////// Table Positive Cases ////////////////////////////////////			
			let  container = document.getElementById('table_data');
			function tableShow(rowsData){          
			    container.innerHTML    = ""           
			    console.log(rowsData)            
			  for (var i = 0; i < rowsData.length; i++) {	
			  		   console.log(rowsData[i])
			    container.innerHTML    +=
			    
			      '<tr><th scope="row">'+
			      rowsData[i].Dated
			      +'</th><!--BUL--><th scope="col">'+
			      rowsData[i].BULPSTV 
			      +'</th><!--HRE--><th scope="col">'+
			      rowsData[i].HREPSTV 			      
			      +'</th><!--MNL--><th scope="col">'+
			      rowsData[i].MNLPSTV 
			      +'</th><!--MSC--><th scope="col">'+
			      rowsData[i].MSCPSTV 
			      +'</th><!--MSE--><th scope="col">'+
			      rowsData[i].MSEPSTV 
			      +'</th><!--MSW--><th scope="col">'+
			      rowsData[i].MSWPSTV 
			      +'</th><!--MVG--><th scope="col">'+
			      rowsData[i].MVGPSTV 
			      +'</th><!--MBN--><th scope="col">'+
			      rowsData[i].MBNPSTV 
			      +'</th><!--MBS--><th scope="col">'+
			      rowsData[i].MBSPSTV 
			      +'</th><!--MID--><th scope="col">'+
			      rowsData[i].MIDPSTV
			      +'</th></tr>'			    
				}
			}
		///////////////////End of Table Positive Cases ///////////////////////////////
		///////////////////////XHR STUFF////////////////////////////////////////////////
		///////////////////Gender BreakDown //////////////////////////////////////////

		var xhr = new XMLHttpRequest();
		xhr.withCredentials = true;
		
		
		xhr.open("GET", "http://127.0.0.1:8081/sexUpdate",true);
		xhr.setRequestHeader('Content-Type','application/json');
		xhr.send();
		xhr.onreadystatechange=function(){
			if(this.readyState==4&&this.status==200){
			var jsonResponse = JSON.parse(xhr.responseText);
			console.log( xhr.responseText)  
			
			var data 			= jsonResponse[0]

			var integer_male 	= parseInt(data.male, 10);			
			var integer_female 	= parseInt(data.female, 10);

			seriesData 			= [integer_male,integer_female]
			
			Gender_BreakDown(seriesData)
			document.getElementById("summary_loader12").style.display = 'none'		


			}/*else{
			alert('sorry no product found please try again')
			}*/
		}
		///////////////////End ofGender BreakDown ///////////////////////////////////	

		/////////////////// Transmission Type //////////////////////////////////////
		var xhr2 				= new XMLHttpRequest();
		xhr2.withCredentials 	= true;
		
		
		xhr2.open("GET", "http://127.0.0.1:8081/transmissionUpdate",true);
		xhr2.setRequestHeader('Content-Type','application/json');
		xhr2.send();
		xhr2.onreadystatechange=function(){
			if(this.readyState==4&&this.status==200){
			var jsonResponse = JSON.parse(xhr2.responseText);
			console.log( xhr2.responseText)  

			var data 			= jsonResponse[0]
			var integer_travel 	= parseInt(data.travel, 10);			
			var integer_pending = parseInt(data.pending, 10);
			var integer_local 	= parseInt(data.local, 10);			
			seriesData 			= [integer_travel,integer_local,integer_pending ]
			
			Transmission_Type(seriesData)
			document.getElementById("summary_loader13").style.display = 'none'		
						
			}/*else{
			alert('sorry no product found please try again')
			}*/
		}
		///////////////////End Of  Transmission Type ////////////////////////////////

		///////////////////Reported Cases Per Province //////////////////////////////
		var xhr3 				= new XMLHttpRequest();
		xhr3.withCredentials 	= true;
		
		
		xhr3.open("GET", "http://127.0.0.1:8081/CasesProvince",true);
		xhr3.setRequestHeader('Content-Type','application/json');
		xhr3.send();
		xhr3.onreadystatechange=function(){
			if(this.readyState==4&&this.status==200){
				console.log( xhr3.responseText) 
				var jsonResponse 				= JSON.parse(xhr3.responseText);				 
				var data 						= jsonResponse[0]
				var integer_Bulawayo 			= parseInt(data.Bulawayo,10);
				var integer_Harare 				= parseInt(data.Harare,10);
				var integer_Manicaland 			= parseInt(data.Manicaland,10);
				var integer_Mashonaland_Central = parseInt(data.Mashonaland_Central,10);
				var integer_Mashonaland_East 	= parseInt(data.Mashonaland_East,10);
				var integer_Mashonaland_West 	= parseInt(data.Mashonaland_West,10);
				var integer_Masvingo 			= parseInt(data.Masvingo,10);
				var integer_Matabeleland_North 	= parseInt(data.Matabeleland_North,10);
				var integer_Matabeleland_South 	= parseInt(data.Matabeleland_South,10);
				var integer_Midlands 			= parseInt(data.Midlands,10);
				var seriesData 					= [integer_Bulawayo,integer_Harare,integer_Manicaland,integer_Mashonaland_Central,integer_Mashonaland_East,integer_Mashonaland_West,integer_Masvingo,integer_Matabeleland_North,integer_Matabeleland_South,integer_Midlands]							
					
				Reported_Cases_Per_Province(seriesData)	
				document.getElementById("summary_loader11").style.display = 'none'					
			}/*else{
			alert('sorry no product found please try again')
			}*/
		}
		///////////////////End of Reported Cases Per Province ////////////////////////
		
		///////////////////Summary ///////////////////////////////////////////////////
		var xhr4 				= new XMLHttpRequest();
		xhr4.withCredentials 	= true;
		
		
		xhr4.open("GET", "http://127.0.0.1:8081/UpdateSummary",true);
		xhr4.setRequestHeader('Content-Type','application/json');
		xhr4.send();
		xhr4.onreadystatechange=function(){
			if(this.readyState==4&&this.status==200){
				//console.log( xhr4.responseText) 
				var jsonResponse 				= JSON.parse(xhr4.responseText);				 
				var data 						= jsonResponse[0]
				
				document.getElementById("summary_loader").style.display  = 'none'				
				document.getElementById("summary_loader2").style.display = 'none'
				document.getElementById("summary_loader3").style.display = 'none'
				document.getElementById("summary_loader4").style.display = 'none'
				document.getElementById("summary_loader5").style.display = 'none'
				document.getElementById("summary_loader6").style.display = 'none'
				document.getElementById("summary_loader7").style.display = 'none'
				document.getElementById("summary_loader8").style.display = 'none'
				document.getElementById("summary_loader9").style.display = 'none'


				document.getElementById("TotalTests").innerHTML   	="<h5>"+data.TotalTests+"</h5>"				
				document.getElementById("PositiveCases").innerHTML	="<h5>"+data.PositiveCases+"<h5>"
				document.getElementById("NegativeTests").innerHTML 	="<h5>"+data.NegativeTests+"<h5>"
				document.getElementById("Deaths").innerHTML 		="<h5>"+data.Deaths+"<h5>"
				document.getElementById("ICU").innerHTML 			="<h5>"+data.ICU+"<h5>"
				document.getElementById("AverageAge").innerHTML 	="<h5>"+data.AverageAge+"<h5>"
				document.getElementById("MedianAge").innerHTML 		="<h5>"+data.MedianAge+"<h5>"
				document.getElementById("MinimumAge").innerHTML 	="<h5>"+data.MinimumAge+"<h5>"
				document.getElementById("MaximumAge").innerHTML 	="<h5>"+data.MaximumAge+"<h5>"							
							
			}/*else{
			alert('sorry no product found please try again')
			}*/
		}

		///////////////////End of Summarry ////////////////////////////////////////


		///////////////////Summary //////////////////////////////////////////////
		var xhr5 				= new XMLHttpRequest();
		xhr5.withCredentials 	= true;
		
		
		xhr5.open("GET", "http://127.0.0.1:8081/dateUpdate",true);
		xhr5.setRequestHeader('Content-Type','application/json');
		xhr5.send();
		xhr5.onreadystatechange=function(){
			if(this.readyState==4&&this.status==200){
				
				var jsonResponse 				= JSON.parse(xhr5.responseText);				 
				var data 						= jsonResponse[0]
				
				document.getElementById("dateUpdate").innerHTML ="<h6 style='color:red'>Update as of " +data.date+"</h6>"
				
			}/*else{
			alert('sorry no product found please try again')
			}*/
		}

		///////////////////End of Summarry ////////////////////////////////////////
		///////////////////day graph //////////////////////////////////////////////
		var xhr6 				= new XMLHttpRequest();
		xhr6.withCredentials 	= true;
		
		
		xhr6.open("GET", "http://127.0.0.1:8081/apidaygraph",true);
		xhr6.setRequestHeader('Content-Type','application/json');
		xhr6.send();
		xhr6.onreadystatechange=function(){
			if(this.readyState==4&&this.status==200){
				//console.log( xhr6.responseText) 
				var jsonResponse 				= JSON.parse(xhr6.responseText);				 
				var data 						= jsonResponse
				console.log(data) 
				let	dateData = []
				let numberData= []
					

				for (let index = 0; index < data.length; index++) {
					const elementD = data[index].Date;
					const elementC = data[index].CMTTOTAL;
					
					//truncate returned date to fit graph
					var TruncatedDate = elementD.substring(0,10);

					dateData.push(TruncatedDate)
					numberData.push(elementC)
					
				}	

				Total_Positive(numberData,dateData)	
				document.getElementById("summary_loader10").style.display = 'none'			
			}/*else{
			alert('sorry no product found please try again')
			}*/
		}

		///////////////////End of day table /////////////////////////////////////////
		var xhr7 				= new XMLHttpRequest();
		xhr7.withCredentials 	= true;
		
		
		xhr7.open("GET", "http://127.0.0.1:8081/apidaytable",true);
		xhr7.setRequestHeader('Content-Type','application/json');
		xhr7.send();
		xhr7.onreadystatechange=function(){
			if(this.readyState==4&&this.status==200){
				//console.log( xhr7.responseText) 
				var jsonResponse 				= JSON.parse(xhr7.responseText);				 
				var data 						= jsonResponse
				
				let	rowsData = []			

				for (let index = 0; index < data.length; index++) {
					//get data in full
					const elementD = data[index].Date
					//trunate date to fit table
					var TruncatedDate = elementD.substring(0,10);
					//create row object
					var rowData = {
						Dated 	: TruncatedDate,
						CMTTOTAL: data[index].CMTTOTAL,
						HREPSTV : data[index].HREPSTV,
						BULPSTV : data[index].BULPSTV,
						MNLPSTV : data[index].MNLPSTV,
						MSCPSTV : data[index].MSCPSTV,
						MSEPSTV : data[index].MSEPSTV,
						MSWPSTV : data[index].MSWPSTV,
						MVGPSTV : data[index].MVGPSTV,
						MBNPSTV : data[index].MBNPSTV,
						MBSPSTV : data[index].MBSPSTV,
						MIDPSTV : data[index].MIDPSTV
					}							
					//push object to array
					rowsData.push(rowData)					
				}
			
				tableShow(rowsData)			
				
			}/*else{
			alert('sorry no product found please try again')
			}*/
		}
		

		///////////////////End of day table ////////////////////////////////////////	
		///////////////////////END OF XHR STUFF//////////////////////////////////////////      
    	