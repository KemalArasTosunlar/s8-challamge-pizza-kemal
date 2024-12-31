import Card from "./Card";
import "./Cards.css";

export default function Cards() {
  return (
    <div className="card-container">
      <Card
        className="card-item-1"
        Img="../../../images/iteration-2-images/cta/kart-1.png"
        
        isFirst={true}
      />
      <Card
        className="card-item-2"
        Img="../../../images/iteration-2-images/cta/kart-2.png"
        
      />
      <Card
        className="card-item-3"
        Img="../../../images/iteration-2-images/cta/kart-3.png"
        
      />
    </div>
  );
}

