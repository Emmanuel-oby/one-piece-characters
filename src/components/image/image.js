import "../../App.css"

const Image = (props) => {
	
	return (
		<div>
			<img
        className="image"
				src={props.imageURL}
				alt={props.alt}
			/>
		</div>
	);
};

export default Image;
