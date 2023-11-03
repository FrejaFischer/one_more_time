import Link from "next/link";
export default async function Menu() {
  let headersList = {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNib2F3YnZka2dieHV5aWh1eXpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY4NTE1MzAsImV4cCI6MjAxMjQyNzUzMH0.Iq40XCZG1EvkMh2BD41TMTkAK97Ow5WwUwb_7tDsZeI",
    Prefer: "return=representation",
  };
  let res = await fetch("https://cboawbvdkgbxuyihuyzj.supabase.co/rest/v1/pets", {
    method: "GET",
    headers: headersList,
  });
  const pages = await res.json();
  return (
    <nav>
      <ul className="flex gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>

        {pages.map((page) => (
          <li key={page.id}>
            <Link href={`/${page.id}`} prefetch={false}>
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
