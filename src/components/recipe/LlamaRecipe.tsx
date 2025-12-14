import ReactMarkdown from "react-markdown";

export default function LlamaRecipe(props: { recipe: string }) {
  return (
    <section className="suggested-recipe-container">
      <h2>Chef Llama Recommends:</h2>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  );
}
