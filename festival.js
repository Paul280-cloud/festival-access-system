// ==========================================
// FESTIVAL CONTROL SYSTEM
// ==========================================

let attendees = [
  { name: "Lebo", age: 22, ticket: "General", hasTicket: true, checkedIn: false, spend: 350 },
  { name: "Aisha", age: 19, ticket: "VIP", hasTicket: true, checkedIn: false, spend: 1200 },
  { name: "Thabo", age: 17, ticket: "General", hasTicket: true, checkedIn: false, spend: 250 },
  { name: "Naledi", age: 25, ticket: "VIP", hasTicket: true, checkedIn: false, spend: 850 },
  { name: "Jason", age: 31, ticket: "General", hasTicket: false, checkedIn: false, spend: 0 },
  { name: "Zanele", age: 20, ticket: "General", hasTicket: true, checkedIn: false, spend: 650 },
  { name: "Karabo", age: 16, ticket: "VIP", hasTicket: true, checkedIn: false, spend: 900 },
  { name: "Michael", age: 28, ticket: "General", hasTicket: true, checkedIn: false, spend: 450 }
];
// Simulated surprise data change — Neo is added to the queue
attendees.push({ name: "Neo", age: 23, ticket: "VIP", hasTicket: true, checkedIn: false, spend: 1500 });
const CAPACITY = 5;


// ==========================================
// CHALLENGE 1: VIEW THE QUEUE
// ==========================================
console.log("CHALLENGE 1: VIEW THE QUEUE");
for (const attendee of attendees) {
  console.log(`Name: ${attendee.name}`);
  console.log(`Age: ${attendee.age}`);
  console.log(`Ticket: ${attendee.ticket}`);
  console.log(`Valid Ticket: ${attendee.hasTicket}`);
}


// ==========================================
// CHALLENGE 2: WHO CAN ENTER?
// ==========================================
console.log("\nCHALLENGE 2: WHO CAN ENTER?");
for (const attendee of attendees) {
  if (attendee.age >= 18 && attendee.hasTicket === true) {
    console.log(`${attendee.name} -> ENTRY APPROVED`);
  } else if (attendee.age < 18) {
    console.log(`${attendee.name} -> ENTRY DENIED: UNDER 18`);
  } else {
    console.log(`${attendee.name} -> ENTRY DENIED: NO VALID TICKET`);
  }
}


// ==========================================
// CHALLENGE 3: ACCESS ZONES
// ==========================================
console.log("\nCHALLENGE 3: ACCESS ZONES");
for (const attendee of attendees) {
  if (!(attendee.age >= 18 && attendee.hasTicket === true)) {
    console.log(`${attendee.name}: No wristband - entry denied`);
    continue;
  }

  let wristband;
  switch (attendee.ticket) {
    case "VIP":
      wristband = "GOLD WRISTBAND";
      break;
    case "General":
      wristband = "BLUE WRISTBAND";
      break;
    default:
      wristband = "UNKNOWN TICKET TYPE";
  }
  console.log(`${attendee.name} - Ticket: ${attendee.ticket} - Wristband: ${wristband}`);
}


// ==========================================
// CHALLENGE 4: VIP LOUNGE SECURITY
// ==========================================
console.log("\nCHALLENGE 4: VIP LOUNGE SECURITY");
for (const attendee of attendees) {
  if (attendee.hasTicket === true && attendee.ticket === "VIP" && attendee.age >= 18) {
    console.log(`${attendee.name}: VIP LOUNGE ACCESS APPROVED`);
  } else if (attendee.ticket === "VIP" && attendee.age < 18) {
    console.log(`${attendee.name}: VIP LOUNGE ACCESS DENIED - UNDER 18`);
  } else if (attendee.ticket === "VIP" && attendee.hasTicket !== true) {
    console.log(`${attendee.name}: VIP LOUNGE ACCESS DENIED - NO VALID TICKET`);
  } else {
    console.log(`${attendee.name}: VIP LOUNGE ACCESS DENIED - NOT A VIP TICKET`);
  }
}
console.log("Karabo has a VIP ticket but is denied because she is under 18.");


// ==========================================
// CHALLENGE 5: FIND A PERSON IN THE QUEUE
// ==========================================
console.log("\nCHALLENGE 5: FIND A PERSON IN THE QUEUE");
let searchName = "Zanele";
let foundAttendee = false;

for (const attendee of attendees) {
  if (attendee.name === searchName) {
    console.log("ATTENDEE FOUND");

    const labels = {
      name: "Name",
      age: "Age",
      ticket: "Ticket",
      hasTicket: "Valid Ticket"
    };

    for (const property in attendee) {
      // Skip the two properties the brief does not ask for
      if (property === "checkedIn" || property === "spend") continue;
      console.log(`${labels[property] || property}: ${attendee[property]}`);
    }

    foundAttendee = true;
    break;
  }
}

