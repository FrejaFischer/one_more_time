import Image from "next/image";
export default async function Animal({ params }) {
  const { slug } = params;
  let headersList = {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNib2F3YnZka2dieHV5aWh1eXpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY4NTE1MzAsImV4cCI6MjAxMjQyNzUzMH0.Iq40XCZG1EvkMh2BD41TMTkAK97Ow5WwUwb_7tDsZeI",
    Prefer: "return=representation",
  };
  // let res = await fetch(`https://cboawbvdkgbxuyihuyzj.supabase.co/rest/v1/pets?id=eq.1`, {
  //   method: "GET",
  //   headers: headersList,
  // });
  let res = await fetch(`https://cboawbvdkgbxuyihuyzj.supabase.co/rest/v1/pets?id=eq.${slug}`, {
    method: "GET",
    headers: headersList,
  });
  const data = await res.json();
  // console.log(data[0]);
  const { name, id, traits, image, race, species, dob, activityLevel } = data[0];

  return (
    <main className="flex place-content-center mt-8">
      <article className="w-80 grid justify-items-center border-solid border border-lime-600">
        <h1 className="text-2xl font-bold text-lime-600">{name}</h1>
        <p>
          <span>{species}</span>
          {race && <span> - {race}</span>}
        </p>
        <p>{new Date().getFullYear() - dob.slice(0, 4)} years old</p>
        <div className="flex gap-3">
          {traits.map((trait) => {
            let newTrait = trait.charAt(0).toUpperCase() + trait.slice(1);
            return (
              <p key={trait} className="bg-lime-600 w-fit px-2 rounded-md">
                {newTrait}
              </p>
            );
          })}
        </div>
        <p>
          Activity level: <span>{activityLevel}</span>
        </p>
        <img className="w-auto" src={image} alt={name} />
        {/* <Image
        scr={image}
        alt={name}
        width="100"
        height="100"
        priority={true}
        sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         400px"
      /> */}
      </article>
    </main>
  );
}
