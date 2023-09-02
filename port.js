

const toggleListVisibility = (id, list) => {
    if (list.style.display === 'none') {
        list.style.display = 'block'; // Show the list
        id.innerHTML = 'Click to Hide'; //Change button
    } else {
        list.style.display = 'none';  // Hide the list
        id.innerHTML = 'Click for More'; //Change button
    }
}

const hideList = (id, list) => {
    id.onclick = () => {
        // Toggle list visibility when the button is clicked
        toggleListVisibility(id, list); 
    }
}

if (typeof window !== 'undefined') {
    // This code will only run in a browser environment
    window.onload = function() {
        // Your code that manipulates the DOM goes here
        const wxp1 = document.getElementById('wxp1');
        const wxp2 = document.getElementById('wxp2');
        const wxp3 = document.getElementById('wxp3');
        const wxp4 = document.getElementById('wxp4');

        const aclist = document.getElementById('aclist');
        const vmlist = document.getElementById('vmlist');
        const xblist = document.getElementById('xblist');
        const jrllist = document.getElementById('jrllist');

        hideList(wxp1 ,aclist);
        hideList(wxp2 ,vmlist);
        hideList(wxp3 ,xblist);
        hideList(wxp4 ,jrllist);     
    }
}

