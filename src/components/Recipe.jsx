import ReactMarkdown from 'react-markdown'

const Recipe = ({finalRecipe}) => {

  return (
    <section className="suggested-recipe-container">
      <ReactMarkdown children={finalRecipe} />  {/* ReactMarkdown fixes the ** for spaces and indentations */}
    </section>
  );
};

export default Recipe;
