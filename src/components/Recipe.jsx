import ReactMarkdown from 'react-markdown'

const Recipe = ({finalRecipe}) => {

  return (
    <section className="suggested-recipe-container">
      <ReactMarkdown children={finalRecipe} />
    </section>
  );
};

export default Recipe;
