import { notEqual } from "assert";

async function getNote(noteId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/recipes/records/${noteId}`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data;
}

export default async function RecipePage({ params }: any) {
  const recipe = await getNote(params.id);

  return (
    <div>
      <h1>Recipe</h1>
      <div>
        <h3>{recipe.title}</h3>
        <h5>{recipe.content}</h5>
        <p>{recipe.created}</p>
      </div>
    </div>
  );
}
