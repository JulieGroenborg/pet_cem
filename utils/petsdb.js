const myApikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmZGZ3YXVmeXR3ZHVyb3BuZHl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY4NDY3NzMsImV4cCI6MjAxMjQyMjc3M30.cX_qLqrbHMXj2dbzqfm88QbNPlMAXYOy8OQkNapHWG8";

//GET

export async function getPets() {
  let headersList = {
    apikey: myApikey,
  };

  let response = await fetch("https://pfdfwaufytwduropndyt.supabase.co/rest/v1/pets", {
    method: "GET",
    headers: headersList,
  });

  let data = await response.json();
  return data;
}

//POST
export async function addPet() {
  let headersList = {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmZGZ3YXVmeXR3ZHVyb3BuZHl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY4NDY3NzMsImV4cCI6MjAxMjQyMjc3M30.cX_qLqrbHMXj2dbzqfm88QbNPlMAXYOy8OQkNapHWG8",
    prefer: "return=presentation",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({ species: "Kanin", name: "Bønne" });

  let response = await fetch("https://pfdfwaufytwduropndyt.supabase.co/rest/v1/pets", {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.json();
  return data;
  // console.log(data);
}

//DELETE
export async function deletePet(id) {
  let headersList = {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmZGZ3YXVmeXR3ZHVyb3BuZHl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY4NDY3NzMsImV4cCI6MjAxMjQyMjc3M30.cX_qLqrbHMXj2dbzqfm88QbNPlMAXYOy8OQkNapHWG8",
    prefer: "return=presentation",
  };

  let response = await fetch("https://pfdfwaufytwduropndyt.supabase.co/rest/v1/pets?id=eq." + id, {
    method: "DELETE",
    headers: headersList,
  });

  let data = await response.json();
  return data;
  // console.log(data);
}

//PATCH/update
export async function updatePet(id) {
  let headersList = {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmZGZ3YXVmeXR3ZHVyb3BuZHl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY4NDY3NzMsImV4cCI6MjAxMjQyMjc3M30.cX_qLqrbHMXj2dbzqfm88QbNPlMAXYOy8OQkNapHWG8",
    prefer: "return=presentation",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({ species: "Kat", name: "Musse" });

  let response = await fetch("https://pfdfwaufytwduropndyt.supabase.co/rest/v1/pets?id=eq." + id, {
    method: "PATCH",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.json();
  return data;
  // console.log(data);
}
