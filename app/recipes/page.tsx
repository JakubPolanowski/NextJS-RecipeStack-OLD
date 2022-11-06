import Link from "next/link";

async function getRecipes() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30",
    { cache: "no-store" }
  );
  const data = await res.json();
  return data?.items as any[];
}

export default async function RecipesPage() {
  const recipes = await getRecipes();

  return (
    <div>
      <h1>Recipes</h1>
      <div>
        {recipes?.map((recipe) => {
          return <Recipe key={recipe.id} recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

function Recipe({ recipe }: any) {
  const { id, title, content, created } = recipe || {};

  return (
    <Link href={`/recipes/${id}`}>
      <div>
        <h2>{title}</h2>
        <h5>{content}</h5>
        <p>{created}</p>
      </div>
    </Link>
  );
}
