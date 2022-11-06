import Link from "next/link";
import PocketBase from "pocketbase";

async function getRecipes() {
  const client = new PocketBase("http://127.0.0.1:8090");
  const resultList = await client.records.getList("recipes", 1, 50);
  return resultList?.items as any[];
}

export default async function RecipePage() {
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