if (!foundAttendee) {
  console.log(`ATTENDEE NOT FOUND: ${searchName}`);
}


// ==========================================
// CHALLENGE 6: SECURITY FAST LANE
// ==========================================
console.log("\nCHALLENGE 6: SECURITY FAST LANE");
for (const attendee of attendees) {
  if (attendee.hasTicket === false) {
    continue;
  }
  console.log(`Checking ${attendee.name}...`);
}


// ==========================================
// CHALLENGE 7: FOOD VOUCHER REWARDS
// ==========================================
console.log("\nCHALLENGE 7: FOOD VOUCHER REWARDS");
for (const attendee of attendees) {
  if (attendee.spend >= 1000) {
    console.log(`${attendee.name}: R200 food voucher`);
  } else if (attendee.spend >= 500) {
    console.log(`${attendee.name}: R100 food voucher`);
  } else if (attendee.spend >= 300) {
    console.log(`${attendee.name}: R50 food voucher`);
  } else {
    console.log(`${attendee.name}: No voucher`);
  }
}


// ==========================================
// CHALLENGE 8: FESTIVAL STATISTICS
// ==========================================
console.log("\nCHALLENGE 8: FESTIVAL STATISTICS");

let validTickets = 0;
let invalidTickets = 0;
let under18 = 0;
let vipCount = 0;
let generalCount = 0;
let totalSpend = 0;
let biggestSpender = attendees.length > 0 ? attendees[0] : null;

for (const attendee of attendees) {
  if (attendee.hasTicket === true) {
    validTickets++;
  } else {
    invalidTickets++;
  }

  if (attendee.age < 18) {
    under18++;
  }

  if (attendee.ticket === "VIP") {
    vipCount++;
  } else if (attendee.ticket === "General") {
    generalCount++;
  }

  totalSpend += attendee.spend;

  if (biggestSpender === null || attendee.spend > biggestSpender.spend) {
    biggestSpender = attendee;
  }
}

let averageSpend = attendees.length > 0 ? totalSpend / attendees.length : 0;

console.log(`Total attendees in queue: ${attendees.length}`);
console.log(`Valid tickets: ${validTickets}`);
console.log(`Invalid tickets: ${invalidTickets}`);
console.log(`Under-18 attendees: ${under18}`);
console.log(`General ticket holders: ${generalCount}`);
console.log(`VIP ticket holders: ${vipCount}`);
console.log(`Total amount spent: R${totalSpend}`);
console.log(`Average amount spent per attendee: R${averageSpend.toFixed(2)}`);
console.log(`Highest-spending attendee: ${biggestSpender === null ? "None" : biggestSpender.name}`);


// ==========================================
// CHALLENGE 9: FIND THE BIGGEST SPENDER
// ==========================================
console.log("\nCHALLENGE 9: FIND THE BIGGEST SPENDER");
console.log("=== TOP CUSTOMER ===");

if (biggestSpender !== null) {
  let topReward;
  if (biggestSpender.spend >= 1000) {
    topReward = "Backstage Upgrade";
  } else if (biggestSpender.spend >= 500) {
    topReward = "R100 food voucher";
  } else if (biggestSpender.spend >= 300) {
    topReward = "R50 food voucher";
  } else {
    topReward = "No voucher";
  }

  console.log(`Name: ${biggestSpender.name}`);
  console.log(`Amount Spent: R${biggestSpender.spend}`);
  console.log(`Reward: ${topReward}`);
}


// ==========================================
// CHALLENGE 10: VENUE CAPACITY
// ==========================================
console.log("\nCHALLENGE 10: VENUE CAPACITY");

let peopleInside = 0;
for (const attendee of attendees) {
  if (attendee.checkedIn === true) {
    peopleInside++;
  }
}

if (peopleInside >= CAPACITY) {
  console.log("VENUE FULL");
  console.log("STOP ADMITTING PEOPLE");
} else {
  for (let i = 0; i < attendees.length && peopleInside < CAPACITY; i++) {
    const attendee = attendees[i];

    if (attendee.checkedIn === true || !(attendee.age >= 18 && attendee.hasTicket === true)) {
      continue;
    }

    attendee.checkedIn = true;
    peopleInside++;
    console.log(`${attendee.name} entered.`);
    console.log(`People inside: ${peopleInside} / ${CAPACITY}`);

    if (peopleInside === CAPACITY) {
      console.log("VENUE FULL");
      console.log("STOP ADMITTING PEOPLE");
    }
  }

  if (peopleInside < CAPACITY) {
    console.log(`Queue processed. People inside: ${peopleInside} / ${CAPACITY}`);
  }
}


