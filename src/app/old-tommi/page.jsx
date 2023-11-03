export default async function Tommi() {
  let headersList = {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNib2F3YnZka2dieHV5aWh1eXpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY4NTE1MzAsImV4cCI6MjAxMjQyNzUzMH0.Iq40XCZG1EvkMh2BD41TMTkAK97Ow5WwUwb_7tDsZeI",
    Prefer: "return=representation",
  };
  let res = await fetch("https://cboawbvdkgbxuyihuyzj.supabase.co/rest/v1/pets?id=eq.40", {
    method: "GET",
    headers: headersList,
  });
  const data = await res.json();

  //   console.log(data[0].name);
  const { name, id, traits } = data[0];

  return (
    <main>
      <h1>{name}</h1>
      <p>Id= {id}</p>
      <ul>
        {traits.map((trait) => (
          <li key={trait}>{trait}</li>
        ))}
      </ul>
    </main>
  );
}
