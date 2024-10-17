"use strict";

/* ======= Header animation ======= */   
const header = document.getElementById('header');  

window.onload=function() 
{   
    headerAnimation(); 

};

window.onresize=function() 
{   
    headerAnimation(); 

}; 

window.onscroll=function() 
{ 
    headerAnimation(); 

}; 
    

function headerAnimation () {

    var scrollTop = window.scrollY;
	
	if ( scrollTop > 0 ) {	    
	    header.classList.add('header-scrolled');    
	    	    
	} else {
	    header.classList.remove('header-scrolled');
	}

};




let scrollLinks = document.querySelectorAll('.scrollto');
const pageNavWrapper = document.getElementById('navbar-collapse');

scrollLinks.forEach((scrollLink) => {

	scrollLink.addEventListener('click', (e) => {
		
		e.preventDefault();

		let element = document.querySelector(scrollLink.getAttribute("href"));
		
		const yOffset = 60; //page .header height
		
		//console.log(yOffset);
		
		const y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;
		
		window.scrollTo({top: y, behavior: 'smooth'});
		
		
		//Collapse mobile menu after clicking
		if (pageNavWrapper.classList.contains('show')){
			pageNavWrapper.classList.remove('show');
		}

		
    });
	
});

/* ===== Gumshoe SrollSpy ===== */
/* Ref: https://github.com/cferdinandi/gumshoe  */

// Initialize Gumshoe
var spy = new Gumshoe('#navbar-collapse .nav-link', {
	offset: 60
});

    document.getElementById('downloadButton').addEventListener('click', function() {
      const fileUrl = 'files/regestrationFile.pdf'; // Update the file path here
      const fileName = 'registration_form.pdf';

      const a = document.createElement('a');
      a.href = fileUrl;
      a.download = fileName;

      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  