// ==========================================
// CHALLENGE 11: CLOSING-TIME COUNTDOWN
// ==========================================
console.log("\nCHALLENGE 11: CLOSING-TIME COUNTDOWN");
let minutesRemaining = 10;

do {
  const plural = minutesRemaining === 1 ? "" : "s";
  console.log(`Festival closes in ${minutesRemaining} minute${plural}...`);

  if (minutesRemaining === 5) {
    console.log("WARNING: LAST ENTRY HAS ENDED");
  }
  if (minutesRemaining === 2) {
    console.log("PLEASE PROCEED TO THE EXIT");
  }

  minutesRemaining--;
} while (minutesRemaining > 0);

console.log("FESTIVAL CLOSED");


// ==========================================
// FESTIVAL CONTROL DASHBOARD
// ==========================================

// Reset so the dashboard demo can run entry from scratch
for (const attendee of attendees) {
  attendee.checkedIn = false;
}
let option = 2;

console.log("        FESTIVAL CONTROL");
console.log("1 - View Attendee Queue");
console.log("2 - Process Entry");
console.log("3 - View VIP Guests");
console.log("4 - View Denied Attendees");
console.log("5 - View Festival Statistics");
console.log("6 - Find Biggest Spender");
console.log("7 - Close Festival");
console.log(`Selected option: ${option}`);

switch (option) {
  case 1:
    for (const attendee of attendees) {
      console.log(`${attendee.name}, age ${attendee.age}, ${attendee.ticket}, valid ticket: ${attendee.hasTicket}`);
    }
    break;

  case 2: {
    let dashboardInside = 0;
    for (const a of attendees) {
      if (a.checkedIn === true) {
        dashboardInside++;
      }
    }

    if (dashboardInside >= CAPACITY) {
      console.log("VENUE FULL");
      console.log("STOP ADMITTING PEOPLE");
      break;
    }

    for (const attendee of attendees) {
      if (attendee.checkedIn === true || !(attendee.age >= 18 && attendee.hasTicket === true)) {
        continue;
      }

      attendee.checkedIn = true;
      dashboardInside++;
      console.log(`${attendee.name} entered.`);
      console.log(`People inside: ${dashboardInside} / ${CAPACITY}`);

      if (dashboardInside === CAPACITY) {
        console.log("VENUE FULL");
        console.log("STOP ADMITTING PEOPLE");
        break;
      }
    }

    if (dashboardInside < CAPACITY) {
      console.log(`Entry processing complete. ${dashboardInside} attendee(s) inside.`);
    }
    break;
  }

  case 3:
    for (const attendee of attendees) {
      if (attendee.hasTicket === true && attendee.ticket === "VIP" && attendee.age >= 18) {
        console.log(`${attendee.name}: VIP guest - lounge access approved`);
      }
    }
    break;

  case 4:
    for (const attendee of attendees) {
      if (attendee.age < 18) {
        console.log(`${attendee.name}: DENIED - UNDER 18`);
      } else if (attendee.hasTicket !== true) {
        console.log(`${attendee.name}: DENIED - NO VALID TICKET`);
      }
    }
    break;

  case 5:
    console.log(`Total attendees in queue: ${attendees.length}`);
    console.log(`Valid tickets: ${validTickets}`);
    console.log(`Invalid tickets: ${invalidTickets}`);
    console.log(`Under-18 attendees: ${under18}`);
    console.log(`General ticket holders: ${generalCount}`);
    console.log(`VIP ticket holders: ${vipCount}`);
    console.log(`Total amount spent: R${totalSpend}`);
    console.log(`Average amount spent per attendee: R${averageSpend.toFixed(2)}`);
    console.log(`Highest-spending attendee: ${biggestSpender === null ? "None" : biggestSpender.name}`);
    break;

  case 6:
    if (biggestSpender !== null) {
      console.log(`Biggest spender: ${biggestSpender.name} - R${biggestSpender.spend}`);
    } else {
      console.log("There are no attendees in the queue.");
    }
    break;

  case 7: {
    let dashboardMinutes = 10;
    do {
      const plural = dashboardMinutes === 1 ? "" : "s";
      console.log(`Festival closes in ${dashboardMinutes} minute${plural}...`);

      if (dashboardMinutes === 5) {
        console.log("WARNING: LAST ENTRY HAS ENDED");
      }
      if (dashboardMinutes === 2) {
        console.log("PLEASE PROCEED TO THE EXIT");
      }

      dashboardMinutes--;
    } while (dashboardMinutes > 0);

    console.log("FESTIVAL CLOSED");
    break;
  }

  default:
    console.log("INVALID CONTROL OPTION");
}