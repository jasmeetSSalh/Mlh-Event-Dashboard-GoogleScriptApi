// Fetch events from the google script API

async function load(){

    const response = await 
    fetch('https://script.googleusercontent.com/macros/echo?user_content_key=Ot8FinqJeCVdnLuDQtDV0Brf1Ef6uBYko6jUgjn-j9wh8nCWPmM0rIkIGpwvPrdBA-eh0L1bDZHFu2t0INVjG089imvRH6FXm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDyIZA8fwotYvLVJGjcmPFIAqJ3srEQm9Y6pBHZSK3P1cyfNiyUCxrL-GvtNB1Tbj_GPT07n503HJydz1vvrwrfO0b7EoK6Cm9z9Jw9Md8uu&lib=M0sWdAXEilZ3uYJMAvl4--cp3LzD-rRQ_');

    const events = await response.json();

    const eventsContainer = document.getElementById("event-container");
    eventsContainer.innerHTML='';

    for (let event of events) {
        eventsContainer.innerHTML += `
          <div class="card w-72 bg-base-100 shadow-xl">
            <figure><img src="${event.Image}" alt="${event.Name}" /></figure>
            <div class="card-body">
              <h2 class="card-title">${event.Name}</h2>
              <p>${event.Location}<br/>@ ${event.Date}</p>
              <div class="card-actions justify-end">
                <a class="btn btn-primary" href="${event.Link}" target="_blank">RSVP</a>
              </div>
            </div>
          </div>
        `
    }
}


load();

// Loop through the events and paste them on the page