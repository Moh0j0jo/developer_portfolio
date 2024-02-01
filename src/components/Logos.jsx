const Logos = () => {
 

 const importAll = (context) => context.keys().map(context);
 const images = importAll(require.context('../Assets/Logos', false, /\.(png|jpe?g|svg)$/));

 return (
   <div className="logos">
   
       {images.map((image, index) => (

      <svg key={index} xmlns="http://www.w3.org/2000/svg">
        <image href={image} width="100%" height="100%" />
      </svg>
         
       ))}
    </div>

 );
};


export default Logos;